import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  
  title: string;
  menuId: string;
  btnId: string;
  menu: any;
  btn: any;

  constructor(private commonService: CommonService) {

  }

  ngOnInit() {
  	this.title = 'ng2 skeleton';
  	this.menuId = 'main-menu';
    this.btnId = 'nav-ani-icon';
    this.menu = '';
    this.btn = '';
  }

  ngAfterViewInit () {
    this.menu = document.getElementById(this.menuId);
    this.btn = document.getElementById(this.btnId);

    window.addEventListener('resize', this.onResize.bind(this));
    this.menu.addEventListener('click', this.handleMenuClick.bind(this));

    this.onResize();
  }

  ngOnDestroy () {
    window.removeEventListener('resize', this.onResize.bind(this));
    this.menu.removeEventListener('click', this.handleMenuClick.bind(this));
  }

  showModal (e) {
    e && e.preventDefault();
    this.commonService.showModal({title: 'Confirm', rows: ['<strong>Change title?</strong>'], ok: this.modalResult.bind(this), cancel: this.modalResult.bind(this)});
  }

  modalResult(success) {
	this.title = success ? 'Ok' : 'ng2 skeleton';
  }

  toggleClasses (toggle) {
    if (toggle) {
      this.menu.classList.toggle('collapse');
      this.btn.classList.toggle('open');
    } else {
      this.menu.classList.add('collapse');
      this.btn.classList.remove('open');
    }
  }

  toggleMenu (e){
    e && e.preventDefault();

    this.toggleClasses(true);
  }

  menuItemClick (e, title) {
    //e && e.preventDefault();

    this.toggleClasses(false);
  }

  handleMenuClick (e) {
    if (e && e.target && e.target.id == this.menuId) {
      this.toggleClasses(false);
    }
  }

  onResize () {
    let height = window.innerHeight || 0,
        width = window.innerWidth || 0,
        element = <HTMLElement>document.querySelectorAll('#main-menu>ul')[0];

    //set doc height on toggle menu for small res
    element.style.height = height && width < 768 ? (height-1) + 'px' : 'inherit';
  }

}
