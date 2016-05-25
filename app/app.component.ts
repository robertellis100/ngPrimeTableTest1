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
    <input type="number" pInputText/>
    <button (click)='getComplaints()'>Launch</button>
    <div *ngIf="complaints">
        <p-dataTable [value]="complaints" [rows]="10" [paginator]="true" [rowsPerPageOptions]="[10,50,100]" sortMode="multiple">
            <header>List of Complaints</header>
            <p-column field="name" header="Product" [filter]="true" filterMatchMode="contains" [sortable]="true"></p-column>
            <p-column field="id" header="Issue" [filter]="true" filterMatchMode="contains" [sortable]="true"></p-column>
            <p-column field="fieldName" header="Company" [filter]="true" filterMatchMode="contains" [sortable]="true"></p-column>
            <p-column field="dataTypeName" header="Zipcode" [filter]="true" filterMatchMode="contains" [sortable]="true"></p-column>
        </p-dataTable>
    </div>    
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
