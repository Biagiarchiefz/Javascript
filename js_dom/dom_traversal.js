// DOM TRAVERSAL (PENELUSURA DOM)
// seleksi dlu dengan dom_selection setelah elementya ketemu lalu kita akan memilih element yang lain
// berdasarkan element yang kita seleksi dengan dom_selection



// Kasus 1
// menghilangkan 1 element div card dengan saya menggunakan removeChild
// bisa juga menggunakan style.display = ('none);

// event hendling
// const card = document.querySelector('.card');
// const ex = document.querySelector('.card .close');

//   ex.addEventListener('click', function() {

//     // const contain = document.querySelector('.container');
    
//     // const card = document.querySelector('.container .card');
    
//     // contain.removeChild(card);

//     card.style.display = ('none');

// });


// Contoh Dom_traversal

// querySelectorAll menggembalikan Html colletion maka kita looping tombol (x)
// untuk mengetahui tombol mana yang kita pencet
// const ex = document.querySelectorAll('.card .close');

// for ( let i = 0; i < ex.length ; i++ ) {
//   // untuk melooping pada (X)nya kita ambil satu2
//   // (X) dengan index ke [i]

//   ex[i].addEventListener('click', function() {

//     // ambil si element X dengan index ke [i] kita ambil parentnya(telusuri parentnya)
//     ex[i].parentElement.style.display = ('none');


//   });

// }

// setiap element pada nodelist pada tombol ex ini kita jalankan function

// ex.forEach(function (el) {

//   // el sma saja dengan ex[i]
//   el.addEventListener('click', function(e) {

//     e.target.parentElement.style.display = ('none');
//     // preventDefault berada dalam objek event yang tujuannya untuk menghentikan aksi default
//     // yang di lakukan element
//     e.preventDefault();  

//     // event bubbling
//     e.stopPropagation();
    
//   });
// });

// Dom_traversal method
   // parentNode
   // parentElement
   // nextSibling
      // saudara kandung dari element yang kita pilih

   // nextElementSibling
   // previousSibling
   // previousElementSibling

  //  const nama = document.querySelector('.nama');

   // mengambil parent dari class nama yaitu div class card
   // untuk mengambil lagi kakek dari class nama kita bisa tambahkan parentElement lagi

  //  console.log(nama.parentElement);

  // nextSibling diambilnya node jadi enternya di hitung
  //  console.log(nama.nextSibling);

   // untuk pasti menggambil element kita menggunakan nextElementSibling(adek)
  //  console.log(nama.nextElementSibling);

  // previousSibling yaitu element sebelum element yang kita pilih(kakak)



  // event bubbling

  // const kartu = document.querySelectorAll('.container .card');
  // console.log(kartu);

  // kartu.forEach( function (element) {
  //   element.addEventListener('click', function (e) {
  //   alert('ok')
  //   });
  // });



  // cara supaya codiganya yang benar dan singkat

  const container = document.querySelector('.container');

  // click apapun asal ada di dalam container
  // e itu menerima parameter atau inputan apa yg kita pencet
  container.addEventListener('click', function (e) {
   
    // console.log(e.target);

    // mecari tau kita tekan tombol close yang mana
    // cari parameter yg kita pencet yang nama classnya sma dengan close
    if ( e.target.className == 'close' ) {
      // lalu ambil target kita tadi
      e.target.parentElement.style.display = 'none';

    }

  });
