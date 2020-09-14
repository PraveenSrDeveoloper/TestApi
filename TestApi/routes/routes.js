const { Router } = require('express');
const router = Router();
const controller = require('../controllers/controller')




router.route('/api/v1/parse')
    .post(controller.parseV1);
router.route('/api/v2/parse')
    .post(controller.parseV2);


module.exports = router