"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const quantityInput = document.getElementById("quantity");
    const optionSelect = document.getElementById("option");
    const optionContainer = document.getElementById("option-container");
    const propertyContainer = document.getElementById("property-container");
    const giftWrap = document.getElementById("gift-wrap");
    const message = document.getElementById("message");

    const productRadios = document.querySelectorAll(
        'input[name="product"]'
    );

    function calculatePrice() {
        const selectedProduct = document.querySelector(
            'input[name="product"]:checked'
        ).value;

        const quantity = Number(quantityInput.value);
        let pricePerItem = 0;

        optionContainer.hidden = selectedProduct !== "pen";
        propertyContainer.hidden = selectedProduct !== "book";

        if (quantityInput.value === "" ||
            !Number.isInteger(quantity) || quantity < 1) {
            message.textContent =
                "Введите целое количество от 1.";
            message.className = "mt-3 text-danger";
            return;
        }

        if (selectedProduct === "notebook") {
            pricePerItem = 100;
        } else if (selectedProduct === "pen") {
            pricePerItem = Number(optionSelect.value);
        } else {
            pricePerItem = 500;

            if (giftWrap.checked) {
                pricePerItem = pricePerItem + 50;
            }
        }

        const total = pricePerItem * quantity;

        message.textContent =
            "Стоимость заказа: " + total + " руб.";

        message.className = "mt-3 text-success";
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });

    productRadios.forEach(function (radio) {
        radio.addEventListener("change", calculatePrice);
    });

    quantityInput.addEventListener("input", calculatePrice);
    optionSelect.addEventListener("change", calculatePrice);
    giftWrap.addEventListener("change", calculatePrice);

    calculatePrice();
});