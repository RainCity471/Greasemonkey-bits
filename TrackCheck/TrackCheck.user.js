// ==UserScript==
// @name        TrackCheck
// @namespace   RainCity471/GM/TrackCheck
// @include     http://www.google.*
// @include     https://www.google.*
// @run-at document-start
// @version     0.1
// @grant       none
// ==/UserScript==
text = "This website is known for online tracking and data mining. Are you sure you want to visit it?"
resp = confirm(text);
if (resp === false) {
  window.location = "about:home";
}