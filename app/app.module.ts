import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';
import 'hammerjs';
//routing
import { AppRouting } from './app.routing';
@NgModule({
    imports: 
    [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        AppRouting,
    ],
    declarations: 
    [
        AppComponent
    ],
    bootstrap: 
    [
        AppComponent
    ]
})

export class AppModule{}