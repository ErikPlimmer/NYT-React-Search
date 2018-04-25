const router = require("express").Router();
const articleController = require("../contollers/articleController")

router.route("/")
    .get(articleController.findAll) //get all articles
    .post(articleController.save)   // saves articles

router.route("/:id")
    .get(articleController.findById) // getting article by id 
    .delete(articleController.delete) // delete article by id
    
module.exports = router;     