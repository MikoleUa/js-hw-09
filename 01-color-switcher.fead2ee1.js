!function(){var t,e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");function a(){document.body.style="background: ".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}e.addEventListener("click",(function(){t||(t=setInterval(a,1e3)),e.disabled=!0,n.disabled=!1})),n.addEventListener("click",(function(){clearInterval(t),n.disabled=!0,e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.fead2ee1.js.map
