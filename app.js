//dependencies. import dotenv after to deploy
import express from 'express';
import path from 'path';
import pg from 'pg';
import 'dotenv/config';


//port number
const PORT= process.env.PORT;

//create connection string variable after to deploy
const{Pool} = pg;
const app = express();
app.use(express.json())


const connectionString = process.env.PG_DATABASE_URL;
console.log(connectionString)
//for pool. replace with connection string after to deploy
const pool = new Pool ({
    // user: 'stephx202',
    // password: '2024',
    // host: 'localhost',
    // database: 'journaldb',
    // port: 5432
    connectionString
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
        console.error(error);
        res.status(500).send('error sending data')
    })
})

//get request route to get data based on the title. response with all contents within same row
app.get('/journal/:title', (req, res)=>{
    const selectedTitle = req.params.title;

    pool.query('SELECT * FROM journal WHERE title = $1', [selectedTitle])
        .then((result)=>{
            if(result.rows.length > 0){
                res.send(result.rows[0]);
             }else{
                 res.status(404).send("Title not found")
             }
        })
        .catch((error)=>{
            console.error(error);
            res.status(500).send('This is an internal issue. Error getting data at', selectedTitle)
        })


})
//post request to add a new journal entry to the database
app.post('/journal', (req, res)=>{
    const {title, affirmation, grateful_for, good_thing, positive_thought} = req.body;
    console.log('recieved data', req.body);
    pool.query('INSERT INTO journal (title, affirmation, grateful_for, good_thing, positive_thought) VALUES ($1, $2, $3, $4, $5)', [title, affirmation, grateful_for, good_thing, positive_thought])
    .then((result)=>{
        res.status(200).json(result.rows[0])
    })
    .catch((error)=>{
        console.error(error)
        res.status(500).send("Error adding journal entry to the database")
    })
})
//delete request to delete a journal entry from the journal database
app.delete('/journal/:title', (req, res)=>{
    const selectedTitle = req.params.title;
    console.log('deleted entry titled: ', selectedTitle)
    pool.query('DELETE FROM journal WHERE title = $1', [selectedTitle])
    .then((result)=>{
        res.status(200).send("entry deleted");
    })
    .catch((error)=>{
        console.error(error);
        res.status(404).send("Error deleting journal entry.");
    });
});



//listen on port
app.listen(PORT, ()=>{
    console.log('listening on port', PORT)
})

