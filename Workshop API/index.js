let products = [];

const cart = {

};

const Updatecard = () =>{
    let totalprice = 0;
    document.querySelector('#cartSummary_item').replaceChildren([]);

    for (const key of Object.keys(cart)){
        const item = products.find((products) =>{
            return `${products.id}` === key;
        });
        console.log(key);
        console.log(products);

        const quantity = cart[key];
        const price = item.price;
        const itemRow = document.createElement('tr');

        const itemName = document.createElement('th');
        itemName.innerText = item.title;
        
        const itemquantity = document.createElement('td');
        itemquantity.innerText = quantity;

        const itemPrice = document.createElement('td');
        itemPrice.innerText = quantity * price;

        itemRow.append(itemName, itemquantity, itemPrice);
        document.querySelector('#cartSummary_item').append(itemRow);

        totalprice = totalprice + price * quantity;
    }
    document.querySelector('#cartSummary_total').innerText = totalprice;
}
const createCard = (product) => {

    const productCard = document.createElement('div');
    productCard.className = 'productCart';

    const productThumbnail = document.createElement('img');
    productThumbnail.src = product.thumbnail;
    productThumbnail.className = 'productThumbnail';

    const productButtomSheet = document.createElement('div');
    productButtomSheet.className = 'productButtomSheet';

    const productInfoContainer = document.createElement('div');
    productInfoContainer.className = 'productTnfoContainer';

    const productName = document.createElement('strong');
    productName.className = 'productName';
    productName.innerText = product.title;

    const productPrice = document.createElement('div');
    productPrice.className = 'productPrice';
    productPrice.innerText = '$'+product.price;

    const addToCart = document.createElement('button');
    addToCart.className = 'addToCart';
    addToCart.innerText = `+`;

    addToCart.addEventListener('click', () => {

        if(cart[product.id] === undefined) cart[product.id] = 0;
        cart[product.id] = cart[product.id] + 1;
        Updatecard();

    });

    productInfoContainer.append(productName,productPrice);
    productButtomSheet.append(productInfoContainer,addToCart,);
    productCard.append(productThumbnail,productButtomSheet);

    document.querySelector('#productList').appendChild(productCard);
};

const hookViewCart = () => {
    const ViewCartButton = document.querySelector('#ViewCart');
    ViewCartButton.addEventListener('click', () => {
        const cartSummary = document.querySelector('#cartSummary');
        const display = cartSummary.style.display;

        if (display === 'none'){
            cartSummary.style.display = 'block';
        }else{
            cartSummary.style.display = 'none';
        }
    });
};

const fetchProduct = () =>{
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then((productResponse) => {
            products = productResponse.products;

            products.forEach(product => {
                createCard(product);    
            });
        });
}
fetchProduct();
hookViewCart();