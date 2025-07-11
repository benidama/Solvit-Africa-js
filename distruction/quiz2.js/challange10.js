const arrayOfNumbers = [100, 59.99, 200, 20.5];
const updatedPrices = arrayOfNumbers.map(price => {
  const taxed = price + (price * 0.10); 
  return parseFloat(taxed.toFixed(2)); 
});
console.log(updatedPrices);