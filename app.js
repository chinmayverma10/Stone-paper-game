const stone = document.querySelector(".stone");
const msg = document.querySelector("#msg");
const your_score = document.querySelector("#you-score");
const comp_score = document.querySelector("#comp-score");
let cscore=0;
let uscore=0;
stone.addEventListener("click",()=>{
    let comp_val = 1;
    console.log(comp_val);
    let x = Math.floor((Math.random() * 3) + 1);
    if(x == 1){
        msg.innerText = "Game Drawn! Play Again";
    }else if(x == 2){
        cscore++;
        comp_score.innerText = cscore;
        msg.innerText = "You Lose!!";
    }else{
        uscore++;
        your_score.innerText = uscore;
        msg.innerText = "You Win!!";
    }
})
const paper = document.querySelector(".paper");
paper.addEventListener("click",()=>{
    let comp_val = 2;
    console.log(comp_val);
    let x = Math.floor((Math.random() * 3) + 1);
    if(x==2){
        msg.innerText = "Game Drawn! Play Again";
    }else if(x==1){
        uscore++;
        your_score.innerText = uscore;
        msg.innerText = "You Win!!";
    }else{
        cscore++;
        comp_score.innerText = cscore;
        msg.innerText = "You Lose!!";
    }
})
const scissor = document.querySelector(".scissor");
scissor.addEventListener("click",()=>{
    let comp_val = 3;
    console.log(comp_val);
    let x = Math.floor((Math.random() * 3) + 1);
    if(x == 3){
        msg.innerText = "Game Drawn! Play Again";
    }else if(x == 1){
        cscore++;
        comp_score.innerText = cscore;
        msg.innerText = "You Lose!!";
    }else{
        uscore++;
        your_score.innerText = uscore;
        msg.innerText = "You Win!!";
    }
})

