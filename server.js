const express = require('express');
const db = require('./connect');
var format = require('date-fns/format');
const app = express();
const cors = require('cors');
const port = 5000;
app.use(cors());


app.post('/order', (req, res) => {
    /**
     * 
     * perform db queries here
     * 
     * **/
    const date = format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
    res.status(200).send({date});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})