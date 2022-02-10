var b = '';
for (a = 0; a < 5; a++) {
  b += '*';
}
console.log (b);

var d = '';
for (c = 0; c < 5; c++) {
  d += '*';
  d += '\n';
}
console.log (d);

var f = '';
for (e = 0; e < 5; e++) {
  for (g = 0; g <= 10; g++) {
    f += '*';
  }
  f += '\n';
}
console.log (f);

var i = '';
for (h = 0; h < 5; h++) {
  for (j = 0; j <= h; j++) {
    i += '*';
  }
  i += '\n';
}
console.log (i);

var l = '';
for (k = 5; k > 0; k--) {
  for (m = 0; m < k; m++) {
    l += '*';
  }
  l += '\n';
}
console.log (l);