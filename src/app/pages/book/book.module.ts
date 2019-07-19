import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookComponent} from './book.component';
import {BookRoutingModule} from './book.routing.module';
import {NbSidebarModule} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    BookRoutingModule,
    NbSidebarModule
  ],
  declarations: [BookComponent]
})
export class BookModule { }
