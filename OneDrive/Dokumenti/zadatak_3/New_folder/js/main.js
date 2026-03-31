// =======================
// 1. PODACI O PROIZVODIMA
// =======================
const PRODUCT1_NAME = "Zlatna Ribica";
const PRODUCT1_PRICE = 1500;
let PRODUCT1_QTY = 0;

const PRODUCT2_NAME = "Neon Tetra";
const PRODUCT2_PRICE = 450;
let PRODUCT2_QTY = 0;

const PRODUCT3_NAME = "Stakleni akvarijum 50L";
const PRODUCT3_PRICE = 12000;
let PRODUCT3_QTY = 0;

// Primeri typeof
console.log(typeof PRODUCT1_NAME); // string
console.log(typeof PRODUCT1_PRICE); // number
console.log(typeof PRODUCT1_QTY);   // number

// =======================
// 2. OSTALE KONSTANTE
// =======================
const VAT_RATE = 0.2;
const CURRENCY = "RSD";
const USD_PER_EUR = 1.16;
const RAW_COUPON = "SAVE10";

// =======================
// 3. GLOBALNI IZNOS I BROJAČ PROIZVODA
// =======================
let iznos = 0;
let brojProizvoda = 0;

// =======================
// 4. NORMALIZACIJA KUPONA
// =======================
function normalizeCoupon(code) {
    return code.trim().toUpperCase();
}

// =======================
// 5. VALIDACIJA KUPONA
// =======================
function validateAndNotify() {
    let inputCode = document.getElementById("promo-input").value;
    let normalizedCode = normalizeCoupon(inputCode);

    if (normalizedCode === RAW_COUPON) {
        alert("Uneti kod je validan.");
    } else {
        alert("Uneti kod nije validan.");
    }
}

// =======================
// 6. LOGIN FUNKCIJA
// =======================
function login(email, password) {
    email = email.trim();
    password = password.trim();
    return email === "admin" && password === "admin";
}

// Funkcija koja se poziva sa dugmeta za login
function testLogin() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (login(email, password)) {
        alert("Uspešno ste prijavljeni!");
    } else {
        alert("Neispravan email ili lozinka!");
    }
}

// =======================
// 7. DODAVANJE NA UKUPAN IZNOS
// =======================
function dodajNaIznos(cena) {
    iznos += cena;
    brojProizvoda += 1;
    console.log("Ukupan iznos kupovine:", iznos, CURRENCY);
    console.log("Broj proizvoda u korpi:", brojProizvoda);

    // Ažuriranje brojača u HTML-u
    let cartCounter = document.getElementById("cartCount");
    if (cartCounter) {
        cartCounter.innerText = brojProizvoda;
    }
}

// =======================
// 8. ALERT NA IKONU KORPE
// =======================
function openCart() {
    alert(
        "Ukupan iznos kupovine je " + iznos + " " + CURRENCY +
        "\nBroj proizvoda: " + brojProizvoda
    );
}

// =======================
// 9. FUNKCIJA ZA DUGME ADD TO CART
// =======================
function addToCart(cena) {
    dodajNaIznos(cena);
    alert("Proizvod dodat u korpu!");
}
// =======================
// 10. DEMONSTRACIJA RAD FUNKCIJE dodajNaIznos
// =======================
dodajNaIznos(PRODUCT1_PRICE);
dodajNaIznos(PRODUCT2_PRICE);
dodajNaIznos(PRODUCT3_PRICE);