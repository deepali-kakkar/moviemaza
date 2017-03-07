module.exports = function (app,passport) {
    var ctrl = require('../controllers/index.controller');
    app.get("/", ctrl.get);
    app.get("/api/featured", ctrl.getFeaturedMovies);
    app.post("/api/signup", passport.authenticate('local-signup'), function(req,res) {
        res.json(req.user);
    });   

    app.post('/api/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};
 