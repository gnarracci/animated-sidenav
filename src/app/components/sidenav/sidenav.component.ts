import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  collapsed = true;
  navData = navbarData;
  faTimes = faTimes;

}
