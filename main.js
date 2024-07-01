// let success = document.querySelector(".success")
// let button = document.querySelector(".button")
// button.addEventListener("click", show())
// button.style.color ="red"
// function show(){
//     if(success.style.display == "none"){
//         success.style.display = "block";
//     }

// }

console.log();

const success = document.querySelector(".success"),
  form = document.querySelector("#myform"),
  firstName = document.querySelector("#first-name"),
  lastName = document.querySelector("#last-name"),
  email = document.querySelector("#email"),
  radio = document.querySelector(".radio1"),
  textarea = document.getElementById("textarea"),
  required_text = document.querySelector(".required-text"),
  required_text1 = document.querySelector(".required-text1"),
  required_text2 = document.querySelector(".required-text2"),
  required_text3 = document.querySelector(".required-text3"),
  required_text4 = document.querySelector(".required-text4"),
  required_text5 = document.querySelector(".required-text5");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (firstName.value === "" || firstName.value == null) {
    required_text.style.display = "flex";
    firstName.style.border = "1px solid hsl(0, 66%, 54%)";
  } 
  if (lastName.value === "" || lastName.value == null) {
    required_text1.style.display = "flex";
    lastName.style.border = "1px solid hsl(0, 66%, 54%)";
  }
  if (email.value === "" || email.value == null) {
    required_text2.style.display = "flex";
    email.style.border = "1px solid hsl(0, 66%, 54%)";
  }

  if (textarea.value === "" || textarea.value == null) {
    required_text4.style.display = "flex";
    textarea.style.border = "1px solid hsl(0, 66%, 54%)";
  }else {
    success.style.display = "block";
    setTimeout(() => {
      success.style.display = "none";
    }, 3000);
  }
 
});


// const required = document.querySelector(".required-text")
// let input = document.querySelector("#last-name")
// let button = document.querySelector("button")
// button.addEventListener("click", requiredtext())
// function requiredtext(){
//   let inputValue = input.value
//   if(inputValue === ""){
//     required.style.visibility = "visible"
//   } else {
//    required.style.visibility = "hidden";
//   }
// }
