document.getElementById("submit").onclick = function () {
    if(document.getElementById("math-type").value == "distance"){
        alert("1")
    }else if(document.getElementById("math-type").value == "peremeter"){
        var x = document.createElement("input");
        x.setAttribute("style", "text");
        document.body.appendChild(x);
    }
}