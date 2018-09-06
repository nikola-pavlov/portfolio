var express 		= require ("express"),
	app 			= express(),
	mongoose 		= require("mongoose"),
	passport 		= require("passport"),
	LocalStrategy	= require("passport-local"),
	flash			= require("connect-flash"),
	methodOverride	= require("method-override"),
	bodyParser 		= require("body-parser"),
	Message 		= require("./models/message"),
	expressSession	= require("express-session")

mongoose.connect("mongodb://localhost/portfolio_nikola");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.use(express.static(__dirname + '/public'));
app.use(methodOverride("_method"));
app.use(flash());

// PASSPORT CONFIGURATION
app.use(expressSession({
	secret: "Djokovic is the best player in the world",
	resave: false,
	saveUninitialized: false
}));

// ROUTES

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/contact", function(req, res){
	res.render("messages/contact", {infoMessage: req.flash("success")});
});

app.get("/messages", function(req, res){
	Message.find({}, function(err, allMessages){
		if(err) {
			console.log(err);
		} else {
			res.render("messages/show", {messages: allMessages});
		}
	});
});

// DESTROY MESSAGE ROUTE

app.delete("/messages/:id", function(req, res){
	Message.findByIdAndRemove(req.params.id, function(err){
		if(err) {
			res.redirect("/messages");
		} else {
			res.redirect("/messages");
		}
	});
});

app.post("/contact", function(req, res){
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var newMessage = {name: name, email: email, message: message};
	console.log(newMessage);
	Message.create(newMessage, function(err, newCreatedMessage){
		if(err) {
			console.log(err);
		} else {
			console.log(newCreatedMessage);
			req.flash("success", "Message sent");
			res.redirect("/contact");
		}
	});
});

// app.listen(process.env.PORT, process.env.IP);


app.listen(80, "192.168.0.20", function(){
	console.log("Server started!");
});

