const express = require("express");
const combinationsController = require("../../controller/combinations/index");

const router = express.Router();

router.post(
    "/generate",
    /* TODO: Add here middleware to check the request body validity */
    combinationsController.generate
);

module.exports = router;