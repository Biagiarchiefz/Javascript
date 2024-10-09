// node manipulation
  
// 1. document.createElement();
   // membuat element

   const el = document.createElement('p');

// 2. document.createTextNode();
   // membuat isi dari element (text)
   const  text = document.createTextNode('paragraf baru')

   // tambah text ke dalam element
   el.appendChild(text);
   
   
   // 3. appendChild artinya simpan ke akhir dari sebuah element parent
   // simpan tulisan ke dalam paragraf
// seleksi element parentnya yang mau di tuju
// lalu tambahkan element ke dalam document html bagian akhir parent 
const secA = document.getElementById('a');
secA.appendChild(el);
   



// 4. insertBefore untuk menaruh element kemana kita mau dengan menentukan elemen parent
// dan element setelah element itu mau di letakkan

const libaru = document.createElement('li')
const isili = document.createTextNode('li baru')

// lalu kita simpan si isi text li ke dalam li
libaru.appendChild(isili);

// lalu seleksi element parent dan element setelahnya dimana tempat kita mau letakkan
// parent
const ul = document.querySelector('#b ul')

// element setelahnya
const li = ul.querySelector('li:nth-child(2)');

// lalu gunakan insertBefore untuk menyatuhkan element tersebut
// panggil element parent lalu insertBefore  lalu masukkan element barunya dan element setelahnya

ul.insertBefore(libaru, li);



// 5. parent node.removeChild();
   // untuk menghapus element
   // seleksi parentnya lalu seleksi element yang mau di hapus
const link = document.getElementsByTagName('a')[0];
secA.removeChild(link);



// 6. parent Node.replaceChild(node baru, node lama);
      // menganti element lama dengan element baru

const secB = document.getElementById('b');
const p4 = secB.getElementsByTagName('p')[0];

const h2Baru =  document.createElement('h2');
const isih2baru = document.createTextNode('ini adalah H2 baru')

h2Baru.appendChild(isih2baru);

secB.replaceChild( h2Baru, p4);


el.style.color = 'lightgreen';
libaru.style.color = 'lightgreen';
h2Baru.style.color = 'lightgreen';


