import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'saveHtml'
})
export class SaveHtmlPipe implements PipeTransform {
  
    constructor(protected sanitizer: DomSanitizer) {}

    transform(value: any): SafeHtml {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

}
