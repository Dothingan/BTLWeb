// let quantity = 1;
// const pricePerItem = 29990000; // giá của một sản phẩm (tính theo đồng)

// function formatPrice(price) {
//     return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
// }

// function updatePrice() {
//     const totalPrice = quantity * pricePerItem;
//     document.getElementById('price').textContent = formatPrice(totalPrice);
// }

// function increaseQuantity() {
//     quantity++;
//     document.getElementById('quantity').textContent = quantity;
//     updatePrice();
// }

// function decreaseQuantity() {
//     if (quantity > 1) {
//         quantity--;
//         document.getElementById('quantity').textContent = quantity;
//         updatePrice();
//     }
// }

// function deleteItem() {
//     quantity = 0;
//     document.getElementById('quantity').textContent = quantity;
//     updatePrice();
// }

// function formatPrice(price) {
//     return new Intl.NumberFormat('vi-VN').format(price) + ' đ';
// }

// function updatePrice(container) {
//     const quantity = parseInt(container.querySelector('.quantity').textContent);
//     const pricePerItem = parseInt(container.getAttribute('data-price'));
//     const totalPrice = quantity * pricePerItem;
//     container.querySelector('.price').textContent = formatPrice(totalPrice);
// }

// function increaseQuantity(button) {
//     const container = button.closest('.chance');
//     let quantityElement = container.querySelector('.quantity');
//     let quantity = parseInt(quantityElement.textContent);
//     quantity++;
//     quantityElement.textContent = quantity;
//     updatePrice(container);
// }

// function decreaseQuantity(button) {
//     const container = button.closest('.chance');
//     let quantityElement = container.querySelector('.quantity');
//     let quantity = parseInt(quantityElement.textContent);
//     if (quantity > 1) {
//         quantity--;
//         quantityElement.textContent = quantity;
//         updatePrice(container);
//     }
// }

function deleteItem(button) {
    const container = button.closest('.payment-information-sl');
    container.remove();
}

function formatCurrency(number) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}

function updatePrice(element) {
    const chance = element.closest('.chance');
    const pricePerUnit = parseInt(chance.getAttribute('data-price'));
    const quantity = parseInt(chance.querySelector('.quantity').innerText);
    const priceElement = chance.querySelector('.price');
    const totalPriceElement = document.getElementById('total-price');

    const totalPrice = pricePerUnit * quantity;
    priceElement.innerText = formatCurrency(totalPrice);

    // Update the total price
    const allPrices = document.querySelectorAll('.chance .price');
    let grandTotal = 0;
    allPrices.forEach(priceEl => {
        const price = parseInt(priceEl.innerText.replace(/\D/g, ''));
        grandTotal += price;
    });
    totalPriceElement.innerText = formatCurrency(grandTotal);
}

function increaseQuantity(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.innerText);
    quantityElement.innerText = ++quantity;
    updatePrice(button);
}

function decreaseQuantity(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.innerText);
    if (quantity > 1) {
        quantityElement.innerText = --quantity;
        updatePrice(button);
    }
}

function deleteItem(button) {
    const chance = button.closest('.chance');
    chance.remove();
    updatePrice(document.body);
}

function selectDeliveryMethod(button) {
    var buttons = document.querySelectorAll('.btn-group2 button');
    buttons.forEach(function(btn) {
        btn.classList.remove('active');
    });
    button.classList.add('active');
}