import { Component,OnInit} from '@angular/core';
import { FormsModule, FormGroup,FormControl, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-http-client',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './http-client.html',
  styleUrl: './http-client.css'
})

export class MyHttpClient implements OnInit {

  users:User[] = []
  constructor(private http:HttpClient) {
  }
  // reactive form
  userForm = new FormGroup({
    name:new FormControl(''),
    email:new FormControl('')
  });

  ngOnInit(): void {
    this.getUsers().subscribe((res) => {
      console.log("response :",res);
      this.users = res;
    })
  }

  getUsers(){
   return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  onSubmit(){
    this.addUser().subscribe((res) => {
      console.log("response :",res);
      this.users.push(res);
    })
  }

  addUser(){
     return this.http.post<User>("https://jsonplaceholder.typicode.com/users",{
      name:this.userForm.controls.name.value,
      email:this.userForm.controls.email.value
     })
  }
}

// custom type for the response.
class User{
  name!:string;
  email!:string;
}