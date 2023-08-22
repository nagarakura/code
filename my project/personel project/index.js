function authenticateUser() {
  var username = document.getElementById("usernameInput").value;
  var password = document.getElementById("passwordInput").value;
  // Check if the username and password match the desired credentials
  if (username === "akshay" && password === "2002") {
    // Remove the input data
    document.getElementById("usernameInput").value = "";
    document.getElementById("passwordInput").value = "";
    // Hide the login div
    document.querySelector(".login").style.display = "none";
    location.href = "information.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
}