import { Component, OnInit } from '@angular/core';
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
  errorMessage: String;
  imagesObservable: Observable<any>;
  dataLimit: Number;

  constructor(private restService: RestService, private commonService: CommonService) {

  }

  ngOnInit() {
  	this.dataLimit = 40;

  	this.imagesObservable = this.restService.send('GET', {url: 'photos'})
  								.subscribe(
  									this.onDataSuccess.bind(this),
		                       		this.onDataError.bind(this));
  }

  onDataSuccess (data) {
  	this.commonService.deepCopy(this.dataAll, data);

  	this.images = data.slice(0, this.dataLimit);
  	this.commonService.deepCopy(this.dataAll, data);
  	this.commonService.hideLoader();
  }

  onDataError (error) {
  	this.errorMessage = <any>error;
  	this.commonService.showModal({title: 'Error', hasOk: false, rows: [this.errorMessage]});
  	this.commonService.hideLoader();
  }

}

