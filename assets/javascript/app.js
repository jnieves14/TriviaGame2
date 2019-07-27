$(document).ready(function() {
    // when the page is loaded first, the timer, questions and summary must be hidden.
    
        $('#countdown').hide();
        $('.questionBlock').hide();
        $('.results').hide();
        
    
        // Declare Variables
        var number = 70; //number of seconds
        var intervalId;
        var correctCount = 0;
        var wrongCount = 0;
        var unansweredCount = 0;
    
    //ALL FUNCTIONS
    
        // function to show questions
        function showQuestions(){
            $('#countdown').show();
            $('.questionBlock').show();
            $('#gameFinished').show();
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
            }
            else if(number ===0) {
                stop();
                hide();
                displaySummary();
            }
        }
    
        //function to clear timer
        function stop() {
            clearInterval(intervalId);
        }
    
            //function to hide text after questions are answered or timer out
        function hide(){
            $('#countdown').hide();
            $('.questionBlock').hide();
            $('#gameFinished').hide();
        }
    
        // function to display summary of game
        function displaySummary(){
            $('.results').show();
            unansweredCount = (10-(correctCount+wrongCount));
            $('#correctCount').text("Correct Answers:" + " " + correctCount); 
            $('#wrongCount').text("Wrong Answers:" + " " + wrongCount); 
            $('#unansweredCount').text("Unanswered:" + " " + unansweredCount); 
        }
    
    // CLICK EVENTS
    
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
    

        $("#reset").on("click", function() {
            $('#start').hide();
            $('.results').hide();
            showQuestions();
            number = 70;

        });

        
    // Last closing bracket
    });