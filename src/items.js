class Product {
    constructor(price, name, brand, imgSrc) {
        this.price = price;
        this.name = name;
        this.brand = brand;
        this.imgSrc = imgSrc;
    }
}

// Initialize items
export const items = [
    new Product(78, 'Carton Astronault Tshirts', 'adidas', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95da4371-957e-4d87-b1ad-e3e47f9b1232/vini-jr-brazil-national-team-2024-match-away-mens-dri-fit-adv-soccer-jersey-3p0BGw.png'),
    new Product(60, 'Carton Leave Tshirts', 'adidas', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/303f5665-92f4-4c54-87eb-901e30e99cf6/erling-haaland-norway-national-team-2024-stadium-away-mens-dri-fit-soccer-jersey-dKlxJ8.png'),
    new Product(78, 'Rose Multicolor Tshirts', 'adidas', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7f76bce-cac5-45ca-a65a-0c4a9366fe1c/kylian-mbapp%C3%A9-france-national-team-2024-stadium-away-mens-dri-fit-soccer-jersey-qXW0jM.png'),
    new Product(78, 'Pink Flower Tshirts', 'adidas', 'https://i.postimg.cc/vZ3hPS1z/f4.jpg'),
    new Product(78, 'Purple Flowering Tshirts', 'adidas', 'https://i.postimg.cc/q7FLrhx6/f5.jpg'),
    new Product(78, 'Short Knicker', 'adidas', 'https://i.postimg.cc/L86BZByZ/f7.jpg'),
    new Product(78, '2 in 1 Double Routed', 'adidas', 'https://i.postimg.cc/zDxJ2f0H/f6.jpg'),
    new Product(78, 'Ash Short', 'adidas', 'https://i.postimg.cc/x8qcBrpP/n6.jpg')
];

// Initialize cart from localStorage
let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
let cart = storedCart.map(item => new Product(item.price, item.name, item.brand, item.imgSrc));
let cno = parseInt(localStorage.getItem('cno')) || 0;

export { cart, cno };
