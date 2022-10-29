const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// handing all parsing
app.use(bodyParser.json());

app.post('/', (req, res) => {
    var email = req.body.email;
    var amount = req.body.amount;

    res.send({"amount": amount, "email": email});
})

app.listen(3000, () => {
    console.log('Hearing on port 3000');
})