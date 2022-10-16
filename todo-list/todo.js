var todo_item = document.querySelector("#todo_item");
var todo_save = document.querySelector("#todo_save");
var list = document.querySelector("#list");

todo_save.addEventListener("click", addtoDo);
todo_item.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    addtoDo();
  }
})
function addtoDo() {
  var value = todo_item.value;
  if (!value)
    return;
  create_list(value);
  todo_item.value = "";
}

function create_list(value) {
  var btn = document.createElement("button");
  btn.innerText = "\u00D7";
  btn.setAttribute("class", "close");
  var li = document.createElement("li");
  li.innerHTML = value;
  li.appendChild(btn);
  list.appendChild(li);

  btn.addEventListener("click", function () {
    list.removeChild(li);
  })
}

