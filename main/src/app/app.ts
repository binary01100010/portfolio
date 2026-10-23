import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
