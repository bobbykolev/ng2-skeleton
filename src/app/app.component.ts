import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationStart, NavigationEnd } from '@angular/router';
import { CommonService } from './shared/services/common.service';
import './rxjs-operators';
import './polyfills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng2 Skeleton';

  constructor (private router: Router, private commonService: CommonService) {
  	this.router.events.subscribe(this.handleRouteChange.bind(this));
  }

  handleRouteChange (val) {
  	let that = this;

 	if(val && val instanceof NavigationStart) {
 		  //this.commonService.showLoader();
    }
  }
}
