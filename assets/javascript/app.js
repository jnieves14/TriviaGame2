$(document).ready(function() {
    //At first, the timer, questions and summary must be hidden.
    
    $('#countdown').hide();
    $('.questionBlock').hide();
    $('.results').hide();
        
    
    //GLOBAL VARIABLES
    var number = 70; //timer
    var intervalId;
    var correctCount = 0;
    var wrongCount = 0;
    var unansweredCount = 0;

    //FUNCTIONS
    
    // function to show questions
    function showQuestions(){
        $('#countdown').show();
        $('.questionBlock').show();
        $('#gameFinished').show();
        $('#reset').hide();
    }
    
    // function for timer
    function countdownTimer(){
        intervalId = setInterval(decrement, 1000);
    }
       
    // function to decrement timer
    function decrement(){
        number--;
        $('#timer').html(" " + number + " " + "seconds");
        if (number ===1){
            $('#timer').html(" " + number + " " + "second");
        } else if(number ===0) {
            stop();
            hide();
            displaySummary();
        }
    }
    
    //function to stop and clear timer
    function stop() {
        clearInterval(intervalId);
    }
    
    //function to hide text after questions are answered or timer out
    function hide(){
        $('#countdown').hide();
        $('.questionBlock').hide();
        $('#gameFinished').hide();
    }
    
    // function to display summary of game/ scorebaord
    function displaySummary(){
        $('.results').show();
        unansweredCount = (10-(correctCount+wrongCount));
        $('#correctNumb').text("Correct Answers:" + " " + correctCount); 
        $('#wrongNumb').text("Wrong Answers:" + " " + wrongCount); 
        $('#unansweredNumb').text("Unanswered:" + " " + unansweredCount); 
        $('#reset').show();
    }
    
    // ON CLICK EVENTS
    
    //Clicking Start Button
    $('#start').on('click', function(){
        $('#start').hide();
        showQuestions();
        countdownTimer();
    }); 
    
    //Clicking Done Button
    $('#gameFinished').on('click', function(){
        $('#start').hide(); 
        hide();
        displaySummary();
    });

    //Clicking Radio buttons
    $('input[type=radio]').on ('change', function(){
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unansweredCount = (10-(correctCount+wrongCount));
    });
    
    //play again button resets the game
    $("#reset").on("click", function() {
        $('#start').hide();
        $('.results').hide();
        $('input[type=radio]').prop('checked', false);
        showQuestions();
        //need a way to add code so that when game play again button is clicked,
        //the summary/scoreboard is reset
        number = 70;
    });


        
    // Last closing bracket
    });