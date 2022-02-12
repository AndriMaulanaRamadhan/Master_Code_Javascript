//Manipulasi Array

//1.Menambah isi array
var kunci = ['Kucing', 13, false];
console.log (kunci);
console.log (kunci[0]);

//2. Menghapus isi array
var hewan = ['Singa','Elang','Ular','Panda'];
hewan [2] = undefined;
console.log (hewan);

//3. Menampilkan isi array
var mhs = ['Yura','Lelouch','Zero','Zetsu'];

for (a = 0; a < mhs.length; a++) {
  console.log ('Mahasiswa Ke-' + (a+1) + ' ' + mhs[a]);
}