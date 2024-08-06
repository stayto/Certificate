import { get, post, put, del } from './api.js';

const endpoints = {
    'catalog': '/data/cars?sortBy=_createdOn%20desc',
    'carById': '/data/cars/',
    'cars': '/data/cars'
};

export async function getAllCars() {
    return get(endpoints.catalog);
}

export async function getCarById(id) {
    return get(endpoints.carById + id);
}

export async function createCar({model, imageUrl,  price,  weight, speed, about}) {
    return post(endpoints.cars, {
        model, 
        imageUrl, 
        price,  
        weight, 
        speed, 
        about
    });
}

export async function updateCar(id, carData) {
    return put(endpoints.carById + id, carData); 
}

export async function deleteCar(id) {
    return del(endpoints.carById + id);
}

