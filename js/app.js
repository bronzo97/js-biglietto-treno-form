// buttons, generator and delate declaration

const generate = document.querySelector(".btn-generate");
const delate = document.querySelector(".btn-delate");

// username and distance declaration

let userName = document.querySelector('#name');
const distance = document.getElementById('');

// ticket price and discount

let ordinaryPrice = 0.21;
let underAgeDiscount = ordinaryPrice - ordinaryPrice * 0.2;
let overAgeDiscount = ordinaryPrice - ordinaryPrice * 0.4;

// console.log(underAgeDiscount);
// console.log(overAgeDiscount);

//  event listener

generate.addEventListener("click", function () {
    let typeUsername = document.querySelector(".username").value;
    userName.innerHTML += `${typeUsername}`;

    let typeAge = document.querySelector("#age").value;
    let underAge = document.querySelector('[value="under-age"]').value;
    let between = document.querySelector('[value="between"]').value;
    let overAge = document.querySelector('[value="over-age"]').value;

    let typeDistance = document.querySelector('[class="distance"]').value;

    if (typeAge === underAge) {
        console.log(`${typeDistance * underAgeDiscount} €`);    
    } else if (typeAge === between) {
        console.log(`${typeDistance * ordinaryPrice} €`)
    } else {
        console.log(`${typeDistance * overAgeDiscount} €`);
    }
});