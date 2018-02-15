const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('working');
})

app.listen(3000, () => {
  console.log('working for the man every night and day.....');
})


/*

/ --> = this is working
/signin --> POST = success/fail
/register --> POST = user
/profile/:userId --> GET = user
/image PUT --> user


*/
