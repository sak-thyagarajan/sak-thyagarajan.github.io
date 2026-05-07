---
layout: page
title: Talks
permalink: /talks/
description:
nav: true
nav_order: 5
---

<!-- pages/talks.md -->

<style>
.talks-section {
  margin-top: 2rem;
}

.talk-list {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.talk-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.4rem;
  padding-bottom: 1.1rem;
  border-bottom: 1px solid var(--global-divider-color);
}

.talk-media,
.talk-placeholder {
  width: 112px;
  height: 78px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--global-divider-color);
  overflow: hidden;
}

.talk-media {
  position: relative;
  display: block;
  background: var(--global-code-bg-color);
}

.talk-thumbnail {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Small play button over YouTube thumbnails */
.play-badge {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.68);
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  line-height: 1;
}

/* Used when there is no YouTube video thumbnail */
.talk-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--global-code-bg-color);
  color: var(--global-text-color-light);
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  padding: 0.5rem;
}

.talk-content {
  flex: 1;
}

.talk-title {
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
}

.talk-description {
  margin-bottom: 0;
}

@media (max-width: 600px) {
  .talk-item {
    gap: 0.8rem;
  }

  .talk-media,
  .talk-placeholder {
    width: 82px;
    height: 60px;
  }

  .play-badge {
    width: 26px;
    height: 26px;
    font-size: 0.75rem;
  }
}
</style>

<div class="talks-section">

<ul class="talk-list">

  <li class="talk-item">
  <a class="talk-media" href="https://youtu.be/KwVss0fLd7A" target="_blank" rel="noopener" aria-label="Watch CrySp Speaker Series talk on YouTube">
    <img class="talk-thumbnail" src="https://img.youtube.com/vi/KwVss0fLd7A/hqdefault.jpg" alt="CrySp Speaker Series thumbnail">
    <span class="play-badge">▶</span>
  </a>
  <div class="talk-content">
    <div class="talk-title">CrySp Speaker Series on Privacy, University of Waterloo</div>
    <p class="talk-description">
      The talk was given at the <a href="https://crysp.uwaterloo.ca/speakers/">CrySp seminar series at University of Waterloo</a>.
      It was focused on recent works on cryptography for efficient payments in cryptocurrencies.
      Another version of the talk was given at <a href="https://www.cics.umass.edu/event/cryptographic-locks-cryptocurrency-payments">University of Massachusetts, Amherst</a>.
    </p>
  </div>
</li>

  <li class="talk-item">
    <a class="talk-media" href="https://www.youtube.com/watch?v=8r9i2mTecSA" target="_blank" rel="noopener" aria-label="Watch Monero Talk on YouTube">
      <img class="talk-thumbnail" src="https://img.youtube.com/vi/8r9i2mTecSA/hqdefault.jpg" alt="Monero Talk thumbnail">
      <span class="play-badge">▶</span>
    </a>
    <div class="talk-content">
      <div class="talk-title">Monero Talk</div>
      <p class="talk-description">
        The interaction was focussed on building scalability solutions for Monero.
        We spoke about my work on Omniring, PayMo and Sleepy Channels.
      </p>
    </div>
  </li>

  <li class="talk-item">
    <a class="talk-media" href="https://www.youtube.com/watch?v=9g9w_S6X6QI" target="_blank" rel="noopener" aria-label="Watch Sleepy Channels talk on YouTube">
      <img class="talk-thumbnail" src="https://img.youtube.com/vi/9g9w_S6X6QI/hqdefault.jpg" alt="Sleepy Channels CMU seminar thumbnail">
      <span class="play-badge">▶</span>
    </a>
    <div class="talk-content">
      <div class="talk-title">Crypto/Applied Crypto Seminar, CMU</div>
      <p class="talk-description">
        The talk was given at a seminar series organized at <a href="https://sites.google.com/view/crypto-seminar/home">Carnegie Mellon University, USA</a>,
        and it was on my work on Sleepy Channels: Bitcoin-Compatible Bi-directional Payment Channels Without Watchtowers.
      </p>
    </div>
  </li>

  <li class="talk-item">
    <a class="talk-media" href="https://www.youtube.com/watch?v=Lpha8rueTSI" target="_blank" rel="noopener" aria-label="Watch Lockable Signatures talk on YouTube">
      <img class="talk-thumbnail" src="https://img.youtube.com/vi/Lpha8rueTSI/hqdefault.jpg" alt="Lockable Signatures CMU seminar thumbnail">
      <span class="play-badge">▶</span>
    </a>
    <div class="talk-content">
      <div class="talk-title">Crypto/Applied Crypto Seminar, CMU</div>
      <p class="talk-description">
        The talk was given at a seminar series organized at <a href="https://sites.google.com/view/crypto-seminar/home">Carnegie Mellon University, USA</a>,
        and it was on my work on Lockable Signatures for Blockchains: Scriptless Scripts for All Signatures that will appear at at IEEE Security &amp; Privacy 2021.
        Another version of the talk was also given at <a href="https://tech.cornell.edu/">Cornell Tech</a>.
      </p>
    </div>
  </li>

  <li class="talk-item">
  <a class="talk-media" href="https://youtu.be/X4vO6C_6u0c" target="_blank" rel="noopener" aria-label="Watch Monash Cybersecurity seminar talk on YouTube">
    <img class="talk-thumbnail" src="https://img.youtube.com/vi/X4vO6C_6u0c/hqdefault.jpg" alt="Monash Cybersecurity Series thumbnail">
    <span class="play-badge">▶</span>
  </a>
    <div class="talk-content">
      <div class="talk-title">Monash Cybersecurity Seminars</div>
      <p class="talk-description">
        The talk was given at a seminar organized at <a href="https://www.monash.edu/it/ssc/cybersecurity/seminars/2020/verifiable-timed-signatures-made-practical">Monash University, Australia</a>,
        and it was on my work on Verifiable Timed Signatures that was <a href="{{ '/publications/' | relative_url }}">published</a> at ACM CCS 2020.
        A shorter version of the talk was also presented at the Young Researchers Cryptographic Seminar 2020.
      </p>
    </div>
  </li>

  <li class="talk-item">
    <a class="talk-media" href="https://www.youtube.com/watch?v=tmxPHb8QNqE" target="_blank" rel="noopener" aria-label="Watch Monero Konferenco 2019 talk on YouTube">
      <img class="talk-thumbnail" src="https://img.youtube.com/vi/tmxPHb8QNqE/hqdefault.jpg" alt="Monero Konferenco 2019 thumbnail">
      <span class="play-badge">▶</span>
    </a>
    <div class="talk-content">
      <div class="talk-title">Monero Konferenco 2019</div>
      <p class="talk-description">
        The talk was on my work, Omniring, that is a proposal to improving the security and performance of the transaction scheme of Monero.
        The academic work was <a href="{{ '/publications/' | relative_url }}">published</a> at ACM CCS 2019.
      </p>
    </div>
  </li>

  <li class="talk-item">
    <div class="talk-placeholder">AFT<br>2019</div>
    <div class="talk-content">
      <div class="talk-title">Invited talk at AFT ACM 2019</div>
      <p class="talk-description">
        My work on Redactable blockchains that was <a href="{{ '/publications/' | relative_url }}">published</a> at IEEE S&amp;P 2019 was invited to be presented at
        <a href="https://dl.acm.org/doi/proceedings/10.1145/3318041">Advances in Financial Technologies (AFT)</a> ACM 2019.
      </p>
    </div>
  </li>

</ul>

</div>
