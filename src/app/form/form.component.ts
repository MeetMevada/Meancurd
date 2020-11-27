import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { UserService } from '../user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(),
      mobile: new FormControl(),
      email: new FormControl(),
      dob: new FormControl()
    });
  } 

  onSubmit(){
    console.log(this.form.value)
    const newUser ={
      name: this.form.value.name,
      mobile: this.form.value.mobile,
      email: this.form.value.email,
      dob: this.form.value.dob
    }
    this.userService.addUser(newUser).subscribe()
    
  }

}
