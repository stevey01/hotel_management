import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { PaymentService } from '../payment.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-payment',
  templateUrl: './update-payment.component.html',
  styleUrls: ['./update-payment.component.css']
})
export class UpdatePaymentComponent implements OnInit {
  id!: number;
  payment: Payment = new Payment ();
  constructor(private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.paymentService.getPaymentById(this.id).subscribe((data: any) => {
      this.payment = data;
    }, (error: any) => console.log(error));
  }

  onSubmit(){
    this.paymentService.updatePayment(this.id, this.payment).subscribe( data =>{
     this.goToPaymentList();
    }
    , (error: any) => console.log(error));
    Swal.fire('Payment Not Updated');
    
  }

  goToPaymentList(){
    this.router.navigate(['guests']);
    Swal.fire('Payment Updated');
  }

 
}
