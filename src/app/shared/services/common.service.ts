import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommonService {

	public showModal$: EventEmitter<Object>;
	private loaderSubject = new Subject<any>();

	loaderState = this.loaderSubject.asObservable();

    constructor() {
        this.showModal$ = new EventEmitter();
    }

    showModal(opts: Object): void {
        this.showModal$.emit(opts);
    }

	showLoader() {
		this.loaderSubject.next(<any>{ show: true });
	}

	hideLoader() {
		this.loaderSubject.next(<any>{ show: false });
	}

	deepCopy(copy, data) {
		if (typeof data.length !== 'undefined') {
			copy = [];
			
			data.forEach((x) => {
				copy.push(Object.assign({}, x));
			});
		} else {
			copy = Object.assign({}, data);
		}
	}
}
