import { items } from './items.js';
import { createProductCard } from './script.js';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cno = parseInt(localStorage.getItem('cno')) || 0;

export {cno , cart};

document.addEventListener('DOMContentLoaded', function() {
    if (document.body.id === 'shopPage') {
    const productRow = document.querySelector('.shop');
    
    if (productRow) {
        document.getElementById('quantity').innerText = cno;
        items.forEach(item => {
                const productCard = createProductCard(item, "shop");
                productRow.appendChild(productCard);
            });
        } 
    }
});