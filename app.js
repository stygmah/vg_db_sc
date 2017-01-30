//Node modules
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const path = require('path');
//Other Const
const requestAPI = require('./requestAPI/requestAPI');
const port = process.env.PORT || 3000;



/////////////////////////////
//Setup
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use("/public", express.static(path.join(__dirname, 'public')));

/*Helpers*/
hbs.registerHelper('getCurrentYear',()=>{
  return new Date().getFullYear();
});
/////////////////////////////

/*maintenance*/
app.use((req,res,next)=>{
  var mainten = false;
  if(mainten){
    res.render('maintenance.hbs');
  }
  next();
});



/*Load home view*

*****************/
app.get('/', (req, res) => {
  res.render('home.hbs',{
    pageTitle: 'Home'
  });
});

/*Load game view*

****************/
app.get('/gameView', (req, res) => {
  requestAPI.requestGame(req.query.id, (val)=>{

      res.render('gameView.hbs',{
      pageTitle: val[0].name,
      gameTitle: val[0].name,
      image: requestAPI.imageTemp+val[0].cover.cloudinary_id || "no image",
      summary: val[0].summary || "this game has no description yet",
      developers: val[0].developers
    });
  });
});

/*Game not found view*

**********************/

/*Bad request view*

*******************/
app.get('/badRequest', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

////////////////


////////////////
/*Server ON*/
app.listen(port, () => {
  console.log('Server is up on port '+port);
});