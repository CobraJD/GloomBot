const { pagination, TypesButtons, StylesButton } = require('@devraelfreeze/discordjs-pagination');
const { ButtonStyle } = require('discord.js'); // Discord.js v14+
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const embed1 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Hand tracker')
    .setDescription('This is your current hand')
    .setTimestamp(Date.now())
    .setImage("https://gameslikefinder.com/wp-content/uploads/tinkerer-cards-energizing-tonic.jpg");

const embed2 = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Initiative tracker 2nd Page')
    .setDescription('This is the iniative tracker')
    .setTimestamp(Date.now())
    .setImage("https://gameslikefinder.com/wp-content/uploads/tinkerer-cards-enhancement-field.jpg")
    ]);

// Make Embeds using DiscordJS package
const pages = [embed1, embed2];

const buttons = [
    { label: 'Previous', emoji: '⬅', style: ButtonStyle.Danger },
    { label: 'Next', emoji: '➡', style: ButtonStyle.Success },
]

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hand')
        .setDescription('Displays the hand of current player'),
    async execute(interaction, client) {
        await pagination({
            embeds: pages, // Array of embeds objects
            author: interaction.member.user,
            interaction: interaction,
            ephemeral: true,
            time: 40000, // 40 seconds
            disableButtons: false, // Remove buttons after timeout
            fastSkip: false,
            pageTravel: false,
            buttons: [
                {
                    value: TypesButtons.previous,
                    label: 'Previous Page',
                    style: StylesButton.Primary
                },
                {
                    value: TypesButtons.next,
                    label: 'Next Page',
                    style: StylesButton.Success
                }
            ]
        });
    }
}