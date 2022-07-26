(this["webpackJsonpcontact-book"]=this["webpackJsonpcontact-book"]||[]).push([[0],{64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),s=a.n(r),i=a(17),l=a(4),o=a(6),j=a(8),u=a.n(j),d=a(19),b=a(12),p=a.n(b),O=Object(n.createContext)(),h=a(3),x="GET_CONTACTS",m="ADD_CONTACT",f="DELETE_CONTACT",y="SET_CURRENT",v="CLEAR_CURRENT",g="UPDATE_CONTACT",C="FILTER_CONTACTS",w="CLEAR_FILTER",N="SET_ALERT",k="REMOVE_ALERT",E="REGISTER_SUCCESS",A="REGISTER_FAIL",R="USER_LOADED",T="AUTH_ERROR",_="LOGIN_SUCCESS",S="LOGIN_FAIL",L="LOGOUT",F="CLEAR_ERRORS",P="CONTACT_ERROR",I="CLEAR_CONTACTS",U=function(e,t){switch(t.type){case R:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,loading:!1,user:t.payload});case E:case _:return Object(h.a)(Object(h.a)(Object(h.a)({},e),t.payload),{},{isAuthenticated:!0,loading:!1});case A:case T:case S:case L:return Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null,error:t.payload});case F:return Object(h.a)(Object(h.a)({},e),{},{error:null});default:throw new Error("Unsupported type of: ".concat(t.type))}},D=function(e){e?(p.a.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete p.a.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},q=a(2),G=function(){var e=Object(n.useContext)(O);return[e.state,e.dispatch]},B=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/auth");case 3:a=e.sent,t({type:R,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:T});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/users",a);case 3:n=e.sent,t({type:E,payload:n.data}),B(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:A,payload:e.t0.response.data.msg});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),J=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/auth",a);case 3:n=e.sent,t({type:_,payload:n.data}),B(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:S,payload:e.t0.response.data.msg});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}(),M=function(e){return e({type:F})},V=function(e){var t={token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,error:null,user:null},a=Object(n.useReducer)(U,t),c=Object(o.a)(a,2),r=c[0],s=c[1];return D(r.token),r.loading&&B(s),Object(n.useEffect)((function(){D(r.token)}),[r.token]),Object(q.jsx)(O.Provider,{value:{state:r,dispatch:s},children:e.children})},W=Object(n.createContext)(),$=a(29),z=function(e,t){switch(t.type){case x:return Object(h.a)(Object(h.a)({},e),{},{contacts:t.payload});case m:return Object(h.a)(Object(h.a)({},e),{},{contacts:[t.payload].concat(Object($.a)(e.contacts))});case g:return Object(h.a)(Object(h.a)({},e),{},{contacts:e.contacts.map((function(e){return e._id===t.payload._id?t.payload:e}))});case f:return Object(h.a)(Object(h.a)({},e),{},{contacts:e.contacts.filter((function(e){return e._id!==t.payload})),filtered:null!==e.filtered?e.filtered.filter((function(e){return e._id!==t.payload})):null});case I:return Object(h.a)(Object(h.a)({},e),{},{contacts:null,filtered:null,error:null,current:null});case y:return Object(h.a)(Object(h.a)({},e),{},{current:t.payload});case v:return Object(h.a)(Object(h.a)({},e),{},{current:null});case C:return Object(h.a)(Object(h.a)({},e),{},{filtered:e.contacts.filter((function(e){var a=e.name,n=e.email;return"".concat(a).concat(n).toLowerCase().includes(t.payload.toLowerCase())}))});case w:return Object(h.a)(Object(h.a)({},e),{},{filtered:null});case P:return Object(h.a)(Object(h.a)({},e),{},{error:t.payload});default:throw new Error("Unsupported type of: ".concat(t.type))}},K=function(){var e=Object(n.useContext)(W);return[e.state,e.dispatch]},Q=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/api/contacts");case 3:a=e.sent,t({type:x,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:P,payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),X=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/api/contacts",a);case 3:n=e.sent,t({type:m,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:P,payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),Y=function(){var e=Object(d.a)(u.a.mark((function e(t,a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/contacts/".concat(a));case 3:t({type:f,payload:a}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({type:P,payload:e.t0.response.msg});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.put("/api/contacts/".concat(a._id),a);case 3:n=e.sent,t({type:g,payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:P,payload:e.t0.response.msg});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,a){return e.apply(this,arguments)}}(),ee=function(e){e({type:v})},te=function(e){var t=Object(n.useReducer)(z,{contacts:null,current:null,filtered:null,error:null}),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(q.jsx)(W.Provider,{value:{state:c,dispatch:r},children:e.children})},ae=function(e){var t=e.title,a=e.icon,c=G(),r=Object(o.a)(c,2),s=r[0],l=r[1],j=s.isAuthenticated,u=s.user,d=K()[1],b=Object(q.jsxs)(n.Fragment,{children:[Object(q.jsx)("h2",{children:Object(q.jsxs)("li",{children:["Hello ",u&&u.name]})}),Object(q.jsx)("li",{children:Object(q.jsxs)(i.b,{onClick:function(){l({type:L}),function(e){e({type:I})}(d)},to:"/login",children:[Object(q.jsx)("i",{className:"fas fa-sign-out-alt"})," ",Object(q.jsx)("span",{className:"hide-sm",children:"Logout"})]})})]}),p=Object(q.jsxs)(n.Fragment,{children:[Object(q.jsx)("li",{children:Object(q.jsx)(i.b,{to:"/register",children:"Register"})}),Object(q.jsx)("li",{children:Object(q.jsx)(i.b,{to:"/login",children:"Login"})})]});return Object(q.jsxs)("div",{className:"navbar bg-primary",children:[Object(q.jsx)("h1",{children:Object(q.jsxs)(i.b,{to:"/",children:[Object(q.jsx)("i",{className:a})," ",t]})}),Object(q.jsx)("ul",{children:j?b:p})]})};ae.defaultProps={title:"Contact Book",icon:"fas fa-id-card-alt"};var ne=ae,ce=function(e){var t=e.contact,a=K()[1],n=t._id,c=t.name,r=t.email,s=t.phone,i=t.type,l=t.notes,o=t.website,j=t.birthday;return Object(q.jsxs)("div",{className:"card bg-light",children:[Object(q.jsxs)("h3",{className:"text primary text-left",children:[c," ",Object(q.jsx)("span",{style:{float:"right"},className:"badge "+("professional"===i?"badge-success":"badge-primary"),children:i.charAt(0).toUpperCase()+i.slice(1)})]}),Object(q.jsxs)("ul",{className:"list",children:[r&&Object(q.jsxs)("li",{children:[Object(q.jsx)("i",{className:"fas fa-envelope-open"})," ",r]}),s&&Object(q.jsxs)("li",{children:[Object(q.jsx)("i",{className:"fas fa-phone"})," ",s]}),o&&Object(q.jsxs)("li",{children:[Object(q.jsx)("i",{className:"fas fa-globe"})," ",Object(q.jsx)("a",{href:o,children:o})]}),l&&Object(q.jsxs)("li",{children:[Object(q.jsx)("i",{className:"fas fa-sticky-note"})," ",l]}),j&&Object(q.jsxs)("li",{children:[Object(q.jsx)("i",{className:"fas fa-birthday-cake"})," ",j]})]}),Object(q.jsxs)("p",{children:[Object(q.jsx)("button",{className:"btn btn-dark btn-sm",onClick:function(){return function(e,t){e({type:y,payload:t})}(a,t)},children:"Edit"}),Object(q.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){Y(a,n),ee(a)},children:"Delete"})]})]})},re=a.p+"static/media/book.cbf51cb4.gif",se=function(){return Object(q.jsx)("img",{src:re,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})},ie=a(71),le=a(69),oe=function(){var e=K(),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a.contacts,s=a.filtered;Object(n.useEffect)((function(){Q(c)}),[c]);var i={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}};return null!==r&&0===r.length?Object(q.jsx)("h4",{children:"Please add a contact"}):Object(q.jsx)(n.Fragment,{children:null!==r?null!==s?Object(q.jsx)(ie.a,{children:s.map((function(e){return Object(q.jsx)(le.a.div,{variants:i,layout:!0,initial:"hidden",animate:"visible",exit:"exit",children:Object(q.jsx)(ce,{contact:e})},e._id)}))}):Object(q.jsx)(ie.a,{children:r.map((function(e){return Object(q.jsx)(le.a.div,{variants:i,layout:!0,initial:"hidden",animate:"visible",exit:"exit",children:Object(q.jsx)(ce,{contact:e})},e._id)}))}):Object(q.jsx)(se,{})})},je=a(20),ue={name:"",email:"",phone:"",type:"personal",notes:"",website:"",birthday:""},de=function(){var e=K(),t=Object(o.a)(e,2),a=t[0],c=t[1],r=a.current,s=Object(n.useState)(ue),i=Object(o.a)(s,2),l=i[0],j=i[1];Object(n.useEffect)((function(){j(null!==r?r:ue)}),[r]);var u=l.name,d=l.email,b=l.phone,p=l.type,O=l.notes,x=l.website,m=l.birthday,f=function(e){return j(Object(h.a)(Object(h.a)({},l),{},Object(je.a)({},e.target.name,e.target.value)))},y=function(){ee(c)};return Object(q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),null===r?X(c,l).then((function(){return j(ue)})):Z(c,l),y()},children:[Object(q.jsx)("h2",{className:"text-primary",children:r?"Edit Contact":"Add Contact"}),Object(q.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:u,onChange:f}),Object(q.jsx)("input",{type:"email",placeholder:"Email",name:"email",value:d,onChange:f}),Object(q.jsx)("h3",{children:Object(q.jsx)("input",{type:"tel",placeholder:"Phone",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",value:b,onChange:f})}),Object(q.jsx)("h3",{children:"Contact Type"}),Object(q.jsx)("input",{type:"radio",name:"type",value:"personal",checked:"personal"===p,onChange:f}),"Personal"," ",Object(q.jsx)("input",{type:"radio",name:"type",value:"professional",checked:"professional"===p,onChange:f}),"Professional"," ",Object(q.jsx)("textarea",{type:"text",placeholder:"Notes",name:"notes",value:O,onChange:f})," ",Object(q.jsxs)("h3",{children:[Object(q.jsx)("label",{htmlFor:"website",children:"Website: "})," ",Object(q.jsx)("input",{type:"url",placeholder:"https://mywebsite.com",name:"website",value:x,onChange:f})]}),Object(q.jsxs)("h3",{children:[Object(q.jsx)("label",{htmlFor:"birthday",children:"Birthday:"}),Object(q.jsx)("input",{type:"date",name:"birthday",value:m,onChange:f})]}),Object(q.jsx)("div",{children:Object(q.jsx)("input",{type:"submit",value:r?"Update Contact":"Add Contact",className:"btn btn-primary btn-block"})}),r&&Object(q.jsx)("div",{children:Object(q.jsx)("button",{className:"btn btn-light btn-block",onClick:y,children:"Clear"})})]})},be=function(){var e=K()[1];return Object(q.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(q.jsx)("input",{type:"text",placeholder:"Filter Contacts...",onChange:function(t){var a,n;""!==t.target.value?(a=e,n=t.target.value,a({type:C,payload:n})):function(e){e({type:w})}(e)}})})},pe=function(){return Object(q.jsxs)("div",{className:"grid-2",children:[Object(q.jsx)("div",{children:Object(q.jsx)(de,{})}),Object(q.jsxs)("div",{children:[Object(q.jsx)(be,{}),Object(q.jsx)(oe,{})]})]})},Oe=function(){return Object(q.jsxs)("div",{children:[Object(q.jsx)("h1",{children:"About This App"}),Object(q.jsx)("p",{className:"my-1",children:"This is a full stack React app for keeping contacts"}),Object(q.jsxs)("p",{className:"bg-dark p",children:[Object(q.jsx)("strong",{children:"Version:"}),"1.0.0"]})]})},he=Object(n.createContext)(),xe=function(e){var t=Object(n.useContext)(he),a=G(),c=Object(o.a)(a,2),r=c[0],s=c[1],i=r.error,j=r.isAuthenticated,u=t.setAlert;Object(n.useEffect)((function(){"User already exists"===i&&(u(i,"danger"),M(s))}),[i,j,e.history,u,s]);var d=Object(n.useState)({name:"",email:"",password:"",password2:""}),b=Object(o.a)(d,2),p=b[0],O=b[1],x=p.name,m=p.email,f=p.password,y=p.password2,v=function(e){return O(Object(h.a)(Object(h.a)({},p),{},Object(je.a)({},e.target.name,e.target.value)))};return j?Object(q.jsx)(l.a,{to:"/"}):Object(q.jsxs)("div",{className:"from-container",children:[Object(q.jsxs)("h1",{children:["Account ",Object(q.jsx)("span",{className:"text-primary",children:"Register"})]}),Object(q.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===x||""===m||""===f?u("Please enter all fields","danger"):f!==y?u("Passwords do not match","danger"):H(s,{name:x,email:m,password:f})},children:[Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{htmlFor:"name",children:"Name"}),Object(q.jsx)("input",{type:"text",name:"name",value:x,required:!0,onChange:v})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(q.jsx)("input",{type:"email",name:"email",value:m,required:!0,onChange:v})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(q.jsx)("input",{type:"password",name:"password",value:f,required:!0,minLength:"6",onChange:v})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{htmlFor:"password2",children:"Confirm Password"}),Object(q.jsx)("input",{type:"password",name:"password2",value:y,required:!0,minLength:"6",onChange:v})]}),Object(q.jsx)("input",{type:"submit",value:"Register",className:"btn btn-primary btn-block"})]})]})},me=function(){var e=Object(n.useContext)(he).setAlert,t=G(),a=Object(o.a)(t,2),c=a[0],r=a[1],s=c.error,i=c.isAuthenticated;Object(n.useEffect)((function(){"Invalid Credentials"===s&&(e(s,"danger"),M(r))}),[s,i,r,e]);var j=Object(n.useState)({email:"",password:""}),u=Object(o.a)(j,2),d=u[0],b=u[1],p=d.email,O=d.password,x=function(e){return b(Object(h.a)(Object(h.a)({},d),{},Object(je.a)({},e.target.name,e.target.value)))};return i?Object(q.jsx)(l.a,{to:"/"}):Object(q.jsxs)("div",{className:"from-container",children:[Object(q.jsxs)("h1",{children:["Account ",Object(q.jsx)("span",{className:"text-primary",children:"Login"})]}),Object(q.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""===p||""===O?e("Please fill in all fields","danger"):J(r,{email:p,password:O})},children:[Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(q.jsx)("input",{type:"email",name:"email",value:p,required:!0,onChange:x})]}),Object(q.jsxs)("div",{className:"form-group",children:[Object(q.jsx)("label",{htmlFor:"password",children:"Password"}),Object(q.jsx)("input",{type:"password",name:"password",value:O,required:!0,onChange:x})]}),Object(q.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary btn-block"})]})]})},fe=function(){var e=Object(n.useContext)(he);return e.alerts.length>0&&e.alerts.map((function(e){return Object(q.jsxs)("div",{className:"$alert alert-".concat(e.type),children:[Object(q.jsx)("i",{className:"fas fa-info-circle"})," ",e.msg]},e.id)}))},ye=function(e){var t=e.component,a=G(),n=Object(o.a)(a,1)[0],c=n.isAuthenticated;return n.loading?Object(q.jsx)(se,{}):c?Object(q.jsx)(t,{}):Object(q.jsx)(l.a,{to:"/login"})},ve=function(e,t){switch(t.type){case N:return[].concat(Object($.a)(e),[t.payload]);case k:return e.filter((function(e){return e.id!==t.payload}));default:return e}},ge=a(70),Ce=function(e){var t=Object(n.useReducer)(ve,[]),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(q.jsx)(he.Provider,{value:{alerts:c,setAlert:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3,n=Object(ge.a)();r({type:N,payload:{msg:e,type:t,id:n}}),setTimeout((function(){return r({type:k,payload:n})}),a)}},children:e.children})},we=(a(64),function(){return Object(q.jsx)(V,{children:Object(q.jsx)(te,{children:Object(q.jsx)(Ce,{children:Object(q.jsx)(i.a,{children:Object(q.jsxs)(n.Fragment,{children:[Object(q.jsx)(ne,{}),Object(q.jsxs)("div",{className:"container",children:[Object(q.jsx)(fe,{}),Object(q.jsxs)(l.d,{children:[Object(q.jsx)(l.b,{path:"/",element:Object(q.jsx)(ye,{component:pe})}),Object(q.jsx)(l.b,{path:"/about",element:Object(q.jsx)(Oe,{})}),Object(q.jsx)(l.b,{path:"/register",element:Object(q.jsx)(xe,{})}),Object(q.jsx)(l.b,{path:"/login",element:Object(q.jsx)(me,{})})]})]})]})})})})})});s.a.render(Object(q.jsx)(c.a.StrictMode,{children:Object(q.jsx)(we,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.12b57656.chunk.js.map