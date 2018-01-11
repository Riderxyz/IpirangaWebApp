import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { log } from 'util';
import { CacheSrvService } from '../CacheSrv/cache-srv.service';


@Injectable()
export class AmazonSrvService {
  data: any
  Crypto:any
  linkRelatorio: string ='https://5t2gsxwp07.execute-api.us-east-1.amazonaws.com/DEV/v1/reportsservices/s3list';

  constructor(private http: Http, public cacheSrv: CacheSrvService) { }

  private urlLoginService = 'https://or9jz65n7i.execute-api.us-east-1.amazonaws.com/DEV/v1/cmsservices/socialmedia-wcm-soapauth-post';
  private x_api_key = 'U4exZaLqkX8vQatRYqRxk5r3dHKtYtm82EG5b5uN';

  listarRelatorio():Observable<any[]>{
    return this.http.get(this.linkRelatorio).map((resp)=> resp.json());
  }

  private getHeader() {
    // tslint:disable-next-line:prefer-const
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', this.x_api_key);
    headers.append('x-amz-date', 'Wednesday, October 11, 2017');
    headers.append('Accept', 'application/json');
    return new RequestOptions({ headers: headers });
  }


  VerificarLogin(username, senha) {
    this.data = {
      "username": username,
      "password": senha,
      "appVersion": "1.2.2",
      "osType": "IOS",
      "registrationId": "",
      "params": { "header": { "x-application": "3" } },
      "context": {
        "stage": "DEV"
      }
    }

    return this.http.post(this.urlLoginService, this.data, this.getHeader())
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  public extractData(res: Response) {
    const body = res.json();
    console.log(body);
    console.log(body.user.Items[0].userType);
    this.Jojo()
    //this.cacheSrv.SetAuth(body.accessToken, body.user.Items[0].userType,body.clientId);
    //this.cacheSrv.getAuth();
    return body || {};
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


Jojo(){
  this.cacheSrv.SetTitulo('this.Credencials.usuario')
}


}





/*
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
