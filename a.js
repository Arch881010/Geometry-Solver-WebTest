/* CHEAT SHEET
br1 = BR in HTML
t1 = First of line of text
t1b = First of line of text 
b2b = Box 2 B
b2 = Box 2
*/
//v ONCLICK
document.getElementById("submit").onclick = function () {
    // SPACE
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
    document.body.appendChild(br1);
    var b2 = document.createElement("input"); 
    b2.setAttribute("style", "text");
    b2.setAttribute("id", 'b2');
    var b1 = document.createElement("input");
    b1.setAttribute("id", "b1");
    b1.setAttribute("style", "text");
    var b1b = document.createElement("input");
    //^ HTML ELEMENTS
    //space
        if(document.getElementById("math-type").value == "blank" /* PEREMETER - USE FOR ONLY TESTING (BLANK)*/){
    
            //BELOW THIS SHOULD NOT BE CHANGED
            document.getElementById("h10").innerHTML = "Refresh after solving, failure to refresh would cause issues.";
            document.getElementById("T/FStat").innerHTML = "True";
        } else if(document.getElementById("math-type").value == "distance") {
            //br1 = BR in HTML
            //t1 = First of line of text
            //t1b = First of line of text B
            //b2b = Box 2 B
            //b2 = Box 2
            document.body.appendChild(t1);
            document.getElementById("t1").innerHTML = "X1";
            document.body.appendChild(b1);
            document.body.appendChild(br1);
            document.body.appendChild(t1b);
            document.getElementById("t1b").innerHTML = "Y1";
            document.body.appendChild(b1b);
            //BELOW THIS SHOULD NOT BE CHANGED
            document.getElementById("h10").innerHTML = "Refresh after solving, failure to refresh would cause issues.";
            document.getElementById("T/FStat").innerHTML = "True";
            }
    };
    