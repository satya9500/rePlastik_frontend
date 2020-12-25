import {Component, OnInit} from '@angular/core';
import {FetchService} from '../services/fetch.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private fetchService: FetchService) {
  }
  history: any;

  ngOnInit(): void {
    this.fetchService.getHistory().subscribe((res: any) => {

      this.history = res.userHistory;
      console.log(this.history);
    });
  }

}
