import {Injectable} from '@angular/core';
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Router } from '@angular/router';
import { environment } from './environment';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {
    http: Http;
    baseUrl: string;

    constructor(
        http: Http,
        private router: Router) {
        this.http = http;
        this.baseUrl = environment.apiUrl;
    }

    private getUrl(route: string): string {
        return `${this.baseUrl}${route}`
    }

    private logError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    handleError(error: any, message: string): void {
        if (error.status === 401 || error.status === 403) {
            //this.toastr.error("Your session has expired, or you don't have access to that resource. Please login again or contact your supervisor for assistance.")
            this.router.navigate(['/login'])
        } else {
            //this.toastr.error(message)
        }
    }

    get(route: string, parms: any): any{
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let url = this.getUrl(route);
        //TODO - create an identityManager to store access token and the logged in user's id
        //if (this.accessToken) {
        //    parms.access_token = this.accessToken;
        //}
        let params = new URLSearchParams();
        for (var key in parms) {
            var value = parms[key];
            params.set(key, value);
        }
        return this.http.get(url, {
            headers: headers,
            search: params
        }).toPromise()
            .then(result => result.json())
            .catch(this.logError)
    }

    post(route: string, data: any): any {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        let url = this.getUrl(route);
        let parms: any = {};
        //TODO - create an identityManager to store access token and the logged in user's id
        //if (this.accessToken) {
        //    parms.access_token = this.accessToken;
        //}

        let params = new URLSearchParams();
        for (var key in parms) {
            var value = parms[key];
            params.set(key, value);
        }
        return this.http.post(url, JSON.stringify(data), {
            headers: headers,
            search: params
        }).toPromise()
            .then(function(result){
                //logout returns a 204, which has no data
                if (result.status != 204) {
                    return result.json()
                } else {
                    return null;
                }
            })
            .catch(this.logError)
    }
}