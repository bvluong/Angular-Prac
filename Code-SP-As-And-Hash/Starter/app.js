

window.addEventListener('hashchange', function() {
  console.log('adsa');
  if (window.location.hash === '#/bookmark/1') {
    console.log(window.location);
  }
});
