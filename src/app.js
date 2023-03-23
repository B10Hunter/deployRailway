import express from "express";


const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(PORT, () => console.log(`servidor en ${PORT }`))

app.get('/', async(req,res) =>{
    
    res.send('Hola Railway')

})