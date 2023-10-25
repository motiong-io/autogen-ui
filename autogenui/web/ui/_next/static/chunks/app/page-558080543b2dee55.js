(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{89198:function(e,n,t){Promise.resolve().then(t.bind(t,52004))},52004:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ChatBoxView}});var s=t(57437),l=t(31706),a=t(62572),r=t(17933),o=t(51809),i=t(55856),c=t(85290),d=t(10887),u=t(33316),m=t(67896),h=t(33116),x=t(2265),g=t(98809),p=t(43241),v=t(78583),f=t(21037);function MarkdownView(e){var n;let{data:t}=e;return(0,s.jsx)("div",{className:"   w-full chatbox prose dark:prose-invert text-primary rounded p-2 ",children:(0,s.jsx)(p.U,{remarkPlugins:[g.Z],components:{code(e){let{node:n,inline:t,className:l,children:a,...r}=e,o=/language-(\w+)/.exec(l||""),i=o?o[1]:"text";return!t&&o?(0,s.jsx)(f.Z,{...r,style:v.Z,language:i,className:"rounded",PreTag:"div",wrapLongLines:!0,children:String(a).replace(/\n$/,"")}):(0,s.jsx)("code",{...r,className:l,children:a})}},children:null==(n=(n=t).replace(/\n/g,"  \n"))?void 0:n.replace(/```markdown\s+([\s\S]*?)\s+```/g,(e,n)=>n)})})}function AgentMessagesView(e){let{messages:n}=e,t=(n||[]).map((e,n)=>{let t=n%2==0?"bg-primary":"bg-secondary";return(0,s.jsx)("div",{children:(0,s.jsx)("div",{className:"text-xs border rounded p-2 mb-2 ".concat(t),children:(0,s.jsx)(MarkdownView,{data:e.content})})},"messagerow"+n)});return(0,s.jsxs)("div",{className:" overflow-x-hidden overflow-y-auto h-full scroll",children:[" ",(0,s.jsxs)("div",{className:"mb-2 text-xs",children:["The agent workflow generated ",t.length," message",t.length>1?"s":""," "]}),(0,s.jsx)("div",{children:t})]})}function ChatBoxView(e){let{initMessages:n,viewHeight:t="100%"}=e,g=x.useRef(null),p=x.useRef(null),[v,f]=x.useState(!1),[j,b]=x.useState(null),[N,w]=x.useState({status:!0,message:"All good"}),[k,y]=x.useState([]);x.useEffect(()=>{y(n)},[n]);let C=k.map((e,n)=>{var t,i,c,d;let h="user"===e.sender,x=!1;e.metadata&&(x=null!==e.metadata.code||(null===(i=e.metadata.images)||void 0===i?void 0:i.length)>0||(null===(c=e.metadata.files)||void 0===c?void 0:c.length)>0||(null===(d=e.metadata.scripts)||void 0===d?void 0:d.length)>0);let g=[];return h&&g.push({label:(0,s.jsx)("div",{onClick:()=>{console.log("retrying"),getCompletion(e.text)},children:(0,s.jsxs)("span",{className:"inline-block",children:[" ",(0,s.jsx)(l.Z,{role:"button",title:"Retry",className:"h-4 w-4 mr-1 inline-block"}),"Retry"]})}),key:"retrymessage"}),x&&g.push({label:(0,s.jsxs)("div",{onClick:()=>{},children:[(0,s.jsx)(a.Z,{title:"View Metadata",className:"h-4 w-4 mr-1 inline-block"}),"View Metadata"]}),key:"metadata"}),m.Z,(0,s.jsxs)("div",{className:"align-right ".concat(h?"text-right":"","  mb-2 "),children:[" ",(0,s.jsxs)("div",{className:"  ".concat(h?"":" w-full"," inline-flex gap-2"),children:[(0,s.jsxs)("div",{className:"",children:[" ",!h&&(0,s.jsxs)("span",{className:"inline-block  text-accent  bg-primary pb-2 ml-1",children:[(0,s.jsx)(r.Z,{className:"inline-block h-6 "})," "]})]}),(0,s.jsxs)("div",{className:"inline-block ".concat(h?"":" w-full "," p-2 rounded  "),children:[" ",h&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"  ".concat(h?"bg-accent text-white  ":"bg-light"," p-2 rounded"),children:[e.text,(0,s.jsx)("div",{role:"button",onClick:()=>{console.log("retrying"),getCompletion(e.text)}})]}),(0,s.jsxs)("span",{role:"button",onClick:()=>{console.log("retrying"),getCompletion(e.text)},className:"mt-1 text-sm inline-block",children:[" ",(0,s.jsx)(l.Z,{title:"Retry",className:"h-4 w-4 mr-1 inline-block"}),"Retry"]})]}),!h&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(MarkdownView,{data:e.text}),(0,s.jsx)(u.Z,{size:"small",className:"text-xs mt-2",items:[{key:"1",label:(0,s.jsx)("div",{children:"Agent Messages (".concat(null===(t=e.metadata)||void 0===t?void 0:t.length,")")}),children:(0,s.jsx)("div",{children:(0,s.jsx)(AgentMessagesView,{messages:e.metadata})})}],onChange:e=>{console.log("changed",e)}})]})]}),h&&(0,s.jsx)(o.Z,{className:"inline-block h-6 "})]})]},"message"+n)});x.useEffect(()=>{scrollChatBox()},[k]),x.useEffect(()=>{!1===v&&g.current&&g.current&&(null===N||N&&!1===N.status)&&(g.current.value="")},[v]),x.useEffect(()=>{},[]);let chatHistory=e=>{let n="";return e.forEach(e=>{n+="".concat(e.sender,": ").concat(e.text," \n")}),n},scrollChatBox=()=>{var e;null===(e=p.current)||void 0===e||e.scroll({top:p.current.scrollHeight,behavior:"smooth"})},getLastMessage=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;for(let t=e.length-1;t>=0;t--){let s=e[t].content;if(s.length>n)return s}return null},getCompletion=e=>{w(null);let n=Object.assign([],k),t=chatHistory(k);console.log("****history****",t),n.push({text:e,sender:"user"}),y(n);let s={prompt:e,history:t};console.log("payload",s);let l={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)};f(!0),fetch("".concat("/api","/generate"),l).then(e=>{f(!1),200===e.status?e.json().then(e=>{if(e&&e.status){console.log("******* response received ",e);let t=getLastMessage(e.data),s={text:t,sender:"bot",metadata:e.data};b(s),n.push(s),y(n=Object.assign([],n)),console.log(n)}else console.log("error",e),h.ZP.error(e.message)}):h.ZP.error("Connection error. Ensure server is up and running.")}).catch(e=>{f(!1),h.ZP.error("Connection error. Ensure server is up and running.")})};return(0,s.jsxs)("div",{style:{height:"calc(100% - 20px)"},className:"text-primary   overflow-auto relative scroll   rounded flex-1 ",children:[(0,s.jsxs)("div",{style:{height:"calc(100% - 100px)"},ref:p,className:"flex overflow-auto  flex-col rounded  scroll pr-2   ",children:[(0,s.jsx)("div",{className:"flex-1  boder mt-4"}),(0,s.jsxs)("div",{className:"ml-2 ",children:[" ",C]}),(0,s.jsx)("div",{className:"ml-2 h-6   mb-4 mt-2   ",children:v&&(0,s.jsxs)("div",{className:"inline-flex gap-2",children:[(0,s.jsx)("span",{className:"  rounded-full bg-accent h-2 w-2  inline-block"}),(0,s.jsx)("span",{className:"animate-bounce rounded-full bg-accent h-3 w-3  inline-block"}),(0,s.jsx)("span",{className:" rounded-full bg-accent h-2 w-2  inline-block"})]})})]}),(0,s.jsxs)("div",{className:"mt-2 p-2   w-full",children:[(0,s.jsxs)("div",{className:"mt-2   rounded p-2 shadow-lg flex mb-1    ".concat(v?" opacity-50 pointer-events-none":""),children:[(0,s.jsx)("form",{autoComplete:"on",className:"flex-1 ",onSubmit:e=>{e.preventDefault()},children:(0,s.jsx)("input",{id:"queryInput",name:"queryInput",autoComplete:"on",onKeyDown:e=>{if("Enter"===e.key&&g.current&&!v){var n;getCompletion(null===(n=g.current)||void 0===n?void 0:n.value)}},ref:g,className:"w-full text-gray-600 rounded rounded-r-none border border-accent bg-white p-2   ropunded-sm"})}),(0,s.jsxs)("div",{role:"button",onClick:()=>{if(g.current&&!v){var e;getCompletion(null===(e=g.current)||void 0===e?void 0:e.value)}},className:"bg-accent   hover:brightness-75 transition duration-300 rounded pt-2 rounded-l-none px-5 ",children:[" ",!v&&(0,s.jsxs)("div",{className:"inline-block     ",children:[(0,s.jsx)(i.Z,{className:"h-6 text-white   inline-block"})," "]}),v&&(0,s.jsx)("div",{className:"inline-block   ",children:(0,s.jsx)(c.Z,{className:"relative -pb-2 text-white animate-spin  inline-flex rounded-full h-6 w-6"})})]})]})," ",N&&!N.status&&(0,s.jsxs)("div",{className:"p-2 border rounded mt-4 text-orange-500 text-sm",children:[" ",(0,s.jsx)(d.Z,{className:"h-5 text-orange-500 inline-block mr-2"})," ",N.message]})]})]})}}},function(e){e.O(0,[900,689,971,472,744],function(){return e(e.s=89198)}),_N_E=e.O()}]);