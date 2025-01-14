let dbCmds = require('../dbCmds.js');
const editEmbed = require('../editEmbed.js');
let { PermissionsBitField } = require('discord.js');

module.exports = {
	name: 'resetstats',
	description: 'Resets the statistics of the specified user back to 0',
	options: [
		{
			name: 'user',
			description: 'The user you\'d like to check statistics on',
			type: 6,
			required: true,
		},
	],
	async execute(interaction) {
		if (interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
			let user = interaction.options.getUser('user');
			let personnelData = await dbCmds.readPersStats(user.id)
			if (personnelData !== null) {
				await dbCmds.resetPersStats(user.id);

				await editEmbed.editMainEmbed(interaction.client);

				await interaction.reply({ content: `Successfully reset statistics for <@${user.id}>.`, ephemeral: true });
			}
			else {
				await interaction.reply({ content: `:exclamation: <@${user.id}> does not have any statistics yet.`, ephemeral: true });

			}
		}
		else {
			await interaction.reply({ content: `:x: You must have the \`Administrator\` permission to use this function.`, ephemeral: true });
		}
	},
};