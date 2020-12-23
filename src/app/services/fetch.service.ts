import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public apiKey = '628eef09c86c49b2ace92394c5e32f15';
  public query = 'plastic';
  // tslint:disable-next-line:variable-name
  public login_token: any = JSON.parse(localStorage.getItem('auth_app_token') as string);
  public headers = {
    Authorization: `Bearer ${this.login_token.value}`
  };

  constructor(private http: HttpClient) {
  }

  getNews(): any {
    return this.http.get(`https://newsapi.org/v2/everything?q=${this.query}&apiKey=${this.apiKey}`);
  }

  getHistory(): any {
    console.log(this.login_token);
    return this.http.get(`/api/v1/work/history`, {headers: this.headers});
  }

}
