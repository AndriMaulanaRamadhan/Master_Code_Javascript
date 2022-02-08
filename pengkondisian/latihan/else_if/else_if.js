var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi) {
    console.log ('Angkot no. ' + noAngkot + 'beroperasi dengan baik')
  } else if (noAngkot === 8) {
    console.log ('Angkot no. ' + noAngkot + 'sedang lembur')
  } else if (noAngkot === 10) {
    console.log ('Angkot no. ' + noAngkot + 'sedang lembur')
  } else {
    console.log ('Angkot no. ' + noAngkot + 'tidak beroperasi dengan baik')
  }
}