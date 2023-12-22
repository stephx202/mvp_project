//dependencies. import dotenv after to deploy
import express from 'express';
import path from 'path';
import pg from 'pg'



//port number
const expressPort = 8003;

//create connection string variable after to deploy
const{Pool} = pg;
const app = express();
app.use(express.json())

//for pool. replace with connection string after to deploy
const pool = new Pool ({
    user: 'stephx202',
    password: '2024',
    host: 'localhost',
    database: 'journaldb',
    port: 5432
})

//link public folder
app.use(express.static('public'));

//get request route to all data in journal table using an sql query.
app.get('/journal', (req, res)=>{
    pool.query('SELECT * FROM journal')
    .then((result)=>{
        res.status(200).send(result.rows)
    })
    .catch((error)=>{
        console.errorZ(error);
        res.status(500).send('error sending data')
    })
})








//listen on port
app.listen(expressPort, ()=>{
    console.log('listening on port', expressPort)
})

