---
layout: page
title: Research
permalink: /projects/
description:
nav: true
nav_order: 2
---

<!-- pages/projects.md -->

<style>
.research-intro {
  margin-bottom: 1.5rem;
}

.research-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.research-box {
  width: 100%;
  border: 1px solid var(--global-divider-color);
  border-radius: 14px;
  background: var(--global-bg-color);
  padding: 1rem 1.15rem;
  text-align: left;
  cursor: pointer;
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  display: flex;
  align-items: center;
  gap: 1.15rem;
}

.research-box:hover,
.research-box:focus {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  border-color: var(--global-theme-color);
  outline: none;
}

.research-icon-wrap {
  flex: 0 0 128px;
  width: 128px;
  height: 128px;
  border-radius: 9px;
  background: var(--global-code-bg-color);
  border: 1px solid var(--global-divider-color);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
}

.research-icon {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.research-box-body {
  flex: 1;
  min-width: 0;
}

.research-box h3 {
  margin: 0 0 0.35rem 0;
  color: var(--global-theme-color);
  font-size: 1.15rem;
}

.research-box p {
  margin: 0;
  color: var(--global-text-color);
}
.research-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.75rem;
}

.research-tag {
  font-size: 0.78rem;
  border: 1px solid var(--global-divider-color);
  border-radius: 999px;
  padding: 0.15rem 0.55rem;
  color: var(--global-text-color-light);
  background: var(--global-code-bg-color);
}

.research-modal {
  display: none;
  position: fixed;
  z-index: 9999;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  padding: 1.25rem;
  overflow-y: auto;
}

.research-modal.is-open {
  display: flex;
  align-items: center;
  justify-content: center;
}

.research-modal-content {
  width: min(760px, 100%);
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 16px;
  background: var(--global-bg-color);
  color: var(--global-text-color);
  border: 1px solid var(--global-divider-color);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.22);
  padding: 1.5rem;
  position: relative;
}

.research-modal-content h2 {
  margin-top: 0;
  color: var(--global-theme-color);
}

.research-modal-content h4 {
  margin-top: 1.25rem;
  margin-bottom: 0.35rem;
  color: var(--global-theme-color);
}

.research-modal-content ul {
  padding-left: 1.25rem;
}

.research-modal-content li {
  margin-bottom: 0.35rem;
}

.research-close {
  position: absolute;
  top: 0.75rem;
  right: 0.9rem;
  border: none;
  background: transparent;
  color: var(--global-text-color);
  font-size: 1.6rem;
  line-height: 1;
  cursor: pointer;
}

.research-close:hover,
.research-close:focus {
  color: var(--global-theme-color);
  outline: none;
}

@media (max-width: 600px) {
  .research-box {
    padding: 1rem;
  }

  .research-modal {
    padding: 0.75rem;
  }

  .research-modal-content {
    padding: 1.25rem;
  }
}

@media (max-width: 600px) {
  .research-box {
    align-items: flex-start;
    gap: 0.85rem;
    padding: 0.95rem;
  }

  .research-icon-wrap {
    flex: 0 0 64px;
    width: 64px;
    height: 64px;
    border-radius: 10px;
    padding: 0.45rem;
  }

  .research-box h3 {
    font-size: 1.05rem;
  }

  .research-box p {
    font-size: 0.92rem;
  }
}
</style>

<p class="research-intro">
  My research spans cryptographic theory and its applications to decentralized and distributed systems.
  The themes below are broad areas where I am actively interested in supervising students and developing new projects.
</p>

<div class="research-list">

<button class="research-box" type="button" data-modal="fairness-mpc">
  <div class="research-icon-wrap">
    <img class="research-icon" src="{{ '/assets/img/projects/fairness-mpc.png' | relative_url }}" alt="" aria-hidden="true">
  </div>

  <div class="research-box-body">
    <h3>Fairness in Multi-Party Computation</h3>
    <p>
      How can mutually distrustful parties compute together without one party learning the output first and walking away?
    </p>
    <div class="research-tags">
      <span class="research-tag">Timed cryptography</span>
      <span class="research-tag">Cryptographic Fairness</span>
      <span class="research-tag">Efficiency</span>
      <span class="research-tag">Threshold cryptography</span>
    </div>
  </div>
</button>

<button class="research-box" type="button" data-modal="privacy">
  <div class="research-icon-wrap">
    <img class="research-icon" src="{{ '/assets/img/projects/privacy.png' | relative_url }}" alt="" aria-hidden="true">
  </div>

  <div class="research-box-body">
    <h3>Privacy-Preserving Applications</h3>
    <p>
      How can payments, data sharing, and distributed applications reveal as little metadata as possible?
    </p>
    <div class="research-tags">
      <span class="research-tag">Private payments</span>
      <span class="research-tag">Metadata privacy</span>
      <span class="research-tag">Zero-knowledge proofs</span>
      <span class="research-tag">Secure data sharing</span>
    </div>
  </div>
</button>

  <button class="research-box" type="button" data-modal="blockchains">
  <div class="research-icon-wrap">
    <img class="research-icon" src="{{ '/assets/img/projects/blockchains.png' | relative_url }}" alt="" aria-hidden="true">
  </div>
    <div class="research-box-body">
    <h3>Blockchains</h3>
    <p>
      What cryptographic guarantees do decentralized systems really need, and how can we build such efficient solutions? 
    </p>
    <div class="research-tags">
      <span class="research-tag">Atomic payments</span>
      <span class="research-tag">Privacy</span>
      <span class="research-tag">Fair exchange</span>
    </div>
    </div>
  </button>

  <button class="research-box" type="button" data-modal="crypto-game-theory">
  <div class="research-icon-wrap">
    <img class="research-icon" src="{{ '/assets/img/projects/crypto-game-theory.png' | relative_url }}" alt="" aria-hidden="true">
  </div>
    <div class="research-box-body">
    <h3>Cryptography meets Game Theory</h3>
    <p>
      What happens when protocol participants are strategic rather than simply honest or malicious?
    </p>
    <div class="research-tags">
      <span class="research-tag">Incentives</span>
      <span class="research-tag">Rational Security</span>
      <span class="research-tag">Mechanism Design</span>
      <span class="research-tag">Accountability</span>
    </div>
    </div>
  </button>

  <button class="research-box" type="button" data-modal="post-quantum">
  <div class="research-icon-wrap">
    <img class="research-icon" src="{{ '/assets/img/projects/post-quantum.png' | relative_url }}" alt="" aria-hidden="true">
  </div>
    <div class="research-box-body">
    <h3>Post-Quantum Guarantees</h3>
    <p>
      How do we design cryptographic systems that remain secure against quantum-capable adversaries?
    </p>
    <div class="research-tags">
      <span class="research-tag">Lattices</span>
      <span class="research-tag">Post-Quantum</span>
    </div>
    </div>
  </button>

</div>

<div class="research-modal" id="fairness-mpc" aria-hidden="true">
  <div class="research-modal-content" role="dialog" aria-modal="true" aria-labelledby="fairness-mpc-title">
    <button class="research-close" type="button" aria-label="Close">&times;</button>
    <h2 id="fairness-mpc-title">Fairness in Multi-Party Computation</h2>

    <p>
      Multi-party computation allows mutually distrustful parties to compute jointly while keeping their inputs private.
      A central challenge is <em>fairness</em>: preventing one party from learning the output while denying it to others.
    </p>

    <h4>Example questions</h4>
    <ul>
      <li>What does fairness mean when parties may abort in the middle of the computation?</li>
      <li>Can we design protocols where no party can gain meaningful information by quitting early?</li>
      <li>How should fairness change when attackers are reasonably restricted?</li>
      <li>Can blockchain or payment mechanisms help recover fairness that is impossible in the classical model?</li>
    </ul>

    <h4>Useful background</h4>
    <ul>
      <li>Discrete mathematics, probability, and algorithms.</li>
      <li>Basic cryptography: commitments, secret sharing, zero knowledge, and simulation-based security.</li>
      <li>Some familiarity with distributed systems or blockchains is useful, but not required at the start.</li>
    </ul>

    <h4>Project style</h4>
    <p>
      Mostly protocol design and cryptographic proofs. Some projects may involve small prototypes or experiments.
    </p>

    <h4>Starter reading</h4>
    <ul>
      <li>Introductory material on secure multi-party computation and fairness (See Dan Boneh and Ivan Damgård's work).</li>
      <li>Recent papers on fair MPC, timed cryptography, optimistic fairness, or blockchain-assisted fairness.</li>
    </ul>

  </div>
</div>

<div class="research-modal" id="privacy" aria-hidden="true">
  <div class="research-modal-content" role="dialog" aria-modal="true" aria-labelledby="privacy-title">
    <button class="research-close" type="button" aria-label="Close">&times;</button>
    <h2 id="privacy-title">Privacy-Preserving Applications</h2>

    <p>
      Modern applications leak information even when the underlying data is encrypted or hidden.
      A payment, query, lookup, or data-sharing request can reveal sensitive metadata: who interacted with whom,
      whether an action took place, what kind of information was requested, or when a transaction occurred.
      This theme studies cryptographic tools for minimizing such leakage in practical systems.
    </p>

    <h4>Example questions</h4>
    <ul>
      <li>Can payment systems hide not only the payment details, but also whether a particular action occurred?</li>
      <li>How can users query or purchase information from a data provider without revealing what they are interested in?</li>
      <li>What metadata is still leaked by privacy-preserving protocols, and can we formally quantify or reduce it?</li>
      <li>Can we design efficient protocols for private data sharing, private lookups, or privacy-preserving conditional payments?</li>
    </ul>

    <h4>Useful background</h4>
    <ul>
      <li>Basic cryptography.</li>
      <li>Some familiarity with blockchains, payments, or distributed systems is useful but not required at the start.</li>
      <li>Comfort with formal security definitions and adversarial modelling is helpful.</li>
    </ul>

    <h4>Project style</h4>
    <p>
      A mix of protocol design, security definitions, and cryptographic proofs.
    </p>

    <h4>Starter reading</h4>
    <ul>
      <li>Introductory material on zero-knowledge proofs, private information retrieval, anonymous credentials, and secure computation.</li>
    </ul>

  </div>
</div>

<div class="research-modal" id="blockchains" aria-hidden="true">
  <div class="research-modal-content" role="dialog" aria-modal="true" aria-labelledby="blockchains-title">
    <button class="research-close" type="button" aria-label="Close">&times;</button>
    <h2 id="blockchains-title">Blockchains</h2>

    <p>
      Blockchains combine cryptography, distributed systems, incentives, and adversarial behaviour.
      I am interested in the cryptographic foundations of decentralized systems, especially where formal guarantees meet messy deployment realities.
    </p>

    <h4>Example questions</h4>
    <ul>
      <li>What cryptographic assumptions do blockchain applications quietly rely on?</li>
      <li>How can decentralized protocols support fairness, accountability, and privacy?</li>
      <li>Can we design better cryptographic tools for payments, bridges, rollups, or threshold services?</li>
    </ul>

    <h4>Useful background</h4>
    <ul>
      <li>Algorithms, probability, and basic cryptography.</li>
      <li>Distributed systems concepts such as consensus, synchrony, faults, and network assumptions.</li>
    </ul>

    <h4>Project style</h4>
    <p>
      A mix of theory, protocol design, and systems thinking. Some projects are proof-heavy; others may involve modelling, attacks, or implementation.
    </p>

    <h4>Starter reading</h4>
    <ul>
      <li>Foundational papers on Bitcoin, payment protocols, and blockchain security models.</li>
      <li>Papers on fair exchange, payment channels, threshold signatures, bridges, and decentralized custody.</li>
    </ul>

  </div>
</div>

<div class="research-modal" id="crypto-game-theory" aria-hidden="true">
  <div class="research-modal-content" role="dialog" aria-modal="true" aria-labelledby="crypto-game-theory-title">
    <button class="research-close" type="button" aria-label="Close">&times;</button>
    <h2 id="crypto-game-theory-title">Cryptography meets Game Theory</h2>

    <p>
      Classical cryptography often models parties as honest or malicious. Many real systems instead involve participants who are strategic:
      they deviate only when it benefits them. This theme studies cryptographic protocols through an incentive-aware lens.
    </p>

    <h4>Example questions</h4>
    <ul>
      <li>How do security definitions change when adversaries are rational rather than purely malicious?</li>
      <li>Can a protocol be cryptographically secure but economically fragile?</li>
      <li>How should rewards, penalties, deposits, or slashing mechanisms be designed?</li>
      <li>When do incentives help cryptography, and when do they create new attacks?</li>
    </ul>

    <h4>Useful background</h4>
    <ul>
      <li>Mathematical maturity, probability, and comfort with formal models.</li>
      <li>Basic cryptography and some exposure to game theory.</li>
      <li>Interest in mechanism design, distributed systems, or blockchain economics is helpful.</li>
    </ul>

    <h4>Project style</h4>
    <p>
      Model-building and proof-heavy. The main challenge is often defining the right security or equilibrium notion before proving anything.
    </p>

    <h4>Starter reading</h4>
    <ul>
      <li>Basic material on rational cryptography, mechanism design, and game-theoretic security (see Tim Roughgarden and Elaine Shi's notes and work).</li>
      <li>Papers on incentives in blockchains, fair exchange, rational MPC, and accountable protocols.</li>
    </ul>

  </div>
</div>

<div class="research-modal" id="post-quantum" aria-hidden="true">
  <div class="research-modal-content" role="dialog" aria-modal="true" aria-labelledby="post-quantum-title">
    <button class="research-close" type="button" aria-label="Close">&times;</button>
    <h2 id="post-quantum-title">Post-Quantum Cryptography</h2>

    <p>
      Post-quantum cryptography studies cryptographic systems intended to remain secure against quantum-capable adversaries.
      I am interested in both its foundations and its applications to decentralized systems, cloud security, and long-term protection.
    </p>

    <h4>Example questions</h4>
    <ul>
      <li>Which cryptographic tools need to change in a post-quantum world?</li>
      <li>How can post-quantum assumptions be used in protocols beyond encryption and signatures?</li>
      <li>How to build efficient algorithms with advacned cryptographic functionalities?</li>
    </ul>

    <h4>Useful background</h4>
    <ul>
      <li>Linear algebra, algorithms, probability, and discrete mathematics.</li>
      <li>Some exposure to lattices, coding theory, or computational assumptions is useful but can be learned along the way.</li>
    </ul>

    <h4>Project style</h4>
    <p>
      Usually proof-heavy and mathematically oriented, with possible implementation or performance-analysis components.
    </p>

    <h4>Starter reading</h4>
    <ul>
      <li>Introductory material on lattice-based cryptography (see Chris Peikert's survey and notes) and post-quantum signatures/encryption.</li>
      <li>Papers on post-quantum protocol design, threshold post-quantum cryptography, and cryptographic migration.</li>
    </ul>

  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll(".research-box");
  const modals = document.querySelectorAll(".research-modal");
  let lastFocusedElement = null;

  function openModal(modal) {
    lastFocusedElement = document.activeElement;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    const closeButton = modal.querySelector(".research-close");
    if (closeButton) {
      closeButton.focus();
    }
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  modalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = button.getAttribute("data-modal");
      const modal = document.getElementById(modalId);
      if (modal) {
        openModal(modal);
      }
    });
  });

  modals.forEach((modal) => {
    const closeButton = modal.querySelector(".research-close");

    if (closeButton) {
      closeButton.addEventListener("click", function () {
        closeModal(modal);
      });
    }

    modal.addEventListener("click", function (event) {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      const openModalElement = document.querySelector(".research-modal.is-open");
      if (openModalElement) {
        closeModal(openModalElement);
      }
    }
  });
});
</script>
