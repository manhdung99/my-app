(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},71:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t){},93:function(e,t,n){},94:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(16),r=n.n(s),o=(n(54),n(55),n(22)),i=n(20),l=n(19),d=n(7),j=n(4),u=n(0),b=Object(d.b)(null,(function(e){return{updateIsLogin:function(t){return e({type:"UPDATE_LOGIN",payload:t})}}}))((function(e){var t=e.updateIsLogin,n=Object(j.f)();return Object(u.jsxs)("div",{className:"topnav",children:[Object(u.jsx)(o.b,{to:"/my-app/",activeClassName:"active",exact:!0,children:"Home"}),Object(u.jsx)(o.b,{to:"/my-app/button",activeClassName:"active",children:"BUTTON HOVER CSS"}),Object(u.jsx)(o.b,{to:"/my-app/todo",activeClassName:"active",children:"Todo List"}),Object(u.jsx)(o.b,{to:"/my-app/toast",activeClassName:"active",children:"Toast Message"}),Object(u.jsx)("div",{className:"sign-out-btn",children:Object(u.jsxs)("span",{onClick:function(){return t("false"),localStorage.setItem("isLogin","false"),void n.push("/my-app/login")},children:[Object(u.jsx)(i.a,{icon:l.e}),"Logout"]})})]})}));n(63);function O(){return Object(u.jsx)("div",{className:"middle",children:Object(u.jsxs)("div",{className:"btn-wrap",children:[Object(u.jsx)("button",{className:"btn btn1",children:"Hover Me"}),Object(u.jsx)("button",{className:"btn btn2",children:"Hover Me"}),Object(u.jsx)("button",{className:"btn btn3",children:"Hover Me"}),Object(u.jsx)("button",{className:"btn btn4",children:"Hover Me"})]})})}n(64);function p(){return Object(u.jsx)("div",{className:"",children:Object(u.jsx)("button",{className:"btn-border-move",children:"Hover Me"})})}n(65);function h(){return Object(u.jsxs)("div",{className:"button-ripple",children:[Object(u.jsx)("button",{className:"btn btn1",children:"Hover Me"}),Object(u.jsx)("button",{className:"btn btn2",children:"Hover Me"}),Object(u.jsx)("button",{className:"btn btn3",children:"Hover Me"}),Object(u.jsx)("button",{className:"btn btn4",children:"Hover Me"})]})}n(66);function m(){return Object(u.jsx)("div",{className:" border-auto",children:Object(u.jsx)("div",{className:"btn-wrap",children:Object(u.jsxs)("button",{className:"btn",children:[Object(u.jsx)("span",{className:"btn-span1"}),Object(u.jsx)("span",{className:"btn-span2"}),Object(u.jsx)("span",{className:"btn-span3"}),Object(u.jsx)("span",{className:"btn-span4"}),"Hover Me"]})})})}n(67);function x(){return Object(u.jsx)("div",{className:" neon-button",children:Object(u.jsxs)("button",{className:"btn",children:[Object(u.jsx)("span",{className:"btn-span1"}),Object(u.jsx)("span",{className:"btn-span2"}),Object(u.jsx)("span",{className:"btn-span3"}),Object(u.jsx)("span",{className:"btn-span4"}),"Hover Me"]})})}n(68);function f(){return Object(u.jsx)("div",{className:"border-cover",children:Object(u.jsxs)("button",{className:"btn",children:[Object(u.jsx)("span",{className:"btn-span1"}),Object(u.jsx)("span",{className:"btn-span2"}),Object(u.jsx)("span",{className:"btn-span3"}),Object(u.jsx)("span",{className:"btn-span4"}),"Hover Me"]})})}n(69);function N(){return Object(u.jsxs)("div",{className:"button-wrap",children:[Object(u.jsx)("div",{className:"button-1",children:Object(u.jsx)(O,{})}),Object(u.jsxs)("div",{className:"button-2",children:[Object(u.jsx)(p,{}),Object(u.jsx)(f,{}),Object(u.jsx)(x,{}),Object(u.jsx)(m,{})]}),Object(u.jsx)("div",{className:"button-3",children:Object(u.jsx)(h,{})})]})}var v=n(14),g=n.n(v),y=n(21),D=n(6),T=(n(71),n(17)),w=n.n(T),L=n(96),E=Object(d.b)(null,(function(e){return{addListTodo:function(t){return e({type:"ADD_TODO",payload:t})}}}))((function(e){var t=e.showAddForm,n=e.handleCloseAddForm,c=e.addListTodo,s=Object(a.useState)(""),r=Object(D.a)(s,2),o=r[0],i=r[1],l=Object(a.useState)(""),d=Object(D.a)(l,2),j=d[0],b=d[1],O=Object(a.useState)(""),p=Object(D.a)(O,2),h=p[0],m=p[1],x=function(){n(),i(""),b(""),m("")},f=function(){var e=Object(y.a)(g.a.mark((function e(t,a,s){var r,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return alert("Work Name is Empty!"),e.abrupt("return");case 3:if(a){e.next=6;break}return alert("Start Date is Empty!"),e.abrupt("return");case 6:if(s){e.next=9;break}return alert("End Date is Empty!"),e.abrupt("return");case 9:if(!(Date.parse(a)>Date.parse(s))){e.next=12;break}return alert("End Date must be greater Start Date!"),e.abrupt("return");case 12:return r={workName:t,startDate:a,endDate:s,todoStatus:"Planing"},e.next=15,w.a.post("http://localhost:8081/todo/add",r);case 15:o=e.sent,c(o.data),n();case 18:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{children:Object(u.jsx)(L.a,{show:t,onHide:x,children:Object(u.jsxs)("div",{className:"add-new-wrap",children:[Object(u.jsx)("h2",{className:"add-new-title",children:"---ADD NEW TODO---"}),Object(u.jsxs)("div",{className:"input-data",children:[Object(u.jsx)("label",{className:"title-input",children:"Work Name"}),Object(u.jsx)("input",{value:o,onChange:function(e){i(e.target.value)},type:"text",placeholder:"Work name?"})]}),Object(u.jsxs)("div",{className:"input-data",children:[Object(u.jsx)("label",{className:"title-input",children:"Start Date"}),Object(u.jsx)("input",{value:j,onChange:function(e){b(e.target.value)},type:"date",placeholder:"Start Date?"})]}),Object(u.jsxs)("div",{className:"input-data",children:[Object(u.jsx)("label",{className:"content-input",children:"End Date"}),Object(u.jsx)("input",{value:h,onChange:function(e){m(e.target.value)},type:"date",placeholder:"End Date?"})]}),Object(u.jsx)("button",{onClick:function(){return f(o,j,h)},className:"btn-add-new-todo",children:"ADD"}),Object(u.jsx)("button",{onClick:x,className:"btn-add-new-cancel",children:"Cancel"})]})})})})),k=Object(d.b)(null,(function(e){return{deleteTodo:function(t){return e({type:"DELETE_TODO",payload:t})}}}))((function(e){var t=e.showDeleteForm,n=e.handleCloseDeleteForm,a=e.todoDelete,c=e.deleteTodo,s=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.delete("http://localhost:8081/todo/delete/".concat(a.id));case 2:c(a.id),n();case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)(L.a,{show:t,onHide:n,children:Object(u.jsxs)("div",{className:"delete-wrap",children:[Object(u.jsx)("h1",{className:"delete-title",children:"Delete Todo"}),Object(u.jsx)("p",{className:"delete-body",children:"Are you sure you want to delete this todo ?"}),Object(u.jsx)("button",{className:"btn-delete-form cancel-btn",onClick:n,children:"Cancel"}),Object(u.jsx)("button",{className:"btn-delete-form delete-btn",onClick:function(){s()},children:"Delete"})]})})})),S=n(2),C=function(e){var t=e.todoEdit,n=e.setTodoEdit;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"todo-item",children:Object(u.jsx)("input",{value:t.workName,onChange:function(e){return n(Object(S.a)(Object(S.a)({},t),{},{workName:e.target.value}))}})}),Object(u.jsx)("td",{className:"todo-item",children:Object(u.jsx)("input",{type:"date",style:{width:"140px"},value:t.startDate,onChange:function(e){return n(Object(S.a)(Object(S.a)({},t),{},{startDate:e.target.value}))}})}),Object(u.jsx)("td",{className:"todo-item",children:Object(u.jsx)("input",{type:"date",style:{width:"140px"},value:t.endDate,onChange:function(e){return n(Object(S.a)(Object(S.a)({},t),{},{endDate:e.target.value}))}})}),Object(u.jsx)("td",{className:"todo-item",children:Object(u.jsxs)("select",{value:t.todoStatus,onChange:function(e){return n(Object(S.a)(Object(S.a)({},t),{},{todoStatus:e.target.value}))},children:[Object(u.jsx)("option",{value:"Planing",children:"Planing"}),Object(u.jsx)("option",{value:"Complete",children:"Complete"})]})})]})};function _(e){var t=e.onFilter,n=Object(a.useState)(""),c=Object(D.a)(n,2),s=c[0],r=c[1],o=Object(a.useRef)(null);return Object(u.jsx)("div",{children:Object(u.jsx)("input",{value:s,onChange:function(e){return function(e){var n=e.target.value;r(n),o.current&&clearTimeout(o.current),o.current=setTimeout((function(){t(e.target.value)}),1e3)}(e)},className:"search-input",type:"text",placeholder:"Search here"})})}var I=Object(d.b)((function(e){return{todos:e.todos,isLogin:e.isLogin}}),(function(e){return{getListTodo:function(t){return e({type:"LIST_TODO",payload:t})},updateTodo:function(t){return e({type:"UPDATE_TODO",payload:t})},filterTodo:function(t){return e({type:"FILTER_TODO",payload:t})}}}))((function(e){var t=e.getListTodo,n=e.todos,c=e.updateTodo,s=e.filterTodo,r=e.isLogin,o=Object(a.useState)(!0),i=Object(D.a)(o,2),l=i[0],d=i[1],b=Object(a.useState)(!1),O=Object(D.a)(b,2),p=O[0],h=O[1],m=Object(a.useState)(!1),x=Object(D.a)(m,2),f=x[0],N=x[1],v=Object(a.useState)({}),T=Object(D.a)(v,2),L=T[0],S=T[1],I=Object(a.useState)({}),M=Object(D.a)(I,2),A=M[0],F=M[1],H=Object(j.f)(),P=0===Object.keys(A).length;Object(a.useEffect)((function(){!1===r&&H.push("/login")}),[]),Object(a.useEffect)((function(){var e=w.a.CancelToken.source();function n(){return(n=Object(y.a)(g.a.mark((function n(){var a,c;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.a.get("http://localhost:8081/todo/listAll",{cancelToken:e.token});case 3:a=n.sent,c=a&&a.data?a.data:[],d(!1),t(c),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),w.a.isCancel(n.t0)&&console.log("Request Cancel :",n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}return setTimeout((function(){!function(){n.apply(this,arguments)}()}),2e3),function(){e.cancel("Cancel by user")}}),[]);var U=function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!1===P&A.id===t.id)){e.next=7;break}return e.next=3,w.a.put("http://localhost:8081/todo/".concat(A.id),A);case 3:return n=e.sent,c(n.data),F({}),e.abrupt("return");case 7:return F(t),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t){e.next=6;break}return e.next=3,w.a.get("http://localhost:8081/todo/listAll");case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,w.a.get("http://localhost:8081/todo/search/".concat(t));case 8:n=e.sent;case 9:console.log(n.data),s(n.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"todo-container",children:[Object(u.jsx)(_,{onFilter:R}),Object(u.jsx)(k,{showDeleteForm:f,handleCloseDeleteForm:function(){return N(!1)},todoDelete:L}),Object(u.jsx)(E,{showAddForm:p,handleCloseAddForm:function(){return h(!1)}}),Object(u.jsxs)("button",{onClick:function(){return h(!0)},className:"add-button",children:[" ","Add Todo"]}),Object(u.jsx)("h2",{className:"title",children:"Todo List"}),Object(u.jsxs)("table",{children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"todo-header",children:[Object(u.jsx)("th",{className:"header-item",children:"ID"}),Object(u.jsx)("th",{className:"header-item",children:"Work Name"}),Object(u.jsx)("th",{className:"header-item",children:"Start Date"}),Object(u.jsx)("th",{className:"header-item",children:"End Date"}),Object(u.jsx)("th",{className:"header-item",children:"Status"}),Object(u.jsx)("th",{className:"header-item",children:"Action"})]})}),Object(u.jsxs)("tbody",{children:[!1===l&&n.map((function(e,t){return Object(u.jsxs)("tr",{className:"todo-list",children:[Object(u.jsx)("td",{className:"todo-item todo-id",children:t+1}),P?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"todo-item",children:e.workName}),Object(u.jsx)("td",{className:"todo-item",children:e.startDate}),Object(u.jsx)("td",{className:"todo-item",children:e.endDate}),Object(u.jsx)("td",{className:"todo-item",children:e.todoStatus})]}):e.id===A.id?Object(u.jsx)(C,{todoEdit:A,setTodoEdit:F}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("td",{className:"todo-item",children:e.workName}),Object(u.jsx)("td",{className:"todo-item",children:e.startDate}),Object(u.jsx)("td",{className:"todo-item",children:e.endDate}),Object(u.jsx)("td",{className:"todo-item",children:e.todoStatus})]}),Object(u.jsxs)("td",{className:"todo-item todo-action",children:[Object(u.jsx)("button",{onClick:function(){U(e)},className:"btn-todo edit",children:!1===P&&e.id===A.id?"Save":"Edit"}),Object(u.jsx)("button",{onClick:function(){return function(e){N(!0),S(e)}(e)},className:"btn-todo delete",children:"Delete"})]})]},e.id)})),!0===l&&Object(u.jsx)("tr",{children:Object(u.jsx)("td",{className:"loading",children:" Loading..."})})]})]})]})})),M=n(15);n(90);function A(){var e=Object(a.useState)([]),t=Object(D.a)(e,2),n=t[0],c=t[1],s=function(e,t){var a={success:l.a,warning:l.b,error:l.b}[e],s={success:"Success",warning:"Warning",error:"Error"}[e],o={id:Math.floor(1e4*Math.random()),type:e,title:s,icon:a,message:t};c([].concat(Object(M.a)(n),[o])),setTimeout((function(){r(o.id)}),4e3)},r=function(e){var t=n.filter((function(t){return t.id!==e}));c(t)};return Object(u.jsxs)("div",{className:"toast--container",children:[Object(u.jsx)("button",{onClick:function(){return s("success","Success Message")},children:"Success"}),Object(u.jsx)("button",{onClick:function(){return s("warning","Warning Message")},children:"Warning"}),Object(u.jsx)("button",{onClick:function(){return s("error","Error Message")},children:"Error"}),n.length>0&&n.map((function(e,t){return Object(u.jsxs)("div",{className:"toast-css "+e.type,children:[Object(u.jsx)("div",{className:"toast-icon  ",children:Object(u.jsx)(i.a,{icon:e.icon})}),Object(u.jsxs)("div",{className:"toast-body",children:[Object(u.jsx)("h4",{className:"toast-body-title",children:e.title}),Object(u.jsx)("p",{className:"toast-body-message",children:e.message})]}),Object(u.jsx)("div",{className:"toast-close",children:Object(u.jsx)("span",{children:Object(u.jsx)(i.a,{icon:l.f})})})]},t)}))]})}n(91);var F=Object(d.b)((function(e){return{isLogin:e.isLogin}}),(function(e){return{updateIsLogin:function(t){return e({type:"UPDATE_LOGIN",payload:t})}}}))((function(e){var t=e.updateIsLogin,n=e.isLogin,c=Object(a.useState)(!1),s=Object(D.a)(c,2),r=s[0],o=s[1],d=Object(a.useState)({username:"",password:""}),b=Object(D.a)(d,2),O=b[0],p=b[1],h=Object(a.useRef)(),m=Object(a.useRef)(),x=Object(a.useRef)(),f=Object(j.f)(),N="DungNM25",v="123456";Object(a.useEffect)((function(){"true"===n&&f.push("/my-app/")}));var g=function(){O.username===N&&O.password===v?(t("true"),localStorage.setItem("isLogin","true"),f.push("/my-app/")):o(!0)};document.addEventListener("keyup",(function(e){13===e.keyCode&&(e.preventDefault(),g())}));return Object(u.jsxs)("div",{className:"login-page",children:[Object(u.jsxs)("div",{className:"user-and-pass",children:[Object(u.jsx)("span",{children:"User:DungNM25"}),Object(u.jsx)("span",{children:"Pass:123456"})]}),Object(u.jsxs)("div",{className:"login-container",children:[Object(u.jsx)("h1",{className:"login-title",children:"Accout Login"}),Object(u.jsxs)("div",{className:"login-form",children:[Object(u.jsx)("label",{className:"login-label",htmlFor:" ",children:"UserName"}),Object(u.jsx)("input",{className:"login-input",value:O.username,onChange:function(e){return function(e){o(!1),p(Object(S.a)(Object(S.a)({},O),{},{username:e.target.value}))}(e)}}),r&&Object(u.jsx)("span",{className:"login-invalid",children:"username or password is wrong!"})]}),Object(u.jsxs)("div",{className:"login-form",children:[Object(u.jsx)("label",{className:"login-label",htmlFor:" ",children:"PassWord"}),Object(u.jsxs)("span",{onClick:function(){return m.current.style.display="none",h.current.style.display="block",void(x.current.type="text")},className:"showPassIcon",ref:m,children:[Object(u.jsx)(i.a,{icon:l.c})," "]}),Object(u.jsx)("span",{onClick:function(){return m.current.style.display="block",h.current.style.display="none",void(x.current.type="password")},className:"hidePassIcon",ref:h,children:Object(u.jsx)(i.a,{icon:l.d})}),Object(u.jsx)("input",{className:"login-input",type:"password",ref:x,value:O.password,onChange:function(e){return function(e){o(!1),p(Object(S.a)(Object(S.a)({},O),{},{password:e.target.value}))}(e)}}),r&&Object(u.jsx)("span",{className:"login-invalid",children:"username or password is wrong!"})]}),Object(u.jsxs)("div",{className:"login-selection",children:[Object(u.jsxs)("div",{className:"login-remember",children:[Object(u.jsx)("input",{className:"remember-input",type:"checkbox"}),Object(u.jsx)("label",{className:"remember-label",children:" Remember Me"})]}),Object(u.jsx)("label",{className:"forgot-label",children:" Forgot PassWord?"})]}),Object(u.jsx)("button",{className:"login-btn",onClick:function(){return g()},children:"Log in"})]})]})})),H=(n(92),n(93),Object(d.b)((function(e){return{isLogin:e.isLogin}}),(function(e){return{getListTodo:function(t){return e({type:"LIST_TODO",payload:t})},updateTodo:function(t){return e({type:"UPDATE_TODO",payload:t})}}}))((function(e){var t=e.isLogin,n=Object(j.f)();return Object(a.useEffect)((function(){"false"===t&&n.push("/my-app/login")}),[]),Object(u.jsx)("div",{className:"home",children:t&&Object(u.jsx)("div",{className:"home-container",children:Object(u.jsx)("span",{className:"home-title",children:"Welcome To My App"})})})})));var P=Object(d.b)((function(e){return{isLogin:e.isLogin}}),(function(e){return{getListTodo:function(t){return e({type:"LIST_TODO",payload:t})},updateTodo:function(t){return e({type:"UPDATE_TODO",payload:t})}}}))((function(e){var t=e.isLogin;return Object(u.jsx)(o.a,{children:Object(u.jsxs)("div",{className:"App",children:["true"===t&&Object(u.jsx)(b,{}),Object(u.jsxs)(j.c,{children:[Object(u.jsx)(j.a,{path:"/my-app",exact:!0,children:Object(u.jsx)(H,{})}),Object(u.jsx)(j.a,{path:"/my-app/button",children:Object(u.jsx)(N,{})}),Object(u.jsx)(j.a,{path:"/my-app/todo",children:Object(u.jsx)(I,{})}),Object(u.jsx)(j.a,{path:"/my-app/toast",children:Object(u.jsx)(A,{})}),Object(u.jsx)(j.a,{path:"/my-app/login",children:Object(u.jsx)(F,{})})]})]})})})),U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))},R=n(47),W={users:[{id:1,name:"DungNM"},{id:2,name:"HOc Lap Trinh"},{id:3,name:"Dung HOc Lap Trinh"}],todos:[],isLogin:localStorage.getItem("isLogin")},X=Object(R.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_LOGIN":return Object(S.a)(Object(S.a)({},e),{},{isLogin:t.payload});case"LIST_TODO":return Object(S.a)(Object(S.a)({},e),{},{todos:t.payload});case"ADD_TODO":var n=[].concat(Object(M.a)(e.todos),[t.payload]);return Object(S.a)(Object(S.a)({},e),{},{todos:Object(M.a)(n)});case"DELETE_TODO":var a=Object(M.a)(e.todos);return a=a.filter((function(e){return e.id!==t.payload})),Object(S.a)(Object(S.a)({},e),{},{todos:Object(M.a)(a)});case"UPDATE_TODO":var c=Object(M.a)(e.todos),s=c.findIndex((function(e){return e.id===t.payload.id}));return c[s]=t.payload,Object(S.a)(Object(S.a)({},e),{},{todos:Object(M.a)(c)});case"FILTER_TODO":var r=Object(M.a)(t.payload);return Object(S.a)(Object(S.a)({},e),{},{todos:Object(M.a)(r)});case"LIST_USER":return Object(S.a)(Object(S.a)({},e),{},{users:t.payload});case"DELETE_USER":var o=e.users;return o=o.filter((function(e){return e.id!==t.payload.id})),console.log(o),Object(S.a)(Object(S.a)({},e),{},{users:o});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(d.a,{store:X,children:Object(u.jsx)(P,{})})}),document.getElementById("root")),U()}},[[94,1,2]]]);
//# sourceMappingURL=main.9efc94cf.chunk.js.map