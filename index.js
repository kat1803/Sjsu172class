express = require('express')

app = express()

app.get('/', () => {
	res.send("Hello World")
})

app.listen(80, ()=>{
	console.log("Server is up")
})
