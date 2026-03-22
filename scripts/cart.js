const container = document.getElementById("product-container");
// const buttons = document.querySelectorAll('.add-to-cart-button');
const cartQuantity = document.querySelector('.cart-quantity');
let num = cartQuantity.innerHTML;
let deliveryDate = document.querySelectorAll('.delivery-date');

// console.log(`${day}-${month}-${year}`);

container.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-button")) {
        const button = e.target;

        const addedMessage = button.parentElement.querySelector('.added-to-cart');
        addedMessage.style.opacity = 1;

        setTimeout(() => {
            addedMessage.style.opacity = 0;
        }, 2000);

        num++;
        cartQuantity.innerText = num;
    }
})
