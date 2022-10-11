const express = require('express');
const mangerController = require('../Controllers/HiringManger.Controller');
const router = express.Router();

router.route('/jobs').post(mangerController.addAJob)
router.route('/jobs/:id').patch(mangerController.updateAJob)

router.route('/:manager/jobs').get(mangerController.getAllJobsOfTheManager)
router.route('/:manager/jobs/:id').get(mangerController.getAJobsOfTheManager)

module.exports = router