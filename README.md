# [DMV Practice]([https://may0022.github.io/DMV-Practice/])
 A practice exam for any possible questions on the DMV exam for my brother
 
 _Update 02-15-24: He got his permit!!_ 

## NC Driving Exam Prep

This repository contains the code for an NC Driving Exam Prep application.

### HTML Structure:
>_kept it simple_
>_used JavaScript to fill in this section_
```html
    <div class="app"> 
        <h1>NC Driving Exam Prep</h1>
        <div class="quiz">
            <h2 id="question">Question goes here</h2>
            <div id="answer-buttons">
                <button class="btn">Answer 1</button>
                <button class="btn">Answer 2</button>
                <button class="btn">Answer 3</button>
                <button class="btn">Answer 4</button>
            </div>
```
>_chose to make it so only one question showed at a time, to simulate the test_

### JavaScript Structure:
>_this is where the questions and answers would be to contained to insert into the HTML with a later function_
```javascript
const questions = [{
        question: "Insert Question Here",
        answers: [
            { text: "Insert Answer Here", correct: false },
            { text: "Insert Answer Here", correct: false },
            { text: "Insert Answer Here", correct: true },
            { text: "Insert Answer Here", correct: false },
        ],
    },"
```
>_also mixed up questions and shuffled answers around so they wouldn't be memorized by placement_

>**Question Shuffling**
```javascript
function shuffleQuestions() {
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]];
  }
}
```
>**Answer Shuffling**
```javascript
questions.forEach(question => {
    for (let i = question.answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [question.answers[i], question.answers[j]] = [question.answers[j], question.answers[i]];
    }
  }
```
>_said later function_

>**Question Shown**
```javascript
function showQuestion(){
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
	
	currentQuestion.answers.forEach(answer => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);
		if(answer.correct){
			button.dataset.correct = answer.correct;
		}
			button.addEventListener("click", selectAnswer);
		});
}
```

## Afterthoughts

### Can this be optimized?
Yes... probably?

### Am I going to optimize it?
No, not at all. 
