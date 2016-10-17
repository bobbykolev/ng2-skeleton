import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CommonService {
	public showModal$: EventEmitter<Object>;

    constructor() {
        this.showModal$ = new EventEmitter();
    }

    public show(opts: Object): void {
        this.showModal$.emit(opts);
    }
}
