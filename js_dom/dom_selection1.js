//  DOM Selection
    // HTML Collection adalah mengembalikan array untuk mengaksesnya kita menggunakan index
    // nama variabelnya bebas (const itu variabel)



//  document.getElementById()
    // getElementById() menghasilkan Element

const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = 'grey';
judul.innerHTML = 'Biagi Archie Fais';


// document.getElementsByTagName();
   // cari elements sesuai taq (P) yang ada di html dan simpam di variabel ultra
   // mengemablikan html Collections(HTML Collectons adalah kumpuluan elements)
const ultra = document.getElementsByTagName('p');

// mengunakan looping kalau bnyak elemnt yang mau di ubah kalau cuma 1 gunakan index
for ( let i = 0; i < ultra.length; i++) {
  ultra[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '70px';


// document.getElementsByClassName();
  // cari element2 yang nama kelasnya apa
  // menggembalikan HTML Collections

  const p1 = document.getElementsByClassName('p1')[0];
  p1.style.fontWeight = 'bold';
  p1.style.fontSize = '40px';

 
