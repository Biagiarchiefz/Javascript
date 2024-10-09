 // latihan warna
 
const tombol = document.querySelector('button');
// const body = document.querySelector('body');

tombol.addEventListener('click', function(){
  //  document.body.style.backgroundColor = 'lightblue';
  // document.body.setAttribute('class', 'biru');
  document.body.classList.toggle('biru')


});


// tombol.addEventListener('dblclick', function(){
//   body.style.backgroundColor = 'lightgreen';
// });

// KASUS 2
const btnbaru = document.createElement('button');
const textbtn = document.createTextNode('tombol baru');

btnbaru.appendChild(textbtn);
btnbaru.setAttribute('type','button');

tombol.after(btnbaru);

btnbaru.addEventListener('click', function(){
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';


});

// KASUS 3
const smerah = document.querySelector('input[name = smerah]');
const shijau = document.querySelector('input[name = shijau]');
const sbiru = document.querySelector('input[name = sbiru]');

smerah.addEventListener('input', function(){

  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';

});

shijau.addEventListener('input', function(){
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sbiru.addEventListener('input', function(){
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;

  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


// KASUS 4

// ketika mouse bergerak dalam body jalankan function berikut
document.body.addEventListener('mousemove', function(event){

  // posisi mouse 
    // untuk menangkap pergerakan mouse ke sumbuh x
//  console.log (event.clientX);
 
    // innnerWidht untuk mengetahui lebar document dalam browser yang putih
// console.log(window.innerWidth);

const xpos = Math.round((event.clientX/window.innerWidth) * 255);
const ypos = Math.round((event.clientY/window.innerHeight) * 255);

document.body.style.backgroundColor = 'rgb('+ xpos +','+ ypos +',100)';

    
})









