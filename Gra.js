var x, txt, dc, wc, txt2;
dc = 0;
wc = 0;
document.getElementById("rng").onclick = function() {rng()};
function rng(){
    x = Math.floor((Math.random() * 100) + 1);
    if (x > 95) {
        txt = document.getElementById("wynik").innerHTML="<div id='yd'><p id='win'>VICTORY ACHIEVED</p></div>";
        
        wc += 1;
        txt2 = 'Victory Count: ' + wc;
        document.getElementById("wc2").innerHTML = txt2;
        
    } else {
        txt = document.getElementById("wynik").innerHTML="<div id='yd'><p id='lose'>YOU DIED</p></div>";
        
        dc += 1;
        txt2 = 'Death Count: ' + dc;
        document.getElementById("dc2").innerHTML = txt2;
    }
    
}