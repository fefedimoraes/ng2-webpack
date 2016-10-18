import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './app.routes';

import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    imports: [BrowserModule, RoutingModule],
    bootstrap: [AppComponent],
    declarations: [AppComponent, HomeComponent, AboutComponent]
})
export class AppModule { }