import { Component } from 'angular2/core';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { SecurityService } from '../../service/security.service';
import { LoginComponent } from './login/login.component';
import {Redirect} from "angular2/router";
import {WelcomeComponent} from "./welcome/welcome.component";
import {Router} from "angular2/router";

@Component({
    selector: 'dashboard',
    templateUrl: 'app/component/dashboard/dashboard.component.html',
    directives: [ ROUTER_DIRECTIVES, LoginComponent, WelcomeComponent ],
    providers: [ ROUTER_PROVIDERS,
        SecurityService]
})

export class DashboardComponent {

    public securityService: SecurityService;
    private _router: Router;

    constructor(
        securityService: SecurityService,
        router: Router
    ) {
        this.securityService = securityService;
        this._router = router;
    }

    logout() {
        this.securityService.logout();
        let link = ['Welcome'];
        this._router.navigate(link);
    }

}