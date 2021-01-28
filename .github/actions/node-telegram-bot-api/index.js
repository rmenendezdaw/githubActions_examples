let core = require("@actions/core");
const github = require("@actions/github")
let TelegramBot = require('node-telegram-bot-api');

let git = github.context.payload; 
let token = core.getInput("tokenBot");
let chatid=core.getInput("chatId");
let name = core.getInput("name");

let bot = new TelegramBot(token, {polling: false});
try {
    bot.sendMessage(chatid, `
                            Workflow ejecutado correctamente tras el último commit. Saludos ${name}
                            Email: ${git.head_commit.author.email} /n
                            Name: ${git.head_commit.author.name} /n
                            Username: ${git.head_commit.author.username} /n
                            Message_Commit: ${git.head_commit.message} /n`);
  } catch (error) {
    core.setFailed(error.message);
  }

console.log("Mensaje enviado con exito")