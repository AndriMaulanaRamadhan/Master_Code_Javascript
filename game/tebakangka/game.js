//Pilihan Player
var player = parseInt( prompt ('Tebak angka 1 - 10 \n anda memiliki 3 kesempatan'));

//Pilihan Comp
var comp = Math.random();

//Rules
if (comp <= 0.1) {
  comp = 1;
} else if (comp > 0.1 && comp <= 0.2) {
  comp = 2;
} else if (comp > 0.2 && comp <= 0.3) {
  comp = 3;
} else if (comp > 0.3 && comp <= 0.4) {
  comp = 4;
} else if (comp > 0.4 && comp <= 0.5) {
  comp = 5;
} else if (comp > 0.5 && comp <= 0.6) {
  comp = 6;
} else if (comp > 0.6 && comp <= 0.7) {
  comp = 7;
} else if (comp > 0.7 && comp <= 0.8) {
  comp = 8;
} else if (comp > 0.8 && comp <= 0.9) {
  comp = 9;
} else if (comp > 0.9 && comp <= 1) {
  comp = 10;
} console.log(comp);