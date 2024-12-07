const express = require("express");

const router = express.Router()

const {createproduct, viewproduct,deleteproduct,updateproduct} = require("../contoller/productapi")

// routes
router.post("/", createproduct);
router.get("/", viewproduct);
router.delete("/:id", deleteproduct);
router.put("/:id", updateproduct);


module.exports = router;