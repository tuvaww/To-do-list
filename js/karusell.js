window.onload = function () {
  addElements();
};

function addElements() {
  let background = document.getElementById("main");
  background.classList.add("big-box");

  for (let i = 0; i < 3; i++) {
    let boxes = document.createElement("article");

    boxes.classList.add("list-containers-postIt");

    document.getElementById("container").appendChild(boxes);

    if (i === 0) {
      boxes.classList.add("green");
    } else if (i === 1) {
      boxes.classList.add("yellow");
    } else {
      boxes.classList.add("orange");
    }

    for (let i = 0; i < 2; i++) {
      let p = document.createElement("p");
      p.classList.add("lines");
      boxes.appendChild(p);
      p.innerHTML = "To do list:";
    }
  }
}
