import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  constructor(private appService: AppService) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.userName === 'in') {
      this.setUserRole('in');
    }

    if (this.userName === 'ma') {
      this.setUserRole('ma');
    }

    if (this.userName === 'sa') {
      this.setUserRole('sa');
    }

    if (this.userName === 'sc') {
      this.setUserRole('sc');
    }

    if (this.userName === 'scma') {
      this.setUserRole('sc,ma');
    }

    if (this.userName === 'masa') {
      this.setUserRole('ma,sa');
    }

    if (this.userName === 'scsa') {
      this.setUserRole('sc,sa');
    }

    if (this.userName === 'inma') {
      this.setUserRole('in,ma');
    }
    if (this.userName === 'uiadmin') {
      this.setUserRole('uiadmin');
    }

  }

  setUserRole(role) {
    // try {
    //   sessionStorage.removeItem('userRole');
    // } catch (e) {
    //
    // }
    this.appService.updateRole(role);
    // sessionStorage.setItem('userRole', role);
  }
}
