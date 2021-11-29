const { Router } = require('express');
const { check } = require('express-validator');
const { getDepartments, createDepartment } = require('../controllers/');
const { validateResults } = require('../middlewares/validate_fields');

const router = Router();

router.get('/', getDepartments );

router.post('/',[
    check("code").trim().not().isEmpty(),
    check("name").trim().not().isEmpty(),
    validateResults()
], 
createDepartment );


module.exports = router;