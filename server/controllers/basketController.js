const { Basket, BasketDevice, Device } = require('../models/models');
const ApiError = require('../error/ApiError');

class BasketController {
    async getBasket(req, res, next) {
        const { id } = req.user;
        const basket = await Basket.findOne({ where: { userId: id }, include: [{ model: BasketDevice, include: [Device] }] });
        return res.json(basket);
    }

    async addToBasket(req, res, next) {
        const { id } = req.user;
        const { deviceId } = req.body;
        
        let basket = await Basket.findOne({ where: { userId: id } });
        if (!basket) {
            basket = await Basket.create({ userId: id });
        }

        const basketDevice = await BasketDevice.create({ basketId: basket.id, deviceId });
        return res.json(basketDevice);
    }

    async removeFromBasket(req, res, next) {
        const { id } = req.user;
        const { deviceId } = req.params;
        const basket = await Basket.findOne({ where: { userId: id } });
        
        if (!basket) {
            return next(ApiError.badRequest('Basket not found'));
        }

        const basketDevice = await BasketDevice.destroy({ where: { basketId: basket.id, deviceId } });
        return res.json(basketDevice);
    }
}

module.exports = new BasketController();
