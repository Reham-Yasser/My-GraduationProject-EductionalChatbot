import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  Quiz: any[] =[]
  selectedAnswers: any = {};
  score = 0;
  showResults = false;
  track :any

  constructor(private _ApiService: ApiService) {
  }

  questionForm: FormGroup = new FormGroup({
    option: new FormControl(null)
  });

  ngOnInit(): void {
    const track = localStorage.getItem('trackValue');
    if(track == null){
      this._ApiService.getQuiz().subscribe({
        next: (data) => {
          this.Quiz = data.slice(0, 1)
        }
      })
    }else if (track === '1') {
      this._ApiService.getQuiz().subscribe({
        next: (data) => {
          this.Quiz = data.slice(0, 1)
        }
      })
    } else if (track === '2') {
      this._ApiService.getQuiz().subscribe({
        next: (data) => {
          this.Quiz = data.slice(1, 2)
        }
      })
    } else if (track === '3') {
      this._ApiService.getQuiz().subscribe({
        next: (data) => {
          this.Quiz = data.slice(2, 3)
        }
      })
    } 
  }


  submitQuestionForm() {
    this.score = 0;
    for (const quiz of this.Quiz) {
    for(const question of quiz.questions){
    const selectedAnswer = this.selectedAnswers[question.id];
    console.log(this.selectedAnswers[question.id]);
    console.log(question.Answer);
    
    if (selectedAnswer === question.Answer) {
      this.score++;
    }
    this.showResults = true;
    }
    }
    this.selectedAnswers = {}
  }



    //  console.log(this.selectedAnswers);
     
    // this.score = 0;
    // const selectedAnswer = this.selectedAnswers;
    // if (selectedAnswer === this.selectedAnswers) {
    //   this.score++;
    // }
    // this.showResults = true;

    // const quiz : this.Quiz[]
    // console.log([...this.Quiz]);



  // console.log(this.selectedAnswers);

  // const answeredQuestions = Object.entries(this.selectedAnswers).map(([questionId, answerId]) => ({
  //   questionId: parseInt(questionId),
  //   answerId: answerId
  // }));
  // const result = [...answeredQuestions];
  // console.log(result);

  // const response = [...this.Quiz]
  // const question = response.keys
  // console.log(question);

  // console.log(response.questions.Answer);


  // const correctAnswers = response.questions.map( questions => questions.Answer);

  // result.answeredQuestions.forEach(answeredQuestion => {
  // const questionId = answeredQuestion.questionId;
  // const answerId = answeredQuestion.answerId;
  // const answer = answeredQuestion.answerId;
  // console.log(answer);
  // console.log(rightAns);
  // });
  // const questionAndAnswerIds =  {} questionId , answerId}

  // const questionAndAnswerIds = result.answeredQuestions.map(answeredQuestion => [answeredQuestion.questionId, answeredQuestion.answerId]);
  // console.log(questionAndAnswerIds);
  // const quiz = []
  // this._ApiService.postAnswers(result).subscribe({
  //   next: (response) => {
  //     console.log(response);
  //   }
  // })

  // }

  // submitQuiz() {
  //   this.score = 0;
  //   const selectedAnswer = this.selectedAnswers;
  //   if (this.selectedAnswer === this.Quiz.questions.Answer) {
  //     this.score++;
  //   }
  //   this.showResults = true;
  // }





}


