const back = document.querySelectorAll(".back");
back.forEach((b) => {
  b.addEventListener("click", () => {
    b.parentElement.classList.add("hidden");
  });
});

const boxPersegiPanjang = document.querySelector(".persegi-panjang-rumus");
const persegiPanjang = document.querySelector(".persegi-panjang");
persegiPanjang.addEventListener("click", () => {
  boxPersegiPanjang.classList.remove("hidden");
});

const hKelPersegiPanjang = document.querySelector(
  ".persegi-panjang-rumus .keliling .hasil"
);
hKelPersegiPanjang.addEventListener("click", () => {
  let p =
    hKelPersegiPanjang.previousElementSibling.previousElementSibling.value;
  let l = hKelPersegiPanjang.previousElementSibling.value;
  hKelPersegiPanjang.textContent = `${2 * p + 2 * l} cm`;
});

const hLuasPersegiPanjang = document.querySelector(
  ".persegi-panjang-rumus .luas .hasil"
);
hLuasPersegiPanjang.addEventListener("click", () => {
  let p =
    hLuasPersegiPanjang.previousElementSibling.previousElementSibling.value;
  let l = hLuasPersegiPanjang.previousElementSibling.value;
  hLuasPersegiPanjang.textContent = `${p * l} cm`;
});

const Segitiga = document.querySelector(".segitiga");
const boxSegitiga = document.querySelector(".segitiga-rumus");
Segitiga.addEventListener("click", () => {
  boxSegitiga.classList.remove("hidden");
});

const hLuasSegitiga = document.querySelector(".segitiga-rumus .luas .hasil");
hLuasSegitiga.addEventListener("click", () => {
  let a = hLuasSegitiga.previousElementSibling.previousElementSibling.value;
  let t = hLuasSegitiga.previousElementSibling.value;
  hLuasSegitiga.textContent = `${(a * t) / 2} cm`;
});
