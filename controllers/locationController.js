'use strict';
const Location = require( '../models/Location' );


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
     website: req.body.website,
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
