let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let container=document.querySelector(".container");
let message = document.querySelector(".message");
let newGame=document.querySelector(".newGame");

const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8],
];

let turnO=true;

const disablebox=()=>{
  for(box of boxes)
  {
    box.disabled=true;
  }
}


resetbtn.addEventListener("click", () => {

    turnO = true;

    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }

    message.innerText = "";
});

newGame.addEventListener("click", () => {

    turnO = true;

    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }

    message.innerText = "";
});

boxes.forEach((box)=>{

  box.addEventListener("click",()=>{
    if(turnO)
    {
      box.innerText="O";
      turnO=false;
    }
    else{
      box.innerText="X";
      turnO=true;
    }
    box.disabled=true;
    checkwinner()
  })
})

const checkwinner=()=>{

  for(pattern of winPatterns)
  {
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;

    if(pos1val!="" && pos2val!="" && pos3val!="")
    {
      if(pos1val===pos2val && pos2val===pos3val)
      {
        
        message.innerText = `Congratulations! Player ${pos1val} is Winner`;
        message.style.fontSize="50px";
        disablebox()
      }
    }
  }
}