const express = require('express');
let app = express();
 
app.get('/from/:name', function (req, res) {

  let name = req.params["name"]
              .split('-')
              .join(' ');
              
  res.send('happy birthday gavin, have a great day mate all the best. from everyone at triptease and ' + name);

})
 
app.listen(process.env.PORT);
