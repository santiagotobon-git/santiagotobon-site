// On the homepage, replace TOC sidebar anchors with actual page links
document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname;
  var isHome = path === "/" || path.endsWith("/index.html");
  var isHomeEs = path === "/es/" || path.endsWith("/es/index.html");

  if (!isHome && !isHomeEs) return;

  var prefix = isHomeEs ? "/es/" : "/";

  var map = {
    "#research": prefix + "research/publications/",
    "#investigacion": prefix + "research/publications/",
    "#centro-de-valor-publico": prefix + "centro/",
    "#book-project": prefix + "book/",
    "#proyecto-de-libro": prefix + "book/",
    "#data-replication": prefix + "research/data/",
    "#datos-y-replicacion": prefix + "research/data/",
    "#latest": null,
    "#reciente": null
  };

  document.querySelectorAll('[data-md-component="toc"] a, .md-nav--integrated a').forEach(function (a) {
    var href = a.getAttribute("href");
    if (href && map.hasOwnProperty(href) && map[href]) {
      a.setAttribute("href", map[href]);
    } else if (href && map.hasOwnProperty(href) && !map[href]) {
      a.style.display = "none";
    }
  });
});
