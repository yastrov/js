'use strict';
/*
Template for main.js file.
For more about events, see event.js file.
*/

function myIdProcess(event){
    event = event || window.event;  // For IE
    var target = event.target || event.srcElement; // For IE
}

window.onload = function(event){
    event = event || window.event; // For IE
    var target = event && event.target || window.event.srcElement;
    try {
            if(document.addEventListener) {
                // Normal browser
                document.getElementById('myid').addEventListener("click" , myIdProcess, false);
            } else {
                // IE here!
                document.getElementById('myid').attachEvent("onclick", myIdProcess);
            }
    } catch(e) {
        console.log("name: " + e.name + "\nmessage: " + e.message + "\nstack: " + e.stack);
    } finally {
        ;
    }
};