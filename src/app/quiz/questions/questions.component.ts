import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Question } from '../service/questions.model';

@Component({
    selector: 'gs-questions',
    templateUrl: 'questions.component.html',
    styleUrls: ['questions.component.scss']
})
export class QuestionsComponent implements OnInit {

    currentQuestionNumber = -1;
    currentQuestion!: Question;
    questions: Question[];
    answers: string[];
    userAnswers: string[];
    gameIsOver = false;
    correctAnswers = 0;

    constructor(private questionService: QuestionService) {
    }

    ngOnInit(): void {
        this.questionService.getQuestions().subscribe((questions: Question[]) => this.questions = questions);
    }

    startNewQuiz(): void {
        this.resetGame();
        this.nextQuestion();
    }

    answerClicked(selectedAnswer: string): void {
        this.userAnswers.push(selectedAnswer);
        this.nextQuestion();
    }

    private nextQuestion(): void {
        this.currentQuestionNumber++;
        if (this.currentQuestionNumber < this.questions.length) {
            this.currentQuestion = this.questions[this.currentQuestionNumber];
            this.answers = this.shuffleAnswers();
        } else {
            this.gameOver();
        }
    }

    private gameOver(): void {
        this.gameIsOver = true;
        this.countCorrectAnswers();
    }

    private countCorrectAnswers(): void {
        this.correctAnswers = this.userAnswers.filter((userAnser: string, index: number) => this.questions[index].correct_answer === userAnser).length;
    }

    private resetGame(): void {
        this.currentQuestionNumber = -1;
        this.gameIsOver = false;
        this.userAnswers = [];
    }

    private shuffleAnswers(): string[] {
        const unshuffledAnswers = [...this.currentQuestion.incorrect_answers, this.currentQuestion.correct_answer];
        return unshuffledAnswers
            .map(unshuffledAnswer => ({ order: Math.random(), answer: unshuffledAnswer }))
            .sort((a, b) => a.order - b.order)
            .map(shuffledAnswers => shuffledAnswers.answer);
    }
}