(this["webpackJsonpportfolio-v5"]=this["webpackJsonpportfolio-v5"]||[]).push([[0],{137:function(e,t,a){e.exports=a.p+"static/media/profile-image.cdf2bd8c.jpg"},163:function(e,t,a){e.exports=a(286)},286:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(24),l=a.n(o),c=a(317),i=a(318),s=a(151),m=Object(s.a)({palette:{primary:{main:"#fdd835"},secondary:{main:"#b71c1c"}}}),g=a(39),u=a(312),d=a(311);function p(e){var t=Object(r.useState)(0),a=Object(g.a)(t,2),o=a[0];a[1];return n.a.createElement("div",{style:{paddingTop:"10rem"}},n.a.createElement(d.a,{container:!0},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(u.a,{style:{paddingBottom:".5rem"},align:"center",variant:"h2",component:"h2",gutterBottom:!0,color:"textSecondary"},n.a.createElement("b",null,"Hi, I'm Reed."))),n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(u.a,{style:{paddingBottom:"1rem"},align:"center",variant:"h4",component:"h2",gutterBottom:!0,color:"secondary"},["A Software Engineer.","/ Full-Stack Developer.","A self-starter.","An enthusiastic learner.","An innovator."][o]),n.a.createElement(u.a,{align:"center",variant:"h5",component:"h2",color:"textSecondary"},"I'm always looking forward -",n.a.createElement("br",null),"to taking on the next challenge!"))))}var y=a(319),E=a(137),v=a.n(E);function f(e){return n.a.createElement(d.a,{container:!0,style:{paddingTop:"8rem"}},n.a.createElement(d.a,{item:!0,xs:1}),n.a.createElement(d.a,{item:!0,xs:3},n.a.createElement(y.a,{src:v.a,size:"large",circular:!0})),n.a.createElement(d.a,{item:!0,xs:1}),n.a.createElement(d.a,{item:!0,xs:5,style:{}},n.a.createElement(u.a,{variant:"h3",align:"center",color:"textSecondary"},n.a.createElement("b",null,"About Me")),n.a.createElement(u.a,{variant:"h6",align:"center",style:{paddingTop:"2rem"},color:"textSecondary"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),n.a.createElement(d.a,{item:!0,xs:1}))}var b=a(313),A=a(148),x=a.n(A),k=a(146),h=a.n(k),S=a(147),C=a.n(S);function N(){return n.a.createElement("div",null,n.a.createElement("div",{style:{paddingRight:"1rem",paddingTop:"1rem"}},n.a.createElement(b.a,{style:{float:"right"},size:"small",color:"secondary"},n.a.createElement(h.a,null))),n.a.createElement("div",{style:{paddingRight:"4rem"}},n.a.createElement(b.a,{style:{float:"right"},size:"small",color:"secondary"},n.a.createElement(C.a,null))),n.a.createElement("div",{style:{paddingRight:"7rem"}},n.a.createElement(b.a,{style:{float:"right"},size:"small",color:"secondary"},n.a.createElement(x.a,null))))}var O=a(40),j=a(314),T=a(320),w=a(315);function I(e){return n.a.createElement(j.a,null,n.a.createElement(T.a,{value:e.page.findIndex((function(e){return!0===e.isActive})),onChange:function(t,a){var r=Object(O.a)(e.page),n=r.findIndex((function(e){return!0===e.isActive}));r[n].isActive=!1,r[a].isActive=!0,e.setPage(Object(O.a)(r))},indicatorColor:"secondary",textColor:"secondary",centered:!0},n.a.createElement(w.a,{label:"Home"}),n.a.createElement(w.a,{label:"About Me"}),n.a.createElement(w.a,{label:"Skills"}),n.a.createElement(w.a,{label:"Contact Me"})))}var B=a(316);function R(e){return n.a.createElement("div",{style:{paddingTop:"2rem"}},e.skills.map((function(t){var a=e.skillCategory.find((function(e){return!0===e.isActive}));if(a&&t.category===a.category)return n.a.createElement(d.a,{container:!0},n.a.createElement(d.a,{item:!0,xs:2},n.a.createElement(u.a,{style:{paddingTop:".25rem",paddingRight:"1rem"},align:"center"},n.a.createElement("b",null,t.name))),n.a.createElement(d.a,{item:!0,xs:10},n.a.createElement(B.a,{percent:t.progress,warning:!0})))})))}function J(e){return n.a.createElement(d.a,{container:!0,style:{paddingTop:"2rem"}},n.a.createElement(d.a,{item:!0,xs:1}),n.a.createElement(d.a,{item:!0,xs:4},n.a.createElement(u.a,null,"Skills")),n.a.createElement(d.a,{item:!0,xs:1}),n.a.createElement(d.a,{item:!0,xs:5},n.a.createElement(T.a,{value:e.skillCategory.findIndex((function(e){return!0===e.isActive})),onChange:function(t){return function(t){var a=Object(O.a)(e.skillCategory),r=e.skillCategory.findIndex((function(e){return e.displayName===t.currentTarget.innerText})),n=e.skillCategory.findIndex((function(e){return!0===e.isActive}));-1===r||-1===n?(a[0].isActive=!0,a[1].isActive=!1,a[2].isActive=!1):(a[n].isActive=!1,a[r].isActive=!0,e.setSkillCategory(Object(O.a)(a)))}(t)},indicatorColor:"primary",textColor:"primary",centered:!0},e.skillCategory.map((function(e){return n.a.createElement(w.a,{label:e.displayName})}))),n.a.createElement(R,{skills:e.skills,skillCategory:e.skillCategory})),n.a.createElement(d.a,{item:!0,xs:1}))}function M(e){return n.a.createElement("div",null,n.a.createElement(u.a,null,"Contact Me"))}function G(){var e=Object(r.useState)([{pageName:"home",pageNumber:0,isActive:!0},{pageName:"aboutme",pageNumber:1,isActive:!1},{pageName:"skills",pageNumber:2,isActive:!1},{pageName:"contactme",pageNumber:3,isActive:!1}]),t=Object(g.a)(e,2),a=t[0],o=t[1],l=Object(r.useState)([{category:"frontend",displayName:"FRONTEND LANGUAGES",isActive:!0},{category:"backend",displayName:"BACKEND LANGUAGES",isActive:!1},{category:"tools",displayName:"TOOLS/SOFTWARE",isActive:!1}]),c=Object(g.a)(l,2),i=c[0],s=c[1],m=Object(r.useState)([{name:"React",progress:80,category:"frontend"},{name:"Material UI",progress:90,category:"frontend"},{name:"Semantic UI",progress:90,category:"frontend"},{name:"JavaScript",progress:90,category:"frontend"},{name:"TypeScript",progress:85,category:"frontend"},{name:"Jest",progress:70,category:"frontend"},{name:"Enzyme",progress:70,category:"frontend"},{name:"Bootstrap v4",progress:75,category:"frontend"},{name:"CSS",progress:70,category:"frontend"},{name:"Java",progress:70,category:"backend"},{name:"Spring Boot",progress:70,category:"backend"},{name:"C#",progress:85,category:"backend"},{name:"WPF",progress:80,category:"backend"},{name:"Express.js",progress:70,category:"backend"},{name:"Feathers.js",progress:70,category:"backend"},{name:"SQL",progress:75,category:"backend"},{name:"AWS",progress:70,category:"tools"},{name:"Heroku",progress:70,category:"tools"},{name:"Docker",progress:80,category:"tools"},{name:"PGAdmin",progress:90,category:"tools"},{name:"IntelliJ",progress:85,category:"tools"},{name:"Visual Studio",progress:85,category:"tools"},{name:"Jira/Confluence",progress:80,category:"tools"},{name:"Source Tree",progress:90,category:"tools"},{name:"GIT",progress:80,category:"tools"},{name:"Postman",progress:70,category:"tools"},{name:"Yarn",progress:95,category:"tools"},{name:"NPM",progress:95,category:"tools"}]),u=Object(g.a)(m,2),y=u[0];u[1];return n.a.createElement("div",null,n.a.createElement(d.a,{container:!0},n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(I,{page:a,setPage:o})),n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(N,null)),a[0].isActive?n.a.createElement(d.a,{item:!0,xs:12},n.a.createElement(p,null)):null,a[1].isActive?n.a.createElement(f,null):null,a[2].isActive?n.a.createElement(J,{skills:y,skillCategory:i,setSkillCategory:s}):null,a[3].isActive?n.a.createElement(M,null):null))}var P=function(){return n.a.createElement(c.a,{theme:m},n.a.createElement(i.a,null),n.a.createElement(G,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[163,1,2]]]);
//# sourceMappingURL=main.06de05ea.chunk.js.map