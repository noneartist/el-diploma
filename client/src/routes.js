import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"
import {Admin, Basket, Shop, Auth, DevicePage} from './pages/index'

// react-router-dom v5
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }

]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },

    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]