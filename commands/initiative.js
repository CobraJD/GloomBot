const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('initiative')
        .setDescription('Displays the current initiative tracker'),
    async execute(interaction, client) {
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
        await interaction.reply({ embeds: [newEmbed] });
    }
}