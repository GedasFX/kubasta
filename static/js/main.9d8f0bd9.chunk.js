(this.webpackJsonpkubasta=this.webpackJsonpkubasta||[]).push([[0],{77:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(0),c=n.n(o),s=n(10),a=n.n(s),r=n(128),d=n(129),u=n(130),p=(n(77),n(62)),l=Object(p.a)({palette:{type:"dark"}}),h=n(60),b=n(11),f=n(121),j=n(114),g=n(12);function k(e){var t=Object(g.b)();return Object(i.jsx)("button",{style:{top:e.position.top,left:e.position.left,width:e.size.width,height:e.size.height},onClick:function(){e.onClick&&e.onClick(t)}})}function v(e){return Object(i.jsx)("input",{style:{top:e.position.top,left:e.position.left,width:e.size.width,height:e.size.height},type:e.type})}var w=Object(j.a)((function(){return{imgContainer:{position:"relative","& > img":{width:"100%"},"& > *:not(img)":{position:"absolute",background:"transparent",border:"none"}}}})),x={x:0,y:0};function O(e){var t,n,o=w();return Object(i.jsxs)("div",{className:o.imgContainer,onClick:function(e){var t=e.target.getBoundingClientRect(),n={x:e.clientX-t.left,y:e.clientY-t.top},i={x:n.x/t.width,y:n.y/t.height},o={x:x.x-i.x,y:x.y-i.y};x=i,console.info("Clicked on:",n,i,o),console.info(JSON.stringify({position:{top:"".concat((100*i.y).toFixed(2),"%"),left:"".concat((100*i.x).toFixed(2),"%")},size:{height:"".concat((100*o.y).toFixed(2),"%"),width:"".concat((100*o.x).toFixed(2),"%")}}))},children:[e.component,null===(t=e.buttons)||void 0===t?void 0:t.map((function(e,t){return Object(i.jsx)(k,{position:e.position,size:e.size,onClick:e.onClick},t)})),null===(n=e.textFields)||void 0===n?void 0:n.map((function(e,t){return Object(i.jsx)(v,{position:e.position,size:e.size,type:e.type},t)}))]})}var m=n(46),I=Object(m.b)({name:"game",initialState:{},reducers:{setActiveTaskId:function(e,t){var n=t.payload;e.activeTaskId=n.id},setActiveScreenId:function(e,t){var n=t.payload;e.activeScreenId=n.id},toggleFeedbackDialog:function(e){e.showFeedbackDialog=!e.showFeedbackDialog},setFeedbackDialogText:function(e,t){var n=t.payload;e.feedbackText=n.text},updatePoints:function(e,t){var n=t.payload;console.log("state points: "+e.points),e.points=e.points+n.points},initializePoints:function(e){e.points=150},initializeFeedbackDialog:function(e){e.showFeedbackDialog=!1,e.feedbackText=""},setNextTaskAndScreen:function(e,t){var n=t.payload;e.nextTaskId=n.nextTaskId,e.nextScreenId=n.nextScreenId}}}),y=I.reducer,S=I.actions,T=function(e){return t={src:e},Object(i.jsx)("img",{src:t.src,alt:"Desktop"});var t};var C=n.p+"static/media/availablenetworks.1e5b6f9a.png",z=n.p+"static/media/connectedopennetwork.3add7549.png",A=n.p+"static/media/connectedsecurenetwork.16346748.png",F=n.p+"static/media/discoverableonnetwork.f641c86c.png",D=n.p+"static/media/desktopnetworknotconnected.1d992857.png",N=n.p+"static/media/pressonopennetwork.218e43b6.png",E=n.p+"static/media/pressonsecurenetwork.166db23d.png",P=n.p+"static/media/typeinpassword.c41db31f.png",W={title:"Connect to Network",setting:"You just ordered your first coffee of the day at Starbucks. You were going to meet up there with a friend later but want to get some work done first. The cashier hands you the receipt \u2013 it has the WIFI password on it: \u201cstarplatinum\u201d. Perfect. Time to get to work.",instructions:"To go online you need to connect to the network. This location has both an open and a password-protected network. Which one do you choose?",description:"Connect safely to the internet",screens:{desktopnetworknotconnected:{component:T(D),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(e){e(S.setActiveScreenId({id:"availablenetworks"}))}}]},availablenetworks:{component:T(C),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(e){e(S.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{left:"77%",top:"28%"},size:{width:"22%",height:"8%"},onClick:function(e){e(S.setActiveScreenId({id:"pressonopennetwork"}))}},{position:{left:"77%",top:"36%"},size:{width:"22%",height:"8%"},onClick:function(e){e(S.setActiveScreenId({id:"pressonsecurenetwork"}))}}]},pressonsecurenetwork:{component:T(E),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(e){e(S.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{top:"48.5%",left:"89.5%"},size:{width:"9.5%",height:"4%"},onClick:function(e){e(S.setActiveScreenId({id:"typeinpassword"}))}},{position:{top:"28.1%",left:"76.4%"},size:{width:"24%",height:"8%"},onClick:function(e){e(S.setActiveScreenId({id:"pressonopennetwork"}))}}]},pressonopennetwork:{component:T(N),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(e){e(S.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{left:"76.6%",top:"50.9%"},size:{width:"24%",height:"8%"},onClick:function(e){e(S.setActiveScreenId({id:"pressonsecurenetwork"}))}},{position:{left:"89.5%",top:"45.45%"},size:{width:"9.5%",height:"3.5%"},onClick:function(e){e(S.updatePoints({points:M})),e(S.setActiveScreenId({id:"connectedopennetwork"})),e(S.setFeedbackDialogText({text:"Oh no! Open networks should be avoided whenever possible. Accessing sensitive information on such networks can result in that data getting compromised, e.g. login data to your banking. If given the choice, it is usually better to connect to a secured network."})),e(S.toggleFeedbackDialog()),console.log("pressed on open button")}}]},typeinpassword:{component:T(P),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(e){e(S.setActiveScreenId({id:"desktopnetworknotconnected"}))}},{position:{top:"28.1%",left:"76.4%"},size:{width:"24%",height:"8%"},onClick:function(e){e(S.setActiveScreenId({id:"pressonopennetwork"}))}},{position:{top:"52.1%",left:"79.7%"},size:{width:"9.7%",height:"3.8%"},onClick:function(e){e(S.setActiveScreenId({id:"discoverableonnetwork"}))}}],textFields:[{position:{left:"79.8%",top:"47.3%"},size:{height:"03.2%",width:"18.9%"},type:"password"}]},connectedopennetwork:{component:T(z),buttons:[{position:{left:"76.6%",top:"46.17%"},size:{width:"24%",height:"8%"},onClick:function(e){e(S.setActiveScreenId({id:"pressonsecurenetwork"}))}}]},connectedsecurenetwork:{component:T(A),buttons:[]},discoverableonnetwork:{component:T(F),buttons:[{position:{top:"59%",left:"79.7%"},size:{width:"9.7%",height:"3.8%"},onClick:function(){window.alert("fail")}},{position:{top:"59%",left:"89.5%"},size:{width:"9.7%",height:"3.8%"},onClick:function(e){e(S.setActiveScreenId({id:"connectedsecurenetwork"})),e(S.updatePoints({points:10})),e(S.setNextTaskAndScreen({nextScreenId:"antiviruspopup",nextTaskId:2})),e(S.setFeedbackDialogText({text:"Good! It\u2019s always better to leave attackers the least possible amount of attack surface, which you just did."})),e(S.toggleFeedbackDialog())}}]}}},B=n.p+"static/media/antiviruspopup.98332630.png",Y=n.p+"static/media/antivirussettingsoff.0443898b.png",J=n.p+"static/media/antivirussettingson.52d29d00.png",L={1:W,2:{title:"Antivirus",description:"Deal appropriately with default antivirus",screens:{antiviruspopup:{component:T(B),buttons:[{position:{left:"75.3%",top:"78.23%"},size:{width:"23.37%",height:"15.68%"},onClick:function(e){e(S.setActiveScreenId({id:"antivirussettingsoff"}))}}]},antivirussettingsoff:{component:T(Y),buttons:[{position:{left:"38.88%",top:"50.53%"},size:{width:"2.75%",height:"2.35%"},onClick:function(e){e(S.updatePoints({points:10})),e(S.setActiveScreenId({id:"antivirussettingson"})),e(S.setNextTaskAndScreen({nextScreenId:"changepassword",nextTaskId:3})),e(S.setFeedbackDialogText({text:"Alright! Now you are finally protected from known threats again. Never turn off your antivirus program, even if a software asks for it!"})),e(S.toggleFeedbackDialog())}},{position:{left:"79.32%",top:"1.22%"},size:{width:"2.65%",height:"3.35%"},onClick:function(e){e(S.updatePoints({points:-10})),e(S.setNextTaskAndScreen({nextScreenId:"changepassword",nextTaskId:3})),e(S.setFeedbackDialogText({text:"What are you doing?! You were supposed to turn on the antivirus software! Even just the default Windows virus & threat protection will keep you safe from known malware and attacks. "})),e(S.toggleFeedbackDialog())}},{position:{left:"38.88%",top:"75.5%"},size:{width:"2.65%",height:"2.35%"},onClick:function(e){e(S.updatePoints({points:-10})),e(S.setNextTaskAndScreen({nextScreenId:"changepassword",nextTaskId:3})),e(S.setFeedbackDialogText({text:"What are you doing?! You were supposed to turn on the antivirus software, not turn it off even further! Even just the default Windows virus & threat protection will keep you safe from known malware and attacks."})),e(S.toggleFeedbackDialog())}}]},antivirussettingson:{component:T(J),buttons:[]}}},3:{title:"Choose a safe password.",setting:"It has been 6 months since you have changed your password.",instructions:"Choose a safe password.",description:"Choose a safe password.",screens:{changepassword:{component:T(n.p+"static/media/changepassword.02533d2c.png"),buttons:[{position:{left:"92%",top:"94.5%"},size:{width:"2%",height:"4%"},onClick:function(e){}}]}}}},M=-30,R=n(132),G=n(115),q=n(118),H=n(119),X=n(85),K=function(e){return Object(i.jsx)(G.a,{disableTypography:!0,className:"MuiTypography-root MuiTypography-h6",children:Object(i.jsx)(X.a,{variant:"h6",children:e.text})})};function Q(){var e=Object(g.c)((function(e){return e.game})),t=Object(g.b)(),n=Object(o.useState)(!1),c=Object(b.a)(n,2),s=c[0],a=c[1],r=Object(o.useState)(""),d=Object(b.a)(r,2),u=d[0],p=d[1];return Object(o.useEffect)((function(){a(!!e.showFeedbackDialog&&e.showFeedbackDialog),p(e.feedbackText?e.feedbackText:"")}),[e.showFeedbackDialog,e.feedbackText]),Object(i.jsx)("div",{children:Object(i.jsxs)(R.a,{open:s,children:[Object(i.jsx)(K,{text:u}),Object(i.jsx)(q.a,{children:Object(i.jsx)(H.a,{autoFocus:!0,onClick:function(){t(S.toggleFeedbackDialog()),console.log(e.nextScreenId),console.log(e.nextTaskId),t(S.setActiveTaskId({id:e.nextTaskId})),t(S.setActiveScreenId({id:e.nextScreenId}))},color:"primary",children:"Go to next task"})})]})})}var U=n(5),V=n(120),Z=Object(U.a)((function(e){return{root:{height:10,borderRadius:5},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(V.a);function $(){var e=c.a.useState(50),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object(g.c)((function(e){return e.game}));return Object(o.useEffect)((function(){var e=a.points/300*100;s(e)}),[a.points]),Object(i.jsx)("div",{children:Object(i.jsx)(Z,{variant:"determinate",value:n})})}var _=Object(j.a)((function(e){return{imgContainer:{margin:e.spacing(4)},btnContainer:{margin:e.spacing(0)}}}));function ee(){var e=_(),t=Object(g.b)(),n=Object(g.c)((function(e){return e.game})),c=Object(o.useState)(void 0),s=Object(b.a)(c,2),a=s[0],r=s[1];return Object(o.useEffect)((function(){t(S.initializeFeedbackDialog()),t(S.setActiveTaskId({id:2})),t(S.setActiveScreenId({id:"antiviruspopup"})),t(S.initializePoints())}),[t]),Object(o.useEffect)((function(){r(n.activeTaskId&&n.activeScreenId?L[n.activeTaskId].screens[n.activeScreenId]:void 0)}),[n.activeTaskId,n.activeScreenId]),a?Object(i.jsxs)(f.a,{container:!0,spacing:1,children:[Object(i.jsx)(f.a,{item:!0,xs:12,children:Object(i.jsx)($,{})}),Object(i.jsxs)(f.a,{item:!0,xs:12,className:e.imgContainer,children:[Object(i.jsx)(O,Object(h.a)({},a)),Object(i.jsx)(Q,{})]})]}):null}var te=n(40),ne=n(117),ie=n(127),oe=n(124),ce=n(125),se=n(126),ae=n(131),re=n(133),de=n(123),ue=n(138),pe=n(122),le=n(134),he=n(135);function be(){var e=c.a.useState(0),t=Object(b.a)(e,2),n=t[0],s=t[1],a=Object.keys(L).sort().map((function(e){return L[e].title})),r=Object(g.c)((function(e){return e.game}));return Object(o.useEffect)((function(){var e=r.activeTaskId?r.activeTaskId:-1;e=parseInt(e.toString()),console.log(e),-1!==e&&s(e-1)}),[r.activeTaskId]),Object(i.jsx)("div",{children:Object(i.jsx)(ue.a,{activeStep:n,orientation:"vertical",children:a.map((function(e,t){return Object(i.jsxs)(pe.a,{children:[Object(i.jsx)(le.a,{children:e}),Object(i.jsx)(he.a,{children:Object(i.jsx)(X.a,{children:(n=t,L[n+1]?L[n+1].description:"")})})]},e);var n}))})})}function fe(e){return Object(i.jsx)("div",{role:"tabpanel",hidden:e.activeTabId!==e.tabId,children:e.activeTabId===e.tabId&&Object(i.jsx)(ae.a,{p:3,children:e.children})})}var je=Object(j.a)((function(e){return{paper:{width:"100%"}}}));function ge(e){var t=je(),n=c.a.useState(0),o=Object(b.a)(n,2),s=o[0],a=o[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(ne.a,{square:!0,className:t.paper,elevation:3,children:Object(i.jsxs)(re.a,{centered:!0,value:s,onChange:function(e,t){a(t)},children:[Object(i.jsx)(de.a,{icon:Object(i.jsx)(oe.a,{})}),Object(i.jsx)(de.a,{icon:Object(i.jsx)(ce.a,{})}),Object(i.jsx)(de.a,{icon:Object(i.jsx)(se.a,{})})]})}),Object(i.jsxs)(fe,{activeTabId:s,tabId:0,children:[Object(i.jsx)(X.a,{gutterBottom:!0,variant:"h4",children:e.info.title}),Object(i.jsx)(X.a,{gutterBottom:!0,variant:"body1",children:e.info.setting}),Object(i.jsx)(X.a,{gutterBottom:!0,variant:"body2",children:e.info.instructions})]}),Object(i.jsx)(fe,{activeTabId:s,tabId:1,children:Object(i.jsx)(be,{})}),Object(i.jsx)(fe,{activeTabId:s,tabId:2,children:"Item Three"})]})}var ke=function(){return{width:window.innerWidth,height:window.innerHeight}};var ve=Object(j.a)((function(e){return{sidebarContainer:{position:"absolute",top:"1rem",height:"calc(100% - 2rem)",zIndex:100,display:"flex"},paper:Object(te.a)({width:530,transition:"all 0.3s",padding:e.spacing(2)},e.breakpoints.down("xs"),{width:"100%"}),drawerBtn:{transition:"all 0.3s"}}}));function we(){var e,t=Object(o.useState)(!1),n=Object(b.a)(t,2),c=n[0],s=n[1],a=Object(o.useState)(0),r=Object(b.a)(a,2),d=r[0],u=r[1],p=ve(),l=Object(o.useState)(),h=Object(b.a)(l,2),f=h[0],j=h[1],k=function(){var e=Object(o.useState)(ke()),t=Object(b.a)(e,2),n=t[0],i=t[1];return Object(o.useEffect)((function(){var e=function(){i(ke())};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}().width,v=Object(g.c)((function(e){return e.game.activeTaskId}));return Object(o.useEffect)((function(){j(v?L[v]:void 0)}),[v]),Object(o.useEffect)((function(){u(k>600?530:k)}),[k]),Object(i.jsxs)("div",{className:p.sidebarContainer,children:[Object(i.jsx)(ne.a,{className:p.paper,style:{marginLeft:c?0:-d},children:Object(i.jsx)(ge,{info:{title:null!==(e=null===f||void 0===f?void 0:f.title)&&void 0!==e?e:"",instructions:null===f||void 0===f?void 0:f.instructions,setting:null===f||void 0===f?void 0:f.setting}})}),Object(i.jsx)(H.a,{onClick:function(){return s(!c)},children:Object(i.jsx)(ie.a,{className:p.drawerBtn,style:{transform:c?"rotate(180deg)":""}})})]})}var xe=function(){return Object(i.jsxs)(r.a,{theme:l,children:[Object(i.jsx)(d.a,{}),Object(i.jsxs)("div",{children:[Object(i.jsx)(we,{}),Object(i.jsx)(u.a,{maxWidth:"lg",children:Object(i.jsx)(ee,{})})]})]})},Oe=n(15),me=Object(Oe.c)({game:y}),Ie=Object(m.a)({reducer:me});a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g.a,{store:Ie,children:Object(i.jsx)(xe,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.9d8f0bd9.chunk.js.map