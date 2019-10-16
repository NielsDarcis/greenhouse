import { Component, OnInit } from "@angular/core";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-user-login",
  templateUrl: "./user-login.component.html",
  styleUrls: ["./user-login.component.scss"]
})
export class UserLoginComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.register('fredvdvd+6@gmail.com', "testtest")
  }
}