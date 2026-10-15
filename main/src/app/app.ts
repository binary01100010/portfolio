import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private translate = inject(TranslateService);

  // changeLanguage() erwartet genau einen Wert: entweder 'de' oder 'en'.
  // void → Die Methode gibt keinen Wert zurück.
  changeLanguage(lang: 'de' | 'en'): void {
    // .use() → Eine Funktion aus ngx-translate, die die gewünschte Sprache aktiviert.
    // Die Funktion changeLanguage() erhält entweder 'de' oder 'en'
    // als Argument und gibt diesen Wert an die Funktion use() des
    // TranslateService weiter
    this.translate.use(lang);
  }
}
