let core = require("@actions/core");
let TelegramBot = require('node-telegram-bot-api');

let token = core.getInput("tokenBot");
let chatid=core.getInput("chatId");
let name = core.getInput("name");

let bot = new TelegramBot(token, {polling: false});
try {
    bot.sendMessage(chatid, "Workflow ejecutado correctamente tras el último commit. Saludos " + name);
  } catch (error) {
    core.setFailed(error.message);
  }

console.log("Mensaje enviado con exito")