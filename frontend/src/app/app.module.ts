import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PopularArticlesComponent } from './popular-articles/popular-articles.component';

// import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'map', component: MapComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'contacts', component: MainComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ArticlesComponent,
    ReviewsComponent,
    MapComponent,
    HeaderComponent,
    PopularArticlesComponent,
  ],
  imports: [
    BrowserModule,
    // NgxHideOnScrollModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
