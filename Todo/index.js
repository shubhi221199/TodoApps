document.querySelector("form").addEventListener("submit", myTodo);
var todoArr = JSON.parse(localStorage.getItem("todo")) || [];

displayTodo();

function displayTodo() {
  document.querySelector("tbody").textContent = "";
  todoArr.forEach(function (el) {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.textContent = el.task;

    var td2 = document.createElement("td");
    td2.textContent = el.priority;
    if (el.priority === "High") {
        td2.style.backgroundColor = "red";
      } else if (el.priority === "Low") {
        td2.style.backgroundColor = "green";
      }
    var td3 = document.createElement("td");
    td3.textContent = "Delete";
    td3.addEventListener("click", deleteTodo);
    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
  });
}

function myTodo(el) {
  el.preventDefault();
  var task = document.getElementById("task").value;
  var priority = document.getElementById("priority").value;

  var todoObj = { 
            task: task, 
            priority: priority
        };
  todoArr.push(todoObj);
  localStorage.setItem("todo", JSON.stringify(todoArr));
  displayTodo();
  task.value="";
  priority.value="";

}

function deleteTodo(ele) {
  ele.target.parentNode.remove();
  var index = todoArr.indexOf(ele.target.parentNode.textContent);
  todoArr.splice(index, 1);
  localStorage.setItem("todo", JSON.stringify(todoArr));
}