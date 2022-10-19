// setInterval(unnamed(), 1000);

/* setInterval(() => {

}, 1000);
setInterval(function (){

// }, 1000);*/

var i = 1;
function onInitClick(){
    if (i != 8)
    {
    const note = document.querySelectorAll("button");
    const newNote = note[i];
    i++;
    newNote.innerText = "Note-" + i;
    newNote.setAttribute("id", "noteFile" + i);
    }
    else {
        alert("YOU HAVE THE MAXIMUM AMOUNT OF NOTES IN THIS FOLDER!");
    }
    
    if (i == 8){
        document.getElementById("newNote").style = "display: none;";
    }
}
