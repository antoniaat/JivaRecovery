const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', auth.forbidGuests, controllers.order.get.all);

router.get('/:id', auth.forbidGuests, controllers.order.get.one);

router.post('/', auth.forbidGuests, controllers.order.post.many);

router.put('/status/:id', auth.permitAdminOnly, controllers.order.put.editStatus);

router.delete('/:id', auth.permitAdminOnly, controllers.order.delete);

module.exports = router;