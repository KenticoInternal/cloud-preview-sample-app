(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{156:function(e,t,n){e.exports=n(272)},161:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(151),i=n.n(o),c=(n(161),n(11)),u=n(20),s=n(14),l=n(13),p=n(15),d=(n(162),n(18)),m=n(54),f=(n(163),"/".concat("cloud-sample-app-preview-react")),h="".concat(f,"callback"),g=("".concat(f,"logout"),"".concat(f,":projectId(").concat("[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}",")")),v="".concat(g,"/products"),b="".concat(v,"/:productId"),y=("".concat(f,"error"),n(97)),j=n(152),w={domain:"kentico-dev.eu.auth0.com",clientID:"NPIPF1KyuQ7W0pgfE50nms09aDUR4mKi",audience:"https://app.kenticocloud.com/",redirectUri:"https://kentico.github.io/cloud-sample-app-preview-react/callback",responseType:"token id_token",scope:"openid"},A={returnTo:"https://kentico.github.io/cloud-sample-app-preview-react/logout"},I=function e(){var t=this;Object(c.a)(this,e),this.webAuth=new j.a.WebAuth(w),this.login=function(){t.webAuth.authorize()},this.silentLogin=function(){localStorage.setItem("redirectUri",window.location.pathname),t.webAuth.authorize({prompt:"none"})},this.logout=function(){t.webAuth.logout(A)},this.getRedirectUri=function(){var e=localStorage.getItem("redirectUri");localStorage.removeItem("redirectUri");var t=e||f;return t.startsWith("/cloud-sample-app-preview-react")?(console.log("redirect starts with /cloud..., remove that"),t.slice(31)):t},this.handleAuthentication=function(e,n){t.webAuth.parseHash(function(a,r){if(r&&r.accessToken&&r.idToken){var o={accessToken:r.accessToken,expiresAt:1e3*(r.expiresIn||0)+(new Date).getTime()},i=t.getRedirectUri();e(o,i)}else a&&(n(),t.login())})},this.isAuthenticated=function(e){return(new Date).getTime()<e}},E=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Loading..."))},L={accessToken:"",expiresAt:0,isLoggedIn:!1,logout:function(){}},P=r.a.createContext(L),O=P.Provider,S=P.Consumer,k=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(l.a)(t).call(this,e))).webAuth=new I,n.isAuthUrlHash=function(e){return/access_token|id_token|error/.test(e)},n.handleAuthCallback=function(e){var t=e.location;n.isAuthUrlHash(t.hash)&&n.webAuth.handleAuthentication(n.onSuccessLogin,n.onFailedLogin)},n.onSuccessLogin=function(e,t){n.setState({accessToken:e.accessToken,expiresAt:e.expiresAt,isLoggedIn:!0}),console.log("history push, ",t),n.props.history.push(t)},n.onFailedLogin=function(){console.warn("on failed login")},n.state={accessToken:"",isLoggedIn:!1,expiresAt:0},n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.webAuth.silentLogin;this.isAuthUrlHash(window.location.hash)||e()}},{key:"render",value:function(){var e=this,t=Object(y.a)({},this.state,{logout:this.webAuth.logout}),n=this.state.isLoggedIn;return r.a.createElement(d.d,null,n?r.a.createElement(d.a,{from:h,to:f}):r.a.createElement(d.b,{path:h,render:function(t){return e.handleAuthCallback(t),r.a.createElement(E,null)}}),n&&r.a.createElement(d.b,{render:function(){return r.a.createElement(O,{value:t},e.props.children)}}))}}]),t}(r.a.Component),_=Object(d.g)(k),x=n(155);function K(e,t){return Object(x.compile)(e)(t)}var C,T=n(55),N=n.n(T),F=n(76);!function(e){e.NotLoaded="notLoaded",e.InProgress="inProgress",e.Finished="finished",e.Failed="failed"}(C||(C={}));var D,U=n(37),M=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).body=void 0,n.title=void 0,n.url=void 0,n}return Object(p.a)(t,e),t}(U.ContentItem),W=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,{propertyResolver:function(e){return"product_list"===e?"productList":e}}))).productList=void 0,e.title=void 0,e.url=void 0,e}return Object(p.a)(t,e),t}(U.ContentItem),R=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(l.a)(t).call(this,{propertyResolver:function(e){return"taxonomy___categorizing_target_audience"===e?"taxonomyCategorizingTargetAudience":e}}))).description=void 0,e.name=void 0,e.image=void 0,e.taxonomyCategorizingTargetAudience=void 0,e}return Object(p.a)(t,e),t}(U.ContentItem),H=null,z=function(e,t){H||(H=new U.DeliveryClient({enablePreviewMode:!0,enableAdvancedLogging:!0,previewApiKey:t,projectId:e,basePreviewUrl:"https://qa-preview-deliver.global.ssl.fastly.net",typeResolvers:[new U.TypeResolver("article_example_content_type",function(){return new M}),new U.TypeResolver("landing_page_example_content_type",function(){return new W}),new U.TypeResolver("product_example_content_type",function(){return new R})]}))},q=function(e,t){if(z(e,t),!H)throw"Delivery client is not initialized yet";return H.items().type("article_example_content_type").toPromise().then(function(e){return console.log("got response!",e),e.items}).catch(function(e){return console.log(e),new Array})},G=function(e,t){if(z(e,t),!H)throw"Delivery client is not initialized yet";return H.items().type("landing_page_example_content_type").toPromise().then(function(e){return console.log("got response!",e),e.items}).catch(function(e){return console.log(e),new Array})},J={dataLoadingStatus:C.NotLoaded,previewApiKey:"",previewApiKeyLoadingStatus:C.NotLoaded,projectId:"",projectIdLoadingStatus:C.NotLoaded,pages:new Array,products:new Array,loadWelcomePage:function(){},loadProducts:function(){},setProjectId:function(){},setLoadingStatus:function(){},setProjectIdLoadingStatus:function(){},setPreviewApiKey:function(){},setPreviewApiKeyLoadingStatus:function(){}},B=r.a.createContext(J),X=B.Provider,Q=B.Consumer,$=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={dataLoadingStatus:C.NotLoaded,previewApiKey:"",previewApiKeyLoadingStatus:C.NotLoaded,projectId:"",projectIdLoadingStatus:C.NotLoaded,pages:new Array,products:new Array},n.setProjectId=function(e){n.setState({projectId:e})},n.setLoadingStatus=function(e){n.setState({dataLoadingStatus:e})},n.setProjectIdLoadingStatus=function(e){n.setState({projectIdLoadingStatus:e})},n.setPreviewApiKey=function(e){n.setState({previewApiKey:e})},n.setPreviewApiKeyLoadingStatus=function(e){n.setState({previewApiKeyLoadingStatus:e})},n.loadWelcomePage=Object(F.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(n.state.projectId,n.state.previewApiKey);case 2:t=e.sent,n.setState({pages:t});case 4:case"end":return e.stop()}},e)})),n.loadProducts=Object(F.a)(N.a.mark(function e(){var t;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G(n.state.projectId,n.state.previewApiKey);case 2:t=e.sent,console.log(t[0].productList),t&&t[0]&&n.setState({products:t[0].productList});case 5:case"end":return e.stop()}},e)})),n}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.products,n=e.pages,a=e.projectId,o=e.dataLoadingStatus,i=e.projectIdLoadingStatus,c={dataLoadingStatus:o,previewApiKey:e.previewApiKey,previewApiKeyLoadingStatus:e.previewApiKeyLoadingStatus,projectId:a,projectIdLoadingStatus:i,pages:n,products:t,loadWelcomePage:this.loadWelcomePage,loadProducts:this.loadProducts,setProjectId:this.setProjectId,setLoadingStatus:this.setLoadingStatus,setProjectIdLoadingStatus:this.setProjectIdLoadingStatus,setPreviewApiKey:this.setPreviewApiKey,setPreviewApiKeyLoadingStatus:this.setPreviewApiKeyLoadingStatus};return r.a.createElement(X,{value:c},this.props.children)}}]),t}(r.a.PureComponent),V=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(Q,null,function(e){return r.a.createElement(S,null,function(t){return r.a.createElement("div",{className:"navigation-bar"},r.a.createElement("nav",{className:"navigation-bar__app-menu"},r.a.createElement(m.b,{className:"navigation-bar__app-menu-button",to:K(g,{projectId:e.projectId})},"Welcome"),r.a.createElement(m.b,{className:"navigation-bar__app-menu-button",to:K(v,{projectId:e.projectId})},"Products")),r.a.createElement("div",{className:"navigation-bar__user-menu"},r.a.createElement("button",{className:"navigation-bar__user-menu-button",onClick:t.logout},"Logout")))})})}}]),t}(r.a.PureComponent),Y=(n(269),function(e){var t=e.title,n=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"app-title"},t),r.a.createElement("div",{className:"app-content"},n))}),Z=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props.product;return e?r.a.createElement(Y,{title:e.name.value},r.a.createElement("img",{className:"product-image",alt:e.title,src:e.pictureUrl}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.description.value}})):null}}]),t}(r.a.PureComponent),ee=function(e){var t=e.match;return r.a.createElement(Q,null,function(e){return r.a.createElement(Z,{product:e.products.filter(function(e){return e.system.codename===t.params.productId})[0],init:e.loadProducts})})},te=(n(270),n(271),function(e){var t=e.projectId,n=e.productId,a=e.pictureUrl,o=e.title;return r.a.createElement("div",{className:"product-card"},r.a.createElement(m.b,{to:K(b,{projectId:t,productId:n})},r.a.createElement("img",{className:"product-card__thumbnail",src:a,alt:"product thumbnail"}),o))}),ne=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props,t=e.projectId,n=e.products;return r.a.createElement(Y,{title:"Products"},r.a.createElement("div",{className:"product-list"},n.map(function(e){return r.a.createElement(te,{title:e.name.value,pictureUrl:e.image.assets[0].url,productId:e.system.codename,projectId:t,key:e.system.id})})))}}]),t}(r.a.PureComponent),ae=function(){return r.a.createElement(Q,null,function(e){return r.a.createElement(ne,{init:e.loadProducts,projectId:e.projectId,products:e.products})})},re=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.init()}},{key:"render",value:function(){var e=this.props.pages[0];return e?r.a.createElement(Y,{title:e.title.value},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.body.getHtml()}})):r.a.createElement("p",null,"Missing data for Welcome page")}}]),t}(r.a.PureComponent),oe=function(){return r.a.createElement(Q,null,function(e){return r.a.createElement(re,{pages:e.pages,init:e.loadWelcomePage})})},ie=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d.b,{path:g,component:V}),r.a.createElement("div",{className:"app-content-wrapper"},r.a.createElement(d.d,null,r.a.createElement(d.b,{path:g,exact:!0,component:oe}),r.a.createElement(d.b,{path:b,component:ee}),r.a.createElement(d.b,{path:v,component:ae}),r.a.createElement(d.b,{render:function(){return r.a.createElement("p",null,"Ooops, missing page!")}}))))}}]),t}(r.a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));!function(e){e.MissingProjectId="missingProjectId",e.UnableToGetPreviewApiKey="unableToGetPreviewApiKey"}(D||(D={}));var ce=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Didn't you forget to provide Project Id in url? E.g. ",r.a.createElement("i",null,"https://kentico.github.io/cloud-preview-sample-app/your_project_id")),r.a.createElement("p",null,"Default: ",r.a.createElement("a",{href:"".concat(f,"cf6c9bb2-6d7e-00f8-a84a-b8042d1209c6")},"cf6c9bb2-6d7e-00f8-a84a-b8042d1209c6")))},ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"There was problem retrieving Preview Api Key."),r.a.createElement("p",null,"Did you provide correct Project Id? E.g. ",r.a.createElement("a",{href:"".concat(f,"cf6c9bb2-6d7e-00f8-a84a-b8042d1209c6")},"cf6c9bb2-6d7e-00f8-a84a-b8042d1209c6")))},se=function(e){var t=e.type;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Ooops, there was some error!"),t===D.MissingProjectId&&r.a.createElement(ce,null),t===D.UnableToGetPreviewApiKey&&r.a.createElement(ue,null))};function le(e,t){t&&Object.keys(t).forEach(function(n){var a=t[n];n&&a&&e.setRequestHeader(n,a)})}function pe(){return new XMLHttpRequest}function de(e){return e.responseText?JSON.parse(e.responseText):null}var me=function(e){function t(t,n,a,r){var o=function(e,t){if(!t)return e;var n,a=t.authToken?(n=t.authToken,{Authorization:"Bearer ".concat(n)}):{};return t.appInstanceId&&(a["X-AppInstanceId"]=t.appInstanceId),Object(y.a)({},e,a)}({"Content-type":"application/json"},r),i=a?function(e){if(e&&"object"===typeof e);else if("string"===typeof e)return JSON.stringify(e);return e}(a):null;return e.request(t,n,i,o)}return{post:function(e,n,a){return t("POST",e,n,a).then((r=[200,201],function(e){if(r.indexOf(e.status)>=0)return e;throw e})).then(de);var r}}}(function(){return e=!0,{request:function(t,n,a,r){return new Promise(function(o){var i=pe();i.open(t,n,!0),i.withCredentials=e,le(i,r),i.onreadystatechange=function(){4===i.readyState&&o(i)},i.send(a)})},requestFile:function(t,n,a,r){return new Promise(function(o){var i=pe();i.open(t,n,!0),i.responseType="blob",i.withCredentials=e,le(i,r),i.onreadystatechange=function(){4===i.readyState&&o(i)},i.send(a)})},upload:function(e,t,n,a){return new Promise(function(r){var o=pe();o.open("POST",e,!0),le(o,a),o.onreadystatechange=function(){4===o.readyState&&r(o)},o.upload.addEventListener("progress",n),o.send(t)})}};var e}()),fe=function(e,t){var n={authToken:e},a="https://qa-draft.global.ssl.fastly.net/api/project-management/".concat(t,"/keys/preview-delivery-api-primary");return me.post(a,null,n)},he=function(){if(console.log("get project id from url (".concat(window.location,")")),window.location){var e=Object(d.f)(window.location.pathname,g+"*");if(e)return console.log("got projectId from url: ",e.params.projectId),e.params.projectId;console.log("no projectId in url")}return null},ge=function(e){var t=e.authContext.accessToken,n=e.appContext.projectId;return function(){return fe(t,n).then(function(e){return e.api_key}).catch(function(){return null})}},ve=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.loadApplicationData()}},{key:"render",value:function(){var e=this.props.appContext,t=e.projectIdLoadingStatus,n=e.previewApiKeyLoadingStatus,a=e.dataLoadingStatus;return t===C.Failed?r.a.createElement(se,{type:D.MissingProjectId}):n===C.Failed?r.a.createElement(se,{type:D.UnableToGetPreviewApiKey}):a===C.Finished?this.props.children:r.a.createElement(E,null)}}]),t}(r.a.PureComponent),be=Object(d.g)(function(e){return r.a.createElement(Q,null,function(t){return r.a.createElement(S,null,function(n){var a,o=(a={appContext:t,authContext:n,fetchData:function(){return console.log("fetch data"),"have some data"},loadPreviewApikey:ge({authContext:n,appContext:t,getPreviewApiKey:fe})},Object(F.a)(N.a.mark(function e(){var t,n,r,o,i;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.appContext,n=a.loadPreviewApikey,r=a.fetchData,t.projectIdLoadingStatus===C.NotLoaded&&((o=he())?(t.setProjectId(o),t.setProjectIdLoadingStatus(C.Finished)):t.setProjectIdLoadingStatus(C.Failed)),t.projectIdLoadingStatus!==C.Finished||t.previewApiKeyLoadingStatus!==C.NotLoaded){e.next=8;break}return t.setPreviewApiKeyLoadingStatus(C.InProgress),e.next=6,n();case 6:(i=e.sent)?(t.setPreviewApiKey(i),t.setPreviewApiKeyLoadingStatus(C.Finished)):t.setPreviewApiKeyLoadingStatus(C.Failed);case 8:t.previewApiKeyLoadingStatus===C.Finished&&t.dataLoadingStatus===C.NotLoaded&&(t.setLoadingStatus(C.InProgress),r(),t.setLoadingStatus(C.Finished));case 9:case"end":return e.stop()}},e)})));return r.a.createElement(ve,Object.assign({loadApplicationData:o,authContext:n,appContext:t},e))})})});i.a.render(r.a.createElement(m.a,{basename:f},r.a.createElement(_,null,r.a.createElement($,null,r.a.createElement(be,null,r.a.createElement(ie,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[156,1,2]]]);
//# sourceMappingURL=main.55c6ae27.chunk.js.map