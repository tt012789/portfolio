/**
 * ALEX RIVERA PORTFOLIO — CLIENT-SIDE LOGIC & INTERACTION ENGINE
 * Accessible, zero-dependency, ultra-fast vanilla JavaScript
 */

(function () {
  "use strict";

  // ---------------------------------------------------------------------------
  // 1. Data Store: Project Case Studies
  // ---------------------------------------------------------------------------
  const CASE_STUDIES = {
    peakmetrics: {
      category: "Full-Stack SaaS Product",
      title: "PeakMetrics: Privacy-First Real-Time Web Telemetry",
      client: "PeakMetrics Software (Self-Initiated SaaS)",
      timeline: "5 Weeks",
      role: "Lead Full-Stack Developer",
      heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
      problem:
        "Modern website owners face mounting privacy regulations (GDPR/CCPA) and heavy, cookie-laden tracking scripts (like Google Analytics) that slow down page loads by up to 1.4 seconds and trigger aggressive ad-blockers.",
      architecture:
        "Engineered an edge-ingestion pipeline with Next.js 15 App Router and ClickHouse columnar storage. Event payloads are batched and ingested via a lightweight 900-byte tracking snippet. Built aggregated materialized views in PostgreSQL for instant dashboard queries, completely eliminating individual tracking cookies.",
      results: [
        "Dashboard query latency reduced to under 180ms for datasets exceeding 1.2M rows.",
        "Ingestion client is 92% smaller than traditional Google Analytics script.",
        "Passed automated load test simulating 10,000 concurrent pageview pings without a single dropped packet."
      ],
      tech: ["Next.js 15", "TypeScript", "ClickHouse", "PostgreSQL", "TailwindCSS", "Vercel Edge"],
      liveLink: "https://example.com/peakmetrics",
      codeLink: "https://github.com/example/peakmetrics"
    },
    artisanbake: {
      category: "Direct-to-Consumer Client Store",
      title: "Artisan Bakehouse: Custom E-Commerce & Pickup Scheduler",
      client: "Artisan Bakehouse Co.",
      timeline: "3 Weeks",
      role: "Solo Freelance Web Engineer",
      heroImg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
      problem:
        "The client was losing thousands in revenue to 30% delivery app commissions and had no way for local customers to preorder daily limited batches of artisanal sourdough and pastries without phone bottlenecks.",
      architecture:
        "Built a headless React storefront powered by a Node.js API with Stripe Payment Intents. Designed an automated inventory lock engine backed by Redis that expires unpaid reservation carts in 10 minutes to protect perishable inventory.",
      results: [
        "Generated +34% direct online sales in the initial 30 days post-launch.",
        "Achieved a 99/100 Mobile Lighthouse score with instant touch response.",
        "Handled holiday launch surge with 0 checkout drops or inventory oversell glitches."
      ],
      tech: ["React", "Node.js", "Express", "Stripe API", "Redis", "SendGrid"],
      liveLink: "https://example.com/artisanbake",
      codeLink: "https://github.com/example/artisanbake"
    },
    swiftform: {
      category: "Open-Source Developer Tool",
      title: "SwiftForm: Zero-Dependency Form State & Validation Engine",
      client: "Open Source Community (npm)",
      timeline: "Ongoing",
      role: "Creator & Maintainer",
      heroImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=80",
      problem:
        "Existing React form libraries are either bloated with unnecessary dependencies or cause excessive re-renders across parent component trees on every keystroke, hurting mobile performance.",
      architecture:
        "Developed a headless state machine utilizing subscription-based state slices and proxy observation. Created first-class schema adapters for Zod and Valibot, ensuring 100% strict TypeScript typing and zero external runtime dependencies.",
      results: [
        "Surpassed 450+ GitHub Stars and 8,200+ monthly npm package downloads.",
        "Bundle size weighs in at only 1.8KB gzipped (85% smaller than competitors).",
        "Comprehensive test suite with 100% statement, branch, and function coverage in Vitest."
      ],
      tech: ["TypeScript", "Vitest", "npm Registry", "GitHub Actions CI", "Zero Dependencies"],
      liveLink: "https://npmjs.com/package/swiftform",
      codeLink: "https://github.com/example/swiftform"
    },
    medassist: {
      category: "HealthTech / Hackathon Winner",
      title: "MedAssist Clinic Patient Intake & Triage Portal",
      client: "Civic Health Hackathon (1st Place Winner)",
      timeline: "36-Hour Sprint + 1 Week Polish",
      role: "Full-Stack Team Lead",
      heroImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
      problem:
        "Free community healthcare clinics experience severe lobby congestion and multilingual barriers, causing average patient triage wait times to exceed 45 minutes.",
      architecture:
        "Constructed a Progressive Web App (PWA) supporting English, Spanish, and Mandarin with complete offline capability via Service Workers and IndexedDB. Integrated a lightweight triage prioritization algorithm based on standard emergency acuity ratings.",
      results: [
        "Awarded 1st Prize overall among 42 competing engineering teams.",
        "Field-tested at a community health fair, cutting patient intake time by 45%.",
        "Fully compliant with WCAG 2.1 AAA accessibility for screen readers and high contrast."
      ],
      tech: ["React PWA", "Service Workers", "IndexedDB", "FastAPI (Python)", "WCAG 2.1 AAA"],
      liveLink: "https://example.com/medassist",
      codeLink: "https://github.com/example/medassist"
    },
    solissolar: {
      category: "Client High-Conversion Landing Page",
      title: "Solis Renewable Energy: Interactive Savings Funnel",
      client: "Solis Clean Energy Inc.",
      timeline: "2 Weeks",
      role: "Frontend Engineer & Conversion Specialist",
      heroImg: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1000&q=80",
      problem:
        "The client was experiencing a low 2.1% form conversion rate on their generic WordPress landing page, with prospective residential clients dropping off due to long, tedious forms.",
      architecture:
        "Replaced the static page with a high-speed, interactive single-page application using pure HTML5, CSS3, and vanilla JavaScript. Built a multi-step solar savings calculator that dynamically estimates monthly utility reduction before asking for contact info.",
      results: [
        "Qualified lead conversion increased by +205% (from 2.1% to 6.4%).",
        "Mobile bounce rate decreased by 38% thanks to sub-second initial contentful paint.",
        "Reduced hosting overhead to $0/month by deploying statically to Vercel."
      ],
      tech: ["Semantic HTML5", "Modern CSS3", "Vanilla JavaScript", "Formspree API"],
      liveLink: "https://example.com/solissolar",
      codeLink: "https://github.com/example/solissolar"
    },
    gitpulse: {
      category: "Developer Productivity CLI",
      title: "GitPulse: PR Velocity & Team Collaboration CLI",
      client: "Open Source Tool",
      timeline: "3 Weeks",
      role: "Sole Creator",
      heroImg: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1000&q=80",
      problem:
        "Distributed and student developer teams often struggle with review bottlenecks, where pull requests sit unreviewed for days without visibility into where delays occur.",
      architecture:
        "Created an interactive Node.js CLI tool that queries the GitHub GraphQL API, parses git commit graphs, and produces visual terminal charts and exportable Markdown health reports.",
      results: [
        "Adopted by 14 collegiate teams and independent development agencies.",
        "Helped participating teams reduce average PR review wait times from 48h to under 14h.",
        "Published as a global npm binary with automated semantic versioning."
      ],
      tech: ["Node.js", "GitHub GraphQL API", "Commander.js", "Chalk", "Chart.js"],
      liveLink: "https://github.com/example/gitpulse",
      codeLink: "https://github.com/example/gitpulse"
    }
  };

  // ---------------------------------------------------------------------------
  // 2. DOM Elements Selection
  // ---------------------------------------------------------------------------
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("theme-toggle");
  const mobileToggleBtn = document.getElementById("mobile-toggle");
  const mobileNav = document.getElementById("mobile-nav");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  // Perspective Switcher
  const perspectiveTabs = document.querySelectorAll(".perspective-tabs .tab-btn");
  const paneInternship = document.getElementById("pane-internship");
  const paneFreelance = document.getElementById("pane-freelance");

  // Project Filtering
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  // Case Study Modal
  const caseStudyDialog = document.getElementById("case-study-dialog");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalHeroImg = document.getElementById("modal-hero-img");
  const modalProblem = document.getElementById("modal-problem");
  const modalArchitecture = document.getElementById("modal-architecture");
  const modalResultsList = document.getElementById("modal-results-list");
  const modalClientVal = document.getElementById("modal-client-val");
  const modalTimelineVal = document.getElementById("modal-timeline-val");
  const modalRoleVal = document.getElementById("modal-role-val");
  const modalTechList = document.getElementById("modal-tech-list");
  const modalLiveLink = document.getElementById("modal-live-link");
  const modalCodeLink = document.getElementById("modal-code-link");

  // Contact Form & Chips
  const contactForm = document.getElementById("contact-form");
  const typeChips = document.querySelectorAll(".chips-container .chip");
  const projectTypeInput = document.getElementById("project_type_input");
  const submitBtn = document.getElementById("submit-btn");
  const formSuccess = document.getElementById("form-success");
  const sendAnotherBtn = document.getElementById("send-another-btn");

  // Customizer
  const customizerOpenBtn = document.getElementById("customizer-open-btn");
  const mobileCustomizeBtn = document.getElementById("mobile-customize-btn");
  const customizerDialog = document.getElementById("customizer-dialog");
  const customizerCloseBtn = document.getElementById("customizer-close-btn");
  const customizerForm = document.getElementById("customizer-form");
  const customizerResetBtn = document.getElementById("customizer-reset-btn");
  const customizerExportBtn = document.getElementById("customizer-export-btn");

  // Toast & Clocks
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toast-message");
  const liveClock = document.getElementById("live-clock");
  const currentYearSpan = document.getElementById("current-year");

  // Copy Email Buttons
  const quickCopyEmail = document.getElementById("quick-copy-email");
  const copyEmailBtn = document.getElementById("copy-email-btn");

  // ---------------------------------------------------------------------------
  // 3. Theme Toggle & Persistence (Default: Luxury Obsidian Dark)
  // ---------------------------------------------------------------------------
  function initializeTheme() {
    const savedTheme = localStorage.getItem("ar_theme");
    if (savedTheme) {
      htmlEl.setAttribute("data-theme", savedTheme);
    } else {
      // Default to luxury obsidian dark for 3D glass aesthetic
      htmlEl.setAttribute("data-theme", "dark");
    }
  }

  function toggleTheme() {
    const currentTheme = htmlEl.getAttribute("data-theme") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";
    htmlEl.setAttribute("data-theme", nextTheme);
    localStorage.setItem("ar_theme", nextTheme);
    showToast(`Switched to ${nextTheme} theme`);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", toggleTheme);
  }

  // ---------------------------------------------------------------------------
  // 4. Mobile Navigation Drawer
  // ---------------------------------------------------------------------------
  function toggleMobileNav() {
    const isExpanded = mobileToggleBtn.getAttribute("aria-expanded") === "true";
    mobileToggleBtn.setAttribute("aria-expanded", String(!isExpanded));
    if (!isExpanded) {
      mobileNav.removeAttribute("hidden");
    } else {
      mobileNav.setAttribute("hidden", "true");
    }
  }

  function closeMobileNav() {
    mobileToggleBtn.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("hidden", "true");
  }

  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener("click", toggleMobileNav);
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener("click", closeMobileNav);
  });

  // ---------------------------------------------------------------------------
  // 5. Audience Perspective Switcher (Recruiter vs Freelance Client)
  // ---------------------------------------------------------------------------
  perspectiveTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      perspectiveTabs.forEach(function (t) {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });

      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");

      const mode = tab.getAttribute("data-perspective");
      if (mode === "internship") {
        paneInternship.removeAttribute("hidden");
        paneInternship.classList.add("active");
        paneFreelance.setAttribute("hidden", "true");
        paneFreelance.classList.remove("active");
      } else {
        paneFreelance.removeAttribute("hidden");
        paneFreelance.classList.add("active");
        paneInternship.setAttribute("hidden", "true");
        paneInternship.classList.remove("active");
      }
    });
  });

  // ---------------------------------------------------------------------------
  // 6. Project Category Filtering
  // ---------------------------------------------------------------------------
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(function (card) {
        const cardCategory = card.getAttribute("data-category");
        if (filterValue === "all" || cardCategory === filterValue) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ---------------------------------------------------------------------------
  // 7. Case Study Modal Engine
  // ---------------------------------------------------------------------------
  function openCaseStudyModal(projectId) {
    const study = CASE_STUDIES[projectId];
    if (!study || !caseStudyDialog) return;

    modalCategory.textContent = study.category;
    modalTitle.textContent = study.title;
    modalHeroImg.src = study.heroImg;
    modalHeroImg.alt = study.title;
    modalProblem.textContent = study.problem;
    modalArchitecture.textContent = study.architecture;
    modalClientVal.textContent = study.client;
    modalTimelineVal.textContent = study.timeline;
    modalRoleVal.textContent = study.role;

    // Populate Results
    modalResultsList.innerHTML = "";
    study.results.forEach(function (res) {
      const li = document.createElement("li");
      li.textContent = res;
      modalResultsList.appendChild(li);
    });

    // Populate Tech Stack
    modalTechList.innerHTML = "";
    study.tech.forEach(function (tech) {
      const span = document.createElement("span");
      span.className = "tech-tag";
      span.textContent = tech;
      modalTechList.appendChild(span);
    });

    // Populate Links
    modalLiveLink.href = study.liveLink;
    modalCodeLink.href = study.codeLink;

    if (typeof caseStudyDialog.showModal === "function") {
      caseStudyDialog.showModal();
    } else {
      caseStudyDialog.setAttribute("open", "true");
    }
  }

  function closeCaseStudyModal() {
    if (caseStudyDialog) {
      if (typeof caseStudyDialog.close === "function") {
        caseStudyDialog.close();
      } else {
        caseStudyDialog.removeAttribute("open");
      }
    }
  }

  document.querySelectorAll("[data-modal]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const projectId = btn.getAttribute("data-modal");
      openCaseStudyModal(projectId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeCaseStudyModal);
  }

  // Backdrop click dismiss for dialogs
  [caseStudyDialog, customizerDialog].forEach(function (dialog) {
    if (dialog) {
      dialog.addEventListener("click", function (e) {
        if (e.target === dialog) {
          dialog.close();
          return;
        }
        const rect = dialog.getBoundingClientRect();
        const isInDialog =
          rect.top <= e.clientY &&
          e.clientY <= rect.top + rect.height &&
          rect.left <= e.clientX &&
          e.clientX <= rect.left + rect.width;
        if (!isInDialog) {
          dialog.close();
        }
      });
    }
  });

  // ---------------------------------------------------------------------------
  // 8. Contact Form Handling & Validation
  // ---------------------------------------------------------------------------
  // Project type chips
  typeChips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      typeChips.forEach(function (c) {
        c.classList.remove("active");
        c.setAttribute("aria-checked", "false");
      });
      chip.classList.add("active");
      chip.setAttribute("aria-checked", "true");
      projectTypeInput.value = chip.getAttribute("data-type");
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("sender_name");
      const emailInput = document.getElementById("sender_email");
      const messageInput = document.getElementById("sender_message");

      const nameErr = document.getElementById("name-error");
      const emailErr = document.getElementById("email-error");
      const messageErr = document.getElementById("message-error");

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameErr.textContent = "Please provide your name";
        nameErr.classList.add("visible");
        isValid = false;
      } else {
        nameErr.textContent = "";
        nameErr.classList.remove("visible");
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        emailErr.textContent = "Please enter a valid email address";
        emailErr.classList.add("visible");
        isValid = false;
      } else {
        emailErr.textContent = "";
        emailErr.classList.remove("visible");
      }

      // Validate Message
      if (messageInput.value.trim().length < 10) {
        messageErr.textContent = "Please provide at least a short project or role description (10+ characters)";
        messageErr.classList.add("visible");
        isValid = false;
      } else {
        messageErr.textContent = "";
        messageErr.classList.remove("visible");
      }

      if (!isValid) return;

      // Simulate sending
      const spinner = submitBtn.querySelector(".submit-spinner");
      const submitText = submitBtn.querySelector(".submit-text");
      submitBtn.disabled = true;
      if (spinner) spinner.removeAttribute("hidden");
      if (submitText) submitText.textContent = "Sending...";

      setTimeout(function () {
        submitBtn.disabled = false;
        if (spinner) spinner.setAttribute("hidden", "true");
        if (submitText) submitText.textContent = "Send Message";

        contactForm.style.display = "none";
        formSuccess.removeAttribute("hidden");
        showToast("Message sent successfully!");
      }, 850);
    });
  }

  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener("click", function () {
      formSuccess.setAttribute("hidden", "true");
      contactForm.reset();
      contactForm.style.display = "block";
    });
  }

  // ---------------------------------------------------------------------------
  // 9. Toast Notifications & Copy to Clipboard
  // ---------------------------------------------------------------------------
  let toastTimer = null;
  function showToast(message) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = message;
    toast.removeAttribute("hidden");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toast.setAttribute("hidden", "true");
    }, 3200);
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast(successMsg || "Copied to clipboard!");
      }).catch(function () {
        fallbackCopy(text, successMsg);
      });
    } else {
      fallbackCopy(text, successMsg);
    }
  }

  function fallbackCopy(text, successMsg) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      showToast(successMsg || "Copied to clipboard!");
    } catch (err) {
      showToast("Could not copy automatically. Please copy manually.");
    }
    document.body.removeChild(textArea);
  }

  if (quickCopyEmail) {
    quickCopyEmail.addEventListener("click", function () {
      const email = quickCopyEmail.getAttribute("data-email") || "alex.rivera.dev@example.com";
      copyTextToClipboard(email, `Email copied: ${email}`);
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", function () {
      const emailLink = document.getElementById("contact-email-link");
      const email = emailLink ? emailLink.textContent.trim() : "alex.rivera.dev@example.com";
      copyTextToClipboard(email, `Email copied: ${email}`);
    });
  }

  // ---------------------------------------------------------------------------
  // 10. Live UTC Clock & Dynamic Year
  // ---------------------------------------------------------------------------
  function updateLiveClock() {
    if (!liveClock) return;
    const now = new Date();
    // UTC-5 offset simulation (EST / Standard Time)
    const utcHours = now.getUTCHours() - 5;
    const adjustedHours = (utcHours + 24) % 24;
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const seconds = String(now.getUTCSeconds()).padStart(2, "0");
    const ampm = adjustedHours >= 12 ? "PM" : "AM";
    const formattedHours = adjustedHours % 12 || 12;

    liveClock.textContent = `${formattedHours}:${minutes}:${seconds} ${ampm}`;
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  if (currentYearSpan) {
    currentYearSpan.textContent = String(new Date().getFullYear());
  }

  // ---------------------------------------------------------------------------
  // 11. Profile Customizer for Teenlancers / Freelancers
  // ---------------------------------------------------------------------------
  const DEFAULT_PROFILE = {
    name: "Alex Rivera",
    role: "Full-Stack & Frontend Engineer",
    headline: "I build fast, reliable web applications that turn ideas into working software.",
    email: "alex.rivera.dev@example.com",
    status: "Available for Summer/Fall 2026 Internships & Freelance Projects",
    location: "Remote / Global (UTC-5)"
  };

  function loadSavedProfile() {
    const saved = localStorage.getItem("ar_profile_custom");
    if (!saved) return;
    try {
      const data = JSON.parse(saved);
      applyProfileToPage(data);
    } catch (e) {
      console.warn("Failed to load saved profile", e);
    }
  }

  function applyProfileToPage(data) {
    if (data.name) {
      document.querySelectorAll(".brand-name, .profile-name").forEach(function (el) {
        el.textContent = data.name;
      });
      const monogram = data.name
        .split(" ")
        .map(function (w) { return w[0]; })
        .join("")
        .substring(0, 2)
        .toUpperCase();
      document.querySelectorAll(".brand-monogram").forEach(function (el) {
        el.textContent = monogram;
      });
    }

    if (data.role) {
      document.querySelectorAll(".brand-title, .profile-role").forEach(function (el) {
        el.textContent = data.role;
      });
    }

    if (data.headline) {
      const headlineEl = document.querySelector(".hero-headline");
      if (headlineEl) headlineEl.textContent = data.headline;
    }

    if (data.email) {
      const contactEmailLink = document.getElementById("contact-email-link");
      if (contactEmailLink) {
        contactEmailLink.textContent = data.email;
        contactEmailLink.href = "mailto:" + data.email;
      }
      if (quickCopyEmail) {
        quickCopyEmail.setAttribute("data-email", data.email);
      }
    }

    if (data.status) {
      const statusEl = document.querySelector(".status-text");
      if (statusEl) {
        statusEl.innerHTML = `<strong>Available for Hire:</strong> ${data.status}`;
      }
    }

    if (data.location) {
      const locEl = document.querySelector(".profile-location");
      if (locEl) {
        locEl.innerHTML = `
          <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          ${data.location}
        `;
      }
    }
  }

  function openCustomizer() {
    if (!customizerDialog) return;
    closeMobileNav();
    customizerDialog.showModal();
  }

  function closeCustomizer() {
    if (customizerDialog) customizerDialog.close();
  }

  if (customizerOpenBtn) customizerOpenBtn.addEventListener("click", openCustomizer);
  if (mobileCustomizeBtn) mobileCustomizeBtn.addEventListener("click", openCustomizer);
  if (customizerCloseBtn) customizerCloseBtn.addEventListener("click", closeCustomizer);

  if (customizerForm) {
    customizerForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const customData = {
        name: document.getElementById("custom_name").value.trim(),
        role: document.getElementById("custom_role").value.trim(),
        headline: document.getElementById("custom_headline").value.trim(),
        email: document.getElementById("custom_email").value.trim(),
        status: document.getElementById("custom_status").value.trim(),
        location: document.getElementById("custom_location").value.trim()
      };

      localStorage.setItem("ar_profile_custom", JSON.stringify(customData));
      applyProfileToPage(customData);
      closeCustomizer();
      showToast("Portfolio profile updated successfully!");
    });
  }

  if (customizerResetBtn) {
    customizerResetBtn.addEventListener("click", function () {
      localStorage.removeItem("ar_profile_custom");
      applyProfileToPage(DEFAULT_PROFILE);
      document.getElementById("custom_name").value = DEFAULT_PROFILE.name;
      document.getElementById("custom_role").value = DEFAULT_PROFILE.role;
      document.getElementById("custom_headline").value = DEFAULT_PROFILE.headline;
      document.getElementById("custom_email").value = DEFAULT_PROFILE.email;
      document.getElementById("custom_status").value = DEFAULT_PROFILE.status;
      document.getElementById("custom_location").value = DEFAULT_PROFILE.location;
      showToast("Reset to default profile");
    });
  }

  if (customizerExportBtn) {
    customizerExportBtn.addEventListener("click", function () {
      const customData = {
        name: document.getElementById("custom_name").value.trim(),
        role: document.getElementById("custom_role").value.trim(),
        headline: document.getElementById("custom_headline").value.trim(),
        email: document.getElementById("custom_email").value.trim(),
        status: document.getElementById("custom_status").value.trim(),
        location: document.getElementById("custom_location").value.trim()
      };

      const jsonStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customData, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", jsonStr);
      downloadAnchor.setAttribute("download", "portfolio-config.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
      showToast("Exported configuration JSON!");
    });
  }

  // ---------------------------------------------------------------------------
  // 12. Active Navigation Scroll Spy
  // ---------------------------------------------------------------------------
  function initializeNavScrollSpy() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".desktop-nav .nav-link, .mobile-link");

    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            navLinks.forEach(function (link) {
              const href = link.getAttribute("href");
              if (href === "#" + id) {
                link.classList.add("active");
              } else if (href && href.startsWith("#")) {
                const targetSec = document.getElementById(href.slice(1));
                if (targetSec && href !== "#" + id) {
                  link.classList.remove("active");
                }
              }
            });
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sections.forEach(function (sec) {
      observer.observe(sec);
    });
  }

  // ---------------------------------------------------------------------------
  // 13. Interactive 3D Card Tilt & Specular Physics
  // ---------------------------------------------------------------------------
  function initialize3DCardTilt() {
    // Respect user's motion preferences and touch devices
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;

    const cards = document.querySelectorAll("[data-tilt]");
    cards.forEach(function (card) {
      let isHovered = false;

      card.addEventListener("mouseenter", function () {
        isHovered = true;
        card.style.transition = "transform 0.08s ease-out, box-shadow 0.25s ease, border-color 0.25s ease";
      });

      card.addEventListener("mousemove", function (e) {
        if (!isHovered) return;
        const rect = card.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate rotation angles (-7deg to +7deg)
        const rotateX = ((mouseY / height) - 0.5) * -14;
        const rotateY = ((mouseX / width) - 0.5) * 14;

        card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-6px)`;

        // Update spotlight position custom properties for specular reflections
        const xPercent = (mouseX / width) * 100;
        const yPercent = (mouseY / height) * 100;
        card.style.setProperty("--mouse-x", `${xPercent.toFixed(1)}%`);
        card.style.setProperty("--mouse-y", `${yPercent.toFixed(1)}%`);
      });

      card.addEventListener("mouseleave", function () {
        isHovered = false;
        card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s ease";
        card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
      });
    });
  }

  // ---------------------------------------------------------------------------
  // 14. Initialization
  // ---------------------------------------------------------------------------
  initializeTheme();
  loadSavedProfile();
  initializeNavScrollSpy();
  initialize3DCardTilt();
})();
