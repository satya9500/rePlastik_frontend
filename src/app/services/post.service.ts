import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
  }

  analyzeImage(data: any): any {
    const headers = {
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYzkzOWRiOTc3OThiZTk1N2NmYzYzMyIsImlhdCI6MTYwODYzNDgxOCwiZXhwIjoxNjA5MjM5NjE4fQ.vFtK-TUPZY2j-5rjUGUnE0bxAdTxoCnQwlqWR6SPLbw'   };
    return this.http.post('/api/v1/work/perform', data, {headers});
  }
}
