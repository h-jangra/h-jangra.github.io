const USER = 'h-jangra';
const PINNED = ['NppVim', 'Ghost.sh', 'DocumentViewer'];
const KEY = 'gh_pinned_cache';
const DAY = 86400000;

async function loadPinned() {
  const el = document.getElementById('repos-container');
  const cache = JSON.parse(localStorage.getItem(KEY) || 'null');

  if (cache && Date.now() - cache.time < DAY) {
    el.innerHTML = render(cache.data);
    return;
  }

  try {
    const repos = await Promise.all(
      PINNED.map(name =>
        fetch(`https://api.github.com/repos/${USER}/${name}`)
          .then(r => r.json())
      )
    );

    localStorage.setItem(KEY, JSON.stringify({
      data: repos,
      time: Date.now()
    }));

    el.innerHTML = render(repos);

  } catch {
    el.innerHTML = '<p class="error">Failed to load projects</p>';
  }
}

function render(repos) {
  return repos.map(r => `
    <div class="repo-card">
      <h3><a href="${r.html_url}" target="_blank">${r.name}</a></h3>
      ${r.description ? `<p>${r.description}</p>` : ''}
      <div class="repo-meta">
        ${r.language || ''}
        ⭐ ${r.stargazers_count}
        🍴 ${r.forks_count}
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', loadPinned);


// Footer
document.getElementById('year').textContent = new Date().getFullYear();

const buildDate = new Date(document.lastModified);
document.getElementById('last-updated').textContent =
  buildDate.toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

