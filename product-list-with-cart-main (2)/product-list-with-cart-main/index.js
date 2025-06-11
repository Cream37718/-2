const cart={

};
const UpdatesCart = () => {
    let totalprice =0;

}
const CreateCart = (product) => {
    
   const Container = document.createElement('div');
   Container.className = 'Container';

   const Menu = document.createElement('div');
   Menu.className = 'Menu';


    const Add = document.createElement('div');
    Add.className = 'Add';

    const addToCart = document.createElement('button');
    addToCart.src = '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>';
    addToCart.innerText = 'Add to Cart';
    addToCart.className = 'addToCart';

    const Cart = document.createElement('div');
    Cart.className = 'Cart';

    const Card = document.createElement('h2');
    Card.className = 'Card';

    const Cart_Thumbnail = document.createElement('div');
    Cart_Thumbnail.className = 'Cart_Thumbnail';
    document.body.appendChild(Cart_Thumbnail);

    
    const Order = document.createElement('h4');
    Order.className = 'Order';
    Order.innerText = 'Your added items will appear here';

    const img = [
        {src:'assets/images/image-waffle-desktop.jpg', alt:'Waffle'},
        {src:'assets/images/image-creme-brulee-desktop.jpg', alt:'Crème Brûlée'},
        {src:'assets/images/image-macaron-desktop.jpg', alt:'Macaron'},
        {src:'assets/images/image-tiramisu-desktop.jpg', alt:'Tiramisu'},
        {src:'assets/images/image-baklava-desktop.jpg', alt:'Baklava'},
        {src:'assets/images/image-meringue-desktop.jpg', alt:'Pie'},
        {src:'assets/images/image-cake-desktop.jpg', alt:'Cake'},
        {src:'assets/images/image-brownie-desktop.jpg', alt:'Brownie'},
        {src:'assets/images/image-panna-cotta-desktop.jpg', alt:'Panna Cotta'}
    ];
    img.forEach(imge =>{
        const img = document.createElement('img');
        img.src = imge.src;
        img.alt = imge.alt;
        img.className = 'Thumbnail';
        document.body.appendChild(img);
    });

    const NameThumbnail = ['Waffle','Crème Brûlée','Macaron','Tiramisu','Baklava','Pie','Cake','Brownie','Panna Cotta'];
    NameThumbnail.forEach(item =>{
        const h5= document.createElement('h5');
        h5.className = 'NameThumbnail';
        h5.innerText = item;
        document.body.appendChild(h5);
    });

    const Name = ['Waffle with Berries','Vanilla Bean Crème Brûlée','Macaron Mix of Five','Classic Tiramisu','Pistachio Baklava','Lemon Meringue Pie',
        'Red Velvet Cake','Salted Caramel Brownie','Vanilla Panna Cotta'
    ];
    Name.forEach(name =>{
        const h4 = document.createElement('h4');
        h4.className = 'Name';
        h4.innerText = name;
        document.body.appendChild(h4);
    });
    const Price = ['$8.00','$7.00','$8.00','$5.50','$4.00','$5.00','$4.50','$4.50','$6.50',];
    Price.forEach(price =>{
        const h4 = document.createElement('h4');
        h4.className = 'Price';
        h4.innerText = price;
        document.body.appendChild(h4);
    });

    Add.append(addToCart);
    Menu.append(Thumbnail,Add,NameThumbnail,Name,Price);
    Cart.append(Card,Cart_Thumbnail,Order);
    Container.append(Menu,Cart);
    document.body.appendChild(Container);
}
CreateCart();