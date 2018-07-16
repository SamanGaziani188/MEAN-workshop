import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppIntroductionComponent } from './app-introduction/app-introduction.component';
import { AppLoginpageComponent } from './app-loginpage/app-loginpage.component';
import { AppTodoinputComponent } from './app-todoinput/app-todoinput.component';
import { AppTodolistComponent } from './app-todolist/app-todolist.component';
import { AppFollowersComponent } from './app-followers/app-followers.component';
import { AppUserdetailsComponent } from './app-userdetails/app-userdetails.component';
import { AppUserpageComponent } from './app-userpage/app-userpage.component';
import { AppTododetailsComponent } from './app-tododetails/app-tododetails.component';

const appRoutes: Routes = [
  {path: 'login', component: AppLoginpageComponent},
  {path: 'user', component: AppUserpageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '**', redirectTo: 'login', pathMatch: 'full' }
]



@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppLoginComponent,
    AppIntroductionComponent,
    AppLoginpageComponent,
    AppTodoinputComponent,
    AppTodolistComponent,
    AppFollowersComponent,
    AppUserdetailsComponent,
    AppUserpageComponent,
    AppTododetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
