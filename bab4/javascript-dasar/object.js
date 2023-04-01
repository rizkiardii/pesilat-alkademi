/*
OBJECT

Object merupakan kumpulan dari properti. Properti itu sendiri merupakan
asosiasi antara variabel dan nilai.
contoh :
Misalnya warna = “merah” , dimana “warna”
tersebut merupakan variabel dan “merah” merupakan nilai. Properti juga dapat
memiliki fungsi sebagai nilai, dalam hal ini properti tersebut disebut method. Untuk
membuat object baru, Anda mulai dengan sebuah variabel, diikuti new object()

*/

// let person = new Object();
// person.name = "Rizki";
// person.age = 27;
// person.gender = "Male";

// menampilkan isi person
// console.log(person);

// menampilkan nama
// console.log(person.name);

// menampilkan umur
// console.log(person.age);

// merubah value nama menjadi ardi
// person["name"] = "Ardi";
// console.log(person);

// OBJECT di dalam OBJECT
// let person = new Object();
// person.job = {};
// person.job.music = "singer";

// menampilkan isi objek
// console.log(person);

// menampilkan nilai dari properti objek
// console.log(person.job.music);

// menampilkan object yang berisi properti
// console.log(person.job);

// membuat objek langsung di isi
let person = {
  name: "Rizki",
  age: 27,
};

console.log(person);
