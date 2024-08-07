import { items } from './items.js';
import { createProductCard } from './script.js';
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cno = parseInt(localStorage.getItem('cno')) || 0;
let bill = parseInt(localStorage.getItem('bill')) || 0;

export {cno , cart , bill};

document.addEventListener('DOMContentLoaded', function() {
  if (document.body.id === 'indexPage'){
      const productRow = document.querySelector('.home');
      
      if (productRow) {
          document.getElementById('quantity').innerText = cno;
          items.forEach(item => {
              if(item.brand === "Puma") {
                const productCard = createProductCard(item, "index");
                productRow.appendChild(productCard);
              }
          });
      }
  }
});