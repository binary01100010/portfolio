import { Component, inject } from '@angular/core';
import { Language } from '../../services/language';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  language = inject(Language);
}
