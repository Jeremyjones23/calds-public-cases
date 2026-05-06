(function () {
  const moneyCards = Array.from(document.querySelectorAll(".receipt-card"));
  const filterTabs = Array.from(document.querySelectorAll("[data-money-filter]"));
  const receiptCount = document.querySelector("#receiptCount");
  const emptyMoney = document.querySelector(".empty-money");
  const sourceSearch = document.querySelector("#sourceSearch");
  const sourceRows = Array.from(document.querySelectorAll(".source-table tbody tr"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setMoneyFilter(value) {
    let visibleCount = 0;
    moneyCards.forEach((card) => {
      const visible = value === "all" || card.dataset.case === value;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    filterTabs.forEach((tab) => {
      tab.classList.toggle("is-active", tab.dataset.moneyFilter === value);
      tab.setAttribute("aria-pressed", String(tab.dataset.moneyFilter === value));
    });
    if (receiptCount) receiptCount.textContent = String(visibleCount);
    if (emptyMoney) emptyMoney.hidden = visibleCount !== 0;
  }

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => setMoneyFilter(tab.dataset.moneyFilter || "all"));
  });

  if (sourceSearch) {
    sourceSearch.addEventListener("input", () => {
      const query = sourceSearch.value.trim().toLowerCase();
      sourceRows.forEach((row) => {
        row.hidden = query.length > 0 && !row.textContent.toLowerCase().includes(query);
      });
    });
  }

  document.querySelectorAll(".source-jump").forEach((button) => {
    button.addEventListener("click", () => {
      const sourceId = button.dataset.source;
      if (!sourceId) return;
      if (sourceSearch) {
        sourceSearch.value = "";
        sourceRows.forEach((sourceRow) => {
          sourceRow.hidden = false;
        });
      }
      const row = document.querySelector(`[data-source-id="${CSS.escape(sourceId)}"]`);
      if (row) {
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        row.classList.add("source-highlight");
        setTimeout(() => row.classList.remove("source-highlight"), 1800);
      }
    });
  });

  const revealTargets = document.querySelectorAll(".reveal, .chapter, .recent-source, .tip-note, .public-service, .source-cabinet, .receipt-machine");
  revealTargets.forEach((node) => node.classList.add("reveal"));
  if ("IntersectionObserver" in window && !reduceMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealTargets.forEach((node) => observer.observe(node));
  } else {
    revealTargets.forEach((node) => node.classList.add("in-view"));
  }

  function setScrollState() {
    if (reduceMotion) return;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
    const offset = Math.min(window.scrollY * 0.04, 42);
    document.documentElement.style.setProperty("--paper-drift", `${offset}px`);
    document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
  }

  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(setScrollState);
  }, { passive: true });
  window.addEventListener("resize", setScrollState);

  document.querySelectorAll(".case-ticket, .case-panel, .finding-card, .mini-receipt, .receipt-card").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      if (reduceMotion) return;
      const rect = card.getBoundingClientRect();
      const localX = (event.clientX - rect.left) / rect.width;
      const localY = (event.clientY - rect.top) / rect.height;
      const x = (localX - 0.5) * 8;
      const y = (localY - 0.5) * -8;
      card.style.setProperty("--mx", `${Math.round(localX * 100)}%`);
      card.style.setProperty("--my", `${Math.round(localY * 100)}%`);
      card.style.transform = `translateY(-4px) rotateX(${y}deg) rotateY(${x}deg)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
      card.style.removeProperty("--mx");
      card.style.removeProperty("--my");
    });
  });

  setMoneyFilter("all");
  setScrollState();
})();
