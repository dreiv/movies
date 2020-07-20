import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from '@components/components.module';
import { HomeComponent } from '@pages/home/home.component';
import { MovieComponent } from '@pages/movie/movie.component';
import { SharedModule } from '@components/shared/shared.module';
import { SearchComponent } from '@pages/search/search.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, MovieComponent, SearchComponent],
  imports: [
    ComponentsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
