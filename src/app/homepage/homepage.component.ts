import {Component, OnInit} from '@angular/core';
import {FetchService} from '../services/fetch.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  constructor(private fetchService: FetchService) {
  }

  public news: any;
  ngOnInit(): void {
    this.fetchService.getNews().subscribe((res: any) => {
      this.news = res.articles;
      console.log(this.news);
    });

  }

}
