// MANIPULATION ELEMENT
// innerHTML
  // merubah isi dari element 

   // const judul = document.getElementById('judul');
   // judul.innerHTML = '<em>Biagi Archie Fais</em>';



// Element.style.<properticss>

  //  const judul = document.querySelector('#judul');
  //  judul.style.color = 'lightblue';
  //  judul.style.backgroundColor = 'orange';

// variable.setAttribute('attribut', 'isi attribut');

   // menambahkan atribut baru dalam element
   // setAttribut menimpa class yang awal untuk menangani kita menggunakan classlist   
   const q1 = document.querySelector('#b p');

   // classlist.add untuk menambahkan kelas
   const dd = q1.classList.add('ade');

   q1.setAttribute('id', 'ati');

   const q2 = document.querySelector('#ati');
   q2.style.color = 'blue';
   q2.style.fontSize = '50px';

// variable.getAttribute('attribut');

   // method untuk mengetahui isi dari atribut
   const a = document.querySelector('#a a');
   const qw = a.getAttribute('href');

// variabel.removeAttribute('attribut');

   // menghilangkan attribut dari element
   const qa = a.removeAttribute('href');


// variabel.classList.add('nama class')
// untuk menambahkan class pada element
  // const ss = document.querySelector('#a .p1');
  // const sa = ss.classList.add ('pe');


// variabel.classList.toggle('nama class')
  // artinya toggle kalau ada classnya hilangkan class tersebut
//   , kalau tidak ada class tambahkan kelas tersebut


