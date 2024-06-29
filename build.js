document.onselectstart = null;
document.onmousedown = null;
document.onclick = null;
document.oncontextmenu = null;
document.onkeydown = null;

document.removeEventListener("contextmenu", function (e) {
    e.preventDefault();
}, false);

document.removeEventListener("keydown", function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e);
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e);
    }
    if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e);
    }
    if (e.ctrlKey && (e.key == "u" || e.keyCode == 85)) {
        disabledEvent(e);
    }
    if (event.keyCode == 123) {
        disabledEvent(e);
    }
    if ((e.ctrlKey || e.metaKey) && (e.key == "p" || e.charCode == 16 || e.charCode == 112 || e.keyCode == 80)) {
        disabledEvent(e);
        e.stopImmediatePropagation();
    }
}, false);
