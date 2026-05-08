---
layout: page
permalink: /publications/
title: Publications
description: Publications by research theme and year, in reverse chronological order.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="pub-theme-tabs">
  <button class="pub-theme-tab active" data-theme-filter="all">All</button>
  <button class="pub-theme-tab" data-theme-filter="fairness">Fairness in Computation</button>
  <button class="pub-theme-tab" data-theme-filter="privacy">Privacy</button>
  <button class="pub-theme-tab" data-theme-filter="blockchain">Blockchain</button>
  <button class="pub-theme-tab" data-theme-filter="game-theory">Crypto meets Game Theory</button>
  <button class="pub-theme-tab" data-theme-filter="pq-security">PQ Security</button>
</div>

<div class="publications">

{% bibliography %}

</div>

<style>
.pub-theme-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin: 1.25rem 0 2rem;
}

.pub-theme-tab {
  border: 1px solid var(--global-divider-color);
  background: var(--global-card-bg-color);
  color: var(--global-text-color);
  border-radius: 999px;
  padding: 0.45rem 0.9rem;
  font-size: 0.92rem;
  cursor: pointer;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.pub-theme-tab:hover {
  border-color: var(--global-theme-color);
  color: var(--global-theme-color);
}

.pub-theme-tab.active {
  background: var(--global-theme-color);
  border-color: var(--global-theme-color);
  color: var(--global-hover-text-color);
}

.pub-hidden {
  display: none !important;
}

.pub-theme-badges {
  margin-top: 0.35rem;
  margin-bottom: 0.35rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.pub-theme-badge {
  font-size: 0.72rem;
  padding: 0.15rem 0.45rem;
  border-radius: 999px;
  border: 1px solid var(--global-divider-color);
  color: var(--global-text-color-light);
  background: transparent;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".pub-theme-tab");
  const publications = document.querySelectorAll(".pub-item");

  function getPublicationContainer(pub) {
    return pub.closest("li") || pub;
  }

  function updateYearVisibility() {
    document.querySelectorAll("ol.bibliography").forEach(function (list) {
      const hasVisiblePapers = Array.from(list.children).some(function (item) {
        return !item.classList.contains("pub-hidden");
      });

      list.classList.toggle("pub-hidden", !hasVisiblePapers);

      const heading = list.previousElementSibling;
      if (
        heading &&
        (heading.tagName === "H1" ||
          heading.tagName === "H2" ||
          heading.tagName === "H3" ||
          heading.classList.contains("bibliography"))
      ) {
        heading.classList.toggle("pub-hidden", !hasVisiblePapers);
      }
    });
  }

  function filterPublications(theme) {
    tabs.forEach(function (tab) {
      tab.classList.toggle("active", tab.dataset.themeFilter === theme);
    });

    publications.forEach(function (pub) {
      const themes = (pub.dataset.themes || "")
        .split(",")
        .map(function (themeName) {
          return themeName.trim();
        })
        .filter(Boolean);

      const isVisible = theme === "all" || themes.includes(theme);
      const container = getPublicationContainer(pub);

      container.classList.toggle("pub-hidden", !isVisible);
    });

    updateYearVisibility();
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const theme = tab.dataset.themeFilter;
      filterPublications(theme);

      if (theme === "all") {
        history.replaceState(null, "", "#all");
      } else {
        history.replaceState(null, "", "#" + theme);
      }
    });
  });

  const validThemes = [
    "all",
    "fairness",
    "privacy",
    "blockchain",
    "game-theory",
    "pq-security"
  ];

  const initialTheme = window.location.hash.replace("#", "") || "all";

  filterPublications(
    validThemes.includes(initialTheme) ? initialTheme : "all"
  );
});
</script>
