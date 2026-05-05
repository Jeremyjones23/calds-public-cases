(function () {
  const caseFilter = document.querySelector("#caseFilter");
  const moneyCards = Array.from(document.querySelectorAll(".money-card"));
  const sourceSearch = document.querySelector("#sourceSearch");
  const sourceRows = Array.from(document.querySelectorAll(".source-table tbody tr"));

  if (caseFilter) {
    caseFilter.addEventListener("change", () => {
      const selected = caseFilter.value;
      moneyCards.forEach((card) => {
        const visible = selected === "all" || card.dataset.case === selected;
        card.hidden = !visible;
      });
    });
  }

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
      const row = document.querySelector(`[data-source-id="${CSS.escape(sourceId)}"]`);
      if (row) {
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        row.classList.add("source-highlight");
        setTimeout(() => row.classList.remove("source-highlight"), 1600);
      }
    });
  });

  const revealTargets = document.querySelectorAll(".story-section, .case-panel, .money-card, .entity-card");
  revealTargets.forEach((node) => node.classList.add("reveal"));
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
})();
