import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { QuestionService } from './service/question.service';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answers/answer.component';

@NgModule({
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
    ],
    providers: [QuestionService],
    declarations: [
        QuestionsComponent,
        AnswerComponent
    ],
    bootstrap: [],
    exports: [QuestionsComponent],
    entryComponents: [AnswerComponent]
})
export class QuizModule { }