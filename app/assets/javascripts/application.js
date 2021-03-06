// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require_tree .

window.onload = function() {
   // htmlが読み込まれた後で実行される
  (function() {
   'use strict';
     var article = document.getElementById('article');
     var label   = document.getElementById('label');
     var LIMIT = 140;
     label.innerHTML = LIMIT;
     article.addEventListener('keyup', function() {
       var remaining = LIMIT - this.value.length;
       label.innerHTML = remaining;
      });
  })();
}