(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",function(){return u});var a=r(7),n=r.n(a),o=r(0),l=r.n(o),s=r(149),i=r(155),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.allWordpressPost;return l.a.createElement(i.a,null,l.a.createElement("h1",null,"Posts"),e.edges.map(function(e){var t=e.node;return l.a.createElement("article",{key:t.id,className:"post-"+t.slug+" post type-post status-publish"},l.a.createElement("header",{className:"entry-header"},l.a.createElement("h3",{className:"entry-title"},l.a.createElement(s.a,{to:"post/"+t.slug},t.title))),l.a.createElement("div",{className:"entry-content",dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.Component);t.default=c;var u="704649911"},149:function(e,t,r){"use strict";r.d(t,"b",function(){return u});var a=r(0),n=r.n(a),o=r(4),l=r.n(o),s=r(33),i=r.n(s);r.d(t,"a",function(){return i.a});r(150);var c=n.a.createContext({}),u=function(e){return n.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},150:function(e,t,r){var a;e.exports=(a=r(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(e,t,r){"use strict";r.r(t);r(34);var a=r(0),n=r.n(a),o=r(4),l=r.n(o),s=r(55),i=r(2),c=function(e){var t=e.location,r=i.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:r},r.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},154:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{name:"Another Sample Menu",count:4,items:[{order:1,title:"Home",url:"http://wordpress.loc/home/"},{order:2,title:"Contact",url:"http://wordpress.loc/contact/"},{order:3,title:"Sample Post 1",url:"http://wordpress.loc/2016/06/22/sample-post-1/"},{order:4,title:"Category A",url:"http://wordpress.loc/category/category-a/"}]}},{node:{name:"Main Navigation",count:6,items:[{order:1,title:"Home",url:"http://wordpress.loc/home/"},{order:2,title:"Category A",url:"http://wordpress.loc/category/category-a/"},{order:3,title:"Category B",url:"http://wordpress.loc/category/category-b/"},{order:4,title:"Category C",url:"http://wordpress.loc/category/category-c/"},{order:5,title:"Category D",url:"http://wordpress.loc/category/category-d/"},{order:6,title:"Archive",url:"http://wordpress.loc/archive/"}]}},{node:{name:"Primary Menu",count:5,items:[{order:1,title:"Sample Page",url:"http://wordpress.loc/sample-page/"},{order:2,title:"Home",url:"http://wordpress.loc/home/"},{order:3,title:"Archive",url:"http://wordpress.loc/archive/"},{order:4,title:"Contact",url:"http://wordpress.loc/contact/"},{order:5,title:"Sitemap",url:"http://wordpress.loc/sitemap/"}]}}]}}}},155:function(e,t,r){"use strict";var a=r(152),n=r(0),o=r.n(n),l=r(4),s=r.n(l),i=r(149),c=r(154),u=(r(151),function(e){e.children;return o.a.createElement(i.b,{query:"2752249866",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"menu-primary-menu-container"},o.a.createElement("ul",{id:"menu-primary-menu",className:"primary-menu"},e.allWordpressWpApiMenusMenusItems.edges[2].node.items.map(function(e){return o.a.createElement("li",{key:e.object_slug},o.a.createElement(i.a,{to:e.url},e.title))}))))},data:c})}),d=function(e){var t=e.siteTitle;return o.a.createElement("header",{style:{background:"rebeccapurple",marginBottom:"1.45rem"},id:"masthead",className:"site-header"},o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"},className:"site-branding"},o.a.createElement("h1",{style:{margin:0}},o.a.createElement(i.a,{to:"/",style:{color:"white",textDecoration:"none"}},t))),o.a.createElement(u,null))};d.propTypes={siteTitle:s.a.string},d.defaultProps={siteTitle:""};var p=d,m=function(e){var t=e.children;return o.a.createElement(i.b,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},o.a.createElement("main",null,t),o.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby"))))},data:a})};m.propTypes={children:s.a.node.isRequired};t.a=m}}]);
//# sourceMappingURL=component---src-templates-posts-js-11919f6ef339907f19ef.js.map