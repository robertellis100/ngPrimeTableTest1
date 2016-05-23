import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';


@Component({
    selector: 'my-app',
    template: `
    <h1>My First App using PrimeNG QuickStart and Angular 2 QuickStart</h1>
    <input type="text" pInputText/>
    `,
    directives: [InputText]
})
export class AppComponent { }
