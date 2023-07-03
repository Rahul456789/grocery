
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        const cartItemsContainer = document.getElementById('cart-items');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', addToCart);
        });

        function addToCart(event) {
            const productId = event.target.getAttribute('data-id');
            const productName = event.target.parentNode.parentNode.querySelector('.product-cat').textContent;
            const cartItem = document.createElement('li');
            cartItem.textContent = productName;
            cartItemsContainer.appendChild(cartItem);
        }
    
