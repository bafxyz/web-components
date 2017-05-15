// https://www.webcomponents.org/polyfills
(function() {
  if ('registerElement' in document
      && 'import' in document.createElement('link')
      && 'content' in document.createElement('template')) {
    // platform is good!
  } else {
    // polyfill the platform!
    var e = document.createElement('script');
    e.src = '//cdnjs.cloudflare.com/ajax/libs/custom-elements/1.0.0/custom-elements.min.js';
    document.body.appendChild(e);
  }
})();
