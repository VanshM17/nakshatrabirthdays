/*  NAKSHATRA BIRTHDAYS — UPGRADED SCRIPT.JS */

// ─── DATA ───────────────────────────────────────────────────────────────────────

const allData = {
  2026: [
    { name: "Ghanshyam Jonwal",  birthday: "17-Feb", title: "Ex-Vice-President",        photo: "placeholder.jpg" },
    { name: "Meenakshi Sinha",   birthday: "23-Feb", title: "Ex-Director of Astronomy",      photo: "placeholder.jpg" },
    { name: "Ayush Dewangan",    birthday: "27-Jun", title: "Ex-Managing Director",       photo: "placeholder.jpg" },
    { name: "Omkar Ahuja",       birthday: "15-Aug", title: "Ex-President",               photo: "placeholder.jpg" },
    { name: "Ayushman Bari",     birthday: "15-Aug", title: "Ex-General Secretary",       photo: "placeholder.jpg" },
    { name: "Divye Bajaj",       birthday: "31-Aug", title: "Ex-Vice-President",          photo: "placeholder.jpg" },
    { name: "Nikhil Kumar",      birthday: "27-Oct", title: "Ex-Director of Operations",  photo: "placeholder.jpg" },
    { name: "Avantika Ambra",    birthday: "13-Dec", title: "Ex-General Secretary",       photo: "placeholder.jpg" },
  ],
  2027: [
    { name: "Gautam Bajaj",      birthday: "7-Jan",  title: "Senior Execomm",             photo: "placeholder.jpg" },
    { name: "Satyam Parida",     birthday: "17-Jan", title: "General Secretary",          photo: "placeholder.jpg" },
    { name: "Aakash Jha",        birthday: "25-Mar", title: "General Secretary",          photo: "placeholder.jpg" },
    { name: "Rahul",             birthday: "15-Apr", title: "Managing Director",          photo: "placeholder.jpg" },
    { name: "Ashu Anand",        birthday: "8-Aug",  title: "President",                  photo: "images/ashu.png" },
    { name: "Tarun Sharma",      birthday: "7-Sep",  title: "Director - Public Relations",photo: "images/tarun.jpg" },
    { name: "Harsh Swami",       birthday: "11-Sep", title: "Vice President",             photo: "placeholder.jpg" },
    { name: "Dipankar Page",     birthday: "21-Oct", title: "Director - Astronomy",       photo: "placeholder.jpg" },
    { name: "Yogita Jha",        birthday: "5-Nov",  title: "Director - Technology",      photo: "placeholder.jpg" },
    { name: "Nandini Nautiyal",  birthday: "17-Nov", title: "General Secretary",          photo: "placeholder.jpg" },
    { name: "Vansh Maheshwari",  birthday: "17-Nov", title: "Vice President",             photo: "images/vansh.png" },
    { name: "Dhruv Garg",        birthday: "11-Feb", title: "Managing Director",          photo: "placeholder.jpg" },
    
  ],
  2028: [
    { name: "Mayank Gupta",      birthday: "7-Jan",  title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Prajal Goel",       birthday: "9-Mar",  title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Tijil Gupta",       birthday: "9-Mar",  title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Rachit Kathuria",   birthday: "14-Apr", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Sneha Kumari",      birthday: "16-Apr", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Shreem",            birthday: "29-Apr", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Aujasvi Saxena",    birthday: "2-May",  title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Vini Bansode",      birthday: "31-May", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Kartavya Vashishth",birthday: "7-Jun",  title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Bhavya Goel",       birthday: "11-Jul", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Stuti Jain",        birthday: "26-Sep", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Laksh Agrawal",     birthday: "8-Oct",  title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Ayush Sinha",       birthday: "20-Nov", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Aaryan Kumar",      birthday: "30-Nov", title: "Execomm",  photo: "placeholder.jpg" },
    { name: "Akshat Kashyap",    birthday: "13-Dec", title: "Execomm",  photo: "placeholder.jpg" },
  ],
  2029: [
    { name: "Harshita Kannoujia",birthday: "19-Sep", title: "Member",   photo: "placeholder.jpg" },
    { name: "Ishit Ninawat",     birthday: "16-Nov", title: "Member",   photo: "placeholder.jpg" },
  ],
};

// ─── STATE ─────────────────────────────────────────────────────────────────

let currentYear = '2026';
let sortMode    = 'birthday'; // 'birthday' | 'name' | 'role'
let searchQuery = '';
let chartInstance = null;
let chartView   = 'month';

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const MONTH_FULL  = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// ─── HELPERS ───────────────────────────────────────────────────────────────

function parseBirthday(bdStr) {
  const [d, m] = bdStr.split('-');
  return { day: parseInt(d), monthIdx: MONTH_NAMES.indexOf(m), monthStr: m };
}

function daysUntilBirthday(bdStr) {
  const { day, monthIdx } = parseBirthday(bdStr);
  const today = new Date();
  let next = new Date(today.getFullYear(), monthIdx, day);
  if (next < today) next.setFullYear(today.getFullYear() + 1);
  return Math.ceil((next - today) / 86400000);
}

function isToday(bdStr) {
  const { day, monthIdx } = parseBirthday(bdStr);
  const t = new Date();
  return t.getDate() === day && t.getMonth() === monthIdx;
}

function getRoleClass(title) {
  const t = title.toLowerCase();
  if (t.includes('president') && !t.includes('vice')) return 'role-president';
  if (t.includes('vice'))       return 'role-vp';
  if (t.includes('director'))   return 'role-director';
  if (t.includes('secretary'))  return 'role-secretary';
  if (t.includes('execomm'))    return 'role-execomm';
  return 'role-member';
}

function getRolePriority(title) {
  const t = title.toLowerCase();
  if (t.includes('president') && !t.includes('vice') && !t.includes('ex')) return 0;
  if (t.includes('vice'))                 return 1;
  if (t.includes('managing director'))    return 2;
  if (t.includes('secretary'))            return 3;
  if (t.includes('Director - '))          return 5;
  if (t.includes('execomm'))              return 7;
  else return 6; // regular members and others
}

function highlightMatch(text, query) {
  if (!query) return escHtml(text);
  const re = new RegExp(`(${escRegex(query)})`, 'gi');
  return escHtml(text).replace(re, '<mark>$1</mark>');
}
function escHtml(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function escRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
}

// ─── SORT ──────────────────────────────────────────────────────────────────

function sortMembers(members) {
  return [...members].sort((a, b) => {
    if (sortMode === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortMode === 'role') {
      const diff = getRolePriority(a.title) - getRolePriority(b.title);
      return diff !== 0 ? diff : a.name.localeCompare(b.name);
    } else {
      // birthday (month-first)
      const pa = parseBirthday(a.birthday), pb = parseBirthday(b.birthday);
      return pa.monthIdx !== pb.monthIdx ? pa.monthIdx - pb.monthIdx : pa.day - pb.day;
    }
  });
}

// ─── RENDER MEMBER CARD ─────────────────────────────────────────────────────

function getInitials(name) {
  return name.split(' ').slice(0,2).map(w => w[0]).join('').toUpperCase();
}

function getAvatarColor(name) {
  // Deterministic color from name
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 55%, 52%)`;
}

function buildMemberCard(m, year, queryHighlight = '') {
  const days    = daysUntilBirthday(m.birthday);
  const today   = isToday(m.birthday);
  const soon    = !today && days <= 7;
  const roleClass = getRoleClass(m.title);

  let badgeClass = '';
  let badgeText  = '';
  if (today) {
    badgeClass = 'today';
    badgeText  = '🎂 Today!';
  } else if (soon) {
    badgeClass = 'soon';
    badgeText  = `In ${days}d`;
  } else {
    badgeText = `${days}d`;
  }

  const cardClass = today ? 'member birthday-today' : (soon ? 'member birthday-soon' : 'member');
  const displayName  = queryHighlight ? highlightMatch(m.name, queryHighlight) : escHtml(m.name);
  const displayTitle = queryHighlight ? highlightMatch(m.title, queryHighlight) : escHtml(m.title);
  const batchTag = year ? `<span class="batch-label">${year}</span>` : '';

  const isPlaceholder = !m.photo || m.photo === 'placeholder.jpg';
  const photoHTML = isPlaceholder
    ? `<div class="member-avatar" style="background:${getAvatarColor(m.name)}" title="${escHtml(m.name)}">${getInitials(m.name)}</div>`
    : `<img src="${escHtml(m.photo)}" alt="${escHtml(m.name)}" class="member-photo clickable"
         onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
       <div class="member-avatar" style="background:${getAvatarColor(m.name)};display:none" title="${escHtml(m.name)}">${getInitials(m.name)}</div>`;

  return `
  <div class="${cardClass}" data-name="${escHtml(m.name)}" data-title="${escHtml(m.title)}" data-birthday="${escHtml(m.birthday)}">
    <div class="member-photo-wrap">
      ${photoHTML}
    </div>
    <div class="member-info">
      <div class="member-name">${displayName}${batchTag}</div>
      <div class="member-title">${displayTitle}</div>
      <span class="role-badge ${roleClass}">${escHtml(getRoleShortLabel(m.title))}</span>
    </div>
    <div class="member-meta">
      <span class="member-birthday">${escHtml(m.birthday)}</span>
      <span class="days-badge ${badgeClass}">${badgeText}</span>
    </div>
  </div>`;
}

function getRoleShortLabel(title) {
  const t = title.toLowerCase();
  if (t.includes('ex-') || t.startsWith('ex-')) return 'Alumni';
  if (t.includes('president') && !t.includes('vice')) return 'Prezi';
  if (t.includes('vice')) return 'VP OP';
  if (t.includes('managing')) return 'MD';
  if (t.includes('director')) return 'Director';
  if (t.includes('secretary')) return 'Gensec';
  if (t.includes('execomm') || t.includes('senior execomm')) return 'Execomm';
  if (t.includes('head of')) return 'Head';
  return 'Member';
}

// ─── RENDER TAB ────────────────────────────────────────────────────────────

function renderTab(year) {
  const container = document.getElementById(year);
  if (!container) return;

  const members = sortMembers(allData[year] || []);

  if (sortMode === 'birthday') {
    // Group by month
    const groups = {};
    members.forEach(m => {
      const { monthStr, monthIdx } = parseBirthday(m.birthday);
      const key = `${monthIdx}_${monthStr}`;
      if (!groups[key]) groups[key] = { monthStr, monthIdx, members: [] };
      groups[key].members.push(m);
    });

    let html = '<div class="members-list">';
    Object.values(groups)
      .sort((a,b) => a.monthIdx - b.monthIdx)
      .forEach(g => {
        html += `<div class="month-group-header">${MONTH_FULL[g.monthIdx]}<span class="month-count">${g.members.length}</span></div>`;
        g.members.forEach(m => { html += buildMemberCard(m, null); });
      });
    html += '</div>';
    container.innerHTML = html;
  } else {
    let html = '<div class="members-list">';
    members.forEach(m => { html += buildMemberCard(m, null); });
    html += '</div>';
    container.innerHTML = html;
  }

  attachBirthdayTooltips();
}

// ─── OPEN YEAR ─────────────────────────────────────────────────────────────

function openYear(evt, year) {
  currentYear = year;

  // Hide all
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active-tab'));
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById('searchResultsView').style.display = 'none';

  // Show selected
  const tab = document.getElementById(year);
  if (tab) tab.classList.add('active-tab');
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add('active');
    moveTabUnderline(evt.currentTarget);
  }

  renderTab(year);

  // Re-run search if active
  if (searchQuery) handleSearch();
  if (chartInstance) buildChart();
}

// ─── TAB UNDERLINE ANIMATION ───────────────────────────────────────────────

function moveTabUnderline(btn) {
  const underline = document.getElementById('tabUnderline');
  if (!underline || !btn) return;
  underline.style.left  = btn.offsetLeft + 'px';
  underline.style.width = btn.offsetWidth + 'px';
}

// ─── SORT MODE ─────────────────────────────────────────────────────────────

function setSortMode(mode) {
  sortMode = mode;
  document.querySelectorAll('.sort-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.sort === mode);
  });
  document.getElementById('sortDropdown').classList.remove('open');
  document.getElementById('sortToggle').classList.remove('active');
  renderTab(currentYear);
  if (searchQuery) handleSearch();
}

// ─── SEARCH ────────────────────────────────────────────────────────────────

function handleSearch() {
  searchQuery = document.getElementById('memberSearch').value.trim().toLowerCase();
  const banner = document.getElementById('searchBanner');
  const bannerText = document.getElementById('searchBannerText');
  const resultsView = document.getElementById('searchResultsView');
  const resultsList = document.getElementById('searchResultsList');

  if (!searchQuery) {
    clearSearch();
    return;
  }

  // Collect matches across all years
  const matches = [];
  Object.entries(allData).forEach(([year, members]) => {
    members.forEach(m => {
      if (
        m.name.toLowerCase().includes(searchQuery) ||
        m.title.toLowerCase().includes(searchQuery) ||
        m.birthday.toLowerCase().includes(searchQuery)
      ) {
        matches.push({ ...m, year });
      }
    });
  });

  // Hide tab content, show results
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active-tab'));

  if (matches.length === 0) {
    resultsList.innerHTML = `<div class="no-results"><div class="nr-icon">🔭</div><p>No members found for "<strong>${escHtml(searchQuery)}</strong>"</p></div>`;
  } else {
    const sorted = sortMembers(matches);
    let html = '';
    sorted.forEach(m => { html += buildMemberCard(m, m.year, searchQuery); });
    resultsList.innerHTML = html;
  }

  resultsView.style.display = 'block';
  banner.style.display = 'flex';
  bannerText.innerHTML = matches.length > 0
    ? `<strong>${matches.length}</strong> result${matches.length !== 1 ? 's' : ''} for "<em>${escHtml(searchQuery)}</em>"`
    : `No results for "<em>${escHtml(searchQuery)}</em>"`;

  attachBirthdayTooltips();
}

function clearSearch() {
  searchQuery = '';
  document.getElementById('memberSearch').value = '';
  document.getElementById('searchBanner').style.display = 'none';
  document.getElementById('searchResultsView').style.display = 'none';

  // Re-show current tab
  const tab = document.getElementById(currentYear);
  if (tab) tab.classList.add('active-tab');
}

// ─── CHART ─────────────────────────────────────────────────────────────────

function toggleChart() {
  const panel = document.getElementById('chartPanel');
  const btn   = document.getElementById('chartToggle');
  const open  = panel.classList.toggle('open');
  btn.classList.toggle('active', open);
  if (open) buildChart();
}

function setChartView(view) {
  chartView = view;
  document.querySelectorAll('.cv-btn').forEach(b => b.classList.toggle('active', b.dataset.view === view));
  buildChart();
}

function buildChart() {
  const allMembers = Object.entries(allData).flatMap(([year, arr]) =>
    arr.map(m => ({ ...m, year }))
  );

  let labels, values, colors, title;

  if (chartView === 'month') {
    const counts = Array(12).fill(0);
    allMembers.forEach(m => {
      const { monthIdx } = parseBirthday(m.birthday);
      counts[monthIdx]++;
    });
    labels = MONTH_FULL.map(m => m.slice(0,3));
    values = counts;
    colors = labels.map((_, i) => `hsl(${200 + i * 14}, 70%, 58%)`);
    title  = 'Birthdays per Month (All Batches)';

    // Build stats
    const max = Math.max(...counts);
    const maxMonth = MONTH_FULL[counts.indexOf(max)];
    const total = counts.reduce((a,b) => a+b, 0);
    buildChartStats([
      { icon: '👥', label: 'Total Members', value: total },
      { icon: '📅', label: 'Busiest Month', value: `${maxMonth} (${max})` },
      { icon: '🎂', label: 'Today\'s Birthdays', value: allMembers.filter(m => isToday(m.birthday)).length },
      { icon: '⚡', label: 'This Week', value: allMembers.filter(m => { const d = daysUntilBirthday(m.birthday); return d <= 7 && d > 0; }).length },
    ]);

  } else if (chartView === 'year') {
    labels = Object.keys(allData);
    values = labels.map(y => allData[y].length);
    colors = ['#e8670a', '#3f6fd4', '#10b981', '#8b5cf6'];
    title  = 'Members per Batch';
    buildChartStats(labels.map((y,i) => ({ icon: '🎓', label: `Batch ${y}`, value: values[i] })));

  } else {
    // by role
    const roleCounts = {};
    allMembers.forEach(m => {
      const r = getRoleShortLabel(m.title);
      roleCounts[r] = (roleCounts[r] || 0) + 1;
    });
    const sorted = Object.entries(roleCounts).sort((a,b) => b[1] - a[1]);
    labels = sorted.map(e => e[0]);
    values = sorted.map(e => e[1]);
    colors = ['#e8670a','#3f6fd4','#10b981','#8b5cf6','#f59e0b','#ec4899','#64748b'];
    title  = 'Members by Role';
    buildChartStats(sorted.slice(0,4).map(([r,c]) => ({ icon: '👤', label: r, value: c })));
  }

  const isDark = document.body.classList.contains('dark-mode');
  const textColor = isDark ? '#a09888' : '#5a5248';
  const gridColor = isDark ? 'rgba(255,255,255,.06)' : 'rgba(0,0,0,.06)';

  const ctx = document.getElementById('birthdayChart').getContext('2d');
  if (chartInstance) chartInstance.destroy();

  chartInstance = new Chart(ctx, {
    type: chartView === 'year' ? 'bar' : (chartView === 'role' ? 'doughnut' : 'bar'),
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: chartView === 'role' ? colors : colors.map(c => c + 'cc'),
        borderColor:      colors,
        borderWidth: chartView === 'role' ? 0 : 2,
        borderRadius: chartView !== 'role' ? 6 : 0,
        borderSkipped: false,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: chartView === 'role',
          position: 'bottom',
          labels: { color: textColor, font: { family: "'DM Sans', sans-serif", size: 12 }, padding: 16 }
        },
        tooltip: {
          backgroundColor: isDark ? '#1a1f32' : '#1a1714',
          titleColor: '#f0e6d3',
          bodyColor: '#a09888',
          titleFont: { family: "'Syne', sans-serif", size: 13, weight: '700' },
          bodyFont: { family: "'DM Sans', sans-serif", size: 12 },
          padding: 12,
          cornerRadius: 8,
          callbacks: {
            label: ctx => `  ${ctx.parsed.y ?? ctx.parsed} member${(ctx.parsed.y ?? ctx.parsed) !== 1 ? 's' : ''}`
          }
        }
      },
      scales: chartView === 'role' ? {} : {
        x: {
          ticks: { color: textColor, font: { family: "'DM Sans', sans-serif", size: 11 } },
          grid: { color: gridColor }
        },
        y: {
          ticks: { color: textColor, font: { family: "'DM Sans', sans-serif", size: 11 }, stepSize: 1 },
          grid: { color: gridColor },
          beginAtZero: true
        }
      }
    }
  });
}

function buildChartStats(stats) {
  const el = document.getElementById('chartStats');
  el.innerHTML = stats.map(s =>
    `<div class="stat-pill">${s.icon} ${s.label}: <strong>${s.value}</strong></div>`
  ).join('');
}

// ─── TOOLTIP ───────────────────────────────────────────────────────────────

function attachBirthdayTooltips() {
  const tooltip = document.getElementById('birthday-tooltip');
  document.querySelectorAll('.member-birthday').forEach(el => {
    el.addEventListener('mouseenter', function(e) {
      const bd = el.textContent.trim();
      const days = daysUntilBirthday(bd);
      const today = isToday(bd);
      tooltip.textContent = today ? '🎂 Birthday today!' : `${days} days away`;
      tooltip.setAttribute('data-sub', bd);
      tooltip.style.display = 'block';
    });
    el.addEventListener('mousemove', function(e) {
      tooltip.style.left = (e.clientX + 16) + 'px';
      tooltip.style.top  = (e.clientY - 36) + 'px';
    });
    el.addEventListener('mouseleave', () => tooltip.style.display = 'none');
  });
}

// ─── FUN FACTS ─────────────────────────────────────────────────────────────

const funFacts = [
  "In a room of 23 people, there's a 50% chance two share the same birthday!",
  "September has the most birthdays across all batches!",
  "For a 50% chance of 3 people sharing a birthday, you need 84 people!",
  "There are 5 days with two birthdays happening at once!",
  "The birthday paradox: 70 people gives a 99.9% chance of a shared birthday!",
];

let factIdx = 0, charIdx = 0, isTyping = true;
const funFactEl = document.getElementById('funFactText');

function runTypewriter() {
  if (!funFactEl) return;
  const text = funFacts[factIdx];

  if (isTyping) {
    if (charIdx <= text.length) {
      funFactEl.innerHTML = escHtml(text.slice(0, charIdx)) + '<span class="fun-fact-cursor"></span>';
      charIdx++;
      setTimeout(runTypewriter, Math.random() * 18 + 28);
    } else {
      isTyping = false;
      setTimeout(runTypewriter, 2800);
    }
  } else {
    if (charIdx > 0) {
      charIdx--;
      funFactEl.innerHTML = escHtml(text.slice(0, charIdx)) + '<span class="fun-fact-cursor"></span>';
      setTimeout(runTypewriter, 12);
    } else {
      isTyping = true;
      factIdx = (factIdx + 1) % funFacts.length;
      setTimeout(runTypewriter, 400);
    }
  }
}

// ─── DARK MODE ─────────────────────────────────────────────────────────────

function initDarkMode() {
  const toggle = document.getElementById('darkModeToggle');
  const isDark = localStorage.getItem('dark-mode') === 'true';
  if (isDark) {
    document.body.classList.add('dark-mode');
    toggle.textContent = '☀️';
  }
  toggle.addEventListener('click', () => {
    const dark = document.body.classList.toggle('dark-mode');
    toggle.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('dark-mode', dark);
    if (chartInstance) setTimeout(buildChart, 50); // re-render with new colors
  });
}

// ─── SCROLL PROGRESS ───────────────────────────────────────────────────────

window.addEventListener('scroll', () => {
  const bar = document.getElementById('scrollProgressBar');
  const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  if (bar) bar.style.width = pct + '%';
}, { passive: true });

// ─── SEARCH BAR TOGGLE ─────────────────────────────────────────────────────

function initSearchBar() {
  const wrap   = document.getElementById('searchWrap');
  const toggle = document.getElementById('searchToggle');
  const input  = document.getElementById('memberSearch');
  const clear  = document.getElementById('clearSearch');

  toggle.addEventListener('click', e => {
    const isOpen = wrap.classList.toggle('open');
    toggle.classList.toggle('active', isOpen);
    if (isOpen) setTimeout(() => input.focus(), 320);
    else { input.value = ''; clearSearch(); }
    e.stopPropagation();
  });

  clear.addEventListener('click', () => {
    input.value = '';
    handleSearch();
    input.focus();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      wrap.classList.remove('open');
      toggle.classList.remove('active');
      input.value = '';
      clearSearch();
    }
  });

  document.addEventListener('click', e => {
    if (wrap.classList.contains('open') && !wrap.contains(e.target) && e.target !== toggle) {
      if (!searchQuery) {
        wrap.classList.remove('open');
        toggle.classList.remove('active');
      }
    }
  });
}

// ─── SORT DROPDOWN TOGGLE ──────────────────────────────────────────────────

function initSortToggle() {
  const btn = document.getElementById('sortToggle');
  const dd  = document.getElementById('sortDropdown');
  btn.addEventListener('click', e => {
    dd.classList.toggle('open');
    btn.classList.toggle('active', dd.classList.contains('open'));
    e.stopPropagation();
  });
  document.addEventListener('click', e => {
    if (!dd.contains(e.target) && e.target !== btn) {
      dd.classList.remove('open');
      btn.classList.remove('active');
    }
  });
}

// ─── STARFIELD CANVAS ──────────────────────────────────────────────────────

function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random(),
      s: Math.random() * 0.005 + 0.002,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.a += s.s;
      if (s.a > 1 || s.a < 0) s.s *= -1;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,245,220,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  draw();
}

// ─── EASTER EGGS ───────────────────────────────────────────────────────────

let easterTyped = '';
document.addEventListener('keydown', e => {
  if (e.ctrlKey || e.altKey || e.metaKey) return;
  easterTyped += e.key.toLowerCase();
  easterTyped = easterTyped.slice(-8);

  if (easterTyped.slice(-5) === 'stars') {
    launchStars();
    easterTyped = '';
  }
  if (easterTyped === 'asteroid') {
    launchAsteroids();
    easterTyped = '';
  }
});

function launchStars() {
  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star-particle';
    s.style.cssText = `
      top:${Math.random()*100}vh;
      left:${Math.random()*100}vw;
      animation-delay:${Math.random()*2}s;
      width:${Math.random()*5+3}px;
      height:${Math.random()*5+3}px;
    `;
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 5000);
  }
}

function launchAsteroids() {
  const count = 6 + Math.floor(Math.random() * 5);
  for (let i = 0; i < count; i++) {
    const a = document.createElement('div');
    a.className = 'asteroid';
    const delay = Math.random() * 0.8;
    a.style.cssText = `left:${Math.random()*(window.innerWidth-40)}px;animation-delay:${delay}s`;
    document.body.appendChild(a);
    setTimeout(() => {
      a.classList.add('asteroid-crash');
      const sound = document.getElementById('explosionSound');
      if (sound) { sound.currentTime = 0; sound.play().catch(() => {}); }
      setTimeout(() => a.remove(), 500);
    }, (1500 + delay * 1000));
  }
  document.body.classList.add('shake');
  setTimeout(() => document.body.classList.remove('shake'), 500);
}

// ─── PREVENT IMAGE CONTEXT MENU ────────────────────────────────────────────

document.addEventListener('contextmenu', e => {
  if (e.target.tagName === 'IMG') e.preventDefault();
});

// ─── INIT ──────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initSearchBar();
  initSortToggle();
  initStarfield();

  // Chart toggle button
  document.getElementById('chartToggle').addEventListener('click', toggleChart);

  // Open default tab (2027 as before)
  const defaultBtn = document.querySelector('[data-year="2027"]');
  if (defaultBtn) {
    defaultBtn.click();
  } else {
    openYear(null, '2026');
    const btn = document.querySelector('[data-year="2026"]');
    if (btn) moveTabUnderline(btn);
  }

  // Start typewriter
  setTimeout(runTypewriter, 600);

  // Attach tooltips on load
  attachBirthdayTooltips();
});