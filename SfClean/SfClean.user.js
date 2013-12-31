// ==UserScript==
// @name        SfClean
// @namespace   $RainCity471.GMscripts.SfClean$
// @description Hide the recommended projects and latest tech jobs sections on sourceforge
// @include     http://sourceforge.net/projects/*
// @include     https://sourceforge.net/projects/*
// @version     1
// @grant       none
// ==/UserScript==
function delElement(element) {
	element.parentNode.deleteChild(element);
}

rcmdPjs = document.getElementsByTagName('aside')[0];
alert(rcmdPjs).innerHTML;
/*
techJbs = document.getElementsByTagName('aside')[1];

delElement(rcmdPjs);
delElement(techJbs);
*/