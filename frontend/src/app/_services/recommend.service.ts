import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Recommend } from '../../app/_models';

@Injectable({ providedIn: 'root' })
export class RecommendService {
    private userSubject: BehaviorSubject<Recommend>;
    public user: Observable<Recommend>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }

    getAll() {
        return this.http.get<Recommend[]>(`${environment.apiUrl}/recommend/get`);
    }

    
}