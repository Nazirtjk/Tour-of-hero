import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
    templateUrl: './app.component.html',
     styleUrls: ['./app.component.css'],
    // template: `
    //     <button (click)="toggle()">toggle</button>
    //     <div [ngClass]="{invisible: visibility}">
    //     <h1> Hello Angular 2</h1>
    //     <p>
    //         Angular 2 представляет модульную архитектуру приложения
    //     </p>
    // </div>
    // `,
     styles: [`.invisible{display:none}`]
})
export class AppComponent {
  title = 'app works!';
  name = '';

}
