const express = require('express');
const app = express();


let quotes = [
  "Life isn’t about getting and having, it’s about giving and being. -Kevin Kruse ",
  "People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if you’re lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.— Carrie Ann Moss",
  "Some women choose to follow men, and some choose to follow their dreams. If you’re wondering which way to go, remember that your career will never wake up and tell you that it doesn’t love you anymore. — Lady Gaga",
  "Life is what happens to us while we are making other plans.― Allen Saunders",
  "Life isn’t about finding yourself. Life is about creating yourself.― George Bernard",
  "You are the sum total of everything you’ve ever seen, heard, eaten, smelled, been told, forgot ― it’s all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.― Maya Angelou",
  "Keep your face always toward the sunshine, and shadows will fall behind you.– Walt Whitman",
  "Your talent determines what you can do. Your motivation determines how much you’re willing to do. Your attitude determines how well you do it.—Lou Holtz",
  "The happiness of your life depends on the quality of your thoughts.– Marcus",
];


app.get('/get-quote', (req, res) => {
  let x = Math.floor(Math.random()*quotes.length);
  let quote = quotes[x];
  res.send(quote);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
