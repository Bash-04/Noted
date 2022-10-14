var j = 0;
function closeAllNotes(){
    if (j != 8)
    {
    const note = document.querySelectorAll("textarea");
    const currentnote = document.getElementById("current-note");
    const closeNote = note[j];
    closeNote.setAttribute("id", "inactive");
    closeNote.style = "display: none;";
    j = j + 1;
    currentnote.innerText = "";
    }
    else {
        alert("YOU HAVE NO NOTES OPEN");
    }
    
    if (j == 8){
        document.getElementById("closeNote").style = "display: none;";
    }
}
