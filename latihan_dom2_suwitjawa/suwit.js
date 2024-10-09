
function getPilihanComputer (){
  // menangkap pilihan computer dan membangkit bilangan random komputer
  const computer = Math.random();
  
  // jika computer dapat nilai random kurang dari 0.34 return gajah 
  // keluar dari function
  if ( computer < 0.34) return 'gajah';
  if ( computer >= 0.34 && computer <= 0.66) return 'semut';
  return 'orang';

}


function getHasil (player, computer){
  
  // jika player sama dengan komputer return seri
if ( player == computer) return 'SERI';

if (player == 'gajah') return (computer == 'orang') ? ' MENANG' : ' KALAH';

if (player == 'semut') return (computer == 'gajah') ? ' MENANG' : ' KALAH'; 

if (player == 'orang') return (computer == 'semut') ? ' MENANG' : ' KALAH';

}


function putar () {

  const imgCom = document.querySelector('.area-komputer .img-komputer')
  const gambar = ['gajah' , 'orang', 'semut'];
  let i = 0;
  const waktuMulai = new Date().getTime(); 

  // setInterval() fungsi untuk melakukan sesuatu berulang ulang selama interfal waktu tertentu
  setInterval(function(){
    if ( new Date().getTime() - waktuMulai > 1000 ) {
      clearInterval
      return;
    }

    imgCom.setAttribute('src', 'img/'+ gambar[i++] + '.jpeg')
    if ( i == gambar.length ) {
      i = 0
    };

  }, 100 ) // jalankan fungsi berikut selama 0,1 detik
};



const pilihan = document.querySelectorAll('li img');

// untuk setiap img yang ada di nodelist (pilihan) jalankan function berikut
// di dalam functionnya kita beri parameter untuk mengambil masing2 imgnya
pilihan.forEach( function (pil) {

  pil.addEventListener('click', function() {
      // tangkap pilian komputer
  const pilihancomputer = getPilihanComputer();

  // tangkap pilihan player sesuai dengan nama classnya
  const pilihanPlayer = pil.className;

  // tangkap hasil yang menerima 2 parameter pilihanplayer dan pilhan computer
  const hasil = getHasil(pilihanPlayer, pilihancomputer);

  putar();

  // jalankan program berikutnya setelah 1 detik karena fungsion (putar) berjalan 1 detik
  setTimeout(function() {
// ganti gambar bagian komputer 
  // seleksi gambar mana yang mau di ganti
  const gambarComputer = document.querySelector('.area-komputer .img-komputer');
  
  // kita ganti gambar dengan memanipulasi atributnya dengan settAttribute('attribute', 'isiattributnya')
  gambarComputer.setAttribute('src', 'img/' + pilihancomputer + '.jpeg');


  // isi element div untuk menampilkan informasi kalah menang
  // seleksi div mana yang mau di ganti isi dalamnya
  const infoHasil = document.querySelector('.container .info');
  infoHasil.innerHTML = hasil ;

  }, 1000 );
  
  })
});






// kita seleksi gambar jempol (Gajah)
// const pGajah = document.querySelector('.area-player .gajah');

// // ketika gambar jempol (gajah) di click jalankan function
// pGajah.addEventListener('click', function(){

//   // tangkap pilian komputer
//   const pilihancomputer = getPilihanComputer();

//   // tangkap pilihan player sesuai dengan nama classnya
//   const pilihanPlayer = pGajah.className;

//   // tangkap hasil yang menerima 2 parameter pilihanplayer dan pilhan computer
//   const hasil = getHasil(pilihanPlayer, pilihancomputer);


//   // ganti gambar bagian komputer 
//   // seleksi gambar mana yang mau di ganti
//   const gambarComputer = document.querySelector('.area-komputer .img-komputer');
  
//   // kita ganti gambar dengan memanipulasi atributnya dengan settAttribute('attribute', 'isiattributnya')
//   gambarComputer.setAttribute('src', 'img/' + pilihancomputer + '.jpeg');


//   // isi element div untuk menampilkan informasi kalah menang
//   // seleksi div mana yang mau di ganti isi dalamnya
//   const infoHasil = document.querySelector('.container .info');
//   infoHasil.innerHTML = hasil ;

// });


// const pSemut = document.querySelector('.area-player .semut');
// pSemut.addEventListener('click', function(){


//   const pilihancomputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanPlayer, pilihancomputer);

//   const gambarComputer = document.querySelector('.area-komputer .img-komputer');
//   gambarComputer.setAttribute('src', 'img/' + pilihancomputer + '.jpeg');

//   const infoHasil = document.querySelector('.container .info');
//   infoHasil.innerHTML = hasil ;

// });


// const pOrang = document.querySelector('.area-player .orang');
// pOrang.addEventListener('click', function(){

//   const pilihancomputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanPlayer, pilihancomputer);

//   const gambarComputer = document.querySelector('.area-komputer .img-komputer');
//   gambarComputer.setAttribute('src', 'img/' + pilihancomputer + '.jpeg');
  
//   const infoHasil = document.querySelector('.container .info');
//   infoHasil.innerHTML = hasil ;

// });