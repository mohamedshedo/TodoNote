let express= require('express');
var app=express();
let config = require('./config');
let mongoose = require('mongoose');
let setupController = require('./controllers/setupController');
let apiController  = require('./controllers/apiController');
let port = process.env.PORT||2000;
app.use('/assets',express.static(__dirname+'/public'));
app.set('view engine','ejs');

mongoose.connect(config.getdbConnectionString(),{useNewUrlParser:true
});
setupController(app);
apiController(app);

app.listen(port);
