import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { CommonService } from './services/common.service';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [CommonService],
  declarations: [ModalComponent, LoaderComponent],
  exports: [
    CommonModule,
    ModalComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
