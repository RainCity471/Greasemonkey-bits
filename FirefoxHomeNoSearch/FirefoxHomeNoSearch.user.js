// ==UserScript==
// @name        FirefoxHomeNoSearch
// @namespace   $RainCity471.GMscripts.FirefoxHomeNoSearch$
// @include     //about:home
// @version     1
// @grant       none
// ==/UserScript==
var schBar = document.getElementById('searchContainer');
schBar.parentNode.removeChild(schBar);