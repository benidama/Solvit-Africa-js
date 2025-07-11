const formatNames = (arr) => {
  return arr.map(name => name.charAt(0).toUpperCase()+name.slice(1)).sort().join(", ");                                               
};

console.log(formatNames(["alice", "bob", "david"]));