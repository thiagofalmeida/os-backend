const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

require('dotenv/config');

const app = express();

mongoose.connect(process.env.MONGO_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = filtros (get)
// req.params = route params (put e delete)
// req.body = corpo da req (post e put)

app.use(express.json());
app.use(routes);

app.listen(3333);
