function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

// varible



//functions





// event listeners


const cards = document.querySelectorAll(".card")
let openCard = [];

function match(){
if(openCard[0].children[0].className == openCard[1].children[0].className){
    openCard[0].classList.add("match")
    openCard[1].classList.add("match")
    openCard = [];
}

else{

    setTimeout(()=>{
    openCard[0].classList.remove("open");
    openCard[1].classList.remove("open");
    openCard = []; 
},1000)  
}
}

function validClick(card){
    if(openCard.length < 2 && !card.classList.contains("match") && card.classList.contains("card")){
        return true;
    }
    else{
        return false;
    }
}

console.log(cards);


for(let card of cards){
card.addEventListener("click",(event)=>{
    if (validClick(event.target)){
    event.target.classList.add("open")
    openCard.push(event.target)
    console.log(openCard.length);
    
if(openCard.length==2){
    match();
    move();
}

    }  
}
)
}


var counterMove = document.getElementById("moves"),
  count = 0;
  function move() {
  count += 1;
  counterMove.innerHTML = count + "moves";
};




