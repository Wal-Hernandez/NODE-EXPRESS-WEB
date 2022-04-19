const contactForm = document.querySelector(".form");
let name = document.getElementById("name");
let message = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let formData = {
    email: email.value,
    message: message.value,
  };

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/contact");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.responseText == "success") {
      alert("email sent");
      email.value = "";
      message.value = "";
    } else {
      alert("Something went wrong");
    }
  };

  xhr.send(JSON.stringify(formData));
});
