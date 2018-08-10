const express = require('express')
const app = express();

app.get('/', (req, res) => res.send('hello world from express!'));
app.listen(8080, ()=> console.log('server up on port 8080...'));