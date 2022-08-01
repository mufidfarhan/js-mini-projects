const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const filterInput = document.querySelector("#filter-input");
const todoList = document.querySelector("#todo-list");
const clearTodos = document.querySelector("#clear-todos");

todoForm.addEventListener("submit", addTodo);

function addTodo(e) {
	e.preventDefault();

	// Membuat li element
	const li = document.createElement("li");

	// Menambahkan class pada element li
	li.className = "list-group-item d-flex justify-content-between align-items-center mb-1";

	// Menambahkan children pada element li
	li.appendChild(document.createTextNode(todoInput.value));

	// Membuat delete button
	const a = document.createElement("a");

	// Menambahkan properti untuk a element
	a.href = "#";
	a.className = "badge badge-danger";

	a.innerHTML = "Delete";

	// Menyisipkan element a ke dalam children li
	li.appendChild(a);

	todoList.appendChild(li);

	console.log(li);
}
