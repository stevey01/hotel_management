import { Component } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent {

  payment: Payment = new Payment();
  constructor(private paymentService: PaymentService,private router:Router) { }

  ngOnInit(): void {
  }

  savePayment(){
    this.paymentService.createPayment(this.payment).subscribe( data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
    Swal.fire('Payment Not Created');
  }

  goToEmployeeList(){
    Swal.fire('Payment Created');
    this.router.navigate(['/payment']);
  }
  
  onSubmit(){
    console.log(this.payment);
    this.savePayment();
  }
}
