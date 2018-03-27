const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

// Set client-build
app.use(express.static(path.join(__dirname, '../../client/build')));

app.get('/api', (req, res) => {
  res.json({ express: 'Yeahhh from expresss' });
});

app.listen(port, () => console.log(`Running on localhost:${port}`));
