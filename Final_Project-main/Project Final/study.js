function checkAnswer(answer) {
    let resultText = '';
    if (answer === 'run') {
        resultText = 'Correct! "Run" means to move swiftly on foot.';
    } else {
        resultText = 'Incorrect. Try again!';
    }
    document.getElementById('quiz-result').innerText = resultText;
}
