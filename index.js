import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))


const url_api = "http://api.weatherapi.com/v1/current.json?key=dd5b0cc1ed654e6c931173916261801&q=";
const cityName = "jhelum"

app.get("/", async (req, res)=>{
    res.render("weather.ejs");
    
})

app.post("/weather", async (req, res)=>{
    let query = req.body.city;
    console.log(`Query = ${query}`)
    try {
        const result = await axios.get(url_api + query);
        var weather_data = result.data;
        res.render("weather.ejs",{
            info: weather_data
        })
    } catch (error) {
        res.status(404).send("Failed")
    }
    
    
})





app.listen(port, ()=>{
    console.log(`Server is up and open at port ${port}`)
})