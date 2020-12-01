import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lazy-loading';
  private totalNavList = [
    {name: 'Inventory', path: '/inventory', role: 'in'},
    {name: 'Secure Config', path: '/secureConfig', role: 'sc'},
    {name: 'Model Admin', path: '/modelAdmin', role: 'ma'},
    {name: 'Server Admin', path: '/serverAdmin', role: 'sa'},
  ];
  public nav = [];

  constructor(private appService: AppService, private route: Router) {
  }

  ngOnInit(): void {
    // const userRole = sessionStorage.getItem('userRole');
    // JSON.parse(userRole);

    this.appService.getUpdatedRole()
      .subscribe(userRoles => {
        const roles = userRoles.split(',');
        this.nav = this.totalNavList.filter(nav => {
          const isFound = roles.find(role => {
            return role === nav.role  || role === 'uiadmin';
          });
          return isFound;
        });

        if (this.nav.length > 0) {
          this.route.navigate([this.nav[0].path]);
        }

      });
  }

  get isLogin() {
    return this.route.url !== '/login';
  }
}
