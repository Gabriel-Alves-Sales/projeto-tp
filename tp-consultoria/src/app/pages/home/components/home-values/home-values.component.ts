import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IHomeValues } from './interfaces/home-values.interface';

@Component({
  selector: 'app-home-values',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home-values.component.html',
  styleUrl: './home-values.component.scss'
})
export class HomeValuesComponent {
  public numbers: Array<IHomeValues> = [
    { number: '200+', description: 'Projetos Concluídos' },
    { number: '50+', description: 'Clientes Satisfeitos' },
    { number: '98%', description: 'Taxa de Sucesso' }
  ]
}
