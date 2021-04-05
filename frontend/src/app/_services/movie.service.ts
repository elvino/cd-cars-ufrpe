import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Movie } from '../../app/_models';

@Injectable({ providedIn: 'root' })
export class MovieService {
    private userSubject: BehaviorSubject<Movie>;
    public user: Observable<Movie>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }

    getAll() {
        return this.http.get<Movie[]>(`${environment.apiUrl}/movie/get`);
    }

    
}