"use strict";(self.webpackChunkWiki=self.webpackChunkWiki||[]).push([[3785],{94568:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var r=s(86070),i=s(31503);const t={title:"\u8de8\u670d\u7aef",slug:"/cross-server",sidebar_position:2},c="\u8de8\u670d\u7aef",o={id:"advance/cross-server/cross-server",title:"\u8de8\u670d\u7aef",description:"\u7b80\u5355\u7684\u6765\u8bf4\u5c31\u662f\u5c06\u591a\u4e2a\u670d\u52a1\u5668\u8fde\u6210\u4e00\u4e2a\u6574\u4f53(\u6bd4\u5982\u4f60\u7ecf\u5e38\u770b\u5230\u7684\u67d0\u4e9b\u751f\u5b58\u4e00\u533a\uff0c\u751f\u5b58\u4e8c\u533a)\uff0c\u73a9\u5bb6\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u5230\u54ea\u4e2a\u670d\u52a1\u5668\uff0c\u800c\u4e0d\u7528\u9000\u51fa\u91cd\u8fde\uff0c",source:"@site/docs-java/advance/cross-server/cross-server.md",sourceDirName:"advance/cross-server",slug:"/cross-server",permalink:"/Java/cross-server",draft:!1,unlisted:!1,editUrl:"https://github.com/postyizhan/NitWikit/tree/main/docs-java/advance/cross-server/cross-server.md",tags:[],version:"current",lastUpdatedBy:"SB-Reborn",lastUpdatedAt:1727731002e3,sidebarPosition:2,frontMatter:{title:"\u8de8\u670d\u7aef",slug:"/cross-server",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Linux \u5f00\u670d",permalink:"/Java/advance/Linux"},next:{title:"\u6838\u5fc3\u9009\u62e9",permalink:"/Java/advance/cross-server/server-core-choose"}},d={},l=[{value:"\u5b89\u88c5\u6570\u636e\u5e93",id:"\u5b89\u88c5\u6570\u636e\u5e93",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u8de8\u670d\u7aef",children:"\u8de8\u670d\u7aef"})}),"\n",(0,r.jsx)(n.p,{children:"\u7b80\u5355\u7684\u6765\u8bf4\u5c31\u662f\u5c06\u591a\u4e2a\u670d\u52a1\u5668\u8fde\u6210\u4e00\u4e2a\u6574\u4f53(\u6bd4\u5982\u4f60\u7ecf\u5e38\u770b\u5230\u7684\u67d0\u4e9b\u751f\u5b58\u4e00\u533a\uff0c\u751f\u5b58\u4e8c\u533a)\uff0c\u73a9\u5bb6\u53ef\u4ee5\u81ea\u7531\u9009\u62e9\u5230\u54ea\u4e2a\u670d\u52a1\u5668\uff0c\u800c\u4e0d\u7528\u9000\u51fa\u91cd\u8fde\uff0c"}),"\n",(0,r.jsx)(n.p,{children:"\u4e0d\u540c\u670d\u52a1\u5668\u4e4b\u95f4\u53ef\u4ee5\u901a\u8fc7\u8de8\u670d\u540c\u6b65(\u6bd4\u5982 HuskSync )\u548c\u6570\u636e\u5e93\u540c\u6b65\u6570\u636e\uff0c\u5e73\u65f6\u5e38\u542c\u5230\u7684\u7fa4\u7ec4\u670d\u4e5f\u662f\u4e00\u4e2a\u610f\u601d. \u8de8\u670d\u901a\u5e38\u7684\u5b9e\u73b0\u65b9\u6cd5\u662f:"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u53cd\u5411\u4ee3\u7406\u7aef(\u5982 Velocity / BungeeCord )\u548c\u591a\u4e2a\u5b50\u670d\u52a1\u5668(\u5982 Paper / Purpur / Leaf \u7b49). \u73a9\u5bb6\u53ea\u9700\u8981\u8fde\u63a5\u5230\u53cd\u5411\u4ee3\u7406\u7aef\u5373\u53ef\u8ba9\u53cd\u5411\u4ee3\u7406\u7aef\u548c\u5b50\u670d\u52a1\u5668\u8054\u7cfb\uff0c\u6700\u540e\u628a\u73a9\u5bb6\u9001\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5668."}),"\n",(0,r.jsx)(n.h1,{id:"\u539f\u7406\u8bb2\u89e3",children:"\u539f\u7406\u8bb2\u89e3"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u8bbe\u4f60\u73b0\u5728\u6709\u4e09\u4e2a\u670d\u52a1\u5668\uff0c\u5206\u522b\u4e3a\u767b\u5f55\u670d\uff0c\u751f\u5b58\u670d\u548c\u8d44\u6e90\u670d\uff0c\u4e09\u4e2a\u670d\u52a1\u5668\u90fd\u80fd\u6b63\u5e38\u8fdb\u5165\u548c\u6e38\u73a9\uff0c"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u4f60\u60f3\u5efa\u8bbe\u4e00\u4e2a\u7fa4\u7ec4\u670d\u628a\u8fd9\u4e09\u4e2a\u670d\u52a1\u5668\u8fde\u63a5\u8d77\u6765\uff0c\u90a3\u4e48\uff0c\u4f60\u7684\u670d\u52a1\u5668\u7ed3\u6784\u5c31\u4f1a\u662f\u8fd9\u6837"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(86823).A+"",width:"950",height:"585"})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["BungeeCord / Velocity \u7aef(\u6216\u4ed6\u4eec\u7684 Fork )\u5728\u8fd9\u91cc\u6211\u4eec\u79f0\u4e3a",(0,r.jsx)(n.code,{children:"\u8de8\u670d\u7aef"}),"(\u6216\u8005\u79f0\u4e3a\u4e0a\u6e38\u670d\u52a1\u5668)"]}),(0,r.jsxs)(n.p,{children:["\u8fd9\u4e09\u4e2a\u670d\u52a1\u5668\u90fd\u79f0\u4e3a ",(0,r.jsx)(n.code,{children:"\u5b50\u670d"})," \u56fe\u4e2d\u4e3a\u4e09\u4e2a\u5b50\u670d\uff0c\u5b50\u670d\u6ca1\u6709\u5148\u540e\u4e4b\u5206(\u6216\u8005\u79f0\u4e3a\u4e0b\u6e38\u670d\u52a1\u5668)"]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u5982\u679c\u4f60\u7684\u7fa4\u7ec4\u670d\u642d\u5efa\u5b8c\u6210\uff0c\u90a3\u4e48\u6b63\u5e38\u6d41\u7a0b\u662f:"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"\u73a9\u5bb6\u901a\u8fc7\u5ba2\u6237\u7aef\u8fde\u63a5\u5230\u8de8\u670d\u7aef\uff0c\u63a5\u7740\u7531\u8de8\u670d\u7aef\u9001\u81f3\u5404\u4e2a\u5b50\u670d\uff0c\u73a9\u5bb6\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e9b\u65b9\u5f0f\u5207\u6362\u81ea\u5df1\u6240\u5728\u7684\u5b50\u670d\uff0c\u611f\u89c9\u4e0a\u5c31\u50cf\u662f\u5207\u6362\u7ef4\u5ea6\uff0c\u73a9\u5bb6\u751a\u81f3\u610f\u8bc6\u4e0d\u5230\u81ea\u5df1\u6362\u8fc7\u670d"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4ee3\u7406\u7aef",children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u4ee3\u7406\u7aef?"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Minecraft \u662f\u4e2a\u5355\u6838\u5fc3\u6e38\u620f\uff0c\u73a9\u5bb6\u6570\u91cf\u5728\u8d85\u8fc7 50-100 \u540e\u51e0\u4e4e\u4efb\u4f55\u6838\u5fc3\u90fd\u65e0\u6cd5\u4fdd\u8bc1\u5b8c\u5168\u6d41\u7545( Folia \u9664\u5916)\uff0c\u800c\u4f7f\u7528\u591a\u4e2a\u670d\u52a1\u5668\u5219\u53ef\u4ee5\u5145\u5206\u5229\u7528\u591a\u6838\u5fc3\u4f18\u52bf\uff0c\u5927\u670d\u52a1\u5668\u5fc5\u5907;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bf9\u591a\u4e2a\u670d\u52a1\u5668\uff0c\u73a9\u5bb6\u9700\u8981\u9000\u51fa\u91cd\u65b0\u8fdb\u5165\uff0c\u4e14\u6570\u636e\u4e0d\u80fd\u5171\u4eab. \u4ec5\u4ec5\u53ea\u662f\u5f00\u4e24\u4e2a\u670d\u52a1\u5668\u65e0\u6cd5\u4ea7\u751f\u6709\u6548\u4ea4\u4e92. \u6240\u4ee5\u9700\u8981\u8de8\u670d\u7aef\u5bf9\u670d\u52a1\u5668\u8fdb\u884c\u5207\u6362\u548c\u4ea4\u4e92\u7684\u5b8c\u5584;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5bf9\u5355\u4e2a\u670d\u52a1\u5668\uff0c\u5728\u5185\u5b58\u6709\u4e00\u70b9\u70b9\u5bcc\u88d5\u7684\u60c5\u51b5\u4e0b(\u901a\u5e38\u4e0d\u5230 1GB )\uff0c\u4ecd\u63a8\u8350\u4f7f\u7528\u4ee3\u7406\u7aef\uff0c\u670d\u52a1\u7aef\u5bf9\u4e8e\u53cd\u5047\u4eba\u653b\u51fb\u7684\u6027\u80fd\u4e0d\u5982\u4ee3\u7406\u7aef\uff0c\u5982\u679c\u4f60\u88ab\u653b\u51fb\u4e86\uff0c\u66f4\u6362\u6210\u4ee3\u7406\u7aef\u518d\u8bf4;"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6709\u4e9b\u63d2\u4ef6\u662f\u4ee3\u7406\u7aef\u624d\u80fd\u5b89\u88c5\u7684\uff0c\u800c\u5728 Bukkit \u7cfb\u4e0b\u53ef\u80fd\u4e0d\u7a33\u5b9a(\u5982",(0,r.jsx)(n.a,{href:"https://github.com/CaaMoe/MultiLogin",children:"MultiLogin"}),")."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h1,{id:"\u63a8\u8350\u7528\u4ec0\u4e48",children:"\u63a8\u8350\u7528\u4ec0\u4e48?"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u63a8\u8350\u4f7f\u7528 Velocity"}),"\uff0c\u9664\u975e\u4f60\u7684\u7248\u672c\u4e0d\u9002\u5408 Velocity \u7684\u73b0\u4ee3\u8f6c\u53d1"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5\u6570\u636e\u5e93",children:"\u5b89\u88c5\u6570\u636e\u5e93"}),"\n",(0,r.jsx)(n.p,{children:"\u4f60\u90fd\u8de8\u670d\u4e86\uff0c\u4f30\u8ba1\u4f1a\u6709\u591a\u7aef\u6570\u636e\u540c\u6b65\u7684\u9700\u6c42\u5427?"}),"\n",(0,r.jsxs)(n.p,{children:["\u770b ",(0,r.jsx)(n.a,{href:"https://yizhan.wiki/NitWikit/database",children:"\u6570\u636e\u5e93\u76f8\u5173"})]}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u822c\u9700\u8981\u5b89\u88c5\u4e24\u4e2a\u6570\u636e\u5e93\uff0cMySQL \u548c Redis\uff0cMySQL \u7528\u4e8e\u5b58\u50a8\u91cd\u8981\u4fe1\u606f\uff0c\u6bd4\u5982\u8d26\u53f7\u5bc6\u7801\uff0c\u7ecf\u6d4e\uff0c\u6743\u9650 Redis \u7528\u4e8e\u5feb\u901f\u8de8\u670d\u540c\u6b65"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},86823:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/\u7075\u9b42\u753b\u5e08\u6559\u5f00\u7fa4\u7ec4\u670d-702af6cdd0434e69fa2041ae02ebe779.png"},31503:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>o});var r=s(30758);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);