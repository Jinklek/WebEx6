"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const product = document.getElementById("product");
    const quantityInput = document.getElementById("quantity");
    const message = document.getElementById("message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const quantityText = quantityInput.value.trim();

        if (!/^[0-9]+$/.test(quantityText)) {
            message.textContent = "Ошибка: введите количество цифрами.";
            message.className = "text-danger";
            return;
        }

        const quantity = Number(quantityText);

        if (quantity <= 0) {
            message.textContent = "Ошибка: количество должно быть больше нуля.";
            message.className = "text-danger";
            return;
        }

        const price = Number(product.value);
        const total = price * quantity;

        message.textContent = "Стоимость заказа: " + total + " руб.";
        message.className = "text-success";
    });
});