
   MWENDANTU MEDIA — main.js
   Shared header/footer injection + site-wide interactivity
const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "news.html", label: "News", key: "news" },
  { href: "tv.html", label: "TV", key: "tv" },
  { href: "fm.html", label: "99.5 FM", key: "fm" },
  { href: "programs.html", label: "Programs", key: "programs" },
  { href: "about.html", label: "About", key: "about" },
  { href: "team.html", label: "Team", key: "team" },
  { href: "community.html", label: "Community", key: "community" },
  { href: "advertise.html", label: "Advertise", key: "advertise" },
  { href: "contact.html", label: "Contact", key: "contact" }
];

const BREAKING_HEADLINES = [
  "Tharaka-Nithi County launches new water project in Chuka town",
  "99.5 FM listener numbers grow across Tharaka-Nithi and Meru",
  "Mwendantu Media announces new evening bulletin at 9:00 PM",
  "Weekend football roundup: Chuka Stars secure home win",
  "County assembly debates new market stalls for Chuka CBD",
  "Weather: Sunny spells expected across Tharaka-Nithi this week"
];

function injectHeader(activeKey){
  const links = NAV_LINKS.map(l =>
    `<a href="${l.href}" class="${l.key === activeKey ? 'active' : ''}">${l.label}</a>`
  ).join("");

  const ticker = BREAKING_HEADLINES.concat(BREAKING_HEADLINES).map(h => `<span>${h}</span>`).join("");

  const html = `
  <div class="ticker">
    <div class="ticker-tag">Breaking</div>
    <div class="ticker-track-wrap">
      <div class="ticker-track">${ticker}</div>
    </div>
  </div>
  <div class="navbar">
    <div class="container">
      <a href="index.html" aria-label="Mwendantu Media home" class="logo">
        <span class="mwendantu">Mwendantu</span><span class="media">Media</span>
      </a>
      <nav class="nav-links" id="navLinks">${links}</nav>
      <div class="nav-live">
        <button class="btn-live tv" data-open-modal="tv"><span class="pulse-dot"></span><span class="txt">Live TV</span></button>
        <button class="btn-live fm" data-open-modal="fm"><span class="pulse-dot blue"></span><span class="txt">Live 99.5</span></button>
        <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>`;
  document.getElementById("site-header").innerHTML = html;
}

function injectFooter(){
  const html = `
  <div class="container footer-top">
    <div class="footer-col">
      <a href="index.html" class="logo"><span class="mwendantu">Mwendantu</span><span class="media">Media</span></a>
      <p class="footer-desc">Mwendantu Media is the home of Chuka's own television and 99.5 FM radio, broadcasting across Tharaka-Nithi County. Riiri Wetu — our pride.</p>
      <div class="social-row">
        <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.facebook}</a>
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter / X">${ICONS.twitter}</a>
        <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">${ICONS.youtube}</a>
        <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
      </div>
      <a class="whatsapp-line" href="https://wa.me/254707823366" target="_blank" rel="noopener">${ICONS.whatsapp} +254 707 823 366</a>
    </div>
    <div class="footer-col">
      <h4>Explore</h4>
      <ul>
        <li><a href="news.html">News</a></li>
        <li><a href="tv.html">TV</a></li>
        <li><a href="fm.html">99.5 FM</a></li>
        <li><a href="programs.html">Programs</a></li>
        <li><a href="community.html">Community</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Station</h4>
      <ul>
        <li><a href="about.html">About Us</a></li>
        <li><a href="team.html">Our Team</a></li>
        <li><a href="advertise.html">Advertise</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Get Updates</h4>
      <p class="footer-desc">Subscribe for news alerts and programming updates, straight to your inbox.</p>
      <form class="subscribe-form" data-subscribe-form>
        <input type="email" required placeholder="Your email address" aria-label="Email address" />
        <button type="submit">Join</button>
      </form>
      <p class="form-success" data-subscribe-success>You're subscribed. Riiri wetu!</p>
    </div>
  </div>
  <div class="container footer-bottom">
    <span>&copy; <span id="year"></span> Mwendantu Media &middot; Chuka, Tharaka-Nithi County, Kenya</span>
    <span class="built-by">Built by <a href="tel:+254707823366">Protonet Solutions</a> &middot; +254 707 823 366</span>
  </div>`;
  document.getElementById("site-footer").innerHTML = html;
  document.getElementById("year").textContent = new Date().getFullYear();
}

const ICONS = {
  facebook: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 8.5h2V5.4c-.35-.05-1.54-.15-2.94-.15-2.91 0-4.9 1.78-4.9 5.04V13H6.5v3.5H9.16V23h3.6v-6.5h2.98l.47-3.5h-3.45v-2.4c0-1 .27-1.7 1.74-1.7z" fill="currentColor"/></svg>`,
  twitter: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6.6c-.6.27-1.25.45-1.93.53a3.36 3.36 0 0 0 1.48-1.86 6.7 6.7 0 0 1-2.13.82 3.35 3.35 0 0 0-5.7 3.06A9.5 9.5 0 0 1 4.9 5.9a3.35 3.35 0 0 0 1.04 4.47c-.55-.02-1.06-.17-1.51-.42v.04a3.35 3.35 0 0 0 2.69 3.29c-.5.14-1.02.16-1.5.06a3.36 3.36 0 0 0 3.13 2.33A6.72 6.72 0 0 1 3 16.99a9.47 9.47 0 0 0 5.13 1.5c6.15 0 9.51-5.1 9.51-9.52l-.01-.43c.65-.47 1.22-1.06 1.67-1.74a6.6 6.6 0 0 1-1.9.52z" fill="currentColor"/></svg>`,
  youtube: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M21.6 7.2s-.21-1.5-.86-2.16c-.82-.86-1.74-.86-2.16-.91C15.6 4 12 4 12 4h-.01s-3.6 0-6.58.13c-.42.05-1.34.05-2.16.91-.65.66-.86 2.16-.86 2.16S2.16 9 2.16 10.8v1.4c0 1.8.23 3.6.23 3.6s.21 1.5.86 2.16c.82.86 1.9.83 2.38.92C7.4 19 12 19 12 19s3.6 0 6.58-.14c.42-.06 1.34-.06 2.16-.92.65-.66.86-2.16.86-2.16s.23-1.8.23-3.6v-1.4c0-1.8-.23-3.6-.23-3.6zM9.95 14.1V8.9L15.4 11.5l-5.45 2.6z" fill="currentColor"/></svg>`,
  instagram: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2zm0 5.94a2.34 2.34 0 1 1 0-4.68 2.34 2.34 0 0 1 0 4.68zM16.9 4H7.1A3.1 3.1 0 0 0 4 7.1v9.8A3.1 3.1 0 0 0 7.1 20h9.8a3.1 3.1 0 0 0 3.1-3.1V7.1A3.1 3.1 0 0 0 16.9 4zm1.85 12.9a1.85 1.85 0 0 1-1.85 1.85H7.1a1.85 1.85 0 0 1-1.85-1.85V7.1c0-1.02.83-1.85 1.85-1.85h9.8c1.02 0 1.85.83 1.85 1.85v9.8zM17.1 7.7a.86.86 0 1 1 0-1.72.86.86 0 0 1 0 1.72z" fill="currentColor"/></svg>`,
  whatsapp: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.15-1.35A10 10 0 1 0 12 2zm0 18.1a8.08 8.08 0 0 1-4.12-1.13l-.3-.17-3.06.8.82-2.98-.2-.31A8.1 8.1 0 1 1 12 20.1zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.83-.2-.48-.41-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.16 1.73 2.64 4.19 3.7.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.11-.22-.17-.46-.29z" fill="currentColor"/></svg>`,
  play: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`
};

 Mobile nav toggle 
function bindNavToggle(){
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if(!toggle) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
  }));
}

 Live TV / Radio modals
function buildModals(){
  const wrap = document.createElement("div");
  wrap.innerHTML = `
  <div class="modal-overlay" id="modal-tv">
    <div class="modal">
      <button class="modal-close" data-close-modal aria-label="Close">&times;</button>
      <div class="modal-head">
        <span class="eyebrow"><span class="pulse-dot"></span>Live now</span>
        <h3 style="text-transform:none;font-family:var(--font-body);font-weight:800;font-size:1.3rem;margin-top:10px;">Mwendantu TV</h3>
      </div>
      <div class="modal-body">
        <div class="modal-video">Live TV stream loads here.<br>Replace this placeholder with your embedded player / HLS stream URL.</div>
        <p class="form-note">Watching from outside Chuka? Mwendantu TV also streams on our YouTube channel.</p>
      </div>
    </div>
  </div>
  <div class="modal-overlay" id="modal-fm">
    <div class="modal">
      <button class="modal-close" data-close-modal aria-label="Close">&times;</button>
      <div class="modal-head">
        <span class="eyebrow on-blue"><span class="pulse-dot blue"></span>On air now</span>
        <h3 style="text-transform:none;font-family:var(--font-body);font-weight:800;font-size:1.3rem;margin-top:10px;">99.5 FM Chuka</h3>
      </div>
      <div class="modal-body">
        <div class="modal-audio">
          <div class="eq"><span></span><span></span><span></span><span></span><span></span></div>
          <div>Radio player loads here.<br>Connect your Icecast / Shoutcast stream URL to this audio element.</div>
          <audio controls style="width:100%;" data-radio-player>
            <source src="assets/audio/995-stream-placeholder.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  </div>`;
  document.body.appendChild(wrap);

  document.querySelectorAll("[data-open-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = "modal-" + btn.getAttribute("data-open-modal");
      document.getElementById(id)?.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if(e.target === overlay || e.target.hasAttribute("data-close-modal")){
        overlay.classList.remove("open");
        document.body.style.overflow = "";
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){
      document.querySelectorAll(".modal-overlay.open").forEach(m => m.classList.remove("open"));
      document.body.style.overflow = "";
    }
  });
}

 Reveal on scroll
function bindReveal(){
  const items = document.querySelectorAll(".reveal");
  if(!("IntersectionObserver" in window)){ items.forEach(i => i.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: .15 });
  items.forEach(i => io.observe(i));
}

 Back to top
function bindBackToTop(){
  const btn = document.createElement("button");
  btn.className = "back-to-top";
  btn.setAttribute("aria-label", "Back to top");
  btn.innerHTML = "&uarr;";
  document.body.appendChild(btn);
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 500);
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

Generic tab groups: data-tabs / data-tab-target
function bindTabGroups(){
  document.querySelectorAll("[data-tabs]").forEach(group => {
    const buttons = group.querySelectorAll("[data-tab]");
    const panels = document.querySelectorAll(`[data-tab-panel][data-tab-group="${group.getAttribute("data-tabs")}"]`);
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const val = btn.getAttribute("data-tab");
        panels.forEach(p => p.style.display = (p.getAttribute("data-tab-panel") === val) ? "" : "none");
      });
    });
  });
}

 Accordion 
function bindAccordion(){
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");
      item.parentElement.querySelectorAll(".accordion-item").forEach(i => {
        i.classList.remove("open");
        i.querySelector(".accordion-panel").style.maxHeight = null;
      });
      if(!isOpen){
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });
}

 Counters
function bindCounters(){
  const counters = document.querySelectorAll("[data-count]");
  if(!counters.length) return;
  const run = (el) => {
    const target = parseInt(el.getAttribute("data-count"), 10);
    const suffix = el.getAttribute("data-suffix") || "";
    let cur = 0;
    const step = Math.max(1, Math.round(target / 60));
    const tick = () => {
      cur += step;
      if(cur >= target){ el.textContent = target + suffix; return; }
      el.textContent = cur + suffix;
      requestAnimationFrame(tick);
    };
    tick();
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting){ run(e.target); io.unobserve(e.target); } });
  }, { threshold: .6 });
  counters.forEach(c => io.observe(c));
}

 Forms (subscribe + contact) — front-end only 
function bindForms(){
  document.querySelectorAll("[data-subscribe-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = form.parentElement.querySelector("[data-subscribe-success]");
      success?.classList.add("show");
      form.reset();
    });
  });
  const contact = document.getElementById("contactForm");
  if(contact){
    contact.addEventListener("submit", (e) => {
      e.preventDefault();
      document.getElementById("contactSuccess")?.classList.add("show");
      contact.reset();
    });
  }
}

 News filter (news.html) 
function bindNewsFilter(){
  const buttons = document.querySelectorAll("[data-news-filter]");
  if(!buttons.length) return;
  const cards = document.querySelectorAll("[data-news-cat]");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-news-filter");
      cards.forEach(card => {
        const show = cat === "all" || card.getAttribute("data-news-cat") === cat;
        card.style.display = show ? "" : "none";
      });
    });
  });
}

 Team bio modal (team.html) 
function bindTeamModal(){
  const cards = document.querySelectorAll("[data-team-card]");
  if(!cards.length) return;
  const overlay = document.createElement("div");
  overlay.className = "modal-overlay";
  overlay.id = "modal-team";
  overlay.innerHTML = `<div class="modal">
      <button class="modal-close" data-close-modal aria-label="Close">&times;</button>
      <div class="modal-body" id="teamModalBody"></div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener("click", (e) => {
    if(e.target === overlay || e.target.hasAttribute("data-close-modal")){
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  });
  cards.forEach(card => {
    card.addEventListener("click", () => {
      const name = card.getAttribute("data-name");
      const role = card.getAttribute("data-role");
      const bio = card.getAttribute("data-bio");
      document.getElementById("teamModalBody").innerHTML = `
        <span class="eyebrow">${role}</span>
        <h3 style="text-transform:none;font-family:var(--font-body);font-weight:800;font-size:1.4rem;margin:10px 0 14px;">${name}</h3>
        <p class="muted">${bio}</p>`;
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
    });
  });
}

 Init 
document.addEventListener("DOMContentLoaded", () => {
  const activeKey = document.body.getAttribute("data-page") || "home";
  injectHeader(activeKey);
  injectFooter();
  bindNavToggle();
  buildModals();
  bindReveal();
  bindBackToTop();
  bindTabGroups();
  bindAccordion();
  bindCounters();
  bindForms();
  bindNewsFilter();
  bindTeamModal();
});
