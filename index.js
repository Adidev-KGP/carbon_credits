const express = require('express');
const apiRoutes = require('./routes/api');
const path = require('path');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'data')));

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
