//dependencies
import express from 'express';
import path from 'path';
import pg from 'pg'

const expressPort = 8003;
const{Pool} = pg;
const app = express();
app.use(express.json())

const pool = new Pool ({
    user: 'stephx202',
    password: '2024',
    host: 'localhost',
    database: 'journaldb',
    port: 5432
})

app.use(express.static('public'));


app.listen(expressPort, ()=>{
    console.log('listening on port', expressPort)
})

