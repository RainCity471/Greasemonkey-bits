// ==UserScript==
// @name        About.comAdDelete
// @namespace   $RainCity471.GMscripts.About.comAdDelete$
// @description Delete the ad on the right of about.com (and blank space)
// @include     http://javascript.about.com/library/*
// @version     1
// @grant       none
// ==/UserScript==
adR = document.getElementById('adB');
adH = document.getElementById('adL');

adR.parentNode.deleteChild(adR);