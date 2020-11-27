import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { EventEmitter } from 'events';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   Users: any = []  

  constructor(private userService: UserService) { }

  ngOnInit() {
    setInterval(()=>{
      this.readUser()
    },200)
  }

  onDelete(id){
    this.userService.deleteUser(id).subscribe()
    this.readUser()
  }
  
  readUser(){
    this.userService.getUser().subscribe(data => {
      this.Users = data
      console.log(this.Users)
    })
  }

}
