// Luas Segitiga
const luasForm = document.getElementById("luasForm");
const luasButton = luasForm.querySelector("button[type='submit']");
const resetLuasButton = document.getElementById("resetLuas");
const luasOutput = document.getElementById("luas");

luasForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const alas = parseFloat(document.getElementById("alas").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value);
    const luas = 0.5 * alas * tinggi;
    luasOutput.textContent = luas;
});

resetLuasButton.addEventListener("click", function () {
    luasForm.reset();
    luasOutput.textContent = "";
});

// Keliling Segitiga
const kelilingForm = document.getElementById("kelilingForm");
const kelilingButton = kelilingForm.querySelector("button[type='submit']");
const resetKelilingButton = document.getElementById("resetKeliling");
const kelilingOutput = document.getElementById("keliling");

kelilingForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const sisi1 = parseFloat(document.getElementById("sisi1").value);
    const sisi2 = parseFloat(document.getElementById("sisi2").value);
    const sisi3 = parseFloat(document.getElementById("sisi3").value);
    const keliling = sisi1 + sisi2 + sisi3;
    kelilingOutput.textContent = keliling;
});

resetKelilingButton.addEventListener("click", function () {
    kelilingForm.reset();
    kelilingOutput.textContent = "";
});