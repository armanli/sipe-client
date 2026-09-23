import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-timeline',
  styleUrl: './timeline.component.scss',
  templateUrl: './timeline.component.html',
  standalone: true,
})
export class TimelineComponent {
  protected timelines = [
    {
      status: 'done',
      icon: 'ti-circle-plus',
      title: 'Planejamento Criado',
      date: '10/05/2026',
    },
    {
      status: 'done',
      icon: 'ti-send',
      title: 'Enviado para Coordenação',
      date: '11/05/2026',
    },
    {
      status: 'pending',
      icon: 'ti-clock-edit',
      title: 'Ajustes Solicitados',
      date: '12/05/2026',
    },
    {
      status: 'upcoming',
      icon: 'ti-pencil',
      title: 'Correções Aplicadas',
      date: '—',
    },
    {
      status: 'upcoming',
      icon: 'ti-circle-check',
      title: 'Aprovação Final',
      date: '—',
    },
  ];
}
