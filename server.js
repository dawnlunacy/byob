const express = require('express');
const app = express();
var fs = require('fs');
var dataset1

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Music'


app.get('/', (request, response) => {
  response.send('View artist and their albums')
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});