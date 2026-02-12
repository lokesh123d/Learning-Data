const taskInput = document.getElementById("taskInput");
const priorityInput = document.getElementById("priorityInput");
const addBtn = document.getElementById("addBtn");

const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

const totalCount = document.getElementById("totalCount");
const pendingCount = document.getElementById("pendingCount");
const completedCount = document.getElementById("completedCount");

const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");
const priorityFilter = document.getElementById("priorityFilter");

let editingTask = null;

/* ---------------- COUNTS ---------------- */

function updateCounts(){
  const total = document.querySelectorAll(".task-card").length;
  const pending = pendingList.children.length;
  const completed = completedList.children.length;

  totalCount.textContent = `Total: ${total}`;
  pendingCount.textContent = `Pending: ${pending}`;
  completedCount.textContent = `Completed: ${completed}`;
}

/* ---------------- CREATE TASK ---------------- */

function createTask(text, priority){
  const card = document.createElement("div");
  card.className = `task-card ${priority}`;
  card.draggable = true;

  card.innerHTML = `
    <div class="task-left">
      <span class="task-text">${text}</span>
      <small>${priority}</small>
    </div>
    <div class="task-actions">
      <button class="complete">✔</button>
      <button class="edit">✎</button>
      <button class="delete">🗑</button>
    </div>
  `;

  pendingList.appendChild(card);
  updateCounts();
}

/* ---------------- ADD ---------------- */

addBtn.addEventListener("click",()=>{
  const text = taskInput.value.trim();
  if(!text) return;

  createTask(text, priorityInput.value);
  taskInput.value = "";
});

/* ---------------- EVENT DELEGATION ---------------- */

document.body.addEventListener("click",(e)=>{
  const card = e.target.closest(".task-card");
  if(!card) return;

  /* DELETE */
  if(e.target.classList.contains("delete")){
    card.remove();
    updateCounts();
  }

  /* COMPLETE */
  if(e.target.classList.contains("complete")){
    card.classList.toggle("completed");
    if(card.parentElement.id === "pendingList"){
      completedList.appendChild(card);
    }else{
      pendingList.appendChild(card);
    }
    updateCounts();
  }

  /* EDIT */
  if(e.target.classList.contains("edit")){
    if(editingTask && editingTask !== card) return;

    const span = card.querySelector(".task-text");

    if(!card.classList.contains("editing")){
      const input = document.createElement("input");
      input.value = span.textContent;
      span.replaceWith(input);
      card.classList.add("editing");
      editingTask = card;
    }else{
      const input = card.querySelector("input");
      const newSpan = document.createElement("span");
      newSpan.className="task-text";
      newSpan.textContent = input.value;
      input.replaceWith(newSpan);
      card.classList.remove("editing");
      editingTask = null;
    }
  }
});

/* ---------------- DRAG & DROP ---------------- */

document.addEventListener("dragstart",(e)=>{
  if(e.target.classList.contains("task-card")){
    e.target.classList.add("dragging");
  }
});

document.addEventListener("dragend",(e)=>{
  if(e.target.classList.contains("task-card")){
    e.target.classList.remove("dragging");
  }
});

document.querySelectorAll(".task-list").forEach(list=>{
  list.addEventListener("dragover",(e)=>{
    e.preventDefault();
    const dragging = document.querySelector(".dragging");
    list.appendChild(dragging);
  });
});

/* ---------------- SEARCH + FILTER ---------------- */

function debounce(fn,delay){
  let timer;
  return function(...args){
    clearTimeout(timer);
    timer = setTimeout(()=>fn.apply(this,args),delay);
  }
}

const filterTasks = ()=>{
  const text = searchInput.value.toLowerCase();
  const status = statusFilter.value;
  const priority = priorityFilter.value;

  document.querySelectorAll(".task-card").forEach(card=>{
    const name = card.querySelector(".task-text").textContent.toLowerCase();
    const p = card.classList.contains("low")?"low":
              card.classList.contains("medium")?"medium":"high";
    const isCompleted = card.parentElement.id==="completedList";

    let visible = true;

    if(!name.includes(text)) visible=false;
    if(status==="pending" && isCompleted) visible=false;
    if(status==="completed" && !isCompleted) visible=false;
    if(priority!=="all" && p!==priority) visible=false;

    card.style.display = visible?"flex":"none";
  });
};

const debouncedFilter = debounce(filterTasks,300);

searchInput.addEventListener("input",debouncedFilter);
statusFilter.addEventListener("change",filterTasks);
priorityFilter.addEventListener("change",filterTasks);
            