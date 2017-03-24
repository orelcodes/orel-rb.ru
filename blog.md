---
layout: default
---
<header class="masthead">
  <h1 class="masthead-title">
    <a href="{{ site.baseurl }}/">{{ site.name }}</a>
  </h1>
</header>
<div class="content list">
{% if site.posts.size == 0 %}
  <h2>No post found</h2>
{% else %}
  {% for post in site.posts %}
  <div class="row">
    <div class="list-item">
      <h2 class="list-post-title">
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </h2>
      <div class="list-post-date">
        <time>{{ post.date | date_to_string }}</time>
      </div>
    </div>
  </div>
{% endfor %}
{% endif %}
</div>