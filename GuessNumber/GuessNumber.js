
window.onload=function(){
    document.getElementById('number-submit').addEventListener('click',playGame);
    document.getElementById('restart-game').addEventListener('click',init);
    //history();


}
// array for all guesses
let guesses=[];
// call getrandomNumber function
let correctNumber=getrandomNumber();

//playGame function
function playGame(){
    let numberGuess=document.getElementById('Number').value;
    guessHistory(numberGuess);
    displayHistory();
    displayResult(numberGuess);

   
}
//init function for reset all
function init(){
    correctNumber=getrandomNumber();

    document.getElementById('result').innerHTML=" ";
    guesses=[];
    displayHistory();
}

// displayResult function for displaying all result
function displayResult(numberGuess){
    console.log(correctNumber);
    if(numberGuess > correctNumber){
        showNumberAbove();
    }
    else if(numberGuess < correctNumber){
        showNumberLess();
    }
    else if(numberGuess == correctNumber){
        showWon();   
    }
}

//getDialof function for giving alert for your guess
function getDialog(dialogType,text){
    let dialog;
    switch(dialogType){
        case "danger":
            dialog= " <div class='alert alert-danger' role='alert'>"
            break;
        case "won":
            dialog="<div class='alert alert-success' role='alert'>"
            break;      
    }
    dialog+=text;
    dialog+="</div>";
    return dialog;

}
// this function return random number for guess
function getrandomNumber(){
    let wholeNumber=Math.floor(Math.random ()*100);
    return wholeNumber;
  
}
//
function showNumberAbove(){
    const text=" your guess is too high";

    let dialog=getDialog("danger",text);
    document.getElementById('result').innerHTML=dialog;
}
function showNumberLess(){
    const text=" your guess is too less";
    let dialog=getDialog("danger",text);
    document.getElementById('result').innerHTML=dialog;
}
function showWon(){
    const text="you Won the round yahhhhhhhhhh.";
    let dialog=getDialog("won",text);
    document.getElementById('result').innerHTML=dialog;
    
}
function guessHistory(Guess){
    guesses.push(Guess);
    return guesses;

}
function displayHistory(){
    let index=guesses.length-1;
    let list="<ul class='list-group'>";
    while(index >= 0){
       list += "<li class='list-group-item'>" +
        "  You Guessed  " + guesses[index] +
        "</li>";

        index-=1;      
    }

    list+="</ul>";
    document.getElementById('history').innerHTML=list;
}