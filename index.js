const express = require('express');
let app = express();
 
app.get('/from/:name', function (req, res) {

  let name = req.params["name"]
              .split('-')
              .join(' ');
              
  res.send('hello world, from ' + name);

})
 
app.listen(process.env.PORT);
