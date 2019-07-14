'use strict';
const Location = require( '../models/Location' );
const Comment = require( '../models/Comment' );

exports.saveLocation = ( req, res ) => {
  //console.log("in saveSkill!")
  //console.dir(req)
  let newLocation = new Location(
   {
     createdAt: new Date(),
     comment: req.body.comment,
     placeName: req.body.place,
     useremail: "anon",//user.googleemail,
     category: req.body.category,
     location: {
       type: 'Point',
       coordinates: [req.body.lat,req.body.lon] //convert to numbers?
     }
   }
  )
  console.log("saved a comment")
  console.dir(newLocation)

  //console.log("skill = "+newSkill)

  newLocation.save()
    .then( () => {
      res.redirect( '/showLocations' );
    } )
    .catch( error => {
      res.send( error );
    } );
};



// this displays all of the skills
exports.getAllLocations = ( req, res ) => {
  console.log('in getAllLocations')
  Location.find()
    .exec()
    .then( ( data ) => {
      console.log("locations: "+data.length)
      res.render( 'locations', {
        locations:data, title:"Locations"
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};

// this displays all of the skills
exports.getOneComment = ( req, res ) => {
  //gconsle.log('in getAllSkills')
  const id = req.params.id
  console.log('the id is '+id)
  Comment.findOne({_id:id})
    .exec()
    .then( ( comment ) => {
      res.render( 'comment', {
        comment:comment, title:"Comment"
      } );
    } )
    .catch( ( error ) => {
      console.log( error.message );
      return [];
    } )
    .then( () => {
      //console.log( 'skill promise complete' );
    } );
};
