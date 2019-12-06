import { BrowserModule } from '@angular/platform-browser';
import { NgModule, forwardRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BulbulComponent } from './bulbul/bulbul.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SaykatComponent } from './saykat/saykat.component';
import { HarunComponent } from './harun/harun.component';

@NgModule({
  declarations: [
    AppComponent,
    BulbulComponent,
    SaykatComponent,
    HarunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => BulbulComponent),
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
