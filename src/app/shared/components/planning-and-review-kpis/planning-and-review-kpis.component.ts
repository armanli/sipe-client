import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-planning-and-review-kpis',
  styleUrl: './planning-and-review-kpis.component.scss',
  templateUrl: './planning-and-review-kpis.component.html',
  standalone: true
})
export class PlanningAndReviewKpisComponent {
  kpis = {
    approvedPlans: 12,
    plansWaitingAdjustment: 3,
    rejectedPlans: 1,
    approvedReview: 8,
  };
}
