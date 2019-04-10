function anchorLinkHandler(e) {
  const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

  e.preventDefault();
  const targetID = this.getAttribute("href");
  const targetAnchor = document.querySelector(targetID);
  if (!targetAnchor) return;
  const originalTop = distanceToTop(targetAnchor);

  window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

  const checkIfDone = setInterval(function() {
    const atBottom =
      window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
    if (distanceToTop(targetAnchor) === 0 || atBottom) {
      targetAnchor.tabIndex = "-1";
      targetAnchor.focus();
      window.history.pushState("", "", targetID);
      clearInterval(checkIfDone);
    }
  }, 100);
}

const linksToAnchors = document.querySelectorAll('a[href^="#"]');

linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));

var animate = new Animate({
  target: "[data-animate]",
  animatedClass: "js-animated",
  offset: [0.2, 0.5],
  delay: 0,
  remove: true,
  scrolled: false,
  reverse: false,
  onLoad: true,
  onScroll: true,
  onResize: false,
  disableFilter: false,
  callbackOnInit: function() {},
  callbackOnInView: function(el) {},
  callbackOnAnimate: function(el) {}
});
animate.init();
