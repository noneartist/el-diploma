const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, basketController.getBasket);
router.post('/add', authMiddleware, basketController.addToBasket);
router.delete('/remove/:deviceId', authMiddleware, basketController.removeFromBasket);

module.exports = router;
