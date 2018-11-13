var faker = require("faker");
// s =  Science fiction
// xs = Drama
// M = Romance
// ML = Horror
// L = Travel
// XL =History
// xxl =Series
function generateCustomers() {
  books = [
    {
      id: 12,
      sku: 1,
      title: "Tuoi tre dang gia bao nhieu",
      description: "4 MSL",
      availableSizes: ["Science fiction", "Drama"],
      style: "",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 13,
      sku: 2,
      title: "That tich khong mua",
      description: "",
      availableSizes: ["Romance"],
      style: "",
      price: 29.45,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 14,
      sku: 3,
      title: "yeu em tu cai nhin dau tien",
      description: "GPX Poly 1",
      availableSizes: ["Fantasy", "Travel", "History"],
      style: "",
      price: 9.0,
      installments: 3,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 15,
      sku: 4,
      title: "yeu em tu cai nhin dau tien",
      description: "Treino 2014",
      availableSizes: ["Fantasy", "Travel", "History", "Series"],
      style: "",
      price: 14.0,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 11,
      sku: 5,
      title: "Tuoi tre dang gia bao nhieu",
      description: "",
      availableSizes: ["Fantasy", "Travel"],
      style: "",
      price: 13.25,
      installments: 3,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 16,
      sku: 6,
      title: "5cm/s",
      description: "",
      availableSizes: ["Drama", "Fantasy", "Travel", "Horror", "History"],
      style: "",
      price: 75.0,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 0,
      sku: 7,
      title: "5cm/s",
      description: "14/15 s/nº",
      availableSizes: ["Fantasy", "Travel", "History", "Series"],
      style: "",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 1,
      sku: 8,
      title: "5cm/s",
      description: "14/15 s/nº",
      availableSizes: ["Fantasy", "Travel", "History", "Series"],
      style: "",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 2,
      sku: 9,
      title: "That tich khong mua",
      description: "14/15 s/nº",
      availableSizes: ["Fantasy", "Travel"],
      style: "",
      price: 14.9,
      installments: 7,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 3,
      sku: 10,
      title: "Yeu em tu cai nhin dau tien",
      description: "2014 s/nº",
      availableSizes: ["Fantasy", "Travel"],
      style: "",
      price: 14.9,
      installments: 7,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 4,
      sku: 11,
      title: "That tich khong mua",
      description: "14/15 s/nº - Jogador",
      availableSizes: ["History"],
      style: "",
      price: 25.9,
      installments: 12,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: false
    },

    {
      id: 5,
      sku: 12,
      title: "Harry Potter",
      description: "14/15 + Camiseta 1º Mundial",
      availableSizes: ["Fantasy", "Travel", "History"],
      style: "",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: false
    },

    {
      id: 6,
      sku: 13,
      title: "Harry Potter",
      description: "Goleiro 13/14",
      availableSizes: ["History", "Series"],
      style: "",
      price: 49.9,
      installments: 0,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 7,
      sku: 14,
      title: "Harry Potter",
      description: "1977 Infantil",
      availableSizes: ["Science fiction"],
      style: "",
      price: 22.5,
      installments: 4,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 8,
      sku: 15,
      title: "That tich khong mua",
      description: "",
      availableSizes: ["History"],
      style: "",
      price: 18.7,
      installments: 4,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: false
    },

    {
      id: 9,
      sku: 16,
      title: "Tuoi tre dang gia bao nhieu",
      description: "",
      availableSizes: ["Travel", "History"],
      style: "",
      price: 134.9,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 10,
      sku: 17,
      title: "That tich khong mua",
      description: "",
      availableSizes: ["Travel", "History"],
      style: "",
      price: 49.0,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    }
  ];
  return {
    products: {
      products: books
    }
  };
}

module.exports = generateCustomers;
