const x = 30;
console.log(x%3)
console.log(x%4)
console.log(x/4)

const str = "HelloWorld!";
console.log(str.length);
console.log(str[0]);
console.log(str[str.length - 1]);
console.log(str.slice(-5,9));
console.log(str.slice(5, 10));
console.log(str.slice(5, 10).toUpperCase());
console.log(str.slice(5, 10).toLowerCase());

const users = [
    {
        name:"John",
        age:45,
        car:"Toyota",
        hobbies:["reading", "traveling", "cooking"]
    },
    {
        name:"Jane",
        age:30,
        car:"Honda",
        hobbies:["painting", "hiking", "gaming"]
    },
    {
        name:"Mike",
        age:25,
        car:"Ford",
        hobbies:["photography", "cycling", "music"]
    }
]

const ary = users[0].hobbies
console.log(ary)

const fullNames = ["Joa Quin", "Benimana Jean", "Damascene Izabayo", "Iradukunda Paul"];
const result =  fullNames.filter(name => name.length > 12).map(name => name.split(" ").map(name => name[0]).join("").toLowerCase());
console.log(result)

const results = document.getElementById("result");
const containers = document.getElementById("container");
const button = document.getElementById("btn");

containers.addEventListener("click", ToDoList)
