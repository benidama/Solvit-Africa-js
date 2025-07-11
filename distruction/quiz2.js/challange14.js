const arr = [1, 2, 3, 4, 5];
const doubled = arr.map(num => num * 2);
const even = doubled.filter(num => num % 2 === 0);
const total = even.reduce((sum, val) => sum + val, 0);
const cleanChain = arr.map(num => num * 2).filter(num => num % 2 === 0).reduce((sum, val) => sum + val, 0);
console.log(cleanChain); 