import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { SearchComponent } from '@pages/search/search.component';
import { HomeComponent } from '@pages/home/home.component';
import { MovieComponent } from '@pages/movie/movie.component';
import { HeaderComponent } from '@components/header/header.component';
import { MoviesComponent } from '@components/movies/movies.component';
import { MovieCardComponent } from '@components/movies/movie-card/movie-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    MoviesComponent,
    MovieComponent,
    MovieCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
