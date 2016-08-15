/**
 * Created by avishnikin on 8/11/2016.
 */
var express = require("express");
var app = express();

//Creating Router() object
var router = express.Router();

// Router middleware, mentioned it before defining routes.

router.use(function(req,res,next) {
    console.log("/" + req.method);
    next();
});

router.use("/user/:id",function(req,res,next){
    console.log(req.params.id)
    if(req.params.id == 0) {
        res.json({"message" : "You must pass ID other than 0"});
    }
    else next();
});

// Provide all routes here, this is for Home page.

router.get("/",function(req,res){
    res.sendFile(__dirname + "/build/index.html")
});

router.get("/about",function(req,res){
    res.sendFile(__dirname + "/src/index.html");
});

router.get("/user/:id",function(req,res){
    res.json({"message" : "Hello "+req.params.id});
});

/*app.use("*",function(req,res){
    res.status(404).send('404');
});*/

// Tell express to use this router with /api before.
// You can put just '/' if you don't want any sub path before routes.

app.use("/api",router);

app.use("*",function(req,res) {
    res.sendFile(__dirname + "/build/404.html");
});
// Listen to this Port

app.listen(8080,function(){
    console.log("Live at Port 8080");
});