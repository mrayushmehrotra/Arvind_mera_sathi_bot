const TelegramBot = require('node-telegram-bot-api');


// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = '6759433492:AAEy6wRuJkzfqk1hpx-cDkxhE7krX6kwHc8';

// Create a new Telegram bot instance
const bot = new TelegramBot(token, { polling: true });

// Replace 'chatId' with the chat ID where you want to send the image


// Handle incoming messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const Fname = msg.from.first_name;
  const Lname = msg.from.last_name;
  const username = msg.from.username;
  const name = [Fname, Lname, username].filter(Boolean).join(' ');
  bot.sendMessage(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8i6XMdBd9lEBQ3dLh2VfD9ecwDPmJCDOxtsiAkxe9DwlkWeKOhmpBjeq57O41yD6CjWo&usqp=CAU')
  bot.sendMessage(chatId, `${name} Phir Krne laga Dab Dab Dab Dab` + " Teri Chip ka remote mere haat me hai");
  bot.sendMessage(chatId, "Na Mane ! Na Mane");
  bot.sendMessage(chatId,"https://media.tenor.com/sCxA5fbEf-oAAAAd/arvind-mera-sathi-arvind-bhaiya.gif")

});
