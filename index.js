const venom = require("venom-bot");

venom
  .create()
  .then((client) => start(client))
  .catch((error) => {
    console.log(error);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === "hi") {
      client.sendText(message.from, "Hello, I am MARV-KING Bot 🤖");
    }
  });
}