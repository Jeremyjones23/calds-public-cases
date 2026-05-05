(function () {
  const moneyCards = Array.from(document.querySelectorAll(".receipt-card"));
  const filterTabs = Array.from(document.querySelectorAll("[data-money-filter]"));
  const receiptCount = document.querySelector("#receiptCount");
  const emptyMoney = document.querySelector(".empty-money");
  const sourceSearch = document.querySelector("#sourceSearch");
  const sourceRows = Array.from(document.querySelectorAll(".source-table tbody tr"));

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
      const row = document.querySelector(`[data-source-id="${CSS.escape(sourceId)}"]`);
      if (row) {
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        row.classList.add("source-highlight");
        setTimeout(() => row.classList.remove("source-highlight"), 1800);
      }
    });
  });

  const revealTargets = document.querySelectorAll(".reveal, .chapter, .recent-source, .tip-note, .public-service");
  revealTargets.forEach((node) => node.classList.add("reveal"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
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

  window.addEventListener("scroll", () => {
    if (reduceMotion) return;
    const offset = Math.min(window.scrollY * 0.04, 32);
    document.documentElement.style.setProperty("--paper-drift", `${offset}px`);
  }, { passive: true });

  setMoneyFilter("all");
})();
