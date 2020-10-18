document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {

    page.querySelector('#m1').onclick = function() {
      m()
      document.querySelector('#myNavigator').pushPage('views/detail.html');
    };

    page.querySelector('#m2').onclick = function() {
      m()
      document.querySelector('#myNavigator').pushPage('views/detail2.html', {data: {title: 'Page 2'}});
    };

    page.querySelector('#m3').onclick = function() {
      m()
      document.querySelector('#myNavigator').pushPage('views/detail3.html', {data: {title: 'Page 2'}});
    };

  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});