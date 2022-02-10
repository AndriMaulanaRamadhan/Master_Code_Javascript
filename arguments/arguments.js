function tambah () {
  var hasil = 0;
    for (var a = 0; a < arguments.length; a++) {
      hasil += arguments[a];
    }
    return hasil;
}

var coba = tambah (1,2,3,4,5);
alert (coba);