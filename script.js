let countnumber = document.querySelector(".countnumber");
let increment = document.querySelector("#inc");
let reset = document.querySelector("#reset");
let dec = document.querySelector("#dec");
let number = 0;

inc.addEventListener("click", () => {
  countnumber.innerHTML = number++;

  if (number > 50) {
    number = 0;
  }
});

reset.addEventListener("click", () => {
  let rn = 0;
  countnumber.innerHTML = rn;
});

dec.addEventListener("click", () => {
  countnumber.innerHTML = number--;

  if (number < -0) {
    number = 0;
  }
});
