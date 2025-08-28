import { Component } from '@angular/core';
import { AboutImports } from '../../imports/about.imports';
import { IBenefits } from '../../../../shared/components/benefits/interfaces/benefits.interfaces';

@Component({
  selector: 'app-about',
  imports: AboutImports,
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public benefitsList: Array<IBenefits> = [
    { icon: 'checkmark', text: 'Expertise em transformação digital e inovação' },
    { icon: 'checkmark', text: 'Abordagem personalizada para cada cliente' },
    { icon: 'checkmark', text: 'Resultados mensuráveis e sustentáveis' }
  ]
}
