const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {save_user_information, get_total_amount} = require('./models/server_db');

// handing all parsing
app.use(bodyParser.json());

app.post('/', async (req, res) => {
    var email = req.body.email;
    var amount = req.body.amount;

    if (amount <= 1) {
        return_info = {};
        return_info.error = true;
        return_info.message = "Amount should be greater than 1";
        res.send(return_info);
    }
    var result = await save_user_information({"amount": amount, "email": email});
    res.send(result);
})

app.get('/get_total_amount', async (req, res) => {
    var result = await get_total_amount();
    res.send(result);
});

app.listen(3000, () => {
    console.log('Hearing on port 3000');
})