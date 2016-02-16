import { Component } from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {LoginComponent} from "../dashboard/login/login.component";
import {WelcomeComponent} from "../dashboard/welcome/welcome.component";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {ROUTER_PROVIDERS} from "angular2/router";

@Component({
    selector: 'dataglow',
    templateUrl : 'app/component/app/app.component.html',
    directives: [DashboardComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {path: 'welcome', name: 'Welcome', component: WelcomeComponent},
    {path: 'login', name: 'Login', component: LoginComponent}
])
export class AppComponent {


}