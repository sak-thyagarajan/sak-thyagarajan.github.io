---
layout: page
title: Projects
permalink: /projects/
description: Research themes and ongoing projects.
nav: true
nav_order: 2
---

<!-- pages/projects.md -->

<style>
.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  align-items: start;
}

.project-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 14px;
  background: var(--global-bg-color);
  overflow: hidden;
  text-align: center;
  align-self: start;
  height: fit-content;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

.project-image-wrapper {
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-code-bg-color);
}

.project-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.project-card details {
  border-top: 1px solid var(--global-divider-color);
}

.project-card summary {
  cursor: pointer;
  list-style: none;
  padding: 1rem;
  font-weight: 600;
  color: var(--global-theme-color);
}

.project-card summary::-webkit-details-marker {
  display: none;
}

.project-card summary::after {
  content: " ▾";
  font-size: 0.85rem;
}

.project-card details[open] summary::after {
  content: " ▴";
}

.project-description {
  padding: 0 1rem 1.25rem 1rem;
  font-size: 0.95rem;
  text-align: left;
  color: var(--global-text-color);
}

.project-description p {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .project-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="project-grid">

  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="{{ '/assets/img/projects/fairness-mpc.png' | relative_url }}" alt="Fairness in Multi-Party Computations">
    </div>
    <details>
      <summary>Fairness in Multi-Party Computations</summary>
      <div class="project-description">
        <p>
          Multi-party computation allows mutually distrustful parties to compute jointly while keeping their inputs private.
          This theme studies fairness: how to prevent one party from learning the output while denying it to others.
        </p>
      </div>
    </details>
  </div>

  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="{{ '/assets/img/projects/blockchains.png' | relative_url }}" alt="Blockchains">
    </div>
    <details>
      <summary>Blockchains</summary>
      <div class="project-description">
        <p>
          This theme studies the cryptographic foundations of decentralized systems, with an emphasis on security, fairness, privacy, accountability, and the assumptions underlying blockchain-based applications.
        </p>
      </div>
    </details>
  </div>

  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="{{ '/assets/img/projects/crypto-game-theory.png' | relative_url }}" alt="Cryptography meets Game Theory">
    </div>
    <details>
      <summary>Cryptography meets Game Theory</summary>
      <div class="project-description">
        <p>
          Many real systems involve participants who are strategic rather than simply honest or malicious.
          This theme explores cryptographic protocols through a game-theoretic lens, studying how incentives and rational behaviour affect security guarantees.
        </p>
      </div>
    </details>
  </div>

  <div class="project-card">
    <div class="project-image-wrapper">
      <img class="project-image" src="{{ '/assets/img/projects/post-quantum.png' | relative_url }}" alt="Post-quantum Cryptography">
    </div>
    <details>
      <summary>Post-quantum Cryptography</summary>
      <div class="project-description">
        <p>
          Post-quantum cryptography studies cryptographic systems intended to remain secure against quantum-capable adversaries.
          My interest is in its foundations and applications to decentralized systems, cloud security, and long-term cryptographic protection.
        </p>
      </div>
    </details>
  </div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const projectDetails = document.querySelectorAll(".project-card details");

  projectDetails.forEach((detail) => {
    detail.addEventListener("toggle", function () {
      if (detail.open) {
        projectDetails.forEach((otherDetail) => {
          if (otherDetail !== detail) {
            otherDetail.open = false;
          }
        });
      }
    });
  });
});
</script>