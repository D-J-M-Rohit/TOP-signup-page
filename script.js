document
.querySelector("#confirm_password")
.addEventListener("keyup", check);
document.querySelector("#password").addEventListener("keyup", check);

function check() {
let pass = document.getElementById("password").value;
let cpass = document.getElementById("confirm_password").value;
console.log(pass);
console.log(cpass);

if (pass == cpass) {
  document.getElementsByClassName("valid_text").innerHTML =
    "Passwords Match";
  document.querySelector(".valid_text").style.color = "green";
  document.getElementById("password").classList.remove("error");
  document.getElementById("confirm_password").classList.remove("error");
} else {
  document.getElementsByClassName("valid_text").innerHTML =
    "Passwords do not Match!";
  document.querySelector(".valid_text").style.color = "red";
  document.getElementById("password").classList.add("error");
  document.getElementById("confirm_password").classList.add("error");
}
}