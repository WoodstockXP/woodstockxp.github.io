(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),l=Object(s.createContext)(),o=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),o=c[0],r=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");r(e.matches?"dark":"light"),e.addEventListener("change",(function(e){r(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:o,toggleTheme:function(){var e="dark"===o?"light":"dark";localStorage.setItem("themeName",e),r(e)}}],children:t})},r="https://WoodstockXP.github.io",j="EM.",d={name:"Emilio Moreno",role:"Jr. Software Engineer",description:"I am a student at the Polytechnic University of Santa Rosa Jauregui majoring in Software Engineering. I am passionate about software development and I am always looking for ways to improve my skills. I am currently looking for new professional opportunities to gain experience in the field.",resume:"https://drive.google.com/file/d/1dRjKk3G-MfpgGtzFANTP5mHzLzn8qBvb/view?usp=drive_link",social:{linkedin:"https://www.linkedin.com/in/emilio-moren0/",github:"https://github.com/WoodstockXP"}},u=[{name:"Project 1",description:"Portfolio web page displaying my contact info, projects, education & skills. Developed specifically for academic purposes.",stack:["React","TypeScript"],sourceCode:"https://github.com/WoodstockXP/woodstockxp.github.io",livePreview:"https://WoodstockXP.github.io"},{name:"Project 2",description:"UPSRJ's Landing page redesign alongside a team of students only. This project is currently in development.",stack:["NestJS","React"],sourceCode:"https://github.com/AnyeloM15/Landing_upsrj",livePreview:"https://example.com"},{name:"Project 3",description:"Administration service for point of sale through a terminal. Management of inventory, clients, & payments.",stack:["C++","Code::Blocks"],sourceCode:"https://github.com/WoodstockXP/PointOfSaleC-",livePreview:"https://youtu.be/Htq-uey3XPo"}],h={title:"Education",description:"Here is a summary of my academic background and additional courses I have completed to further my knowledge.",academic:[{id:"1",degree:"Bachelor of Software Engineering",institution:"Polytechnic University of Santa Rosa J\xe1uregui",duration:"2023 - Present",details:"Pursuing a bachelor\u2019s degree in Software Engineering, focusing on software development and project management."}],courses:[{id:"1",title:"Web Development",provider:"Oracle ONE & Alura LATAM",duration:"2022",details:"Completed a comprehensive course covering frontend and backend development with projects in HTML, CSS & JavaScript."},{id:"2",title:"Big Data & Artificial Intelligence",provider:"University of Texas at Austin",duration:"2024",details:"Travelled to Austin, Texas to participate in a course on Big Data and Artificial Intelligence, using R and Python."}]},b=["HTML","CSS","React","Python","C++","Java","Git","LaTeX"],m="emil.moreno2002@gmail.com",O=n(16),p=n.n(O),x=n(14),f=n.n(x),g=n(18),v=n.n(g),k=n(17),_=n.n(k),N=(n(28),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,o=Object(s.useState)(!1),r=Object(i.a)(o,2),j=r[0],O=r[1],x=function(){return O(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[d.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#about",onClick:x,className:"link link--nav",children:"About"})}):null,u.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:x,className:"link link--nav",children:"Projects"})}):null,b.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:x,className:"link link--nav",children:"Skills"})}):null,h.academic.length||h.courses.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#education",onClick:x,className:"link link--nav",children:"Education"})}):null,m?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:x,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(f.a,{}):Object(a.jsx)(p.a,{})}),Object(a.jsx)("button",{type:"button",onClick:x,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(_.a,{}):Object(a.jsx)(v.a,{})})]})}),w=(n(32),function(){var e=r,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(N,{})]})}),y=n(11),P=n.n(y),C=n(19),S=n.n(C),E=(n(33),function(){var e=d.name,t=d.role,n=d.description,c=d.resume,i=d.social;return Object(a.jsxs)("div",{className:"about center",id:"about",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:c,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(S.a,{})})]})]})]})}),A=n(7),T=n.n(A),I=n(20),L=n.n(I),J=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(L.a,{})})]})}),M=(n(36),function(){return u.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(a.jsx)(J,{project:e},T()())}))})]}):null}),R=(n(37),function(){return b.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:b.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),X=n(21),B=n.n(X),W=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top","aria-label":"top",children:Object(a.jsx)(B.a,{fontSize:"large"})})}):null}),H=(n(39),function(){return h.academic.length||h.courses.length?Object(a.jsxs)("section",{className:"section education",id:"education",children:[Object(a.jsx)("h2",{className:"section__title",children:h.title}),Object(a.jsx)("p",{className:"section__desc",children:h.description}),Object(a.jsxs)("div",{className:"education__section",children:[Object(a.jsx)("h3",{className:"h3__edu",children:"Academic Background"}),Object(a.jsx)("ul",{className:"education__list",children:h.academic.map((function(e){return Object(a.jsxs)("li",{className:"education__item",children:[Object(a.jsxs)("h4",{children:[e.degree," - ",e.institution]}),Object(a.jsx)("span",{children:e.duration}),Object(a.jsx)("p",{children:e.details})]},e.id)}))})]}),Object(a.jsxs)("div",{className:"education__section",children:[Object(a.jsx)("h3",{className:"h3__edu",children:"Courses"}),Object(a.jsx)("ul",{className:"education__list",children:h.courses.map((function(e){return Object(a.jsxs)("li",{className:"education__item",children:[Object(a.jsxs)("h4",{children:[e.title," - ",e.provider]}),Object(a.jsx)("span",{children:e.duration}),Object(a.jsx)("p",{children:e.details})]},e.id)}))})]})]}):null}),z=(n(40),function(){return m?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(m),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),D=(n(41),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/WoodstockXP",className:"link footer__link",children:"/goodbye world"})})}),U=(n(42),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(w,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(E,{}),Object(a.jsx)(M,{}),Object(a.jsx)(H,{}),Object(a.jsx)(R,{}),Object(a.jsx)(z,{})]}),Object(a.jsx)(W,{}),Object(a.jsx)(D,{})]})});n(43);Object(c.render)(Object(a.jsx)(o,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.46e12a26.chunk.js.map