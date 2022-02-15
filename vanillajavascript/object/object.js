const person = {
  firstName: 'Andri',
  LastName: 'Maulana Ramadhan',
  fullName: function() {
    return `${this.firstName} ${this.LastName}`;
  },
  weight: 65,
  height: 172,
  isWeightIdeal: function () {
    const heightMinus100 = this.height - 100;
    return heightMinus100 - (heightMinus100 * 10) / 100 < this.weight;
  },
}

console.log(person.fullName());
console.log(person.isWeightIdeal());

const countries = {
  ID: {
    province: ['Bali', 'Jawa Timur', 'Jawa Barat'],
    city: ['Karawang', 'Denpasar', 'Ruak'],
  },
  MY: {},
};

console.log(countries?.TH?.province ?? 'Not Found');