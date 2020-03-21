function makeBold() {
    var textarea = document.getElementById("para");
    if (textarea.style.fontWeight == 'bold') {
        textarea.style.fontWeight = 'normal'
    }
    else {
        textarea.style.fontWeight ='bold'
    }

}
function makeUndeline() {
    var textarea = document.getElementById("para");
    if (textarea.style.textDecoration== 'underline') {
        textarea.style.textDecoration = 'none'
    }
    else {
        textarea.style.textDecoration ='underline'
    }

}

function makeItalic() {
    var textarea = document.getElementById("para");
    if (textarea.style.fontStyle == 'italic') {
        textarea.style.fontStyle = 'normal'
    }
    else {
        textarea.style.fontStyle='italic'
    }

}

function changeSize() {
    var e = document.getElementById("size");
    var value = e.options[e.selectedIndex].value;
    var textarea = document.getElementById("para");
    textarea.style.fontSize = value
   

}
function changeTexte() {
    var e = document.getElementById("text");
    var value = e.options[e.selectedIndex].value;
    var textarea = document.getElementById("para");
    textarea.style.fontFamily = value
}
