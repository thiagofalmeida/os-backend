const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
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

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '../', 'uploads')));
app.use(routes);

app.listen(3333);
