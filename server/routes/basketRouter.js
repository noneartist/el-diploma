const Router = require('express');
const router = new Router();
const basketController = require('../controllers/basketController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, basketController.addToBasket);
router.get('/', authMiddleware, basketController.getBasket);
router.delete('/remove/:deviceId', authMiddleware, basketController.removeFromBasket);
router.post('/checkout', authMiddleware, basketController.checkout); // Новый маршрут

module.exports = router;
