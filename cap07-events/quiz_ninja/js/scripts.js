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

// Event Listener start game
$start.addEventListener("click", function() {
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

function play(quiz) {
    
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question, i);
        check(answer, i);
    }

    gameOver();
}

function ask(question) {
    update($question, quiz.question + question);
    return prompt("Enter your answer:");
}

function check(answer, i) {

    if (answer === quiz.questions[i].answer) { 
        update($feedback, "Correct!", "right");
        score++;
        update($score, score);
    } else {
        update($feedback, "Wrong!", "wrong");
    }
}

function gameOver() {
    update($question, "Game Over, you scored " + score + " points");
}
