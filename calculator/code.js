
let container = document.getElementsByClassName("container")[0];

let display = container.querySelector(".secondary")

let twoDisplay = container.querySelector(".primarily");
let buttons = container.querySelectorAll(".item")
console.log (twoDisplay);
let memory = null;
let op = null;


buttons.forEach(elem => {
  elem.addEventListener("click", ()=>{
      showmsg(elem.dataset.ctx)
  })
  
});


function showmsg(dannie) {
  switch (dannie) {
    case "C":
      deleteAll()
    break;
    
    case "%":
      percent()
    break;
    
    case "pl_mn":
      plusMinus()
    break;
    
    case "+":
    case "-":
    case "*":
    case "/":
      mathOper (dannie)
    break;
    
    case "del":
      deleteLast()
    break;
      
    case ".":
      fractionalNum()   
    break;

    case "=":
      equilsAll()
    break;

    default:
      numberWrite(dannie)
    break;
  }
}

function deleteAll(){
display.value = "";
twoDisplay.value = "0";
memory = null;
op = null;
 
}

function percent(){
  if (op) {
    let per = (memory/100)*(+twoDisplay.value)
    memory = calculate(memory,per,op);
    twoDisplay.value = memory;
    op = null;
    memory=null;
    display.value = "";
  }
    
  else {
    twoDisplay.value = (+twoDisplay.value/100);
  }
  
}
function plusMinus(){
 if(twoDisplay.value !== "0") {
    twoDisplay.value.includes("-") ? twoDisplay.value = twoDisplay.value.substring(1): twoDisplay.value = 
    '-' + twoDisplay.value;
 }
}

function mathOper (dannie){
  if (op) {
    memory = calculate(memory,+twoDisplay.value,op);
    op = dannie;
    display.value = memory + op;
    twoDisplay.value = "0"; 
  } 
  else {
    memory = +twoDisplay.value;
    twoDisplay.value = "0"
    op = dannie;
    display.value = memory + op;
  }
 
}

function deleteLast(){
  if(twoDisplay.value.length === 1){
    twoDisplay.value = 0;
  }
  else {
    twoDisplay.value = twoDisplay.value.slice(0,-1);
  }


}

function fractionalNum(){
 
  twoDisplay.value.includes(".") ? twoDisplay.value : twoDisplay.value += ".";
  
 
}

function equilsAll(){
  if(op){
    twoDisplay.value = calculate(memory,+twoDisplay.value,op)
    display.value = "";
    op = null;
    memory = null;
  
  }

}

function calculate (x,y,oper){
  x = x*1e6;
  y = y*1e6;
  switch (oper) {
    case "+":
      return (x+y)/1e6;
   
    case "-":
      return (x-y)/1e6;
   
    
    case "*":
      return (x*y)/1e12;
   
    
    case "/":
      return x/y;
  }

}

function numberWrite(dannie){
  if(twoDisplay.value.length <7 ){
    if(twoDisplay.value === "0") {
      twoDisplay.value = dannie;
    } else {
      twoDisplay.value += dannie;
    }
  }

}

function viewDiv() {
  document.getElementById("divMain").classList.toggle("show")
}
document.getElementById("show_hide").addEventListener("click",()=>{
  viewDiv();
})