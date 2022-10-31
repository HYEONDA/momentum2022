const quotes = [
  {
     quote: "It's not over yet.",
     author: "Hinata Shoyo"
  },
  {
    quote: "Just jump high and fast as you can.i will devote the ball to you",
    author: "kageyama Tobio"
  },
  {
    quote: "There's no need to applaud.",
    author: "Kita Sinsuke"
  },
  {
    quote: "it's okay.you are good at blocking.",
    author: "Sna Lintaro"
  },
  {
    quote: "what is it?i'm hungry.",
    author: "Mia Osamu"
  },
  {
    quote: "You want to accept anything.Because i'm a setter!",
    author: "Mia Atsmu"
  },
  {
    quote: "Nice recive.",
    author: "Kageyama Tobio"
  },
  {
    quote: "There's no need of memories!",
    author: "Inarizaki"
  },
  {
    quote: "Be a winner and come back!",
    author: "Ukai Keyshin,Wasajew Tanji"
  },
  {
    quote: "You are the strongest with me!",
    author: "Hinata Shoyo,Kageyama Tobio"
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
