function updateProductNumber(product, price, isIncreasing) {
    const productQuantity = document.getElementById(product + '-quantity');
    let totalProduct = productQuantity.value;
    if (isIncreasing == true) {
        totalProduct = parseInt(totalProduct) + 1;
    }
    else if (totalProduct > 0) {
        totalProduct = parseInt(totalProduct) - 1;

    }
    productQuantity.value = totalProduct;


    const productTotalPrice = document.getElementById(product + '-price');
    productTotalPrice.innerText = totalProduct * price;

    //calculate total 

    calculateTotal();

}

function getInputValue(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productQuantity = parseInt(productInput.value);
    return productQuantity;
}

function calculateTotal() {
    const phoneTotalPrice = getInputValue('phone') * 1219;
    const caseTotalPrice = getInputValue('case') * 59;
    const subTotal = phoneTotalPrice + caseTotalPrice;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('total-tax').innerText = tax;
    document.getElementById('total-amount').innerText = totalPrice;
}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

//case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);

})

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);

})