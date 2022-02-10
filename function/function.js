function rumusVolumeKubus (a,b) {
  var totalVolumeA;
  var totalVolumeB;
  var total;

  totalVolumeA = a * a * a;
  totalVolumeB = b * b * b;

  total = totalVolumeA + totalVolumeB;

  return total;
}

alert (rumusVolumeKubus(8,3));
alert (rumusVolumeKubus(15,20));

function tambah (a,b) {
  var totalTambah;
  totalTambah = a + b;

  return totalTambah;
}

function kali (a,b) {
  var totalKali;
  totalKali = a * b;

  return totalKali;
}

var jumlahToko = kali (tambah (1,2), tambah (3,4));
alert (jumlahToko);