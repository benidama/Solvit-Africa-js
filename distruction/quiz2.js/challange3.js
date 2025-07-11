const chainString = ["JS", "", "React", "NODE","", "Express"];
const chain = chainString.filter(str => str !== "").map(str => str.toLowerCase()).reverse();
console.log(chain);