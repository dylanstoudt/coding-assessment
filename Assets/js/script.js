


let timer = 90

let timerId = setInterval(function(){

    timer -=1
    console.log(timer)
    
}, 1000)

let questions = [{question: "Example question goes here", answers: ["one", "two", "three", "four"], correctAnswer: "four"},
{question: "Example question goes here", answers: ["one", "two", "three", "four"], correctAnswer: "three"}
]

let currentQuestion = 0

function renderQuestion(){

    console.log(questions[currentQuestion].question)
    console.log(questions[currentQuestion].answers[0])
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log(questions[currentQuestion].correctAnswer)
}   