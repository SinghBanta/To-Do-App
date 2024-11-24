const inputArea = document.getElementById("InputArea");
const ListContainer = document.getElementById("List-container");

function addTask() {
  //function to add task
  if (inputArea.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputArea.value;
    ListContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    // Create span for edit icon
    let editIcon = document.createElement("span1");
    editIcon.innerHTML = "\u270E";
    editIcon.className = "edit";
    li.appendChild(editIcon);
    ListContainer.appendChild(li);

    // Prepend I use so that most recent task come to the top of the list
    ListContainer.prepend(li);

    //for smooth behaviour of scrollbar
    ListContainer.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  inputArea.value = "";
  saveData();
}

// when we press enter key our task added also
inputArea.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    //try consle.log(e) here once.
    addTask();
  }
});

//function for list container
ListContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.classList.contains("edit")) {
    let currentTask = e.target.parentElement.firstChild.textContent;
    let newTask = prompt("Edit your task:", currentTask);
    if (newTask !== null && newTask.trim() !== "") {
      e.target.parentElement.firstChild.textContent = newTask; // Update the task
    }
    saveData();
  }
});

//Save data in local storage
function saveData() {
  localStorage.setItem("data", ListContainer.innerHTML);
}

//show Data or data is saved even after refresh the window.
function showData() {
  ListContainer.innerHTML = localStorage.getItem("data");
}
showData();

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then((registration) => {
      console.log("Service Worker registered with scope:", registration.scope);
    })
    .catch((error) => {
      console.log("Service Worker registration failed:", error);
    });
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  // Prevent the mini-infobar from appearing on mobile
  event.preventDefault();
  // Save the event so it can be triggered later
  deferredPrompt = event;
  // Show the install button
  const installBtn = document.getElementById("install-btn");
  installBtn.style.display = "block";

  installBtn.addEventListener("click", () => {
    // Hide the install button
    installBtn.style.display = "none";
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  });
});
