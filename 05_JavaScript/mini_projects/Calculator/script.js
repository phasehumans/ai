function append(char) {
    document.getElementById("display").value += char;
  }
  
  function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  function deleteChar() {
    const current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
  }
  
  function calculate() {
    const expression = document.getElementById("display").value;
    try {
      const result = eval(expression);
      document.getElementById("display").value = result;
    } catch {
      document.getElementById("display").value = "Error";
    }
  }
  