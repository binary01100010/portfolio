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

  changeLanguage(lang: 'de' | 'en'): void {
    this.translate.use(lang);
  }
}
