import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  userData: any = [
    {password:"123456",email:"123@gmail.com",name:"hadasa",role:"teacher"},
    {password:"222222",email:"111@gmail.com",name:"racheli",role:"secretary"},
    {password:"4444",email:"555@gmail.com",name:"aaa",role:"secretary"},
    {password:"666",email:"888@gmail.com",name:"bbb",role:"teacher"},
  ];

  constructor() { }
  getUserData() {
    return this.userData;
  }
  getUserByEmail(email: string) {
    return this.userData.find((user: any) => user.email === email);
  }
}
