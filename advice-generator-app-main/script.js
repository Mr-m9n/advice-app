const adviceNum = document.querySelector(".adviceNum");
const advice = document.querySelector(".advice");
const btn = document.querySelector(".dice");
const url = "https://api.adviceslip.com/advice";

// function generateAdvice() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((response) => {
//       return response.json();
//     })
//     .then((adviceData) => {
//       const adviceObject = adviceData.slip;
//       adviceNum.textContent = adviceObject.id;
//       advice.textContent = adviceObject.advice;
//     })
//     .catch((error) => console.log(error));
// }

async function generateAdvice() {
  const res = await fetch(url);
  const adviceData = await res.json();
  const adviceObject = adviceData.slip;
  adviceNum.textContent = adviceObject.id;
  advice.textContent = adviceObject.advice;
}
generateAdvice();

btn.addEventListener("click", generateAdvice);
