import {categories, products, productDetails} from './tcgplayer-data';

export const getAllCategories = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(categories);
    }, 300)
});

export const getAllProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 300)
});

export const getAllProductDetails = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productDetails);
    }, 300)
});

