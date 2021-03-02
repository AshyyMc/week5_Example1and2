import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './result/result.component';
import { GetNumbersComponent } from './get-numbers/get-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    GetNumbersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
