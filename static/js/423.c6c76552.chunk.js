/*! For license information please see 423.c6c76552.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[423],{5024:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var r=e(1413),o=e(5861),i=(e(2791),e(4420)),a=e(7689),c=e(1134),s=e(2492),u=e(1686),l=e(184);function h(){h=function(){return n};var t,n={},e=Object.prototype,r=e.hasOwnProperty,o=Object.defineProperty||function(t,n,e){t[n]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(t){u=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var i=n&&n.prototype instanceof x?n:x,a=Object.create(i.prototype),c=new O(r||[]);return o(a,"_invoke",{value:_(t,e,c)}),a}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var f="suspendedStart",p="executing",g="completed",m={};function x(){}function y(){}function w(){}var v={};u(v,a,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(I([])));j&&j!==e&&r.call(j,a)&&(v=j);var k=w.prototype=x.prototype=Object.create(v);function L(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function E(t,n){function e(o,i,a,c){var s=d(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&r.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):n.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new n((function(n,o){e(t,r,n,o)}))}return i=i?i.then(o,o):o()}})}function _(n,e,r){var o=f;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=Z(c,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===f)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var u=d(n,e,r);if("normal"===u.type){if(o=r.done?g:"suspendedYield",u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(o=g,r.method="throw",r.arg=u.arg)}}}function Z(n,e){var r=e.method,o=n.iterator[r];if(o===t)return e.delegate=null,"throw"===r&&n.iterator.return&&(e.method="return",e.arg=t,Z(n,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var i=d(o,n.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[n.resultName]=a.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function P(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function z(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function I(n){if(n||""===n){var e=n[a];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var o=-1,i=function e(){for(;++o<n.length;)if(r.call(n,o))return e.value=n[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof n+" is not iterable")}return y.prototype=w,o(k,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:y,configurable:!0}),y.displayName=u(w,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===y||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(k),t},n.awrap=function(t){return{__await:t}},L(E.prototype),u(E.prototype,c,(function(){return this})),n.AsyncIterator=E,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(k),u(k,s,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=I,O.prototype={constructor:O,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(z),!n)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function o(r,o){return c.type="throw",c.arg=n,e.next=r,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),m},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),z(e),m}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;z(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:I(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=t),m}},n}var d=function(){var t=(0,i.v9)(s.Jt),n=(0,i.I0)(),e=(0,c.cI)({defaultValues:{email:"",password:""},mode:"onChange"}),d=e.register,f=e.handleSubmit,p=e.formState,g=p.errors,m=p.isValid,x=function(){var t=(0,o.Z)(h().mark((function t(e){var r;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n((0,s.Mq)(e));case 2:(r=t.sent).payload||alert("Failed to login!"),"token"in r.payload&&window.localStorage.setItem("token",r.payload.token);case 5:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return t?(0,l.jsx)(a.Fg,{to:"/"}):(0,l.jsxs)(u.W2,{children:[(0,l.jsx)(u.Dx,{children:"Log In"}),(0,l.jsxs)(u.Yb,{children:[(0,l.jsxs)(u.l0,{onSubmit:f(x),children:[(0,l.jsxs)(u.__,{children:["E-Mail",(0,l.jsx)(u.II,(0,r.Z)({placeholder:"E-Mail",type:"email"},d("email",{required:"Enter your email"}))),(0,l.jsx)(u.jj,{})]}),(0,l.jsxs)(u.__,{children:["Password",(0,l.jsx)(u.II,(0,r.Z)({placeholder:"Password",type:"password"},d("password",{required:"Enter your password"}))),g.password&&(0,l.jsx)(u.jj,{children:g.password.message})]}),(0,l.jsx)(u.zx,{disabled:!m,type:"submit",children:"Log in"})]}),(0,l.jsx)(u.Ee,{})]})]})}},1686:function(t,n,e){e.d(n,{zx:function(){return k},W2:function(){return m},jj:function(){return j},l0:function(){return w},Yb:function(){return x},Ee:function(){return L},II:function(){return b},__:function(){return v},Dx:function(){return y}});var r,o,i,a,c,s,u,l,h,d=e(168),f=e(5867),p=e.p+"static/media/car.37eba17d437b5386e575.png",g=e.p+"static/media/back-image.191120c72a8ca4203e17.PNG",m=f.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center; \n  align-items: center; \n  height: 105vh; \n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  @media screen and (min-width: 768px) {\n    height: 120vh;\n  }\n\n  @media screen and (min-width: 1200px) {\n    height: 90vh;\n  }\n"])),g),x=f.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 80%; /* Changed to percentage for responsiveness */\n  padding: 40px; \n  border: 1px solid #ccc;\n  border-radius: 8px;\n  background-color: rgba(244, 247, 247, 0.247);\n\n  @media screen and (max-width: 768px) {\n    max-width: 768px;\n  }\n\n  @media screen and (min-width: 1200px) {\n    max-width: 1200px;\n    flex-direction: row; /* For screens wider than 768px, change to row */\n    align-items: flex-start; /* Align items to the top */\n  }\n"]))),y=f.ZP.h2(i||(i=(0,d.Z)(["\n  text-align: center;\n  margin-bottom: 30px; \n  color: black;\n  font-weight: 700;\n  font-size: 36px; \n\n  @media screen and (max-width: 480px) {\n    font-size: 24px; /* Decrease font size for screens less than 480px */\n  }\n"]))),w=f.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 90%; /* Full width for smaller screens */\n  max-width: 500px; /* Added max-width for larger screens */\n\n  @media screen and (min-width: 768px) {\n    margin-right: 20px; /* Add margin between form and image */\n  }\n"]))),v=f.ZP.label(c||(c=(0,d.Z)(["\n  margin-bottom: 20px; \n  color: #333;\n  font-size: 18px; \n\n  @media screen and (max-width: 768px) {\n    font-size: 16px; /* Decrease font size for screens less than 768px */\n  }\n"]))),b=f.ZP.input(s||(s=(0,d.Z)(["\n  width: 100%; /* Full width for smaller screens */\n  padding: 15px; \n  margin-top: 10px; \n  margin-bottom: 20px; \n  border: 2px solid blue; \n  border-radius: 6px; \n  font-size: 16px; \n\n  @media screen and (min-width: 768px) {\n    width: 93%; /* Decrease width for screens wider than 768px */\n  }\n"]))),j=f.ZP.span(u||(u=(0,d.Z)(["\n  color: red;\n  font-size: 16px; \n\n  @media screen and (max-width: 768px) {\n    font-size: 14px; /* Decrease font size for screens less than 768px */\n  }\n"]))),k=f.ZP.button(l||(l=(0,d.Z)(["\n  width: 200px; /* Full width for smaller screens */\n  margin-left: auto;\n  margin-right: auto;\n  padding: 15px 25px; \n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #0056b3;\n  }\n\n  &:disabled {\n    background-color: #ccc;\n    cursor: not-allowed;\n  }\n"]))),L=f.ZP.div(h||(h=(0,d.Z)(["\n  width: 300px;\n  height: 200px; /* Set height for the image */\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n  background-image: url('","');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  @media screen and (min-width: 768px) {\n    width: 500px; /* Set width for screens wider than 768px */\n    height: 300px; /* Set height to fill the container */\n  }\n"])),p)}}]);
//# sourceMappingURL=423.c6c76552.chunk.js.map