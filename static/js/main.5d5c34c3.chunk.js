(this["webpackJsonpsotial-network"]=this["webpackJsonpsotial-network"]||[]).push([[0],{11:function(e,t,n){e.exports={nav:"Nav_nav__hnmH6",item:"Nav_item__Zzy5R",active:"Nav_active__2ZqM-",friends:"Nav_friends__Yn4nG"}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(43),r=n(5),o="ADD-MESSAGE",u={people:[{name:"Hagrid",id:1,photo:"https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/entertainment/Hagrid-dcf1a1468c4d89537bb7684fd8f4fed7.jpg"},{name:"Harry",id:2,photo:"https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg"},{name:"Hermiona",id:3,photo:"https://cdn.vox-cdn.com/thumbor/3AL25v8sPmoeo9INQ-SNXM1-Iic=/0x0:1024x768/1400x1050/filters:focal(408x210:570x372):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/51000509/harry-potter-top-10-hermione-granger-moments-hermione-granger-358045.0.jpg"},{name:"Ron",id:4,photo:"https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/Ron_Weasley_poster.jpg/220px-Ron_Weasley_poster.jpg"}],messages:[{id:1,text:"I love sleeping"},{id:2,text:"I love exercise"},{id:3,text:"I love girls"},{id:4,text:"I love food"}]},c=function(e,t){var n={id:e.messages[e.messages.length-1].id+1,text:t,likesCount:0};return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[n])})},i=function(e){return{type:o,text:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return c(e,t.text);default:return e}}},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));n(0);var a=n(133),r=a.create({withCredentials:!0,headers:{"API-KEY":"57e26acc-6012-4baf-a78b-a7714e8a1367"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t))}},u={deleteFollow:function(e){return r.delete("follow/".concat(e))},putFollow:function(e){return r.post("follow/".concat(e))}},c={authMe:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}},i={setUserProfile:function(e){return r.get("profile/"+e)},getUserStatus:function(e){return r.get("profile/status/"+e)},putUserStatus:function(e){return r.put("profile/status/",{status:e})}}},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},289:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(64),u=n.n(o),c=(n(165),n(33)),i=n(34),s=n(37),l=n(36),m=(n(166),n(10)),p=n(14),f=(n(167),function(){return r.a.createElement("div",null,"Music")}),d=(n(168),function(){return r.a.createElement("div",null,"News")}),h=(n(169),function(){return r.a.createElement("div",null,"Setings")}),g=n(12),b=n(8),v=n.n(b),E=n(18),O=n(43),_=n(5),w=n(16),j=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(_.a)(Object(_.a)({},e),a):e}))},y="users/FOLLOW",k="users/UNFOLLOW",P="users/SET_USERS",x="users/SET_CURRENT_PAGE",C="users/SET_TOTAL_USERS_COUNT",S="users/TOGGLE_IS_FETCHING",N="users/BUTTON_DISABLE",F={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,buttonDisable:[]},T=function(e){return{type:y,userId:e}},U=function(e){return{type:k,userId:e}},I=function(e){return{type:x,currentPage:e}},D=function(e){return{type:S,isFetching:e}},A=function(e,t){return{type:N,disable:e,userId:t}},z=function(){var e=Object(E.a)(v.a.mark((function e(t,n,a,r){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(A(!0,n)),e.next=3,a(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(A(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(_.a)(Object(_.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!0})});case k:return Object(_.a)(Object(_.a)({},e),{},{users:j(e.users,t.userId,"id",{followed:!1})});case P:return Object(_.a)(Object(_.a)({},e),{},{users:t.users});case x:return Object(_.a)(Object(_.a)({},e),{},{currentPage:t.currentPage});case C:return Object(_.a)(Object(_.a)({},e),{},{totalUsersCount:t.totalCount});case S:return Object(_.a)(Object(_.a)({},e),{},{isFetching:t.isFetching});case N:return Object(_.a)(Object(_.a)({},e),{},{buttonDisable:t.disable?[].concat(Object(O.a)(e.buttonDisable),[t.userId]):e.buttonDisable.filter((function(e){return e!==t.userId}))});default:return e}},M=n(55),R=n(88),H=n.n(R),B=n.p+"static/media/user_generic2_black.c2ec548a.png",G=n(130),W=n(91),q=n.n(W),Z=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],m=1;m<=s;m++)l.push(m);var p=Math.ceil(s/i),f=Object(a.useState)(1),d=Object(G.a)(f,2),h=d[0],g=d[1],b=(h-1)*i+1,v=h*i;return console.log(b,v),r.a.createElement("div",null,h>1&&r.a.createElement("button",{onClick:function(){return g(h-1)}},"Perv"),l.filter((function(e){return e>=b&&e<=v})).map((function(e){return r.a.createElement("span",{key:e,onClick:function(t){return u(e)},className:(o===e&&q.a.selectedPage)+" "+q.a.currentPage},e)})),h<p&&r.a.createElement("button",{onClick:function(){return g(h+1)}},"Next"))},J=function(e){var t=e.user,n=e.buttonDisable,a=e.unFollowThunk,o=e.FollowThunk;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(p.b,{to:"/profile/"+t.id},r.a.createElement("img",{className:H.a.usersPhoto,src:null!=t.photos.small?t.photos.small:B}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city")))))},K=function(e){var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,o=e.onPageChanged,u=e.users,c=e.unFollowThunk,i=e.FollowThunk,s=e.buttonDisable;Object(M.a)(e,["totalUsersCount","pageSize","currentPage","onPageChanged","users","unFollowThunk","FollowThunk","buttonDisable"]);return r.a.createElement("div",null,r.a.createElement(Z,{totalItemsCount:t,pageSize:n,currentPage:a,onPageChanged:o}),u.map((function(e){return r.a.createElement(J,{key:e.id,user:e,buttonDisable:s,unFollowThunk:c,FollowThunk:i})})))},Q=n(39),Y=n(9),V=n(94),X=function(e){return e.usersPage.users},$=Object(V.a)(X,(function(e){return e.filter((function(e){return!0}))})),ee=function(e){return e.usersPage.isFetching},te=(Object(V.a)(ee,X,(function(e,t){return e.filter((function(e){return!0}))})),function(e){return e.usersPage.pageSize}),ne=function(e){return e.usersPage.totalUsersCount},ae=function(e){return e.usersPage.currentPage},re=function(e){return e.usersPage.buttonDisable},oe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement("div",null,this.props.isFetching&&r.a.createElement(Q.a,null),r.a.createElement(K,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,selectedPage:this.props.selectedPage,users:this.props.users,onPageChanged:this.onPageChanged,componentDidMount:this.componentDidMount,unFollowThunk:this.props.unFollowThunk,FollowThunk:this.props.FollowThunk,buttonDisable:this.props.buttonDisable}))}}]),n}(r.a.Component),ue=Object(Y.compose)(Object(g.b)((function(e){return{users:$(e),pageSize:te(e),totalUsersCount:ne(e),currentPage:ae(e),isFetching:ee(e),buttonDisable:re(e)}}),{FollowThunk:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=w.b.putFollow.bind(w.b),z(n,e,a,T);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unFollowThunk:function(e){return function(){var t=Object(E.a)(v.a.mark((function t(n){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=w.b.deleteFollow.bind(w.b),z(n,e,a,U);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},requestUsers:function(e,t){return function(){var n=Object(E.a)(v.a.mark((function n(a){var r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(D(!0)),a(I(e)),n.next=4,w.d.getUsers(e,t);case 4:r=n.sent,a(D(!1)),a((u=r.data.items,{type:P,users:u})),a((o=r.data.totalCount,{type:C,totalCount:o}));case 8:case"end":return n.stop()}var o,u}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(oe),ce=n(68),ie=n.n(ce),se=function(e){return r.a.createElement("header",{className:ie.a.header},r.a.createElement("div",{className:ie.a.headerImg},r.a.createElement("img",{src:"https://bower.io/img/bower-logo.png"}),r.a.createElement("div",{className:ie.a.loginBlock},e.isFetching?r.a.createElement(Q.a,null):null,e.isAuth?r.a.createElement("div",null," ",e.login," - ",r.a.createElement("button",{onClick:e.Logout},"Log out")):r.a.createElement(p.b,{to:"/login"},"Login"))))},le=n(44),me="samurai-network/auth/SET_USER_DATA",pe={userId:null,email:null,login:null,isAuth:!1},fe=function(e,t,n,a){return{type:me,payload:{userId:e,email:t,login:n,isAuth:a}}},de=function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){var n,a,r,o,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.authMe();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,u=a.login,t(fe(r,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case me:return Object(_.a)(Object(_.a)({},e),t.payload);default:return e}},ge=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(se,this.props))}}]),n}(r.a.Component),be=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetching:e.auth.isFetching}}),{Logout:function(){return function(){var e=Object(E.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.logout();case 2:0===e.sent.data.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ge),ve=n(129),Ee=n(73),Oe=n(32),_e=n(52),we=n.n(_e),je=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Object(Oe.a)("text","email","Email",Oe.b,[Ee.b]),Object(Oe.a)("password","password","Password",Oe.b,[Ee.b]),Object(Oe.a)("checkbox","rememberMe",null,Oe.b,null,"Remember me"),n&&r.a.createElement("div",{className:we.a.form_summary_error},n),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Login")))})),ye=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var a=Object(E.a)(v.a.mark((function a(r){var o,u;return v.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,w.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(de()):(console.log(o.data),u=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(le.a)("login",{_error:u})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(je,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}}))})),ke=n(70),Pe=n.n(ke),xe=function(e){return r.a.createElement("div",{className:Pe.a.friend},r.a.createElement("div",{className:Pe.a.profilePhoto},r.a.createElement("img",{src:e.photo})),r.a.createElement("div",{className:Pe.a.name},e.name))},Ce=n(11),Se=n.n(Ce),Ne=function(e){return r.a.createElement("nav",{className:Se.a.nav},r.a.createElement("div",{className:"".concat(Se.a.item," ").concat(Se.a.active)},r.a.createElement(p.b,{to:"/profile",activeClassName:Se.a.active},"Profile")),r.a.createElement("div",{className:Se.a.item},r.a.createElement(p.b,{to:"/dialogs",activeClassName:Se.a.active},"Messages")),r.a.createElement("div",{className:Se.a.item},r.a.createElement(p.b,{to:"/news",activeClassName:Se.a.active},"News")),r.a.createElement("div",{className:Se.a.item},r.a.createElement(p.b,{to:"/music",activeClassName:Se.a.active},"Music")),r.a.createElement("div",{className:Se.a.item},r.a.createElement(p.b,{to:"/setings",activeClassName:Se.a.active},"Setings")),r.a.createElement("div",{className:Se.a.item},r.a.createElement(p.b,{to:"/users",activeClassName:Se.a.active},"Users")),r.a.createElement("div",{className:Se.a.item},r.a.createElement("div",{className:Se.a.friends},"Friends:"),e.friends.map((function(e,t){return r.a.createElement(xe,{photo:e.photo,name:e.name,key:e.id})}))))},Fe=Object(g.b)((function(e){return{friends:e.dialogsPage.people}}))(Ne),Te="INITIALIZED_SUCCES",Ue={initialized:!1},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Te:return Object(_.a)(Object(_.a)({},e),{},{initialized:!0});default:return e}},De=n(135),Ae=n(97),ze=n(128),Le={},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return e},Re=n(131),He=n(9),Be=He.createStore,Ge=He.combineReducers,We=He.applyMiddleware,qe=Be(Ge({profilePage:Ae.b,dialogsPage:ze.b,sidebar:Me,usersPage:L,auth:he,app:Ie,form:Re.a}),We(De.a)),Ze=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))}},Je=r.a.lazy((function(){return n.e(4).then(n.bind(null,298))})),Ke=r.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),Qe=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wraper"},r.a.createElement(be,null),r.a.createElement(Fe,null),r.a.createElement("div",{className:"app-wraper-content"},r.a.createElement(m.b,{path:"/dialogs",render:Ze(Je)}),r.a.createElement(m.b,{path:"/profile/:userId?",render:Ze(Ke)}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(f,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(d,null)}}),r.a.createElement(m.b,{path:"/setings",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(ue,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(ye,null)}}))):r.a.createElement(Q.a,null)}}]),n}(a.Component),Ye=Object(Y.compose)(m.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(de()).then((function(){e({type:Te})}))}}}))(Qe),Ve=function(e){return r.a.createElement(p.a,null,r.a.createElement(g.a,{store:qe},r.a.createElement(Ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},32:function(e,t,n){"use strict";n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p}));var a=n(55),r=n(0),o=n.n(r),u=n(89),c=n(52),i=n.n(c),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,u=n&&a;return o.a.createElement("div",{className:i.a.form_control+" "+(u?i.a.error:"")},o.a.createElement("div",null,r),u&&o.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("textarea",Object.assign({},t,n))," ")},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e," ",o.a.createElement("input",Object.assign({},t,n))," ")},p=function(e,t,n,a,r,c,i){return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({type:e,name:t,placeholder:n,component:a,validate:r},c))," ",i)}},39:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n.p+"static/media/831.802470e9.gif";t.a=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:o}))}},52:function(e,t,n){e.exports={form_control:"Forms-control_form_control__2NgSy",error:"Forms-control_error__375OK",form_summary_error:"Forms-control_form_summary_error__2heAQ"}},68:function(e,t,n){e.exports={header:"Header_header__1ek1f",loginBlock:"Header_loginBlock__3u8MT"}},70:function(e,t,n){e.exports={profilePhoto:"FriendsList_profilePhoto__Dyfcv",friend:"FriendsList_friend__TOuxn",name:"FriendsList_name__1dIVu"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},88:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__3R2en"}},91:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3DpGW",currentPage:"Paginator_currentPage__3EMyx"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return E})),n.d(t,"e",(function(){return O}));var a=n(8),r=n.n(a),o=n(18),u=n(43),c=n(5),i=n(16),s="profile/ADD-POST",l="profile/SET_USER_PROFILE",m="profile/SET_STATUS",p={posts:[{id:1,text:"post about TicTok",likesCount:2},{id:2,text:"post about apple",likesCount:3},{id:3,text:"post about google",likesCount:5},{id:4,text:"post about instagram",likesCount:7}],profile:null,status:""},f=function(e,t){var n={id:e.posts[e.posts.length-1].id+1,text:t,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])})},d=function(e,t){return Object(c.a)(Object(c.a)({},e),{},{profile:t})},h=function(e,t){return Object(c.a)(Object(c.a)({},e),{},{status:t})},g=function(e){return{type:s,newPost:e}},b=function(e){return{type:m,status:e}},v=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.setUserProfile(e);case 2:a=t.sent,n((r=a.data,{type:l,profile:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e||(e=2),t.next=3,i.c.getUserStatus(e);case 3:a=t.sent,n(b(a.data));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.putUserStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return f(e,t.newPost);case l:return d(e,t.profile);case m:return h(e,t.status);default:return e}}}},[[289,1,2]]]);
//# sourceMappingURL=main.5d5c34c3.chunk.js.map