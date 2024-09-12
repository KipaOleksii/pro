const time = document.getElementById("output");
const btnFull = document.getElementById("full");
const btnDate = document.getElementById("date");
const btnTime = document.getElementById("time");
let mode = "time";

function update() {
  time.textContent = format(mode);
}

setInterval(update, 1000);
update();

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

btnFull.addEventListener("click", bindMode("full"));
btnDate.addEventListener("click", bindMode("date"));
btnTime.addEventListener("click", bindMode("time"));

function format(formatMode) {
  const now = new Date();
  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleTimeString();
  }
}
