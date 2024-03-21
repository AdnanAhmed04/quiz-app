
var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    }
]


let i = 0;
let qust = document.getElementById('qust')?.innerText
let rad1 = document.getElementById('opt1')?.innerText
let rad2 = document.getElementById('opt2')?.innerText
let rad3 = document.getElementById('opt3')?.innerText

function next_question() {

    if (i < questions.length) {
        console.log(i)
        document.getElementById('qust').innerText = questions[i].question
        document.getElementById('opt1').innerText = questions[i].option1
        document.getElementById('opt2').innerText = questions[i].option2
        document.getElementById('opt3').innerText = questions[i].option3
        i++;
    }
    else {
        document.getElementById('btn').innerText = 'Finish'
    }



    // console.log(qust, rad1, rad2, rad3)
}