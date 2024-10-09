// document.querySelector();
  // mirip dengan mengselector css
  // mengembalikan element ( 1 element ) 

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '70px';

const li2 = document.querySelector('#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// document.querySelectorAll();
   // mengselector semua element tapi harus menggunakan index
   // menggembalikan nodelist cara menggunakan mirip dengan HTML Colletion

   const p = document.querySelectorAll('p');
   for (let i = 0; i < p.length; i++) {

       p[i].style.backgroundColor = 'lightblue';

  }

  // BISA DENGAN MEMPERKECIL SCOPE
     // const secb = document.getElementById('b');
     // const p = secb.querySelector('p');
     //   p.style.backgroundColor = 'lightblue';


  
