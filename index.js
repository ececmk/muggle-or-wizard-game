// question data
const questions = [
    {
      question: 'Who wrote Fantastic Beasts and Where to Find Them?',
      a: 'Gilderoy Lockhart',
      b: 'Miranda Goshawk',
      c: 'Bathilda Bagshot',
      d: 'Newt Scamander',
      correctAnswer: "d"
    },
    {
      question: 'What happens if you cast Locomotor Mortis?',
      a: 'You turn into a statue',
      b: 'Your arms lock together',
      c: 'Your legs lock together ',
      d: 'Your whole body locks together ',
      correctAnswer: "c"
    },
    {
      question: 'Why is a Mandrake considered dangerous?',
      a: 'They are highly poisonous',
      b: 'The sap is corrosive',
      c: 'They have a nasty bite',
      d: 'Their cry is fatal',
      correctAnswer: "d"
    },
    {
      question: 'What does it mean to be accomplished at Legilimency?',
      a: 'You can block people from looking into your mind',
      b: 'You can see into people’s minds ',
      c: 'You can design your own dreams',
      d: 'You can train yourself to stop thinking',
      correctAnswer: "b"
    },
    {
      question: 'What magical item sorts new students into their Hogwarts house?',
      a: 'The Sorting Hat',
      b: 'An Owl',
      c: 'The Hogwarts Express',
      d: 'The house ghosts',
      correctAnswer: "a"
    },
  ]
  
  // Variable Declarations
  const welcomeContainer = document.getElementById("welcome-container")
  const startButtom = document.getElementById("start-btn")
  const submitButton = document.getElementById("submit-btn")
  const nextQuestion = document.getElementById("next-btn")
  const quiz = document.getElementById("quiz");
  let answerElement = document.querySelectorAll(".answer");
  const questionElement = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  let currentScore = document.getElementById("score");
  let corrention = document.getElementById("correction")
  const card = document.querySelector(".card");
  const finalContainer = document.getElementById("final-container")
  const wizard = document.getElementById("wizard");
  const muggle = document.getElementById("muggle");
  let currentQuiz = 0;
  let currentQuizData = questions[currentQuiz];
  let score = 0;
  const audio = document.querySelector('audio');
  
  //Let's get started!
  startButtom.addEventListener("click", () => {
    welcomeContainer.style.opacity = 0;
    setTimeout(() => { welcomeContainer.style.display = "none" }, 4000);
    setTimeout(() => { quiz.style.display = "block" }, 4000);
    
    audio.muted = false;
    audio.play()
  })
  
  // Functions //
  function showQuestion() {
    if (currentQuiz < questions.length) {
      if (currentQuiz > 0) {
        card.classList.toggle('is-flipped');
      }
  
      resetAnswers();
  
      questionElement.innerText = questions[currentQuiz].question;
      a_text.innerText = questions[currentQuiz].a;
      b_text.innerText = questions[currentQuiz].b;
      c_text.innerText = questions[currentQuiz].c;
      d_text.innerText = questions[currentQuiz].d;
    } else {
      quiz.style.display = "none"
      showFinalScore();
    }
  }
  
  showQuestion();
  
  function selectAnswer() {
    let answer = undefined;
    answerElement.forEach((answerEl) => {
  
      if (answerEl.checked) {
        answer = answerEl.id
      }
    });
    return answer;
  }
  
  function resetAnswers() {
    answerElement.forEach((answerEl) => {
      answerEl.checked = false;
    });
  }
  
  function showFinalScore() {
    if (score >= 3 && currentQuiz === questions.length) {
      wizard.innerHTML += "Congrats! You are ready for Hogwarts School of Witchcraft and Wizardry! You better get your Hogwarts Express ticket and pack your trunk!"
      wizard.style.opacity = 1;
    } else if (score < 3 && currentQuiz === questions.length) {
      muggle.innerHTML += "Sorry mate! It looks like you are a muggle. Maybe you should choose an easier school like Harvard."
      muggle.style.opacity = 1;
    }
  }
  
  submitButton.addEventListener("click", () => {
    const answer = selectAnswer();
  
    if (answer === questions[currentQuiz].correctAnswer) {
      score++;
      currentScore.innerText = "Score: " + score;
      corrention.innerHTML = "CORRECT!";
    } else {
      corrention.innerHTML = "WRONG!";
    }
  
    card.classList.toggle('is-flipped');
  }
  )
  
  nextQuestion.addEventListener("click", () => {
    currentQuiz++
    showQuestion()
  })