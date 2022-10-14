import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BackendResponse, Question } from './questions.model';

@Injectable()
export class QuestionService {
    private url: string = 'https://opentdb.com/api.php?amount=10&category=21&difficulty=medium&type=multiple';

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<Question[]> {
        return this.http.get<BackendResponse>(this.url).pipe(map(response => response.results as Question[]));
    }
}