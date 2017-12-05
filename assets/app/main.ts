import './pollyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from './app.module';
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
