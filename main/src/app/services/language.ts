import { Injectable, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class Language {
  translate = inject(TranslateService);

  selectedLanguage = signal<'de' | 'en'>('de');

  changeLanguage(lang: 'de' | 'en'): void {
    this.translate.use(lang);
    this.selectedLanguage.set(lang);
  }
}
