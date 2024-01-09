const express = require('express');

const app = express();

// app.get('/main', (req, res) => {
//     res.status(202).json({ message: 'hello from the serever side!', number: 2 });
// });

// app.post('/post', (req, res) => {
//     res.send('u can post now here!');
// });



const port = 8080;
app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
