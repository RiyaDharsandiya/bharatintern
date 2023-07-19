function convertToCelsius() {
    var celsiusInput = document.getElementById("celsius-input").value;
    var fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("fahrenheit-input").value = fahrenheit.toFixed(2);
  }
  
  function convertToFahrenheit() {
    var fahrenheitInput = document.getElementById("fahrenheit-input").value;
    var celsius = (fahrenheitInput - 32) * 5/9;
    document.getElementById("celsius-input").value = celsius.toFixed(2);
  }
  