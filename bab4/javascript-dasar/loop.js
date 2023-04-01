/*
LOOP / Perulangan

Loop atau perulangan merupakan bagian dari kode yang dieksekusi berulang
kali, baik beberapa kali atau sampai kondisi tertentu terpenuhi.
JavaScript memiliki 3 jenis perulangan
1. for
2. do-while
3. while

For
Jika nilai kondisi tersebut benar, maka perulangan akan dieksekusi.
Namun jika nilai kondisi salah, maka perulangan akan berhenti.
*/

//contoh
// for (let mulai = 1; mulai <= 10; mulai++) {
//   console.log(`${mulai} hello world!`);
// }

// menampilkan nama di dalam array menggunakan for
let daftarNama = ["Rizki", "Budi", "Diki"];

// mulai perulangan di mulai dari indeks 0
for (let nama = 0; nama < daftarNama.length; nama++) {
  console.log(daftarNama[nama]);
}
