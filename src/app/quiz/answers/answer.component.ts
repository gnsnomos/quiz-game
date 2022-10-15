import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'gs-answer',
    templateUrl: 'answer.component.html'
})
export class AnswerComponent {
    @Input() answer: string;

    @Output() onAnswerClicked: EventEmitter<string> = new EventEmitter<string>();

    answerClicked(selectedAnswer: string): void {
        this.onAnswerClicked.emit(selectedAnswer);
    }
}