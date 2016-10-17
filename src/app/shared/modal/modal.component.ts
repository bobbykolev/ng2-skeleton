import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  defaults: Object;
  options: Object;
  visible: boolean;
  cs: any;

  constructor(commonService: CommonService) {
  	this.cs = commonService;
  	commonService.showModal$.subscribe(opts => this.show(opts));
  }

  ngOnInit() {
  	let that = this;

  	this.visible = false;

  	this.defaults = {
  		title: 'Warrning',
        rows: ['<div>Test</div>'],
        isConfirm: true,
        hasOk: true, 
        ok: null,
        cancel: null
  	};

  	this.options = this.defaults;

  	/*setTimeout(function(){
  		that.show({title: 'Wow', rows: ['<strong>data 1</strong>', '<strong>data 2</strong>']});
  	},5000);*/
  }

  show (options) {
  	Object.assign(this.options, this.defaults, options);
  	this.visible = true;
  }

  cancel (e) {
  	e && e.preventDefault();
  	this.visible = false;
  	this.options.cancel && this.options.cancel(false);
  }

  ok (e) {
  	e && e.preventDefault();
  	e && e.stopPropagation();
  	this.visible = false;
  	this.options.ok && this.options.ok(true);
  }
}