import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';

declare var variableName:any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  protected mapCafe: string = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af82ca8c50ad16d21f47b692e82d58da8a610da5b253f299f1d97bb7a5c1b6e8c&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true';
  protected mapDormitories: string = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aa857b99327dd70100321beaebd7dc44ccf13e852770c33594c27a0319f77139e&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";
  protected mapUniversities: string = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A13eec2c5b98aafcb9ec91efdfca3aa9f8021e73839ab7e8a05cdf50e913143a0&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true";

  constructor(
    @Inject(DOCUMENT) private document: Document,
  private renderer2: Renderer2) {}

  ngOnInit(): void {
    // this.insertScript(this.mapCafe, '.container-map__cafe');
    // this.insertScript(this.mapDormitories, '.container-map__dormitories');
    // this.insertScript(this.mapUniversities, '.container-map__universities');
  }

  insertScript(src: string, place: string) {
    const textScript = this.renderer2.createElement('script');
    textScript.src = src;
    this.renderer2.appendChild(this.document.querySelector(place), textScript);

    const srcScript = this.renderer2.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.text = `
      (function() {
        console.log('Hello World!')
      }());
    `;
    this.renderer2.appendChild(this.document.body, srcScript);
  }
}
