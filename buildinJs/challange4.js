const products = [{name: "Laptop", price: 1200},
                    {name: "Book", price: 30},
                    {name: "Phone", price: 800},
                    {name: "Pen", price: 2}
                ]
const expense = products.filter(product => product.price > 100).map(product => product.name.toUpperCase());
console.log(expense); 