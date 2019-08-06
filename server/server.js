require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());


/**
 * USERS METHODS
 */
app.get('/usuario', (req, res) => {
    res.json('GET Usuario');
});

app.get('/usuario/:id', (req, res) => {
    let id = req.params.id;

    res.json({
        id
    });
});

app.post('/usuario', (req, res) => {
    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            success: false,
            msg: 'El nombre es necesario'
        });
    }

    res.json({ success: true, data: body });
});

app.put('/usuario', (req, res) => {
    res.json('PUT Usuario');
});

app.delete('/usuario', (req, res) => {
    res.json('DELETE Usuario');
});



app.listen(process.env.PORT, () => {
    console.log('Listening on port 3000');
});