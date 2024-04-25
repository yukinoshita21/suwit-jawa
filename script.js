var ulang = true


while ( ulang ) {
let p = prompt('Pilih jagoanmu (kucing, anjing, babi): ');
let r = '';

// Bot memilih secara acak
let com = Math.floor(Math.random() * 3) + 1;
com = ['kucing', 'anjing', 'babi'][com - 1];

// Aturan permainan
const rules = {
  kucing: {
    anjing: 'menang',
    babi: 'kalah',
  },
  anjing: {
    kucing: 'kalah',
    babi: 'menang',
  },
  babi: {
    kucing: 'menang',
    anjing: 'kalah',
  },
};

// Menentukan hasil
r = rules[com][p] || 'Input yang Anda masukkan tidak valid.';

alert('Kamu memilih ' + p + ' dan komputer memilih ' + com + '\nHasilnya: ' + r);

 ulang = confirm('mau ulang gak? ')

}
