import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-revisions',
  styleUrl: './revisions.component.scss',
  templateUrl: './revisions.component.html',
  standalone: true,
})
export class RevisionsComponent {
  protected revisions = [
    {
      version: 'Versão 1',
      date: '11/05/2026',
      comment: '"Adicionar atividade prática na quinta-feira."',
    },
    {
      version: 'Versão 2',
      date: '12/05/2026',
      comment: '"Edita atividade prática na quinta-feira."',
    },
    {
      version: 'Versão atual',
      date: '12/05/2026',
      comment: '"Aguardando aplicação das correções solicitadas."',
    },
  ];
}
