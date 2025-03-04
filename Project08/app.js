const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const buttons = document.querySelectorAll("button");
 inputField.addEventListener("keyup", () => outputField.innerHTML = inputField.value);

 buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if(btn.classList.contains("uppercase")) {
         outputField.innerHTML =outputField.innerHTML.toUpperCase();
      } else if (btn.classList.contains("capitalize")){}
      }
    });
 });

