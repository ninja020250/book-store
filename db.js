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
      title: "Cat Tee Black T-Shirt",
      description: "4 MSL",
      availableSizes: ["Science fiction", "Drama"],
      style: "Black with custom print",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 13,
      sku: 2,
      title: "Dark Thug Blue-Navy T-Shirt",
      description: "",
      availableSizes: ["Romance"],
      style: "Front print and paisley print",
      price: 29.45,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 14,
      sku: 3,
      title: "Sphynx Tie Dye Wine T-Shirt",
      description: "GPX Poly 1",
      availableSizes: ["Fantasy", "Travel", "History"],
      style: "Front tie dye print",
      price: 9.0,
      installments: 3,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 15,
      sku: 4,
      title: "Skuul",
      description: "Treino 2014",
      availableSizes: ["Fantasy", "Travel", "History", "Series"],
      style: "Black T-Shirt with front print",
      price: 14.0,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 11,
      sku: 5,
      title: "Wine Skul T-Shirt",
      description: "",
      availableSizes: ["Fantasy", "Travel"],
      style: "Wine",
      price: 13.25,
      installments: 3,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 16,
      sku: 6,
      title: "Short Sleeve T-Shirt",
      description: "",
      availableSizes: ["Drama", "Fantasy", "Travel", "Horror", "History"],
      style: "Grey",
      price: 75.0,
      installments: 5,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 0,
      sku: 7,
      title: "Cat Tee Black T-Shirt",
      description: "14/15 s/nº",
      availableSizes: ["Fantasy", "Travel", "History", "Series"],
      style: "Branco com listras pretas",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 1,
      sku: 8,
      title: "Sphynx Tie Dye Grey T-Shirt",
      description: "14/15 s/nº",
      availableSizes: ["Fantasy", "Travel", "History", "Series"],
      style: "Preta com listras brancas",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 2,
      sku: 9,
      title: "Danger Knife Grey",
      description: "14/15 s/nº",
      availableSizes: ["Fantasy", "Travel"],
      style: "Branco com listras pretas",
      price: 14.9,
      installments: 7,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 3,
      sku: 10,
      title: "White DGK Script Tee",
      description: "2014 s/nº",
      availableSizes: ["Fantasy", "Travel"],
      style: "Preto com listras brancas",
      price: 14.9,
      installments: 7,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 4,
      sku: 11,
      title: "Born On The Streets",
      description: "14/15 s/nº - Jogador",
      availableSizes: ["History"],
      style: "Branco com listras pretas",
      price: 25.9,
      installments: 12,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: false
    },

    {
      id: 5,
      sku: 12,
      title: "Tso 3D Short Sleeve T-Shirt A",
      description: "14/15 + Camiseta 1º Mundial",
      availableSizes: ["Fantasy", "Travel", "History"],
      style: "Preto",
      price: 10.9,
      installments: 9,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: false
    },

    {
      id: 6,
      sku: 13,
      title: "Man Tie Dye Cinza Grey T-Shirt",
      description: "Goleiro 13/14",
      availableSizes: ["History", "Series"],
      style: "Branco",
      price: 49.9,
      installments: 0,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 7,
      sku: 14,
      title: "Crazy Monkey Black T-Shirt",
      description: "1977 Infantil",
      availableSizes: ["Science fiction"],
      style: "Preto com listras brancas",
      price: 22.5,
      installments: 4,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: true
    },

    {
      id: 8,
      sku: 15,
      title: "Tso 3D Black T-Shirt",
      description: "",
      availableSizes: ["History"],
      style: "Azul escuro",
      price: 18.7,
      installments: 4,
      currencyId: "USD",
      currencyFormat: "$",
      isFreeShipping: false
    },

    {
      id: 9,
      sku: 16,
      title: "Crazy Monkey Grey",
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
      title: "On The Streets Black T-Shirt",
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
