const express = require("express");
const { validateGenerateRequestBody } = require('../../middlewares/combinations/validateRequestBody')
const combinationsController = require("../../controller/combinations/index");

const router = express.Router();

router.post(
    "/generate",
    validateGenerateRequestBody,
    combinationsController.generate
);

module.exports = router;