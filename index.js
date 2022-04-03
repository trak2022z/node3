//Setting Errors
"use strict";

const express = require('express');
const app = express();


//Route path: /posts3
//Request URL: https://node3.tomkrok1.repl.co/posts3?state=wa&city=Seattle
//req.query: { "state": "wa", "city": "Seattle" }
app.get("/posts3", function (req, res) {
  let state = req.query.state; // wa
  let city = req.query.city; // Seattle

  //eroor400
  if (!(state && city)) {
    res.status(400).send("Error: Missing required city and state query parameters.");
  } else {
    res.send("You sent a request for " + city + ", " + state);
  }
  
});

//app.listen(8080);
//Heroku
app.listen(process.env.PORT || 3000);