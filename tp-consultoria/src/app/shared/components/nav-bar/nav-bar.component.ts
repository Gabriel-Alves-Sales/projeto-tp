import { Component } from '@angular/core';
import { NavBarImports } from './imports/nav-bar.imports';

@Component({
  selector: 'app-nav-bar',
  imports: NavBarImports,
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

}
