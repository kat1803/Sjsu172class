express = require('express')

app = express()

app.get('/', () => {
	res.send("Hello World")
})

app.listen(88, ()=>{
	console.log("Server is up")
})