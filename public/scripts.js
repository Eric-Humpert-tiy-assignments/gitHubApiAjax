'use strict';
if (this.searchList === undefined) this.searchList = {};

(function(context) {

  var input = document.querySelector('#query-box');
  var ul = document.querySelector('.username-list');


  function start() {

    var query = document.querySelector('#query-box');

    input.addEventListener('keyup', function(evt) {
      if(evt.keyCode === 13) {
        $.ajax('https://api.github.com/search/users?q=' + query.value).done(function(result) {
          console.log(query.value);
          console.log('get result', result);
          input.value = '';
          ul.innerHTML = '';
          for (var value of result.items) {
            var li = document.createElement('li');
            li.textContent = value.login;
            ul.appendChild(li);
          }
        });
      }
    })
    //Call your code here
    console.log('starting!', context);
    console.log(query);
  }

  context.start = start;

})(window.searchList);
