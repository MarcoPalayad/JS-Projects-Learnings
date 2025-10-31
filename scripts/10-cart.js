let cartQuantity = 0;

        function renderCartQuantity() {
            document.querySelector('.qtyCart').innerHTML = `Cart Quantity: ${cartQuantity}`;
        }

        function updateCartQuantity(change) {

            if (cartQuantity + change > 10) {
            alert('The cart is full');
            return;
            }

            if (cartQuantity + change < 0) {
            alert('Not enough items in the cart');
            return;
            }

            cartQuantity += change;
            document.querySelector('.qtyCart').innerHTML = `Cart quantity: ${cartQuantity}`

            const addToCart = document.querySelector('.add-to-cart')
            if (addToCart.innerText === 'Add to Cart') {
                addToCart.classList.add('added-to-cart')
               console.log(addToCart.classList.contains('add-to-cart')) 
            } else {
                addToCart.classList.remove('.added-to-cart')
            }

        renderCartQuantity()

        }