const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes').default.default;

const app = express();

mongoose.connect('mongodb+srv://tfalmd:tfalmd@omnistack-f5hfd.mongodb.net/omni?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// req.query = filtros (get)
// req.params = route params (put e delete)
// req.body = corpo da req (post e put)

app.use(express.json());
app.use(routes);

app.listen(3333);
