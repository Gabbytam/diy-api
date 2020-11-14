const express= require('express');
const app= express();
const ejsLayouts = require('express-ejs-layouts');


//  setup ejs and ejs layouts
app.set('view engine', 'ejs');
app.use(ejsLayouts);

// body parser middleware (this makes req.body work)
app.use(express.urlencoded({extended: false}));

app.use('/course', require('./controllers/course.js'));

app.get('/', (req, res)=>{
    res.send('test');
});

app.listen(process.env.PORT, ()=>{
    console.log('you\'re listening to the spooky sounds of port 8000')
});