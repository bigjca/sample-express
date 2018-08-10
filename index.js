const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('hello world from express!'));
app.listen(3000, ()=> console.log('server up on port 3000...'));