import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { CommonService } from './services/common.service';
import { RestService } from './services/rest.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CommonService, RestService],
  declarations: [ModalComponent, LoaderComponent],
  exports: [
    CommonModule,
    ModalComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
