const express = require('express');
const cadiadateController = require('../Controllers/Cadiadate.Controllers');
const router = express.Router();

router.get('/jobs',cadiadateController.getAllJob);
router.get('/jobs/:id',cadiadateController.getAJob);
router.post('/jobs/:id/apply',cadiadateController.applyToAJob);

module.exports = router;