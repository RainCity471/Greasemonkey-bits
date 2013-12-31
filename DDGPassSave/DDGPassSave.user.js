// ==UserScript==
// @name        DDGPassSave
// @namespace   $RainCity471.GMscripts.DDGPassSave$
// @description Saves your DuckDuckGo settings passphrase and automatically fills it in. **Requires manual configuration, see source code file.**
// @include     http://duckduckgo.com/settings
// @include     https://duckduckgo.com/settings
// @version     1
// @grant       none
// ==/UserScript==
// =============== MANUAL CONFIG ============================
// Insert your passphrase after the equals sign and between the quotes in the second line after the end of this message (the one that begins with document.getelementById **without the // at the start**).
// e.g.
// document.getElementById().value = "YOUR PASSPHRASE HERE!";
// Your data will be kept locally on your machine.
// ===========================================================
function inputPp(element) {
	document.getElementById().value = "kite bee samba durer";
}

inputPp("cloud_pw");
inputPp("cloud_load_pw");