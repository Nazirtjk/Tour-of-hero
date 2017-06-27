import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import {Page1Component} from './page1/page1';
import {Page2Component} from './page2/page2';
import {HomeComponent} from  './home/home';
import {AppComponent} from './app.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component}
];

@NgModule({
    declarations: [
        AppComponent,
        Page1Component,
        Page2Component,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {
}
