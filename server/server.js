const express = require('express');
const mongo = require('mongodb').MongoClient;
const assert = require('assert');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/views`));

app.use(bodyParser.urlencoded({ extended: false }));
const url = 'mongodb://localhost:27017/mydb';

app.get('/', (req, res, next) => {
  res.send('Welcome to the server...');
});

app.get('/get-data', (req, res, next) => {
  const resultArray = [];
  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    const cursor = db.collection('projects').find();
    cursor.forEach(
      (doc, err) => {
        assert.equal(null, err);
        resultArray.push(doc);
      },
      () => {
        db.close();
        res.send(resultArray);
      },
    );
  });
});

app.get('/get-single-data', (req, res, next) => {
  const q = req.query.title;

  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    const result = db
      .collection('projects')
      .findOne({ title: q }, (err, result) => {
        if (err) throw err;
        console.log(result);
        db.close();
        res.send(result);
      });
  });
});

app.post('/insert', (req, res, next) => {
  const item = {
    title: req.body.title,
    status: req.body.status,
    role: req.body.role,
  };

  mongo.connect(url, (err, db) => {
    assert.equal(null, err);
    db.collection('projects').insertOne(item, (err, result) => {
      assert.equal(null, err);
      console.log('Item inserted');
      db.close();
    });
  });

  res.redirect('/');
});

app.post('/update', (req, res, next) => {
  const projectTitle = req.query.title;
  const projectStatus = req.query.status;
  console.log(projectTitle);

  mongo.connect(url, (err, db) => {
    if (err) throw err;

    const myquery = { title: projectTitle };
    const newvalues = { $set: { status: projectStatus } };
    db.collection('projects').updateOne(myquery, newvalues, (err, res) => {
      if (err) throw err;
      console.log('1 document updated');
      db.close();
    });
  });
  res.redirect(`/flow?title=${projectTitle}`);
});

app.post('/delete', (req, res, next) => {});

app.get('/success', (req, res) => {
  res.send('Success');
});

app.listen(5000);

// dbo.collection("customers").insertOne(myobj, function (err, res) {
//   if (err) throw err;
//   console.log("1 document inserted");
//   db.close();
// });

// Updating something in a specific document
// db.projects.updateOne(
//   {
//     "title" : "designsystem"
//   },
//   {$set : {
//     "status" : "ideation"
//   }}
// )
