import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, OnDestroy {
  defaults: Object;
  options: Object;
  visible: boolean;
  modalChange: any;

  constructor(private commonService: CommonService) {

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

    this.modalChange = this.commonService.showModal$.subscribe(opts => this.show(opts));
  }

  ngOnDestroy() {
    this.modalChange.unsubscribe();
  }

  show (options) {
  	this.options = Object.assign({}, this.defaults, options);
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