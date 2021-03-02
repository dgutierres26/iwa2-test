const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parse');

var app = express();
var port = 8000;

app.get('/hello', (req, res) => {

    res.send("Hello BScBest!");
    
});


// http.createServer((req, res)=>{
//   res.write(users.join(", ")); //display the list of users on the page
//   res.write("\n\n"+emails.join(", ")); //display the list of users on the page
//   res.end(); //end the response
// }).listen(8000); // listen for requests on port 8000

let users = []; // names of users will be stored here
let email = [];
(async function getNames(){
  try{
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    users = data.map(user=>user.name);
//    emails = data.map(email=>email.email);
    console.log(users);
//    console.log(emails);
  } catch(error){
    console.log(error)
  }
})()

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});


