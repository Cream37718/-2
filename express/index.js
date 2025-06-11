const express = require('express');
const path = require('path')
const user = require('./user.js');
const { nextTick } = require('process');
const app = express();
const logger = require('./middleware/logger.js');
const { engine } = require('express-handlebars');


// Handlebars Middleware
app.engine('handlebars', engine({defaultLayout : 'main'}));
app.set('view engine', 'handlebars')
//home page route
app.get('/', (req,res)=> {
    res.render('index', {
        title: 'User app',
        user
    });
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//app.use(logger);
app.use('/api/users', require('./routes/api/users.js'))
/*app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'public','index.html'));
});*/

//Send static folder
//app.use(express.static(path.join(__dirname,'public')));


const PORT = process.env.PORT || 5000;


app.listen(PORT,() => console.log(`Server is running on port ${PORT}`));
