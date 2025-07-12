const messyText = "  Hello_world!  ";
const text = messyText.trim().split("_").map(string =>string.charAt(0).toUpperCase()+ string.slice(1)).join(" ");
console.log(text);