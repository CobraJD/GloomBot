const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('id')
		.setDescription('Tells the user their ID'),
	async execute(interaction) {
		await interaction.reply(`Your ID: ${interaction.user.id}`);
	},
};