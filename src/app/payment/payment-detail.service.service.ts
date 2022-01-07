import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PaymentDetail } from './payment-detail.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  paymentList:PaymentDetail[]=[];
  readonly baseUrl='';

  constructor(private http:HttpClient) {

  }
  postPaymentDetail(){

  }
  putPaymentDetail(){

  }
  deletePaymentDetail(){

  }
  refreshListPaymentDetail(){}
}
