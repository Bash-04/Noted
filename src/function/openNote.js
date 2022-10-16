var i = 0;

var activeTextarea = document.getElementById("active");

// nog fixen!!!
function openNote1(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[0];

    const noteFile = document.getElementById("noteFile1");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote2(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[1];

    const noteFile = document.getElementById("noteFile2");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote3(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[2];

    const noteFile = document.getElementById("noteFile3");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote4(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[3];

    const noteFile = document.getElementById("noteFile4");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote5(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[4];

    const noteFile = document.getElementById("noteFile5");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote6(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[5];

    const noteFile = document.getElementById("noteFile6");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote7(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[6];

    const noteFile = document.getElementById("noteFile7");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote8(){
    closeAllNotes();
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[7];

    const noteFile = document.getElementById("noteFile8");

    if(noteFile != document.getElementById("current-note").innerText){
        currentTextarea.setAttribute("id", "active");
        document.getElementById("active").style = "display: block;";
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function loadActiveTextarea()
    {
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[i];

    for (i < 8; i++;){
        if(currentTextarea == activeTextarea && activeTextarea == activeNoDisplay)
        {
            currentTextarea.style.display = "block;"
        }
    }
    i = 0;
}
