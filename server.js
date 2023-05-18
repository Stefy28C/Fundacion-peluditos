const express =require('express')
const initDB=require('./config/Conexion')
const app =express()

const port =3000

app.listen(port,()=>{
    console.log('La aplicacion esta en linea');
})

initDB()