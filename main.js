// let success = document.querySelector(".success")
// let button = document.querySelector(".button")
  
// // button.style.color ="red"
// function show(){
//     if(success.style.display =="none"){
//         success.style.display = "none";
       
//     }
//     else{ success.style.display = "none"
   
// }  }
// button.addEventListener("click", show())

console.log();
const success = document.querySelector(".success");
const form = document.querySelector("#myform");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  success.style.display = "block";
});