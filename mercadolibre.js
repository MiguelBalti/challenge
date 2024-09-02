


const playstation = document.querySelectorAll('.ui-row-card__content.ui-row-card__content--core');
const productInfo = [];


for (let i = 0; i < 5 && i < playstation.length; i++) {
    const product = playstation[i];
    const nameElement = product.querySelector('.ui-row-item__title.ui-row-item__group__element');
    const priceElement = product.querySelector('.andes-money-amount.ui-row-price__part.ui-row-price--size-medium.andes-money-amount--cents-superscript.andes-money-amount--compact');
    
    if (nameElement && priceElement) {
        const name = nameElement.innerText.trim(); 
        const price = priceElement.innerText.trim();
        productInfo.push({ name, price });
    }
}
console.log(productInfo)