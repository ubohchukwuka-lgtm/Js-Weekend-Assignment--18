function myFunction() {
  const a = parseFloat(document.getElementById("a").value)
  const b = parseFloat(document.getElementById("b").value)
  const h = parseFloat(document.getElementById("h").value)
  if (a > 0 && b > 0 && h > 0) {
    const area = 0.5 * (a + b) * h;
    document.getElementById("result").innerHTML = `The area of the Trapezium is ${area}`;
    console.log(`The area of the trapezium is ${area}`);
    return area;
  } else {
    document.getElementById("result").innerHTML = "Error: All dimensions must be positive numbers.";
    console.log("Error: All dimensions must be positive numbers.");
    return null;
  }
}

