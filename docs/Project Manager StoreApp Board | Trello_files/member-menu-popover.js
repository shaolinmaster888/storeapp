webpackJsonp([19],{"./app/gamma/src/components/popover/popover-menu.less":function(e,t,o){var n=o('./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3414/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popover/popover-menu.less');"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0};o("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./app/gamma/src/components/popover/popover-menu.tsx":function(e,t,o){"use strict";o.d(t,"c",function(){return h}),o.d(t,"b",function(){return v}),o.d(t,"a",function(){return y});var n=o("./node_modules/classnames/index.js"),r=o.n(n),a=o("./app/common/lib/util/forward-ref-component.ts"),s=o("./app/common/components/singlespa/router-link.tsx"),c=o("./node_modules/react/index.js"),l=o.n(c),i=o("./app/gamma/src/components/popover/popover-menu.less"),p=o.n(i),u=o("./node_modules/@trello/a11y/index.ts");function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(o.push(s.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function f(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var b=function(e){var t=e.children,o=e.description,n=e.rawDescription,a=e.title;return l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:r()(p.a.title,o&&p.a.withoutMargins)},a||t),(o||n)&&l.a.createElement("p",{className:p.a.description},o||n))},g=function(e){var t=e.appendSeparator,o=e.children;return l.a.createElement("li",{className:r()(p.a.item,t&&p.a.withSeparator)},o)},h=function(e){var t=e.appendSeparator,o=e.testId,n=e.href,a=e.className,c=f(e,["appendSeparator","testId","href","className"]),i=m(Object(u.a)(),2),h=i[0],v=i[1];return l.a.createElement(g,{appendSeparator:t},l.a.createElement(s.a,d({className:r()(p.a.link,a,h&&p.a.linkFocusRing),href:n,testId:o},v),l.a.createElement(b,c)))},v=Object(a.a)("PopoverMenuButton",function(e,t){var o=e.appendSeparator,n=e.onClick,a=e.className,s=e.disabled,c=e.testId,i=f(e,["appendSeparator","onClick","className","disabled","testId"]),h=m(Object(u.a)(),2),v=h[0],y=h[1];return l.a.createElement(g,{appendSeparator:o},l.a.createElement("button",d({className:r()(p.a.link,v&&p.a.linkFocusRing,a),disabled:s,onClick:n,"data-test-id":c,ref:t},y),l.a.createElement(b,i)))}),y=function(e){var t=e.className,o=e.children,n=e.testId;return l.a.createElement("nav",{className:t},l.a.createElement("ul",{"data-test-id":n},o))}},"./app/gamma/src/components/popovers/change-password/change-password.less":function(e,t,o){var n=o('./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3414/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/change-password/change-password.less');"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0};o("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./app/gamma/src/components/popovers/change-password/change-password.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return u});var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./app/gamma/src/util/prevent-default.ts"),s=o("./app/gamma/src/components/popovers/change-password/change-password.less"),c=o.n(s),l=o("./app/common/lib/util/i18n/index.ts"),i=Object(l.c)("popover_change_set_password"),p=Object(l.c)("password error"),u=function(e){var t=e.onChangePassword,o=e.hasPassword,n=e.errors;return r.a.createElement("form",{className:c.a.form,onSubmit:Object(a.a)(t,!0)},o&&[r.a.createElement("label",{key:"oldPasswordLabel",htmlFor:"oldPassword"},i("old-password")),r.a.createElement("input",{key:"oldPasswordInput",id:"oldPassword",type:"password",name:"oldPassword"})],r.a.createElement("label",{htmlFor:"password1"},i(o?"new-password":"password")),r.a.createElement("input",{id:"password1",type:"password",name:"password1"}),r.a.createElement("label",{htmlFor:"password2"},i(o?"new-password-again":"password-again")),r.a.createElement("input",{id:"password2",type:"password",name:"password2"}),n.map(function(e){return r.a.createElement("p",{className:"error"},p(e))}),r.a.createElement("button",{type:"submit"},i("save")),!o&&r.a.createElement("div",{className:c.a.noPasswordFooter},r.a.createElement("hr",null),r.a.createElement("div",{className:c.a.grayText},p("you-havent-set-a-password-yet-you-can-set-a-password-so-you-can-log-onto-trello-with-just-your-username-or-email-address"))))}},"./app/gamma/src/components/popovers/change-password/index.tsx":function(e,t,o){"use strict";var n=o("./node_modules/@trello/analytics/index.ts"),r=o("./app/gamma/src/modules/index.ts"),a=o("./node_modules/react/index.js"),s=o.n(a),c=o("./node_modules/react-redux/es/index.js"),l=o("./app/gamma/src/selectors/index.ts"),i=o("./app/gamma/src/components/popovers/change-password/change-password.tsx");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e,o,n,r,a,s,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=new Array(l),u=0;u<l;u++)i[u]=arguments[u];return n=this,r=(e=d(t)).call.apply(e,[this].concat(i)),o=!r||"object"!==p(r)&&"function"!=typeof r?m(n):r,a=m(o),c=function(){var e=o.props.me.loginTypes;return!(!e||!e.includes("password"))},(s="hasPassword")in a?Object.defineProperty(a,s,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[s]=c,o}var o,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,s.a.Component),o=t,(r=[{key:"componentDidMount",value:function(){Object(n.trackUe)({category:n.Noun.HEADER,verb:n.Verb.OPENS,directObj:n.Noun.CHANGE_PASSWORD,context:"Change password popover opened in header"})}},{key:"render",value:function(){var e=this.props,t=e.changePassword,o=e.errors;return s.a.createElement(i.a,{onChangePassword:t,hasPassword:this.hasPassword(),errors:o})}}])&&u(o.prototype,r),a&&u(o,a),t}();t.a=Object(c.b)(function(e,t){return{me:Object(l.G)(e),errors:e.ui.errors.changePassword}},function(e,t){return{changePassword:function(t){var o=t.password1,n=t.password2;(o||n)&&e(o!==n?Object(r.updatePasswordError)("must match"):Object(r.updatePassword)(t))}}})(b)},"./app/gamma/src/components/popovers/header-member-menu/index.tsx":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("./app/src/components/LanguagePicker/index.ts"),r=o("./node_modules/@trello/config/index.ts"),a=o("./app/gamma/src/components/popover/index.tsx"),s=o("./app/gamma/src/components/popover/popover-menu.tsx"),c=o("./app/gamma/src/components/popovers/change-password/index.tsx"),l=o("./app/gamma/src/components/popovers/help/index.tsx"),i=o("./app/gamma/src/components/popovers/popover-ids.ts"),p=o("./app/gamma/src/modules/index.ts"),u=o("./node_modules/react/index.js"),d=o.n(u),m=o("./node_modules/react-redux/es/index.js"),f=o("./app/gamma/src/selectors/index.ts"),b=o("./app/gamma/src/util/prevent-default.ts"),g=o("./node_modules/@trello/webdriverio-tests/index.ts"),h=o("./app/common/lib/util/i18n/index.ts"),v=o("./node_modules/@trello/feature-flag-client/index.ts"),y=Object(h.c)("header_member_menu"),x=Object(h.b)("view title");t.default=Object(m.b)(function(e){var t=Object(f.G)(e);return{canLogout:!!(t&&t.loginTypes&&t.loginTypes.length),me:t,showBillingUrl:Object(f._14)(e)&&!r.dontUpsell}},function(e){return{onClickLogout:function(){e(Object(p.logout)())}}})(function(e){var t=e.canLogout,o=e.me,r=e.onClickLogout,p=e.showBillingUrl,u=e.target;if(!o)return null;var m="".concat(o.name," (").concat(o.username,")");return d.a.createElement(a.a,{name:i.e,offsetTop:38,title:m,target:u,testId:g.HeaderTestIds.MemberMenuPopover},function(e){var a=e.push;return d.a.createElement(d.a.Fragment,null,d.a.createElement(s.a,null,v.featureFlagClient.get("treehouse.web.profile-redesign")?d.a.createElement(d.a.Fragment,null,d.a.createElement(s.c,{href:"/".concat(o.username,"/profile"),title:y("profile-and-visibility"),testId:g.HeaderTestIds.MemberMenuProfile}),d.a.createElement(s.c,{href:"/".concat(o.username,"/activity"),title:y("activity")}),d.a.createElement(s.c,{className:"js-cards",href:"/".concat(o.username,"/cards"),title:y("cards"),testId:g.HeaderTestIds.MemberMenuCards}),d.a.createElement(s.c,{href:"/".concat(o.username,"/account"),title:y("settings"),appendSeparator:!p,testId:g.HeaderTestIds.MemberMenuSettings}),p&&d.a.createElement(s.c,{href:"/".concat(o.username,"/billing"),title:y("billing"),appendSeparator:!0})):d.a.createElement(d.a.Fragment,null,d.a.createElement(s.c,{href:"/".concat(o.username),title:y("profile"),testId:g.HeaderTestIds.MemberMenuProfile}),d.a.createElement(s.c,{className:"js-cards",href:"/".concat(o.username,"/cards"),title:y("cards"),testId:g.HeaderTestIds.MemberMenuCards}),p&&d.a.createElement(s.c,{href:"/".concat(o.username,"/billing"),title:y("billing")}),d.a.createElement(s.c,{href:"/".concat(o.username,"/account"),title:y("settings"),appendSeparator:!0,testId:g.HeaderTestIds.MemberMenuSettings})),d.a.createElement(s.b,{title:y("help"),onClick:Object(b.a)(function(){a(d.a.createElement(l.a,null),{title:y("help"),width:500})})}),d.a.createElement(s.c,{href:"/shortcuts",title:y("shortcuts")}),d.a.createElement(s.b,{title:y("change-locale"),onClick:Object(b.a)(function(){return a(d.a.createElement(n.a,{memberId:o.id}),{title:x("change locale")})}),appendSeparator:!0,testId:g.HeaderTestIds.MemberMenuLanguage}),t?d.a.createElement(s.b,{title:y("log-out"),onClick:r,testId:g.HeaderTestIds.MemberMenuLogout}):d.a.createElement(s.b,{onClick:Object(b.a)(function(){a(d.a.createElement(c.a,null),{title:m})})},y("log-out"),d.a.createElement("br",null),y("you-ll-need-to-set-a-password-first"))))})})},"./app/gamma/src/components/popovers/help/help.less":function(e,t,o){var n=o('./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3414/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/help/help.less');"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0};o("./node_modules/style-loader/lib/addStyles.js")(n,r);n.locals&&(e.exports=n.locals)},"./app/gamma/src/components/popovers/help/help.tsx":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./app/gamma/src/components/popovers/help/help.less"),s=o.n(a);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}var m=function(e){function t(){var e,o,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,s=new Array(a),l=0;l<a;l++)s[l]=arguments[l];return n=this,r=(e=i(t)).call.apply(e,[this].concat(s)),d(p(o=!r||"object"!==c(r)&&"function"!=typeof r?p(n):r),"iFrame",void 0),d(p(o),"receiveMessage",function(e){if(o.iFrame&&e.source===o.iFrame.contentWindow){var t=e.data,n=t.type,r=t.value;switch(n){case"resize":o.props.onIFrameLoaded();var a=parseFloat(o.iFrame.style.height||"");(!a||a<r&&a-r<50)&&(o.iFrame.style.height="".concat(r,"px"));default:return}}}),o}var o,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,r.a.Component),o=t,(n=[{key:"componentDidMount",value:function(){window.addEventListener("message",this.receiveMessage.bind(this))}},{key:"coompnentWillUnmount",value:function(){window.removeEventListener("message",this.receiveMessage.bind(this))}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){var e=this;return r.a.createElement("iframe",{className:s.a.helpIFrame,sandbox:"allow-scripts allow-same-origin allow-popups allow-forms",ref:function(t){return e.iFrame=t},src:"/contact?compact=1&trello=1&url=".concat(encodeURIComponent(location.href),"&source=from%20in%20app")})}}])&&l(o.prototype,n),a&&l(o,a),t}();t.a=m},"./app/gamma/src/components/popovers/help/index.tsx":function(e,t,o){"use strict";var n=o("./app/common/components/loading/spinner.tsx"),r=o("./node_modules/react/index.js"),a=o.n(r),s=o("./app/gamma/src/components/popovers/help/help.tsx");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(e){var o,n,r,a,s,l;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=i(t).call(this,e),o=!r||"object"!==c(r)&&"function"!=typeof r?p(n):r,a=p(o),l=function(){return o.setState({loading:!1})},(s="stopLoading")in a?Object.defineProperty(a,s,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[s]=l,o.state={loading:!0},o}var o,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,a.a.Component),o=t,(r=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.state.loading&&a.a.createElement(n.a,{centered:!0}),a.a.createElement(s.a,{onIFrameLoaded:this.stopLoading}))}}])&&l(o.prototype,r),d&&l(o,d),t}();t.a=d},"./app/src/components/LanguagePicker/LanguagePicker.tsx":function(e,t,o){"use strict";o.d(t,"a",function(){return f});var n=o("./node_modules/@trello/locale/index.ts"),r=o("./app/gamma/src/util/application-storage/announcements.ts"),a=o("./node_modules/@trello/webdriverio-tests/index.ts"),s=o("./app/common/components/controls/index.tsx"),c=o("./app/gamma/src/components/popover/popover-menu.tsx"),l=o("./node_modules/react/index.js"),i=o.n(l),p=o("./node_modules/@trello/graphql/generated.tsx");function u(e,t,o,n,r,a,s){try{var c=e[a](s),l=c.value}catch(e){return void o(e)}c.done?t(l):Promise.resolve(l).then(n,r)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var o=[],n=!0,r=!1,a=void 0;try{for(var s,c=e[Symbol.iterator]();!(n=(s=c.next()).done)&&(o.push(s.value),!t||o.length!==t);n=!0);}catch(e){r=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return o}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=function(){},f=function(e){var t=e.memberId,o=Object(p.i)({variables:{memberId:t}}),l=o.data,f=o.error,b=d(Object(p.u)(),1)[0],g=function(e){return function(e){return function(){var t=this,o=arguments;return new Promise(function(n,r){var a=e.apply(t,o);function s(e){u(a,n,r,s,c,"next",e)}function c(e){u(a,n,r,s,c,"throw",e)}s(void 0)})}}(regeneratorRuntime.mark(function o(){return regeneratorRuntime.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,b({variables:{memberId:t,locale:e},optimisticResponse:{__typename:"Mutation",updateUserLocale:{id:t,prefs:{locale:e,__typename:"Member_Prefs"},__typename:"Member"}}});case 2:Object(r.a)(),window.location.reload();case 4:case"end":return o.stop()}},o)}))};f&&console.error(f);var h=l&&l.member&&l.member.prefs&&l.member.prefs.locale;return i.a.createElement(c.a,null,n.supportedLocales.map(function(e){var t,o=e.code,n=e.name,r=h===o;switch(o){case"en-US":t=a.HeaderTestIds.MemberMenuLanguageEn;break;case"ja":t=a.HeaderTestIds.MemberMenuLanguageJa;break;default:t=void 0}var l=r?m:g(o);return i.a.createElement(c.b,{key:o,onClick:l,testId:t},n,r&&i.a.createElement(s.a,{name:s.c.Check,small:!0}))}))}},"./app/src/components/LanguagePicker/index.ts":function(e,t,o){"use strict";var n=o("./app/src/components/LanguagePicker/LanguagePicker.tsx");t.a=n.a},'./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3414/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popover/popover-menu.less':function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'._2b-xS2onqCL250{background-color:transparent;border:none;background:#fff;border-radius:0;box-shadow:none;color:#172b4d;display:block;height:100%;padding:6px 12px;text-align:left;text-decoration:none;width:100%;transition:none;margin:0;outline:0}._2b-xS2onqCL250:hover{background-color:transparent;border:none;box-shadow:none;color:#172b4d;background:rgba(9,30,66,.04)}._2b-xS2onqCL250:active{background-color:transparent;border:none;box-shadow:none;color:#172b4d;background:#e4f0f6}._2b-xS2onqCL250._1nraJXVqaM6xOC:focus{outline:1px dotted #000}@media screen and (-webkit-min-device-pixel-ratio:0){._2b-xS2onqCL250._1nraJXVqaM6xOC:focus{outline:5px auto -webkit-focus-ring-color}}._2b-xS2onqCL250[disabled]:active,._2b-xS2onqCL250[disabled]:focus,._2b-xS2onqCL250[disabled]:hover{background:transparent;color:#a5adba!important}._2b-xS2onqCL250[disabled]:active ._1ensbXj2Q2wIPV,._2b-xS2onqCL250[disabled]:focus ._1ensbXj2Q2wIPV,._2b-xS2onqCL250[disabled]:hover ._1ensbXj2Q2wIPV{color:#a5adba!important}._2b-xS2onqCL250[disabled]:active span[name=check],._2b-xS2onqCL250[disabled]:focus span[name=check],._2b-xS2onqCL250[disabled]:hover span[name=check]{color:#6b778c!important}._2b-xS2onqCL250[disabled]:active ._3qJ-Zxp9jmdDx4,._2b-xS2onqCL250[disabled]:focus ._3qJ-Zxp9jmdDx4,._2b-xS2onqCL250[disabled]:hover ._3qJ-Zxp9jmdDx4{color:#a5adba!important}._30TjjQYPgI_ohM{font-size:14px;font-weight:400;line-height:20px}._30TjjQYPgI_ohM._1mfSNHYy5FVbjG{margin:0}._3qJ-Zxp9jmdDx4{color:#6b778c;font-size:12px;font-weight:400;line-height:16px;margin:4px 0 0;padding:0}._3tuEhnRtxirtLg:after{background-color:rgba(9,30,66,.13);content:" ";display:block;height:1px;margin:8px auto;width:calc(100% - 20px)}',""]),t.locals={link:"_2b-xS2onqCL250",linkFocusRing:"_1nraJXVqaM6xOC",icon:"_1ensbXj2Q2wIPV",description:"_3qJ-Zxp9jmdDx4",title:"_30TjjQYPgI_ohM",withoutMargins:"_1mfSNHYy5FVbjG",withSeparator:"_3tuEhnRtxirtLg"}},'./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3414/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/change-password/change-password.less':function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._19G0EgqoBjlPUd{margin:0 10px}._386FT4LiNepOFJ{padding:5px;color:#97a0af}.wnpvvYlw2dQsXN{margin-top:10px}",""]),t.locals={form:"_19G0EgqoBjlPUd",grayText:"_386FT4LiNepOFJ",noPasswordFooter:"wnpvvYlw2dQsXN"}},'./node_modules/css-loader/index.js?{"minimize":true,"modules":true,"importLoaders":2,"localIdentName":"[hash:base64:14]","sourceMap":false}!./node_modules/postcss-loader/lib/index.js?{"config":{"path":"/buildeng/bamboo-agent-home/xml-data/build-dir/TRE-WEB-BWP/.build/prod/build-3414/tools/webpack/postcss.config.js"},"sourceMap":true}!./node_modules/less-loader/dist/cjs.js?{"outputStyle":"expanded","sourceMap":false}!./app/gamma/src/components/popovers/help/help.less':function(e,t,o){(t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"._3CrEQqpaVw4xlV{border:0;width:100%}",""]),t.locals={helpIFrame:"_3CrEQqpaVw4xlV"}}});
//# sourceMappingURL=member-menu-popover.004f66d2f2a6b7ff8ad2.js.map