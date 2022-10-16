import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { QuestionService } from './service/question.service';
import { QuestionsComponent } from './questions/questions.component';
import { AnswerComponent } from './answers/answer.component';

@NgModule({
    imports: [
        BrowserModule,
        // import HttpClientModule after BrowserModule.
        HttpClientModule,
        MatGridListModule,
        MatButtonModule,
        MatProgressBarModule,
        MatProgressSpinnerModule
    ],
    providers: [QuestionService],
    declarations: [
        QuestionsComponent,
        AnswerComponent
    ],
    bootstrap: [],
    exports: [QuestionsComponent]
})
export class QuizModule { }