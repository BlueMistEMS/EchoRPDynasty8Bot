var moment = require('moment');
var { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, ButtonBuilder, ButtonStyle, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports.btnPressed = async (interaction) => {
	try {
		var buttonID = interaction.customId;
		switch (buttonID) {
			case 'addHouseSold':
				var addHouseSoldModal = new ModalBuilder()
					.setCustomId('addHouseSoldModal')
					.setTitle('Log a house that you sold');
				var soldToInput = new TextInputBuilder()
					.setCustomId('soldToInput')
					.setLabel("What is the name and info of the buyer?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - CID - DOB')
					.setRequired(true);
				var lotNumInput = new TextInputBuilder()
					.setCustomId('lotNumInput')
					.setLabel("What is the house lot number?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('1234 Baytree Canyon Rd')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What was the final sale price?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('150000')
					.setRequired(true);
				var locNotesInput = new TextInputBuilder()
					.setCustomId('locNotesInput')
					.setLabel("What is the contact info & notes about the sale?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('956-252-1929, Provided smart locks')
					.setRequired(true);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include photos of GPS & front of house")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('https://i.imgur.com/wgJiq13.jpg, https://i.imgur.com/hv6jVYT.jpg')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var soldToInputRow = new ActionRowBuilder().addComponents(soldToInput);
				var lotNumInputRow = new ActionRowBuilder().addComponents(lotNumInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);
				var locNotesInputRow = new ActionRowBuilder().addComponents(locNotesInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);

				addHouseSoldModal.addComponents(soldToInputRow, lotNumInputRow, priceInputRow, locNotesInputRow, photosInputRow);

				await interaction.showModal(addHouseSoldModal);
				break;
			case 'addWarehouseSold':
				var addWarehouseSoldModal = new ModalBuilder()
					.setCustomId('addWarehouseSoldModal')
					.setTitle('Log a warehouse that you sold');
				var soldToInput = new TextInputBuilder()
					.setCustomId('soldToInput')
					.setLabel("What is the name and info of the buyer?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - CID - DOB')
					.setRequired(true);
				var lotNumInput = new TextInputBuilder()
					.setCustomId('lotNumInput')
					.setLabel("What is the warehouse lot number?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('2345 Grove St')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What was the final sale price?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('250000')
					.setRequired(true);
				var locNotesInput = new TextInputBuilder()
					.setCustomId('locNotesInput')
					.setLabel("What is the contact info & notes about the sale?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('956-252-1929, Upgraded to 5 car garage')
					.setRequired(true);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include photos of GPS & front of warehouse")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('https://i.imgur.com/TBj8voN.jpg, https://i.imgur.com/gLGae7c.jpg')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var soldToInputRow = new ActionRowBuilder().addComponents(soldToInput);
				var lotNumInputRow = new ActionRowBuilder().addComponents(lotNumInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);
				var locNotesInputRow = new ActionRowBuilder().addComponents(locNotesInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);

				addWarehouseSoldModal.addComponents(soldToInputRow, lotNumInputRow, priceInputRow, locNotesInputRow, photosInputRow);

				await interaction.showModal(addWarehouseSoldModal);
				break;
			case 'addPropQuoted':
				var addPropertyQuoteModal = new ModalBuilder()
					.setCustomId('addPropertyQuoteModal')
					.setTitle('Request a quote for a property');
				var clientInfoInput = new TextInputBuilder()
					.setCustomId('clientInfoInput')
					.setLabel("What is the name and phone # of the client?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - Phone Number')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What is the price you estimate it will be?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('850000')
					.setRequired(true);
				var intTypeInput = new TextInputBuilder()
					.setCustomId('intTypeInput')
					.setLabel("What is the requested interior type?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('HighEndV2')
					.setRequired(true);
				var notesInput = new TextInputBuilder()
					.setCustomId('notesInput')
					.setLabel("Any notes about the requested quote?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('House with a view on Rich Bitch Avenue, vibes like Malibu')
					.setRequired(false);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include photos of GPS & front of house")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('Must have multiple photos of the property incl. several diff. sides. Links must be comma separated')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var clientInfoInputRow = new ActionRowBuilder().addComponents(clientInfoInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);
				var intTypeInputRow = new ActionRowBuilder().addComponents(intTypeInput);
				var notesInputRow = new ActionRowBuilder().addComponents(notesInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);

				addPropertyQuoteModal.addComponents(clientInfoInputRow, priceInputRow, intTypeInputRow, notesInputRow, photosInputRow);

				await interaction.showModal(addPropertyQuoteModal);
				break;
			case 'addPropRepod':
				var addPropertyRepodModal = new ModalBuilder()
					.setCustomId('addPropertyRepodModal')
					.setTitle('Log a property that you repossessed');
				var prevOwnerInput = new TextInputBuilder()
					.setCustomId('prevOwnerInput')
					.setLabel("What is the name and info of the prev. owner?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - CID - DOB')
					.setRequired(true);
				var lotNumInput = new TextInputBuilder()
					.setCustomId('lotNumInput')
					.setLabel("What is the property lot number?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('3456')
					.setRequired(true);
				var repoReasonInput = new TextInputBuilder()
					.setCustomId('repoReasonInput')
					.setLabel("What was the reason for the repossession?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('Foreclosure')
					.setRequired(true);
				var notesInput = new TextInputBuilder()
					.setCustomId('notesInput')
					.setLabel("Any notes about the repossession?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('Foreclosure, failure to pay')
					.setRequired(false);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include photos of GPS & front of property")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('https://i.imgur.com/tnLaQWD.jpg, https://i.imgur.com/EZ81DMA.jpg')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var prevOwnerInputRow = new ActionRowBuilder().addComponents(prevOwnerInput);
				var lotNumInputRow = new ActionRowBuilder().addComponents(lotNumInput);
				var repoReasonInputRow = new ActionRowBuilder().addComponents(repoReasonInput);
				var notesInputRow = new ActionRowBuilder().addComponents(notesInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);

				addPropertyRepodModal.addComponents(prevOwnerInputRow, lotNumInputRow, repoReasonInputRow, notesInputRow, photosInputRow);

				await interaction.showModal(addPropertyRepodModal);
				break;
			case 'addTrainCheck':
				var addTrainCheckModal = new ModalBuilder()
					.setCustomId('addTrainCheckModal')
					.setTitle('Request a train activity check');
				var currentOwnerInput = new TextInputBuilder()
					.setCustomId('currentOwnerInput')
					.setLabel("What is the name & CID of the current owner?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - CID')
					.setRequired(true);
				var lotNumInput = new TextInputBuilder()
					.setCustomId('lotNumInput')
					.setLabel("What is the property lot number?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('4567')
					.setRequired(true);
				var notesInput = new TextInputBuilder()
					.setCustomId('notesInput')
					.setLabel("Any notes about the train activity check?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('Neighbor stated saw the owner with a moving truck')
					.setRequired(false);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include 1 photo of GPS & front of house")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('https://i.imgur.com/D0IUm1C.jpg, https://i.imgur.com/Qo10LVH.jpg')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var currentOwnerInputRow = new ActionRowBuilder().addComponents(currentOwnerInput);
				var lotNumInputRow = new ActionRowBuilder().addComponents(lotNumInput);
				var notesInputRow = new ActionRowBuilder().addComponents(notesInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);
				addTrainCheckModal.addComponents(currentOwnerInputRow, lotNumInputRow, notesInputRow, photosInputRow);
				await interaction.showModal(addTrainCheckModal);
				break;
			case 'addMiscSale':
				var addMiscSaleModal = new ModalBuilder()
					.setCustomId('addMiscSaleModal')
					.setTitle('Add a Miscellaneous Sale');
				var itemsSoldInput = new TextInputBuilder()
					.setCustomId('itemsSoldInput')
					.setLabel("What did you sell?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('3x Garage Slots')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What was the total sale price?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('15000')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var itemsSoldInputRow = new ActionRowBuilder().addComponents(itemsSoldInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);
				addMiscSaleModal.addComponents(itemsSoldInputRow, priceInputRow);
				await interaction.showModal(addMiscSaleModal);
				break;
			case 'addHouseRemodel':
				var addHouseRemodelModal = new ModalBuilder()
					.setCustomId('addHouseRemodelModal')
					.setTitle('Log a house remodel that you completed');
				var remodelForInput = new TextInputBuilder()
					.setCustomId('remodelForInput')
					.setLabel("What is the name and info of the owner?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - CID - DOB')
					.setRequired(true);
				var newLotNumNotesInput = new TextInputBuilder()
					.setCustomId('newLotNumNotesInput')
					.setLabel("What is the new lot number, and any notes?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('6789 Grove St, upgraded to HighEndV3, 956-252-1929')
					.setRequired(true);
				var oldLotNumInput = new TextInputBuilder()
					.setCustomId('oldLotNumInput')
					.setLabel("What is the old lot number & street name?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('5678 Grove St')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What was the remodel price?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('35000')
					.setRequired(true);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include photos of GPS & front of house")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('https://i.imgur.com/qTL6xiG.jpg, https://i.imgur.com/jMYxD9d.jpg')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var remodelForInputRow = new ActionRowBuilder().addComponents(remodelForInput);
				var newLotNumNotesInputRow = new ActionRowBuilder().addComponents(newLotNumNotesInput);
				var oldLotNumInputRow = new ActionRowBuilder().addComponents(oldLotNumInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);

				addHouseRemodelModal.addComponents(remodelForInputRow, newLotNumNotesInputRow, oldLotNumInputRow, priceInputRow, photosInputRow);
				await interaction.showModal(addHouseRemodelModal);
				break;
			case 'addWarehouseRemodel':
				var addHouseRemodelModal = new ModalBuilder()
					.setCustomId('addWarehouseRemodelModal')
					.setTitle('Log a warehouse upgrade that you completed');
				var remodelForInput = new TextInputBuilder()
					.setCustomId('remodelForInput')
					.setLabel("What is the name and info of the owner?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName - CID - DOB')
					.setRequired(true);
				var newLotNumNotesInput = new TextInputBuilder()
					.setCustomId('newLotNumNotesInput')
					.setLabel("What is the new lot number, and any notes?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('8910 Route 68, upgraded from XS to Small Warehouse, 956-252-1929')
					.setRequired(true);
				var oldLotNumInput = new TextInputBuilder()
					.setCustomId('oldLotNumInput')
					.setLabel("What is the old lot number & nearest road?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('7891 Route 68')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What was the upgrade price?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('45000')
					.setRequired(true);
				var photosInput = new TextInputBuilder()
					.setCustomId('photosInput')
					.setLabel("Include photos of GPS & front of warehouse")
					.setStyle(TextInputStyle.Paragraph)
					.setPlaceholder('https://i.imgur.com/iKef1iS.jpg, https://i.imgur.com/w1N7n0x.jpg')
					.setRequired(true);

				// meme gallery: https://imgur.com/gallery/Et0Qm

				var remodelForInputRow = new ActionRowBuilder().addComponents(remodelForInput);
				var newLotNumNotesInputRow = new ActionRowBuilder().addComponents(newLotNumNotesInput);
				var oldLotNumInputRow = new ActionRowBuilder().addComponents(oldLotNumInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);
				var photosInputRow = new ActionRowBuilder().addComponents(photosInput);

				addHouseRemodelModal.addComponents(remodelForInputRow, newLotNumNotesInputRow, oldLotNumInputRow, priceInputRow, photosInputRow);
				await interaction.showModal(addHouseRemodelModal);
				break;
			case 'addFinancingAgreement':
				var addFinancingAgreementModal = new ModalBuilder()
					.setCustomId('addFinancingAgreementModal')
					.setTitle('Log a financing agreement that you completed');
				var clientNameInput = new TextInputBuilder()
					.setCustomId('clientNameInput')
					.setLabel("What is the name of the client?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName')
					.setRequired(true);
				var clientInfoInput = new TextInputBuilder()
					.setCustomId('clientInfoInput')
					.setLabel("What is the CID and DOB of the client?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('CID | DOB')
					.setRequired(true);
				var clientContactInput = new TextInputBuilder()
					.setCustomId('clientContactInput')
					.setLabel("What is the contact info for the client?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('phone # | email | bank account #')
					.setRequired(true);
				var lotNumStreetNameInput = new TextInputBuilder()
					.setCustomId('lotNumStreetNameInput')
					.setLabel("What is the lot number and nearest street?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('8912 Paleto Blvd')
					.setRequired(true);
				var priceInput = new TextInputBuilder()
					.setCustomId('priceInput')
					.setLabel("What was the final sale price?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('275000')
					.setRequired(true);

				var clientNameInputRow = new ActionRowBuilder().addComponents(clientNameInput);
				var clientInfoInputRow = new ActionRowBuilder().addComponents(clientInfoInput);
				var clientContactInputRow = new ActionRowBuilder().addComponents(clientContactInput);
				var lotNumStreetNameInputRow = new ActionRowBuilder().addComponents(lotNumStreetNameInput);
				var priceInputRow = new ActionRowBuilder().addComponents(priceInput);

				addFinancingAgreementModal.addComponents(clientNameInputRow, clientInfoInputRow, clientContactInputRow, lotNumStreetNameInputRow, priceInputRow);
				await interaction.showModal(addFinancingAgreementModal);
				break;
			case 'addFinancingPayment':
				var addFinancingPaymentModal = new ModalBuilder()
					.setCustomId('addFinancingPaymentModal')
					.setTitle('Log a financing payment that you received');
				var payersNameInput = new TextInputBuilder()
					.setCustomId('payersNameInput')
					.setLabel("What is the name of the person paying?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('FirstName LastName')
					.setRequired(true);
				var financingNumInput = new TextInputBuilder()
					.setCustomId('financingNumInput')
					.setLabel("What is the financing agreement number?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('H12345')
				var paymentInput = new TextInputBuilder()
					.setCustomId('paymentInput')
					.setLabel("What is the payment amount?")
					.setStyle(TextInputStyle.Short)
					.setPlaceholder('120000')
					.setRequired(true);

				var payersNameInputRow = new ActionRowBuilder().addComponents(payersNameInput);
				var financingNumInputRow = new ActionRowBuilder().addComponents(financingNumInput);
				var paymentInputRow = new ActionRowBuilder().addComponents(paymentInput);

				addFinancingPaymentModal.addComponents(payersNameInputRow, financingNumInputRow, paymentInputRow);
				await interaction.showModal(addFinancingPaymentModal);
				break;
			case 'createEvictionNotice':
				if (interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {

					await interaction.deferReply({ ephemeral: true });
					var currentMsg = interaction.message;

					var realtorName;
					if (interaction.member.nickname) {
						realtorName = interaction.member.nickname;
					} else {
						realtorName = interaction.member.user.username;
					}

					var msgRealtor = currentMsg.embeds[0].data.fields[0].value;
					var msgSaleDate = currentMsg.embeds[0].data.fields[1].value;
					var msgPaymentDate = currentMsg.embeds[0].data.fields[2].value;
					var msgNextPaymentDateString = currentMsg.embeds[0].data.fields[3].value;
					var msgFinanceNum = currentMsg.embeds[0].data.fields[4].value;
					var msgClientName = currentMsg.embeds[0].data.fields[5].value;
					var msgClientInfo = currentMsg.embeds[0].data.fields[6].value;
					var msgclientContact = currentMsg.embeds[0].data.fields[7].value;
					var msgStreetAddress = currentMsg.embeds[0].data.fields[8].value;
					var msgSalePrice = currentMsg.embeds[0].data.fields[9].value;
					var msgDownPayment = currentMsg.embeds[0].data.fields[10].value;
					var msgAmtOwed = currentMsg.embeds[0].data.fields[11].value;
					var msgFinancingAgreement = currentMsg.embeds[0].data.fields[12].value;
					if (currentMsg.embeds[0].data.fields[13]) {
						var msgNotes = currentMsg.embeds[0].data.fields[13].value;
					}

					let newFile = await interaction.client.driveFiles.copy({
						auth: interaction.client.driveAuth, fileId: process.env.EVICTION_TEMPLATE_DOC_ID, resource: { name: `${msgClientName} | Dynasty 8 Eviction Notice` }
					});

					let todayDate = moment().format('MMMM DD, YYYY');
					let todayDatePlus3 = moment().add(3, 'days').format('MMMM DD, YYYY');

					let financingDateUnix = msgSaleDate.replaceAll('<t:', '').replaceAll(':d>', '');
					let financingDate = moment.unix(financingDateUnix).format('MMMM DD, YYYY');

					await interaction.client.googleDocs.batchUpdate({
						auth: interaction.client.driveAuth, documentId: newFile.data.id, resource: {
							requests: [{
								replaceAllText: {
									replaceText: todayDate,
									containsText: {
										"text": "{today_date}",
										"matchCase": true
									}
								},
							}, {
								replaceAllText: {
									replaceText: msgClientName,
									containsText: {
										"text": "{client_name}",
										"matchCase": true
									}
								},
							}, {
								replaceAllText: {
									replaceText: msgStreetAddress,
									containsText: {
										"text": "{street_address}",
										"matchCase": true
									}
								},
							}, {
								replaceAllText: {
									replaceText: financingDate,
									containsText: {
										"text": "{finance_date}",
										"matchCase": true
									}
								},
							}, {
								replaceAllText: {
									replaceText: todayDatePlus3,
									containsText: {
										"text": "{today_plus3}",
										"matchCase": true
									}
								},
							}, {
								replaceAllText: {
									replaceText: msgAmtOwed,
									containsText: {
										"text": "{past_due_amt}",
										"matchCase": true
									}
								},
							}, {
								replaceAllText: {
									replaceText: realtorName,
									containsText: {
										"text": "{realtor_name}",
										"matchCase": true
									}
								},
							}]
						}
					});

					let documentLink = `https://docs.google.com/document/d/${newFile.data.id}`;

					var now = Math.floor(new Date().getTime() / 1000.0);
					var evictionSentDate = `<t:${now}:d>`;

					if (currentMsg.embeds[0].data.fields[13]) {
						var currentEmbed = new EmbedBuilder()
							.setTitle('A new Financing Agreement has been submitted!')
							.addFields(
								{ name: `Realtor Name:`, value: `${msgRealtor}` },
								{ name: `Sale Date:`, value: `${msgSaleDate}`, inline: true },
								{ name: `Latest Payment:`, value: `${msgPaymentDate}`, inline: true },
								{ name: `Next Payment Due:`, value: `${msgNextPaymentDateString}`, inline: true },
								{ name: `Financing ID Number:`, value: `${msgFinanceNum}` },
								{ name: `Client Name:`, value: `${msgClientName}`, inline: true },
								{ name: `Client Info:`, value: `${msgClientInfo}`, inline: true },
								{ name: `Client Contact:`, value: `${msgclientContact}`, inline: true },
								{ name: `Street Address:`, value: `${msgStreetAddress}` },
								{ name: `Sale Price:`, value: `${msgSalePrice}`, inline: true },
								{ name: `Down Payment:`, value: `${msgDownPayment}`, inline: true },
								{ name: `Amount Owed:`, value: `${msgAmtOwed}`, inline: true },
								{ name: `Financing Agreement:`, value: `${msgFinancingAgreement}` },
								{ name: `Notes:`, value: `${msgNotes}\n- [Eviction Notice](${documentLink}) sent by <@${interaction.user.id}> on ${evictionSentDate}.` },
							)
							.setColor('FAD643');
					} else {
						var currentEmbed = new EmbedBuilder()
							.setTitle('A new Financing Agreement has been submitted!')
							.addFields(
								{ name: `Realtor Name:`, value: `${msgRealtor}` },
								{ name: `Sale Date:`, value: `${msgSaleDate}`, inline: true },
								{ name: `Latest Payment:`, value: `${msgPaymentDate}`, inline: true },
								{ name: `Next Payment Due:`, value: `${msgNextPaymentDateString}`, inline: true },
								{ name: `Financing ID Number:`, value: `${msgFinanceNum}` },
								{ name: `Client Name:`, value: `${msgClientName}`, inline: true },
								{ name: `Client Info:`, value: `${msgClientInfo}`, inline: true },
								{ name: `Client Contact:`, value: `${msgclientContact}`, inline: true },
								{ name: `Street Address:`, value: `${msgStreetAddress}` },
								{ name: `Sale Price:`, value: `${msgSalePrice}`, inline: true },
								{ name: `Down Payment:`, value: `${msgDownPayment}`, inline: true },
								{ name: `Amount Owed:`, value: `${msgAmtOwed}`, inline: true },
								{ name: `Financing Agreement:`, value: `${msgFinancingAgreement}` },
								{ name: `Notes:`, value: `- [Eviction Notice](${documentLink}) sent by <@${interaction.user.id}> on ${evictionSentDate}.` },
							)
							.setColor('FAD643');
					}

					let btnRows = addBtnRows();
					await currentMsg.edit({ embeds: [currentEmbed], components: btnRows });

					function addBtnRows() {
						let row1 = new ActionRowBuilder().addComponents(
							new ButtonBuilder()
								.setCustomId('addEvictionNotice')
								.setLabel('Create an Eviction Notice')
								.setStyle(ButtonStyle.Secondary)
								.setDisabled(true),
						);

						let rows = [row1];
						return rows;
					};

					await interaction.editReply({ content: `Successfully created an Eviction Notice document for \`${msgClientName}\` for the \`${msgFinanceNum}\` Financing Agreement.\nDetails about this eviction:\n> Eviction Notice: [Click to view Eviction Notice](<${documentLink}>)`, ephemeral: true });
				} else {
					await interaction.reply({ content: `:x: You must have the \`Administrator\` permission to use this function.`, ephemeral: true });
				}
				break;
			default:
				await interaction.editReply({ content: `I'm not familiar with this button press. Please tag @CHCMATT to fix this issue.`, ephemeral: true });
				console.log(`Error: Unrecognized button press: ${interaction.customId}`);
		}
	}
	catch (error) {
		console.log(`Error in button press!`);
		console.error(error);
	}
};