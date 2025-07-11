function converter(c){
    const f = (c * 9/5) + 32;
    return`${c}°C is equal to ${f}°F`;
}

console.log(converter(25));