var j = 0;
function closeAllNotes(){
    while (j != 8)
    {
    const note = document.querySelectorAll("textarea");
    const currentnote = document.getElementById("current-note");
    const closeNote = note[j];
    closeNote.setAttribute("id", "inactive");
    closeNote.style = "display: none;";
    j = j + 1;
    currentnote.innerText = "";
    }
    if (j == 8){
        j = j - 8;
    }
}
