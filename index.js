let entryForm = document.getElementById("entry-form");
let entriesSection = document.getElementById("entries");
let entryTextBox = document.getElementsByClassName("entry-textbox");

entryForm.addEventListener("submit", addEntryToDOM);

/* when submit button is clicked, stops the page from refreshing,
 * creates a new div element and updates it's text with entry textbox,
 * and finally appends the div to section */
function addEntryToDOM(event) {
    event.preventDefault();
    let entryDiv = document.createElement("div");
    entryDiv.classList.add("single-entry");
    entryDiv.textContent = entryTextBox[0].value;
    document.getElementById("entries").appendChild(entryDiv);
}

