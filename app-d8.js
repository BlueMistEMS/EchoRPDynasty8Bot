let fs = require('fs');
require("dotenv/config");
const cron = require('node-cron');
let mongoose = require("mongoose");
let startUp = require('./startup.js');
let { google } = require('googleapis');
let interact = require('./dsInteractions.js');
let statsReport = require('./statsReport.js');
let commissionCmds = require('./commissionCmds.js');
let { Client, Collection, GatewayIntentBits } = require('discord.js');

let client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMembers], partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.commands = new Collection();
client.buttons = new Collection();

client.login(process.env.TOKEN);

let fileParts = __filename.split(/[\\/]/);
let fileName = fileParts[fileParts.length - 1];

cron.schedule('0 6 * * FRI', function () { commissionCmds.commissionReport(client); }); // runs at 6:00am every Friday (FRI)
cron.schedule('0 6 * * TUE', function () { commissionCmds.commissionReport(client); }); // runs at 6:00am every Tuesday (TUE)
cron.schedule('0 0 1 * *', function () { statsReport.statsReport(client); }); // runs at 12:00am on the first day of every month
cron.schedule('55 5 * * SUN', function () { commissionCmds.addWeeklyAssets(client); }); // runs at 5:55am every Sunday (SUN)

client.once('ready', async () => {
	console.log(`[${fileName}] The client is starting up!`);
	mongoose.set("strictQuery", false);
	mongoose.connect(process.env.MONGO_URI);
	console.log(`[${fileName}] Connected to Mongo!`);

	// Google Docs Authorization Stuff
	let docsAuth = new google.auth.GoogleAuth({
		keyFile: "./docs-creds.json",
		scopes: "https://www.googleapis.com/auth/docs"
	})
	let docsClient = docsAuth.getClient();
	let googleDocs = google.docs({ version: "v1", auth: docsClient });

	client.docsAuth = docsAuth;
	client.googleDocs = googleDocs.documents;
	console.log(`[${fileName}] Connected to Google Docs!`);


	// Google Drive Authorization Stuff
	let driveAuth = new google.auth.GoogleAuth({
		keyFile: "./drive-creds.json",
		scopes: "https://www.googleapis.com/auth/drive"
	})
	let driveClient = driveAuth.getClient();
	let googleDrive = google.drive({ version: "v3", auth: driveClient });

	client.driveAuth = driveAuth;
	client.driveFiles = googleDrive.files;
	console.log(`[${fileName}] Connected to Google Drive!`);


	// Google Sheets Authorization Stuff
	let sheetsAuth = new google.auth.GoogleAuth({
		keyFile: "./sheets-creds.json",
		scopes: "https://www.googleapis.com/auth/spreadsheets"
	})
	let sheetClient = sheetsAuth.getClient();
	let googleSheets = google.sheets({ version: "v4", auth: sheetClient });

	client.sheetsAuth = sheetsAuth;
	client.googleSheets = googleSheets.spreadsheets;
	console.log(`[${fileName}] Connected to Google Sheets!`);

	let commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); // Find all the files in the command folder that end with .js
	let cmdList = []; // Create an empty array for pushing each command file to
	for (let file of commandFiles) { // For each file in command files group
		let command = require(`./commands/${file}`); // Get the information that is in the file
		console.log(`[${fileName}] Added ${file}!`); // Log that the command was added
		cmdList.push(command); // Push that command to the array
		client.commands[command.name] = command; // Save the command name and command information to the client
	}
	console.log(`[${fileName}] Getting commands for guild ID ${process.env.DISCORD_SERVER_ID}.`);
	let allCommands = await client.guilds.cache.get(process.env.DISCORD_SERVER_ID).commands.set(cmdList) // Sets all the commands
		.catch(console.error);
	let cmdIDs = allCommands.keys();
	for (let i = 0; i < allCommands.size; i++) {
		let cmdID = cmdIDs.next().value;
		let cmdName = await allCommands.get(cmdID).name;
		let permission = client.commands[cmdName].permission;
		if (permission != undefined) { // If no permissions are given, don't update any permissions
			if (permission.length == undefined) { // If the permission isn't already an array (more than 1 permission), turn it into an array as that is what the function requires
				permission = [permission];
			}
			client.guilds.cache.get(process.env.DISCORD_SERVER_ID).commands.permissions.set({ command: cmdID, permissions: permission })
				.catch(console.error);
		}
	}

	interact(client); // Fire whenever an interaction is created
	console.log(`[${fileName}] Connected to ${client.guilds.cache.size} guild(s).`); // Lists the number of guilds that the client is connected to
	let keys = client.guilds.cache.keys(); // Gets the keys for the map object from the guilds object
	for (let entry of keys) { // For each guild
		console.log(`[${fileName}] Connected to guild ID ${entry}.`); // Log the guild Key (guild.id)
	}
	console.log(`[${fileName}] Client is ready.`);

	await startUp.mainStartUp(client);
	await startUp.frontDeskStartUp(client);

	let now = Math.floor(new Date().getTime() / 1000.0);
	let time = `<t:${now}:t>`;

	await client.channels.cache.get(process.env.BOT_LOG_CHANNEL_ID).send(`:bangbang: The ${process.env.BOT_NAME} bot started up at ${time}.`)
});