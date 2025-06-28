const taskList = document.querySelector("#list");
const input = document.querySelector("#input");

function update() {
  const value = input.value.trim();
  if (value === "") return;

  const listItem = document.createElement("li");
  listItem.innerHTML = `
    <div class="task-row">
      <input type="checkbox" class="custom-checkbox" onchange="Done(event)">
      <span class="task-text">${value}</span>
      <button class="dlt" onclick="deleteitem(event)">Delete</button>
    </div>
  `;

  taskList.appendChild(listItem);
  input.value = "";
}

function deleteitem(event) {
  event.target.closest("li").remove();
}

function Done(event) {
  const checkbox = event.target;
  const li = checkbox.closest("li");
  const text = li.querySelector(".task-text");

  
  text.style.textDecoration = checkbox.checked ? "line-through" : "none";

  
  if (checkbox.checked) {
    li.parentElement.appendChild(li);
  } else {
    li.parentElement.insertBefore(li, li.parentElement.firstChild);
  }
}


input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    update();
  }
});
 