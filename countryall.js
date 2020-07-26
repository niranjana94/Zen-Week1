const fs = require('fs');
var allCountry = JSON.parse(fs.readFileSync('C:/Users/Prasanna/db.json').toString());  
allCountry['Countries'].forEach((data,index) =>{
    data.id = index+1;
});
fs.writeFile('C:/Users/Prasanna/db.json', JSON.stringify(allCountry));
