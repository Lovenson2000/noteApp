

const inputField = document.getElementById("input-field");
const notesContainer = document.querySelector(".note-container");
const button = document.getElementById("primary-btn");

// Load notes from local storage when the page loads
window.addEventListener("load", () => {
    loadNotes();
});


button.addEventListener("click", () => {
    createNote();
})


function createNote() {
    if (inputField.value === "") {
        alert("Please enter a title");
    }
    else if (!inputField.value == "") {

        const note = document.createElement("div");

        alert("Type your note in the box below your title");
        const noteTitle = document.createElement("p");
        noteTitle.innerHTML = inputField.value;
        noteTitle.setAttribute("class", "note-title");
        note.appendChild(noteTitle);

        const noteField = document.createElement("p");

        const attributes = {
            "class": "note-field",
            "id": "note-field",
            "contenteditable": "true"
        }
        for (let attr in attributes) {
            noteField.setAttribute(attr, attributes[attr]);
        }
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./interface.png";
        deleteIcon.setAttribute("class", "icon");

        note.appendChild(noteField);
        noteField.appendChild(deleteIcon);
        notesContainer.appendChild(note);

        saveNotes();

        deleteIcon.addEventListener("click", () => {
            note.remove();
            saveNotes();

        })

    }
    inputField.value = "";
    saveNotes();

}

//Writing function to save data on the user's browser
function saveNotes() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

function loadNotes() {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
        notesContainer.innerHTML = storedNotes;
        
        //Making the every note deletable again
        const deleteIcons = notesContainer.querySelectorAll(".icon");
        deleteIcons.forEach((deleteIcon) => {
            deleteIcon.addEventListener("click", () => {
                deleteIcon.parentElement.parentElement.remove();
                saveNotes();
            });
        });
    }
}
