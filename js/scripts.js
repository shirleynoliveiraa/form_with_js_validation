const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

const progress = document.querySelector("#progress");

const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector(".modal-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //check if name is empty
  if (nameInput.value === "") {
    alert("please, fill in with your name");
    return;
  }

  //check if email is not empty and if it is a valid email
  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    showModal("please, fill in with your email");
    return;
  }

  //check if password is filled
  if (!validatePassword(passwordInput.value, 8)) {
    showModal("password needs at least 8 digits");
    return;
  }

  //check if job situation was selected
  if (jobSelect.value === "") {
    showModal("please, select a value");
    return;
  }

  //check if message is filled in
  if (messageTextarea.value === "") {
    showModal("please, leave a message");
    return;
  }
  //if all fields are correctly filled, send the form
  form.submit();

  progress.value = 0;
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


//function to update progress bar
form.addEventListener("input", ()  => {
  const totalFields = form.elements.length - 1;
  let completedFields = 0;

  //count the number of completed fields
  for (let i = 0; i < totalFields; i++) {
    if (form.elements[i].value) {
      completedFields++;
    }
  }

  //update the value of progress bar
  progress.value = (completedFields / totalFields) * 100;
});

//function to show modal
function showModal(msg) {
  modalMessage.textContent = msg;
  modal.style.display = "block";
}

//close modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});