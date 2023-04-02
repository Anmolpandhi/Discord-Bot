# Discord Bot for Crypto Address Requests

This is a Discord bot built with Node.js and the Discord.js library that allows users to submit their crypto wallet addresses and have them sent to a private channel for processing. The bot also sends a confirmation message to the user letting them know that their request has been received and is being processed.

# Requirements

- Node.js installed on your machine
- Discord.js
- A Discord bot token

# Installation

- Clone the repository or download the source code
- Install dependencies with npm install
- Create a .env file and add your Discord bot token with the following format:
- DISCORD_TOKEN=<your_token_here>
- Replace ENTER_PRIVATE_CHANNEL_ID and ENTER_CHANNEL_ID in bot.js with the appropriate channel IDs for your server
- Run the bot with node bot.js

# Usage

Once the bot is running, users can submit their crypto wallet addresses by sending a message to the designated channel specified by designatedChannelID. The bot will automatically send the address to the private channel specified by privateChannelID for processing.
The bot will also send a confirmation message to the user who submitted the address, letting them know that their request has been received and is being processed.
