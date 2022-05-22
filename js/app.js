// buttons, generator and delate declaration

const generate = document.querySelector(".btn-generate");
const delate = document.querySelector(".btn-delate");

// username

let userName = document.querySelector('#name');


// ticket price and discount

let ordinaryPrice = 0.21;
let underAgeDiscount = ordinaryPrice - ordinaryPrice * 0.2;
let overAgeDiscount = ordinaryPrice - ordinaryPrice * 0.4;

// console.log(underAgeDiscount);
// console.log(overAgeDiscount);

//  event listener

generate.addEventListener("click", function () {

// print username

    let typeUsername = document.querySelector(".username").value;
    userName.innerHTML += `${typeUsername}`;

// taking age value

    let typeAge = document.querySelector("#age").value;
    let underAge = document.querySelector('[value="under-age"]').value;
    let between = document.querySelector('[value="between"]').value;
    let overAge = document.querySelector('[value="over-age"]').value;

// taking distance value

    let typeDistance = document.querySelector('[class="distance"]').value;

    let ticketCost = document.querySelector("#cost");

// calculatin the price of the ticket basing on the distance and the age

    if (typeAge === underAge) {
        console.log(`${(typeDistance * underAgeDiscount).toFixed(2)} €`); 
        ticketCost.innerHTML += `${(typeDistance * underAgeDiscount).toFixed(2)} €`;
    } else if (typeAge === between) {
        console.log(`${(typeDistance * ordinaryPrice).toFixed(2)} €`);
        let ticketCost = document.querySelector("#cost");
        ticketCost.innerHTML += `${(typeDistance * ordinaryPrice).toFixed(2)} €`;
    } else {
        console.log(`${(typeDistance * overAgeDiscount).toFixed(2)} €`);
        ticketCost.innerHTML += `${(typeDistance * overAgeDiscount).toFixed(2)} €`;
    }
});