// тут работаем с mobx
import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        //нижнее подчеркивание - обозночаем, что переменная изменяться не может
        this._types = [
            {id: 1, name: 'fridges'},
            {id: 2, name: 'phones'},
            {id: 3, name: 'notebooks'},
            {id: 4, name: 'tv'}
        ]
        this._brands = [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Samsung'}
        ]
        this._devices = [
            {id: '1', name: '15 pro', price: '1000', rating: '0', img: '729e0d27-cf82-4082-9db7-9e9f403b792b.jpg'},
            {id: '2', name: 'Galaxy S24 Ultra', price: '1200', rating: '0', img: '9ea40381-059d-4d1c-b1d1-7a125f2f150f.jpg'},
            {id: '3', name: 'Galaxy S23 Ultra', price: '1100', rating: '0', img: '97e72938-0a82-4cf2-8670-9615bed1c3b9.jpg'},
            {id: '4', name: 'Galaxy S22', price: '900', rating: '0', img: '35c2bd68-763e-435c-b1e1-86f4d6083278.jpg.jpg'}

        ]
        this._selectedType = {

        }
        this._selectedBrand = {

        }

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setBrands(brands) {
        this._brands = brands
    }
    setDevices(devices) {
        this._devices = devices
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
}