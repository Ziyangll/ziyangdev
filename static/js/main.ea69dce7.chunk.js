(this.webpackJsonpziyangdev=this.webpackJsonpziyangdev||[]).push([[0],{14:function(e,t,a){},60:function(e,t,a){e.exports=a(81)},65:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(18),i=a.n(c),r=(a(65),a(21)),o=a(6),m=a(106),s=a(108),u=a(109),g=a(107),h=(a(14),a(51));function E(e){var t=l.a.useState(!1),a=Object(h.a)(t,2),n=a[0],c=a[1],i=l.a.useRef();return l.a.useEffect((function(){new IntersectionObserver((function(e){e.forEach((function(e){return c(e.isIntersecting)}))})).observe(i.current)}),[]),l.a.createElement("div",{className:"fade-in-section ".concat(n?"is-visible":""),ref:i},e.children)}function p(){return l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"title"},l.a.createElement(E,{key:"title"},l.a.createElement("h1",{class:"title-text"},"Ziyang Li"),l.a.createElement("h1",{class:"text subtitle"},"fullstack developer"))),l.a.createElement("img",{className:"IntroImage",src:"/nice.svg",alt:"ziyang li"}))}function d(){return l.a.createElement("div",{className:"about"},l.a.createElement("h1",{class:"title-text"},"Introduction"),l.a.createElement("h3",{class:"text"},"I am currently a student studying ",l.a.createElement("span",{class:"title-text"},"Software Engineering")," at Auburn University"),l.a.createElement("h3",{class:"text"},l.a.createElement("span",{class:"title-text"},"Fullstack")," web and mobile developer"),l.a.createElement("h3",{class:"text"},"MERN stack ",l.a.createElement("span",{class:"title-text"},"Mongodb Express ",l.a.createElement("span",null,"React")," Node.js")),l.a.createElement("br",null),l.a.createElement("h1",{class:"text"},"Programming Languages"),l.a.createElement("h3",{class:"title-text"},"JavaScript, Python, C++, C#, Java, and Swift"),l.a.createElement("br",null))}var b=a(32),f=a.n(b),v=a(48),w=a.n(v),y=a(47),k=a.n(y),j=a(26),L=a.n(j),N=a(20);a(42);function x(e){var t=e.data,a=e.icon,n=e.title,c=e.subtitle,i=e.contentOne,r=e.contentTwo;return l.a.createElement(N.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:"#000",color:"#fff"},contentArrowStyle:{borderRight:"7px solid  #fa1616"},date:t,iconStyle:{background:"#000",color:"#fff"},icon:a},l.a.createElement("h3",{className:"vertical-timeline-element-title"},n),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},c),l.a.createElement("p",null,i),l.a.createElement("p",null,r))}function S(){return l.a.createElement(N.VerticalTimeline,null,l.a.createElement(N.VerticalTimelineElement,{className:"vertical-timeline-element",contentStyle:{background:"white",color:"black"},contentArrowStyle:{borderRight:"7px solid  cyan"},date:"2019 - present",iconStyle:{background:"white",color:"black"},icon:l.a.createElement(f.a,null)},l.a.createElement("h3",{className:"vertical-timeline-element-title"},"I am majoring in ",l.a.createElement("span",null,"Software Engineering ")),l.a.createElement("h4",{className:"vertical-timeline-element-subtitle"},"Auburn University"),l.a.createElement("p",null,l.a.createElement("span",null,"4.0 GPA")),l.a.createElement("p",null,"I am currently on the Dean's List"),l.a.createElement("p",null,"Member of the Auburn Competitive Programming Team")),l.a.createElement(x,{data:"2020",icon:l.a.createElement(L.a,null),title:"Made this website in React",subtitle:"ziyang.dev",contentOne:"Personal portfolio website to display my projects",contentTwo:"Learned the MERN stack and DevOp"}),l.a.createElement(x,{data:"2020",icon:l.a.createElement(k.a,null),title:"Hackathon Winner",subtitle:"MLH Auburn Hacks",contentOne:"We made a finance website for real time stock trading",contentTwo:"Used Bootstrap HTML5 CSS3 and Flask"}),l.a.createElement(x,{data:"2019",icon:l.a.createElement(L.a,null),title:"Competed in the Southeast USA Regional Contest",subtitle:"ICPC 2019 fall",contentOne:"Joined Auburn Competitive Programming Team",contentTwo:"My first competitive programming contest"}),l.a.createElement(x,{data:"2015 - 2019",icon:l.a.createElement(f.a,null),title:"Became interested in computer science",subtitle:"Homewood High School",contentOne:"Graduated High School with honor",contentTwo:"Me and my friends started a club to learn Python"}),l.a.createElement(N.VerticalTimelineElement,{iconStyle:{background:"white",color:"black"},icon:l.a.createElement(w.a,null)}))}function C(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"title-text"},(new Date).getFullYear()," ziyang.dev"))}var P=function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(d,null),l.a.createElement(S,null),l.a.createElement(C,null))},Z=a(98),H=a(99),G=a(105),I=a(104),O=a(100),T=a(102),M=a(101),z=a(103),B=Object(Z.a)({root:{minWidth:300,maxWidth:300,margin:"3rem"}});function R(e){var t=e.websiteLink,a=e.GitHubLink,n=e.imgPath,c=e.alt,i=e.title,r=e.subtitle,o=B();return l.a.createElement(H.a,{className:o.root+" grow"},l.a.createElement(O.a,{onClick:function(){return window.location.href={websiteLink:t}}},l.a.createElement(M.a,{component:"img",alt:c,height:"140",image:""+n,title:i}),l.a.createElement(T.a,null,l.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h2"},i),l.a.createElement(z.a,{variant:"body2",color:"textSecondary",component:"p"},r))),l.a.createElement(I.a,null,l.a.createElement(G.a,{"aria-label":"GitHub",style:{marginLeft:"auto"},onClick:function(){return window.location.href={GitHubLink:a}}},l.a.createElement(L.a,null))))}var W=Object(Z.a)({cards:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}});function A(){var e=W();return l.a.createElement("div",{className:e.cards},l.a.createElement(R,{websiteLink:"https://github.com/Ziyangll",GitHubLink:"https://github.com/Ziyangll",imgPath:"/projects-images/blob.svg",alt:"project 1",title:"placeholder",subtitle:"project 1"}),l.a.createElement(R,{websiteLink:"https://github.com/Ziyangll",GitHubLink:"https://github.com/Ziyangll",imgPath:"/projects-images/blob2.svg",alt:"project 2",title:"placeholder",subtitle:"project 2"}),l.a.createElement(R,{websiteLink:"https://github.com/Ziyangll",GitHubLink:"https://github.com/Ziyangll",imgPath:"/projects-images/blob3.svg",alt:"project 3",title:"placeholder",subtitle:"project 3"}),l.a.createElement(R,{websiteLink:"https://github.com/Ziyangll",GitHubLink:"https://github.com/Ziyangll",imgPath:"/projects-images/blob4.svg",alt:"project 4",title:"placeholder",subtitle:"project 4"}),l.a.createElement(R,{websiteLink:"https://github.com/Ziyangll",GitHubLink:"https://github.com/Ziyangll",imgPath:"/projects-images/blob5.svg",alt:"project 5",title:"placeholder",subtitle:"project 5"}),l.a.createElement(R,{websiteLink:"https://github.com/Ziyangll",GitHubLink:"https://github.com/Ziyangll",imgPath:"/projects-images/blob6.svg",alt:"project 6",title:"placeholder",subtitle:"project 6"}))}var F=a(49),J=a.n(F),U=a(50),V=Object(U.a)({palette:{primary:{main:"#000"},secondary:{main:"#fff"},contrastThreshold:3,tonalOffset:.2}});var D=function(){return l.a.createElement("div",{className:"main iframe"},l.a.createElement("div",{className:"download-button"},l.a.createElement(m.a,{theme:V},l.a.createElement(g.a,{variant:"contained",startIcon:l.a.createElement(J.a,null),href:"https://docs.google.com/document/d/16LwQznWREwZ1q91mL66XC-1dowZzPzUMwREGq1g3HqQ/edit?usp=sharing"},"Download"))),l.a.createElement("iframe",{title:"resume",className:"resume",src:"https://docs.google.com/document/d/e/2PACX-1vQZfX3KiO4G7XFmK32wZBl8-viS113duNsh-GohyksdcMGlpeaoQFnC3RWEPa-zBM5yl1kVO3tx38Bl/pub?embedded=true"},"Your browser doesn't support iframes"))},Q=Object(Z.a)({root:{minWidth:300,maxWidth:300,margin:"3rem"},cards:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}});function X(){var e=Q();return l.a.createElement("div",{className:e.cards},l.a.createElement(H.a,{className:e.root+" grow"},l.a.createElement(O.a,{onClick:function(){return window.location.replace("mailto:zl@auburn.edu")}},l.a.createElement(M.a,{component:"img",alt:"project 1",height:"140",image:"https://image.flaticon.com/icons/svg/561/561127.svg",title:"Email"}),l.a.createElement(T.a,null,l.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Email")))),l.a.createElement(H.a,{className:e.root+" grow"},l.a.createElement(O.a,{onClick:function(){return window.location.replace("https://www.linkedin.com/in/ziyangg/")}},l.a.createElement(M.a,{component:"img",alt:"LinkedIn",height:"140",image:"https://image.flaticon.com/icons/svg/889/889122.svg",title:"project 2"}),l.a.createElement(T.a,null,l.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h2"},"LinkIn")))),l.a.createElement(H.a,{className:e.root+" grow"},l.a.createElement(O.a,{onClick:function(){return window.location.replace("https://github.com/Ziyangll")}},l.a.createElement(M.a,{component:"img",alt:"GitHub",height:"140",image:"https://image.flaticon.com/icons/svg/2111/2111425.svg",title:"project 3"}),l.a.createElement(T.a,null,l.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Github")))),l.a.createElement(H.a,{className:e.root+" grow"},l.a.createElement(O.a,{onClick:function(){return window.location.replace("https://twitter.com/ziyangdev")}},l.a.createElement(M.a,{component:"img",alt:"Twitter",height:"140",image:"https://image.flaticon.com/icons/svg/733/733579.svg",title:"project 4"}),l.a.createElement(T.a,null,l.a.createElement(z.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Twitter")))))}function q(){return l.a.createElement(r.a,null,l.a.createElement("div",null,l.a.createElement(m.a,{theme:V},l.a.createElement(s.a,{position:"static",style:{boxShadow:"none"}},l.a.createElement(u.a,null,l.a.createElement(g.a,{component:r.b,to:"/",color:"inherit"},"Ziyang"),l.a.createElement(g.a,{component:r.b,to:"/projects",color:"inherit"},"Projects"),l.a.createElement(g.a,{component:r.b,to:"/resume",color:"inherit"},"Resume"),l.a.createElement(g.a,{component:r.b,to:"/contacts",color:"inherit"},"Contacts")))),l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/projects"},l.a.createElement(A,null)),l.a.createElement(o.a,{path:"/resume"},l.a.createElement(D,null)),l.a.createElement(o.a,{path:"/contacts"},l.a.createElement(X,null)),l.a.createElement(o.a,{path:"/"},l.a.createElement(P,null)))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[60,1,2]]]);
//# sourceMappingURL=main.ea69dce7.chunk.js.map