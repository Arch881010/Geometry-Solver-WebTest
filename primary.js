document.getElementById("submit").onclick = function () {
    if(document.getElementById("math-type").value == "distance"){
        if(b1b2 === true) {
        } else {
            
        }
    }else if(document.getElementById("math-type").value == "peremeter"){
        if(b1b2 === true) {
        } else {
            var b1 = document.createElement("input");
            b1.setAttribute("style", "text");
            b1.setAttribute("id", "b1");
            document.body.appendChild(b1);
            var b2 = document.createElement("input");
            b2.setAttribute("style", "text");
            b2.setAttribute("id", "b2");
            document.appendChild(b2);
            var b1b2 = true;
        }
    }
}