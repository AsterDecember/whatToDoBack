(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){e.exports=a(250)},149:function(e,t,a){},151:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),s=(a(149),a(32)),i=a(33),u=a(36),l=a(34),p=a(37),d=(a(151),a(263)),h=a(261),v=a(35),E=a(21),g="GET_EVENTBRITE_SAGA",f="GET_EVENTBRITE_EVENTS_SAGA",m="ADD_EVENTBRITE_EVENT_SAGA",b="GET_EVENTS_DB",y=function(e){return{type:"FETCH_EVENTBRITE_SAGA",payload:e}},w=function(e){return{type:g,payload:e}},O=function(e){return{type:"FETCH_EVENTBRITE_EVENTS_SAGA",payload:e}},j=function(e){return{type:f,payload:e}},S=function(e){return{type:m,payload:e}},_=function(e){return{type:"FETCH_EVENT_DB",payload:e}},T=function(e){return{type:b,payload:e}},k=function(e){return{type:"FETCH_EVENTS_DB",payload:e}},x=a(262),D=a(167),A=a(176),C=a(258),N=a(99),G=C.a.Meta,I=function(e){return r.a.createElement("div",{style:{background:"#ECECEC",padding:"30px"}},r.a.createElement("div",{className:"boxCard"},function(){var t=e.events,a=e.loged,n=e.userId,c=e.addEvent;return t?t.map(function(e){var t=new Date(e.start.utc);return t.toString(),r.a.createElement("div",{className:"singleCard",key:e.id},r.a.createElement(C.a,{hoverable:!0,style:{width:240,marginTop:"1rem"},cover:r.a.createElement("img",{alt:e.name,src:e.logo?e.logo.url:"https://www.valuewalk.com/wp-content/uploads/2017/04/no-thumbnail.png"})},r.a.createElement(G,{title:e.name.text,description:t.toString()}),r.a.createElement("a",{href:e.url,target:"_blank"},r.a.createElement(N.a,{type:"primary",block:!0},"More information")),a&&r.a.createElement(N.a,{block:!0,onClick:function(){c({element:e,userId:n})}},"Add event")))}):r.a.createElement("h1",null,"No info")}()))},B=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getEventbriteSaga()}},{key:"addEvent",value:function(e){console.log("info: evento:",e)}},{key:"render",value:function(){var e=this,t=this.props.eventbriteDataSaga.categories?this.props.eventbriteDataSaga.categories.map(function(e){return e.name}):[],a=!!this.props.authDataSaga.user._id;return r.a.createElement("div",null,r.a.createElement("h2",null,"Type a word to show events"),r.a.createElement(x.a,{style:{width:200},dataSource:t,placeholder:"type a keyword",filterOption:function(e,t){return-1!==t.props.children.toUpperCase().indexOf(e.toUpperCase())},onChange:function(t){e.props.getEventbriteEventsSaga(t)}}),r.a.createElement("div",{className:"cards"},this.props.eventbriteDataSaga.events.length>0?r.a.createElement(D.a,{gutter:64},r.a.createElement(I,{addEvent:this.props.addEventbriteEventSaga,userId:this.props.authDataSaga.user._id,loged:a,events:this.props.eventbriteDataSaga.events})):r.a.createElement(A.a,{style:{margin:"1rem"},description:r.a.createElement("span",null,"not events yet ",r.a.createElement("a",{href:"https://www.eventbrite.com/signin/?referrer=%2Fcreate"},"Go create one"))})))}}]),t}(n.Component),V=Object(v.b)(function(e){return{eventbriteDataSaga:e.eventbriteDataSaga,authDataSaga:e.authDataSaga}},function(e){return Object(E.b)({getEventbriteSaga:w,getEventbriteEventsSaga:j,addEventbriteEventSaga:S},e)})(B),F="GET_LOGIN_SAGA",H=function(e){return{type:F,payload:e}},M=function(e){return{type:"FETCH_LOGIN_SAGA",payload:e}},L=a(251),W=a(257),P=a(252),R=a(12),U=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={user:{email:"",password:""}},a.handleChange=function(e){var t=a.state.user;t[e.target.name]=e.target.value,a.setState({user:t})},a.logIn=function(){console.log("logIn");var e=a.state.user;console.log(e),a.props.getLoginSaga(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.user,a=t.email,n=t.password;return this.props.authDataSaga.user._id&&(console.log("loged"),this.props.close()),r.a.createElement("div",null,r.a.createElement(P.a,{style:{marginBottom:"1rem"},name:"email",placeholder:"Enter your email",prefix:r.a.createElement(R.a,{type:"user",style:{color:"rgba(0,0,0,.25)"}}),value:a,onChange:this.handleChange,ref:function(t){return e.userNameInput=t}}),r.a.createElement(P.a.Password,{style:{marginBottom:"1rem"},name:"password",placeholder:"Password",value:n,onChange:this.handleChange}),r.a.createElement(N.a,{className:"buttonWine",type:"primary",onClick:this.logIn},"GO"))}}]),t}(n.Component),J=Object(v.b)(function(e){return{authDataSaga:e.authDataSaga}},function(e){return Object(E.b)({getLoginSaga:H},e)})(U),Y=a(256),q=a(255),Q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){this.props.getEventsDBAction(this.props.authDataSaga.user._id)}},{key:"render",value:function(){var e=this.props.eventbriteDataSaga.userEvents;return r.a.createElement("div",null,"Welcome:",this.props.authDataSaga.user.name,r.a.createElement(N.a,{type:"primary",block:!0,onClick:function(){window.location.reload()}},"Log out"),r.a.createElement(Y.a,{style:{margin:"1rem"},itemLayout:"horizontal",dataSource:e,renderItem:function(e){return r.a.createElement(Y.a.Item,null,r.a.createElement(Y.a.Item.Meta,{avatar:r.a.createElement(q.a,{src:"https://www.iosicongallery.com/icons/eventbrite-2017-04-06/256.png"}),title:r.a.createElement("a",{href:e.url,target:"_blank"},e.name),description:e.start}))}}))}}]),t}(n.Component),z=Object(v.b)(function(e){return{authDataSaga:e.authDataSaga,eventbriteDataSaga:e.eventbriteDataSaga}},function(e){return Object(E.b)({getEventsDBAction:T},e)})(Q),K=L.a.TabPane;function $(e){console.log(e)}var X=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.showModal=function(){a.setState({visible:!0})},a.handleOk=function(e){console.log(e),a.setState({visible:!1})},a.handleCancel=function(e){console.log(e),a.setState({visible:!1})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(W.a,{title:"Login",visible:this.state.visible,onOk:this.handleOk,onCancel:this.handleCancel},r.a.createElement(J,{close:this.handleOk})),r.a.createElement(L.a,{defaultActiveKey:"1",onChange:$},r.a.createElement(K,{tab:"Events",key:"1"},r.a.createElement(V,null)),this.props.authDataSaga.user._id?r.a.createElement(K,{tab:"Profile",key:"2"},r.a.createElement(z,null)):r.a.createElement(K,{tab:"Login",key:"2"},r.a.createElement(N.a,{onClick:function(){e.showModal()}},"Login"))))}}]),t}(n.Component),Z=Object(v.b)(function(e){return{authDataSaga:e.authDataSaga}},function(e){return Object(E.b)({getLoginSaga:H},e)})(X),ee=a(81),te=Object(ee.a)(),ae=function(){return r.a.createElement(d.a,{history:te},r.a.createElement(h.a,{exact:!0,path:"/",component:Z}))},ne=(a(228),a(259)),re=(ne.a.Header,ne.a.Footer),ce=(ne.a.Sider,ne.a.Content),oe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ne.a,null,r.a.createElement("div",{className:"headBanner"},"Header"),r.a.createElement(ce,null,r.a.createElement(ae,null)),r.a.createElement(re,null,"Mike \xa9\ufe0f")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(260),ie=a(105),ue=a(24),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch((arguments.length>1?arguments[1]:void 0).type){case"FETCH_DATA":return Object(ue.a)({},e,{type:"example",id:1});default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DATA_SAGA":var a=t.payload.dataSaga;return Object(ue.a)({},e,a);default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{events:[],userEvents:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EVENTBRITE_SAGA":var a=t.payload.categories;return Object(ue.a)({},e,{categories:a});case"FETCH_EVENTBRITE_EVENTS_SAGA":var n=t.payload.events;return Object(ue.a)({},e,{events:n});case"FETCH_EVENT_DB":return console.log("se guardo"),Object(ue.a)({},e);case"FETCH_EVENTS_DB":console.log(t.payload);var r=t.payload;return Object(ue.a)({},e,{userEvents:r});case"GET_KEYWORD":console.log("Action keyword:",t.payload);var c=t.payload.value;return Object(ue.a)({},e,{value:c});default:return e}},he="GET_MEETUP_EVENTS_SAGA",ve=function(e){return{type:"FETCH_MEETUP_EVENTS_SAGA",payload:e}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_MEETUP_SAGA":var a=t.payload.meetupData;return Object(ue.a)({},e,a);case"FETCH_MEETUP_EVENTS_SAGA":var n=t.payload.events;return Object(ue.a)({},e,{events:n});default:return e}},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_LOGIN_SAGA":console.log("payload login:",t.payload);var a=t.payload;return Object(ue.a)({},e,{user:a});default:return e}},fe=Object(E.c)({exampleData:le,exampleDataSaga:pe,eventbriteDataSaga:de,meetupDataSaga:Ee,authDataSaga:ge}),me=a(141),be=a(14),ye=a.n(be),we=a(16),Oe=a(38),je=a.n(Oe),Se="https://floating-plains-96602.herokuapp.com/api/",_e=function(){return je.a.get("https://www.eventbriteapi.com/v3/categories/",{headers:{Authorization:"Bearer OYNITYQ6UQJDJMWBLDNT"}}).then(function(e){return e}).catch(function(e){return console.log(e)})},Te=function(e){console.log("sdk");var t=e.replace("&"," ");return je.a.get("https://www.eventbriteapi.com/v3/events/search/?q=".concat(t,"&location.longitude=-99.1332&location.latitude=19.4326&sort_by=date&token=OYNITYQ6UQJDJMWBLDNT&locale=es_ES")).then(function(e){return e}).catch(function(e){return console.log(e)})},ke=function(e){return je.a.get("https://secure.meetup.com/oauth2/authorize?client_id=vpoumqgm43jcsrvf66q36nqnn7&response_type=code&redirect_uri=https://chatjs-9d06c.firebaseapp.com/events").then(function(e){return console.log(e),e}).catch(function(e){return console.log(e)})},xe=function(e,t){return console.log(e),je.a.post("".concat(Se,"/event"),{id:e.id,url:e.url,start:e.start.utc,name:e.name.text,description:e.description.text,user:{_id:t}}).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e)})},De=function(e){return je.a.get("".concat(Se,"/event/").concat(e)).then(function(e){return console.log(e),e}).catch(function(e){return console.log(e)})},Ae="https://floating-plains-96602.herokuapp.com/api",Ce=function(e){console.log("middleware data:",e);var t=e.payload;return console.log("middleware data 2:",t),je.a.post("".concat(Ae,"/login"),t,{withCredentials:!0}).then(function(e){return console.log("response middleware after api:",e),e}).catch(function(e){return e.response})},Ne=ye.a.mark(Je),Ge=ye.a.mark(Ye),Ie=ye.a.mark(qe),Be=ye.a.mark(Qe),Ve=ye.a.mark(ze),Fe=ye.a.mark(Ke),He=ye.a.mark($e),Me=ye.a.mark(Xe),Le=ye.a.mark(Ze),We=ye.a.mark(et),Pe=ye.a.mark(tt),Re=ye.a.mark(at),Ue=ye.a.mark(nt);function Je(e){var t,a;return ye.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(we.b)(Ce,e);case 3:return t=n.sent,a=t.data,n.next=7,Object(we.c)(M(a));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}},Ne,this,[[0,9]])}function Ye(){var e,t;return ye.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(we.b)(_e);case 3:return e=a.sent,t=e.data,a.next=7,Object(we.c)(y(t));case 7:a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}},Ge,this,[[0,9]])}function qe(e){var t,a;return ye.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(we.b)(Te,e.payload);case 3:return t=n.sent,a=t.data,n.next=7,Object(we.c)(O(a));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}},Ie,this,[[0,9]])}function Qe(e){var t,a;return ye.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(we.b)(ke,e.payload);case 3:return t=n.sent,a=t.data,n.next=7,Object(we.c)(ve(a));case 7:n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}},Be,this,[[0,9]])}function ze(e){var t,a,n,r,c;return ye.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,t=e.payload,a=t.element,n=t.userId,o.next=4,Object(we.b)(xe,a,n);case 4:return r=o.sent,c=r.data,o.next=8,Object(we.c)(_(c));case 8:return o.next=10,Object(we.c)(T(n));case 10:o.next=15;break;case 12:o.prev=12,o.t0=o.catch(0),console.log(o.t0);case 15:case"end":return o.stop()}},Ve,this,[[0,12]])}function Ke(e){var t,a,n;return ye.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,t=e.payload,r.next=4,Object(we.b)(De,t);case 4:return a=r.sent,n=a.data,r.next=8,Object(we.c)(k(n));case 8:r.next=13;break;case 10:r.prev=10,r.t0=r.catch(0),console.log(r.t0);case 13:case"end":return r.stop()}},Fe,this,[[0,10]])}function $e(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(F,Je);case 2:case"end":return e.stop()}},He,this)}function Xe(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(g,Ye);case 2:case"end":return e.stop()}},Me,this)}function Ze(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(f,qe);case 2:case"end":return e.stop()}},Le,this)}function et(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(he,Qe);case 2:case"end":return e.stop()}},We,this)}function tt(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(m,ze);case 2:case"end":return e.stop()}},Pe,this)}function at(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.d)(b,Ke);case 2:case"end":return e.stop()}},Re,this)}function nt(){return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(we.a)([$e(),Xe(),Ze(),et(),tt(),at()]);case 2:case"end":return e.stop()}},Ue,this)}var rt=nt,ct=a(140),ot=a.n(ct),st=Object(me.a)(),it=[st,ot.a].concat(Object(ie.a)([])),ut=E.d.apply(void 0,[E.a.apply(void 0,Object(ie.a)(it))].concat([])),lt=Object(E.e)(fe,{},ut);st.run(rt);var pt=lt;o.a.render(r.a.createElement(function(){return r.a.createElement(se.a,null,r.a.createElement(v.a,{store:pt},r.a.createElement(oe,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,2,1]]]);
//# sourceMappingURL=main.c0ad4c4f.chunk.js.map