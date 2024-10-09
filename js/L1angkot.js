// a = 0;
// while (a < 10) {
//   console.log('hello boy' + a + 'x');
//   a++;
// }


// var angkot = 1;
// while(angkot <= 10) {
//   console.log('Angkot No. ' + angkot + ' beroperasi dengan baik.');
//   angkot++;
// }

var jumlahAngkot = 10;
var noAngkot = 1;
var angkotBeroperasi = 6;


// ANGKOT 2

//      MENGGUNAKAN WHILE

// while (noAngkot <= angkotBeroperasi){
//   console.log('Angkot No. '+ noAngkot + ' beroperasi dengan baik');
//   noAngkot++;
// }

//     MENGGUNAKAN FOR

// for(noAngkot = angkotBeroperasi+1; noAngkot <= jumlahAngkot; noAngkot++){
//   console.log('Angkot No. ' + noAngkot + ' tidak beroperasi');
// }


// ANGKOT 3

// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if( noAngkot <= 6) {
//     console.log('Angkot NO. ' + noAngkot + ' beroperasi dengan baik');
//   } else {
//     console.log('Angkot NO. ' + noAngkot + ' tidak beroperasi dengan baik');
//   }
// }

// ANGKOT 4

// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if( noAngkot <= 6) {
//     console.log ('Angkot No. ' + noAngkot + ' boreprasi dengan baik')
//   } else if ( noAngkot === 8) {
//     console.log ('Angkot No. ' + noAngkot + ' sedang lembur')
//   } else (
//     console.log('Angkot NO. ' + noAngkot + ' tidak beroperasi dengan baik')
//   )
// }

// ANKOT 5


// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if( noAngkot <= 6) {
//     console.log ('Angkot No. ' + noAngkot + ' boreprasi dengan baik')
//   } else if ( noAngkot === 8) {
//     console.log ('Angkot No. ' + noAngkot + ' sedang lembur')
//   } else if ( noAngkot === 10) {
//     console.log ('Angkot No. ' + noAngkot + ' sedang lembur') 
//    } else (
//     console.log('Angkot NO. ' + noAngkot + ' tidak beroperasi dengan baik')
//   )
// }

console.log('\n')

// ANGKOT 5 cara 2

// for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
//   if( noAngkot <= 6) {
//     console.log ('Angkot No. ' + noAngkot + ' boreprasi dengan baik')
//   } else if ( noAngkot === 8 ||  noAngkot === 10) {
//     console.log ('Angkot No. ' + noAngkot + ' sedang lembur')
//   } else (
//     console.log('Angkot NO. ' + noAngkot + ' tidak beroperasi dengan baik')
//   )
// }


// ANgkot 6

for (noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if( noAngkot <= 4 || noAngkot === 6 ) {
    console.log ('Angkot No. ' + noAngkot + ' boreprasi dengan baik')
  } else if ( noAngkot === 8 ||  noAngkot === 10 || noAngkot === 5) {
    console.log ('Angkot No. ' + noAngkot + ' sedang lembur')
  } else (
    console.log('Angkot NO. ' + noAngkot + ' tidak beroperasi dengan baik')
  )
}
