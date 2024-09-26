// bot.js
const TelegramBot = require('node-telegram-bot-api');
const token = process.env.BOT_KEY;
const bot = new TelegramBot(token, { polling: true });

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const gameUrl = 'www.google.com'; // Replace with your game URL

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
