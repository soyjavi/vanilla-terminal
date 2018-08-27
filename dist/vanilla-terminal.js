!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(3);!function(e){e&&e.__esModule}(n(9));var i="VanillaTerm",a=window,u=a.addEventListener,s=a.localStorage,l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c.call(this);var n=t.container,r=void 0===n?"vanilla-terminal":n,a=t.commands,u=void 0===a?{}:a,l=t.welcome,f=void 0===l?'Welcome to <a href="">Vanilla</a> terminal.':l,p=t.prompt,d=void 0===p?"":p,m=t.separator,h=void 0===m?"&gt;":m;this.commands=Object.assign({},u,o.COMMANDS),this.history=s[i]?JSON.parse(s[i]):[],this.historyCursor=this.history.length,this.welcome=f,this.prompt=d,this.separator=h;var v=document.getElementById(r);if(!v)throw Error("Container #"+r+" doesn't exists.");this.cacheDOM(v),this.addListeners(),f&&this.output(f)}return r(e,[{key:"clear",value:function(){this.DOM.output.innerHTML="",this.DOM.input.value=""}},{key:"onInput",value:function(e){e&&(this.onInputCallback=e)}},{key:"output",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"&nbsp;";this.DOM.output.insertAdjacentHTML("beforeEnd","<span>"+e+"</span>"),this.DOM.input.scrollIntoView&&this.DOM.input.scrollIntoView()}},{key:"setPrompt",value:function(e){var t=this.DOM,n=this.separator;this.prompt=e,t.prompt.innerHTML=""+e+n}}]),e}(),c=function(){var e=this;this.cacheDOM=function(t){t.classList.add(i),t.insertAdjacentHTML("beforeEnd",(0,o.markup)(e));var n=t.querySelector(".container");e.DOM={container:n,output:n.querySelector("output"),command:n.querySelector(".command"),input:n.querySelector(".command .input"),prompt:n.querySelector(".command .prompt")}},this.addListeners=function(){var t=e.DOM;t.output.addEventListener("DOMSubtreeModified",function(){setTimeout(function(){return t.input.scrollIntoView()},10)},!1),u("click",function(){return t.input.focus()},!1),t.output.addEventListener("click",function(e){return e.stopPropagation()},!1),t.input.addEventListener("keyup",e.onKeyUp,!1),t.input.addEventListener("keydown",e.onKeyDown,!1),t.command.addEventListener("click",function(){return t.input.focus()},!1),u("keyup",function(e){t.input.focus(),e.stopPropagation(),e.preventDefault()},!1)},this.onKeyUp=function(t){var n=t.keyCode,r=e.DOM,o=e.history,i=void 0===o?[]:o,a=e.historyCursor;27===n?(r.input.value="",t.stopPropagation(),t.preventDefault()):[38,40].includes(n)&&(38===n&&a>0&&(e.historyCursor-=1),40===n&&a<i.length-1&&(e.historyCursor+=1),i[e.historyCursor]&&(r.input.value=i[e.historyCursor]))},this.onKeyDown=function(t){var n=t.keyCode,r=e.commands,a=void 0===r?{}:r,u=e.DOM,l=e.history,c=e.onInputCallback,f=u.input.value.trim();if(13===n&&f){l.push(f),s[i]=JSON.stringify(l),e.historyCursor=l.length,u.output.appendChild((0,o.cloneCommandNode)(u.command)),u.input.value="";var p=function(e){return Array.isArray(e)?e:Array.from(e)}(f.split(" ")),d=p[0],m=p.slice(1);if(Object.keys(a).includes(d)){var h=a[d];h&&h(e,m),c(d,m)}else e.output("<u>"+d+"</u>: command not found.")}}};window&&(window.VanillaTerminal=l),t.default=l},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.markup=t.COMMANDS=t.cloneCommandNode=void 0;var r=a(n(4)),o=a(n(5)),i=a(n(8));function a(e){return e&&e.__esModule?e:{default:e}}t.cloneCommandNode=r.default,t.COMMANDS=o.default,t.markup=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.cloneNode(!0),n=t.querySelector(".input");return n.autofocus=!1,n.readOnly=!0,n.insertAdjacentHTML("beforebegin",n.value),n.parentNode.removeChild(n),t.classList.add("line"),t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=a(n(6)),i=a(n(7));function a(e){return e&&e.__esModule?e:{default:e}}var u=window.localStorage;t.default={clear:function(e){return e.clear()},help:function(e,t){var n=r(t,1)[0];n?e.output("help: "+(i.default[n]||"no help topics match <u>"+n+"</u>")):(e.output("These shell commands are defined internally. Type <u>help</u> for see the list."),e.output("Type <u>help name</u> to find out more about the function <u>name</u>."),e.output(Object.keys(e.commands).join(", ")))},version:function(e){return e.output("Vanilla Terminal v"+o.default.version)},wipe:function(e){u.removeItem("VanillaTerm"),e.history=[],e.historyCursor=0,e.output("History of commands wiped.")}}},function(e){e.exports={name:"vanilla-terminal",version:"0.0.8",description:"🍦A simple and lightweight Javascript web browser terminal",keywords:["terminal","console","xterm","shell","tool"],repository:{type:"git",url:"https://github.com/soyjavi/vanilla-terminal.git"},license:"MIT",main:"./dist/vanilla-terminal.js",bin:"./dist/vanilla-terminal.js",homepage:"https://github.com/soyjavi/vanilla-terminal",bugs:"https://github.com/soyjavi/vanilla-terminal/issues",devDependencies:{"babel-eslint":"^8.2.6","babel-jest":"^23.4.2","babel-loader":"^7.1.0","babel-plugin-transform-class-properties":"^6.24.1","babel-polyfill":"^6.26.0","babel-preset-env":"^1.7.0","css-loader":"^1.0.0",eslint:"^5.4.0","eslint-config-airbnb":"latest","eslint-plugin-import":"^2.13.0","identity-obj-proxy":"^3.0.0",jest:"^23.5.0","release-it":"^7.4.3","style-loader":"^0.22.1",webpack:"^4.12.0","webpack-cli":"^3.0.6"},scripts:{build:"webpack",start:"node index.js",test:"jest",lint:"eslint src/**",release:"release-it"}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={clear:"clear the terminal screen",version:"print the terminal version",wipe:"Remove all your history of command lines"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return'\n  <div class="container">\n    <output></output>\n    <div class="command">\n      <div class="prompt">'+e.prompt+e.separator+'</div>\n      <input class="input" spellcheck="false" autofocus />\n    </table>\n  </div>\n'}},function(e,t,n){var r=n(10);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(12)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(11)(!1)).push([e.i,'* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.VanillaTerm {\n  background-color: #222222;\n  color: white;\n  font-family: "Inconsolata", "Courier New", Courier, monospace;\n  font-weight: bold;\n  overflow: hidden;\n  padding: 0.75em 1em;\n}\n\n  .VanillaTerm .container {\n    width: 100%;\n    height: 100%;\n    overflow-y: scroll;\n  }\n    .VanillaTerm .container ::selection {\n      background-color: #f3e5ab;\n      text-shadow: none !important;\n    }\n\n    .VanillaTerm output {\n      clear: both;\n      line-height: 1.25em;\n      width: 100%;\n    }\n      .VanillaTerm output pre {\n        margin: 0;\n      }\n      .VanillaTerm output span {\n        display: block;\n        font-weight: normal;\n        color: #dddddd;\n      }\n\n    .VanillaTerm .prompt, .VanillaTerm a {\n      color: #f3e5ab;\n      font-weight: bold;\n    }\n\n    .VanillaTerm .prompt {\n      color: #f3e5ab;\n      line-height: 1.25em;\n      margin-right: 0.5em;\n    }\n\n    .VanillaTerm .command {\n      display: flex;\n    }\n      .VanillaTerm .command .input {\n        background-color: transparent;\n        border: none;\n        color: inherit;\n        font: inherit;\n        flex: 1;\n        margin: 0;\n        outline: none;\n        padding: 0;\n      }\n',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r={},o=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),a=null,u=0,s=[],l=n(13);function c(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(v(o.parts[a],t))}else{var u=[];for(a=0;a<o.parts.length;a++)u.push(v(o.parts[a],t));r[o.id]={id:o.id,refs:1,parts:u}}}}function f(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],u={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}function p(e,t){var n=i(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),s.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,n);n.insertBefore(t,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=s.indexOf(e);t>=0&&s.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return h(t,e.attrs),p(e,t),t}function h(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function v(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var s=u++;n=a||(a=m(t)),r=b.bind(null,n,s,!1),o=b.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),p(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),u=e.href;e.href=URL.createObjectURL(a),u&&URL.revokeObjectURL(u)}.bind(null,n,t),o=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=m(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){d(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=o()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=f(e,t);return c(n,t),function(e){for(var o=[],i=0;i<n.length;i++){var a=n[i];(u=r[a.id]).refs--,o.push(u)}e&&c(f(e,t),t);for(i=0;i<o.length;i++){var u;if(0===(u=o[i]).refs){for(var s=0;s<u.parts.length;s++)u.parts[s]();delete r[u.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}();function b(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}])});