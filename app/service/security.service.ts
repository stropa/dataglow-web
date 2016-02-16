import {Injectable} from 'angular2/core';
import {Logger} from "./logger.service";

@Injectable()
export class SecurityService {

    constructor(private _logger: Logger) { }

    private _authenticated: Boolean;

    isAuthenticated() {
        return this._authenticated;
    }

    login(login: String, password: String) {
        // TODO
        console.log('login');
        this._authenticated = true;
    }

    logout() {
        console.log('logout');
        this._authenticated = false;
    }

}