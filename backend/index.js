require('dotenv').config({path: './configs/config.env'})
const express = require('express')
const app = express()

// Connect to the database object
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

const PORT = process.env.PORT || 5000
app.use(express.json())

const collection = client.db("sample_books").collection("book_details")

app.get('/', (req, res)=>{
  res.send('Server is working fine')
})

app.get('/books', (req, res)=>{

  client.connect(err => {
    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      res.json(result);
    });
  })

})

app.get('/add', (req, res)=>{
  collection.insertMany([], (err,success)=>{
    if (err) throw err;
    res.json(success)
  })
})

app.get('/search/:keyword', (req, res)=>{
  let query = req.params.keyword
  let words = query.split(" ")
  words.forEach(i =>{
    console.log(i)
  })
  collection.find({'longDescription': { $regex: query} }).toArray((err, result) => {
    if (err) throw err;
    res.json(result);
   });
})

app.listen(PORT, ()=>{})