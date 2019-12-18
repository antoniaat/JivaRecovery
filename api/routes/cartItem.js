const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils');

router.get('/', auth.forbidGuests, controllers.cartItem.get.all);

router.get('/:id', auth.forbidGuests, controllers.cartItem.get.one);

router.post('/', auth.forbidGuests, controllers.cartItem.post.createOne);

router.post('/checkout', auth.forbidGuests, controllers.cartItem.post.checkout);

router.put('/:id', auth.forbidGuests, controllers.cartItem.put);

router.delete('/', auth.forbidGuests, controllers.cartItem.delete.all);

router.delete('/:id', auth.forbidGuests, controllers.cartItem.delete.one);

module.exports = router;