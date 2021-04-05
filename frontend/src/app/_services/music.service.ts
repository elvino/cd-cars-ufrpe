import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Music } from '../../app/_models';

@Injectable({ providedIn: 'root' })
export class MusicService {
    private userSubject: BehaviorSubject<Music>;
    public user: Observable<Music>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {

    }

    getAll() {
        return this.http.get<Music[]>(`${environment.apiUrl}/music/get`);
    }

    
}