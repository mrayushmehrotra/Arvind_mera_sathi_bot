const TelegramBot = require('node-telegram-bot-api');
const env = require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");



// Replace 'YOUR_BOT_TOKEN' with your actual bot token
const token = process.env.BOT_API;

// Create a new Telegram bot instance
const bot = new TelegramBot(token, {
  webHook: {
    port: 8443,  // You can use any available port
  },
});

const webhookUrl = `https://arvind-mera-sathi-bot.vercel.app/webhook`; // Replace with your actual domain and port
bot.setWebHook(webhookUrl);
// Replace 'chatId' with the chat ID where you want to send the image


// Handle incoming messages
app.use(bodyParser.json());
app.post('/webhook', (req, res) => {
  const update = req.body;
  
  // Handle the incoming update
  if (update.message) {
    const msg = update.message;
    const chatId = msg.chat.id;

    const Fname = msg.from.first_name;
    const Lname = msg.from.last_name;
    const username = msg.from.username;
    const name = [Fname, Lname, username].filter(Boolean).join(' ');
    bot.sendMessage(chatId, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8i6XMdBd9lEBQ3dLh2VfD9ecwDPmJCDOxtsiAkxe9DwlkWeKOhmpBjeq57O41yD6CjWo&usqp=CAU')
    bot.sendMessage(chatId, `${name} Phir Krne laga Dab Dab Dab Dab` + " Teri Chip ka remote mere haat me hai");
    bot.sendMessage(chatId, "Na Mane ! Na Mane");
    bot.sendMessage(chatId,"https://media.tenor.com/sCxA5fbEf-oAAAAd/arvind-mera-sathi-arvind-bhaiya.gif")
  }
  res.sendStatus(200);
});  

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "@yamete_kadurasai_bot"
  });
});
app.listen(8080, () => {
  console.log('Server is on Port 8080');
});
