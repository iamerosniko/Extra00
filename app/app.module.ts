import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';

@NgModule({
    imports: [BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}