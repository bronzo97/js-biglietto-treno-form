

let typeUsername = document.querySelector(".username").value;
const typeDistance = document.querySelector(".distance").value;

const generate = document.querySelector(".btn-generate");
const delate = document.querySelector(".btn-delate");


console.log(typeUsername, typeDistance);

const distance = document.getElementById('');
const userName = document.getElementById('name');


generate.addEventListener("click", function () {
    userName.innerHTML = `${typeUsername}`;
});