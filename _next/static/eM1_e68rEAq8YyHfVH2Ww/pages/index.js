(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{110:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(0)),i=a(n(230)),s=a(n(20));function a(e){return e&&e.__esModule?e:{default:e}}var u=(0,i.default)({}),l=u.Provider,c=u.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,i=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(c,null,function(t){return o.default.createElement(e,r({components:n||t},i))})}};var f=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};f.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},t.default=f},111:function(e,t,n){e.exports=n(209)},112:function(e,t,n){e.exports=n(109)},208:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(245),{page:e.exports.default}})},209:function(e,t,n){"use strict";var r=n(21),o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(210)),s=o(n(49)),a=o(n(8)),u=o(n(9)),l=o(n(17)),c=o(n(18)),f=o(n(19)),p=o(n(51)),h=o(n(14)),d=n(106),m=r(n(0)),v=(o(n(20)),r(n(48))),y=n(26);var g=function(e){function t(){var e,n,r,o,i,u;(0,a.default)(this,t);for(var f=arguments.length,m=new Array(f),g=0;g<f;g++)m[g]=arguments[g];return n=(0,l.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(m))),(0,h.default)((0,p.default)((0,p.default)(n)),"formatUrls",(r=function(e,t){return{href:e&&"object"===(0,s.default)(e)?(0,d.format)(e):e,as:t&&"object"===(0,s.default)(t)?(0,d.format)(t):t}},o=null,i=null,u=null,function(e,t){if(e===o&&t===i)return u;var n=r(e,t);return o=e,i=t,u=n,n})),(0,h.default)((0,p.default)((0,p.default)(n)),"linkClicked",function(e){var t=e.currentTarget,r=t.nodeName,o=t.target;if("A"!==r||!(o&&"_self"!==o||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,y.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(s)){var u=window.location.pathname;s=(0,d.resolve)(u,s),a=a?(0,d.resolve)(u,a):s,e.preventDefault();var l=n.props.scroll;null==l&&(l=a.indexOf("#")<0);var c=n.props.replace?"replace":"push";v.default[c](s,a,{shallow:n.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(e){n.props.onError&&n.props.onError(e)})}}}),n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,i.default)(this.props.href)!==(0,i.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,d.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"==typeof t&&(t=m.default.createElement("a",null,t));var i=m.Children.only(t),s={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),s.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(s.href=(0,v._rewriteUrlForNextExport)(s.href)),m.default.cloneElement(i,s)}}]),t}(m.Component);t.default=g},210:function(e,t,n){e.exports=n(211)},211:function(e,t,n){var r=n(1),o=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.flush=function(){var e=a.cssRules();return a.flush(),e};var o,i=n(0),s=n(213);var a=new((o=s)&&o.__esModule?o:{default:o}).default,u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.prevProps={},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),r(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.styleId!==e.styleId||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){a.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.styleId&&a.remove(this.prevProps),a.add(this.props),this.prevProps=this.props),null}}],[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return a.computeId(t,n)}).join(" ")}}]),t}();t.default=u},213:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=s(n(214)),i=s(n(215));function s(e){return e&&e.__esModule?e:{default:e}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,u=void 0===a?"undefined"!=typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=u,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}return r(e,[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.css),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),r=n.styleId,o=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=o.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[r]=i,this._instancesCounts[r]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join("\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var r=String(n),i=t+r;return e[i]||(e[i]="jsx-"+(0,o.default)(t+"-"+r)),e[i]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var o=n+r;return t[o]||(t[o]=r.replace(e,n)),t[o]}}},{key:"getIdAndRules",value:function(e){var t=this;if(e.dynamic){var n=this.computeId(e.styleId,e.dynamic);return{styleId:n,rules:Array.isArray(e.css)?e.css.map(function(e){return t.computeSelector(n,e)}):[this.computeSelector(n,e.css)]}}return{styleId:this.computeId(e.styleId),rules:Array.isArray(e.css)?e.css:[e.css]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}]),e}();t.default=a},214:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},215:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var r=e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,i=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,u=void 0===a?r:a,l=t.isBrowser,c=void 0===l?"undefined"!=typeof window:l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(o(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",s("boolean"==typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}return n(e,[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"==typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!=typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(t){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];s(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&s(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r}},{key:"length",get:function(){return this._rulesCount}}]),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,n(216))},216:function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,l=[],c=!1,f=-1;function p(){c&&u&&(c=!1,u.length?l=u.concat(l):f=-1,l.length&&h())}function h(){if(!c){var e=a(p);c=!0;for(var t=l.length;t;){for(u=l,l=[];++f<t;)u&&u[f].run();f=-1,t=l.length}u=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new d(e,t)),1!==l.length||c||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},229:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(0),s=l(i),a=l(n(108)),u=n(110);function l(e){return e&&e.__esModule?e:{default:e}}var c={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,i=void 0===o?{}:o,u=e.children,l=e.components,f=void 0===l?{}:l,p=e.Layout,h=e.layoutProps,d=f[n+"."+t]||f[t]||c[t]||t;return p?((0,a.default)(this,p),s.default.createElement(p,r({components:f},h),s.default.createElement(d,i,u))):s.default.createElement(d,i,u)}}]),t}();t.default=(0,u.withMDXComponents)(f)},230:function(e,t,n){"use strict";t.__esModule=!0;var r=i(n(0)),o=i(n(231));function i(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},231:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(s(r),s(n(20))),i=s(n(232));s(n(233));function s(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=1073741823;t.default=function(e,t){var n,s,f="__create-react-context-"+(0,i.default)()+"__",p=function(e){function n(){var t,r,o,i;a(this,n);for(var s=arguments.length,l=Array(s),c=0;c<s;c++)l[c]=arguments[c];return t=r=u(this,e.call.apply(e,[this].concat(l))),r.emitter=(o=r.props.value,i=[],{on:function(e){i.push(e)},off:function(e){i=i.filter(function(t){return t!==e})},get:function(){return o},set:function(e,t){o=e,i.forEach(function(e){return e(o,t)})}}),u(r,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[f]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((i=n)===(s=r)?0!==i||1/i==1/s:i!=i&&s!=s)?o=0:(o="function"==typeof t?t(n,r):c,0!=(o|=0)&&this.emitter.set(e.value,o))}var i,s},n.prototype.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[f]=o.default.object.isRequired,n);var h=function(t){function n(){var e,r;a(this,n);for(var o=arguments.length,i=Array(o),s=0;s<o;s++)i[s]=arguments[s];return e=r=u(this,t.call.apply(t,[this].concat(i))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!=((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},u(r,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?c:t},n.prototype.componentDidMount=function(){this.context[f]&&this.context[f].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?c:e},n.prototype.componentWillUnmount=function(){this.context[f]&&this.context[f].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[f]?this.context[f].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return h.contextTypes=((s={})[f]=o.default.object,s),{Provider:p,Consumer:h}},e.exports=t.default},232:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(74))},233:function(e,t,n){"use strict";var r=n(234);e.exports=r},234:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},245:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(111),s=n.n(i),a=n(38),u=n.n(a),l={bg:"#FFFFFF",textTitle:"#444444"},c=n(112),f=n.n(c);function p(e){var t=e.children;return r.createElement("div",{className:"wrapper"},t)}var h=function(e){return r.createElement("div",{className:u.a.dynamic([["1229150969",[l.bg,l.textTitle,l.textTitle,l.bg]]])},r.createElement(f.a,null,r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:u.a.dynamic([["1229150969",[l.bg,l.textTitle,l.textTitle,l.bg]]])}),r.createElement("meta",{charSet:"utf-8",className:u.a.dynamic([["1229150969",[l.bg,l.textTitle,l.textTitle,l.bg]]])})),r.createElement(u.a,{styleId:"1229150969",css:["html,body{margin:0;background-color:".concat(l.bg,';font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto, Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol";}'),".content p{margin-bottom:2em;}","a{color:".concat(l.textTitle,";-webkit-text-decoration:none;text-decoration:none;}"),"a:hover{background:".concat(l.textTitle,";color:").concat(l.bg,";-webkit-text-decoration:none;text-decoration:none;}"),".wrapper{margin:100px auto;padding:1em;}","@media (min-width:800px){.wrapper{width:600px;padding:0em;}}"],dynamic:[l.bg,l.textTitle,l.textTitle,l.bg]}),r.createElement(p,null,e.children))};function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){return r.createElement("div",{style:d({width:220,height:75},e.style)},r.createElement("svg",{width:"220px",height:"75px",viewBox:"0 0 624 212",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},r.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},r.createElement("g",{transform:"translate(-1.000000, 0.000000)",fill:l.textTitle},r.createElement("path",{d:"M106.705343,169.807649 L103.432432,208 L64.2432432,208 L67.9553615,171.838449 L106.705343,169.807649 Z M47.8577506,172.89172 L39.6486486,208 L1,208 L9.99611241,174.875965 L47.8577506,172.89172 Z M211.742992,164.302859 C210.809406,177.868041 209.638116,192.689099 209.638116,208 L169.167024,208 C168.897216,205.833554 168.627409,203.667107 168.627409,200.417437 C168.627409,193.296729 169.557147,179.443805 170.494093,166.464622 L211.742992,164.302859 Z M154.187234,167.319228 L147.042827,208 L109,208 L115.76855,169.332666 L154.187234,167.319228 Z M320.120968,158.62301 C319.164269,173.684209 317.638116,190.522979 317.638116,208 L277.167024,208 C276.897216,205.833554 276.627409,203.667107 276.627409,200.417437 C276.627409,192.24267 277.852772,175.195066 278.907656,160.782908 L320.120968,158.62301 Z M263.190491,161.60661 L255.042827,208 L217,208 L224.768489,163.620221 L263.190491,161.60661 Z M427.512457,152.99486 C422.080621,177.314234 417.807079,186.263758 411.574032,195.213282 C403.170843,207.938697 391.243736,212 367.931663,212 C340.28246,212 327,206.314176 327,177.072797 C327,172.278105 327.401735,166.359869 328.375329,158.190417 L427.512457,152.99486 Z M589.298083,144.516035 L573.282235,208 L519.398281,208 L523.798065,147.948745 L589.298083,144.516035 Z M507.131034,148.822227 L490.425501,208 L436,208 L441.373741,152.268421 L507.131034,148.822227 Z"}),r.createElement("path",{d:"M99.9983461,154.7193 L6.13443528,159.638499 L35.489552,51.5518196 L108.511381,55.3787315 L99.9983461,154.7193 Z M204.635251,149.235512 L110.422183,154.17301 L127.541122,56.376038 L223.688276,61.4148967 C223.232192,64.1414153 222.719167,67.1287692 222.143469,70.4306473 C217.017131,100.490092 211.08137,103.468956 199.20985,110.239102 L198.940043,111.863937 C203.796574,117.280053 204.875803,121.612946 204.875803,139.215324 C204.875803,142.425007 204.785578,145.770529 204.635251,149.235512 Z M219.422122,148.460565 L234.559363,61.9846263 L330.734136,67.0249326 C330.545001,68.1220043 330.348198,69.2564377 330.143469,70.4306473 C325.017131,100.490092 319.08137,103.468956 307.20985,110.239102 L306.940043,111.863937 C311.796574,117.280053 312.875803,121.612946 312.875803,139.215324 C312.875803,140.639135 312.858049,142.089677 312.825169,143.565519 L219.422122,148.460565 Z M434.016067,72.4377092 C432.269977,83.7261564 429.859715,97.9914757 426.615034,116.42401 C425.207166,124.419381 423.900772,131.502556 422.668393,137.808897 L322.441724,143.061537 C324.178792,131.465072 326.667622,116.63252 330.113895,97.2005109 C332.176819,85.4098142 334.021694,75.57925 335.730468,67.2867792 L434.016067,72.4377092 Z M470.275288,135.313908 L434.829409,137.171548 L441.035693,72.8055922 L477.452276,74.7141045 L470.275288,135.313908 Z M492.03463,75.4783333 L548.185025,78.4210508 L545.305953,131.381717 L474.323368,135.101757 L492.03463,75.4783333 Z M550.05132,131.133023 L562.161607,79.1535324 L597.322964,80.996261 L585.138276,129.294194 L550.05132,131.133023 Z"}),r.createElement("path",{d:"M47.5117236,36.7420275 L56.6756757,3 L121,3 L117.792822,40.4253037 L47.5117236,36.7420275 Z M138.14651,41.4919953 L144.884368,3 L200.464668,3 C225.556745,3 235,12.2073976 235,30.8929987 C235,35.8541756 234.720513,40.39457 233.948195,46.5127489 L138.14651,41.4919953 Z M245.164751,47.1005837 L252.884368,3 L308.464668,3 C333.556745,3 343,12.2073976 343,30.8929987 C343,37.2583022 342.539923,42.9309356 341.169178,52.1319625 L245.164751,47.1005837 Z M347.036646,52.4394635 C351.807432,32.8793822 355.82581,25.0023282 361.425968,16.7867178 C369.829157,4.33205619 381.756264,0 405.339408,0 C433.259681,0 446,5.95657727 446,35.1979566 C446,40.6537924 445.479835,47.4604753 444.166071,57.529801 L347.036646,52.4394635 Z M450.476723,57.8605282 L455.766476,3 L493.945559,3 L487.220229,59.7861737 L450.476723,57.8605282 Z M504.428129,60.6880016 L521.56447,3 L560.2851,3 L556.999262,63.4431379 L504.428129,60.6880016 Z M573.61892,64.3141373 L587.904011,3 L625,3 L609.062936,66.1716795 L573.61892,64.3141373 Z"})))))},y=n(6);function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=function(e){var t=e.components;g(e,["components"]);return o.a.createElement(y.MDXTag,{name:"wrapper",components:t},o.a.createElement(y.MDXTag,{name:"p",components:t},"We are a group of software engineers who do love working on challenging\nproblems. We specialize in building products for ",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"data management")," and\n",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"development tools"),". We know how to incrementally improve ",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"legacy systems"),"\nwithout disruptions."))};function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=function(e){var t=e.components;b(e,["components"]);return o.a.createElement(y.MDXTag,{name:"wrapper",components:t},o.a.createElement(y.MDXTag,{name:"p",components:t},"We prioritize working on robust and maintainable software and therefore our\npreferred technology of choice is ",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"ReasonML/OCaml"),". We also have expertise in\n",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"JavaScript"),", ",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"Python"),", ",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"Erlang"),", ",o.a.createElement(y.MDXTag,{name:"strong",components:t,parentName:"p"},"C")," programming languages."))};function S(e){var t={display:"inline",fontWeight:"900",color:l.textTitle,textTransform:"uppercase",textAlign:"right",fontSize:"10pt"},n=(e.title||"learn more")+" →";return r.createElement("div",{style:t},r.createElement(s.a,{href:e.href},n))}function E(e){var t=e.children,n=(e.href,e.title,{display:"inline",fontSize:"28pt",textTransform:"uppercase",color:l.textTitle,fontWeight:"900"});return r.createElement("div",{style:{}},r.createElement("div",{style:n},t))}function T(e){var t=e.title,n=e.children,o=e.href,i=e.hrefTitle,s={fontSize:"16pt",fontWeight:"500",color:l.textTitle,marginTop:20};return r.createElement("div",{style:{marginBottom:"4em",padding:10}},r.createElement(E,{href:o,title:i},t),r.createElement("div",{className:"content",style:s},n),o&&r.createElement(S,{href:o,title:i}))}t.default=function(){return r.createElement(h,null,r.createElement(v,{style:{margin:"100px auto"}}),r.createElement(T,{href:"about",title:"Who we are",hrefTitle:"Learn more about us"},r.createElement(_,null)),r.createElement(T,{href:"tech",title:"Technology",hrefTitle:"read about details behind our technology choice"},r.createElement(w,null)),r.createElement(T,{title:"Projects",href:"projects",hrefTitle:"See the full list of what we are working on"},r.createElement("p",null,"TODO")),r.createElement(T,{title:"Team",href:"people",hrefTitle:"Meet the faces"},r.createElement("p",null,"TODO")))}},38:function(e,t,n){e.exports=n(212)},6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(229);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return i(r).default}});var o=n(110);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return i(o).default}})}},[[208,1,0]]]);