const survey = {
  question: 'Какой язык программирования вы хотели бы выучить?',
  options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
  answers: new Array(5).fill(0),

  logNewAnswer() {
    // display a prompt
    const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Напишите номер ответа)`));
    console.log(`Ваш ответ: ${answer}`);

    // Update answers
    if (typeof answer === 'number' && answer >= 0 && answer < this.answers.length) {
      this.answers[answer]++;
      console.log(this.answers);
    }

    },
  
    printResults(type = 'array') {
      if (type === 'array') {
        console.log(this.answers);
      } else if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
      }
  }
};

document.querySelector('#survey').addEventListener('click', survey.logNewAnswer.bind(survey));

//  survey.logNewAnswer();