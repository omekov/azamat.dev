(this["webpackJsonpazamat.dev"]=this["webpackJsonpazamat.dev"]||[]).push([[0],{34:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),s=n.n(a),r=n(8),i=n(11),o=n(3),u=n(4),d=n(9),h=n(6),p=n(5),j=(n(34),n.p+"static/media/developer.c41c23b9.svg"),l=function(t){return Object(c.jsx)("header",{"data-test":"headerComponent",children:Object(c.jsx)("div",{className:"wrap",children:Object(c.jsx)("div",{className:"logo",children:Object(c.jsx)("img",{"data-test":"logoIMG",src:j,alt:"developer"})})})})},b=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){return Object(o.a)(this,n),e.call(this,t)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.header,n=t.desc;return e?Object(c.jsxs)("div",{"data-test":"HeadlineComponent",children:[Object(c.jsx)("h1",{"data-test":"header",children:e}),Object(c.jsx)("p",{"data-test":"desc",children:n})]}):null}}]),n}(a.Component),O=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"submitEvent",value:function(){this.props.emitEvent&&this.props.emitEvent()}},{key:"render",value:function(){var t=this,e=this.props.buttonText;return Object(c.jsx)("button",{"data-test":"buttonComponent",onClick:function(){return t.submitEvent()},children:e})}}]),n}(a.Component),v=n(10),f=n(16),m=n.n(f),x=n(26),y="getPosts",k=n(27),g=n.n(k),C=(n(59),function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.desc;return Object(c.jsxs)("div",{"data-test":"listItemComponent",children:[Object(c.jsx)("h2",{"data-test":"componentTitle",children:e}),Object(c.jsx)("div",{"data-test":"componentDesc",children:n})]})}}]),n}(a.Component)),w={hideBtn:!1},E=function(t){Object(h.a)(n,t);var e=Object(p.a)(n);function n(t){var c;return Object(o.a)(this,n),(c=e.call(this,t)).state=Object(i.a)({},w),c.fetch=c.fetch.bind(Object(d.a)(c)),c}return Object(u.a)(n,[{key:"fetch",value:function(){this.props.fetchPosts(),this.exampleMethod_updateState()}},{key:"exampleMethod_updateState",value:function(){var t=this.state.hideBtn;this.setState({hideBtn:!t})}},{key:"exmapleMethod_returnsAValue",value:function(t){return t+1}},{key:"render",value:function(){var t=this.props.posts,e=this.state.hideBtn,n={buttonText:"Get posts",emitEvent:this.fetch};return Object(c.jsxs)("div",{"data-test":"appComponent",children:[Object(c.jsx)(l,{}),Object(c.jsxs)("section",{className:"main",children:[Object(c.jsx)(b,{header:"Posts",desc:"Click the button to render posts!"}),e&&Object(c.jsx)(O,Object(i.a)({},n)),t.length>0&&Object(c.jsx)("div",{children:t.map((function(t,e){var n={title:t.title,desc:t.body};return Object(c.jsx)(C,Object(i.a)({},n),e)}))})]})]})}}]),n}(a.Component),B=Object(v.b)((function(t){return{posts:t.posts}}),{fetchPosts:function(){return function(){var t=Object(x.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://jsonplaceholder.typicode.com/posts?_limit=10").then((function(t){e({type:y,payload:t.data})})).catch((function(t){return console.log(t)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}})(E),M=n(7),P=n(28),S=Object(M.c)({posts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case y:return e.payload;default:return t}}}),_=[P.a],I=M.a.apply(void 0,_)(M.d)(S);Object(r.render)(Object(c.jsx)(v.a,{store:I,children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(B,{})})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.92d922c1.chunk.js.map