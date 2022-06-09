const express = require("express");

const { signup } = require("../controllers/parent");

const parentRouter = express.Router();

//post/register parent
parentRouter.post("/signup/parent", signup);

//exports our router
module.exports = parentRouter;
