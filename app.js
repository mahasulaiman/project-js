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
console.log(cards);


for(let card of cards){
card.addEventListener("click",(event)=>{
    event.target.classList.add("open")
})
}

var flg = true;
var arr = [];

for(let i=0; i<cards.length; i++){
    cards.addEventListener('click', function(){
    if(flg){
        if(arr.length ==0){
            card.addEventListener("click",(event)=>{
                event.target.classList.add("open")
            })
        }else if(arr.length ==1){
            card.addEventListener("click",(event)=>{
                event.target.classList.add("open")
            })
        }
        if(arr.length == 2){
        flg = false;
        }
    }else{
        return;
    }
})
}











