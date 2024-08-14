// initialize selector on the HTML with document.geElementByID
//  Create function that takes random number and multiple by the colors length

const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// btn.addEventListener("click", function(){
//     const randomNumber = getRandomNumber();
//     console.log(randomNumber);
//     document.body.style.backgroundColor = colors[randomNumber];
//     color.textContent = colors[randomNumber]
// })

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length);
// }

btn.addEventListener("click", () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]

})


// function expresion
// const getRandomNumber = function(){
//     return Math.floor(Math.random() * colors.length);
// }

// Arrow function

const getRandomNumber = () => Math.floor(Math.random() * colors.length)