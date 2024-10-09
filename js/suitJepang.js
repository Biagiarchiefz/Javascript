
while ( ulang = true ) {


// menangkap pilih player
var p = prompt('Silangkan pilih suit anda: gunting, batu, kertas');


// menangkap pilihan computer dan membangkit bilangan random komputer
var comp = Math.random();

if (comp < 0.34) {
  comp = 'GUNTING';
} else if ( comp >= 0.34 && comp <= 0.68 ) {
  comp = 'BATU';
} else {
  comp = 'KERTAS';
}


// menentukan rules
var hasil = '';

if ( p == comp) {
  hasil = 'Anda seri';

} else if ( p == 'GUNTING') {

  if ( comp == 'KERTAS'){
    hasil = 'Anda menang';
  } else {
    hasil = 'Anda kalah';
  }

} else if ( p == 'BATU') {

  if (comp == 'GUNTING') {
    hasil = 'Anda menang'
  } else {
    hasil = 'Anda kalah'
  }
  
} else if (p == 'KERTAS') {
  if (comp == 'BATU') {
    hasil = 'Anda menang';
  } else {
    hasil = 'Anda Kalah'
  }

} else {
  hasil = 'Anda memasukan pilihan yang salah'
}
 

//tampilkan hasilnya
alert ('Kamu memilih: ' + p + ', musuh memilih: ' + comp +'\n'+ hasil); 

ulang = confirm('Apakah anda ingin bermain lagi?');

}

alert ('Terimakasi sudah bermain');
