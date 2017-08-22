function startOver() {
  // reset the score and start over
  console.log("starting over...")
}

function showFinalScreen() {
  console.log("showing the final screen...")
}

function showNextQuestion() {
  console.log("getting the next question...")
}

function updateScore() {
  console.log("updating the score...")
}

function checkAnswer() {
  console.log("checking the answer...")
}

function startQuiz() {
  console.log("starting the quiz...")
}

function setWelcomeNavButtons() {
  $('button').prop('disabled', true)
  $('button.js-start-quiz').prop('disabled', false)
}

function renderWelcomePage() {
  console.log("rendering welcome page...")
  const welcomeHTML = `
    <h2>Welcome to the Mt. Evans Quiz!</h2>
    <p>
      This quiz is designed to educate and inform you of some fun facts about Mt. Evans.
    </p>
    <p>
      Please start the quiz with the buttons below.
    </p>`
  
  setWelcomeNavButtons()
  $('.js-content').html(welcomeHTML)
}

function runQuiz() {
  renderWelcomePage()
}

$(runQuiz())
