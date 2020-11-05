$(document).ready(function(){
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["yes", "no", "maybe", "ask later"];
    $("#answer").hide();
    
    magic8Ball.askQuestion = function(question) {
        
    var randomNumber = Math.random();
    var randomAnswerArray = randomNumber * this.listOfAnswers.length; 
    var randomIndex = Math.floor(randomAnswerArray);
    var answer = this.listOfAnswers[randomIndex];
    
        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
      $("#answer").hide();
        $("#8ball").effect("shake");
      $("#answer").fadeIn(4000);
      $("#answer").text( answer );
        
        
        console.log(question);
        console.log(answer);
    };
    
    var onClick = function() {
        
     
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
     
    //wait half a second before showing prompt
       setTimeout(
           function() {
               //show prompt
               var question = prompt("Ask a yes or no question")
               magic8Ball.askQuestion(question)
           }, 500);
    
        
        
    };
    
    $('#questionButton').click(onClick);
    
        
    });