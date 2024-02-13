/*! For license information please see 312.4347816d.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[312],{6312:function(t,e,r){r.r(e),r.d(e,{default:function(){return E}});var n,o,i,a,c=r(3433),u=r(1413),s=r(5861),l=r(9439),f=r(2791),h=r(4420),p=r(8233),v=r(168),d=r(5867),g=d.ZP.ul(n||(n=(0,v.Z)(["\n  width: 1440px;\n  justify-content: center;\n  display: flex;\n  list-style: none;\n  flex-wrap: wrap;\n  gap: 40px;\n  margin-bottom: 80px;\n"]))),y=r(3249),m=r(184),w=function(t){var e=t.setFavorite,r=(0,h.I0)(),n=(0,h.v9)((function(t){return t.catalog})).catalog;f.useEffect((function(){r((0,y.pV)())}),[r]);var o="loaded"===n.status?n.items:[];return(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(g,{children:o.map((function(t,r){return(0,m.jsx)("li",{children:(0,m.jsx)(p.Z,{car:t,setFavorite:e})},"".concat(t._id,"-").concat(r))}))})})},x=r(7463),b=d.ZP.div(o||(o=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 50px 128px 150px 128px;\n"]))),L=(d.ZP.div(i||(i=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),d.ZP.button(a||(a=(0,v.Z)(["\n  color: #fff;\n  font-family: Manrope;\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n  padding: 13px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background-color: #3470ff;\n  margin-left: 20px;\n\n  &:hover {\n    background-color: #0b44cd;\n    transition: 0.5s;\n  }\n"]))));function j(){j=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:_(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="executing",v="completed",d={};function g(){}function y(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,b=x&&x(x(F([])));b&&b!==r&&n.call(b,a)&&(w=b);var L=m.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function P(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function _(e,r,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=k(c,n);if(u){if(u===d)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function k(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,k(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function Z(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(Z,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return y.prototype=m,o(L,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:y,configurable:!0}),y.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(P.prototype),s(P.prototype,c,(function(){return this})),e.AsyncIterator=P,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new P(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),s(L,u,"Generator"),s(L,a,(function(){return this})),s(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),d}},e}var E=function(t){var e=t.cars,r=t.setCars,n=t.favoriteToggle,o=(0,h.I0)(),i=(0,h.v9)((function(t){return t.catalog})).catalog,a=(0,f.useState)(null),p=(0,l.Z)(a,2),v=p[0],d=p[1],g=(0,f.useState)(!1),E=(0,l.Z)(g,2),P=E[0],_=E[1];(0,f.useEffect)((function(){var t=function(){var t=(0,s.Z)(j().mark((function t(){var e,n,a;return j().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,_(!0),e=localStorage.getItem("favs")?JSON.parse(localStorage.getItem("favs")).map((function(t){return t._id})):[],t.next=5,o((0,y.pV)({page:i.currentPage,itemsPerPage:i.itemsPerPage}));case 5:n=t.sent,a=n.map((function(t){return(0,u.Z)((0,u.Z)({},t),{},{favorite:!!e.includes(t._id)})})),r((function(t){return[].concat((0,c.Z)(t),(0,c.Z)(a))})),n.length<i.itemsPerPage&&o((0,y.eu)(!1)),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),d(t.t0.message);case 14:return t.prev=14,_(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[0,11,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}),[i.currentPage,i.itemsPerPage,r,o]);return(0,m.jsxs)(b,{children:[P&&(0,m.jsx)(x.Z,{}),v&&(0,m.jsx)("div",{children:v.message}),(0,m.jsx)(w,{cars:e,setFavorite:n}),(0,m.jsxs)("div",{children:[i.currentPage>1&&!P&&(0,m.jsx)(L,{onClick:function(){o((0,y.sn)()),o((0,y.eu)(!0))},children:"Go Back"}),i.hasMore&&!P&&(0,m.jsx)(L,{onClick:function(){o((0,y.D4)(i.currentPage+1))},children:"Load more"})]})]})}}}]);
//# sourceMappingURL=312.4347816d.chunk.js.map