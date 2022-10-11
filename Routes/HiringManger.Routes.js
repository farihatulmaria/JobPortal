const express = require('express');
const mangerController = require('../Controllers/HiringManger.Controller');
const router = express.Router();

router.route('/jobs')
    .post(mangerController.addAJob)
    .path(mangerController.updateAJob)


module.exports = router