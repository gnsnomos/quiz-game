import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'gs-answer',
    templateUrl: 'answer.component.html',
    styleUrls: ['answer.component.scss']
})
export class AnswerComponent {
    @Input() answer: string;
    @Input() isCorrectAnswer: boolean;
    @Input() hightlightAnswers: boolean;

    @Output() onAnswerClicked: EventEmitter<string> = new EventEmitter<string>();

    answerClicked(selectedAnswer: string): void {
        this.onAnswerClicked.emit(selectedAnswer);
    }
}