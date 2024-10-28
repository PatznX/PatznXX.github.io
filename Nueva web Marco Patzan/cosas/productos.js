


let carrito = [];


document.querySelectorAll('.cart-btn').forEach((btn, index) => {
  btn.addEventListener('click', function() {

    const productElement = document.querySelectorAll('.product')[index];
    const title = productElement.querySelector('.product-title').innerText;
    const price = parseFloat(productElement.querySelector('.product-price').innerText.replace('$', ''));


    addToCart({ title, price });
  });
});


function addToCart(product) {

  carrito.push(product);


  updateCartUI();
}


function updateCartUI() {
  const carritoItemsContainer = document.getElementById('carrito-items');
  const totalElement = document.getElementById('carrito-total');


  carritoItemsContainer.innerHTML = '';


  carrito.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('cart-item');
    itemElement.innerHTML = `<p>${item.title} - $${item.price.toFixed(2)}</p>`;
    carritoItemsContainer.appendChild(itemElement);
  });


  const total = carrito.reduce((acc, item) => acc + item.price, 0);
  totalElement.innerText = `Total: $${total.toFixed(2)}`;
}


const cart = [];
const cartCount = document.getElementById('cart-count');
const cartModal = document.getElementById('cart-modal');
const cartItemsDiv = document.getElementById('cart-items');
const totalDiv = document.getElementById('total');
const checkoutButton = document.getElementById('checkout');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        cart.push({ name, price });
        updateCart();
    });
});

function updateCart() {
    cartCount.textContent = cart.length;
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        cartItemsDiv.innerHTML += `<p>${item.name} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Eliminar</button></p>`;
    });

    totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('cart-button').addEventListener('click', () => {
    cartModal.style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    cartModal.style.display = 'none';
});

checkoutButton.addEventListener('click', () => {
    alert('Procediendo al pago');
});

window.onclick = function(event) {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
};

const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})