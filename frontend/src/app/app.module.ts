import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MapComponent } from './components/map/map.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { PopularArticlesComponent } from './components/popular-articles/popular-articles.component';
import { SearchComponent } from './components/search/search.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ArticleComponent } from './components/article/article.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { DialogWindowArticleComponent } from './components/dialog-window-article/dialog-window-article.component';
import { AngularYandexMapsModule, YaConfig  } from "angular8-yandex-maps";
import { SaveHtmlPipe } from './pipes/save-html.pipe';
import { SearchTeacherPipe } from './pipes/search-teacher.pipe';

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
    SearchComponent,
    FilterPipe,
    ArticleComponent,
    DialogWindowArticleComponent,
    SaveHtmlPipe,
    SearchTeacherPipe,
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
    TuiButtonModule,
    AngularYandexMapsModule.forRoot(mapConfig),
],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, FilterPipe, SearchTeacherPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
