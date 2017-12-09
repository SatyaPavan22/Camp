var express     = require("express"),
    app         = express(),
    bodyparser  = require("body-parser"),
    mongoose    = require("mongoose"),
    Passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    flash        = require("connect-flash"),
    methodOverride = require("method-override");
    campground  = require("./models/campground"),
    Comment     =require("./models/comment"),
    User        =require("./models/user");
    //seedDb      = require("./seeds");
    
var commentRoutes = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes    =    require("./routes/index");

    
    //seedDb();
    
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyparser.urlencoded({extended:true}));

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());


/*campground.create(
    {
        name:"marathalli",
        image:"http://www.photosforclass.com/download/14435096036",
        description:"This is near hebbal bangalore to sikboard camproungs hello"
        
    },function(err,campground){
        if(err){
            console.log(err);
        }
        else{
            console.log(campground);
        }
    });
       */
app.use(require("express-session")({
    
    secret:"hello world",
    resave:false,
    saveUninitialized:false
    
}));


app.use(Passport.initialize());
app.use(Passport.session());
Passport.use(new LocalStrategy(User.authenticate()));
Passport.serializeUser(User.serializeUser());
Passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
   res.locals.currentUser = req.user;
   res.locals.errorMessage = req.flash("error");
   res.locals.successMessage=req.flash("success");
   next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);

app.listen(process.env.PORT,process.env.IP,function(){
   console.log("server nadustundi"); 
});