
// membuat object dengan literal

var mahasiswa =  {
  nama : 'Biagi Archie Fais',
  umur : 20,
  nilai : [20 , 40, 60, 90],
  alamat : {
    kota : 'sumbawa',
    jalan : 'lintas sumbawa lunyuk',
    provinsi : 'jawa barat'
  }

};

// membuat object dengan function deklaration

function membuatObject (nama , umur, nilai) {
  var mahasiswa = {};

  mahasiswa.nama = nama;
  mahasiswa.umur = umur;
  mahasiswa.nilai = nilai;

  return mahasiswa;
}

var mhs1 = membuatObject('biagi', 13, [13, 14, 15]);
var mhs2 = membuatObject('adi', 14, [90, 60, 70]);


// membuat object dengan constructor

function Mahasiswa (NAMA, UMUR, NILAI) {

this.nama = NAMA;
  this.umur = UMUR;
  this.nilai = NILAI;

}

var mhs3 = new Mahasiswa('Budi', 13, [12, 14,15]);



