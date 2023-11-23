import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'

/**
 * platformBrowserDynamic().bootstrapModule(AppModule): creates a platform instance and then bootstraps the AppModule on this platform.
 * Bootstrapping(in Angular) is the process of initializing and launching the application.
 * The bootstrapModule method uses dynamic compilation, allowing Angular to compile the application in the browser at runtime
 */
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err))
