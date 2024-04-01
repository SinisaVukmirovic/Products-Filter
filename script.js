const products = [
    {
        name: 'Sony Playstation 5',
        url: 'imgs/playstation_5.png',
        category: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung Galaxy',
        url: 'imgs/samsung_galaxy.png',
        category: 'smartphones',
        price: 399.99,
    },
    {
        name: 'Cannon EOS Camera',
        url: 'imgs/cannon_eos_camera.png',
        category: 'cameras',
        price: 749.99,
    },
    {
        name: 'Sony A7 Camera',
        url: 'imgs/sony_a7_camera.png',
        category: 'cameras',
        price: 1999.99,
    },
    {
        name: 'LG TV',
        url: 'imgs/lg_tv.png',
        category: 'televisions',
        price: 799.99,
    },
    {
        name: 'Nintendo Switch',
        url: 'imgs/nintendo_switch.png',
        category: 'games',
        price: 299.99,
    },
    {
        name: 'Xbox Series X',
        url: 'imgs/xbox_series_x.png',
        category: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung TV',
        url: 'imgs/samsung_tv.png',
        category: 'televisions',
        price: 1099.99,
    },
    {
        name: 'Google Pixel',
        url: 'imgs/google_pixel.png',
        category: 'smartphones',
        price: 499.99,
    },
    {
        name: 'Sony ZV1F Camera',
        url: 'imgs/sony_zv1f_camera.png',
        category: 'cameras',
        price: 799.99,
    },
    {
        name: 'Toshiba TV',
        url: 'imgs/toshiba_tv.png',
        category: 'televisions',
        price: 499.99,
    },
    {
        name: 'iPhone 14',
        url: 'imgs/iphone_14.png',
        category: 'smartphones',
        price: 999.99,
    },
];

// DOM elems
const productsWrapper = document.querySelector('#products-wrapper');
const checkboxes = document.querySelectorAll('.check');
const filtersContainer = document.querySelector('#filters-container');
const searchInput = document.querySelector('#search');
const cartCount = document.querySelector('#cart-count');


console.log(cartCount)