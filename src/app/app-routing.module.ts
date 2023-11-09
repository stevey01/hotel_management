import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { GuestListComponent } from './guest-list/guest-list.component';
import { CreateGuestComponent } from './create-guest/create-guest.component';
import { UpdateGuestComponent } from './update-guest/update-guest.component';
import { HomeComponent } from './home/home.component';
import { ReserveListComponent } from './reserve-list/reserve-list.component';
import { CreateReserveComponent } from './create-reserve/create-reserve.component';
import { UpdateReserveComponent } from './update-reserve/update-reserve.component';
import { StaffListComponent } from './staff-list/staff-list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateStaffComponent } from './create-staff/create-staff.component';
import { UpdateStaffComponent } from './update-staff/update-staff.component';
import { StartComponent } from './start/start.component';

import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';

import { RoomListComponent } from './room-list/room-list.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { ManagerComponent } from './manager/manager.component';
import { SigninComponent } from './signin/signin.component';
import { IssueBillComponent } from './issue-bill/issue-bill.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { CreatePaymentComponent } from './create-payment/create-payment.component';
import { UpdatePaymentComponent } from './update-payment/update-payment.component';
import { SignupComponent } from './signup/signup.component';
import { SearchRoomComponent } from './search-room/search-room.component';


const routes: Routes = [
  {path: 'guests', component: GuestListComponent},
  {path: 'payment', component: PaymentListComponent},
  {path: 'create-payment', component: CreatePaymentComponent},
  {path: 'create-guest', component: CreateGuestComponent},
  {path: 'update-payment/:id', component: UpdatePaymentComponent},
  //{path: '', redirectTo:'guests',pathMatch:'full'},
  {path: '', redirectTo: 'signin', pathMatch: 'full'},
  {path: 'update-guest/:id', component: UpdateGuestComponent},
  {path:'home',component:HomeComponent},
  {path:'reserve',component:ReserveListComponent},
  {path:'addreserve',component:CreateReserveComponent},
  {path: 'update-reserve/:id', component: UpdateReserveComponent},
  {path: 'update-room/:id', component: UpdateRoomComponent},
  {path:'staff',component:StaffListComponent},
  {path: 'create-staff', component: CreateStaffComponent},
  {path: 'update-staff/:id', component: UpdateStaffComponent},
  {path:'login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'open',component:StartComponent},
  {
    path:'about',component:AboutComponent
  },
  
  {path:'logout',component:LogoutComponent},
  
  {path:'room', component:RoomListComponent},
  {path:'create-room',component:CreateRoomComponent},
  {path:'receptionist',component:ReceptionistComponent},
  
    {path:'manager',component:ManagerComponent},
    {path:'search-room',component:SearchRoomComponent},
    {path:'signin',component:SigninComponent},
    {path:'issuebill/:id',component:IssueBillComponent},
    {
      path:"signup",component:SignupComponent
    },
    


    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
