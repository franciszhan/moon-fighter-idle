// bot.js
const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3000;

// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = process.env.BOT_TOKEN;

app.use(bodyParser.json());

// Create a bot that uses 'webhook' mode
const bot = new TelegramBot(token);
bot.setWebHook(`${process.env.APP_URL}/bot${token}`);

// This route will be used by Telegram to send updates
app.post(`/bot${token}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

// Your bot commands go here
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const gameUrl = process.env.GAME_URL || 'https://moon-fighter-idle.onrender.com/'; // Update with your game URL

  bot.sendMessage(chatId, 'Welcome to Moon Fighter Idle!');
  bot.sendMessage(chatId, 'Click the link below to start playing:', {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play Game',
            url: gameUrl,
          },
        ],
      ],
    },
  });
});

// Start Express server
app.listen(port, () => {
  console.log(`Telegram bot server is running on port ${port}`);
});
