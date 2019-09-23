let questions = [
    "What's Your Name?",
    'Where are you chatting from?',
    'How old are You?',
    'What programming language do you work with?',
    'Nice having a conversation with you have a great day'
];

let count = 0;

let displayMessages = document.querySelector('#questions')
displayMessages.innerHTML = questions[0];

let inputReader = document.querySelector('input');

function showAnswers() {
let input = inputReader.value;
if(inputReader.value == ""){
alert('entries required');
}else {
    if(count == 0){
        displayMessages.innerHTML = `hello ${input}, nice meeting you`;
        inputReader.value = "";
        inputReader.setAttribute("placeholder", "wait for 3 seconds");
        ++count;
        setTimeout(changeQuestion, 3000);
    }else if (count == 1){
        displayMessages.innerHTML = `${input}, is an awesome place`;
        inputReader.value = "";
        inputReader.setAttribute("placeholder", "wait for 3 seconds");
        ++count;
        setTimeout(changeQuestion, 3000);
    }else if (count == 2) {
        displayMessages.innerHTML = ` it means you were born in the year ${2019 - (input)}`;
        inputReader.value = "";
        inputReader.setAttribute("placeholder", "wait for 3 seconds");
        ++count;
        setTimeout(changeQuestion, 3000);
    }else if(count == 3){
        displayMessages.innerHTML = `${input} is a nice language `;
        inputReader.value = "";
        inputReader.setAttribute("placeholder", "wait for 3 seconds");
        ++count;
        setTimeout(changeQuestion, 3000);
    }
}
}

function changeQuestion() {
    inputReader.setAttribute("placeholder", "enter your response");
    displayMessages.innerHTML = questions[count];
    if(num == 4){
        inputReader.style.display = 'none';
    }
   
}
$(document).on('keypress', function(e){
if(e.which == 13){
    showAnswers();
}
})