import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { BOOK_HIGHLIGHTER_TOKEN } from '../tokens/book-highlighter.token';
import { routes } from './app.routes';
import { DefaultBookHighlighter } from './services/highlighter/default-book-highlighter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    {
      provide: BOOK_HIGHLIGHTER_TOKEN,
      useClass: DefaultBookHighlighter
    }
  ]
};
