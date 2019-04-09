import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FilterPipe } from './filter.pipe';
import { AutocompleteModule } from './autocomplete/autocomplete.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    OverlayModule,
    BrowserAnimationsModule,
    AutocompleteModule,
  ],
  declarations: [AppComponent, FilterPipe],
  bootstrap: [AppComponent],
  entryComponents:[AutocompleteComponent]
})
export class AppModule { }
