var express = require("express");
var campground = require("../models/campground");
var middleware = require("../middleware");

var router = express.Router();
router.post("/",function(req,res){
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var author = {
       id:req.user._id,
       username:req.user.username
    };
   var newCampground = {name:name,image:image,description:desc,author:author};
   campground.create(newCampground,function(err,newlyCreated){
      if(err)
      {
          console.log(err);
      }
      else{
          res.redirect("/campgrounds");
      }
   });
   
});

router.get("/",function(req,res){
    
    campground.find(function(err,allCampgrounds){
        if(err)
        console.log(err);
        else
        res.render("campgrounds/campgrounds",{campgrounds:allCampgrounds,currentUser:req.user});
    });
       //res.render("campgrounds",{campgrounds,campgrounds});
});

router.get("/new",middleware.isLoggedIn,function(req,res){
    //console.log("hello");
    res.render("campgrounds/new");    
});

router.get("/:id",function(req,res){
    campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
        if(err){
            console.log(err);
        }
        else{
            res.render("campgrounds/show",{campground:foundCampground});
        }
    });
});


router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req, res) {
    campground.findById(req.params.id,function(err,foundCampground){
        res.render("campgrounds/edit",{campground:foundCampground});

});
});

router.put("/:id",function(req,res){
  campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCampground){
     if(err){
         res.redirect("/campgrounds");
     }else{
         res.redirect("/campgrounds/"+req.params.id);
     } 
  });
});

router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
   campground.findByIdAndRemove(req.params.id,function(err){
       if(err){
           res.redirect("/campgrounds");
       }else{
           res.redirect("/campgrounds");
       }
   });
});

module.exports = router;