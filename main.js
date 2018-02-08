
    var score;
    var submit;
    var answers;
    var questionIndex = 0
    var currentQuestion;
    var questionBox = $(".sports-questions");
    var answerOne = $(".answer1");
    var answerTwo = $(".answer2");
    var answerThree = $(".answer3");
    var answerFour = $(".answer4");
    var answerBoxes = $(".answers div");
    var playerOneScoreDisplay = $(".score1");
    var playerTwoScoreDisplay = $(".score2");
    var correctAnswer 
    var playerOneScore = 0
    var playerTwoScore = 0
    var currentPlayer = 1
    var incorrectAnswers = 0




    //questions each player will take turns answering
    var questions = [
        {
        
            question: "Who was one of the original founders of Apple?" ,
            answers:  {
                        a: "Steve Jobs",
                        b:  "Bill Gates",
                        c:  "Paul Allen",
                        d:  "Mickey Mouse",
        
                    },
                    correctAnswer:  "Steve Jobs"
        },{
                        question: "In what city was Starbucks created?",
        answers:    {
                    a: "Los Angeles",
                    b: "Seattle",
                    c: "New York",
                    d: "Miami",
        },
                    correctAnswer:  "Seattle"
    
    },{
        question: "Besides Tesla and SpaceX, what was one of the first companies Elon Musk created?",
        answers:  {
                    a: "Amazon",
                    b: "PayPal",
                    c: "MySpace",
                    d: "Tinder",
        },
                correctAnswer:  "PayPal"
    },{
        question: "How old was Mark Zuckerberg when he created Facebook?",
        answers:  {
                    a:  "19",
                    b:  "20",
                    c:  "23",
                    d:  "10",
        },
        correctAnswer:  "19"
    
    }];
    
    
    swal("Player One Turn", "Good Luck!!");
    
    
    //how each answer is selected and how score is calculated and displayed
    //also how the computer will know to switch to next question based on what answer selected 
    
    function answerClickHandler(){
        if(this.innerText == currentQuestion.correctAnswer){
            if(currentPlayer == 1){
                playerOneScore += 1
                playerOneScoreDisplay.text("Score: " + playerOneScore)
            } else if (currentPlayer == 2){
                playerTwoScore += 1
                playerTwoScoreDisplay.text("Score: " + playerTwoScore)
            }
            changeQuestion()
        } else {
            if(incorrectAnswers == 0 ) {
                swal("You are not correct!", "You have one more try!")
                incorrectAnswers +=1
            } else if(incorrectAnswers > 0){
                swal("Incorrect Again!", "Next Question")
                changeQuestion()
            }
        }
    }

    // loop that determines the way answers are selected 
    for(var i =0; i<answerBoxes.length; i++) {
        answerBoxes[i].addEventListener("click", answerClickHandler)

    }

    // function on when to change to next question
    function changeQuestion() {
        if(questionIndex < questions.length) {
            currentQuestion = questions[questionIndex]
            questionBox.text(currentQuestion.question)
            answerOne.text(currentQuestion.answers.a)
            answerTwo.text(currentQuestion.answers.b)
            answerThree.text(currentQuestion.answers.c)
            answerFour.text(currentQuestion.answers.d)
            questionIndex += 1
            
            
        } else if (currentPlayer == 1) {
            switchTurns()
            swal("It is now Player Two Turn!", "Good Luck!")
            changeQuestion()
        } else if(currentPlayer == 2) {
            showResults()
            
        }
    }
    changeQuestion()

    // function on switching turns to next player 
    function switchTurns() {
        incorrectAnswers = 0
        questionIndex = 0
        if(currentPlayer == 2){
            currentPlayer = 1 
        
        }
        else if (currentPlayer == 1){
            currentPlayer = 2
        }
    }



    function startGame() {

    }
    
    // name a winner 
    function showResults() {
        if(playerOneScore > playerTwoScore){
            swal("PLAYER ONE IS THE WINNER!!", "Congratulations!!!!")
        } else if(playerTwoScore > playerOneScore) {
            swal("PLAYER TWO IS THE WINNER", "Congratulations")
        }
        
        
    }
        
    
