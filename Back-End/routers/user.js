const { Router } = require("express");
const { createUser, getUsers } = require('../controllers')
const { check } = require('express-validator');
const { validateResults } = require('../middlewares/validate_fields');

validateResults(['msg', 'param']);

const router = Router();

router.get("/", getUsers );

router.post("/",[
    check("name").trim().not().isEmpty(),
    check("lastName").trim().not().isEmpty(),
    check("gender").trim().not().isEmpty(),
    check("number_ID").trim().not().isEmpty(),
    check("birthDate").not().isEmpty(),
    check("department").isMongoId(),
    check("position").trim().not().isEmpty(),
    check("supervisor").trim().not().isEmpty(),
    validateResults()
], createUser );


module.exports = router;