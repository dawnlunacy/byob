const express = require('express');
const app = express();
var fs = require('fs');
var dataset1
// const ahrefskwDataSet = require('./Turing.io-AHREFSKW-Data.csv')

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Turing/s SEO Ranking Factors'
// const datasets = ['./Turing.io-AHREFSKW-Data.csv', './Turing.io-BrightedgeKW-Data.csv'];
// console.log(ahrefskwDataSet)
// const ahrefsk = () => {
//   var 
// }

app.get('/', (request, response) => {
  response.send('Ready to figure out keywords to target?')
})


function cvsHandler(req, response) {
  fs.readFile('./Turing.io-AHREFSKW-Data.csv', function (error, data) {

    if (error) {
      return console.log(error)
    }
    //Convert and store csv information into a buffer. 
    dataset1 = data.toString();
    console.log("data", dataset1)

    //Store information for each individual keyword in an array index. Split it by every newline in the csv file. 
    const convertData = [];
    const headers = dataset1[0].split(',');
    for( var i = 1; i < dataset1.length; i++) {
      var data = dataset1[i].split(',');
      var blankSlate = {};
      for ( var j = 0; j < dataset1.length; j++) {
        blankSlate[headers[j].trim()] = data[j].trim();
      }
      convertData.push(blankSlate)
    }
    JSON.stringify(convertData)
    console.log(convertData)
    response.send(convertData)
  })
}

cvsHandler()

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});