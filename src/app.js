import express from "express";


const app = express();
const PORT = process.env.PORT || 8080;






app.get('/', (req,res) =>{
    
    res.send('Hola Railway')

})
app.get("/env",(req,res)=>{
    res.send(`solicitado el entorno: ${process.env.MESSAGE}`)
})


app.get('/bye',(res,req) =>{
    res.send('Adios Railway')
})

app.get("/user",(req,res)=>{
    if(process.env.ENVIRONEMT === "PRODUCTION"){
        res.send('Obtenindo usuario de la base de datos productivaa')
    }
    else{
        res.send(`obteniendo usuario de la base de datos de prueba: ${process.env.TESTUSER}`)
    }
})


app.listen(PORT, () => console.log(`servidor en ${PORT }`))