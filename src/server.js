const express = require('express');
const routes = require('./routes');

const app = express();

// req.query = filtros (get)
// req.params = route params (put e delete)
// req.body = corpo da req (post e put)

app.use(express.json());
app.use(routes);

app.listen(3333);
