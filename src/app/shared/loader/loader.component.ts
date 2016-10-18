import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  private loaderStateChanged: Subscription;
  public visible: boolean;

  constructor(private commonService: CommonService) { 

  }

  ngOnInit() {
    this.visible = false;

  	this.loaderStateChanged = this.commonService.loaderState
      .subscribe((state: any) => {
        this.visible = state.show;
    });	
  }

  ngOnDestroy() {
    this.loaderStateChanged.unsubscribe();
  }

}
