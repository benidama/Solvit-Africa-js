const person = {name: "Alice", age: 30, city: "Kigali"};
const personInfo = Object.entries(person).map(([key, value]) => `${key}: ${value}`).join(", ");
console.log(personInfo);