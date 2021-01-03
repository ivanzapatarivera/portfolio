const express = require('express');
const app = express();

const logger = require('morgan');

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('./assets'));
app.use(require('./routes/html-routes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
});