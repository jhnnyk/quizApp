const QUESTIONS = [
  {
    question: "What is the elevation at the summit of Mt. Evans?",
    choices: ["12,565 ft", "14,264 ft", "15,631 ft", "10,302 ft"],
    answer: "14,264 ft",
    additionalInfo: "The summit of Mt. Evans is 14,264 feet above sea level."
  }, 
  {
    question: "How many ecosystems do you travel through on your way up Mt. Evans?",
    choices: ["1", "2", "4", "7"],
    answer: "4",
    additionalInfo: "There are 4 ecosystems on Mt. Evans: Montane (7500-9500 ft), SubAlpine (9500-11000 ft), Krummholz Transition Zone (11000-11500 ft), Alpine Tundra (11500+ ft)"
  }, 
  {
    question: "What is Colorado's Official State Animal?",
    choices: ["Rocky Mountain Bighorn Sheep", "Mountain Goat", "Marmot", "Black Bear"], 
    answer: "Rocky Mountain Bighorn Sheep", 
    additionalInfo: "Colorado's Official State Animal is the Rocky Mountain Bighorn Sheep"
  }, 
  {
    question: "What is the only bird that lives on the tundra year round?",
    choices: ["Mountain Bluebird", "Mountain Chickadee", "Grouse", "Ptarmigan"],
    answer: "Ptarmigan",
    additionalInfo: "The ptarmigan lives on the tundra all year round. It beds in snowdrifts, eats willow buds and it's feet are lined with feathers for warmth."
  }, 
  {
    question: "How big is the Mt. Evans Wilderness Area?",
    choices: ["0 - 25 square miles", "25 - 50 square miles", "50 - 100 square miles", "more than 100 square miles"],
    answer: "more than 100 square miles",
    additionalInfo: "The Mt. Evans Wilderness Area is 74401 acres or 116.25 square miles."
  },
  {
    question: "What large rodent related to the woodchuck lives on Mt. Evans?",
    choices: ["black squirrel", "pika", "marmot", "groundhog"],
    answer: "marmot",
    additionalInfo: "Marmots live on Mt. Evans. In the summer, they eat enough to double their weight so that they can hibernate all winter."
  }, 
  {
    question: "This animal is often found on Mt. Evans and has a beard and pencil-like horns:",
    choices: ["marmot", "bighorn sheep", "antelope", "mountain goat"],
    answer: "mountain goat",
    additionalInfo: "Mountain goats have thick white fur, a shoulder hump, pencil-like horns and a bearded chin."
  }, 
  {
    question: "What's 1600 years old and growing strong on Mt. Evans?",
    choices: ["bristlecone pines", "the mountain itself", "alpine mold", "a glacier"],
    answer: "bristlecone pines",
    additionalInfo: "The bristlecone pine is known to live more than 5,000 years."
  }, 
  {
    question: "How much does the temperature drop for every 1000 feet you climb?",
    choices: ["1-2º F", "3-5º F", "5-10º F", "more than 10º F"],
    answer: "3-5º F",
    additionalInfo: "On average, the temperature drops 3-5ºF for every thousand feet you climb. It can be wintery on the top of Mt. Evans even in summer."
  }, 
  {
    question: "Some tundra plants can take as long as _____ before they bloom for the first time.",
    choices: ["3 months", "1 year", "5 years", "60 years"],
    answer: "60 years",
    additionalInfo: "Some tundra plants live as many as 60 years before they bloom for the first time."
  }
]

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
