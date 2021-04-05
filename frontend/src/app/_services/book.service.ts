import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Book } from '../../app/_models';

@Injectable({ providedIn: 'root' })
export class BookService {
    private userSubject: BehaviorSubject<Book>;
    public user: Observable<Book>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }

    getAll() {
        return this.http.get<Book[]>(`${environment.apiUrl}/book/get`);
    }

    
}