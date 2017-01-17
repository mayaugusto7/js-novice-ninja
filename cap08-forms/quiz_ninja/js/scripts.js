var quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super heroes can you name?",
    "question": "What is the real name of ",
    "questions": [
        { "question": "Superman", "answer": "Clarke Kent" },
        { "question": "Batman", "answer": "Bruce Wayne" },
        { "question": "Wonder Woman", "answer": "Dianna Prince" }
    ]
}

var score = 0;

var $question = document.getElementById("question");
var $score = document.getElementById("score");
var $feedback = document.getElementById("feedback");
var $start = document.getElementById("button");
var $form = document.getElementById("answer");

// Event Listener start game
$start.addEventListener("click", function () {
    play(quiz);
}, false);

update($score, score);

function update(element, content, kclass) {
    var p = element.firstChild || document.createElement("p");
    p.textContent = content;
    element.appendChild(p);
    if (kclass) {
        p.className = kclass;
    }
}

$form.addEventListener('submit', function (event) {
    event.preventDefault();
    check($form[0].value);
}, false);

function play(quiz) {

    chooseQuestion();
    hide($form);
    hide($start);
    show($form);
    
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    } 

    gameOver();
}

function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

var i = 0;
chooseQuestion();

function chooseQuestion() {
    var question = quiz.questions[i].question;
    ask(question);
}

function ask(question) {
    update($question, quiz.question + question);
    $form[0].value = "";
    $form[0].focus();
}

function check(answer) {

    if (answer === quiz.questions[i].answer) {
        update($feedback, "Correct!", "right");
        score++;
        update($score, score);
    } else {
        update($feedback, "Wrong!", "wrong");
    }

    i++;

    if (i === quiz.questions.length) {
        gameOver();
    } else {
        chooseQuestion();
    }
}

function gameOver() {
    update($question, "Game Over, you scored " + score + " points");
}



hide($form);
show($start);