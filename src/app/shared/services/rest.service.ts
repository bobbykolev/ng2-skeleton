import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class RestService {
  
  url: String;

  constructor(private http: Http) {
  	this.url = environment.restUrl;
  }

  send (type: String, options: Object): Observable<any> {
  	let headers, opts;

  	if (options.headers) {
  		headers = new Headers(options.headers);
  		opts = new RequestOptions({ headers: headers });
  	} else {
  		headers = new Headers({'Content-type':'application/json'});
  		opts = new RequestOptions({ headers: headers });
  	}

  	switch (type) {
		case 'POST':
			return this.http.post(this.url + options.url, options.data, opts)
                    .map(this.extractData)
                    .catch(this.handleError);
		case 'GET':
		default:
			return this.http.get(this.url + options.url, opts)
                    .map(this.extractData)
                    .catch(this.handleError);
  	}
  }

  private extractData(res: Response) {
	  let body = res.json();

	  return body || { };
  }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead

    return Observable.throw(errMsg);
  }

}
