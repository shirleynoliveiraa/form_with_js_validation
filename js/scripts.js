const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  //check if name is empty
  if (nameInput.value === "") {
    alert("please, fill in with your name");
    return;
  }

  //check if email is not empty and if it is a valid email
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("please, fill in with your email");
    return;
  }

  //check if password is filled
  if (!validatePassword(passwordInput.value, 8)) {
    alert("password needs at least 8 digits");
  }

  //check if job situation was selected
  if (jobSelect.value === "") {
    alert("please, select a value");
  }

  //check if message is filled in
  if (messageTextarea.value === "") {
    alert("please, leave a message");
  }
  //if all fields are correctly filled, send the form
  form.submit();
});

//function to validate email
function isEmailValid(email) {
  //create a regex to validate email
  const emailRegex = new RegExp(
    //user12@host.com
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );

  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

//function to validate password
function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    //valid password
    return true;
  }
  //invalid password
  return false;
}
