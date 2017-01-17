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
var $timer = document.getElementById("timer");

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

    // initialize timer and set up an interval that counts down
    var time = 20;
    update($timer, time);
    var interval = window.setInterval(countDown, 1000);

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

// this is called every second and decreases the time
function countDown() {
    // decrease time by 1
    time--;
    // update the time displayed
    update($timer, time);
    // the game is over if the timer has reached 0
    if (time <= 0) {
        gameOver();
    }
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
    // stop the countdown interval
    window.clearInterval(interval);
}


hide($form);
show($start);