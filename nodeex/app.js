const express=require('express');
const bodyParser=require('body-parser');
const http = require('http');

const cors=require('cors');

const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

let port = process.env.PORT || 8000;

app.post('/post-here',function(req,res){
    //here request comes from the client who is using the service like if the front
    //end is angular then it is coming from maybe form element.
    console.log(req.body);
    res.status(200).send({"message":"data received"});
});

app.get('/',function(req,res){
    res.send('Server is running on port '+port);
});

app.get('/:id',function(req,res){
    var id=req.params.id;
    res.send('path param passing : '+id);
});

app.get('/query',function(req,res){
    var id=req.query.id;
    res.send('query param passing : '+id);
});

app.listen(port,function(){
    console.log('server is up and sunning on port '+port);
});

