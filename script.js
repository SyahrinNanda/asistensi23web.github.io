// Ambil elemen-elemen button
const buttonMerah = document.querySelector(".button-1");
const buttonBiru = document.querySelector(".button-2");
const buttonKuning = document.querySelector(".button-3");
const buttonReset = document.querySelector(".button-4");

// Fungsi untuk mengubah warna latar belakang
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Event listener untuk masing-masing button
buttonMerah.addEventListener("click", () => changeBackgroundColor("red"));
buttonBiru.addEventListener("click", () => changeBackgroundColor("blue"));
buttonKuning.addEventListener("click", () => changeBackgroundColor("yellow"));
buttonReset.addEventListener("click", () => changeBackgroundColor("#f4f4f4")); // Default warna latar belakang

document.addEventListener("keydown", function (e) {
  // Menonaktifkan F12
  if (e.keyCode === 123) {
    e.preventDefault();
  }
  // Menonaktifkan Ctrl + Shift + I
  if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
    e.preventDefault();
  }
  // Menonaktifkan Ctrl + U
  if (e.ctrlKey && e.keyCode === 85) {
    e.preventDefault();
  }
});
