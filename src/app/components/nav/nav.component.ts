import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  public currentLanguage!: string;
  private _translateService: TranslateService = inject(TranslateService);

  constructor() {
    this.currentLanguage =
      this._translateService.currentLang ||
      this._translateService.getDefaultLang();
  }

  public changeLanguage() {
    this.currentLanguage === 'es'
      ? this._translateService.use('en')
      : this._translateService.use('es');
    this.currentLanguage = this._translateService.currentLang;
  }
}
