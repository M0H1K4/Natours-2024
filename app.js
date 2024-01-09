const fs = require('fs');
const express = require('express');
const app = express();

// app.get('/main', (req, res) => {
//     res.status(202).json({ message: 'hello from the serever side!', number: 2 });
// });

// app.post('/post', (req, res) => {
//     res.send('u can post now here!');
// });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: {
      tours,
    },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
