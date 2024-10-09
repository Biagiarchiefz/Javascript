var array = ['abi', 1, true];

console.log(array);

for ( i = 0; i < 3 ; i++) {
  console.log(array[i]);
}

console.log(array.join(' - '))






var angka = [1,2,3,4,5,6,7,8];

var cetak = function ( q ) {
  console.log( q )
}

angka.forEach(cetak)