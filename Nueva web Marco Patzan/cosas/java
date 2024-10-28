public class Main {
    // Inicializar el carrito como un objeto vacío
const cart = {};

// Seleccionar los botones de "Añadir al carrito"
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

// Función para actualizar el carrito en la interfaz
function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalDisplay = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';  // Limpiar la lista

    let total = 0;

    // Recorrer el carrito para mostrar los productos añadidos
    for (const productId in cart) {
        const item = cart[productId];
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity} = $${item.price * item.quantity}`;
        cartItemsContainer.appendChild(listItem);
        total += item.price * item.quantity;
    }

    cartTotalDisplay.textContent = total.toFixed(2);  // Actualizar el total
}

// Función para añadir un producto al carrito
function addToCart(event) {
    const button = event.target;
    const productId = button.getAttribute('data-id');
    const productName = button.getAttribute('data-name');
    const productPrice = parseFloat(button.getAttribute('data-price'));

    // Si el producto ya está en el carrito, incrementar la cantidad
    if (cart[productId]) {
        cart[productId].quantity += 1;
    } else {
        // Si el producto no está en el carrito, añadirlo
        cart[productId] = {
            name: productName,
            price: productPrice,
            quantity: 1
        };
    }

    updateCartDisplay();  // Actualizar la vista del carrito
}

// Agregar el evento de clic a cada botón de "Añadir al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

}
