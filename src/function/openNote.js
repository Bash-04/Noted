var i = 0;

var activeTextarea = document.getElementById("active");

var activeNoDisplay = document.getElementById("active").style.display = "none;";

// nog fixen!!!
function openNote1(){
    const textarea = document.querySelectorAll("textarea");
    const currentTextarea = textarea[0];

    const noteFile = document.getElementById("noteFile1");

    if(noteFile != document.getElementById("current-note").innerText){
        document.getElementsByName("TextareaNote-1").setAttribute("id", "active");
        document.getElementById("current-note").innerText = noteFile.innerText;
    }
    loadActiveTextarea();
}

function openNote2(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[1];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
    }
    loadActiveTextarea();
}

function openNote3(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[2];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
    }
    loadActiveTextarea();
}

function openNote4(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[3];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
    }
    loadActiveTextarea();
}

function openNote5(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[4];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
    }
    loadActiveTextarea();
}

function openNote6(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[5];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
    }
    loadActiveTextarea();
}

function openNote7(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[6];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
    }
    loadActiveTextarea();
}

function openNote8(){
    const note = document.querySelectorAll("textarea");
    const currentTextarea = note[7];

    document.getElementById("TextareaNote-1").setAttribute("id", "active");

    if(currentTextarea != activeTextarea){
        currentTextarea.style.display = "block;"
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
