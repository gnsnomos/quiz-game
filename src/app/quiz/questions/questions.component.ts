import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
    selector: 'gs-questions',
    templateUrl: 'questions.component.html'
})
export class QuestionsComponent implements OnInit {

    constructor(private questionService: QuestionService) {
    }

    ngOnInit(): void {
        this.questionService.getQuestions().subscribe((response) => console.log(response));
    }
}