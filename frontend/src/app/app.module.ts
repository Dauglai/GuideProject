import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ArticlesComponent } from './articles/articles.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { MapComponent } from './map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { PopularArticlesComponent } from './popular-articles/popular-articles.component';
import { SearchArticlesComponent } from './search-articles/search-articles.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ArticleComponent } from './article/article.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DialogWindowArticleComponent } from './dialog-window-article/dialog-window-article.component';
import { AngularYandexMapsModule, YaConfig  } from "angular8-yandex-maps";

// import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

const mapConfig: YaConfig = {
  apikey: 'f0383e10-bb41-4879-a742-b5911e220653',
  lang: 'ru_RU',
};

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'map', component: MapComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'contacts', component: MainComponent},
  {path: '**', redirectTo: 'main'},
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
    SearchArticlesComponent,
    FilterPipe,
    ArticleComponent,
    DialogWindowArticleComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // NgxHideOnScrollModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    ReactiveFormsModule,
    TuiInputModule,
    AngularYandexMapsModule.forRoot(mapConfig),
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
