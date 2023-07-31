let quizDiv = document.querySelector("#quiz")
let questionDisplay = document.querySelector("#question")
let button1 = document.querySelector("#answer1")
let button2 = document.querySelector("#answer2")
let button3 = document.querySelector("#answer3")
let button4 = document.querySelector("#answer4")

let timer = 90

let timerId = setInterval(function(){

    timer -=1
    console.log(timer)
    
}, 1000)

let questions = [{question: "Example question goes here", answers: ["one", "two", "three", "four"], correctAnswer: "four"},
{question: "Example question goes here", answers: ["one", "two", "three", "four"], correctAnswer: "three"}
]

let currentQuestion = 0

renderQuestion();

function renderQuestion(){

    questionDisplay.textContent = (questions[currentQuestion].question)
    button1.textContent = (questions[currentQuestion].answers[0])
    button2.textContent = (questions[currentQuestion].answers[1])
    button3.textContent = (questions[currentQuestion].answers[2])
    button4.textContent = (questions[currentQuestion].answers[3])
    // = (questions[currentQuestion].correctAnswer)
}   

quizDiv.addEventListener("click", function(event){

    if(event.target.matches("button")){
        currentQuestion++
        renderQuestion()
    }
})