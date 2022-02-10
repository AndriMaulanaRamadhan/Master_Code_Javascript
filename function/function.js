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