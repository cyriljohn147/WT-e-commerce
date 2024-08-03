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
    new Product(799, 'Brazil Home Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95da4371-957e-4d87-b1ad-e3e47f9b1232/vini-jr-brazil-national-team-2024-match-away-mens-dri-fit-adv-soccer-jersey-3p0BGw.png'),
    new Product(699, 'Norway Away Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/303f5665-92f4-4c54-87eb-901e30e99cf6/erling-haaland-norway-national-team-2024-stadium-away-mens-dri-fit-soccer-jersey-dKlxJ8.png'),
    new Product(799, 'France Away Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e7f76bce-cac5-45ca-a65a-0c4a9366fe1c/kylian-mbapp%C3%A9-france-national-team-2024-stadium-away-mens-dri-fit-soccer-jersey-qXW0jM.png'),
    new Product(899, 'Norway Home Kit', 'Nike', 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6e431b90-c96e-480a-885c-03b358b3b90b/NK+2024%2F25+M+REP+JRSY+-+Player.png'),
    new Product(999, 'Netherland Home Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/23af8012-d9da-4ae5-b6d8-02a6a2de748c/virgil-van-dijk-netherlands-national-team-2024-stadium-home-big-kids-dri-fit-soccer-jersey-F41PtF.png'),
    new Product(799, 'France Home Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/06e762fc-047f-4303-8ac1-6cb3cc28dc39/kylian-mbapp%C3%A9-france-national-team-2024-match-home-mens-dri-fit-adv-soccer-jersey-FBLcs3.png'),
    new Product(899, 'USA Home Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d57db7b9-ce47-479b-a944-ead941772333/alex-morgan-uswnt-2024-stadium-home-mens-dri-fit-soccer-jersey-3bp5Bz.png'),
    new Product(1099, 'Barcelona Away Kit', 'Nike', 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d89e0ef8-7403-450f-b0e9-ce51bf179dcd/fc-barcelona-2023-24-stadium-fourth-big-kids-dri-fit-soccer-jersey-SXSgCx.png')
];

// Initialize cart from localStorage
let storedCart = JSON.parse(localStorage.getItem('cart')) || [];
let cart = storedCart.map(item => new Product(item.price, item.name, item.brand, item.imgSrc));
let cno = parseInt(localStorage.getItem('cno')) || 0;
let bill = parseInt(localStorage.getItem('bill')) || 0;

export { cart, cno ,bill } ;
