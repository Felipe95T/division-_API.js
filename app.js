const express = require("express")

const app = express()
const port = 5000

//rutas
app.get('/api', (req, res) => {

    return res.status(200).json({msge: "Bienvenido a la division XD"})

})

//division



app.get('/divi/:num1/:num2', (req, res) => {

    let result = parseInt(req.params.num1) / parseInt(req.params.num2)
    console.log(req.params)

    return res.status(200).json({result: result})

})

app.get('/divi', (req, res) => {
    // /divi?num1=90&&num2=3
    let result = parseInt(req.query.num1) / parseInt(req.query.num2) //NaN
    console.log(req.query)

    return res.status(200).json({result: result})

})

app.listen(port, () => console.log(`Escuchando el puerto ${port}`))