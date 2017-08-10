'use strict';

const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err) {
    return console.log("Unable to connect to Database");
  }
  console.log("Connected to Database");

  db.collection('Todos').insertOne({
    text: 'Something again',
    completed: true
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert document', err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Some issue with retrieving documents", err);
  });

  console.log("________________________");
  db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log("Some issue with retrieving documents", err);
  });

  db.close();

});