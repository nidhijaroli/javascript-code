function celsiusToFahrenheit(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);

console.log(celsius + " degrees Celsius is equal to " + fahrenheit + " degrees Fahrenheit.");
