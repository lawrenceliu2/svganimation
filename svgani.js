var pic = document.getElementById("vimage");
var b = document.getElementById("b");
var g = document.getElementById("grow");
var rad = 1;
var limit = false;

var clear = function() {
    while (pic.childNodes.length > 0){
	pic.removeChild(pic.childNodes[0]);
    }
    first = true;
};

b.addEventListener("click", clear);

var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
c.setAttribute("cx", 250);
c.setAttribute("cy", 250);
c.setAttribute("r", rad);
c.setAttribute("fill", "blue");
c.setAttribute("stroke", "black");

var animateDot = function(){
    console.log(rad);
    c.setAttribute("r", rad);
    pic.appendChild(c);
    if (rad == 1){limit = false;}
    if (rad == 250){limit = true;}
    if (limit){rad--;}
    else{rad++;}
    intervalID = window.setInterval(animateDot,160);
};

g.addEventListener("click", animateDot);
