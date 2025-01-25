// Get DOM elements
const strInput = document.getElementById("strInput");
const addNoteButton = document.getElementById("addNote");
const deleteAllButton = document.getElementById("deleteAll");
const NoteList = document.getElementById("NoteList");

// Function to validate STRs, symbols & text characters
function isValidSTR(str) {
  if ((str !== "")) return true
};

// Event listener for adding a Note
addNoteButton.addEventListener("click", () => {
  const str = strInput.value.trim();
  if (isValidSTR(str)) {
    const NoteItem = document.createElement("li");
    NoteItem.classList.add("Note-item");
    NoteItem.innerHTML = `<p st="${str}">${str}</p>
             <div class="buttons"> 
                 <button class="edit"g>Edit</button>
                 <button class="delete">Delete</button>
             </div>`;
    NoteList.appendChild(NoteItem);
    strInput.value = "";
    addEditNoteListener(NoteItem);
    addDeleteNoteListener(NoteItem);
  } else {
    alert("Please enter a valid STR.");
  }
});

// Event listener for deleting all Notes
deleteAllButton.addEventListener("click", () => {
  while (NoteList.firstChild) {
    NoteList.removeChild(NoteList.firstChild);
  }
});

// Event listener for editing Notes
function addEditNoteListener(NoteItem) {
  const editButton = NoteItem.querySelector(".edit");
  const NoteLink = NoteItem.querySelector("p");

  editButton.addEventListener("click", () => {
    const newSTR = prompt(
      "Edit what to do:",
      NoteLink.getAttribute("st")
    );
    if (newSTR && isValidSTR(newSTR)) {
      NoteLink.setAttribute("st", newSTR);
      NoteLink.innerHTML = newSTR;
    } else if (newSTR) {
      alert("Please enter something to do.");
    }
  });
}

// Event listener for deleting a Note
function addDeleteNoteListener(NoteItem) {
  const deleteButton = NoteItem.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    NoteItem.remove();
  });
}
