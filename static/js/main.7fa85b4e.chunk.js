(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{100:function(e,t,c){"use strict";c.r(t);var n,i,s=c(0),a=c.n(s),o=c(18),r=c.n(o),j=(c(68),c(46)),l=c(25),d=(c.p,c(69),c(108)),b=c(109),h=c(107),O=c(106),x=c(63),u=[{id:0,title:"White and Black",content:"Born in France",price:12e4},{id:1,title:"Red Knit",content:"Born in Seoul",price:11e4},{id:2,title:"Grey Yordan",content:"Born in the States",price:13e4}],p=c(42),m=c(31),f=c.n(m),g=c(7),v=c(43),N=(c(87),c(2)),S=(v.a.div(n||(n=Object(p.a)(["\n  padding: 20px;\n"]))),v.a.h4(i||(i=Object(p.a)(["\n  font-size: 25px;\n  color: ",";\n"])),(function(e){return e.\uc0c9\uc0c1})));function C(e){return Object(N.jsxs)("p",{children:["\uc7ac\uace0 : ",e.\uc7ac\uace0[0]]})}var k=function(e){var t=Object(s.useState)(!0),c=Object(l.a)(t,2),n=c[0],i=c[1];Object(s.useEffect)((function(){f.a.get();var e=setTimeout((function(){i(!1)}),2e3);return function(){clearTimeout(e)}}),[n]);var a=Object(s.useState)(),o=Object(l.a)(a,2),r=o[0],j=o[1],d=Object(g.f)(),b=Object(g.g)().id,h=e.shoes.find((function(e){return e.id==b}));return console.log(h),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("box",{children:Object(N.jsx)(S,{className:"red",children:"Detail"})}),r,Object(N.jsx)("input",{onChange:function(e){j(e.target.value)}}),!0===n?Object(N.jsx)("div",{className:"my-alert",children:Object(N.jsx)("p",{children:"\uc7ac\uace0\uac00 \uc5bc\ub9c8 \ub0a8\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4"})}):null,Object(N.jsxs)("div",{className:"row",children:[Object(N.jsx)("div",{className:"col-md-6",children:Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes1.jpg",width:"100%",alt:"shoes"})}),Object(N.jsxs)("div",{className:"col-md-6 mt-4",children:[Object(N.jsx)("h4",{className:"pt-5",children:h.title}),Object(N.jsx)("p",{children:h.content}),Object(N.jsx)("p",{children:h.price}),Object(N.jsx)(C,{"\uc7ac\uace0":e.\uc7ac\uace0}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){e.\uc7ac\uace0\ubcc0\uacbd([9,10,12])},children:"\uc8fc\ubb38\ud558\uae30"}),Object(N.jsx)("button",{className:"btn btn-danger",onClick:function(){d.push("/")},children:"\ub4a4\ub85c\uac00\uae30"})]})]})]})},w=c(24),B=a.a.createContext();function F(e){Object(s.useContext)(B);return Object(N.jsxs)("div",{className:"col-md-4",children:[Object(N.jsx)("img",{src:"https://codingapple1.github.io/shop/shoes"+(e.i+1)+".jpg",alt:"shoes1",width:"100%"}),Object(N.jsx)("h4",{children:e.shoes.title}),Object(N.jsx)("p",{children:e.shoes.content}),Object(N.jsx)(y,{i:e.i})]})}function y(e){var t=Object(s.useContext)(B);return Object(N.jsx)("p",{children:t[e.i]})}var I=function(){var e=Object(s.useState)(u),t=Object(l.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)([10,11,12]),a=Object(l.a)(i,2),o=a[0],r=a[1];return Object(N.jsxs)("div",{className:"App",children:[Object(N.jsxs)(d.a,{bg:"light",expand:"lg",children:[Object(N.jsx)(d.a.Brand,{href:"#home",children:"Shoes Shop"}),Object(N.jsx)(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(N.jsx)(d.a.Collapse,{id:"basic-navbar-nav",children:Object(N.jsxs)(b.a,{className:"ml-auto",children:[Object(N.jsx)(b.a.Link,{as:w.b,to:"/",children:"Home"}),Object(N.jsx)(b.a.Link,{as:w.b,to:"/detail",children:"Detail"}),Object(N.jsxs)(h.a,{title:"Dropdown",id:"basic-nav-dropdown",children:[Object(N.jsx)(h.a.Item,{href:"#action/3.1",children:"Action"}),Object(N.jsx)(h.a.Item,{href:"#action/3.2",children:"Another action"}),Object(N.jsx)(h.a.Item,{href:"#action/3.3",children:"Something"}),Object(N.jsx)(h.a.Divider,{}),Object(N.jsx)(h.a.Item,{href:"#action/3.4",children:"Separated link"})]})]})})]}),Object(N.jsxs)(g.c,{children:[Object(N.jsxs)(g.a,{exact:!0,path:"/",children:[Object(N.jsxs)(O.a,{className:"background",children:[Object(N.jsx)("h1",{children:"20% Season OFF!"}),Object(N.jsx)("p",{children:"This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."}),Object(N.jsx)("p",{children:Object(N.jsx)(x.a,{variant:"primary",children:"Learn more"})})]}),Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)(B.Provider,{value:o,children:Object(N.jsx)("div",{className:"row",children:c.map((function(e,t){return Object(N.jsx)(F,{shoes:c[t],i:t},t)}))})}),Object(N.jsx)("button",{className:"btn btn-primary",onClick:function(){f.a.post("\uc11c\ubc84URL",{id:"codingapple",pw:1234}),f.a.get("https://codingapple1.github.io/shop/data2.json").then((function(e){console.log(e.data),n([].concat(Object(j.a)(c),Object(j.a)(e.data)))})).catch((function(){console.log("\uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}))},children:"\ub354\ubcf4\uae30"})]})]}),Object(N.jsx)(g.a,{path:"/detail/:id",children:Object(N.jsx)(k,{shoes:c,"\uc7ac\uace0":o,"\uc7ac\uace0\ubcc0\uacbd":r})}),Object(N.jsx)(g.a,{path:"/:id",children:Object(N.jsx)("div",{children:"\uc544\ubb34\uac70\ub098 \uc801\uc5c8\uc744 \ub54c \uc774\uac70 \ubcf4\uc5ec\uc8fc\uc148"})})]})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,110)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),i(e),s(e),a(e)}))};c(99);r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(w.a,{children:Object(N.jsx)(I,{})})}),document.getElementById("root")),L()},68:function(e,t,c){},69:function(e,t,c){},87:function(e,t,c){}},[[100,1,2]]]);
//# sourceMappingURL=main.7fa85b4e.chunk.js.map