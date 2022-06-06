//const { tutorials } = require("../models");

module.exports = app =>{
     const tutorials = require("../controllers/tutorial.controller");

     var router = require("express").Router();

     // Create a new Course
     router.post("/",tutorials.create);

     // Retrieve all Courses
     router.get("/",tutorials.findAll);

     // Retrieve all category names
     router.get("/published",tutorials.findAllPublished);

     // Retrieve a single Course with id
     router.get("/:id",tutorials.findOne);

     // Update a Course with id
     router.put("/:id",tutorials.update);

     // Delete a Course with id
     router.delete("/:id",tutorials.delete);

     // delete all Courses
     router.delete("/",tutorials.deleteAll);

     app.use ("/api/tutorials", router);

};