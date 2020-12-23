import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // tslint:disable-next-line:variable-name
  public login_token: any = JSON.parse(localStorage.getItem('auth_app_token') as string);
  public headers = {
    Authorization: `Bearer ${this.login_token.value}`
  };
  constructor(private http: HttpClient) {
  }

  analyzeImage(data: any): any {
    return this.http.post('/api/v1/work/perform', data, {headers: this.headers});
  }
}
