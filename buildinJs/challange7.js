const sentence = "Method chaining makes code cleaner and readable";
const words = sentence.split(" ").filter(word => word.length > 4).map(word => word.toUpperCase()).reverse()
console.log(words);