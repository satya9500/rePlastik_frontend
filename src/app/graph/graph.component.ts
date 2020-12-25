import {Component, OnInit, ViewChild} from '@angular/core';
import {FetchService} from '../services/fetch.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})

export class GraphComponent implements OnInit {
  constructor(private fetchService: FetchService) {
  }
  public graph = {
    data: [
      { x: ['PVC', 'LDPE', 'HDPE', 'PETE', 'PP', 'PS'], y: [5, 10, 3, 21, 16, 22], type: 'bar', marker: {color: '#222b45'} },
    ],
    layout: {width: 800, title: 'Plastic Generation Report'}
  };

  ngOnInit(): void {

  }


}
