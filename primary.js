document.getElementById("submit").onclick = function () {
    if(document.getElementById("math-type").value == "peremeter"){
        if(b1b2 === true) {
            alert("Refresh your page!!");
        } else {   
        }
    }else if(document.getElementById("math-type").value == "distance"){
        if(b1b2 === true) {
            alert("Refreh your page!!");
        } else {
        var br1 = document.createElement("br");
        br1.setAttribute("id", "br1");
        document.body.appendChild(br1);
        var t1 = document.createElement("text");
        t1.setAttribute("stye", "text");
        t1.setAttribute("id", "t1");
        t1.body.appendChild(t1);
        documet.getElementById("t1").innerHTML("First point x");
        var t1b = document.createElement("text");
        t1b.setAttribute("stye", "text");
        t1b.setAttribute("id", "t1b");
        var b2b = document.createElement("input");
        b2b.setAttribute("style", "text");
        b2b.setAttribute("id", "b2b");
        document.body.appendChild(b1);
        var br1 = document.createElement("br");
        br1.setAttribute("id", "br1");
        document.body.appendChild(br1);
        var b2 = document.createElement("input");
        b2.setAttribute("style", "text");
        b2.setAttribute("id", 'b2');
        document.body.appendChild(b2);
        document.getElementById("h10").innerHTML = "Refresh after solving, failure to refresh would cause issues.";
        var b1b2 = true;
        }
    }
}