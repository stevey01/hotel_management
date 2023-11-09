import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityComponent } from './security/security.component';
import { HttpClientModule } from '@angular/common/http';
import { GuestListComponent } from './guest-list/guest-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { HomeComponent } from './home/home.component';
import { ReserveListComponent } from './reserve-list/reserve-list.component';
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { UpdateReserveComponent } from './update-reserve/update-reserve.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { StartComponent } from './start/start.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { RoomComponent } from './room/room.component';
import { RoomListComponent } from './room-list/room-list.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ManagerComponent } from './manager/manager.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { SigninComponent } from './signin/signin.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { IssueBillComponent } from './issue-bill/issue-bill.component';
import { PrincipalComponent } from './principal/principal.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { SignupComponent } from './signup/signup.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SearchRoomComponent } from './search-room/search-room.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    SecurityComponent,
    GuestListComponent,
    CreateGuestComponent,
    UpdateGuestComponent,
    HomeComponent,
   
    ReserveListComponent,
       CreateReserveComponent,
       UpdateReserveComponent,
       LoginComponent,
       RegisterComponent,
       StaffListComponent,
       CreateStaffComponent,
       UpdateStaffComponent,
       StartComponent,
       AboutComponent,
       LogoutComponent,
       RoomComponent,
       RoomListComponent,
       ReceptionistComponent,
       ManagerComponent,
       CreateRoomComponent,
       SigninComponent,
       IssueBillComponent,
       PrincipalComponent,
       UpdateRoomComponent,
       PaymentListComponent,
       CreatePaymentComponent,
       UpdatePaymentComponent,
       SignupComponent,
       SearchRoomComponent,
      
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
