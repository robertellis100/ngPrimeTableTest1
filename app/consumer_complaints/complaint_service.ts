import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {ConsumerComplaint} from '../../app/consumer_complaints/consumer_complaint';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 

@Injectable()
export class ComplaintService {
  constructor (private http: Http) {}
  private complaintUrl = 'http://data.consumerfinance.gov/api/views/s6ew-h6mp.json';  // URL to web API
  getComplaints (): Observable<ConsumerComplaint[]> {
    return this.http.get(this.complaintUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body.columns); 
    return body.columns || { };
  }
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  
  
}