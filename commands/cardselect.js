const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cards')
        .setDescription('Choose cards from hand')
        .addSubcommand(subcommand =>
            subcommand
                .setName('hand')
                .setDescription('Info about a user'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('discard')
                .setDescription('Info about the server'))
        .addSubcommand(subcommand =>
            subcommand
                .setName('lost')
                .setDescription('Info about the server')),
    async execute(interaction) {

        const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);

        await interaction.reply({ content: 'Select your first card', components: [row]});

        const row2 = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					),
			);

        await interaction.followUp({ content: 'Select your second card', components: [row2]});
    }
};