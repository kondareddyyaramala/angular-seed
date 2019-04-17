import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ApplicationRef } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';

platformBrowserDynamic().bootstrapModule(AppModule).then(moduleRef => {
  const applicationRef = moduleRef.injector.get(ApplicationRef);
  const componentRef = applicationRef.components[0];
  // allows to run `ng.profiler.timeChangeDetection();`

  // Also we can run ng.profiler.timeChangeDetection({ record: true});
  // which actually creates a profile in the browser listing all the
  // comps with the time that took for running the change detection
  enableDebugTools(componentRef);
})
.catch(err => console.log(err));