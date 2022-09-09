//v ONCLICK
document.getElementById("submit").onclick = function () {
    // SPACE
    var br = document.createElement("br"); //BR 
    var tx1 = document.createElement("text"); //Tx1 / X1
    var ty1 = document.createElement("text"); //Ty1 / Y1
    var b1 = document.createElement("input"); 
    var b1b = document.createElement("input");
    var b2 = document.createElement("input");
    var b2b = document.createElement("input");
    var b3 = document.createElement("input");
    var b3b = document.createElement("input");
    //BR APPEND AND ID
    document.body.appendChild(br); 
    br.setAttribute("id", "br");
    //Tx1 ID + STYLE
    tx1.setAttribute("stye", "text");
    tx1.setAttribute("id", "tx1");
    //B1 ID + STYLE
    b1.setAttribute("id", "b1");
    b1.setAttribute("style", "text");
    //B1B ID + STYLE
    b1b.setAttribute("id", "b1b");
    b1b.setAttribute("style", "text");
    //Ty1 ID + STYLE
    ty1.setAttribute("stye", "text");
    ty1.setAttribute("id", "ty1");
    //B2 ID + STYLE
    b2.setAttribute("style", "text");
    b2.setAttribute("id", "b2");
    //B2B ID + STYLE
    b2b.setAttribute("style", "text");
    b2b.setAttribute("id", 'b2b');
    //SETS BOXES AS NUMBERS
    b1.setAttribute("type", "number");
    b1b.setAttribute("type", "number");
    b2.setAttribute("type", "number");
    b2b.setAttribute("type", "number");
    //^ HTML ELEMENTS
    //space
    ///// V ONCLICK
        if(document.getElementById("math-type").value == "blank" /* PEREMETER - USE FOR ONLY TESTING (BLANK)*/){
    
            //BELOW THIS SHOULD NOT BE CHANGED
            document.getElementById("T/FStat").innerHTML = "True";
        } else if(document.getElementById("math-type").value == "distance") {
            //br = BR in HTML
            //t1 = First of line of text
            //t1b = First of line of text B
            //b2b = Box 2 B
            //b2 = Box 2
            document.body.appendChild(tx1);
            document.getElementById("tx1").innerHTML = "X1";
            document.body.appendChild(b1);
            document.body.appendChild(br);
            document.body.appendChild(ty1);
            document.getElementById("ty1").innerHTML = "Y1";
            document.body.appendChild(b1b);
            //BELOW THIS SHOULD NOT BE CHANGED
            document.getElementByName("h10").innerHTML = "Refresh after solving, failure to refresh would cause issues.";
            }
    };
    