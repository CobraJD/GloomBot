const { SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play')
        .setDescription('What are you cards to play this turn?'),
    async execute(interaction) {
        const newEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Initiative tracker')
            .setDescription('This is the iniative tracker')
            .setTimestamp(Date.now())
            .addFields([
                { name: "Inox Brute", value: "11", inline: false },
                { name: "Vermling Beast Tyrant", value: "14", inline: false },
                { name: "Bandit Archer", value: "43", inline: false }
            ]);
        const row = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
					.setCustomId('longrest')
					.setLabel('Long Rest')
					.setStyle(ButtonStyle.Primary),
			);

		await interaction.reply({ content: 'What shall your turn be?', embeds: [newEmbed], components: [row], ephemeral:true  });
    },
};