var words = ["Банан", "Баран" , "Удот", "Трпихнутий"];
var word = words[Math.floor(Math.random()*words.length)];

var answerArray = [];
for (var i = 0; i < word.length; i++){
    answerArray[i] = "_";
}

function showResults(){
    $("h3").text(answerArray.join());
};


points = 10;
function win(){
    if (points === 0){
        $("body").append("<p>Ви програли</p>");
        $("body").fadeOut(3000);
    }
    else{
        $("body").append("<p>Ви виграли!!!</p>");
        $("body").fadeOut(3000);
    }
};
var points = 10;
var remainingLetters = word.length
while (remainingLetters >0){
    showResults();
    var answer = prompt("Напишіть літеру");
    if (answer === null){
        break;
    }
    else if(answer !== 1){
        $("body").append("<h4>Напишіть одну літеру!</h4>").fadeIn(3000).fadeOut(2000);
    } else{
        for (var j = 0; j < word.length;j++){
            if(word[j]===answer && answerArray[j] === "_") {
                answerArray[j] = answer;
                remainingLetters--;
            }
        }
    }
    
    points--;
}
win();