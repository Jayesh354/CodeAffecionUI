import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PaymentDetail } from "../payment/payment-detail.model";

@Injectable({
  providedIn:'root'
})
export class PaymentDetailService{

  formData:PaymentDetail=new PaymentDetail();
  readonly baseUrl='http://localhost:18251/api/PaymentDetails';
  list!: PaymentDetail[];

  constructor(private http:HttpClient){

  }
  postPaymentDetail(){
      return this.http.post(this.baseUrl,this.formData);
  }
  putPaymentDetail(){
    return this.http.put(`${this.baseUrl}/${this.formData.paymentDetailId}`,this.formData);
  }
  deletePaymentDetail(id:number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  refreshPaymentDetail(){
    this.http.get(this.baseUrl).toPromise().then((res)=>{
      console.log(res);
      this.list=res as PaymentDetail[]
    });
  }

}
