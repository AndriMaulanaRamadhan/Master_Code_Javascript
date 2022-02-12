//1. join
var hewan = ['Zebra','Kerbau','Naga'];
console.log (hewan.join(' '));

//2. push & pop
var kendaraan = ['Becak','Motor','Mobil'];
kendaraan.push('Pesawat','Tank');
console.log (kendaraan);

var makanan = ['Permen','Nasi','Mie'];
makanan.pop();
console.log (makanan);

//3. unshift & shift
var game = ['Yugi-oh','Zuma','Honkai Impact'];
game.unshift('Genshin Impact','Mobile legend','Cat Mario');
console.log (game);

var minuman = ['es teh','jus buah','es cincau'];
minuman.shift();
console.log (minuman);

//4. splice
//splice (index awal, mau di hapus berapa, elemen baru1, elemen baru2, ...)
var arr = ['Permen','Nasi','Mie'];
arr.splice(1,1,'Nasi Goreng','Nasi Uduk');
console.log (arr);

//5. slice
//slice (awal, akhir)
var player = ['Saitama','Naruto','Sasuke','Madara'];
var player2 = player.slice(1,3);
console.log (player.join(' '));
console.log (player2.join(' '));

//6. forEach
var teman = ['Adit','Adrian','Anom','Fadli','Ihsal','Naufal'];
teman.forEach(function(e,i) {
  console.log('Daftar nama teman sma ke -' + (i+1) + 'adalah =' + e);
});

//7. map
var angka = [1,2,5,3,6,8,4];
var angka2 = angka.map(function(e) {
  return e * 2;
} );
console.log(angka2.join(' '));

//8. sort
var urutan = [1,2,10,5,20,3,6,8,4];
urutan.sort(function(a,b) {
  return a-b;
});
console.log(urutan.join(' '));

//9. filter dan find
var white = [1,9,5,6,3,19,53,12,70,2];
var white2 = white.filter(function(x) {
  return x > 5;
});
console.log(white2.join(' '));

var blue = [1,9,5,6,3,19,53,12,70,2];
var blue2 = blue.find(function(x) {
  return x > 5;
});
console.log(blue2);