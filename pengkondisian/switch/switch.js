var makanan = prompt ('apakah makanan /minuman favoritmu sehat? \n (cth: nasi,daging,susu,hamburger,softdrink)');

switch (makanan) {
  case 'nasi' :
  case 'daging' :
  case 'susu' :
    alert ('Makanan favoritmu sangat sehat untuk tubuhmu');
    break;
  case 'hamburger' :
  case 'softdrink' :
    alert ('Makanan favoritmu tidak baik untuk tubuhmu');
    break;
  default :
  alert ('Ini bukanlah pilihan makanan dalam daftar menu');
}