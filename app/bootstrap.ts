import {bootstrap}      from 'angular2/platform/browser'
import {Logger}         from "./service/logger.service";
import {AppComponent}   from "./component/app/app.component";

bootstrap(AppComponent, [Logger]);