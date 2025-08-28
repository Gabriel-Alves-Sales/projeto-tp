import { Component, Input } from '@angular/core';
import { BnefitsImports } from './imports/benefits.imports';
import { IBenefits } from './interfaces/benefits.interfaces';

@Component({
  selector: 'app-benefits',
  imports: BnefitsImports,
  templateUrl: './benefits.component.html',
  styleUrl: './benefits.component.scss'
})
export class BenefitsComponent {
  @Input() benefits!: Array<IBenefits>
}
