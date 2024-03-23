const { Client } = require('discord.js-selfbot-v13');
const client = new Client({checkUpdate:false}); 
const express = require("express")
const app = express();
var listener = app.listen(process.env.PORT || 2000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>`)
});

client.on('ready', async () => {
  console.log(`${client.user.username} is Ready For Working 24/7!`);
})

client.login(process.env.token);