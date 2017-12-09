var mongoose =  require("mongoose");
var campground = require("./models/campground");
var Comment = require("./models/comment");
var data = [
    {
        name:"Cloud's Rest",
        image:"https://cdn.pixabay.com/photo/2016/01/26/23/32/camp-1163419_960_720.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus augue justo, eu mattis libero sodales commodo. Pellentesque tempus, massa non tempus convallis, urna ante lacinia neque, at sodales ligula diam in ex. Etiam tempor nulla id magna condimentum, et pulvinar magna viverra. Curabitur quis elit lobortis felis feugiat porta. Nulla imperdiet posuere lacus. Nulla a sodales lectus. Sed quis urna at nulla dignissim auctor sit amet elementum purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In suscipit metus eu purus elementum, in rutrum nulla lobortis. Proin quis rutrum lectus."
    },
      {
        name:"Abc",
        image:"https://cdn.pixabay.com/photo/2016/08/28/17/05/camping-1626412_960_720.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus augue justo, eu mattis libero sodales commodo. Pellentesque tempus, massa non tempus convallis, urna ante lacinia neque, at sodales ligula diam in ex. Etiam tempor nulla id magna condimentum, et pulvinar magna viverra. Curabitur quis elit lobortis felis feugiat porta. Nulla imperdiet posuere lacus. Nulla a sodales lectus. Sed quis urna at nulla dignissim auctor sit amet elementum purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In suscipit metus eu purus elementum, in rutrum nulla lobortis. Proin quis rutrum lectus."
    },
      {
        name:"Dainosaur feet",
        image:"https://cdn.pixabay.com/photo/2015/09/14/13/57/campground-939588_960_720.jpg",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam maximus augue justo, eu mattis libero sodales commodo. Pellentesque tempus, massa non tempus convallis, urna ante lacinia neque, at sodales ligula diam in ex. Etiam tempor nulla id magna condimentum, et pulvinar magna viverra. Curabitur quis elit lobortis felis feugiat porta. Nulla imperdiet posuere lacus. Nulla a sodales lectus. Sed quis urna at nulla dignissim auctor sit amet elementum purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In suscipit metus eu purus elementum, in rutrum nulla lobortis. Proin quis rutrum lectus."
    }
];

function seedDb(){
/*    campground.remove({},function(err){
   if(err)
   console.log(err);
   
   console.log("removed campgrounds");
   
       data.forEach(function(seed){
        campground.create(seed,function(err,campground){
           if(err){
               console.log(err);
           }else{
               console.log("Added Campground");
               Comment.create({
                   text:"Good place to stay",
                   author:"pavan"
               },function(err,comment){
                  if(err){
                      console.log(err);
                  } else{
                      campground.comments.push(comment);
                      campground.save();
                      console.log("created new comment");
                  }
               });
           }
        });
    });
    
});*/

}
module.exports = seedDb;
