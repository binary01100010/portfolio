import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translate = inject(TranslateService);

  changeLanguage(lang: 'de' | 'en'): void {
    this.translate.use(lang);
  }
}
