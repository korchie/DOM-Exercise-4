"use strict";

// shortcut variable names
let form = document.querySelector("form");
let select = document.querySelector("select");
let balance = 0;
let span = document.querySelector("span");
let coinPurse = document.querySelector("section");

// on form submission
form.addEventListener("submit", (event) => {
    // prevent refresh
    event.preventDefault();

    // get form data
    let coinQuantity = +(new FormData(form).get("coinQuantity"));
    let coinValue = +(new FormData(form).get("coinName"));
    let coinName = select.selectedOptions[0].innerText;

    // print the data
    console.log("quantity:", coinQuantity);
    console.log("coinValue:", coinValue);
    console.log("coinName:", coinName);

    // add coin to HTML
    for (let i = 0; i < coinQuantity; i++){
    document.querySelector("section").innerHTML += `<div class="coin ${coinName}" value="${coinValue}"></div>`;
    }

    // calculate balance
    balance += coinValue * coinQuantity;
    console.log("balance:", balance);

    // update the HTML to reflect our balance
    span.innerText = balance;

    });

    // when you click a coin
    coinPurse.addEventListener("click", (event) => {
        // if we click a coin
        if (event.target.localName === "div"){
            // remove that coin
            event.target.remove();
            // deduct balance
            balance -= +(event.target.attributes.value.value); // adding the + in front turns this string into a number!
            console.log("new balance:", balance);
        
            // update the HTML to reflect the new balance
            span.innerText = balance;
        }
    })


