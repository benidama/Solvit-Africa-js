const string = "javasript-is-fun";
const strings =string.split("-").map(str => str.charAt(0).toUpperCase()+ str.slice(1)).join(" ");
console.log(strings);
