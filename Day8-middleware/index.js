const express = require('express')
const app = express();

const body_parser = require('body-parser')

//parses req body into json
app.use(express.json()) // req Body



//Custom Middleware
const checkAdmin = (req,res,next) => {
    if (req.query.admin == "true") {
      next();
    } else {
      res.status(400).send("Should be Admin");
    }
}

//Make a CHECK Before all the URL's
//It runs before every API call in the app , It's sequence MATTERs 
// app.use(checkAdmin)
app.use(body_parser.json);


const sendRes = (req,res) => {
    res.status(200)
    res.json(req.query);
};

//Make a CHECK Before any particular URL
// app.get('/',checkAdmin,sendRes);

//Another Way Only Admin Access
// app.get('/' , (req,res,next) => {
//     // console.log("In First");
//     if(req.query.admin == 'true'){
//         next()
//     }else{
//         res.status(400).send("Should be Admin")    
//     }
// }, (req,res) => {
//     res.status(200)
//     res.json(req.query);
// })


//By default Post ki request body ko accept nhi karti , so we use BODY PARSER
app.post('/' , (req,res) => {
    console.log('req.body -> ' , req.body);
    res.json({text : req.body})
})



app.get('/abc' ,  (req,res) => {
    res.send("ABC")
})


app.listen(5000, console.log(`Server is up and running on port`));
