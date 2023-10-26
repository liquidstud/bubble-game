var timer = 60;
var hitrn = 0;
var score = 0;





function bubblemaker (){ var clutter = ""

for( i=1; i<=260; i++) {
   var rn = Math.floor(Math.random()*10)
   clutter += `<div class="bubble">${rn}</div>`
}document.querySelector("#pbtm").innerHTML = clutter}
function runtimer(){
   var timeint = setInterval(() => {
        if (timer > 0) {
        timer--;
        document.querySelector("#time").textContent= timer;
        }

        else {

            clearInterval(timeint)
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER YOUR SCORE IS ${score}</h1>`
            document.querySelector("#pbtm").style.color="red"
            document.querySelector("#pbtm").style.backgroundColor="green"


        }
        
    }, 1000);
}

function getrn(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hit").textContent = hitrn;
} 
 
function getscore (){ 
    score += 10;
    document.querySelector("#skore").textContent = score;

}


    document.querySelector("#pbtm").addEventListener("click",function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            getscore();
            bubblemaker();
            getrn();
            
        }
    })

       
    



bubblemaker()
runtimer()
getrn()



