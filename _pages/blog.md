---
layout: default
permalink: /blog/
title: Blog
nav: true
nav_order: 3
pagination:
  enabled: true
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}

  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

<ul class="post-list">

{% assign postlist = site.posts %}

{% for post in postlist %}

    {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>
      <h3>
        <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
      </h3>

      <p>{{ post.description }}</p>

      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {{ post.date | date: '%B %d, %Y' }}
      </p>

      <p class="post-tags">
        <a href="{{ year | prepend: '/blog/' | relative_url }}">
          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
        </a>

        {% if tags != "" %}
          &nbsp; &middot; &nbsp;
          {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
            </a>
            {% unless forloop.last %}&nbsp;{% endunless %}
          {% endfor %}
        {% endif %}

        {% if categories != "" %}
          &nbsp; &middot; &nbsp;
          {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
            </a>
            {% unless forloop.last %}&nbsp;{% endunless %}
          {% endfor %}
        {% endif %}
      </p>
    </li>

{% endfor %}

</ul>

</div>
