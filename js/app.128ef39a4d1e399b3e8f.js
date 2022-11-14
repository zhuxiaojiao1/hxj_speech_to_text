/*! For license information please see app.128ef39a4d1e399b3e8f.js.LICENSE.txt */
(self.webpackChunkspeech_to_text=self.webpackChunkspeech_to_text||[]).push([[0],{854:(n,t,e)=>{"use strict";var o=e(208),i=e(1043),c=e(858),r=e(2);const a="btnWrap",s="btn";var u=e(0);const d=function(n){var t=n.handleChange,e=n.status,o=n.loading;return(0,u.jsx)("div",{className:a,children:(0,u.jsx)("button",{onClick:function(){t(!e)},className:s,disabled:o,children:function(){if(o)return"设备加载中……";var n="语音转文";return e?"结束".concat(n):"开始".concat(n)}()})})};var l=e(1048),v=e(9);const h=function(){var n=function(){var n=(0,r.useState)([]),t=(0,i.Z)(n,2),e=t[0],o=t[1],c=(0,r.useState)(!1),a=(0,i.Z)(c,2),s=a[0],u=a[1],d=(0,r.useState)(!1),h=(0,i.Z)(d,2),f=h[0],g=h[1],p=(0,r.useRef)(s);return(0,r.useInsertionEffect)((function(){p.current=s}),[s]),(0,r.useEffect)((function(){var n,t=window.SpeechRecognition||window.webkitSpeechRecognition;return s&&function e(){t?((n=new t).lang="zh",n.start(),n.onaudiostart=function(n){v.log("onaudiostart",n),g(!1)},n.onaudioend=function(t){v.log("onaudioend",t),n.stop(),g(!1),p.current&&e()},n.onspeechstart=function(n){v.log("onspeechstart",n)},n.onspeechend=function(n){v.log("onspeechend",n)},n.onnomatch=function(n){v.log("onnomatch",n),o((function(n){var t=(0,l.Z)(n);return t.push("语音识别失败"),(0,l.Z)(t)}))},n.onresult=function(n){v.log("onresult",n),o((function(t){var e,o,i,c,r=(0,l.Z)(t);return r.push(null!==(e=null===(o=n.results)||void 0===o||null===(i=o[0])||void 0===i||null===(c=i[0])||void 0===c?void 0:c.transcript)&&void 0!==e?e:""),(0,l.Z)(r)}))},n.onerror=function(n){v.log("onerror",n)},n.onend=function(n){v.log("onend",n),g(!1)}):alert("当前浏览器不支持")}(),function(){var t;null===(t=n)||void 0===t||t.stop()}}),[s]),[e,s,u,f,g]}(),t=(0,i.Z)(n,5),e=t[0],o=t[1],c=t[2],a=t[3],s=t[4];return(0,u.jsxs)("div",{children:[(0,u.jsx)(d,{handleChange:function(n){c(n),n&&s(!0)},status:o,loading:a}),(0,u.jsx)("div",{children:e.map((function(n,t){return(0,u.jsx)("div",{style:{marginTop:"15px",textAlign:"center"},children:n},t)}))})]})};var f=e(9),g=function(){var n=new window.AudioContext,t=window.navigator.mediaDevices;t.getUserMedia||f.log("没有设备权限"),t.getUserMedia({audio:!0,video:!1}).then((function(t){!function(n,t){var e=new window.AudioWorkletNode(t,"audioWorker");e.connect(t.destination),e.port.onmessage=function(n){f.log(n)}}(0,n)})).catch((function(n){f.log("设备打开失败")}))};var p=[{content:"SpeechRecognition —— 原生",children:h},{content:"讯飞 —— 第三方",children:function(){return(0,u.jsxs)("div",{children:["我是讯飞的api",(0,u.jsx)(d,{handleChange:function(n){g()},status:!1,loading:!1}),(0,u.jsx)("div",{})]})}},{content:"火山引擎 —— 第三方",children:h},{content:"百度 —— 第三方",children:h}];const x={navList:"navList",navItem:"navItem",navActive:"navActive"};const m=function(){var n=(0,r.useState)(0),t=(0,i.Z)(n,2),e=t[0],o=t[1],a=p[e].children;return(0,u.jsxs)(c.lg,{children:[(0,u.jsx)("div",{className:x.navList,children:p.map((function(n,t){return(0,u.jsx)("div",{className:"".concat(x.navItem).concat(e===t?" ".concat(x.navActive):""),onClick:function(){o(t)},children:n.content},t)}))}),(0,u.jsx)("div",{className:x.main,children:(0,u.jsx)(a,{})})]})};var w;(0,o.s)(null!==(w=document.getElementById("root"))&&void 0!==w?w:document.body).render((0,u.jsx)(m,{}))},874:()=>{},869:()=>{},868:()=>{},871:()=>{},870:()=>{}},n=>{var t=t=>n(n.s=t);n.O(0,[2],(()=>(t(1041),t(854))));n.O()}]);