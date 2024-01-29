// Import necessary modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { searchReducer } from './states/search/search.reducer';
import { userReducer } from './states/users/user.reducer';
import { UserEffects } from './states/users/user.effects';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingInterceptor } from 'src/app/interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserCardComponent,
    UserInfoComponent,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ searchValue: searchReducer }),  // Change here
    StoreModule.forFeature('users', userReducer),  // Adjust as needed
    EffectsModule.forRoot([UserEffects]),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
