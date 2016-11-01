import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
	id: number;

	constructor(private router: Router, private route: ActivatedRoute, private commonService: CommonService) { }

	ngOnInit() {
		this.commonService.hideLoader();

		let taht = this;

	  	this.route.params.forEach((params: Params) => {
	  		this.id = parseInt(params['id']);
	  		if (isNaN(this.id)) {
	  			this.router.navigate(['/home']);
	  			return;
	  		}

	     //todo: use service call here
	   });
	}

}
