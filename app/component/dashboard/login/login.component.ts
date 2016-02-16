import {Component} from "angular2/core";
import {NgForm}    from 'angular2/common';
import {Router}    from 'angular2/router';
import {SecurityService} from "../../../service/security.service";
import {Credential} from "../../../model/credential";


@Component({
    selector: 'login',
    templateUrl: 'app/component/dashboard/login/login.component.html',
})

export class LoginComponent {

    public securityService: SecurityService;

    private _router : Router;

    constructor(
        securityService: SecurityService,
        router: Router
    ) {
        this.securityService = securityService;
        this._router = router;
    }

    credential = new Credential('', '');

    onSubmit() {
        console.log('onSubmit');
        let link = ['Welcome'];
        this._router.navigate(link);
    }

}