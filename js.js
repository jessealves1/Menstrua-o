const themeBtn = document.getElementById('toggleTheme');
const body = document.body;

function applyTheme(t){
  body.setAttribute('data-theme', t);
  themeBtn.textContent = t === 'dark' ? 'Light' : 'Dark';
  themeBtn.setAttribute('aria-pressed', t === 'dark' ? 'true' : 'false');
  try { localStorage.setItem('pm_theme', t); } catch(e) {}
}

const savedTheme = (() => { 
  try { return localStorage.getItem('pm_theme'); } 
  catch(e){ return null; } 
})();

applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

themeBtn.addEventListener('click', () => 
  applyTheme(body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')
);

// Acordeões
document.querySelectorAll('.acc-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(targetId);
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    panel.style.display = expanded ? 'none' : 'block';
  });
});

// Botão voltar ao topo
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({top:0, behavior:"smooth"});
});
