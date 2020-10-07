const express =require('express');
const app=express();
const foodTruck = require('./httpDatas');
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/foodtruck/:posX/:posY',foodTruck.getFoodTruck)
 // console.log(res);

app.listen(3000, ()=>{
    console.log("Serveur en écoute")
})