// Declares variables using ID tags from HTML
let quizDiv = document.querySelector("#quiz")
let questionDisplay = document.querySelector("#question")
let button1 = document.querySelector("#answer1")
let button2 = document.querySelector("#answer2")
let button3 = document.querySelector("#answer3")
let button4 = document.querySelector("#answer4")
let countdown = document.querySelector("#timer")

// Sets timer variable
let timer = 90

// Interval to reduce timer by 1 for every 1000ms
function startTimer(){
    let timerId = setInterval(function () {

        timer -= 1
        countdown.textContent = ("Time Remaining: " + timer)

    }, 1000)
}

// declares questions as a set of arrays
let questions = [{ question: "The 'funtion' and 'var' are known as:", answers: ["Keywords", "Data Types", "Declaration Statements", "Prototypes"], correctAnswer: "Declaration Statements" },

{ question: "'Justify-Content: Center' does what?", answers: ["Items align at the center of the container.", "Items display with equal spacing around them.", "Items align to the right side of the container.", "Items display with equal spacing between them."], correctAnswer: "Items align at the center of the container." },

{ question: "JavaScript can be used for?", answers: ["Showing a user personal data only after they log in.", "Fetching weather data to display and update on a page", "Informing users that they are missing information on a form", "All of the above"], correctAnswer: "All of the above" },

{ question: "Example question goes here", answers: ["one", "two", "three", "four"], correctAnswer: "three" },
{}
]

// declares currentQuestion as 0, used to cycle through array
let currentQuestion = 0

//Question Display
renderQuestion();

function renderQuestion() {

    questionDisplay.textContent = (questions[currentQuestion].question)
    button1.textContent = (questions[currentQuestion].answers[0])
    button2.textContent = (questions[currentQuestion].answers[1])
    button3.textContent = (questions[currentQuestion].answers[2])
    button4.textContent = (questions[currentQuestion].answers[3])
    correctButton = (questions[currentQuestion].correctAnswer)
}

// Event listening for a click inside of quizDiv
quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        // determines if first question starts timer
        if(currentQuestion === 0){
            startTimer()
        }
        if(currentQuestion === 4){
            quizDiv.style.display = 'none';
        }
        

        currentQuestion++;
        renderQuestion();
    }
})

//create an array that stores Highscores
//create a function to display that array in highscores.html