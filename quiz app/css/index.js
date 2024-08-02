const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        correctAnswer: "Blue Whale"
    }
];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const scoreElement = document.getElementById("score");

function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        
        optionsElement.innerHTML = ""; // Clear previous options
        
        currentQuestion.options.forEach((option) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.addEventListener("click", () => checkAnswer(option));
            optionsElement.appendChild(li);
        });
}

function checkAnswer(selectedOption) 
    {
        const currentQuestion = questions[currentQuestionIndex];
        if (selectedOption === currentQuestion.correctAnswer) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
}

function endQuiz() 
{
        questionElement.textContent = "Quiz Finished!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        scoreElement.textContent = `Final Score: ${score}/${questions.length}`;
}

nextButton.addEventListener("click", () => 
{
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
});

loadQuestion();