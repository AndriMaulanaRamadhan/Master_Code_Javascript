var Konfirmasi = true;
while (Konfirmasi) {
//Pilihan player
  var player = prompt ('Silahkan pilihan anda : \n Batu, Gunting, atau Kertas');

  //Pilihan Comp
  var comp = Math.random();

  if (comp < 0.34) {
    comp = 'Batu';
  } else if (comp >= 0.34 && comp <0.67) {
    comp = 'Gunting';
  } else {
    comp = 'Kertas';
  }

  //Rules
  var hasil = '';
  if (player == comp) {
    hasil = 'SERI';
  } else if (player == 'Batu') {
    hasil = (comp == 'Gunting') ? 'MENANG!' : 'KALAH!';
  } else if (player == 'Gunting') {
    hasil = (comp == 'Kertas') ? 'MENANG!' : 'KALAH!';
  } else if (player == 'Kertas') {
    hasil = (comp == 'Batu') ? 'MENANG!' : 'KALAH!';
  } else {
    hasil = 'Anda memasukkan pilihan yang SALAH!';
  }

  //Menanmpilkan hasil
  alert ('Hasilnya adalah anda pilih ' + player + ' dan komputer memilih ' + comp + '\n Maka hasilnya adalah ' + hasil);

  Konfirmasi = confirm ('Coba lagi?');
}