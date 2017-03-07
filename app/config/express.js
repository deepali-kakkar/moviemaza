//download the express
var express = require('express');
var path = require('path');
var passport = require('passport');
var flash    = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

module.exports = function () {
    var app = express();
    require('../config/passport')(passport); // pass passport for configuration
    // set up our express application
    app.use(morgan('dev')); // log every request to the console
    app.use(cookieParser()); // read cookies (needed for auth)
    app.use(bodyParser()); // get information from html forms
    
    //set the view engine
    app.set('views', path.resolve('public/app'));
    app.set("view engine" , "html");
    app.engine('html', require('ejs').renderFile);
     
    //to use the static files like js and the css
    app.use(express.static("./public"));
    
    // required for passport
    app.use(session({ secret: 'learnmean' })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions
    app.use(flash()); // use connect-flash for flash messages stored in session


    //set the routes
    require("../routes/index.route")(app,passport);
    return app;
};
