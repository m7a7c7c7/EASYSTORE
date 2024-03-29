const APIRoutes = require('./routes')
const express = require('express');
const app = express();
const cors= require('cors');
const port = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

APIRoutes(app);

app.listen(port, () => {
    console.log('My port ' + port);
});

