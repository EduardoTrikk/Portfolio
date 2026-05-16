(() => {
  const STORAGE_KEY = "portfolio_lang";
  const FALLBACK_LANG = "pt";

  function getNested(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  }

  function getCurrentLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") return stored;
    const docLang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
    if (docLang.startsWith("en")) return "en";
    return FALLBACK_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "pt-BR");
    applyTranslations(lang);
    updateLangToggleUI(lang);
  }

  function applyTranslations(lang) {
    const dict = (window.translations && window.translations[lang]) || window.translations?.[FALLBACK_LANG];
    if (!dict) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = getNested(dict, key);
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      const val = getNested(dict, key);
      if (typeof val === "string") el.innerHTML = val;
    });
  }

  function updateLangToggleUI(lang) {
    const toggles = [document.getElementById("langToggle"), document.getElementById("langToggleMobile")].filter(Boolean);
    toggles.forEach((btn) => {
      btn.setAttribute("aria-label", lang === "en" ? "Switch language to Portuguese" : "Trocar idioma para inglês");
      btn.dataset.lang = lang;
      
      // Update the active state of the toggle
      const ptSpan = btn.querySelector('.lang-opt:nth-child(1)');
      const enSpan = btn.querySelector('.lang-opt:nth-child(3)');
      if(ptSpan && enSpan) {
        if(lang === 'pt') {
          ptSpan.classList.add('active');
          enSpan.classList.remove('active');
        } else {
          enSpan.classList.add('active');
          ptSpan.classList.remove('active');
        }
      }
    });
  }

  // --- Cinematic Sakura Effect ---
  function initSakura() {
    const canvas = document.getElementById('sakuraCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    let windX = 0;
    let windY = 0;
    let targetWindX = 0;
    let targetWindY = 0;

    const particles = [];
    const particleCount = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 20 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height - height,
        size: Math.random() * 3 + 1,
        speedY: Math.random() * 1 + 0.5,
        speedX: Math.random() * 0.5 - 0.25,
        angle: Math.random() * 360,
        spin: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function render() {
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate wind
      windX += (targetWindX - windX) * 0.05;
      windY += (targetWindY - windY) * 0.05;

      particles.forEach(p => {
        p.y += p.speedY + windY;
        p.x += p.speedX + windX;
        p.angle += p.spin;

        if (p.y > height + 20) {
          p.y = -10;
          p.x = Math.random() * width;
        } else if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -10;
        if (p.x < -20) p.x = width + 10;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = "#ff4444"; // Crimson color
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      requestAnimationFrame(render);
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section[id]");
      let activeIndex = 0;
      sections.forEach((sec, idx) => {
        if (scrollY >= sec.offsetTop - window.innerHeight / 2) {
          activeIndex = idx;
        }
      });

      // Change wind based on scenario
      if (activeIndex === 0) { targetWindX = 0; targetWindY = 0; } // Home: Calm
      else if (activeIndex === 1) { targetWindX = -2; targetWindY = 0.5; } // Projects: Breeze left
      else if (activeIndex === 2) { targetWindX = 3; targetWindY = -1; } // Skills: Updraft right
      else { targetWindX = 1; targetWindY = 2; } // About: Falling fast
    }, { passive: true });

    render();
  }

  // --- Particle Morph Engine ---
  function initMorphEngine() {
    const canvas = document.getElementById('morphCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const molds = [[], [], [], []]; // 0: Kanji, 1: Kneeling, 2: Standing, 3: Striking
    let particles = [];
    let currentMold = 0;
    const numParticles = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 800 : 6000;

    // Helper to extract pixels
    function extractPixels(imgOrText, isText = false, offsetX = 0.5, offsetY = 0.5, scale = 0.8) {
      const oc = document.createElement('canvas');
      const octx = oc.getContext('2d', { willReadFrequently: true });
      const size = Math.min(width, height) * scale; 
      oc.width = width;
      oc.height = height;

      if (isText) {
        octx.fillStyle = 'black';
        octx.font = `${size}px "Noto Serif JP", serif`;
        octx.textAlign = 'center';
        octx.textBaseline = 'middle';
        octx.fillText(imgOrText, width * offsetX, height * offsetY);
      } else {
        const imgRatio = imgOrText.width / imgOrText.height;
        const drawHeight = size;
        const drawWidth = size * imgRatio;
        octx.drawImage(imgOrText, (width * offsetX) - (drawWidth / 2), (height * offsetY) - (drawHeight / 2), drawWidth, drawHeight);
      }

      const imgData = octx.getImageData(0, 0, width, height);
      const data = imgData.data;
      const points = [];
      const step = 4; // Sample every N pixels

      for (let y = 0; y < height; y += step) {
        for (let x = 0; x < width; x += step) {
          const index = (y * width + x) * 4;
          const r = data[index];
          const g = data[index + 1];
          const b = data[index + 2];
          const alpha = data[index + 3];
          // Consider pixel if it's opaque AND dark (ignores white backgrounds)
          if (alpha > 200 && r < 100 && g < 100 && b < 100) {
            points.push({ x, y });
          }
        }
      }
      return points;
    }

    async function loadMolds() {
      // 0: Samurai Hero Silhouette (Cento, Grande)
      const heroImg = new Image();
      heroImg.src = 'images/samurai_hero.png';
      await new Promise(r => heroImg.onload = r);
      molds[0] = extractPixels(heroImg, false, 0.72, 0.5, 0.65);

      // Load other images for sections
      const configs = [
        { src: 'images/samurai_kneeling.png', ox: 0.85, oy: 0.65, scale: 0.55 }, // Projetos
        { src: 'images/samurai_standing.png', ox: 0.15, oy: 0.6, scale: 0.65 },  // Skills
        { src: 'images/samurai_striking.png', ox: 0.8, oy: 0.5, scale: 0.65 }    // About
      ];

      for (let i = 0; i < configs.length; i++) {
        await new Promise((resolve) => {
          const img = new Image();
          img.src = configs[i].src;
          img.onload = () => {
            molds[i + 1] = extractPixels(img, false, configs[i].ox, configs[i].oy, configs[i].scale);
            resolve();
          };
          img.onerror = resolve; // Skip if missing
        });
      }
      
      initParticles();
    }

    function initParticles() {
      particles = [];
      const baseMold = molds[0].length ? molds[0] : [{x: width/2, y: height/2}];
      for (let i = 0; i < numParticles; i++) {
        const target = baseMold[Math.floor(Math.random() * baseMold.length)];
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          tx: target.x,
          ty: target.y,
          vx: 0, vy: 0,
          transitionDelay: 0,
          color: Math.random() > 0.8 ? '#ff4444' : (Math.random() > 0.5 ? '#1a1a1a' : '#333'),
          size: Math.random() * 2 + 1,
          ease: Math.random() * 0.08 + 0.04
        });
      }
      render();
    }

    function render() {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => {
        const noiseX = Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.5;
        const noiseY = Math.cos(Date.now() * 0.002 + p.x * 0.01) * 0.5;

        if (p.transitionDelay > 0) {
          // Fase de dispersão: afasta explosivamente e perde força rapidamente
          p.transitionDelay--;
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.88; // Fricção super alta
          p.vy *= 0.88;
        } else {
          // Fase de contração (Reverse): se une diretamente ao alvo sem quicar
          p.x += (p.tx - p.x) * p.ease;
          p.y += (p.ty - p.y) * p.ease;
        }

        p.x += noiseX;
        p.y += noiseY;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(render);
    }

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      loadMolds(); // Re-extract to adjust to new screen size
    });

    // Update mold based on scroll
    window.addEventListener('scroll', () => {
      if(!molds[0].length) return;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section[id]");
      let activeIndex = 0;

      sections.forEach((sec, idx) => {
        if (scrollY >= sec.offsetTop - window.innerHeight / 2) {
          activeIndex = idx; // 0=hero, 1=projects, 2=skills, 3=education, 4=about, 5=contact
        }
      });

    // Map sections to molds
    // 0: Hero -> Kanji
    // 1: Projects -> Kneeling
    // 2: Skills & 3: Education -> Standing
    // 4: About & 5: Contact -> Striking
    
    let targetMoldIdx = 0;
    // Determine which mold (samurai) to show based on active section
    if (activeIndex === 1) {
      targetMoldIdx = 1; // Projects -> kneeling (right side)
    } else if (activeIndex === 2 || activeIndex === 3) {
      targetMoldIdx = 2; // Skills & Education -> standing (left side)
    } else if (activeIndex >= 4) {
      targetMoldIdx = 3; // About & Contact -> striking (right side)
    }

      if (targetMoldIdx !== currentMold && molds[targetMoldIdx] && molds[targetMoldIdx].length > 0) {
        currentMold = targetMoldIdx;
        const targetMold = molds[currentMold];
        
        particles.forEach(p => {
          // Explosão omnidirecional
          const angle = Math.random() * Math.PI * 2;
          const force = Math.random() * 30 + 15;
          p.vx = Math.cos(angle) * force;
          p.vy = Math.sin(angle) * force;
          p.transitionDelay = Math.floor(Math.random() * 40 + 30); // Espera N frames em slow motion
          
          const target = targetMold[Math.floor(Math.random() * targetMold.length)];
          p.tx = target.x;
          p.ty = target.y;
        });
      }
    }, { passive: true });

    loadMolds();
  }

  // Define static layout positions once
  function initLayoutPositions() {
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((sec, idx) => {
      const inner = sec.querySelector('.section-inner');
      if (!inner) return;
      if (idx === 1 || idx >= 4) {
        inner.classList.add('layout-left');
      } else if (idx === 2 || idx === 3) {
        inner.classList.add('layout-right');
      }
    });
  }




  // --- Intersection Observer for Animations ---
  function setupFadeIn() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Only trigger if the element is significantly in/out to avoid flickering
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else if (entry.boundingClientRect.top > 0) {
          // Only remove if it leaves through the bottom (scrolling up)
          // and ensure it's truly out
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in, .slide-up, .scale-in').forEach(el => {
      observer.observe(el);
    });
  }

  // --- Scroll Parallax & Nav ---
  function setupScroll() {
    const nav = document.getElementById("site-nav");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      
      // Nav shrink
      if (nav) {
        if (scrollY > 50) nav.classList.add("scrolled");
        else nav.classList.remove("scrolled");
      }


      // Active nav link
      let current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 200;
        if (scrollY >= sectionTop) current = section.getAttribute("id") || "";
      });
      navLinks.forEach((a) => {
        a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
      });
    }, { passive: true });
  }

  function setupMobileNav() {
    const toggle = document.getElementById("navToggle");
    const mobileNav = document.getElementById("navMobile");
    if(!toggle || !mobileNav) return;

    toggle.addEventListener("click", () => {
      const isHidden = mobileNav.hidden;
      mobileNav.hidden = !isHidden;
      toggle.classList.toggle("active", isHidden);
    });

    mobileNav.addEventListener("click", (e) => {
      if(e.target.tagName === 'A') {
        mobileNav.hidden = true;
        toggle.classList.remove("active");
      }
    });
  }

  // --- Copy Email ---
  function setupCopyEmail() {
    const btn = document.getElementById("copyEmailBtn");
    if (!btn) return;
    btn.addEventListener("click", async () => {
      const email = "edu.patrick.lima@gmail.com";
      const textEl = btn.querySelector(".contact-text");
      const lang = getCurrentLang();
      const dict = window.translations?.[lang] || window.translations?.[FALLBACK_LANG];
      const originalText = textEl.textContent;

      try {
        await navigator.clipboard.writeText(email);
        textEl.textContent = dict?.contact?.copy?.success || "Copiado! ✓";
        btn.classList.add("success");
      } catch (err) {
        textEl.textContent = dict?.contact?.copy?.error || "Erro";
      } finally {
        setTimeout(() => {
          textEl.textContent = originalText;
          btn.classList.remove("success");
        }, 2000);
      }
    });
  }

  // --- Boot ---
  const initialLang = getCurrentLang();
  applyTranslations(initialLang);
  updateLangToggleUI(initialLang);
  
  const toggles = [document.getElementById("langToggle"), document.getElementById("langToggleMobile")].filter(Boolean);
  toggles.forEach(btn => {
    btn.addEventListener("click", () => {
      const current = getCurrentLang();
      setLang(current === "pt" ? "en" : "pt");
    });
  });

  setupMobileNav();
  setupScroll();
  setupFadeIn();
  initLayoutPositions();
  try { initMorphEngine(); } catch (e) { console.error('Morph engine init error:', e); }
  initSakura();
  setupCopyEmail();

  // Trigger scroll event once to set initial state
  window.dispatchEvent(new Event('scroll'));
  
  // Reveal body after load
  document.body.classList.add('loaded');
})();
