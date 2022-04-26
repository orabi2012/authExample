 const express = require('express')
const app = express()

app.set('view-engine' , 'ejs')
app.use(express.urlencoded({extended :false}))


app.use(express.static(__dirname + '/public'));

const port = 3000;

app.get('/', (req, res) => {

    res.render('index.ejs' , {user : "Ahmed Orabi"});
   // res.send('Hello World!')
} )


app.get('/login', (req, res) => {

    res.render('login.ejs' );
   // res.send('Hello World!')
} )

app.post('/login', (req, res) => {

   
} )

app.get('/register', (req, res) => {

    res.render('register.ejs' );
   // res.send('Hello World!')
} )


app.post('/register', (req, res) => {

  console.log(req.body.name )  
  res.status(200).send(req.body.name)
   
} )

app.listen(port, () => console.log(`Example app listening on port ${port}!`))