let selectedPlan = null;
let suggestionsGenerated = {};

function selectPlan(id) {
  selectedPlan = id;
  document.querySelectorAll('.planning-card').forEach((c) => c.classList.remove('selected'));
  const card = document.getElementById('plan' + id);
  if (card) card.classList.add('selected');

  const data = planData[id];
  renderTimeline(data.timeline);
  renderRevisions(data.revisions);

  const aiBox = document.getElementById('aiBox');
  if (data.aiPrompt) {
    aiBox.style.display = 'block';
    document.getElementById('aiBoxDesc').textContent = data.aiPrompt;
    const suggestions = document.getElementById('aiSuggestions');
    if (suggestionsGenerated[id]) {
      renderSuggestions(id);
      suggestions.classList.add('visible');
      aiBox.querySelector('button').style.display = 'none';
      document.getElementById('aiLoading').classList.remove('visible');
    } else {
      suggestions.classList.remove('visible');
      suggestions.innerHTML = '';
      aiBox.querySelector('button').style.display = '';
      document.getElementById('aiLoading').classList.remove('visible');
    }
  } else {
    aiBox.style.display = 'none';
  }

  document.getElementById('notifCard').style.display = id === 1 ? 'block' : 'none';
}

function renderSuggestions(id) {
  const container = document.getElementById('aiSuggestions');
  const data = planData[id];
  container.innerHTML = data.aiSuggestions
    .map(
      (s) => `
      <div class="ai-suggestion-item">
        <i class="ti ${s.icon}"></i>
        <span>${s.text}</span>
      </div>
    `,
    )
    .join('');
}

function filterPlans(filter, btn) {
  document.querySelectorAll('.filter-tab').forEach((t) => t.classList.remove('active'));
  btn.classList.add('active');

  const cards = {
    plan1: 'pending',
    plan2: 'approved',
    plan3: 'rejected',
    plan4: 'pending',
  };
  Object.entries(cards).forEach(([id, status]) => {
    const el = document.getElementById(id);
    if (filter === 'all' || filter === status) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}

function applyCorrections(event) {
  event.stopPropagation();
  showToast('Abrindo editor de planejamento...', 'info', 'ti-pencil');
  setTimeout(() => {
    showToast('Planejamento aberto para edição!', 'success', 'ti-circle-check');
  }, 1000);
}

function viewDocument(event) {
  event.stopPropagation();
  showToast('Abrindo documento aprovado...', 'success', 'ti-eye');
}

function resendPlan(event) {
  event.stopPropagation();
  showToast('Preparando reenvio do planejamento...', 'warning', 'ti-refresh');
  setTimeout(() => {
    showToast('Planejamento reenviado à coordenação!', 'success', 'ti-send');
  }, 1200);
}

function toggleNotifPanel() {
  const notifCard = document.getElementById('notifCard');
  const visible = notifCard.style.display === 'block';
  notifCard.style.display = visible ? 'none' : 'block';
  document.getElementById('notifBadge').textContent = '0';
  if (!visible) {
    selectPlan(1);
    setTimeout(() => {
      notifCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
  }
}

function openCoordModal() {
  document.getElementById('coordModal').classList.add('open');
}

function closeCoordModal() {
  document.getElementById('coordModal').classList.remove('open');
}

document.getElementById('coordModal').addEventListener('click', function (e) {
  if (e.target === this) closeCoordModal();
});

function coordAction(btn, action) {
  const item = btn.closest('.coordination-plan-item');
  const badge = item.querySelector('.status-badge');
  const actions = item.querySelector('.coordination-actions');

  if (action === 'aprovado') {
    badge.className = 'status-badge approved';
    badge.innerHTML = '<i class="ti ti-circle-check"></i> Aprovado';
    showToast('Planejamento aprovado com sucesso!', 'success', 'ti-circle-check');
  } else if (action === 'ajustes') {
    badge.className = 'status-badge pending';
    badge.innerHTML = '<i class="ti ti-clock"></i> Ajustes Solicitados';
    showToast('Solicitação de ajustes enviada ao professor!', 'warning', 'ti-clock');
  } else {
    badge.className = 'status-badge rejected';
    badge.innerHTML = '<i class="ti ti-x"></i> Rejeitado';
    showToast('Planejamento rejeitado. Professor será notificado.', 'warning', 'ti-x');
  }
  actions.querySelectorAll('button').forEach((b) => {
    b.disabled = true;
    b.style.opacity = '0.4';
  });
}

function showToast(msg, type, icon) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast-msg toast-${type}`;
  toast.innerHTML = `<i class="ti ${icon}" style="font-size:18px"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3100);
}
