import { createProductCard} from "./script.js";
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cno = parseInt(localStorage.getItem('cno')) || 0;
let bill = parseInt(localStorage.getItem('bill')) || 0;
document.getElementById('bill').innerHTML=bill+"₹";

// console.log(cart.length);

export function clearCart() {
    localStorage.clear();
    cart=[];
    cno=0;
    bill =0; 
    document.getElementById('quantity').innerText = cno;
    document.querySelector('.cart').innerHTML = '<h2>cart is empty</h2>';
    document.getElementById('bill').innerHTML = bill+"₹";
    console.log("Local storage has been reset.");
}


document.addEventListener('DOMContentLoaded', function() {
    const productRow = document.querySelector('.cart'); 

    if (cart.length === 0) {
        const noElements = document.createElement('h2');
        noElements.textContent = "cart is empty";
        productRow.appendChild(noElements);
    } else {
        document.getElementById('quantity').innerText = cno;
        cart.forEach(item => {
            const productCard = createProductCard(item,"cart");
            productRow.appendChild(productCard);
        });
    }
});

const clearCartButton = document.getElementById('clearCartButton');
if (clearCartButton) {
    clearCartButton.addEventListener('click', clearCart);
}

export {cart,cno, bill};