const axios = require('axios');
const calcul = require('./calculDistance');
const getFoodTruck = (request,response) => {
    var test=[];
    const posX = parseFloat(request.params.posX);
    const posY = parseFloat(request.params.posY);
    console.log(posX);
    console.log(posY);
    axios.get('https://87c2d6ba1b33.ngrok.io/')
    .then(res => {
        res.data.forEach(element => {
            var calculTotal = calcul.getDistanceFromLatLonInKm(element.positionX,element.positionY,posX,posY)
            console.log(calculTotal);
            var obj ={
                name:element.nom,
                distance:calculTotal
            }
            test.push(obj);
        })
        console.log(test)
        response.status(200).json(test);
    })
    .catch(error => {
        var calculTotal = calcul.getDistanceFromLatLonInKm(54.784,-1.254,50.4685,-2.4561)
        console.log(calculTotal);
    });
}
module.exports={getFoodTruck};