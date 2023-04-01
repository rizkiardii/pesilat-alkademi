// let nilai = 85;
// if (nilai >= 80) {
//   console.log("Selamat anda mendapat nilai A");
// } else {
//   console.log("Anda mendapat nilai B");
// }
// maka akan tampil "Selamat anda mendapat nilai A"

//operator ternary
// let nilai = 85;
// nilai >= 85
//   ? console.log("Selamat anda mendapat nilai A")
//   : console.log("Anda mendapat nilai B");

/*
If / else statement bisa memiliki lebih dari satu kondisi. Hal ini menggunakan
else if statement, yang berfungsi ketika kondisi pertama tidak terpenuhi, maka kode
program akan menjalankan kondisi berikutnya, sampai suatu kondisi terpenuhi.
*/
let age = 15;
if (age > 6 && age <= 13) {
  console.log("Anak-anak");
} else if (age > 13 && age <= 17) {
  console.log("Remaja");
} else if (age >= 18) {
  console.log("Dewasa");
} else {
  console.log("Balita");
}
