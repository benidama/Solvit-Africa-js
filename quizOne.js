//first
const products = [
    {name: "Laptop",category: "electronics", price: 800},
    {name: "Phone",category: "electronics", price: 600},
    {name: "Shirt",category: "clothing", price: 40},
]

const answer = products.filter(product => product.category === "electronics" && product.price > 500)
;
console.log(answer); 
const totalPrice= answer.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);

//second
const sentence = "JavaScript is fun and powerful to learn";

const answer2 = sentence.split(" ").filter(word => word.length > 4).join(" ").toUpperCase().split(" ").reverse().join(" ");
console.log(answer2);

//third
const fullNames = ["Bob Smith", "Alice Johnson"];
const answer3 = fullNames.filter(name => name.length > 10).join(" ");
const resul = answer3.charAt(0)+ answer3.slice(6,7);
console.log(resul);


//fourth
const namesInFull = ["John Doe", "Jane Smith", "Mike Johnson", "Emily Davis"];
const answer4 = namesInFull.filter(nam => nam.length > 10).map(nam => nam.split(" ").map(nam => nam[0].toLocaleUpperCase()).join(""));
console.log(answer4);
