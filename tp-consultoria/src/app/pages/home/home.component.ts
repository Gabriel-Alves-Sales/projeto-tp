import { Component } from '@angular/core';
import { HomeImports } from './imports/home.imports';

@Component({
  selector: 'app-home',
  imports: HomeImports,
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
