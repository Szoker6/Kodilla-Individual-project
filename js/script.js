'use strict';

var burgertoggleButton = document.querySelector('.fa-bars');
var sidebarElement = document.querySelector('.asideBar');
var generalMarginLeft = document.querySelector('.general');
var topBarMarginLeft = document.querySelector('.topbar');

burgertoggleButton.addEventListener('click', function(){
  sidebarElement.classList.toggle('expanded');
  generalMarginLeft.classList.toggle('smallGeneralMarginLeft');
  topBarMarginLeft.classList.toggle('smalltopBarMarginLeft');
});