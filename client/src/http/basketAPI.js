import { $authHost } from './index';

export const fetchBasket = async () => {
  const { data } = await $authHost.get('api/basket');
  return data;
}

export const addToBasket = async (deviceId) => {
  const { data } = await $authHost.post('api/basket/add', { deviceId });
  return data;
}

export const removeFromBasket = async (deviceId) => {
  const { data } = await $authHost.delete(`api/basket/remove/${deviceId}`);
  return data;
}

export const checkoutBasket = async () => {
  const { data } = await $authHost.post('api/basket/checkout');
  return data;
}
