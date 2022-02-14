function buatObjectMahasiswa (nama,nrp,email,jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var player = buatObjectMahasiswa('KeizImaura','08214798','keiz@gmail.com','tactical game');