export class User {
   /*
    userId:number;
    username:string;
    email:string;
    password:string;
   
    firstName:string;
    lastName:string;
    role:string;
    enabled:boolean;
    authorities:string [];
   
    constructor(
     userId:number,
     username:string,
     email:string,
     password:string,
    
     firstName:string,
    lastName:string,
    role:string,
    enabled:boolean,
    authorities:string []
    ){
        this.userId = userId;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.role = role;
        this.enabled = enabled;
        this.authorities = authorities;
    }
    */
   id!: Number;
   email!: string;
   password!: string;
   token!: string;
   fullname!: string;
   enabled!: boolean;
   roles!: string[];




  
}