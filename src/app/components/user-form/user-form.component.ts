import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../interfaces/user';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent implements OnInit {
  user: User = {
    fullname:'',
    age: 0,
    email: '',
    password: ''
  };

  edit: boolean = false;

  constructor(
    private userSevice: UserService,
    private router : Router
    ){}

  ngOnInit(){
  }
  submitUser(){
    this.userSevice.signup(this.user)
    .subscribe(
      res =>  {
        console.log(res)
        this.router.navigate(['/'])
      },
      err => console.log(err)
    )
  }
}
