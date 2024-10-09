const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const kumpulanGambarBawah = document.querySelectorAll('.thumbnail .gambarBawah')

container.addEventListener('click', function(e) {
 
  // cek apakah yang di click adalah gambarBawah
  if ( e.target.className == 'gambarBawah') {

    // kita ganti srcnya
    jumbo.src = e.target.src;

    // tambahkan classnya
    jumbo.classList.add('fade');
  }

  // kita setwaktu buat si kelas fade kita hilangkan 0.5s 
  // terus tambahkan lagi
  setTimeout( function () {
    jumbo.classList.remove('fade');
  }, 500);

  // (kumpulan) untuk mengambil satu element dari looping
  kumpulanGambarBawah.forEach( function (kumpulan) {

    // cara 1
    // if ( kumpulan.classList.contains('active')) {
    //   kumpulan.classList.remove('active');
    // }

    // cara 2
    kumpulan.className ='gambarBawah';

  });

  e.target.classList.add('active');
  
});
