const express = require('express');
//express ek function defination pass krta h which we have to call in app
const  app = express();

const PORT  = 5000 ;

// app.use('/' , "A")
app.get("/", (req, res) => {
  res.send("Hello world");
});

//to send data as json
app.get("/json", (req, res) => {
  res.json({
    name: "John",
    age: "69",
  });
});

//receving query parameter
app.get("/something", (req, res) => {
  res.status(200).send("You should get a 200 OK");
});


//params
app.get('/team/:code', (req, res) => {
	const { code } = req.params;
	if (code == 1) {
		res.send('Welcome to Async Team');
		return;
	}

	res.send('Incorrect PARAM CODE!');
});

app.get("/query", (req, res) => {
  console.log(req.query);
  res.status(200).send(req.query);
});


app.listen(PORT, console.log(`Server is running on ${PORT}`));