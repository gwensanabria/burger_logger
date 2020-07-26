// dependancies
const express = require("express")

const router = express.Router()

// import model
const burger = require("../models/burger.js")

// create routes
router.get("/", function(req, res) {
    burger.all(function(data) {
        const hbsObject = {
            burgers: data
        }
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function(req, res) {
    burger.create([
        "type", "eaten"
    ], [
        req.body.type, req.body.eaten
    ], function(result) {
        res.json({ id: result.insertId})
    })
})

router.put("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id

    console.log("condition", condition)

    burger.update({
        eaten: req.body.eaten
        // eat: req.body.eat
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // if no rows were changed, then id must not exist, 404
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

router.delete("/api/burgers/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end()
        }
    })
})

// export
module.exports = router;