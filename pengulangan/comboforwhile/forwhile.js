var noAngkot = 1;
var jmlAngkot = 10;
var angkotBeroperasi = 6;

while (noAngkot <= angkotBeroperasi) {
  console.log ('Angkot no. ' + noAngkot + 'beroperasi dengan baik')
  noAngkot++;
}
for (noAngkot = angkotBeroperasi + 1; noAngkot <= 10; noAngkot++) {
  console.log ('Angkot no. ' + noAngkot + 'tidak bisa beroperasi dengan baik')
}