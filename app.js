let gameseq=[];
let userseq=[];
let start=false;
let level=0;
let h3=document.querySelector("h3");

let randombox=["green","red","blue","pink"];

document.addEventListener("click", function(){
    
    if(start==false){
        h3.innerText="your game is started";
        start=true;
        levelup();
    }
    
});


function levelup(){
    userseq=[];
    level++;
    h3.innerText=`level ${level}`;
    let randnum=Math.floor(Math.random()*4);
    let randbox=document.querySelector(`.${randombox[randnum]}`);
    gameseq.push(randombox[randnum]);
    btnflash(randbox);
}

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
    
}

function btnpress(){
    let btn=this;
    
    let userpress=btn.getAttribute("id");
    userseq.push(userpress);
    btnflash(btn)
    anscheck(userseq.length-1);
}

let allbtn=document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function anscheck(currindex){
    
    if(userseq[currindex]==gameseq[currindex]){
        if(gameseq.length==userseq.length){

            setTimeout(levelup,1000);
        }
    }
    else{
        h3.innerHTML=`Game Over !,<b> Your Score is ${level}</b> <br> press any key to start !.`
        reset();
    }
}
function  reset(){
     gameseq=[];
     userseq=[];
     start=false;
     level=0;
}

