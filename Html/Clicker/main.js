const $circle = document.querySelector("#circle");
const $score = document.querySelector("#score");

function start() {
setScore(getScore())
}

function setScore(score) {
localStorage.setItem("score", score);
  $score.textContent = score;   
}

function getScore() {
return  Number(localStorage.getItem("score")) ?? 0;
}

function addOne() { 
    setScore(getScore() + 1);

}

$circle.addEventListener("click", (event) => {
  const rect = $circle.getBoundingClientRect()

  const offfSetX = event.clientX - rect.left - rect.width / 2
  const offfSetY = event.clientY - rect.top - rect.height / 2

  const DEG = 40

  const tiltX = (offfSetY / rect.height) * DEG
  const tiltY = (offfSetX / rect.width) * DEG

  $circle.style.setProperty("--tiltX", `${tiltX}deg`)
  $circle.style.setProperty("--tiltY", `${tiltY}deg`)

  setTimeout(() => {
    $circle.style.setProperty("--tiltX", `0deg`)
    $circle.style.setProperty("--tiltY", `0deg`)
  }, 200)

const plusOne = document.createElement("div")
plusOne.classList.add('plus-one')
plusOne.textContent = "+1"
plusOne.style.left = `${event.clientX - rect.left - rect.left}px`
plusOne.style.top = `${event.clientY - rect.left - rect.top}px`

$circle.parentElement.appendChild(plusOne)

addOne()

setTimeout(() => {
    plusOne.remove()
}, 2000)

});