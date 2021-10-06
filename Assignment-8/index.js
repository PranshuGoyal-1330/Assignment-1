const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const Visitor=require('./models/visitor');
const seedDB=require('./seed');
const methodOverride=require('method-override');
const mail = require('@sendgrid/mail');
const { send } = require('process');
const { EmailAddress } = require('@sendgrid/helpers/classes');


//Install mongoose express ejs method-override nodemon
//also-
//npm install --save@sendgrid/mail



//--------------------------------------------------------
//Please Add Your Passwords
//1.Monggose Atlas Password in place of<Yours MongoAtlas Password>
//2.Send Grid Api Key in place of Yours Sendgrid api key
//--------------------------------------------------------

mongoose.connect('mongodb+srv://pranshugoyal:<Yours MongoAtlas Password>@cluster0.xjb2n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(()=>console.log('Db Connected'))
.catch((err)=>console.log(err));


// seedDB();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'/views'));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname,'public')));







// ROUTE
app.get('/',async(req,res)=>{
  const visitors=await Visitor.find({});
 
  res.render('index',{visitors});
});



//Index Route
app.get('/visitors',async(req,res)=>{
   const visitors=await Visitor.find({});
  
   res.render('index',{visitors});
});

//New Route
app.get('/visitors/new',(req,res)=>{
    res.render('new');
});

//Create
app.post('/visitors',async(req,res)=>{

    const{name,phone,email,date}=req.body;
    await Visitor.create({name,phone,email,date});
    
    //send Entry Email
const sgMail = require('@sendgrid/mail')
const API_KEY=' Yours sendgrid api key';
sgMail.setApiKey(API_KEY);

const msg = {
  to:`${email}`, // Change to your recipient
  from: 'pranshugoyal.cse19@chitkarauniversity.edu.in', // Change to your verified sender
  subject: 'Entry Time Details',
  html: `
      <b>Name : </b> ${name}
      <br><br>
      <b>PhoneNumber : </b>${phone}
      <br><br>
      <b>Email : </b>${email}
      <br><br>
      <b>Entry Time : </b>${Date(Date.now())},
      <br><br>
      <b>Status : </b> <span style="color:green; font-size:1.1rem;">●</span> ACTIVE
      `,
 
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
    
  })

    res.redirect('/visitors');

});

//show particular user information
app.get('/visitors/:id',async(req,res)=>{
    const{id}=req.params;
    const visitor=await Visitor.findById(id);
    res.render('show',{visitor});

});
//Edit
app.get('/visitors/:id/edit',async(req,res)=>{
    const{id}=req.params;
    const visitor=await Visitor.findById(id);
    res.render('edit',{visitor});
});
//UPDATE
app.patch('/visitors/:id',async(req,res)=>{
    const {id}=req.params;
    const updatedVisitor=req.body;
    await Visitor.findByIdAndUpdate(id,updatedVisitor);
    res.redirect('/visitors');

});
//Delete
app.delete('/visitors/:id',async(req,res)=>{
  const {id}=req.params;
     await Visitor.findByIdAndDelete(id);
  res.redirect('/visitors');
});

//Log out
app.get('/visitors/:id/log',async(req,res)=>{
    const{id}=req.params;
    const visitor=await Visitor.findById(id);
    res.render('log',{visitor});
});

app.put('/visitors/:id',async(req,res)=>{
    const {id}=req.params;
    const updatedVisitor=req.body;
    await Visitor.findByIdAndUpdate(id,updatedVisitor);
    const{name,phone,email,date}=req.body;

    const sgMail = require('@sendgrid/mail')
const API_KEY='Yours sendgrid api key';
sgMail.setApiKey(API_KEY);

const msg = {
  to:`${email}`, // Change to your recipient
  from: 'pranshugoyal.cse19@chitkarauniversity.edu.in', // Change to your verified sender
  subject: 'Log Out Details',
  html: `
      <b>Name : </b> ${name}
      <br><br>
      <b>PhoneNumber : </b>${phone}
      <br><br>
      <b>Email : </b>${email}
      <br><br>
      <b>Log Out Time : </b>${Date(Date.now())},
      <br><br>
      <b>Status : </b> <span style="color:red; font-size:1.1rem;">●</span> INACTIVE
      `,
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error(error);
    
  })
  await Visitor.findByIdAndDelete(id);

    res.redirect('/visitors');

});


app.listen(process.env.PORT||2323,()=>{
    console.log('server started at port 2323');
});


    
    
    