/* x = 0 to prevent issue */ x = 0;
/* Sets DIV */    const div = document.getElementById('div');
//v ONCLICK
/* Note1's text*/ var Note = "Diameter or Radius needs to be filled, leaving blank assumes it is empty and thus 0 (and will be filtered out).";
/*TX1's text*/ var rt = `&nbsp&nbspRadius: `;
/*TX2's text*/ var dt = "Diameter: ";
a = 0;
document.getElementById("submit").onclick = function () {
    //Removes Input Boxes, etc
    if (x > 0) {
    div.replaceChildren();
    } else {}
    // SPACE
       var mathtype = document.getElementById('math-type').value;
        var br = document.createElement("BR");   //BR 
        var br1 = document.createElement('BR');
        var br2 = document.createElement('BR');
        var br3 = document.createElement("BR");
        var fbr = document.createElement("BR");
        var note = document.createElement('text');
        var tx1 = document.createElement("text"); //Tx1 / X1
        var ty1 = document.createElement("text"); //Ty1 / Y1
        var tx2 = document.createElement("text");
        var ty2 = document.createElement("text");
        var tx3 = document.createElement('text');
        var ty3 = document.createElement("text");
        var tx4 = document.createElement("text");
        var ty4 = document.createElement("text");
        var b1 = document.createElement("input");
        var b1b = document.createElement("input");
        var b2 = document.createElement("input");
        var b2b = document.createElement("input");
        var b3 = document.createElement("input");
        var b3b = document.createElement("input");
        var b4 = document.createElement('input');
        var b4b = document.createElement('input');
        var t1 = document.createElement('input');
        var t2 = document.createElement('input');
        var solve = document.createElement("button");
        var equ = document.createElement("button");
        //Note (A note that popup stating a notice, not the REFRESH one) ID
        note.setAttribute('style', 'text');
        note.setAttribute('id', 'note');
        //solve ID + STYLE + FUNCTION
        solve.setAttribute("style", "text");
        solve.setAttribute("id", "solve");
        solve.setAttribute('onclick', 'solve()');
        //equ ID + STYLE + FUNCTION
        equ.setAttribute("style", "style");
        equ.setAttribute('id', "equ");
        equ.setAttribute("onclick", "equ()");
        //T1 ID + STYLE
        t1.setAttribute("id", "t1");
        t1.setAttribute("style", "text");
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
        //T2 ID + STYLE
        t2.setAttribute("id", "t2");
        t2.setAttribute("style", "text");
        //B2 ID + STYLE
        b2.setAttribute("style", "text");
        b2.setAttribute("id", "b2");
        //B2B ID + STYLE
        b2b.setAttribute("style", "text");
        b2b.setAttribute("id", 'b2b');
        //tx2 ID + STYLE 
        tx2.setAttribute("style", "text");
        tx2.setAttribute("id", "tx2");
        //ty2 ID + STYLE 
        ty2.setAttribute("style", "text");
        ty2.setAttribute("id", "ty2");
        //tx3 ID + STYLE
        tx3.setAttribute("style", "text");
        tx3.setAttribute("id", 'tx3');
        //ty3 ID + STYLE
        ty3.setAttribute('style', 'text');
        ty3.setAttribute('id', 'ty3');
        //tx4 ID + Style
        tx4.setAttribute("style", "text");
        tx4.setAttribute("id", 'tx4');
        //ty4
        ty4.setAttribute('style', 'text');
        ty4.setAttribute('id', 'ty4');
        //B3 ID + STYLE   
        b3.setAttribute("style", "text");
        b3.setAttribute('id', 'b3');
        //B3B ID + STYLE
        b3b.setAttribute("style", "text");
        b3b.setAttribute("id", "b3b");
        //B4 ID + STYLE
        b4.setAttribute('style', 'text');
        b4.setAttribute("id", 'b4');
        //B4B
        b4b.setAttribute('style', 'text');
        b4b.setAttribute('id', 'b4b');
        //SETS BOXES AS NUMBERS
        t1.setAttribute("type", 'number');
        b1.setAttribute("type", "number");
        b1b.setAttribute("type", "number");
        t2.setAttribute('type', 'number');
        b2.setAttribute("type", "number");
        b2b.setAttribute("type", "number");
        b3.setAttribute("type", "number");
        b3b.setAttribute("type", "number");
        b4.setAttribute("type", "number");
        b4b.setAttribute("type", "number");
        //BR Class setting
        br.setAttribute("class", 'br');
        br1.setAttribute('class', 'br');
        br2.setAttribute('class', 'br');
        br3.setAttribute('class', 'br');
        fbr.setAttribute('class', 'br');
    //^ HTML ELEMENTS
    //Color/CSS setting.
    b1.style.backgroundColor = 'rgb(62, 61, 61)';
    b1b.style.backgroundColor = 'rgb(62, 61, 61)';
    b2.style.backgroundColor = 'rgb(62, 61, 61)';
    b2b.style.backgroundColor = 'rgb(62, 61, 61)';
    b3.style.backgroundColor = 'rgb(62, 61, 61)';
    b3b.style.backgroundColor = 'rgb(62, 61, 61)';
    t1.style.backgroundColor = 'rgb(62, 61, 61)';
    t2.style.backgroundColor = 'rgb(62, 61, 61)';
    t1.style.color = 'White';
    t2.style.color = 'White';
    b3b.style.color = 'White';
    b1.style.color = 'White';
    b1b.style.color = 'White';
    b2.style.color = 'White';
    b2b.style.color = 'White';
    b3.style.color = 'White';
    b3b.style.color = 'White';
    //Text Values
    equ.innerText = "Get Equation";
    solve.innerText = "Solve";

    ///// V ONCLICK
    if (document.getElementById("math-type").value == "AoT") {
        div.appendChild(tx1);
        document.getElementById("tx1").innerHTML = "X1: ";
        div.appendChild(b1);
        div.appendChild(ty1);
        document.getElementById("ty1").innerHTML = " Y1: ";
        div.appendChild(b1b);
        div.appendChild(br);
        div.appendChild(tx2);
        document.getElementById("tx2").innerHTML = "X2: ";
        div.appendChild(b2);
        div.appendChild(ty2);
        document.getElementById("ty2").innerHTML = " Y2: ";
        div.appendChild(b2b);
        div.appendChild(br1);
        div.appendChild(tx3);
        document.getElementById("tx3").innerHTML = "X3: ";
        div.appendChild(b3);
        div.appendChild(ty3);
        document.getElementById('ty3').innerHTML = " Y3: ";
        div.appendChild(b3b);
        //tx1, b1, ty1, b1b, br, tx2, b2, ty2, b2b, br1, tx3, b3, ty3, b3b
        //^ ADDING ELEMENTS
        //v SOLVE/EQUATION BUTTONS/BR
        div.appendChild(fbr);
        div.appendChild(solve);
        div.appendChild(equ);
        x = 1;


        /*COC*/
    } else if (document.getElementById("math-type").value == "CoC") {
        div.appendChild(note);
        document.getElementById('note').innerHTML = Note;
        div.appendChild(br1);
        div.appendChild(tx1);
        document.getElementById("tx1").innerHTML = dt;
        div.appendChild(b1);
        div.appendChild(br);
        div.appendChild(tx2);
        document.getElementById("tx2").innerHTML = rt;
        div.appendChild(b2);
        div.appendChild(br3);
        div.appendChild(solve);
        div.appendChild(equ);
        x = 2;


        /*AoC*/
    } else if (document.getElementById("math-type").value == "AoC") {
        div.appendChild(note); 
        document.getElementById('note').innerHTML = Note;
        div.appendChild(br);
        div.appendChild(tx1);
        document.getElementById('tx1').innerHTML = dt;
        div.appendChild(t1);
        div.appendChild(br1);
        div.appendChild(tx2);
        document.getElementById('tx2').innerHTML = rt;
        div.appendChild(t2);
        div.appendChild(br3);
        div.appendChild(solve);
        div.appendChild(equ);
        x = true;


        /*distance*/
    } else if (document.getElementById("math-type").value == "distance") {
        div.appendChild(tx1);
        document.getElementById("tx1").innerHTML = "X1: ";
        div.appendChild(b1);
        div.appendChild(ty1);
        document.getElementById("ty1").innerHTML = " Y1: ";
        div.appendChild(b1b);
        div.appendChild(br);
        div.appendChild(tx2);
        document.getElementById("tx2").innerHTML = "X2: ";
        div.appendChild(b2);
        div.appendChild(ty2);
        document.getElementById("ty2").innerHTML = " Y2: ";
        div.appendChild(b2b);
        div.appendChild(br1);
        div.appendChild(solve);
        div.appendChild(equ);
        x = 3;
    } else if (document.getElementById("math-type").value == "SAoCu") {
        div.appendChild(tx1);
        tx1.innerHTML = "A Edge: "
        div.appendChild(b1);
        div.appendChild(br);
        div.appendChild(solve);
        div.appendChild(equ);
        x = 4;
    } else if (document.getElementById("math-type".value) == "VoCu") {
        div.appendChild(tx1);
        tx1.innerHTML = "A Edge: "
        div.appendChild(b1);
        div.appendChild(br);
        div.appendChild(solve);
        div.appendChild(equ);
        x = 5;
    } else if(document.getElementById("math-type").value == "VoCo") {
        div.appendChild(tx1);
        tx1.innerHTML = "Radius: "
        div.appendChild(b1);
        div.appendChild(br)
        div.appendChild(tx2);
        tx2.innerHTML = "Height: ";
        div.appendChild(b2);
        div.appendChild(br1);
        div.appendChild(solve);
        div.appendChild(equ);
        x = 6;
    }
};





function equ() {
    if (document.getElementById("math-type").value == "AoT") {
        alert('Instead of just "x", use the x value of the second point. Like LINE AB. The x of B = x₂, etc. Do √((x₂ - x₁)² + (y₂ - y₁)²) three times. For each thing. Eg. Line AB, Line BC, Line AC. (Press "Ok" to continue)');
        alert('Add all of the units together to find the peremeter. AB + BC + AC. Divide by two and round to the hundreths place. 0.01 eg. That is the semiperemeter or "s". √(s(s-AB)(s-BC)(s-AC)) would be your answer.');
    } else if (document.getElementById("math-type").value == "CoC") {
        alert('"C = πd" or "C = π(2d)"');
    } else if (document.getElementById("math-type").value == "distance") {
        alert("√((x₂ - x₁)² + (y₂ - y₁)²)");
    } else if (document.getElementById("math-type").value == "AoC") {
        alert("π(r²)");
    }
}







function solve() {
    if (document.getElementById("math-type").value == "AoT") {
        sx1 = Number(document.getElementById("b1").value);
        sy1 = Number(document.getElementById("b1b").value);
        sx2 = Number(document.getElementById("b2").value);
        sy2 = Number(document.getElementById("b2b").value);
        sx3 = Number(document.getElementById("b3").value);
        sy3 = Number(document.getElementById("b3b").value);
        sx1 = Number(document.getElementById("b1").value);
        sy1 = Number(document.getElementById("b1b").value);
        sx2 = Number(document.getElementById("b2").value);
        sy2 = Number(document.getElementById("b2b").value);
        sx = sx2 - sx1;
        console.log(sx);
        sy = sy2 - sy1;
        console.log(sy);
        sxq = sx ** 2;
        syq = sy ** 2;
        dis = sxq + syq;
        ans = Math.sqrt(dis);
        dis = dis * 100;
        dis = Math.round(dis);
        dis = dis / 100;
        sx1 = sx2 - sx1;
        console.log(sx1);
        sy1 = sy2 - sy1;
        console.log(sy);
        sxq1 = sx1 ** 2;
        syq1 = sy1 ** 2;
        dis1 = sxq1 + syq1;
        dis1 = dis1 * 100;
        dis1 = Math.round(dis1);
        dis1 = dis1 / 100
        ans1 = Math.sqrt(dis1);
        sx2 = sx2 - sx1;
        console.log(sx2);
        sy2 = sy2 - sy1;
        console.log(sy2);
        sxq2 = sx2 ** 2;
        syq2 = sy2 ** 2;
        dis2 = sxq2 + syq2;
        ans2 = Math.sqrt(dis2);
        dis2 = dis2 * 100;
        dis2 = Math.round(dis2);
        dis2 = dis2 / 100
        p = ans1 + ans2 + ans;
        s = p / 2;
        answer = Math.sqrt(s * (s - ans) * (s - ans1) * (s - ans2));
        answer = answer * 100;
        answer = Math.round(answer);
        answer = answer / 100;
        alert(answer + " units² is your answer.")
        x = 1;
    } else if (document.getElementById("math-type").value == "CoC") {
        d = Number(document.getElementById("b1").value);
        r = Number(document.getElementById("b2").value);
        if (r == 0) {
            r = d / 2;
        }
        ans = 3.14 * 2 * r;
        alert(ans + " units is your answer.");
        x = 2;
    } else if (document.getElementById("math-type").value == "distance") {
        sx1 = Number(document.getElementById("b1").value);
        sy1 = Number(document.getElementById("b1b").value);
        sx2 = Number(document.getElementById("b2").value);
        sy2 = Number(document.getElementById("b2b").value);
        sx = sx2 - sx1;
        console.log(sx);
        sy = sy2 - sy1;
        console.log(sy);
        sxq = sx ** 2;
        syq = sy ** 2;
        dis = sxq + syq;
        ans = Math.sqrt(dis);
        ans = ans * 100;
        ans = Math.round(ans);
        ans = ans/100;
        alert(ans + " units is your answer.");
        x = 3;
    } else if (document.getElementById("math-type").value == "AoC") {
        var r = Number(document.getElementById("t1").value);
        var d = Number(document.getElementById("t2").value);
        if (d == 0) { }
        if (r == 0) {
            r = d / 2;
        }
        var ans = 3.14 * (r ** 2);
        ans = ans * 100;
        ans = Math.round(ans);
        ans = ans/100;
        alert(ans + " units is your answer.");
    }
}
