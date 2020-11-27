import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:4000/user/'
  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get(this.baseUrl)
  }

  addUser(newUser){
    return this.http.post(this.baseUrl + 'adduser', newUser)
  }

  editUser(updateUser){
    return this.http.put(this.baseUrl + "edituser/" + updateUser.id,updateUser )
  }

  deleteUser(id){
    return this.http.delete(this.baseUrl + "deleteuser/" + id)
  }

}
