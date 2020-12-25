import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PostService} from '../services/post.service';
import {NbToastrService} from '@nebular/theme';
import { DomSanitizer } from '@angular/platform-browser';
import {FetchService} from '../services/fetch.service';

@Component({
  selector: 'app-recyle-now',
  templateUrl: './recyle-now.component.html',
  styleUrls: ['./recyle-now.component.css']
})
export class RecyleNowComponent implements OnInit {

  constructor(private fetchService: FetchService, private dom: DomSanitizer, private fb: FormBuilder, private post: PostService, private toastrService: NbToastrService) {
  }

  firstForm: any;
  secondForm: any;
  thirdForm: any;
  uploadForm: any;
  loading = false;
  result: any;
  index = 0;
  productName = '';

  imageUrl = '';

  ngOnInit(): void {
    this.firstForm = this.fb.group({
      firstCtrl: [''],
    });

    this.secondForm = this.fb.group({
      secondCtrl: [''],
    });

    this.thirdForm = this.fb.group({
      thirdCtrl: [''],
    });

    this.uploadForm = this.fb.group({
      img: ['']
    });
  }

  onFirstSubmit(): void {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit(): void {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit(): void {
    this.thirdForm.markAsDirty();
  }

  onFileSelect(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('img').setValue(file);
    }
    this.productName = this.firstForm.value.firstCtrl;
  }

  plasticType: any;
  chemicalName: any;
  recycability: any;
  footprint: any;
  production: any;
  degradeTime: any;
  plasticDescription: any;
  hazard: any;
  productNameFromFlask: any;

  analyzePhoto(): void {
    console.log(this.firstForm);
    this.loading = true;
    const formData = new FormData();
    formData.append('img', this.uploadForm.get('img').value);
    formData.append('productName', this.productName);
    this.post.analyzeImage(formData).subscribe((res: any) => {
      this.post.getFlaskData(formData).subscribe((flaskRes: any) => {
        console.log(flaskRes);
        this.plasticType = flaskRes.predictions[0].p_type;
        this.chemicalName = flaskRes.predictions[0].full_name;
        this.recycability = flaskRes.predictions[0].recycability;
        this.footprint = flaskRes.predictions[0].carbon_footprint;
        this.production = flaskRes.predictions[0].globalProduction;
        this.degradeTime = flaskRes.predictions[0].time_to_degrade;
        this.plasticDescription = flaskRes.predictions[0].description;
        this.hazard = flaskRes.predictions[0].hazard;
        this.productNameFromFlask = flaskRes.predictions[0].class;
        this.fetchService.getYtVideos({
          imageUrl: res.imageUrl,
          productName: this.productName,
          plasticType: this.plasticType,
          plasticProduct: this.productNameFromFlask
        }).subscribe((res2: any) => {
          this.result = res2.ytResult.items;
          for (const video of this.result) {
            video.videoUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
            video.videoUrl = this.dom.bypassSecurityTrustResourceUrl(video.videoUrl);
          }
          console.log(this.result);
          this.imageUrl = res.imageUrl;
          this.loading = false;
        });
      });
    }, (err: any) => {
      console.log(err);
      this.toastrService.show('',
        err.error.error,
        {duration: 5000, destroyByClick: true, status: 'danger'});
    });
  }
}
