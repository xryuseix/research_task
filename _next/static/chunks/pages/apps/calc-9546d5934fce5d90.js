(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{"./node_modules/calculator/calclator_bg.js":function(e,t,n){"use strict";n.a(e,(async function(r){n.d(t,{y:function(){return p}});var o=n("./node_modules/calculator/calclator_bg.wasm");e=n.hmd(e);var a=r([o]);o=(a.then?await a:a)[0];let l=0,c=null;function i(){return null!==c&&c.buffer===o.memory.buffer||(c=new Uint8Array(o.memory.buffer)),c}let u=new("undefined"===typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8");const s="function"===typeof u.encodeInto?function(e,t){return u.encodeInto(e,t)}:function(e,t){const n=u.encode(e);return t.set(n),{read:e.length,written:n.length}};let d=null;function f(){return null!==d&&d.buffer===o.memory.buffer||(d=new Int32Array(o.memory.buffer)),d}let h=new("undefined"===typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});function p(e){try{const p=o.__wbindgen_add_to_stack_pointer(-16);var t=function(e,t,n){if(void 0===n){const n=u.encode(e),r=t(n.length);return i().subarray(r,r+n.length).set(n),l=n.length,r}let r=e.length,o=t(r);const a=i();let c=0;for(;c<r;c++){const t=e.charCodeAt(c);if(t>127)break;a[o+c]=t}if(c!==r){0!==c&&(e=e.slice(c)),o=n(o,r,r=c+3*e.length);const t=i().subarray(o+c,o+r);c+=s(e,t).written}return l=c,o}(e,o.__wbindgen_malloc,o.__wbindgen_realloc),n=l;o.calc(p,t,n);var r=f()[p/4+0],a=f()[p/4+1];return c=r,d=a,h.decode(i().subarray(c,c+d))}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(r,a)}var c,d}h.decode()}))},"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapps%2Fcalc&absolutePagePath=private-next-pages%2Fapps%2Fcalc.tsx!":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/apps/calc",function(){return n("./pages/apps/calc.tsx")}])},"./components/Layout/index.tsx":function(e,t,n){"use strict";n.d(t,{A:function(){return d}});var r=n("./node_modules/react/jsx-runtime.js"),o=n("./styles/utils.module.css"),a=n.n(o),l=n("./components/Layout/layout.module.css"),c=n.n(l),i=n("./node_modules/next/link.js"),u=function(e){var t=e.home;return(0,r.jsxs)("footer",{className:c().footer,children:[!t&&(0,r.jsx)("div",{className:a().backToHome,children:(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back to home"})})}),(0,r.jsxs)("a",{href:"https://xryuseix.github.io",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,r.jsx)("span",{className:c().logo,children:(0,r.jsx)("img",{src:"/research/favicon.ico",alt:"xryuseix Logo",width:20,height:20})})]})]})},s=function(e){var t=e.children;return(0,r.jsx)("header",{children:t})},d=function(e){var t=e.children,n=e.headerChild;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{children:n}),(0,r.jsx)("main",{children:t}),(0,r.jsx)(u,{})]})}},"./components/calculator.tsx":function(e,t,n){"use strict";n.a(e,(async function(e){var r=n("./node_modules/react/jsx-runtime.js"),o=n("./node_modules/react/index.js"),a=n("./node_modules/calculator/calclator_bg.js"),l=n("./components/calculator.module.css"),c=n.n(l),i=e([a]);function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a=(i.then?await i:i)[0];var p=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},_=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=function(e,t){return!t||"object"!==p(t)&&"function"!==typeof t?u(e):t}(this,d(t).call(this,e))).state={formula:"((1+3)*-2)*3",ans:"24",equal:"="},n.handleChange=n.handleChange.bind(u(n)),n}var n,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,(o=[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({formula:t}),this.setState({equal:t.length?"=":""}),this.setState({ans:a.y(t)})}},{key:"addChar",value:function(e){var t=this.state.formula+e;this.setState({formula:t}),this.setState({ans:a.y(t)})}},{key:"render",value:function(){var e=this,t=this;return(0,r.jsxs)("div",{className:c().calculator_frame,children:[(0,r.jsxs)("div",{className:c().formula,children:[(0,r.jsx)("input",{type:"text",value:this.state.formula,onChange:this.handleChange}),this.state.equal," ",this.state.ans]}),(0,r.jsx)("table",{children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{className:c().calc_button_num,children:Object.keys(h(Array(10))).map((function(t){return(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:c().calc_button,onClick:function(){return e.addChar("".concat(t))},children:t})},t)}))}),(0,r.jsx)("tr",{className:c().calc_button_op,children:["+","-","*","/","%","(",")"].map((function(e){return(0,r.jsx)("td",{children:(0,r.jsx)("button",{className:c().calc_button,onClick:function(){return t.addChar(e)},children:e})},e)}))})]})})]})}}])&&s(n.prototype,o),l&&s(n,l),t}(o.Component);t.Z=_}))},"./node_modules/next/dist/client/link.js":function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,a=(o=n("./node_modules/react/index.js"))&&o.__esModule?o:{default:o},l=n("./node_modules/next/dist/shared/lib/router/router.js"),c=n("./node_modules/next/dist/client/router.js"),i=n("./node_modules/next/dist/client/use-intersection.js");var u={};function s(e,t,n,r){if(e&&l.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),d=a.default.useMemo((function(){var t=r(l.resolveHref(o,e.href,!0),2),n=t[0],a=t[1];return{href:n,as:e.as?l.resolveHref(o,e.as):a||n}}),[o,e.href,e.as]),f=d.href,h=d.as,p=e.children,_=e.replace,m=e.shallow,y=e.scroll,b=e.locale;"string"===typeof p&&(p=a.default.createElement("a",null,p));var v=(t=a.default.Children.only(p))&&"object"===typeof t&&t.ref,x=r(i.useIntersection({rootMargin:"200px"}),2),g=x[0],j=x[1],w=a.default.useCallback((function(e){g(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,g]);a.default.useEffect((function(){var e=j&&n&&l.isLocalURL(f),t="undefined"!==typeof b?b:o&&o.locale,r=u[f+"%"+h+(t?"%"+t:"")];e&&!r&&s(o,f,h,{locale:t})}),[h,f,j,b,n,o]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:i,scroll:c}))}(e,o,f,h,_,m,y,b)},onMouseEnter:function(e){l.isLocalURL(f)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,f,h,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:o&&o.locale,E=o&&o.isLocaleDomain&&l.getDomainLocale(h,C,o&&o.locales,o&&o.domainLocales);k.href=E||l.addBasePath(l.addLocale(h,C,o&&o.defaultLocale))}return a.default.cloneElement(t,k)};t.default=d},"./node_modules/next/dist/client/use-intersection.js":function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(i){o=!0,a=i}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!l,i=o.useRef(),u=r(o.useState(!1),2),s=u[0],d=u[1],f=o.useCallback((function(e){i.current&&(i.current(),i.current=void 0),n||s||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,l=r.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!l&&!s){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[s]),[f,s]};var o=n("./node_modules/react/index.js"),a=n("./node_modules/next/dist/client/request-idle-callback.js"),l="undefined"!==typeof IntersectionObserver;var c=new Map},"./pages/apps/calc.tsx":function(e,t,n){"use strict";n.a(e,(async function(e){n.r(t);var r=n("./node_modules/react/jsx-runtime.js"),o=n("./components/calculator.tsx"),a=n("./components/Layout/index.tsx"),l=e([o]);o=(l.then?await l:l)[0];t.default=function(){return(0,r.jsxs)(a.A,{children:[(0,r.jsx)("h1",{children:"Calculator"}),(0,r.jsx)(o.Z,{})]})}}))},"./components/Layout/layout.module.css":function(e){e.exports={footer:"layout_footer__J3M_5",logo:"layout_logo__otUlc",backToHome:"layout_backToHome__bSHwR"}},"./components/calculator.module.css":function(e){e.exports={formula:"calculator_formula__1lPrW",calculator_frame:"calculator_calculator_frame__2Dbnf",calc_button:"calculator_calc_button__1JLG2"}},"./styles/utils.module.css":function(e){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",borderCircle:"utils_borderCircle__13qdJ",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",lightText:"utils_lightText__12Ckm"}},"./node_modules/next/link.js":function(e,t,n){e.exports=n("./node_modules/next/dist/client/link.js")},"./node_modules/calculator/calclator_bg.wasm":function(e,t,n){"use strict";e.exports=n.v(t,e.id,"c7eaf3a1922d6313")}},function(e){e.O(0,[774,888,179],(function(){return t="./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fapps%2Fcalc&absolutePagePath=private-next-pages%2Fapps%2Fcalc.tsx!",e(e.s=t);var t}));var t=e.O();_N_E=t}]);