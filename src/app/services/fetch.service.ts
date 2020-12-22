import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  public apiKey = '628eef09c86c49b2ace92394c5e32f15';
  public query = 'plastic';

  constructor(private http: HttpClient) {
  }

  getNews(): any {
    return this.http.get(`https://newsapi.org/v2/everything?q=${this.query}&apiKey=${this.apiKey}`);
  }
}
