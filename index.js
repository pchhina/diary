let entryForm = document.getElementById("entry-form");
let entriesSection = document.getElementById("entries");
let entryTextBox = document.getElementsByClassName("entry-textbox");
let entriesNav = document.querySelector(".entries-nav");
let entry = 1;

entryForm.addEventListener("submit", addEntryToDOM);

/* when submit button is clicked, 
 * 1. stops the page from refreshing,
 * 2. creates a new div element and updates it's text with entry textbox,
 * 3. appends the div to section 
 * 4. clears the entry text box
 * 5. hides the entry by default
 * 6. adds a button to the entry*/
function addEntryToDOM(event) {
    event.preventDefault();
    let entryDiv = document.createElement("div");
    entryDiv.classList.add("single-entry");
    entryDiv.textContent = entryTextBox[0].value;
    document.getElementById("entries").appendChild(entryDiv);
    
    entryTextBox[0].value = "";
    entryDiv.style.display = "none";

    let displayEntryButton = document.createElement("button");
    displayEntryButton.classList.add("entry-button");
    displayEntryButton.textContent = entry++;
    entriesNav.appendChild(displayEntryButton);

    /* when button is clicked, it loops through all entries
     * and hides them. Then it displays the one corresponding 
     * to the button that was clicked
     */
    displayEntryButton.addEventListener("click", function() {
        let allEntries = document.querySelectorAll(".single-entry");
        for (let i = 0; i < allEntries.length; i++) {
            allEntries[i].style.display = "none";
        }
        entryDiv.style.display = "block";
    })

}

