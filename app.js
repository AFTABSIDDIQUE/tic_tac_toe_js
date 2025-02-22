let boxes = document.querySelectorAll(".box");
let resetGameBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resteGame=()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

let count =0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
            count++;
        }else{
            box.innerText="X";
            turnO=true;
            count++;
        }
        box.disabled = true;
        checkWinner();
        if(count===9){
            drawMatch();
        }
    })
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const drawMatch=()=>{
    msg.innerHTML=`Match has been Draw between both the players `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const showWinner=(winner)=>{
    msg.innerText = `Congratulation, Winner is Player ${winner} `;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
}


const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }

}

newGameBtn.addEventListener("click",resteGame);
resetGameBtn.addEventListener("click",resteGame);
