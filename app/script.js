document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("checkButton");
  const clearButton = document.getElementById("clearButton");
  const ageInput = document.getElementById("ageInput");
  const resultDiv = document.getElementById("result");
  checkButton.addEventListener("click", function () {
    const age = parseInt(ageInput.value);
    if (!isNaN(age)) {
      if (age >= 18) {
        resultDiv.textContent = "Eligible to vote";
        resultDiv.style.color = "green";
      } else {
        resultDiv.textContent = "Not eligible to vote";
        resultDiv.style.color = "red";
      }
    } else {
      resultDiv.textContent = "Please enter a valid age";
      resultDiv.style.color = "red";
    }
  });
  clearButton.addEventListener("click", function () {
    resultDiv.textContent = "";
    resultDiv.style.color = "black";
    ageInput.value = "";
  });
});
