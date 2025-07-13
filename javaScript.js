let cartCount = 0

const cartCounter = document.getElementById('card__count')
const addToCardBucket = document.querySelectorAll('.card__bucket')

addToCardBucket.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount
    } )
});