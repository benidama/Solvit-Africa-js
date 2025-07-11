//New js exercise
//first
const numbers = [2,5,8,10,3];
const result =  numbers.map(num => num*2).filter(num => num < 10).sort((a,b) => b-a);
console.log(result)

//second
const str = " learn-javascript ";
const string = str.trim().toLowerCase().replace("-"," ");
console.log(string);

//third
const chainString = ["JS", "", "React", "NODE","", "Express"];
const chain = chainString.filter(str => str !== "").map(str => str.toLowerCase()).reverse();
console.log(chain);

//fourth
const products = [{name: "Laptop", price: 1200},
                    {name: "Book", price: 30},
                    {name: "Phone", price: 800},
                    {name: "Pen", price: 2}
                ]
const expense = products.filter(product => product.price > 100).map(product => product.name.toUpperCase());
console.log(expense); 

//fifth
const messyText = "  Hello_world!  ";
const text = messyText.trim().split("_").map(string =>string.charAt(0).toUpperCase()+ string.slice(1)).join(" ");
console.log(text);

//sixth
const users = [
    {name:"alise",role: "admin"},
    {name:"bob",role: "user"},
    {name:"charlie",role: "admin"},
]
const user = users.filter(person => person.role === "admin").map(person => person.name.toUpperCase())
console.log(user)

//seventh
const sentence = "Method chaining makes code cleaner and readable";
const words = sentence.split(" ").filter(word => word.length > 4).map(word => word.toUpperCase()).reverse()
console.log(words);

//ei
const skills = ["JS", "React", "Node","JS", "React"];
const unique = [...new Set(skills)].sort()
console.log(unique);

//ninth
const person = {name: "Alice", age: 30, city: "Kigali"};
const personInfo = Object.entries(person).map(([key, value]) => `${key}: ${value}`).join(", ");
console.log(personInfo);


