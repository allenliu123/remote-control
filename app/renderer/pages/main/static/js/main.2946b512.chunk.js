(this.webpackJsonpmain=this.webpackJsonpmain||[]).push([[0],{12:function(e,n,t){},14:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(7),o=t.n(a),i=(t(12),t(0)),s=t.n(i),u=t(3),d=t(5),p=(t(14),t(4)),f=t(4),l=f.desktopCapturer,h=f.ipcRenderer;function w(){return v.apply(this,arguments)}function v(){return(v=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getSources({types:["screen"]});case 2:return n=e.sent,e.abrupt("return",new Promise((function(e,t){navigator.webkitGetUserMedia({audio:!1,video:{mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:n[0].id,maxWidth:window.screen.width,maxHeight:window.screen.height}}},(function(n){e(n)}),(function(e){console.log(e)}))})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=new window.RTCPeerConnection({});b.onicecandidate=function(e){console.log("candidate",JSON.stringify(e.candidate)),e.candidate&&(console.log("send",e.candidate),h.send("forward","puppet-candidate",JSON.stringify(e.candidate)))},h.on("candidate",(function(e,n){console.log("on candidate",n),j(JSON.parse(n))})),window.addIceCandidate=j;var g=[];function j(e){return x.apply(this,arguments)}function x(){return(x=Object(u.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b.addIceCandidate(new RTCIceCandidate(n)),n&&g.push(n),!b.remoteDescription||!b.remoteDescription.type){e.next=11;break}t=0;case 4:if(!(t<g.length)){e.next=10;break}return e.next=7,b.addIceCandidate(new RTCIceCandidate(n));case 7:t++,e.next=4;break;case 10:g=[];case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return m.apply(this,arguments)}function m(){return(m=Object(u.a)(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:return t=e.sent,b.addStream(t),e.next=6,b.setRemoteDescription(n);case 6:return e.t0=b,e.next=9,b.createAnswer();case 9:return e.t1=e.sent,e.next=12,e.t0.setLocalDescription.call(e.t0,e.t1);case 12:return console.log("answer",JSON.stringify(b.localDescription)),e.abrupt("return",b.localDescription);case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}h.on("offer",function(){var e=Object(u.a)(s.a.mark((function e(n,t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("on offer, createAnswer"),e.next=3,O(t);case 3:r=e.sent,h.send("forward","answer",{type:r.type,sdp:r.sdp});case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}());var y=t(1);var k=function(){var e=Object(r.useState)(""),n=Object(d.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),o=Object(d.a)(a,2),i=o[0],f=o[1],l=Object(r.useState)(""),h=Object(d.a)(l,2),w=h[0],v=h[1],b=function(){var e=Object(u.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ipcRenderer.invoke("login");case 2:n=e.sent,f(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){return b(),p.ipcRenderer.on("control-state-change",g),function(){p.ipcRenderer.removeListener("control-state-change",g)}}),[]);var g=function(e,n,t){console.log("name",n);var r="";1===t?r="\u6b63\u5728\u8fdc\u7a0b\u63a7\u5236".concat(n):2===t&&(r="\u6b63\u5728\u88ab".concat(n,"\u8fdc\u7a0b\u63a7\u5236")),v(r)};return Object(y.jsx)("div",{className:"App",children:""===w?Object(y.jsxs)("div",{children:[Object(y.jsxs)("div",{children:["\u4f60\u7684\u63a7\u5236\u7801",i]}),Object(y.jsx)("input",{type:"text",value:t,onChange:function(e){return c(e.target.value)}}),Object(y.jsx)("button",{onClick:function(){return function(e){console.log(111),p.ipcRenderer.send("control",e),console.log(e)}(t)},children:"\u786e\u8ba4"})]}):Object(y.jsx)("div",{children:w})})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,o=n.getTTFB;t(e),r(e),c(e),a(e),o(e)}))};o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(k,{})}),document.getElementById("root")),C()},4:function(e,n){e.exports=require("electron")}},[[16,1,2]]]);
//# sourceMappingURL=main.2946b512.chunk.js.map