window.onload = function () {
  deleteItem();
  done();
  undo();
};

function deleteItem() {
  let hide = document.querySelectorAll(".bi-trash-fill");
  hide.forEach((item) => {
    item.addEventListener("click", () => {
      item.parentElement.remove();
    });
  });
}

function done() {
  let drawLine = document.querySelectorAll(".list-ul");

  drawLine.forEach((checkedItem) => {
    checkedItem.addEventListener("click", () => {
      checkedItem.classList.add("list-checked");
    });
  });
}

function undo() {
  let reverse = document.querySelector(".bi-arrow-repeat");
  reverse.addEventListener("click", () => {
    let hej = document.querySelectorAll(".list-ul");
    hej.forEach((undoItem) => {
      undoItem.classList.remove("list-checked");
    });
  });
}

let addElement = document.querySelector(".add-button");
addElement.addEventListener("click", () => {
  let li = document.createElement("li");
  li.classList.add("bullet-list");
  let icon = document.createElement("i");
  icon.classList.add("bi");
  icon.classList.add("bi-trash-fill");
  let inputValue = document.getElementById("input").value;
  let string = document.createTextNode(inputValue);
  li.appendChild(string);
  if (inputValue === "") {
    alert("You must write something");
  } else {
    document.getElementById("ol").appendChild(li);
  }
  document.getElementById("input").value = "";

  li.appendChild(icon);

  deleteItem();
});

let bulletList = document.querySelector(".bullet-notes");
bulletList.addEventListener("click", () => {
  let noteLi = document.createElement("li");
  noteLi.classList.add("list-ul");
  let noteValue = document.getElementById("noteInput").value;
  let value = document.createTextNode(noteValue);
  noteLi.appendChild(value);
  if (noteValue === "") {
    alert("You must write something");
  } else {
    document.getElementById("ul").appendChild(noteLi);
  }
  document.getElementById("noteInput").value = "";

  done();
});
