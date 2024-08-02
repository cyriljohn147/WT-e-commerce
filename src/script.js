let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cno = parseInt(localStorage.getItem('cno')) || 0;

export function cartAdd(price, itemName, brand, imgSrc) {
    cno++;
    cart.push({ price, itemName, brand, imgSrc });
    document.getElementById('quantity').innerText = cno;
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cno', cno);
  }
  
  export function cartRemove(itemName) {
    console.log(itemName);
    cart = cart.filter(item => item.itemName !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('quantity').innerText = cno = cart.length;
  }
  
  export function resetLocalStorage() {
    localStorage.clear();
    console.log("Local storage has been reset.");
  }
  
  export function createProductCard(product,page) {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-md-3 mb-4';
  
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card border-0 shadow-sm';
  
    const img = document.createElement('img');
    img.src = product.imgSrc;
    img.className = 'card-img-top';
    img.alt = 'Product Image';
  
    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';
  
    const brandSpan = document.createElement('span');
    brandSpan.className = 'text-muted';
    brandSpan.textContent = product.brand;
  
    const titleH5 = document.createElement('h5');
    titleH5.className = 'card-title';
    titleH5.textContent = product.name;
  
    const starDiv = document.createElement('div');
    starDiv.className = 'text-warning mb-2';
    for (let i = 0; i < 5; i++) {
        const starIcon = document.createElement('i');
        starIcon.className = 'fas fa-star';
        starDiv.appendChild(starIcon);
    }
  
    const priceH4 = document.createElement('h4');
    priceH4.className = 'text-primary';
    priceH4.textContent = `$${product.price}`;
  
    const addButton = document.createElement('a');
    addButton.className = 'btn btn-outline-primary';
    if(page==="index") {
      addButton.innerHTML = '<i class="fal fa-shopping-cart"></i>';
      addButton.onclick = function() {
        cartAdd(product.price, product.name, product.brand, product.imgSrc);
      };
    } else if (page ==="cart") {
        addButton.innerHTML = '<i class="fal fa-trash"></i>';
        addButton.onclick = function() {
          cartRemove(product.name);
      };
    }   
  
    cardBodyDiv.appendChild(brandSpan);
    cardBodyDiv.appendChild(titleH5);
    cardBodyDiv.appendChild(starDiv);
    cardBodyDiv.appendChild(priceH4);
    cardBodyDiv.appendChild(addButton);
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);
  
    colDiv.appendChild(cardDiv);
  
    return colDiv;
  }

export {cart,cno};