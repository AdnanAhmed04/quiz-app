let questions = [
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
];

let i = 0;

function next_question() {
    let qust = document.getElementById('qust');
    let opt1 = document.getElementById('opt1');
    let opt2 = document.getElementById('opt2');
    let opt3 = document.getElementById('opt3');

    if (i < questions.length) {
        qust.innerText = questions[i].question;
        opt1.innerText = questions[i].option1;
        opt2.innerText = questions[i].option2;
        opt3.innerText = questions[i].option3;
        i++;
    } else {
        document.getElementById('btn').innerText = 'Finish';
    }
}

function remove_disable() {
    let btn = document.getElementById('btn');
    btn.disabled = false;

}

function unckecked_radio_btn() {
    let unckecked = document.getElementsByName('option')
    for (var i = 0; i < unckecked.length; i++) {
        unckecked[i].checked = false
    }
}
