// pengelolaan angkot 
   // sopir
   // trayek
   // kas
   // penumpang
      // penumpang naik 
      // penumpang turun



// membuat object angkot

function Angkot (sopir , trayek, penumpang ,kas) {

  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;

  // function di dalam object disebut method
  this.penumpangNaik = function ( namaPenumpang ) {

    this.penumpang.push( namaPenumpang );

    return this.penumpang;

  }

  this.penumpangTurun = function ( namaPenumpang, bayar ) {

    if ( this.penumpang.length === 0 ) {
      
      alert('angkot masi kosong belum ada isi');

      return false;
    }

    // menulusuri data si penumpang yang akan turun di dalam angkot 
    // ada ngk nama si penumpangnya di dalam angkot
    for ( var i = 0; i < this.penumpang.length; i++ ) {

      // jika ada nama penumpang yang duduk dalam angkot di kursi ke [i] yang akan turun
      if ( this.penumpang[i] == namaPenumpang ) {
        // kalau ada kosongkan kursi si penumpang [i]  
        this.penumpang[i] = undefined;
        // dan pada saat penumpang turun, penumpang membayar dan uang kas bertambah
        // kas += bayar ( kas = kas + bayar )
        this.kas += bayar;

        return this.penumpang;
      }
    }
  }




}

var angkot1 = new Angkot ('riki', ['lembang', 'setiabudi'], [] , 0) 