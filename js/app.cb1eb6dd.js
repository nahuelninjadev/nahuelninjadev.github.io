(function(t){function e(e){for(var r,o,i=e[0],l=e[1],c=e[2],u=0,m=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"66b040a1"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var c=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,a[1](c)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"301a":function(t,e,a){"use strict";a("ab4a")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("div",{staticClass:"container-fluid"},[t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNavAltMarkup"}},[a("div",{staticClass:"navbar-nav"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/",exact:""}},[t._v("Inicio")]),a("router-link",{staticClass:"nav-link",attrs:{to:"/about",exact:""}},[t._v("Acerca de")])],1)])])]),a("transition",{attrs:{name:"fade"}},[a("router-view")],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],o=(a("034f"),a("2877")),i={},l=Object(o["a"])(i,n,s,!1,null,null,null),c=l.exports,u=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("UserList")],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container mt-4"},[a("ButtonResetApp",{on:{resetApp:t.load}}),a("div",{staticClass:"row  mb-2"},[a("div",{staticClass:"col-md-1"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.showModal("create")}}},[t._v(" Agregar ")])])]),a("div",{ref:"modal",staticClass:"modal fade",attrs:{tabindex:"-1"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered"},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v(t._s(t.modalTitle))]),a("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),a("div",{staticClass:"modal-body"},[a("form",{ref:"form"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"first_name"}},[t._v("First name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.first_name,expression:"first_name"}],staticClass:"form-control",attrs:{type:"text",id:"first_name"},domProps:{value:t.first_name},on:{input:function(e){e.target.composing||(t.first_name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"last_name"}},[t._v("Last name:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.last_name,expression:"last_name"}],staticClass:"form-control",attrs:{type:"text",id:"last_name"},domProps:{value:t.last_name},on:{input:function(e){e.target.composing||(t.last_name=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"email"}},[t._v("Email:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"work"}},[t._v("Work:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.work,expression:"work"}],staticClass:"form-control",attrs:{type:"text",id:"work"},domProps:{value:t.work},on:{input:function(e){e.target.composing||(t.work=e.target.value)}}})])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.hideModal}},[t._v(" Close ")]),"create"===t.mode?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.createUser()}}},[t._v(" Save changes ")]):t._e(),"update"===t.mode?a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.updateUser()}}},[t._v(" Update ")]):t._e()])])])]),a("div",{staticClass:"row justify-content-center me-1 mb-2"},[a("div",{staticClass:"col-md-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar..."},domProps:{value:t.filter},on:{keyup:function(e){return t.filterUser()},input:function(e){e.target.composing||(t.filter=e.target.value)}}})])]),a("div",{staticClass:"row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 me-0"},t._l(t.users,(function(e){return a("div",{key:e.id,staticClass:"col"},[a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.avatar||t.defaultimage}}),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.first_name+" "+e.last_name)+" ")]),a("span",{staticClass:"text-muted"},[t._v(t._s(e.work))]),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.email)+" ")])]),a("div",{staticClass:"card-footer"},[a("button",{staticClass:"btn btn-sm btn-secondary me-1",on:{click:function(a){return t.loadFormAndShow(e)}}},[t._v(" Editar ")]),a("button",{staticClass:"btn btn-sm btn-danger ",on:{click:function(a){return t.deleteUser(e.id)}}},[t._v(" Eliminar ")])])])])})),0)],1)},p=[],v=a("53ca"),b=a("1da1"),h=(a("96cf"),a("159b"),a("4de4"),a("25f0"),a("2909")),g=(a("c740"),a("a434"),a("d81d"),{getAll:function(){var t=Object(b["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://reqres.in/api/users/");case 3:if(e=t.sent,!e||e.ok){t.next=8;break}throw new Error("Error "+e.status);case 8:if(!e){t.next=13;break}return t.next=11,e.json();case 11:return a=t.sent,t.abrupt("return",a);case 13:t.next=18;break;case 15:return t.prev=15,t.t0=t["catch"](0),t.abrupt("return",t.t0.message);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));function e(){return t.apply(this,arguments)}return e}(),createUser:function(t){var e=JSON.parse(localStorage.getItem("userList"));t.id=this.nextId(e),e.push(t),localStorage.setItem("userList",JSON.stringify(e))},deleteUser:function(t){var e=JSON.parse(localStorage.getItem("userList")),a=e.findIndex((function(e){return e.id==t}));return e.splice(a,1),localStorage.setItem("userList",JSON.stringify(e)),e},updateUser:function(t){var e=JSON.parse(localStorage.getItem("userList")),a=e.map((function(e){return e.id==t.id&&(e.first_name=t.first_name,e.last_name=t.last_name,e.work=t.work,e.email=t.email),e}));return console.log(a),localStorage.setItem("userList",JSON.stringify(a)),a},nextId:function(t){var e=t.map((function(t){return parseInt(t.id)}));return Math.max.apply(Math,Object(h["a"])(e))+1}}),_=g,w=a("7c2b"),C=a.n(w),k=a("c121"),y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"position-absolute btn btn-dark",attrs:{type:"button"},on:{click:function(e){return t.resetApp()}}},[t._v("Reset App")])},x=[],O={name:"ButtonResetApp",methods:{resetApp:function(){localStorage.removeItem("userList"),this.$emit("resetApp")}}},S=O,j=(a("301a"),Object(o["a"])(S,y,x,!1,null,"4bfa1bde",null)),A=j.exports,L={name:"UserList",components:{ButtonResetApp:A},data:function(){return{users:[],works:["web developer","desktop developer","mobile developer","graphic designer","tester","game designer"],id:null,first_name:"",last_name:"",email:"",work:"",avatar:"",modal:{},modalTitle:"",defaultimage:k,mode:"create",filter:""}},methods:{load:function(){var t=this;return Object(b["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(localStorage.getItem("userList")){e.next=12;break}return e.next=3,_.getAll();case 3:if(a=e.sent,!a||"object"===Object(v["a"])(a)){e.next=7;break}return alert(a),e.abrupt("return");case 7:a.data.forEach((function(e){e.work=t.works[t.getRandomInt(0,a.data.length)]})),t.users=a.data,localStorage.setItem("userList",JSON.stringify(t.users)),e.next=13;break;case 12:t.users=JSON.parse(localStorage.getItem("userList"));case 13:case"end":return e.stop()}}),e)})))()},createUser:function(){var t={first_name:this.first_name,last_name:this.last_name,work:this.work,avatar:"",email:this.email};_.createUser(t),this.load(),this.hideModal()},updateUser:function(){var t={id:this.id,first_name:this.first_name,last_name:this.last_name,work:this.work,avatar:"",email:this.email};this.users=_.updateUser(t),this.hideModal()},deleteUser:function(t){this.users=_.deleteUser(t)},loadFormAndShow:function(t){this.first_name=t.first_name,this.last_name=t.last_name,this.work=t.work,this.email=t.email,this.id=t.id,this.showModal("update")},getRandomInt:function(t,e){return Math.floor(Math.random()*(e-t))+t},showModal:function(t){"create"==t?(this.modalTitle="Nuevo usuario",this.mode="create"):(this.modalTitle="Editar usuario",this.mode="update"),this.modal.show()},hideModal:function(){this.formReset(),this.modal.hide()},formReset:function(){this.first_name="",this.last_name="",this.work="",this.email=""},filterUser:function(){console.log(this.filter);var t=JSON.parse(localStorage.getItem("userList")),e=this.filter.toLowerCase();this.users=t.filter((function(t){for(var a in t)if(-1!=t[a].toString().toLowerCase().indexOf(e)||-1!=(t.first_name+" "+t.last_name).toLowerCase().indexOf(e))return t}))}},mounted:function(){this.modal=new C.a(this.$refs.modal),this.load()}},I=L,M=Object(o["a"])(I,f,p,!1,null,"57cf7b96",null),N=M.exports,U={name:"Home",components:{UserList:N}},E=U,P=Object(o["a"])(E,d,m,!1,null,null,null),R=P.exports;r["a"].use(u["a"]);var J=[{path:"/",name:"Home",component:R},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],T=new u["a"]({routes:J,linkActiveClass:"active"}),$=T;a("7588"),r["a"].config.productionTip=!1,new r["a"]({router:$,render:function(t){return t(c)}}).$mount("#app")},7588:function(t,e,a){},"85ec":function(t,e,a){},ab4a:function(t,e,a){},c121:function(t,e,a){t.exports=a.p+"img/user.ce14d64d.png"}});
//# sourceMappingURL=app.cb1eb6dd.js.map