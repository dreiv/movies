import { CachingInterceptor } from './core/caching/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentsModule } from '@components/components.module';
import { HomeComponent } from '@pages/home/home.component';
import { MovieComponent } from '@pages/movie/movie.component';
import { SharedModule } from '@components/shared/shared.module';
import { SearchComponent } from '@pages/search/search.component';
import { ToMoviePipe } from './pages/movie/to-movie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    ToMoviePipe
  ],
  imports: [
    ComponentsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
