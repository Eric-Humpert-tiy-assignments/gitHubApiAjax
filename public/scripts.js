'use strict';
if (this.searchList === undefined) this.searchList = {};

(function(context) {

  var input = document.querySelector('#query-box');
  var query = document.querySelector('#query-box').value;
  var ul = document.querySelector('username-list');

  function start() {

    $.ajax('https://api.github.com/search/users?q=' + query.value).done(function(result) {
      console.log('get result', result);
      });

    input.addEventListener('keyup', function(evt) {
      if(evt.keyCode === 13) {
        
      }
    })
    //Call your code here
    console.log('starting!', context);
    console.log(query);
  }

  context.start = start;

})(window.searchList);
