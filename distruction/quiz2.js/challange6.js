const users = [
    {name:"alise",role: "admin"},
    {name:"bob",role: "user"},
    {name:"charlie",role: "admin"},
]
const user = users.filter(person => person.role === "admin").map(person => person.name.toUpperCase())
console.log(user)