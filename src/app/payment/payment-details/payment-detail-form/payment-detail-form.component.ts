import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from '../../payment-detail.model';

@Component({
  selector: 'app-payment-detail-form',
  templateUrl: './payment-detail-form.component.html',
  styleUrls: ['./payment-detail-form.component.scss']
})
export class PaymentDetailFormComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
    this.service.refreshPaymentDetail();
  }

  resetForm(form:NgForm){
    form.form.reset();
    this.service.formData=new PaymentDetail();
  }
  onSubmit(form:NgForm){
    if(this.service.formData.paymentDetailId==0){
    this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }
  insertRecord(form:NgForm){
    console.log(form);
    this.service.postPaymentDetail().subscribe(
      (res)=>{
        console.log(res);
        this.resetForm(form);
        this.service.refreshPaymentDetail();
      },
      (err)=>{
        console.log(err);
      }
    )
  }
  updateRecord(form:NgForm){
    console.log(form);
    this.service.putPaymentDetail().subscribe(
      (res)=>{
          this.resetForm(form)
          this.service.refreshPaymentDetail();
      },
      (err)=>{
          console.log(err);
      }
    )
  }
}
