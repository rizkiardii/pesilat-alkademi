/*
1. Apa itu javascript ?
Javascript di gunakan untuk "membuat halaman web menjadi lebih interaktif"

Saat ini JavaScript dapat dijalankan tidak hanya di browser, tetapi juga di server,
atau sebenarnya di perangkat apa pun yang memiliki program khusus yang disebut
JavaScript Engine. JavaScript awalnya bernama Mocha, lalu berubah menjadi
LiveScript saat browser Netscape Navigator 2.0 rilis versi beta (September 1995).
Namun, setelah itu dinamai ulang menjadi JavaScript.

Ada beberapa hal yang membuat JavaScript unik, diantaranya:
- Integrasi penuh dengan HTML/CSS.
- Hal-hal sederhana dilakukan dengan sederhana.
- Didukung oleh semua browser utama dan diaktifkan secara default.

2. console javascript
Untuk melihat error dan mendapatkan banyak informasi berguna lainnya
tentang skrip, “alat pengembang” telah disematkan di browser. Alat pengembang
memiliki banyak fitur. Salah satunya untuk melihat pesan error, kita bisa melihat
melalui console. Console JavaScript dapat kita buka melalui Inspect Element >
Console.

Tampilan yang tepat dari alat pengembang bergantung pada versi peramban
Anda. Di dalam console, terdapat simbol > di bawah pesan error. Ini menandai
“baris perintah” di mana kita bisa menulis perintah atau kode-kode JavaScript dan
jalankan Enter untuk menjalankannya.

3. Dasar-dasar javascript
menampilkan hello world = alert('Hello world!');
membuat komentar 

// 1 komentar 
/* banyak komentar */

/*
A. Variabel
variabel adalah tempat untuk menyimpan data, untuk membuat variabel gunakan kata kunci let. 
contoh : 
let name = 'Rizki';

penamaan variabel
- nama variabel hanya boleh berisi huruf, angka, atau simbol $ dan _
- karakter pertama tidak boleh berupa angka
jika variabel mengandung lebih dari 1 kata, gunakan camelCase. contoh : fullName

untuk variabel konstan (tidak berubah) gunakan kata kunci const
contoh : 
const myBirthday = '27.09.1995';

const color_red = '#F00';
let color = color_red;
alert('color');

ada beberapa aturan yang baik untuk penulisan dan penamaan variabel, diantaranya :
- Gunakan nama yang bisa dibaca manusia.
- Jauhi singkatan atau nama pendek seperti a, b, c, kecuali Anda benar-benar
tahu apa yang Anda lakukan.
- Buatlah nama secara deskriptif dan ringkas.

B. Tipe data
Di dalam javascript terdapat tujuh jenis tipe adta. Lima di antaranya adalah String, Number, Boolean, Null, dan
Undefined.
1. String. Tipe data String pada dasarnya adalah sekelompok karakter. Pada tipe
data String, Anda bisa menggunakan tanda kutip ganda maupun tanda kutip
tunggal. Jika Anda memasukkan karakter apapun, misalnya 50 dalam tanda
kutip, maka angka tersebut akan diidentifikasi sebagai String.

2. Number. Tipe data Number dapat berupa bilangan bulat maupun bilangan
pecahan. Tipe data Number untuk bilangan bulat disebut Integer (Int),
sedangkan tipe data Number untuk bilangan pecahan disebut Float.

3. Boolean. Tipe data ini cukup khusus, dikarenakan hanya dapat menampung
dua nilai, yaitu nilai True dan False.

4. Null. Tipe data ini hanya memiliki satu nilai dalam JavaScript, yaitu 0.
Biasanya digunakan untuk menghapus isi variabel tanpa menghapus variabel
itu sendiri.

5. Undefined. Tipe data ini biasanya terjadi ketika mengakses objek yang tidak
ada atau mengakses variabel yang belum diberi nilai.

Typeof adalah operator untuk mengembalikan jenis tipe data dari sebuah
operand. Bisa dikatakan juga, typeof adalah operator bawaan yang mengembalikan
string yang menunjukkan jenis operan yang tidak dievaluasi.
*/
