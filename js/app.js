document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {

    page.querySelector('#m1').onclick = function() {
      m()
      document.querySelector('#myNavigator').pushPage('views/detail.html');
    };

    page.querySelector('#m2').onclick = function() {
      m()
      document.querySelector('#myNavigator').pushPage('views/detail2.html');
    };

    page.querySelector('#m3').onclick = function() {
      m()
      document.querySelector('#myNavigator').pushPage('views/detail3.html');
    };

    // page.querySelector('#m4').onclick = function() {
    //   m()
    //   // document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m5').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m6').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m7').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m8').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m9').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m10').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m11').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m12').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m13').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m14').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

    // page.querySelector('#m15').onclick = function() {
    //   m()
    //   //document.querySelector('#myNavigator').pushPage('views/detail.html');
    // };

  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});