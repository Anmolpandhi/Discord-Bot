const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

const privateChannelID = 'ENTER_PRIVATE_CHANNEL_ID';
const designatedChannelID = 'ENTER_CHANNEL_ID';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;

    if (message.channel.id === designatedChannelID) {
        const address = message.content;
        const poolPmUrl = `https://pool.pm/${address}`;

        const privateChannel = await client.channels.fetch(privateChannelID);

        const embedPrivate = new EmbedBuilder()
            .setColor('#00FF00')
            .setDescription(`New address request from <@${message.author.username}> (${message.author.id}): ${poolPmUrl}`);
        privateChannel.send({ embeds: [embedPrivate] });

        const embedMessage = new EmbedBuilder()
            .setColor('#00FF00')
            .setDescription(`Thank you, <@${message.author.id}>. Your request is in process and it will take 24-48 hours to complete.`);

        message.channel.send({ embeds: [embedMessage] });
    }
});


client.login('ENTER_TOKEN_ID');









