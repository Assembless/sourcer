(this.webpackJsonpsourcer=this.webpackJsonpsourcer||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(42),i=n.n(o),c=(n(55),n(20)),u=n(43),l=n.n(u),s=n(6),d=n(13),m=n(2),h=(Object(s.b)((function(e){return{root:{backgroundColor:e.palette.primary.main}}})),Object(s.b)((function(e){return{root:{width:"42px",height:"42px",borderRadius:"42px",display:"flex",alignItems:"center",justifyContent:"center",background:"transparent",border:"none",transition:"background 255ms ease","&:hover":{background:"rgba(0, 0, 0, .2)"},"& span":{color:"#000",textAlign:"center",fontWeight:"bold",fontSize:"28px"}}}}))),f=function(e){var t=e.name,n=h();return a.a.createElement("button",{className:n.root},a.a.createElement("span",null,t))},p=n(19),v=n(45),g=n.n(v),b=n(46),w=n.n(b),x=n(47),E=Object(s.b)((function(e){return{root:{margin:"10px 0",flexBasis:"45%",borderRadius:"12px",position:"relative","@media only screen and (max-width: 620px)":{flexBasis:"100%"}},image:{position:"absolute",width:"100%",height:"auto",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},imageWrapper:{width:"50%",overflow:"hidden",height:"auto",minHeight:"180px",position:"relative",cursor:"pointer",borderRadius:"12px 0 0 12px","@media only screen and (max-width: 620px)":{width:"100%",borderRadius:"12px 12px 0 0"}},title:{color:"black",textDecoration:"none",fontSize:"24px",fontWeight:"bold"},featured:{width:"100%",flexBasis:"100%",backgroundColor:"rgba(0, 0, 0, 0.05)"},contentWrapper:{position:"relative",width:"45%",padding:"8px 12px","@media only screen and (max-width: 620px)":{width:"auto"}}}})),k=function(e){var t,n=Object(m.f)(),r=E(),o=Object(x.a)("only screen and (max-width: 620px)"),i=w()(r.root,Object(p.a)({},r.featured,e.featured));return a.a.createElement(j,{justifyContent:o?"flex-start":"space-between",flexDirection:o?"column":"row",className:i},a.a.createElement("div",{className:r.imageWrapper},a.a.createElement("img",{alt:"thumbnail",className:r.image,onClick:function(){n.push("/p/".concat(e.id))},src:e.thumbnail_url})),a.a.createElement("div",{className:r.contentWrapper},a.a.createElement("h2",null,a.a.createElement(d.b,{className:r.title,to:"/p/".concat(e.id)},e.title)),a.a.createElement("p",null,null===(t=e.author)||void 0===t?void 0:t.name),a.a.createElement("p",null,g()(e.created_at).fromNow())))},y=n(30),j=function(e){var t=function(e){for(var t=Object(y.a)({},e),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];for(var o in t)r.includes(o)&&delete t[o];return t}(e,"children","className"),n=Object.freeze(Object(y.a)({display:"flex"},t));return a.a.createElement("div",{style:n,className:e.className},e.children)},O=Object(s.b)((function(e){return{root:{},logo:{color:e.palette.primary.main,cursor:"pointer",userSelect:"none"},container:{maxWidth:e.boundaries.width,margin:"0 auto",padding:"0 ".concat(e.boundaries.padding)}}})),_=function(e){var t,n=O(),r=Object(m.f)(),o=Object(m.g)();return a.a.createElement("div",{className:n.root},a.a.createElement("div",{className:n.container},"/"===o.pathname?a.a.createElement("h1",{className:n.logo,onClick:(t="/",function(){r.push(t)})},"Sourcer"):a.a.createElement(f,{name:"<-"})))},S=n(31),N=n.n(S),W=n(48),U=n(15),C=n(16),I=[{id:"hello-world",title:"Hello World",author_id:"000-420",created_at:"Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",languages:["en_US","pl_PL"],topics:["offtopic"],thumbnail_url:"https://source.unsplash.com/random/1920x1080"},{id:"welcome-to-jamrock",title:"Welcome to Jamrock",author_id:"100-000",created_at:"Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",languages:["en_US"],topics:["offtopic"],thumbnail_url:"https://source.unsplash.com/random/1920x1080"},{id:"rudy",title:"Rudy Tytu\u0142",author_id:"100-000",created_at:"Thu Jun 04 2020 21:54:13 GMT+0200 (Central European Summer Time)",languages:["en_US"],topics:["offtopic"],thumbnail_url:"https://source.unsplash.com/random/1920x1080"}],T=[{name:"Mike",id:"000-420"},{name:"Damian",id:"100-000"}],R=function(){function e(t){var n,r,a,o,i;Object(U.a)(this,e),this.id=void 0,this.title=void 0,this.author=void 0,this.created_at=void 0,this.languages=void 0,this.thumbnail_url=void 0,this.topics=void 0,this.content=void 0;var c=I.find((function(e){return e.id===t}));this.id=t,this.title=null!==(n=null===c||void 0===c?void 0:c.title)&&void 0!==n?n:"",this.author=new A(null!==(r=null===c||void 0===c?void 0:c.author_id)&&void 0!==r?r:""),this.created_at=new Date(null!==(a=null===c||void 0===c?void 0:c.created_at)&&void 0!==a?a:""),this.languages=null!==(o=null===c||void 0===c?void 0:c.languages)&&void 0!==o?o:[],this.topics=null!==(i=null===c||void 0===c?void 0:c.topics)&&void 0!==i?i:[],this.thumbnail_url=(null===c||void 0===c?void 0:c.thumbnail_url)||"",this.content=""}return Object(C.a)(e,[{key:"fetchContent",value:function(){var e=this;return new Promise((function(t){var r;try{r=n(64)("./".concat(e.id,"/").concat(e.id,"--en_US.md"))}catch(a){console.error(a)}r?fetch(r).then(function(){var e=Object(W.a)(N.a.mark((function e(n){var r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.ok){e.next=7;break}return e.next=3,n.clone().text();case 3:r=e.sent,t(r),e.next=8;break;case 7:t("# Error while fetching post.");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t("# Unknown error occurred."),console.error(e)})):t("# Post not found.")}))}},{key:"exists",get:function(){return!!this.title}}]),e}(),A=function(){function e(t){var n;Object(U.a)(this,e),this.name=void 0,this.id=void 0;var r=T.find((function(e){return e.id===t}));this.name=null!==(n=null===r||void 0===r?void 0:r.name)&&void 0!==n?n:"",this.id=t}return Object(C.a)(e,[{key:"exists",get:function(){return!!this.name}},{key:"posts",get:function(){var e=this;return M().filter((function(t){var n;return(null===(n=t.author)||void 0===n?void 0:n.id)===e.id}))}}]),e}(),M=function(){return I.map((function(e){return new R(e.id)}))},D=function(){var e=Object(r.useState)(!1)[1];return function(){return e((function(e){return!e}))}},J=Object(s.b)((function(e){return{root:{},container:{maxWidth:e.boundaries.width,margin:"0 auto",padding:"0 ".concat(e.boundaries.padding)}}})),B=function(){var e=J(),t=function(e){var t=Object(r.useRef)(M());return"number"===typeof e&&(t.current.length=e),t.current}();return a.a.createElement("div",{className:e.root},a.a.createElement("div",{className:e.container},a.a.createElement("h2",null,"Home"),a.a.createElement(k,Object.assign({featured:!0},t[0])),a.a.createElement(j,{justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"},t.filter((function(e,t){return 0!==t})).map((function(e){return a.a.createElement(k,e)})))))},L=n(49),P=n.n(L),H=Object(s.b)((function(e){return{root:{},container:{maxWidth:e.boundaries.width,margin:"0 auto",padding:"0 ".concat(e.boundaries.padding)},image:{width:"100%",height:"auto",position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},imageWrapper:{position:"relative",width:"100%",height:"300px",overflow:"hidden"}}})),z=function(){var e=Object(m.h)().id,t=H(),n=function(e){var t=Object(r.useRef)(new R(e)),n=D();return Object(r.useEffect)((function(){t.current.fetchContent().then((function(e){console.log(e),"string"===typeof e&&(t.current.content=e),n()}))}),[]),t.current}(e);return a.a.createElement("div",{className:t.root},a.a.createElement("div",{className:t.container},a.a.createElement("div",{className:t.imageWrapper},a.a.createElement("img",{alt:"thumbnail",src:n.thumbnail_url,className:t.image})),a.a.createElement(P.a,{source:n.content})))},G=function(){return a.a.createElement("div",null,"Wrong")};function $(e,t){return t=t||2,(new Array(t).join("0")+e).slice(-t)}var F=function(e,t){var n=parseInt(e.replace("#",""),16),r=Math.round(2.55*t),a=(n>>16)+r,o=(n>>8&255)+r,i=(255&n)+r;return(16777216+65536*(a<255?a<1?0:a:255)+256*(o<255?o<1?0:o:255)+(i<255?i<1?0:i:255)).toString(16).slice(1)};var X=function(){function e(t){Object(U.a)(this,e),this.main=void 0,this.main=t}return Object(C.a)(e,[{key:"darker",get:function(){return F(this.main,15)}},{key:"lighter",get:function(){return F(this.main,10)}},{key:"inverted",get:function(){return function(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");var t=(255-parseInt(e.slice(0,2),16)).toString(16),n=(255-parseInt(e.slice(2,4),16)).toString(16),r=(255-parseInt(e.slice(4,6),16)).toString(16);return"#"+$(t)+$(n)+$(r)}(this.main)}},{key:"text",get:function(){return e=this.main,(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"black":"white";var e}},{key:"rgb",get:function(){return function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(this.main)}}]),e}(),q=function e(){Object(U.a)(this,e),this.palette={primary:new X("#579ed9"),background:new X("#d8e6f2")},this.boundaries={width:"1240px",padding:"24px"}};var K=function(){var e=Object(r.useState)("en_US"),t=Object(c.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement(s.a,{theme:new q},a.a.createElement(d.a,{basename:"/sourcer"},a.a.createElement(l.a,{language:n,setLanguage:o},a.a.createElement(_,null),a.a.createElement(m.c,null,a.a.createElement(m.a,{exact:!0,path:"/",component:B}),a.a.createElement(m.a,{path:"/p/:id",component:z}),a.a.createElement(m.a,{component:G}))))))},Q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function V(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(K,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/sourcer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/sourcer","/service-worker.js");Q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):V(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):V(t,e)}))}}()},50:function(e,t,n){e.exports=n(147)},55:function(e,t,n){},64:function(e,t,n){var r={"./hello-world/hello-world--en_US.md":65,"./rudy/rudy--en_US.md":66,"./welcome-to-jamrock/welcome-to-jamrock--en_US.md":67};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=64},65:function(e,t,n){e.exports=n.p+"static/media/hello-world--en_US.038085a8.md"},66:function(e,t,n){e.exports=n.p+"static/media/rudy--en_US.f727d1ee.md"},67:function(e,t,n){e.exports=n.p+"static/media/welcome-to-jamrock--en_US.5a93df03.md"}},[[50,1,2]]]);
//# sourceMappingURL=main.02d5f7c4.chunk.js.map