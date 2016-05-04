'use strict';
if (this.searchList === undefined) this.searchList = {};

(function(context) {

  function start() {
    
    //Call your code here
    console.log('starting!', context);

  }

  window.searchList.start = start;

})(window.searchList);
