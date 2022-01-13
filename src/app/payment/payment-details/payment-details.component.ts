import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from '../payment-detail.model';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss']
})
export class PaymentDetailsComponent implements OnInit {

  constructor(public service:PaymentDetailService) { }

  ngOnInit(): void {
  }
  onDelete(id:number){
    this.service.deletePaymentDetail(id).subscribe(
      (res)=>{
        this.service.refreshPaymentDetail();
      },
      (err)=>{console.log(err)}
      )
  }
  populateForm(selectedRow:PaymentDetail){
      this.service.formData=Object.assign({},selectedRow);
  }

}
