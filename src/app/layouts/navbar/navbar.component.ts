import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  collapsed = false;
  constructor(private _router: Router) {}

  inicio() {
    this._router.navigateByUrl('/map');
    this.collapsed = true;
    setTimeout(() => {
      this.collapsed = false;
    }, 0);
  }

  // licitaciones() {
  //     window.open('https://con.ocmjerez.org/', '_blank');
  //     this.collapsed = true;
  //     setTimeout(() => {
  //         this.collapsed = false;
  //     }, 0);
  // }
}
