import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICompanyValues } from './interfaces/company-values.interfaces';

@Component({
  selector: 'app-company-values',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './company-values.component.html',
  styleUrl: './company-values.component.scss'
})
export class CompanyValuesComponent {
  public companyValues: Array<ICompanyValues> = [
    { icon: 'person', title: 'Colaboração', description: 'Trabalhamos junto com nossos clientes' },
    { icon: 'target', title: 'Foco em Resultados', description: 'Orientados por métricas e objetivos' },
    { icon: 'medal', title: 'Excelência', description: 'Padrão de qualidade excepcional' }
  ]
}
