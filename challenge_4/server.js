const express = require('express');
const app = express();

app.use(express.static('client/dist'));

app.listen(3000, console.log('Server running on 3000'));
