document.addEventListener('init', function(event) {
  var page = event.target;

  if (page.id === 'page1') {
    page.querySelector('#m1').onclick = function() {
      document.querySelector('#myNavigator').pushPage('views/detail.html', {data: {title: 'Page 2'}});
    };
  } else if (page.id === 'page2') {
    page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
  }
});

var login = function() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'bob' && password === 'secret') {
    ons.notification.alert('Congratulations!');
  } else {
    ons.notification.alert('Incorrect username or password.');
  }
};

