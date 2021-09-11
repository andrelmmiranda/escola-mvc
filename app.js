const express = require('express');
const app = express();
const consign = require('consign')
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname, '/views');
app.use(express.urlencoded({ extend: true }));
app.use(express.json());
app.use("/public", express.static('./public/'));

consign().include('connection').include('routes').into(app);

app.listen(port, ()=>{
    console.log(`On-line na porta:${port};`);
});