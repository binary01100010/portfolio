import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { provideTranslateService } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';

import { routes } from './app.routes';

// Ja, providers und @Injectable hängen zusammen, haben aber unterschiedliche Aufgaben.
// - @Injectable() → Kennzeichnet eine Klasse als Angular-Service und ermöglicht die Konfiguration ihrer Bereitstellung.
// - providers → Legt fest, welche Dienste Angular bereitstellt und wie sie erzeugt werden.

// ApplicationConfig gehört zu den TypeScript-Typen, genau wie boolean, string, number oder any.
// ApplicationConfig ist ein von Angular definierter Objekttyp, während boolean, string und
// number grundlegende TypeScript-Typen sind.
export const appConfig: ApplicationConfig = {
  // Durch providers in der app.config.ts werden Dienste global für deine Angular-Anwendung bereitgestellt.
  providers: [
    provideRouter(routes),
    // provideRouter(routes) aktiviert und konfiguriert den Angular-Router für die gesamte
    // Anwendung, sodass alle Komponenten die Navigation zwischen den definierten
    // URL-Pfaden nutzen können, ohne die Webseite vollständig neu zu laden.
    provideHttpClient(),
    // provideHttpClient() stellt den HTTP-Client global für die gesamte Angular-Anwendung
    // bereit, damit Komponenten und Dienste über HTTP oder HTTPS Daten von einem Server
    // anfordern oder an ihn senden können, beispielsweise die Sprachdateien de.json
    // und en.json für die Übersetzung.

    // provideTranslateService() stellt den Übersetzungsdienst global für die gesamte
    // Angular-Anwendung bereit und legt fest, wie die Übersetzung funktionieren soll.
    provideTranslateService({
      // lang: 'de' → Legt Deutsch als Anfangssprache fest.
      lang: 'de',
      // fallbackLang: 'en' → Verwendet Englisch als Ersatzsprache, wenn eine
      // deutsche Übersetzung fehlt.
      fallbackLang: 'en',

      // loader → Bestimmt, wie die Sprachdateien geladen werden.
      // provideTranslateHttpLoader() → Lädt die Sprachdateien über HTTP vom Webserver.
      // Der Loader holt die Sprachdatei vom Webserver und liefert ihre Übersetzungsdaten an den TranslateService
      loader: provideTranslateHttpLoader({
        // prefix: '/i18n/' → Gibt den Ordnerpfad der Sprachdateien an.
        prefix: '/i18n/',
        // suffix: '.json' → Gibt die Dateiendung an.
        suffix: '.json',
      }),
    }),
  ],
};

// Die app.config.ts ist die zentrale Konfigurationsdatei von
// Angular, in der Dienste und Einstellungen global bereitgestellt
// werden, sodass andere Komponenten der Anwendung diese Dienste
// verwenden können, ohne direkt auf die Konfigurationsdatei
// zugreifen zu müssen.
// Darin legst du zentral fest, welche Dienste Angular
// bereitstellt, beispielsweise für Navigation, HTTP-Anfragen und
// Übersetzungen.
