const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/" ,(req,res) => {
    const url = "https://api.kanye.rest";
    https.get(url, (response) => {
        console.log(response.statusCode);
        response.on("data" , (data) =>{
            let quote = JSON.parse(data);
            let theQuotes = quote.quote;
            console.log(theQuotes);
            res.render("quote" ,{theQuotes: theQuotes});
        })
    })
    
})
// document.querySelector("button", () => {

// })

app.listen(port , () => {
    console.log("Server running at port " + port);
})

