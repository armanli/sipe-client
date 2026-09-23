import { Component } from '@angular/core';
import { PlanningAndReviewKpisComponent } from '../../shared/components/planning-and-review-kpis/planning-and-review-kpis.component';
import { FlowBannerComponent } from './components/flow-banner/flow-banner.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { RevisionsComponent } from './components/revisions/revisions.component';
import { Plan } from './models/Plan';
import { Suggestion } from './models/Suggestion';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
  standalone: true,
  imports: [
    PlanningAndReviewKpisComponent,
    FlowBannerComponent,
    TimelineComponent,
    RevisionsComponent,
  ],
})
export class FeedbackComponent {
  plans: Plan[] = [
    {
      id: 1,
      title: 'Planejamento Semanal — Matemática',
      status: 'pending',
      aiPrompt:
        'A coordenação solicitou atividade prática e reforço em sistema monetário. Deseja gerar sugestões pedagógicas?',
      aiSuggestions: [
        {
          icon: 'ti-device-gamepad-2',
          text: 'Atividade prática: Simulação de mercado com uso de notas fictícias — exercita operações e sistema monetário de forma lúdica.',
        },
        {
          icon: 'ti-files',
          text: 'Proposta: Exercício em duplas com recorte de preços de supermercado para calcular troco e comparar valores.',
        },
        {
          icon: 'ti-bulb',
          text: 'Sugestão: Criação de um "cardápio de lanchonete" pelos alunos, praticando adição, subtração e representação de valores.',
        },
      ],
      timeline: {
        status: 'done',
        icon: 'ti-circle-plus',
        title: 'Planejamento Criado',
        date: '10/05/2026',
      },
      revisions: [],
    },
    {
      id: 2,
      title: 'Planejamento Semanal — História',
      status: 'approved',
      aiPrompt: null,
      aiSuggestions: [],
      timeline: {
        status: 'upcoming',
        icon: 'ti-pencil',
        title: 'Correções Aplicadas',
        date: '—',
      },
      revisions: [],
    },
    {
      id: 3,
      title: 'Planejamento Bimestral — Artes',
      status: 'rejected',
      aiPrompt:
        'O planejamento foi rejeitado por desalinhamento com o PPP. Deseja sugestões para reestruturação?',
      aiSuggestions: [
        {
          icon: 'ti-target',
          text: 'Reformular objetivos de aprendizagem com base nas competências específicas do componente Arte (BNCC — EF69AR).',
        },
        {
          icon: 'ti-users',
          text: 'Incluir atividades diferenciadas: alunos em recuperação recebem roteiro simplificado com os mesmos conteúdos em linguagem visual acessível.',
        },
        {
          icon: 'ti-book',
          text: 'Vincular o planejamento ao Projeto Político-Pedagógico: citar eixo temático e competências previstas no documento institucional.',
        },
      ],
      timeline: {
        status: 'done',
        icon: 'ti-send',
        title: 'Enviado para Coordenação',
        date: '11/05/2026',
      },
      revisions: [],
    },
    {
      id: 4,
      title: 'Planejamento Semanal — Geografia',
      status: 'pending',
      aiPrompt:
        'A coordenação solicitou estratégia diferenciada. Deseja gerar sugestões de atividades de recuperação?',
      aiSuggestions: [
        {
          icon: 'ti-map',
          text: 'Proposta diferenciada: Alunos com dificuldade trabalham com mapa mudo interativo — identificam biomas com legendas guiadas.',
        },
        {
          icon: 'ti-video',
          text: 'Usar vídeo-aula curta (5 min) do conteúdo principal como reforço prévio para alunos em recuperação antes da aula coletiva.',
        },
        {
          icon: 'ti-star',
          text: 'Atividade gamificada: Quiz por equipes onde alunos com dificuldade são estrategicamente distribuídos para aprendizagem cooperativa.',
        },
      ],
      timeline: {
        status: 'pending',
        icon: 'ti-clock-edit',
        title: 'Ajustes Solicitados',
        date: '12/05/2026',
      },
      revisions: [],
    },
  ];

  get allSuggestions(): Suggestion[] {
    return this.plans.flatMap((p) => p.aiSuggestions);
  }
}
