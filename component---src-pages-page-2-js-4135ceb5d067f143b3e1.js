(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{146:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(149),i=a(155),s=a(156);t.default=function(){return n.a.createElement(i.a,null,n.a.createElement(s.a,{title:"Page two"}),n.a.createElement("h1",null,"Hi from the second page"),n.a.createElement("p",null,"Welcome to page 2"),n.a.createElement(o.a,{to:"/"},"Go back to the homepage"))}},149:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(33),l=a.n(s);a.d(t,"a",function(){return l.a});a(150);var c=n.a.createContext({}),u=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=c},154:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{name:"Another Sample Menu",count:1,items:[{order:1,title:"Contact Us",url:"http://wordpress.loc/contact/"}]}},{node:{name:"Main Navigation",count:6,items:[{order:1,title:"Home",url:"http://wordpress.loc/"},{order:2,title:"Category A",url:"http://wordpress.loc/category/category-a/"},{order:3,title:"Category B",url:"http://wordpress.loc/category/category-b/"},{order:4,title:"Category C",url:"http://wordpress.loc/category/category-c/"},{order:5,title:"Category D",url:"http://wordpress.loc/category/category-d/"}]}},{node:{name:"Primary Menu",count:2,items:[{order:1,title:"Contact Us",url:"http://wordpress.loc/contact/"},{order:2,title:"Sitemap",url:"http://wordpress.loc/sitemap/"}]}}]}}}},155:function(e,t,a){"use strict";var r=a(152),n=a(0),o=a.n(n),i=a(4),s=a.n(i),l=a(149),c=(a(35),a(74),a(154)),u=(a(151),function(e){e.children;return o.a.createElement(l.b,{query:"2752249866",render:function(e){return o.a.createElement(o.a.Fragment,null,console.log(e.allWordpressWpApiMenusMenusItems.edges[2].node),o.a.createElement("div",{className:"menu-primary-menu-container"},o.a.createElement("ul",{id:"menu-primary-menu",className:"primary-menu"},o.a.createElement("li",null,o.a.createElement(l.a,{to:"posts"},"Posts")),e.allWordpressWpApiMenusMenusItems.edges[2].node.items.map(function(e){return o.a.createElement("li",{key:e.order},o.a.createElement(l.a,{to:e.url.replace(/\/$/,"").split("/").pop()},e.title))}))))},data:c})}),d=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"},id:"masthead",className:"site-header"},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"},className:"site-branding"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),o.a.createElement(u,null))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var p=d,m=function(e){var t=e.children;return o.a.createElement(l.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))))},data:r})};m.propTypes={children:s.a.node.isRequired};t.a=m},156:function(e,t,a){"use strict";var r=a(157),n=a(0),o=a.n(n),i=a(4),s=a.n(i),l=a(158),c=a.n(l);function u(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,s=e.title,l=r.data.site,u=t||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:s},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:u}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.arrayOf(s.a.object),keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u},157:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-page-2-js-4135ceb5d067f143b3e1.js.map