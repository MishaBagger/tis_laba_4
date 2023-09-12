let strings = ["Kalinin", "Misha", "12 september"];
let rra = strings.map((string) => string.split("").reverse().join(""));

console.log(rra);