import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { MusicComponent } from './music';
import { MovieComponent } from './movie';
import { BookComponent } from './book';
import { RecommendComponent } from './recommend';

import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'music', component: MusicComponent, canActivate: [AuthGuard] },
    { path: 'movie', component: MovieComponent, canActivate: [AuthGuard] },
    { path: 'book', component: BookComponent, canActivate: [AuthGuard] },
    { path: 'recommend', component: RecommendComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }