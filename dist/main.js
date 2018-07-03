!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=13)}([function(n,e,t){n.exports=t.p+"7f027217a05995356ce89591a6a58bef.png"},function(n,e,t){n.exports=t.p+"a8ec8c938d72f0ddadb62e02627854eb.png"},function(n,e,t){n.exports=t.p+"5ae159689d5832f9e3207cd0382dca13.png"},function(n,e,t){n.exports=t.p+"e812c04af1a8f1f409512229eecef8a8.png"},function(n,e,t){n.exports=t.p+"bf3c82b6e1edc95330911731634b057f.png"},function(n,e,t){n.exports=t.p+"cfb7cbbfce13136cb40688c57bb87ed3.png"},function(n,e,t){n.exports=t.p+"c1a7aa131ee9b91794a0cb339697ccd4.png"},function(n,e,t){n.exports=t.p+"b3e231074438988dafb8c3c4702ee8c0.png"},function(n,e,t){n.exports=t.p+"802950da0d51187f7521139538f51bde.png"},function(n,e,t){n.exports=t.p+"48dff2f9afa6126e0d6547cd2c870c70.png"},function(n,e,t){n.exports=t.p+"1cc902d6611efb48a4deac0f3b248c48.png"},function(n,e,t){n.exports=t.p+"92c17af0ff05c395861fcb6572568a0f.png"},function(n,e,t){n.exports=t.p+"25c31cee93aa1415ca917053756a1a08.png"},function(n,e,t){"use strict";t.r(e);class o{constructor(){this.initialHealth=100,this.health=100,this.damageValues=[5,10,20,30,40,50]}create(){this.name=G.nameField.value,G.heroName.textContent=this.name,G.heroHealth.textContent=`${this.health}/${this.initialHealth}`}updateHealth(){this.initialHealth=100,this.health=100,G.heroHealth.textContent=`${this.health}/${this.initialHealth}`}healYourself(){this.initialHealth-this.health<50?this.health=this.initialHealth:this.health+=50,G.heroHealth.textContent=`${this.health}/${this.initialHealth}`}underAttack(){G.heroElem.classList.add("monster-attacked"),setTimeout(()=>{G.heroElem.classList.remove("monster-attacked")},1e3)}changeHealth(){this.health-=this.damageValues[U(0,this.damageValues.length-1)]}}var r=t(12),i=t.n(r),a=t(11),s=t.n(a),l=t(10),c=t.n(l),d=t(9),h=t.n(d),u=t(8),p=t.n(u),m=t(7),f=t.n(m),g=t(6),b=t.n(g),x=t(5),y=t.n(x),k=t(4),v=t.n(k),w=t(3),S=t.n(w),L=t(2),C=t.n(L),E=t(1),H=t.n(E),B=t(0),M=t.n(B);const T=[i.a,s.a,c.a,h.a],q=[p.a,f.a],R=[b.a,y.a,v.a,S.a],j=[C.a,H.a,M.a],A=["Creepy","Awful","Gross","Despicable","Dreadful"],O=["Orc","Troll","Goblin","Yeti"],I=["John","Donald","Thomas","Richard","Jose","David","Oliver","James","Paul","George"],$=[function(){const n=["+","-","×","/"],e=n[U(0,n.length-1)];let t,o,r;if("×"===e||"/"===e)if("×"===e)r=(t=U(2,25))*(o=U(2,25));else{for(t=U(2,200),o=U(2,30);t/o!==Math.round(t/o);)t=U(2,200),o=U(2,30);r=t/o}else r="+"===e?(t=U(2,100))+(o=U(2,99)):(t=U(2,100))-(o=U(2,99));G.taskHeading.textContent="Perform the following arithmetic operation";const i=document.createElement("div");i.classList.add("multiplier"),i.textContent=t;const a=document.createElement("div");a.classList.add("operation"),a.textContent=e;const s=document.createElement("div");s.classList.add("multiplier"),s.textContent=o;const l=document.createElement("div");l.classList.add("operation"),l.textContent="=";const c=document.createElement("input");return c.type="number",c.classList.add("task-input"),G.taskBody.appendChild(i),G.taskBody.appendChild(a),G.taskBody.appendChild(s),G.taskBody.appendChild(l),G.taskBody.appendChild(c),c.focus(),r}];class z{constructor(){this.initialHealth=100,this.health=100,this.headImg=document.querySelector(".head img"),this.bodyImg=document.querySelector(".body img"),this.legsImg=document.querySelector(".legs img"),this.weaponImg=document.querySelector(".weapon img")}create(){this.name=`${A[U(0,A.length-1)]} ${O[U(0,O.length-1)]} ${I[U(0,I.length-1)]}`,G.monsterName.textContent=this.name,G.monsterHealth.textContent=`${this.health}/${this.initialHealth}`,this.headImg.src=T[U(0,T.length-1)],this.bodyImg.src=q[U(0,q.length-1)],this.legsImg.src=R[U(0,R.length-1)],this.weaponImg.src=j[U(0,j.length-1)]}underAttack(){G.monsterElem.classList.add("monster-attacked"),setTimeout(()=>{G.monsterElem.classList.remove("monster-attacked")},1e3)}changeHealth(){this.health-=30}}t(20);t.d(e,"Game",function(){return N}),t.d(e,"getRandomInt",function(){return U}),t.d(e,"game",function(){return G});class N{constructor(){this.round=0,this.timers=[],this.loadingPage=document.querySelector(".loading-page"),this.homepage=document.querySelector(".homepage"),this.gamepage=document.querySelector(".gamepage"),this.scoreboard=document.querySelector(".scoreboard"),this.playBtn=document.querySelector(".play-btn"),this.scoreboardBtn=document.querySelector(".scoreboard-btn"),this.nameField=document.forms.info.name,this.scoreboardHomepageBtn=document.querySelector(".scoreboard-homepage-btn"),this.scoreboardTable=document.querySelector(".scoreboard-table"),this.actionBtn=document.querySelector(".action-btn"),this.roundElem=document.querySelector(".round"),this.field=document.querySelector(".field"),this.heroElem=document.querySelector(".hero"),this.monsterElem=document.querySelector(".monster"),this.heroName=document.querySelector("#hero-name"),this.monsterName=document.querySelector("#monster-name"),this.heroHealth=document.querySelector(".hero-info .health"),this.monsterHealth=document.querySelector(".monster-info .health"),this.spellsModal=document.querySelector(".spells-modal"),this.closeBtn=document.querySelector(".close-btn"),this.attackBtn=document.querySelector(".attack-btn"),this.healBtn=document.querySelector(".heal-btn"),this.taskModal=document.querySelector(".task-modal"),this.taskHeading=document.querySelector(".task-heading"),this.taskBody=document.querySelector(".task-body"),this.answerBtn=document.querySelector(".answer-btn"),this.resultModal=document.querySelector(".result-modal"),this.gameHomepageBtn=document.querySelector(".game-homepage-btn"),this.gamePlayAgainBtn=document.querySelector(".game-play-again-btn"),this.resultTable=document.querySelector(".result-table"),this.keycodes={ENTER:13}}addListeners(){this.playBtn.addEventListener("click",()=>{this.startGame()}),this.nameField.addEventListener("input",()=>{this.checkFormValidity()}),this.actionBtn.addEventListener("click",()=>{this.showModal()}),this.closeBtn.addEventListener("click",()=>{this.hideModal()}),this.attackBtn.addEventListener("click",n=>{this.showTask(n)}),this.healBtn.addEventListener("click",n=>{this.showTask(n)}),this.answerBtn.addEventListener("click",n=>{this.checkAnswer(n)}),document.body.addEventListener("keypress",n=>{this.checkAnswer(n)}),this.gameHomepageBtn.addEventListener("click",()=>{this.stopGame()}),this.gamePlayAgainBtn.addEventListener("click",()=>{this.restartGame()}),this.scoreboardBtn.addEventListener("click",()=>{this.showScoreboard()}),this.scoreboardHomepageBtn.addEventListener("click",()=>{this.showHomepage()})}startGame(){if(!this.checkFormValidity())return!1;this.init(),this.showGame()}checkFormValidity(){let n=!1;return this.nameField.checkValidity()?this.nameField.classList.remove("invalid-field"):(n=!0,this.nameField.scrollIntoView(),this.nameField.classList.add("invalid-field")),this.nameField.classList.contains("invalid-field")&&this.nameField.focus(),!n}init(){this.hero=new o,this.monster=new z,this.round=0,this.increaseRound(),this.hero.create(),this.monster.create()}increaseRound(){this.round++,this.roundElem.textContent=`Round ${this.round}`}showGame(){this.homepage.classList.add("hidden"),this.gamepage.classList.remove("hidden")}showModal(){this.spellsModal.classList.remove("hidden")}hideModal(){this.spellsModal.classList.add("hidden")}showTask(n){this.taskModal.classList.remove("hidden"),this.spellsModal.classList.add("hidden"),this.currentTaskResult=$[U(0,$.length-1)](),this.typeOfSpell=n.target}checkAnswer(n){if(this.taskModal.classList.contains("hidden")||n.keyCode!==this.keycodes.ENTER&&void 0!==n.keyCode)return;const e=document.querySelector(".task-input");this.answerBtn.disabled=!0;const t=e.value===String(this.currentTaskResult);t?this.taskModal.firstElementChild.classList.add("correct"):this.taskModal.firstElementChild.classList.add("incorrect"),this.taskModal.classList.add("slowly-disappear"),new Promise(n=>{setTimeout(()=>{this.taskModal.style.opacity="0",n()},500)}).then(()=>{setTimeout(()=>{this.restoreTask(),this.launchBattle(t)},1e3)})}restoreTask(){this.taskModal.classList.add("hidden"),this.answerBtn.disabled=!1,this.taskBody.innerHTML="",this.taskModal.style.opacity="1",this.taskModal.firstElementChild.classList.remove("correct","incorrect")}launchBattle(n){new Promise(e=>{n?this.typeOfSpell===this.healBtn?(this.hero.healYourself(),this.timers.push(setTimeout(()=>{e()},2e3))):(this.monster.underAttack(),this.monster.changeHealth(),this.checkMonsterHealth(),this.timers.push(setTimeout(()=>{e()},2e3))):this.timers.push(setTimeout(()=>{e()},1e3))}).then(()=>{this.hero.underAttack(),this.hero.changeHealth(),this.checkHeroHealth()})}checkMonsterHealth(){this.monster.health<=0?(this.monsterHealth.textContent=`0/${this.monster.initialHealth}`,setTimeout(()=>{this.startNewRound()},1e3)):this.monsterHealth.textContent=`${this.monster.health}/${this.monster.initialHealth}`}checkHeroHealth(){this.hero.health<=0?(this.heroHealth.textContent=`0/${this.hero.initialHealth}`,setTimeout(()=>{this.finishBattle()},1e3)):this.heroHealth.textContent=`${this.hero.health}/${this.hero.initialHealth}`}startNewRound(){this.timers.forEach(n=>{clearTimeout(n)}),this.increaseRound(),this.hero.updateHealth(),this.monster=new z,this.monster.create()}finishBattle(){this.storeResult(),this.showResult()}storeResult(){const n=JSON.parse(localStorage.getItem("gameResults"))||{};n[Object.keys(n).length+1]={heroName:this.hero.name,monstersDefeated:this.round-1},localStorage.setItem("gameResults",JSON.stringify(n))}showResult(){this.resultModal.querySelector(".result-name").textContent=this.hero.name,this.resultModal.querySelector(".result-number-of-monsters").textContent=this.round-1,this.createResultsTable(this.resultModal),this.field.classList.add("hidden"),this.resultModal.classList.remove("hidden")}createResultsTable(n){const e=n.querySelector("table"),t=JSON.parse(localStorage.getItem("gameResults")),o=t?Object.entries(t):[];if(0===o.length){const n=document.createElement("tr"),t=document.createElement("td");return t.innerHTML="NO DATA YET",t.colSpan="4",n.appendChild(t),void e.tBodies[0].appendChild(n)}o.sort((n,e)=>e[1].monstersDefeated-n[1].monstersDefeated),o.length=o.length<8?o.length:8,o.forEach((n,t)=>{const o=document.createElement("tr"),r=document.createElement("td"),i=document.createElement("td"),a=document.createElement("td");r.textContent=t+1,i.textContent=n[1].heroName,a.textContent=n[1].monstersDefeated,o.appendChild(r),o.appendChild(i),o.appendChild(a),e.tBodies[0].appendChild(o)})}stopGame(){this.homepage.classList.remove("hidden"),this.gamepage.classList.add("hidden"),this.resultModal.classList.add("hidden"),this.resultTable.tBodies[0].innerHTML="",this.field.classList.remove("hidden")}restartGame(){this.stopGame(),this.startGame()}showScoreboard(){this.createResultsTable(this.scoreboard),this.homepage.classList.add("hidden"),this.scoreboard.classList.remove("hidden")}showHomepage(){this.scoreboardTable.tBodies[0].innerHTML="",this.scoreboard.classList.add("hidden"),this.homepage.classList.remove("hidden")}}function U(n,e){return Math.floor(Math.random()*(e-n+1))+n}const G=new N;window.onload=(()=>{G.loadingPage.classList.add("hidden"),G.homepage.classList.remove("hidden"),G.addListeners()})},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var r,i=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(n,e,t){var o={},r=function(n){var e;return function(){return void 0===e&&(e=n.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),a=null,s=0,l=[],c=t(14);function d(n,e){for(var t=0;t<n.length;t++){var r=n[t],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function h(n,e){for(var t=[],o={},r=0;r<n.length;r++){var i=n[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function u(n,e){var t=i(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),l.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,r)}}function p(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=l.indexOf(n);e>=0&&l.splice(e,1)}function m(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),f(e,n.attrs),u(n,e),e}function f(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function g(n,e){var t,o,r,i;if(e.transform&&n.css){if(!(i=e.transform(n.css)))return function(){};n.css=i}if(e.singleton){var l=s++;t=a||(a=m(e)),o=x.bind(null,t,l,!1),r=x.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",f(e,n.attrs),u(n,e),e}(e),o=function(n,e,t){var o=t.css,r=t.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=c(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),r=function(){p(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){p(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=h(n,e);return d(t,e),function(n){for(var r=[],i=0;i<t.length;i++){var a=t[i];(s=o[a.id]).refs--,r.push(s)}n&&d(h(n,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete o[s.id]}}}};var b=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}();function x(n,e,t,o){var r=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=b(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}},function(n,e,t){n.exports=t.p+"1e9133a6dd78fe54176625109b410282.png"},function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=function(n){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"}(o),i=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(i).concat([r]).join("\n")}return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<n.length;r++){var a=n[r];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e){n.exports=function(n){return"string"!=typeof n?n:(/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),/["'() \t\n]/.test(n)?'"'+n.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':n)}},function(n,e,t){var o=t(18);(n.exports=t(17)(!1)).push([n.i,"/* General CSS */\n* {\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 10px;\n}\n\na {\n    color: rgb(0, 0, 0);\n    text-decoration: none;\n}\n\n.hidden {\n    display: none!important;\n}\n\nmain {\n    /* display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh; */\n}\n\n\n\n\n\n/* Homepage CSS */\n.homepage {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n.player-info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    /* text-align: center; */\n    font-size: 3rem;\n}\n.player-info h1 {\n    text-align: center;\n    /* width: 80%; */\n    font-size: 6rem;\n    padding: 20px 60px;\n}\n\n.player-info form label {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.invalid-field {\n    position: relative;\n    background-color: rgb(235, 79, 79);\n}\n\ninput[type=text] {\n    width: 40%;\n    text-align: center;\n    padding: 8px 12px;\n    margin: 0px 8px;\n    font-size: 2rem;\n    border: 1px solid rgb(0, 0, 0);\n    border-radius: 4px;\n    outline: none;\n}\n\n.buttons-container {\n    display: flex;\n    flex-direction: column;\n    padding: 15px 0px;\n}\n\n.page-btn {\n    font-size: 6rem;\n    font-weight: 700;\n    margin: 15px 0px;\n    padding: 10px 10px;\n    border: 14px solid rgb(0, 0, 0);\n    outline: none;\n    cursor: pointer;\n    transition: all 0.3s;\n}\n.page-btn:hover {\n    color: rgb(255, 255, 255);\n    background-color: rgb(0, 0, 0);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Gamepage CSS */\n.gamepage {\n    /* display: flex; */\n    /* flex-wrap: wrap; */\n    /* flex-direction: column; */\n    /* justify-content: space-between; */\n    /* width: 100%; */\n}\n\n.gamepage header {\n    display: flex;\n    justify-content: space-between;\n    background-color: darkcyan;\n}\n\n.gamepage .info {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    min-width: 200px;\n    background-color: lightgray;\n}\n\n.name {\n    font-size: 2.5rem;\n}\n\n.health {\n    font-size: 2.5rem;\n}\n\n.field {\n    display: flex;\n    justify-content: space-around;\n    align-items: flex-end;\n    height: 490px;\n    background-image: url("+o(t(16))+");\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n}\n\n.hero {\n    width: 200px;\n    height: 200px;\n    margin-bottom: 70px;\n    animation: heroAnimation 1s ease-in-out infinite;\n    /* background-color: bisque; */\n}\n\n.action {\n    margin-bottom: 140px;\n    /* background-color: violet; */\n}\n\n.game-btn {\n    width: 120px;\n    height: 40px;\n    font-size: 1.4rem;\n    border-radius: 0.4rem;\n    outline: none;\n    cursor: pointer;\n}\n\n.action-btn {\n    border-color: rgb(0, 123, 255);\n    background-color: rgb(0, 123, 255);\n    color: rgb(255, 255, 255);\n}\n\n.action-btn:hover {\n    border-color: rgb(0, 105, 217);\n    background-color: rgb(0, 105, 217);\n}\n.action-btn:disabled {\n    color: graytext;\n    cursor: not-allowed;\n    border-color: rgb(96, 151, 209);\n    background-color: rgb(96, 151, 209);\n}\n\n.monster {\n    width: 200px;\n    height: 200px;\n    margin-bottom: 70px;\n    position: relative;\n    /* background-color: red; */\n}\n\n.monster-attacked {\n    animation: squeezeMonster 1s ease-in-out 1;\n}\n\n.head {\n    position: absolute;\n    left: calc(50% - 40px);\n    width: 90px;\n    height: 90px;\n    z-index: 3;\n    animation: headAnimation 1s linear infinite;\n    /* background-color: rgb(0, 255, 21); */\n}\n\n.body {\n    position: absolute;\n    top: 30%;\n    left: calc(50% - 40px);\n    width: 90px;\n    height: 80px;\n    z-index: 2;\n    /* background-color: rgb(34, 42, 119); */\n}\n\n.legs {\n    position: absolute;\n    top: 65%;\n    left: calc(50% - 38px);\n    width: 100px;\n    height: 100px;\n    animation: legsAnimation 1s ease-in-out infinite;\n    /* background-color: rgb(146, 121, 207); */\n}\n\n.weapon {\n    position: absolute;\n    top: 30%;\n    left: 5%;\n    width: 90px;\n    height: 90px;\n    animation: weaponAnimation 1s ease-in-out infinite;\n    /* background-color: rgb(240, 93, 183); */\n}\n\n.modal {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    top: 0px;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    background-color: rgba(133, 133, 133, 0.5);\n}\n\n.spells-modal-inner {\n    display: flex;\n    flex-direction: column;\n    width: 40%;\n    height: 50%;\n    border-radius: 3%;\n    background-color: rgb(134, 134, 134);\n    /* background-color: rgb(0, 0, 0); */\n}\n\n.close-btn-container {\n    display: flex;\n    justify-content: flex-end;\n    /* background-color: rgb(73, 99, 99); */\n}\n\n.close-btn {\n    text-align: center;\n    width: 58px;\n    font-size: 5rem;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n}\n\n.spells-container {\n    display: flex;\n    height: calc(100% - 58px);\n    /* background-color: rgb(59, 182, 182); */\n}\n\n.spell {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    /* background-color: rgb(236, 183, 229); */\n}\n\n.attack-btn {\n    border-color: rgb(231, 79, 79);\n    background-color: rgb(231, 79, 79);\n    color: rgb(255, 255, 255);\n}\n\n.attack-btn:hover {\n    border-color: rgb(199, 67, 67);\n    background-color: rgb(199, 67, 67);\n}\n\n.heal-btn {\n    border-color: rgb(103, 219, 103);\n    background-color: rgb(103, 219, 103);\n    color: rgb(255, 255, 255);\n}\n\n.heal-btn:hover {\n    border-color: rgb(92, 190, 92);\n    background-color: rgb(92, 190, 92);\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.task-modal-inner {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 90%;\n    height: 90%;\n    padding: 10px;\n    background-color: rgb(255, 255, 255);\n}\n\n.task-heading {\n    text-align: center;\n    /* padding: 10px; */\n    font-size: 3rem;\n}\n.task-body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    /* background-color: rgb(103, 219, 103); */\n}\n.answer-btn-container {\n    text-align: center;\n    /* background-color: rgb(68, 145, 168); */\n}\n.answer-btn {\n    padding: 10px 40px;\n    font-size: 3rem;\n    border-width: 10px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.slowly-disappear {\n    transition: opacity 1s;\n}\n\n.correct {\n    background-color: green;\n}\n\n.incorrect {\n    background-color: red;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.result-modal {\n    flex-direction: column;\n    background-color: rgb(255, 255, 255);\n}\n\n.result-modal-buttons-container {\n    display: flex;\n}\n\n.game-homepage-btn, .game-play-again-btn {\n    margin: 0px 30px;\n    padding: 10px 40px;\n    font-size: 3rem;\n    border-width: 10px;\n}\n\n.result-modal p {\n    font-size: 3rem;\n    margin: 30px 0px;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Scoreboard CSS */\n.scoreboard {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n    padding: 10px;\n}\n.homepage-btn {\n    font-size: 4rem;\n    margin: 0px 0px 40px 0px;\n    border-width: 10px;\n}\ntable {\n    text-align: center;\n    border-collapse: collapse;\n    font-size: 3rem;\n}\ntable th, table td {\n    padding: 5px 10px;\n    border: 1px solid black;\n}\ntable th {\n    background-color: rgb(167, 167, 167);\n}\ntable tr:nth-child(2n + 1) {\n    background-color: rgb(233, 233, 233);\n}\n\n/* Basic Arithmetic CSS */\n.multiplier, .operation, .task-input {\n    margin: 3px;\n    padding: 12px;\n    font-size: 10rem;\n    font-weight: 700;\n}\n.operation {\n    font-weight: 400;\n}\n.task-input {\n    text-align: center;\n    width: 230px;\n    outline: black;\n    border: 2px solid black;\n}\n.loading-page {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 100vh;\n}\n.loader {\n    border: 20px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 20px solid #000000;\n    width: 100px;\n    height: 100px;\n    animation: spin 1.4s linear infinite;\n}\n\n/* Animations */\n@keyframes headAnimation {\n    0% {\n        top: 0px;\n    }\n    25% {\n        top: 3px;\n    }\n    50% {\n        left: calc(50% - 37px);\n    }\n    85% {\n        /* top: 0px; */\n        /* left: calc(50% - 10px); */\n    }\n    100% {\n        top: 0px;\n        left: calc(50% - 39px);\n    }\n}\n\n@keyframes weaponAnimation {\n    0% {\n        transform: rotate(0deg);\n    }\n    50% {\n        transform: rotate(5deg);\n    }\n    100% {\n        transform: rotate(0deg);\n    }\n}\n\n@keyframes legsAnimation {\n    50% {\n        transform: rotate(1deg);\n    }\n}\n\n@keyframes heroAnimation {\n    50% {\n        transform: rotate(-1deg);\n    }\n}\n\n@keyframes squeezeMonster {\n    50% {\n        transform: scaleY(0.1);\n        transform-origin: bottom;\n    }\n}\n\n@keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n\n\n/* page-btn и game-btn - какая-то ерунда */\n/* Hero name на главной странице остаётся красным полсе захода => выхода в Scoreboard */\n/* AnswerBtn disabled можно изменять стиль */\n",""])},function(n,e,t){var o=t(19);"string"==typeof o&&(o=[[n.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(15)(o,r);o.locals&&(n.exports=o.locals)}]);