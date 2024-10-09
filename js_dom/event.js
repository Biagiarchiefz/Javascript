// EVENT HANDLER
  // langsung inline di file htmlnya
  // cara lama

const p3 = document.querySelector('#a .p3');

function ubah (){
  p3.style.backgroundColor = 'lightblue';

}

p3.onclick = ubah();

         // EVENT HANDLER
const p1 = document.querySelector('#a .p1');
p1.onclick = function(){
  p1.style.backgroundColor = 'red';
}



// addEventListener
   
// seleksi dlu element mana yang mau di tambah kejadiannya ketika di click
const p4 = document.querySelector('#b p');

// lalu kita panggil elementnya.addEventListener('kejadian', function);
// yang didalam functionnya kejadian apa yang terjadi ketika p4 di click
p4.addEventListener('click', function(){

 // menambahkan element baru
  const ul = document.querySelector('#b ul');

  const libaru = document.createElement('li');

  const textli = document.createTextNode('item baru');

  libaru.appendChild(textli);

  ul.appendChild(libaru);

})


const p2 = document.querySelector('#a .p2');
p2.addEventListener('click', function(){
  p2.style.color = 'blue';

})



