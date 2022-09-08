var br1 = document.createElement("br");
br1.setAttribute("id", "br1");
var t1 = document.createElement("text");
t1.setAttribute("stye", "text");
t1.setAttribute("id", "t1");
var t1b = document.createElement("text");
t1b.setAttribute("stye", "text");
t1b.setAttribute("id", "t1b");
var b2b = document.createElement("input");
b2b.setAttribute("style", "text");
b2b.setAttribute("id", "b2b");
var br1 = document.createElement("br");
br1.setAttribute("id", "br1");
document.body.appendChild(br1);
var b2 = document.createElement("input"); 
b2.setAttribute("style", "text");
b2.setAttribute("id", 'b2');
var b1 = document.createElement("input");
b1.setAttribute("id", "b1");
b1.setAttribute("style", "text");
var b1b = document.createElement("input");
//^ HTML ELEMENTS
/* THIS IS USED TO SET b1b2 as FALSE, CHANGING WOULD RESULT IN FAILURE */ var b1b2 = false;
//v ONCLICK
document.getElementById("submit").onclick = function () {
    if(document.getElementById("math-type").value == "peremeter"){
        if(document.getElementById("T/FStat").value === "True") {
            alert("Refresh your page!!");
        } else {  

        //BELOW THIS SHOULD NOT BE CHANGED
        document.getElementById("h10").innerHTML = "Refresh after solving, failure to refresh would cause issues.";
        document.getElementById("T/FStat").innerHTML = "True";
        }
    } else if(document.getElementById("math-type").value == "distance") {
        if(document.getElementById("T/FStat").value === "True") {
            alert("Refreh your page!!");
        } else {
        //br1 = BR in HTML
        //t1 = First of line of text
        //t1b = First of line of text B
        //b2b = Box 2 B
        //b2 = Box 2
        
        //BELOW THIS SHOULD NOT BE CHANGED
        document.getElementById("h10").innerHTML = "Refresh after solving, failure to refresh would cause issues.";
        document.getElementById("T/FStat").innerHTML = "True";
        }
    }
};