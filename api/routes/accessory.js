const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', controllers.accessory.get.all);

router.get('/:id', controllers.accessory.get.one);

router.post('/', auth.permitAdminOnly, controllers.accessory.post);

router.put('/:id', auth.permitAdminOnly, controllers.accessory.put);

router.delete('/:id', auth.permitAdminOnly, controllers.accessory.delete);

module.exports = router;