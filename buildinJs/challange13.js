const users = [
    {name: "John"},
    {name: "Jane"},
    {name: "Doe"},
]

const activeUsers = users.map(user => {
    return {
        ...user,
        isActive: true
    };
})
console.log(activeUsers);
