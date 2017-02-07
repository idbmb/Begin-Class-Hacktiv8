/*
Please answer the questions below :

1. Apakah semua solusi bisa di eksekusi? Bagaimana caranya mem-verifikasinya?
   Answer :
   Semua Bisa dieksekusi, Tapi ada beberapa solusi yang actual tidak sesuai expected yaitu roman_numerals_2.js,
   roman_numerals_3.js dan roman_numerals_4.js
   cara verifikasinya dengan cara menulis kembali code yang ada pada soal (den) dan menjalankannya
   dengan perintah node roman_numerals_X.js (X = 1, 2, 3, dan 4)

2. Apakah ada solusi code yang mengandung *bugs*? Dan bagaimana cara mem-verifikasinya?
   Answer :
   Ada, Untuk memverikasi kita bisa menggunakan console.log() atau debugger

3. Adakah sintaks baru yang belum kamu ketahui? Apakah ada operator baru, expression atau method baru?
   Answer :
   Ada, Pada solution code roman_numerals_2 dan roman_numerals_3 terdapat sintaks operator typeof

4. Dapatkah kamu mengerti baris per baris dari semua code yang ada?
   Answer :
   Ada yang dimengerti dan ada juga yang masih belum mengerti

5. Dapatkah kamu gunakan sintaks baru yang kamu temui di sini di *project* kamu berikutnya?
   Answer :
   Ketika mendapatkan masalah yang sama nanti akan dicoba.

6. Adakah struktur data baru? Apa saja, tolong sebutkan
   Answer :
   Struktur data baru terdapat pada (key[+digits.pop() + (i * 10)] || "") dan  if(typeof num !== 'number')

7. Apa yang dapat kamu pelajari dari perspektif yang berbeda dari berbagai solution code? Apakah benar-benar berbeda? Jika ya, kenapa berbeda? Debat! Cari tau.
   Answer :
   Berbeda, dari semua solution code dapat saya pelajari bahwa script yg pendek/sederhana
   tetapi jika masih ada error misalnya hasilnya tidak sesuai expected tetap di anggap tidak layak.

8. Jika kamu harus memilih satu, mana yang menurut kamu yang merupakan solusi terbaik, dan kenapa? Diskusikan dengan teman kelompok kamu tentang hal ini.
   Answer :
   Solusi terbaik adalah solution 1 roman_numerals_1.js karena actual sesuai dengan expected, sebenarnya ada yg bagus juga sih tapi tidak sesuai expected.

9. Apakah dampak dari pola atau pattern tersebut terhadap performa aplikasi? Bagaimana kamu mengukur dampaknya?
   Answer :
   Dampaknya berpengaruh pada performa komputer karena code yang rumit dan tidak berujung akan membebani
   performa komputer contohnya seperti INFINITY LOOP

10. Apakah dampak dari pola atau pattern terhadap maintenance code? Kenapa kamu bisa yakin?
   Answer :
   Dampaknya akan memudahkan programmer untuk proses pengembangan program selanjutnya.
   Yakin karena penulisan code yang readable yg dimana method atau function tidak panjang dan tujuannya jelas
   dan tiap method hanya memiliki satu fungsi saja akan membuat tim/orang lain lebih efisien  dalam menyelesaikan project.
*/
