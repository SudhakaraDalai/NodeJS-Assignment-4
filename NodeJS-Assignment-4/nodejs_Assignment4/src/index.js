const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.set('views', './views');
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/",(req,res)=>{
    res.status(200).send("Hello world")
 
  })
app.get("/form",(req,res)=>{
  //  res.status(200).send("Hello world")
   res.render("user.ejs")
})

app.post("/add",(req,res)=>{
    var response;
    var num1=(req.body.num1);
    var num2=(req.body.num2);
    if(num1==="" || num2===""){
        response={
            status:"failure"
        }
    }
    else if(isNaN(num1)|| isNaN(num2)){
        response={
            status: "error",
  message: "Invalid data types"

        }
    }
    else if(Number(num1)<-1000000 || Number(num2)<-1000000 || Number(num1)+Number(num2)<-1000000){
        response={
            status: "error",
  message: "underflow"

        }
    }
    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)+Number(num2)>1000000 ){
        response={
            status: "error",
  message: "overflow"

        }
    }
    else{
    response={
        status:"success",  
        message: "the sum of given two numbers", 
        result:Number(num1)+Number(num2)
    }
}
res.end(JSON.stringify(response))
})


app.post("/sub",(req,res)=>{
    var response;
    var num1=(req.body.num1);
    var num2=(req.body.num2);
    if(num1==="" || num2===""){
        response={
            status:"failure"
        }
    }
    else if(isNaN(num1)|| isNaN(num2)){
        response={
            status: "error",
  message: "Invalid data types"

        }
    }
    else if(Number(num1)<-1000000 || Number(num2)<-1000000 || Number(num1)-Number(num2)<-1000000){
        response={
            status: "error",
  message: "underflow"

        }
    }
    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)-Number(num2)>1000000 ){
        response={
            status: "error",
  message: "overflow"

        }
    }
    else{
    response={
        status:"success",  
        message: "the difference of given two numbers", 
        result:Number(num1)-Number(num2)
    }
}
res.end(JSON.stringify(response))
})
app.post("/multiply",(req,res)=>{
    var response;
    var num1=(req.body.num1);
    var num2=(req.body.num2);
    if(num1==="" || num2===""){
        response={
            status:"failure"
        }
    }
    else if(isNaN(num1)|| isNaN(num2)){
        response={
            status: "error",
  message: "Invalid data types"

        }
    }
    else if(Number(num1)<-1000000 || Number(num2)<-1000000 || Number(num1)*Number(num2)<-1000000){
        response={
            status: "error",
  message: "underflow"

        }
    }
    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)*Number(num2)>1000000 ){
        response={
            status: "error",
  message: "overflow"

        }
    }
    else{
    response={
        status:"success",  
        message: "The product of given numbers", 
        result:Number(num1)*Number(num2)
    }
}
res.end(JSON.stringify(response))
})
app.post("/divide",(req,res)=>{
    var response;
    var num1=(req.body.num1);
    var num2=(req.body.num2);
    if(num1==="" || num2===""){
        response={
            status:"failure"
        }
    }
    else if(isNaN(num1)|| isNaN(num2)){
        response={
            status: "error",
  message: "Invalid data types"

        }
    }
    else if( Number(num2)===0){
        response={
            status: "error",
  message: "Cannot divide by zero"
        }
    }
    else if(Number(num1)<-1000000 || Number(num2)<-1000000 || Number(num1)/Number(num2)<-1000000){
        response={
            status: "error",
  message: "underflow"

        }
    }
    else if(Number(num1)>1000000 || Number(num2)>1000000 || Number(num1)/Number(num2)>1000000 ){
        response={
            status: "error",
  message: "overflow"

        }
    }
    else{
    response={
        status:"success",  
        message: "The division of given numbers", 
        result:Number(num1)/Number(num2)
    }
}
res.end(JSON.stringify(response))
})
app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;