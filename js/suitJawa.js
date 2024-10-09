ulang = true;

while (ulang){


// membuat pilihan player
var player = prompt('Masukan pilihan anda: GAJAH, SEMUT, ORANG');


// menangkap pilihan computer dan membangkit bilangan random komputer
var computer = Math.random();

if ( computer < 0.34) {
  computer = 'GAJAH';
} else if ( computer >= 0.34 && computer <= 0.66){
  computer = 'SEMUT';
} else {
  computer = 'ORANG';
}



// menentukan rules MENGGUNAKAN TERNARY
var hasil = ''

if ( player == computer) {

  hasil = 'Anda seri';

} else if (player == 'GAJAH') {

  hasil = (computer == 'ORANG') ? 'ANDA MENANG' : 'ANDA KALAH';

} else if (player == 'SEMUT'){

  hasil = (computer == 'GAJAH') ? 'ANDA MENANG' : 'ANDA KALAH'; 

} else if (player == 'ORANG') {
  hasil = (computer == 'SEMUT') ? 'ANDA MENANG' : 'ANDA KALAH';
} else {
  hasil = 'ANDA MEMILIH PILIHAN YANG SALAH';
}


//tampilkan hasilnya

alert ('ANDA memilih: ' + player + ', Musuh memilih: ' + computer + '\n ANDA '+ hasil);

ulang = confirm('Apakah anda masih ingin bermain');
}

alert ('TERIMAKASIH SUDAH BERMAIN');
