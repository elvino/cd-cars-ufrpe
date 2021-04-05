import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Home } from '../../app/_models';

@Injectable({ providedIn: 'root' })
export class HomeService {
    private userSubject: BehaviorSubject<Home>;
    public user: Observable<Home>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }

    getAll() {
        return this.http.get<Home[]>(`${environment.apiUrl}/home/get`);
    }

    
}