const express = require('express');
const mysql = require('mysql');
//const bodyParser = require("body-parser");

const app = express();

// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4100');
//     res.setHeader('Access-Control-Allow-Headers',
//      'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    
//     if(req.method === 'OPTIONS') {
//         res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
//         return res.status(200).json({});
//     }
    
//  });

//app.use(bodyParser.json);

// Create connection
const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database: "studentdatabase"
});

// Connect
con.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});


// Create DB
app.get('/createdb', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let sql = 'CREATE DATABASE nodemysql';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.get('/getCustomers', (req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    con.query("SELECT * FROM customers", (err,rows,fields) =>{
        if(!err){
            res.send(rows);
        } else {
            console.log(err);
        }        
    })
})


// Create DB
app.get('/createdb', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

// Create table
app.get('/createpoststable', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Posts table created...');
    });
});

// Insert post 1
app.get('/addpost1', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let post = {title:'Post One', body:'This is post number one'};
    let sql = 'INSERT INTO posts SET ?';
    let query = con.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 1 added...');
    });
});

// Insert post 2
app.get('/addpost2', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let post = {title:'Post Two', body:'This is post number two'};
    let sql = 'INSERT INTO posts SET ?';
    let query = con.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post 2 added...');
    });
});

// Select posts
app.get('/getposts', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let sql = 'SELECT * FROM posts';
    let query = con.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send(results);
    });
});

// Select single post
app.get('/getpost/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let sql = `SELECT * FROM posts WHERE id = ${req.params.id}`;
    let query = con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post fetched...');
    });
});

// Update post
app.get('/updatepost/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let newTitle = 'Updated Title';
    let sql = `UPDATE posts SET title = '${newTitle}' WHERE id = ${req.params.id}`;
    let query = con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post updated...');
    });
});

// Delete post
app.get('/deletepost/:id', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); //put '*' if want to allow all the origins
    let newTitle = 'Updated Title';
    let sql = `DELETE FROM posts WHERE id = ${req.params.id}`;
    let query = con.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Post deleted...');
    });
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});