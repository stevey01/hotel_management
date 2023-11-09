import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  payments: Payment[] = [];
  constructor(private paymentService: PaymentService,private router:Router) { }

  ngOnInit(): void {
    this.getPayment();
  }

  private getPayment(){
    this.paymentService.getPaymentList().subscribe((data: Payment[]) => {
      this.payments = data;
    });
  }

  updatePayment(id: number){
    this.router.navigate(['update-payment', id]);
  }

  deletePayment(id: number){
    this.paymentService.deletePayment(id).subscribe( (data: any) => {
      console.log(data);
      this.getPayment();
    })
}
}
