(()=>{"use strict";function e(e,n,t){var r=new Date;r.setDate(r.getDate()+t),document.cookie=encodeURIComponent(e)+"="+n+(t?"; expires="+r.toUTCString():"")}var n=function(){function e(e,n,t){this.accepted=!0,this.id=e,this.name=n,this.policyUrl=t}return e.prototype.createDOMNode=function(){var e=this,n=document.createElement("li"),t=document.createElement("a");t.href=this.policyUrl;var r=document.createElement("input");return r.type="checkbox",r.checked=!0,r.onclick=function(){e.accepted?e.accepted=!1:e.accepted=!0},t.textContent=this.name,n.appendChild(t),n.appendChild(r),n},e}();function t(e){return t=this,r=void 0,c=function(){var t,r,o,c,a;return function(e,n){var t,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(i){switch(i.label){case 0:return t=[],[4,fetch(e).then((function(e){return e.json()}))];case 1:for(r=i.sent(),o=Object.keys(r.vendors).length,c=0;c<o;c++)void 0!==r.vendors[c]&&(a=new n(r.vendors[c].id,r.vendors[c].name,r.vendors[c].policyUrl),t.push(a));return[2,t]}}))},new((o=void 0)||(o=Promise))((function(e,n){function a(e){try{l(c.next(e))}catch(e){n(e)}}function i(e){try{l(c.throw(e))}catch(e){n(e)}}function l(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,i)}l((c=c.apply(t,r||[])).next())}));var t,r,o,c}function r(){var e=document.querySelector("#gdpr_consent"),n=document.querySelector("#main");null==e||e.classList.add("disabled"),null==n||n.classList.remove("wrapper"),document.body.style.overflow="auto"}var o,c="consent";-1===document.cookie.search("consent=")&&function(){return n=this,a=void 0,l=function(){var n,a,i;return function(e,n){var t,r,o,c,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(e){c=[6,e],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}(this,(function(l){switch(l.label){case 0:return document.body.insertAdjacentHTML("afterbegin",'\n    <div id="gdpr_consent">\n    <div class="c_container">\n      <img src="./assets/images/gdpr-consent/gdpr-flag.jpg" alt="gdpr-flag" class="gdpr_flag">\n      <img src="./assets/images/gdpr-consent/logo-n.svg" alt="logo optad360" class="c_image">\n      <h1 class="c_title">GDPR Consent</h1>\n      <p class="c_description">When you visit this site, this site and our partners use cookies and other methods to process your personal information in order to customize your experience. Please click "I agree" to accept usage of your data, you can select our partners who will be permitted aswell.</p>\n      <div class="c_policies">\n        <p class="c_partner_policy">Policy link</p>\n        <h3 class="c_title__partners">Partners</h3>\n        <p class="c_partner_policy c_policy_accept">Accept</p>\n      </div>\n      <ul class="c_partners"></ul>\n      <div class="c_buttons"> \n        <button class="c_button c_reject"> Reject </button>\n        <button class="c_button c_accept"> Accept </button>\n      </div>\n    </div>\n  </div>\n'),function(){var n=document.querySelector("#gdpr_consent"),t=null==n?void 0:n.querySelector(".c_reject"),a=null==n?void 0:n.querySelector(".c_accept");null==t||t.addEventListener("click",(function(){r(),e(c,"false",1)})),null==a||a.addEventListener("click",(function(){r();var n="true & partners=["+o.map((function(e){return e.accepted?e.id:null})).filter((function(e){return null!=e})).join("|")+"]";e(c,n,1)}))}(),n=document.querySelector("#gdpr_consent"),a=null==n?void 0:n.querySelector(".c_partners"),i=document.querySelector("#main"),document.body.style.overflow="hidden",null==i||i.classList.add("wrapper"),[4,t("https://optad360.mgr.consensu.org/cmp/v2/vendor-list.json")];case 1:return(o=l.sent()).map((function(e){return null==a?void 0:a.append(e.createDOMNode())})),[2]}}))},new((i=void 0)||(i=Promise))((function(e,t){function r(e){try{c(l.next(e))}catch(e){t(e)}}function o(e){try{c(l.throw(e))}catch(e){t(e)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof i?t:new i((function(e){e(t)}))).then(r,o)}c((l=l.apply(n,a||[])).next())}));var n,a,i,l}()})();