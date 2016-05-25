import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {ConsumerComplaint} from './consumer_complaints/consumer_complaint'
import {ComplaintService} from './consumer_complaints/complaint_service'
import {Http, HTTP_PROVIDERS} from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
    <h1>My First Test App using PrimeNG DataTable from Angular 2 QuickStart</h1>
    <input type="text" pInputText/>
    <button (click)='getComplaints()'>Launch</button>
    <p-dataTable [value]="complaints">
    <p-column field="dataTypeName" header="Product"></p-column>
    <p-column field="description" header="Issue"></p-column>
    <p-column field="fieldName" header="Company"></p-column>
    <p-column field="name" header="Zipcode"></p-column>
    </p-dataTable>
    `,
    directives: [InputText,DataTable,Column],
    providers: [ComplaintService, HTTP_PROVIDERS]
})
export class AppComponent {  

    complaints: ConsumerComplaint[];

    constructor(private complaintService: ComplaintService) { }
    
    getComplaints() {
        this.complaintService.getComplaints().subscribe(complaints => this.complaints = complaints);
    }
    
}
