var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
  // jika angkot kosong 
   if ( penumpang.length == 0 ) {

       // tambah penumpang  di awal array
       penumpang.push(namaPenumpang);

       // kembalikan isi array & keluar dari function
       return penumpang;
       
      } else {

        // telusuri seluruh kursi  dari awal
        for ( i = 0 ; i < penumpang.length; i++) {

            // jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
              
                // tambah penumpang di kursi tersebut 
                penumpang[i] = namaPenumpang;

                // kembalikan isi array dan keluar dari function
                return penumpang;
                
            }

            // jika sudah ada nama yang sama 
            else if ( penumpang[i] == namaPenumpang) {

                // tampilkan pesan kesalahannya 
                console.log( namaPenumpang + ' sudah ada di dalam angkot')

                // kembalikan isi array dan keluar  dari function
                return penumpang;
            }   

            // jika seluruh kuris terisi 
            else if (i == penumpang.length - 1) { 

                // tambah penumpang di akhir array 
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function     
                return penumpang;
            }
              }

      }

}


var hapuspenumpang = function (namaPenumpang, penumpang) {
    
    // jika angkot kosong
    if ( penumpang.length == 0) {

        // tampilkan pesan bahwa angkot kosong, dan 
        // tidak ada penumpang turun
        console.log('angkot tidak ada penumpang');

        // kembalikan isi array dan keluarkan dari function
        return penumpang;

    }

    else {
        // telusuri seluruh kursi dari awal 
        for ( i = 0; i < penumpang.length; i++){

            // jika nama penumpang sesuai 
            if ( penumpang[i] == namaPenumpang ){

            
               // hapus penumpang dengan mengubah namanya menjadi undifined
               penumpang[i] = undefined;
               // kembalikan isi array dan keluarkan dari function 
               return penumpang;
        }
        
            // jika tidak ada nama yang sesuai 
            else  if ( i == penumpang.length - 1 ) { 

               // tampilkan pesan kesalahanya 
               console.log( namaPenumpang + 'tidak ada di dalam angkot')

               // kembalikan isi array dan keluarkan dari function   
               return penumpang;
            }

        }

    }


}