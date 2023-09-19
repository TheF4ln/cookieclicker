//https://github.com/SPSMB
/*
// Const promnena co se nemneni
const PI = 3.14;
// Console vypise zavorku (number)
console.log(number)
// Let promenana co se muze mnenit
let number = 0;
console.log(number);
number = 10;
console.log(number)
.onclick na kliknutí
() => {} arrow funkce
*/

let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");

let count = 0;
cookie.addEventListener('click', CookieClicker);

function CookieClicker(){
    //numberOfCookies = numberOfCookies +1;
    //numberOfCookies +=1
    //++ inkrement zvetsuje cislo o 1
    //--dekrement zmenusje cislo o 1
    count++
    counter.innerText = "Cookies: " + count
    //counter.innerText = `Cookies:  ${Counter}`;
}