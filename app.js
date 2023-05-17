const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

var hits = []

app.get("/", (req, res) => {
	res.send("Home");
})

app.get("/hitted", (req,res) => {
	res.send(hits)
})

app.get("/delete", (req,res) => {
	hits = [];
	res.json({message: "Hits Cleared!"})
})

app.get("/hit", (req, res) => {
	const {params, query, data, rawHeaders, httpVersion, url, method, baseUrl} = req;
	const {path, methods, host, connection, accept}= req.route;
	const {outputData, outputSize, header, server} = req.res;
	
	hit = {params, query, data,httpVersion, url, method, baseUrl, path, methods,  rawHeaders, outputData, outputSize, header, server: req.res.socket.server};
	hits.push(hit);
	
	console.log("hit");
	
	res.status(200).json(hit);
})

app.listen(3000, ()=>{
	console.log("Connected to port 3000");
})
