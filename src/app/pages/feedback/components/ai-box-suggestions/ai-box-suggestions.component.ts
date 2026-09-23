import { Component, ElementRef, inject, Input, Renderer2, signal, ViewChild } from '@angular/core';
import { Suggestion } from '../../models/Suggestion';

@Component({
  selector: 'app-ai-box-suggestions',
  standalone: true,
  imports: [],
  templateUrl: './ai-box-suggestions.component.html',
  styleUrl: './ai-box-suggestions.component.scss',
})
export class AiBoxSuggestionsComponent {
  @ViewChild('toastContainer') toastElement!: ElementRef;

  @Input() public suggestions: Suggestion[] = [];

  private renderer = inject(Renderer2);

  public isLoading = signal(false);
  public isGenerated = signal(false);
  generateSuggestions() {
    this.isLoading.set(true);
    this.isGenerated.set(false);

    setTimeout(() => {
      this.isLoading.set(false);
      this.isGenerated.set(true);
      this.showToast('Sugestões pedagógicas geradas com sucesso!', 'info', 'ti-sparkles');
    }, 10000);
  }

  showToast(message: string, type: string, icon: string) {
    if (!this.toastElement) return;

    const container = this.toastElement.nativeElement;
    const toast = this.renderer.createElement('div');
    toast.className = `toast-message toast-${type}`;
    toast.innerHTML = `<i class="ti ${icon}"></i> ${message}`;

    this.renderer.appendChild(container, toast);

    setTimeout(() => toast.remove(), 3000);
  }
}
