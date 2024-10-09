// var kubusA = 4; 
//   var kubusB = 3;
//   var volumeA;
//   var volumeB;
//   var total;

//   volumeA = kubusA * kubusA * kubusA * kubusA;
//   volumeB = kubusB * kubusB * kubusB;

//   total = volumeA + volumeB;

//   console.log(total)

function hitungVolume ( kubusA , kubusB) {
  var Va, Vb, total;

   Va = kubusA * kubusA * kubusA * kubusA;
   Vb = kubusB * kubusB * kubusB;
   Vc = 12;

   total = Va + Vb;

   // mengembalikan nilai 12
   return Vc;

}

// function expression

var pangil = function (name) {
 alert ('hai ' + name);

}

pangil('dopi');


// function deklaration

function pembagian ( a , b ) {
  // var total;

  // total = a / b;

  return a / b;

}

function perkenala( nama ) {
  console.log('haii ' + nama);

}

perkenala('biagi')




console.log(pembagian(10,5))
console.log(hitungVolume(2, 4));
console.log(hitungVolume(4, 4));
alert(hitungVolume(2,5));


