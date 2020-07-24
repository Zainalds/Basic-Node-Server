let express = require("express")
let ourApp = express()


ourApp.use(express.urlencoded({extended: false}))


//What to do when the browser receives a get request.
ourApp.get('/', function(req, res){
    res.send(`
        <form action="/answer" method="POST">
            <p>What color is the sky on a clear and sunny day?</p>
            <input type="text" name="skyColor" autocomplete="off">
            <button>Submit Answer</button>
        </form>
    
    `)
})
//What to do when the browser receives information from a get request
ourApp.post('/answer', function(req, res){
    if(req.body.skyColor.toUpperCase() == "BLUE"){
        res.send(`
            <p>Congrats, that is the correct answer</p>
            <a href="/" >Back to home page</a>
        `)
    }else{
        res.send(`
        <p>Sorry that is incorrect</p>
        <a href="/" >Back to home page</a>
    `)
    }
})
ourApp.listen(3000)