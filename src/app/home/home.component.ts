import { Component, OnInit, OnDestroy } from '@angular/core';
import { RestService } from '../shared/services/rest.service';
import { CommonService } from '../shared/services/common.service';
import { Observable }     from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataAll: Object[];
  images: Object[];
  observeData: Observable<Object[]>;
  errorMessage: String;
  dataLimit: Number;

  constructor(private restService: RestService, private commonService: CommonService) {

  }

  ngOnInit() {
    this.commonService.showLoader();
  	this.dataLimit = 40;
    
    this.getData();
  }

  getData () {
    this.observeData = this.restService.send('GET', {url: 'photos'});
    this.observeData.subscribe(
                    this.onDataSuccess.bind(this),
                    this.onDataError.bind(this));
  }

  onDataSuccess (data) {
  	this.dataAll = this.commonService.deepCopy(data);
    this.images = data.slice(0, this.dataLimit);
    this.commonService.hideLoader();
  }

  onDataError (error) {
  	this.errorMessage = <any>error;
  	this.commonService.showModal({title: 'Error', hasOk: false, rows: [this.errorMessage]});
  	this.commonService.hideLoader();
  }

  formatSrc (src) {
    let s = src.split('/');
    s.pop();

    return s.join('/') + '/1976D2';
  }

}

