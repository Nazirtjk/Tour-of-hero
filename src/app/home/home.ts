/**
 * Created by Admin on 21.06.2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './home.html',
    styles: [`.invisible{display:none}`]
})
export class HomeComponent {
    visibility: boolean = true;
    toggle(){
        this.visibility=!this.visibility;
    }
    condition: boolean = true;
    toggle1(){
        this.condition=!this.condition;
    }
}
