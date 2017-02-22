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

	deepCopy(data) {
		let result;

		if (typeof data.length !== 'undefined') {
			result = [];
			
			data.forEach((x) => {
				result.push(Object.assign({}, x));
			});
		} else {
			result = Object.assign({}, data);
		}

		return result;
	}
}
