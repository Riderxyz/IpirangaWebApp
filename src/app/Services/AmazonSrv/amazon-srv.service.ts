import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AmazonSrvService {

  constructor(private http: Http) { }

  private urlLoginService = 'https://or9jz65n7i.execute-api.us-east-1.amazonaws.com/DEV/v1/cmsservices';
  private x_api_key = 'U4exZaLqkX8vQatRYqRxk5r3dHKtYtm82EG5b5uN'



  private getHeader() {

    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', this.x_api_key);
    headers.append('x-amz-date', 'Wednesday, October 11, 2017');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }


  VerificarLogin(data: any) {
    //default
    /*
    data: {
    'username': username,
    'password': password,
    'appVersion': '1.2.2',
    'osType': 'IOS',
    'registrationId': "",
    'params': {
        'header': {
        'x-application': '3'
        }
    }
    */
    return this.http.post(this.urlLoginService, data, this.getHeader())
  }

}




/* private extractData(res: Response) {
  const body = res.json();
  return body || {};
}
private handleError(error: any): Promise<any> {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

buscaMaps(term: string, filter?: string) {
  const url = this.url_default + 'mapsservices/findaddress';
  const body = JSON.stringify(
      {
          term: term
      }
  );
  return this.http.post(url, body, this.getHeaderMaps())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
} */
