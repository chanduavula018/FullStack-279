document.getElementById("studentForm").addEventListener("submit", function(event) {
  let password = document.querySelector("input[name='password']").value;
  let age = document.querySelector("input[name='age']").value;
  let skills = document.querySelectorAll("input[name='skills']:checked");

  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    event.preventDefault();
  }

  if (age < 10 || age > 100) {
    alert("Age must be between 10 and 100.");
    event.preventDefault();
  }

  if (skills.length === 0) {
    alert("Please select at least one skill.");
    event.preventDefault();
  }
});
