const inputArea = document.getElementById("InputArea");
const ListContainer = document.getElementById("List-container");
const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

// Initialize theme from localStorage
function initTheme(){
  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);
}

function setTheme(theme){
  html.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-theme") || "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  setTheme(newTheme);
});

initTheme();

function addTask() {
  if (inputArea.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  let li = document.createElement("li");
  let taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.textContent = inputArea.value;
  li.appendChild(taskText);

  let actionsDiv = document.createElement("div");
  actionsDiv.className = "actions";

  let deleteBtn = document.createElement("span");
  deleteBtn.textContent = "×";
  deleteBtn.className = "delete";
  deleteBtn.style.cursor = "pointer";
  actionsDiv.appendChild(deleteBtn);

  li.appendChild(actionsDiv);
  ListContainer.prepend(li);

  ListContainer.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  inputArea.value = "";
  saveData();
}

inputArea.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

ListContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("task-text")) {
    e.target.parentElement.classList.toggle("checked");
    saveData();
  } else if (e.target.classList.contains("delete")) {
    e.target.closest("li").remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

function showData() {
  ListContainer.innerHTML = localStorage.getItem("data") || "";
  
  // Re-attach event listeners after loading data
  document.querySelectorAll("#List-container li .task-text").forEach((el) => {
    el.style.cursor = "pointer";
  });
}

showData();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered:", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
  const installBtn = document.getElementById("install-btn");
  installBtn.style.display = "flex";

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted install prompt");
      } else {
        console.log("User dismissed install prompt");
      }
      deferredPrompt = null;
    });
  });
});
