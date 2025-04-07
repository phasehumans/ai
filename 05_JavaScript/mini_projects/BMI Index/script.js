function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const result = document.getElementById("result");
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      result.textContent = "⚠️ Please enter valid height and weight!";
      result.style.color = "black";
      return;
    }
  
    const bmi = weight / (height * height);
    let category = "";
  
    if (bmi < 18.5) {
      category = "Underweight";
      result.style.color = "blue";
    } else if (bmi < 25) {
      category = "Normal weight";
      result.style.color = "green";
    } else if (bmi < 30) {
      category = "Overweight";
      result.style.color = "orange";
    } else {
      category = "Obese";
      result.style.color = "red";
    }
  
    result.textContent = `Your BMI is ${bmi.toFixed(2)} → ${category}`;
  }
  