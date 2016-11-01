import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { CommonService } from './shared/services/common.service';
import './rxjs-operators';
import './polyfills';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('pageTransition', [
      state('enter', style({ opacity: 1 })),
      state('leave', style({ opacity: 0 })),

      transition('leave => enter', [
        animate('0.2s ease-in')
      ])
    ])
  ]
})

export class AppComponent {
  title: String = 'ng2 Skeleton';
  pageTransition: boolean = true;

  constructor (private router: Router, private commonService: CommonService) {
  	this.router.events.subscribe(this.handleRouteChange.bind(this));
  }

  handleRouteChange (val) {
  	let that = this;

    //only interested in NavigationStart event
   	if(val && val instanceof NavigationStart) {
       if (this.router.url !== val.url || (this.router.url === '/' && val.url === '/home')) {

         //show loader on every route startChange, comment if you don't want to show/hide it for every page
         //this.commonService.showLoader();

         //animation related
         that.pageTransition = false;
         setTimeout(function(){
           that.pageTransition = true;
         }, 100)
       }
    }
  }
}
