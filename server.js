const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

const app = express();

const PORT = process.env.PORT || 3001;



//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


//GET Routes to files
app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, './public/index.html'))
});

//Path to notes 
  app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
  });


//Path to index
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});