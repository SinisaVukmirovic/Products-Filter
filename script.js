const products = [
    {
        name: 'Sony Playstation 5',
        image: 'imgs/playstation_5.png',
        category: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung Galaxy',
        image: 'imgs/samsung_galaxy.png',
        category: 'smartphones',
        price: 399.99,
    },
    {
        name: 'Cannon EOS Camera',
        image: 'imgs/cannon_eos_camera.png',
        category: 'cameras',
        price: 749.99,
    },
    {
        name: 'Sony A7 Camera',
        image: 'imgs/sony_a7_camera.png',
        category: 'cameras',
        price: 1999.99,
    },
    {
        name: 'LG TV',
        image: 'imgs/lg_tv.png',
        category: 'televisions',
        price: 799.99,
    },
    {
        name: 'Nintendo Switch',
        image: 'imgs/nintendo_switch.png',
        category: 'games',
        price: 299.99,
    },
    {
        name: 'Xbox Series X',
        image: 'imgs/xbox_series_x.png',
        category: 'games',
        price: 499.99,
    },
    {
        name: 'Samsung TV',
        image: 'imgs/samsung_tv.png',
        category: 'televisions',
        price: 1099.99,
    },
    {
        name: 'Google Pixel',
        image: 'imgs/google_pixel.png',
        category: 'smartphones',
        price: 499.99,
    },
    {
        name: 'Sony ZV1F Camera',
        image: 'imgs/sony_zv1f_camera.png',
        category: 'cameras',
        price: 799.99,
    },
    {
        name: 'Toshiba TV',
        image: 'imgs/toshiba_tv.png',
        category: 'televisions',
        price: 499.99,
    },
    {
        name: 'iPhone 14',
        image: 'imgs/iphone_14.png',
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

// initializing cart item count
let cartItemCount = 0;

// initializing product array
const productElements = [];

// loop over products and create element
products.forEach(product => {
    const productElem = createProductElem(product);
    // pushing into array
    productElements.push(productElem);
    // populating wrapper in DOM
    productsWrapper.appendChild(productElem);
});

// create product element
function createProductElem(product) {
    const productElem = document.createElement('div');
    productElem.className = 'item space-y-2';
    productElem.innerHTML = `
        <div
            class="bg-gray-700 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl">
            <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover" />
            <button
                class="status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0">Add
                To Cart
            </button>
        </div>  
        <p class="text-xl">${product.name}</p>
        <strong>$${product.price.toLocaleString()}</strong>
    `;

    productElem.querySelector('.status').addEventListener('click', updateCart);

    return productElem;
}

// Add or remove from cart functionality
function updateCart(e) {
    const statusElem = e.target;
    
    if (statusElem.classList.contains('added')) {
        statusElem.classList.remove('added');
        statusElem.innerText = 'Add to cart';
        statusElem.classList.remove('bg-red-600');
        statusElem.classList.add('bg-gray-800');

        cartItemCount--;
    } else {
        statusElem.classList.add('added');
        statusElem.innerText = 'Remove from cart';
        statusElem.classList.remove('bg-gray-800');
        statusElem.classList.add('bg-red-600');

        cartItemCount++;
    }

    // update cart item count display
    cartCount.innerText = cartItemCount.toString();
}