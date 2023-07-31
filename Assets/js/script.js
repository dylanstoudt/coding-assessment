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
let timerId = setInterval(function(){

    timer -=1
     
}, 1000)

// declares questions as a set of arrays
let questions = [{question: "The 'funtion' and 'var' are known as:", answers: ["Keywords", "Data Types", "Declaration Statements", "Prototypes"], correctAnswer: "Declaration Statements"},
{question: "Example question goes here", answers: ["one", "two", "three", "four"], correctAnswer: "three"}
]

// declares currentQuestion as 0, used to cycle through array
let currentQuestion = 0

renderQuestion();

function renderQuestion(){

    questionDisplay.textContent = (questions[currentQuestion].question)
    button1.textContent = (questions[currentQuestion].answers[0])
    button2.textContent = (questions[currentQuestion].answers[1])
    button3.textContent = (questions[currentQuestion].answers[2])
    button4.textContent = (questions[currentQuestion].answers[3])
     = (questions[currentQuestion].correctAnswer)
}   

// Event listening for a click inside of quizDiv
quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button")){
        currentQuestion++
        renderQuestion()
    }
})