---
layout: page
permalink: /people/
title: People
description:
nav: true
nav_order: 4
---

<!-- pages/people.md -->

<style>
.people-section {
  margin-top: 2.5rem;
}

.people-section h2 {
  margin-bottom: 1rem;
  font-size: 1.6rem;
  border-bottom: 1px solid var(--global-divider-color);
  padding-bottom: 0.4rem;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
  align-items: start;
}

.person-card {
  border: 1px solid var(--global-divider-color);
  border-radius: 12px;
  background: var(--global-bg-color);
  padding: 1rem;
  height: fit-content;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.person-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 14px rgba(0, 0, 0, 0.08);
}

.person-card-with-icon {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.person-icon {
  width: 72px;
  height: 72px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  border: 1px solid var(--global-divider-color);
}

.person-info {
  flex: 1;
}

.person-name {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
}

.person-role {
  margin: 0.25rem 0 0.75rem 0;
  font-size: 0.95rem;
  color: var(--global-text-color-light);
}

.person-details {
  margin: 0;
  font-size: 0.95rem;
}

.person-details p {
  margin-bottom: 0.4rem;
}

.person-details strong {
  font-weight: 600;
}

.people-list {
  margin-top: 0.75rem;
  padding-left: 1.25rem;
}

.people-list li {
  margin-bottom: 0.35rem;
}

.empty-section {
  margin-top: 0.75rem;
  color: var(--global-text-color-light);
  font-style: italic;
}

@media (max-width: 600px) {
  .person-card-with-icon {
    flex-direction: column;
  }

  .person-icon {
    width: 64px;
    height: 64px;
  }
}
</style>

<div class="people-section">
  <h2>PhD students</h2>

  <div class="people-grid">

    <div class="person-card person-card-with-icon">
      <img class="person-icon" src="{{ '/assets/img/people/sam-polgar.jpg' | relative_url }}" alt="Sam Polgar">
      <div class="person-info">
        <h3 class="person-name">Sam Polgar</h3>
        <p class="person-role">PhD student</p>
        <div class="person-details">
          <p><strong>Email:</strong> <a href="mailto:sam.polgar@sydney.edu.au">sam.polgar@sydney.edu.au</a></p>
          <p><strong>Started:</strong> August 2025</p>
          <p><strong>Co-supervisor:</strong> <a href="https://ccanonne.github.io">Clement Cannone</a></p>
        </div>
      </div>
    </div>

    <div class="person-card person-card-with-icon">
      <img class="person-icon" src="{{ '/assets/img/people/jay-taylor.jpg' | relative_url }}" alt="Jay Taylor">
      <div class="person-info">
        <h3 class="person-name">Jay Taylor</h3>
        <p class="person-role">PhD student</p>
        <div class="person-details">
          <p><strong>Email:</strong> <a href="mailto:jtay7135@uni.sydney.edu.au">jtay7135@uni.sydney.edu.au</a></p>
          <p><strong>Started:</strong> August 2025</p>
          <p><strong>Co-supervisor:</strong> <a href="https://alkistang.github.io">Qiang Tang</a></p>
        </div>
      </div>
    </div>

  </div>
</div>

<div class="people-section">
  <h2>Honours students</h2>

  <ul class="people-list">
    <li>Anthony Tran (July 2025)</li>
    <li>Andrew Cao (March 2026)</li>
    <li>Nguyen Dao (March 2026)</li>
  </ul>
</div>


<div class="people-section">
  <h2>Visitors</h2>

<ul class="people-list">
    <li><a href="https://glgreiner.github.io">Garrett Greiner</a> (May 2026–, PhD student, University of Utah)</li>
  </ul>
</div>