(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{182:function(e,t,n){},306:function(e,t,n){},308:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),o=(n(182),n(17)),s=n(348),l=n(163),u=n(370),j=n(359),b=n(351),d=n(350),p=n(365),m=n(353),h=n(344),g=n(352),f=n(166),O=n(161),x=n.n(O),v=n(162),y=n.n(v),S=n(160),w=n.n(S),k=n(8),N=n.n(k),C=n(14),P=n(33),_=n(64),T=n(150),A=n.n(T).a.create({baseURL:"https://api.ezfrontend.com/",headers:{"Content-Type":"application/json"}});A.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),A.interceptors.response.use((function(e){return e.data}),(function(e){console.log(e.response);var t=e.response,n=t.config,a=t.status,r=t.data;if(["/auth/local/register","/auth/local"].includes(n.url)&&400===a){var c=r.data||[],i=(c.length>0?c[0]:{}).messages||[],o=i.length>0?i[0]:{};throw new Error(o.message)}return Promise.reject(e)}));var F,I=A,R={register:function(e){return I.post("/auth/local/register",e)},login:function(e){return I.post("/auth/local",e)}},E={USER:"user",TOKEN:"access_token"},L=Object(_.createAsyncThunk)("users/register",function(){var e=Object(C.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.register(t);case 2:return n=e.sent,localStorage.setItem(E.TOKEN,n.jwt),localStorage.setItem(E.USER,JSON.stringify(n.user)),e.abrupt("return",n.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(_.createAsyncThunk)("users/login",function(){var e=Object(C.a)(N.a.mark((function e(t){var n;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.login(t);case 2:return n=e.sent,localStorage.setItem(E.TOKEN,n.jwt),localStorage.setItem(E.USER,JSON.stringify(n.user)),e.abrupt("return",n.user);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),B=Object(_.createSlice)({name:"user",initialState:{current:JSON.parse(localStorage.getItem(E.USER))||{},setting:{}},reducers:{logout:function(e){localStorage.removeItem(E.USER),localStorage.removeItem(E.TOKEN),e.current={}}},extraReducers:(F={},Object(P.a)(F,L.fulfilled,(function(e,t){e.current=t.payload})),Object(P.a)(F,D.fulfilled,(function(e,t){e.current=t.payload})),F)}),q=B.actions,z=B.reducer,G=q.logout,V=z,K=n(58),M=n(37),U=n(32),H=n(99),J=n(44),W=n(19),Q=n(360),X=n(2);var Y=function(e){var t=e.form,n=e.name,a=e.label,r=t.formState.errors,c=r[n];return Object(X.jsx)(U.a,{name:n,control:t.control,render:function(e){var t,i=e.field;return Object(X.jsx)(Q.a,Object(W.a)(Object(W.a)({variant:"outlined",margin:"normal"},i),{},{fullWidth:!0,label:a,error:!!c,helperText:null===(t=r[n])||void 0===t?void 0:t.message}))}})},Z=n(349),$=n(369),ee=n(98),te=n.n(ee),ne=n(345),ae=n(347),re=n(368),ce=n(367),ie=n(158),oe=n.n(ie),se=n(159),le=n.n(se),ue=n(346);var je=function(e){var t,n=e.form,r=e.name,c=e.label,i=n.formState,l=n.formState.errors,u=i.touchedFields[r]&&l[r],j=Object(a.useState)(!1),b=Object(o.a)(j,2),d=b[0],p=b[1],m=function(){p((function(e){return!e}))};return Object(X.jsxs)(ne.a,{fullWidth:!0,variant:"outlined",margin:"normal",error:!!u,children:[Object(X.jsx)(re.a,{htmlFor:r,children:c}),Object(X.jsx)(U.a,{name:r,control:n.control,render:function(e){var t,n=e.field;return Object(X.jsx)(ce.a,Object(W.a)(Object(W.a)({},n),{},{id:r,type:d?"text":"password",label:c,endAdornment:Object(X.jsx)(ae.a,{position:"end",children:Object(X.jsx)(s.a,{"aria-label":"toggle password visibility",onClick:m,edge:"end",children:d?Object(X.jsx)(oe.a,{}):Object(X.jsx)(le.a,{})})}),helperText:null===(t=l[r])||void 0===t?void 0:t.message}))}}),Object(X.jsx)(ue.a,{children:null===(t=l[r])||void 0===t?void 0:t.message})]})},be=Object(h.a)((function(e){return{root:{paddingTop:e.spacing(3),position:"relative"},avatar:{margin:"0 auto",backgroundColor:e.palette.secondary.main},title:{textAlign:"center",margin:e.spacing(2,0,3,0)},submit:{margin:e.spacing(3,0,2)},progress:{position:"absolute",top:e.spacing(1),left:0,right:0}}}));var de=function(e){var t=be(),n=J.a().shape({identifier:J.c().required("Please enter your email").email("Please enter valid email adress"),password:J.c().required("Please enter your password")}),a=Object(U.e)({defaultValues:{identifier:"",password:""},resolver:Object(H.a)(n)}),r=function(){var t=Object(C.a)(N.a.mark((function t(n){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.onSubmit)){t.next=4;break}return t.next=4,r(n);case 4:a.reset();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=a.formState.isSubmitting;return Object(X.jsxs)("div",{className:t.root,children:[c&&Object(X.jsx)(Z.a,{className:t.progress}),Object(X.jsx)($.a,{className:t.avatar,children:Object(X.jsx)(te.a,{})}),Object(X.jsx)(f.a,{component:"h3",variant:"h5",className:t.title,children:"Sign In"}),Object(X.jsxs)("form",{onSubmit:a.handleSubmit(r),children:[Object(X.jsx)(Y,{name:"identifier",label:"Email",form:a}),Object(X.jsx)(je,{name:"password",label:"Password",form:a}),Object(X.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,fullWidth:!0,disabled:c,size:"large",children:"Sign In"})]})]})};var pe=function(e){var t=Object(M.b)(),n=Object(K.b)().enqueueSnackbar,a=function(){var a=Object(C.a)(N.a.mark((function a(r){var c,i;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c=D(r),a.next=4,t(c).unwrap();case 4:a.sent,(i=e.closeDialog)&&i(),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),console.log("fail to Login",a.t0),n(a.t0.message,{variant:"error"});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}();return Object(X.jsx)("div",{children:Object(X.jsx)(de,{onSubmit:a})})},me=Object(h.a)((function(e){return{root:{paddingTop:e.spacing(3),position:"relative"},avatar:{margin:"0 auto",backgroundColor:e.palette.secondary.main},title:{textAlign:"center",margin:e.spacing(2,0,3,0)},submit:{margin:e.spacing(3,0,2)},progress:{position:"absolute",top:e.spacing(1),left:0,right:0}}}));var he=function(e){var t=me(),n=J.a().shape({fullName:J.c().required("Please enter your full name").test("Should has at least two word","Please enter two word",(function(e){return e.split(" ").length>=2})),email:J.c().required("Please enter your email").email("Please enter valid email adress"),password:J.c().required("Please enter your password").min(6,"Please enter at least 6 characters"),retypePassword:J.c().required("Please enter retype your password").min(6,"Please enter at least 6 characters").oneOf([J.b("password")],"Password doe not match")}),a=Object(U.e)({defaultValues:{fullName:"",email:"",password:"",retypePassword:""},resolver:Object(H.a)(n)}),r=function(){var t=Object(C.a)(N.a.mark((function t(n){var r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.onSubmit)){t.next=4;break}return t.next=4,r(n);case 4:a.reset();case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c=a.formState.isSubmitting;return Object(X.jsxs)("div",{className:t.root,children:[c&&Object(X.jsx)(Z.a,{className:t.progress}),Object(X.jsx)($.a,{className:t.avatar,children:Object(X.jsx)(te.a,{})}),Object(X.jsx)(f.a,{component:"h3",variant:"h5",className:t.title,children:"Create an account"}),Object(X.jsxs)("form",{onSubmit:a.handleSubmit(r),children:[Object(X.jsx)(Y,{name:"fullName",label:"Full Name",form:a}),Object(X.jsx)(Y,{name:"email",label:"Email",form:a}),Object(X.jsx)(je,{name:"password",label:"Password",form:a}),Object(X.jsx)(je,{name:"retypePassword",label:"Retype Password",form:a}),Object(X.jsx)(d.a,{type:"submit",variant:"contained",color:"primary",className:t.submit,fullWidth:!0,disabled:c,size:"large",children:"Create an account"})]})]})};var ge=function(e){var t=Object(M.b)(),n=Object(K.b)().enqueueSnackbar,a=function(){var a=Object(C.a)(N.a.mark((function a(r){var c,i;return N.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,r.username=r.email,c=L(r),a.next=5,t(c).unwrap();case 5:a.sent,n("Resgister Successfully!!!",{variant:"success"}),(i=e.closeDialog)&&i(),a.next=15;break;case 11:a.prev=11,a.t0=a.catch(0),console.log("fail to register",a.t0),n(a.t0.message,{variant:"error"});case 15:case"end":return a.stop()}}),a,null,[[0,11]])})));return function(e){return a.apply(this,arguments)}}();return Object(X.jsx)("div",{children:Object(X.jsx)(he,{onSubmit:a})})},fe=n(49),Oe=Object(h.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},link:{color:"#fff",textDecoration:"none"},closeIcon:{position:"absolute",top:e.spacing(1),right:e.spacing(1),color:e.palette.grey[500],zIndex:1},menuLink:{textDecoration:"none"}}})),xe="login",ve="register";function ye(){var e=Object(M.c)((function(e){return e.user.current})).id,t=Object(M.b)(),n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],i=r[1],h=Object(a.useState)(xe),O=Object(o.a)(h,2),v=O[0],S=O[1],k=Object(a.useState)(null),N=Object(o.a)(k,2),C=N[0],P=N[1],_=function(){i(!1)},T=function(e){P(null)},A=Oe();return Object(X.jsxs)("div",{className:A.root,children:[Object(X.jsx)(b.a,{position:"static",children:Object(X.jsxs)(g.a,{children:[Object(X.jsx)(w.a,{className:A.menuButton}),Object(X.jsx)(f.a,{variant:"h6",className:A.title,children:Object(X.jsx)(fe.b,{className:A.link,to:"/",children:"Tea Shop"})}),Object(X.jsx)(fe.c,{to:"/products",className:A.menuLink,children:Object(X.jsx)(d.a,{className:A.link,children:"Products"})}),Object(X.jsx)(fe.c,{to:"/todo",className:A.menuLink,children:Object(X.jsx)(d.a,{className:A.link,children:"Todo"})}),!e&&Object(X.jsx)(d.a,{className:A.link,onClick:function(){i(!0)},color:"inherit",children:"Login"}),e&&Object(X.jsx)(s.a,{color:"inherit",onClick:function(e){P(e.currentTarget)},children:Object(X.jsx)(x.a,{})})]})}),Object(X.jsxs)(l.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},anchorEl:C,keepMounted:!0,open:Boolean(C),onClose:T,getContentAnchorEl:null,children:[Object(X.jsx)(u.a,{onClick:T,children:"My account"}),Object(X.jsx)(u.a,{onClick:function(){var e=G();t(e)},children:"Logout"})]}),Object(X.jsxs)(p.a,{open:c,onClose:_,disableBackdropClick:!0,"aria-labelledby":"form-dialog-title",disableEscapeKeyDown:!0,children:[Object(X.jsx)(s.a,{className:A.closeIcon,onClick:_,children:Object(X.jsx)(y.a,{})}),Object(X.jsxs)(m.a,{children:[v===ve&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(ge,{closeDialog:_}),Object(X.jsx)(j.a,{textAlign:"center",children:Object(X.jsx)(d.a,{color:"primary",onClick:function(){S(xe)},children:"Already have an account. Login here"})})]}),v===xe&&Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(pe,{closeDialog:_}),Object(X.jsx)(j.a,{textAlign:"center",children:Object(X.jsx)(d.a,{color:"primary",onClick:function(){S(ve)},children:"Dont have an account. Register here"})})]})]})]})]})}var Se=n(22),we=(n(306),(0,n(64).createSlice)({name:"counter",initialState:0,reducers:{increase:function(e){return e+1},decrease:function(e,t){return e-1}}})),ke=we.actions,Ne=we.reducer,Ce=ke.increase,Pe=ke.decrease,_e=Ne,Te=Object(h.a)({root:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:32,padding:"0 30px"}});var Ae=function(e){var t=Te(),n=Object(M.b)(),a=Object(M.c)((function(e){return e.counter}));return Object(X.jsxs)("div",{children:["Counter: ",a,Object(X.jsxs)("div",{children:[Object(X.jsx)(d.a,{className:t.root,onClick:function(){var e=Ce();n(e)},children:"Increase"}),Object(X.jsx)(d.a,{className:t.root,onClick:function(){var e=Pe();n(e)},children:"Decrease"})]})]})},Fe=n(358),Ie=n(355),Re=n(310),Ee=n(362),Le={getAll:function(e){return Object(C.a)(N.a.mark((function t(){var n,a,r;return N.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=Object(W.a)({},e))._start=!e._page||e._page<=1?0:(e._page-1)*(e._limit||50),delete n._page,t.next=5,I.get("./products",{params:n});case 5:return a=t.sent,t.next=8,I.get("./products/count",{params:n});case 8:return r=t.sent,t.abrupt("return",{data:a,pagination:{page:e._page,limit:e._limit,total:r}});case 10:case"end":return t.stop()}}),t)})))()},get:function(e){var t="/products/".concat(e);return I.get(t)},add:function(e){return I.post("/products",e)},update:function(e){var t="/products/".concat(e.id);return I.path(t,e)},remove:function(e){var t="/products/".concat(e);return I.delete(t)}},De=n(75),Be=n.n(De),qe=n(371),ze=Object(h.a)((function(e){return{root:{display:"flex",flexFlow:"row wrap",alignItems:"center",padding:0,margin:e.spacing(2,0),listStyleType:"none","& > li":{margin:0,padding:e.spacing(1)}}}})),Ge=[{id:1,getLabel:function(){return"Giao h\xe0ng mi\u1ec5n ph\xed"},isActive:function(e){return e.isFreeShip},isVisible:function(){return!0},isRemovable:!1,onRemove:function(){},onToggle:function(e){var t=Object(W.a)({},e);return t.isFreeShip?delete t.isFreeShip:t.isFreeShip=!0,t}},{id:2,getLabel:function(e){return"C\xf3 khuy\u1ebfn m\xe3i"},isActive:function(){return!0},isVisible:function(e){return e.isPromotion},isRemovable:!0,onRemove:function(e){var t=Object(W.a)({},e);return delete t.isPromotion,t},onToggle:function(){}},{id:3,getLabel:function(e){return"T\u1eeb ".concat(e.salePrice_gte," \u0111\u1ebfn ").concat(e.salePrice_lte)},isActive:function(){return!0},isVisible:function(e){return Object.keys(e).includes("salePrice_lte")&&Object.keys(e).includes("salePrice_gte")},isRemovable:!0,onRemove:function(e){var t=Object(W.a)({},e);return delete t.salePrice_gte,delete t.salePrice_lte,t},onToggle:function(){}}];var Ve=function(e){var t=e.filters,n=void 0===t?{}:t,r=e.onChange,c=void 0===r?null:r,i=ze(),o=Object(a.useMemo)((function(){return Ge.filter((function(e){return e.isVisible(n)}))}),[n]);return Object(X.jsx)(j.a,{component:"ul",className:i.root,children:o.map((function(e){return Object(X.jsx)("li",{children:Object(X.jsx)(qe.a,{label:e.getLabel(n),color:e.isActive(n)?"primary":"default",clickable:!e.isRemovable,onClick:e.isRemovable?null:function(){if(c){var t=e.onToggle(n);c(t)}},onDelete:e.isRemovable?function(){if(c){var t=e.onRemove(n);c(t)}}:null})},e.id)}))})},Ke={getAll:function(e){return I.get("/categories")},get:function(e,t){var n="/categories/".concat(e);return I.get(n,{param:t})},add:function(e){return I.post("/categories",e)},update:function(e){var t="/categories/".concat(e.id);return I.path(t,e)},remove:function(e){var t="/categories/".concat(e);return I.delete(t)}};var Me=function(e){var t=e.onChange,n=Object(h.a)((function(e){return{root:{padding:e.spacing(2)},menu:{padding:0,margin:0,listStyleType:"none","& li":{marginTop:e.spacing(1),transition:"all .25s","&:hover":{cursor:"pointer",color:e.palette.primary.dark}}}}}))(),r=Object(a.useState)([]),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){Object(C.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ke.getAll();case 3:t=e.sent,s(t.map((function(e){return{id:e.id,name:e.name}}))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Fail to fetch Api",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[]),Object(X.jsxs)(j.a,{className:n.root,children:[Object(X.jsx)(f.a,{variant:"subtitle2",style:{textTransform:"uppercase"},children:"Danh m\u1ee5c s\u1ea3n ph\u1ea9m"}),Object(X.jsx)("ul",{className:n.menu,children:i.map((function(e){return Object(X.jsx)("li",{onClick:function(){return function(e){t&&t(e.id)}(e)},children:Object(X.jsx)(f.a,{variant:"body2",children:e.name})},e.id)}))})]})},Ue=Object(h.a)((function(e){return{root:{padding:e.spacing(2),borderTop:"1px solid ".concat(e.palette.grey[300])},range:{display:"flex",flexFlow:"row nowrap",alignItems:"center",marginTop:e.spacing(1),marginBottom:e.spacing(1),"& > span":{marginLeft:e.spacing(1),marginRight:e.spacing(1)}}}}));var He=function(e){var t=e.onChange,n=Ue(),r=Object(a.useState)({salePrice_gte:0,salePrice_lte:0}),c=Object(o.a)(r,2),i=c[0],s=c[1],l=function(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(W.a)(Object(W.a)({},e),{},Object(P.a)({},n,a))}))};return Object(X.jsxs)(j.a,{className:n.root,children:[Object(X.jsx)(f.a,{variant:"subtitle2",children:"CH\u1eccN KHO\u1ea2NG GI\xc1"}),Object(X.jsxs)(j.a,{className:n.range,children:[Object(X.jsx)(Q.a,{name:"salePrice_gte",value:i.salePrice_gte,onChange:l}),Object(X.jsx)("span",{children:"-"}),Object(X.jsx)(Q.a,{name:"salePrice_lte",value:i.salePrice_lte,onChange:l})]}),Object(X.jsx)(d.a,{variant:"outlined",color:"primary",size:"small",onClick:function(){t&&t(i),s({salePrice_gte:0,salePrice_lte:0})},children:"\xc1p D\u1ee5ng"})]})},Je=n(354),We=n(364),Qe=Object(h.a)((function(e){return{root:{padding:e.spacing(2),borderTop:"1px solid ".concat(e.palette.grey[300])},list:{listStyleType:"none",padding:0,margin:0,"& > li":{margin:0}}}}));var Xe=function(e){var t=e.filters,n=void 0===t?{}:t,a=e.onChange,r=Qe(),c=function(e){var t=e.target,n=t.name,r=t.checked;a&&a(Object(P.a)({},n,r))};return Object(X.jsxs)(j.a,{className:r.root,children:[Object(X.jsx)(f.a,{variant:"subtitle2",children:"CH\u1eccN KHO\u1ea2NG GI\xc1"}),Object(X.jsx)("ul",{className:r.list,children:[{value:"isPromotion",label:"C\xf3 khuy\u1ebfn m\xe3i"},{value:"isFreeShip",label:"V\u1eadn chuy\u1ec3n mi\u1ec5n ph\xed"}].map((function(e){return Object(X.jsx)("li",{children:Object(X.jsx)(Je.a,{control:Object(X.jsx)(We.a,{checked:Boolean(n[e.value]),onChange:c,name:e.value,color:"primary"}),label:e.label})},e.value)}))})]})};var Ye=function(e){var t=e.filters,n=e.onChange,a=function(e){n&&n(e)};return Object(X.jsxs)(j.a,{children:[Object(X.jsx)(Me,{onChange:function(e){n&&n({"category.id":e})}}),Object(X.jsx)(He,{onChange:a}),Object(X.jsx)(Xe,{filters:t,onChange:a})]})},Ze=Object(h.a)((function(e){return{thumbnailImg:{minHeight:"215px"}}}));var $e=function(e){var t,n=e.product,a=Ze(),r=n.thumbnail?"".concat("https://api.ezfrontend.com").concat(null===(t=n.thumbnail)||void 0===t?void 0:t.url):"https://via.placeholder.com/444";return Object(X.jsxs)(j.a,{padding:1,children:[Object(X.jsx)(j.a,{padding:1,className:a.thumbnailImg,children:Object(X.jsx)("img",{src:r,alt:n.name,width:"100%"})}),Object(X.jsx)(f.a,{variant:"body2",children:n.name}),Object(X.jsxs)(f.a,{variant:"body2",children:[Object(X.jsxs)(j.a,{component:"span",fontSize:16,fontWeight:"bold",mr:1,children:[" ",new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(n.salePrice)]}),n.promotionPercent>0?" -".concat(n.promotionPercent,"%"):""]})]})};function et(e){var t=e.productList;return Object(X.jsx)(j.a,{children:Object(X.jsx)(Ie.a,{container:!0,children:t.map((function(e){return Object(X.jsx)(Ie.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(X.jsx)($e,{product:e})},e.id)}))})})}et.defaultProps={productList:[]};var tt=et,nt=n(356);function at(e){var t=e.length;return Object(X.jsx)(j.a,{children:Object(X.jsx)(Ie.a,{container:!0,children:Array.from(new Array(t)).map((function(e,t){return Object(X.jsx)(Ie.a,{item:!0,xs:12,sm:6,md:4,lg:3,children:Object(X.jsxs)(j.a,{padding:1,children:[Object(X.jsx)(nt.a,{variant:"rect",width:"100%",height:200}),Object(X.jsx)(nt.a,{}),Object(X.jsx)(nt.a,{width:"60%"})]})},t)}))})})}at.defaultProps={length:6};var rt=at,ct=n(361),it=n(357);var ot=function(e){var t=e.currentSort,n=e.onChange;return Object(X.jsxs)(ct.a,{value:t,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){n&&n(t)},"aria-label":"disabled tabs example",children:[Object(X.jsx)(it.a,{label:"Gi\xe1 th\u1ea5p t\u1edbi cao",value:"salePrice:ASC"}),Object(X.jsx)(it.a,{label:"Gi\xe1 cao t\u1edbi th\u1ea5p",value:"salePrice:DESC"})]})},st=Object(h.a)((function(e){return{root:{},left:{width:"250px"},right:{flex:"1 1 0"},pagination:{display:"flex",flexFlow:"row nowrap",justifyContent:"center",marginTop:"20px",paddingBottom:"10px"}}}));var lt=function(e){var t=st(),n=Object(Se.f)(),r=Object(Se.g)(),c=Object(a.useMemo)((function(){var e=Be.a.parse(r.search);return Object(W.a)(Object(W.a)({},e),{},{_page:Number.parseInt(e._page)||1,_limit:Number.parseInt(e._limit)||9,_sort:e._sort||"salePrice:ASC",isPromotion:"true"===e.isPromotion,isFreeShip:"true"===e.isFreeShip})}),[r.search]);Object(a.useEffect)((function(){Object(C.a)(N.a.mark((function e(){var t,n,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Le.getAll(c);case 3:t=e.sent,n=t.data,a=t.pagination,u(n),console.log(n,a),O(a),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("fail to fetch product list",e.t0);case 14:m(!1);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[c]);var i=Object(a.useState)([]),s=Object(o.a)(i,2),l=s[0],u=s[1],b=Object(a.useState)(!0),d=Object(o.a)(b,2),p=d[0],m=d[1],h=Object(a.useState)({limit:10,total:10,page:1}),g=Object(o.a)(h,2),f=g[0],O=g[1];return Object(X.jsx)(j.a,{children:Object(X.jsx)(Fe.a,{children:Object(X.jsxs)(Ie.a,{container:!0,spacing:1,children:[Object(X.jsx)(Ie.a,{item:!0,className:t.left,children:Object(X.jsx)(Re.a,{elevation:0,children:Object(X.jsx)(Ye,{filters:c,onChange:function(e){var t=Object(W.a)(Object(W.a)({},c),e);n.push({pathname:n.location.pathname,search:Be.a.stringify(t)})}})})}),Object(X.jsx)(Ie.a,{item:!0,className:t.right,children:Object(X.jsxs)(Re.a,{elevation:0,children:[Object(X.jsx)(ot,{currentSort:c._sort,onChange:function(e){var t=Object(W.a)(Object(W.a)({},c),{},{_sort:e});n.push({pathname:n.location.pathname,search:Be.a.stringify(t)})}}),Object(X.jsx)(Ve,{filters:c,onChange:function(e){n.push({pathname:n.location.pathname,search:Be.a.stringify(e)})}}),p?Object(X.jsx)(rt,{}):Object(X.jsx)(tt,{productList:l})," ",Object(X.jsx)(j.a,{className:t.pagination,children:Object(X.jsx)(Ee.a,{color:"primary",count:Math.ceil(f.total/f.limit),page:f.page,onChange:function(e,t){var a=Object(W.a)(Object(W.a)({},c),{},{_page:t});n.push({pathname:n.location.pathname,search:Be.a.stringify(a)})}})})]})})]})})})};var ut=function(e){var t=Object(Se.h)();return Object(X.jsx)(j.a,{pt:4,children:Object(X.jsx)(Se.c,{children:Object(X.jsx)(Se.a,{path:t.url,exact:!0,component:lt})})})};var jt=function(){return Object(K.b)().enqueueSnackbar,Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)(ye,{}),Object(X.jsx)("header",{className:"App-header",children:Object(X.jsxs)(Se.c,{children:[Object(X.jsx)(Se.a,{path:"/todo",component:Ae}),Object(X.jsx)(Se.a,{path:"/products",component:ut}),Object(X.jsx)(Se.a,{path:"/",component:ut,exact:!0})]})})]})},bt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,374)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},dt={counter:_e,user:V},pt=Object(_.configureStore)({reducer:dt});i.a.render(Object(X.jsx)(r.a.StrictMode,{children:Object(X.jsx)(M.a,{store:pt,children:Object(X.jsx)(fe.a,{children:Object(X.jsx)(K.a,{anchorOrigin:{vertical:"top",horizontal:"right"},children:Object(X.jsx)(jt,{})})})})}),document.getElementById("root")),bt()}},[[308,1,2]]]);
//# sourceMappingURL=main.bc2fbea8.chunk.js.map