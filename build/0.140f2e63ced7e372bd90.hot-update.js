webpackHotUpdate(0,{60:function(e,t,n){t=e.exports=n(152)(),t.push([e.id,"*{margin:0;padding:0}a{text-decoration:none;color:#000;list-style:none}.leftmenu{width:200px}.leftmenu li{border-right:3px solid red;height:42px;line-height:42px;font-size:14px;padding-left:24px;padding-right:16px}.main-app{width:90%;margin:0 auto;margin-top:60px;min-height:400px;border-radius:4px;background:#fff}",""])},152:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},261:function(e,t,n){(function(e){!function(){var t=n(80),r=n(81),o=n(42),i=n(6);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return r.getRootInstances(o)},i)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}var t=n(6),r=e(t),o=n(104),i=n(125),a=e(i);n(326),(0,o.render)(r.default.createElement("div",{style:{backgroundColor:"#ececec"}},a.default),document.getElementById("root"))}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var r=n(82);r(e,n(6))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot apply hot update to index.jsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(47)(e))},325:function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],t))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],t));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],i=o[0],a=o[1],s=o[2],f=o[3],u={css:a,media:s,sourceMap:f};n[i]?n[i].parts.push(u):t.push(n[i]={id:i,parts:[u]})}return t}function i(e,t){var n=g(),r=b[b.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),b.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=b.indexOf(e);t>=0&&b.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function f(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,r,o;if(t.singleton){var i=y++;n=m||(m=s(t)),r=c.bind(null,n,i,!1),o=c.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=f(t),r=d.bind(null,n),o=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=l.bind(null,n),o=function(){a(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function l(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),i=e.href;e.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,b=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var i=[],a=0;a<n.length;a++){var s=n[a],f=p[s.id];f.refs--,i.push(f)}if(e){var u=o(e);r(u,t)}for(var a=0;a<i.length;a++){var f=i[a];if(0===f.refs){for(var c=0;c<f.parts.length;c++)f.parts[c]();delete p[f.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},326:function(e,t,n){var r=n(60);"string"==typeof r&&(r=[[e.id,r,""]]);var o=n(325)(r,{});r.locals&&(e.exports=r.locals),r.locals||e.hot.accept(60,function(){var t=n(60);"string"==typeof t&&(t=[[e.id,t,""]]),o(t)}),e.hot.dispose(function(){o()})}});
//# sourceMappingURL=0.140f2e63ced7e372bd90.hot-update.js.map