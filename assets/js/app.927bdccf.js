"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[143],{8148:(e,t,i)=>{i.d(t,{g:()=>f});var a=i(7621),n=i(6252),l=i(3577);const d=(0,n.aZ)({props:{type:{type:String,required:!1,default:"tip"},text:{type:String,required:!1,default:""},vertical:{type:String,required:!1,default:void 0}},setup:e=>(t,i)=>((0,n.wg)(),(0,n.iD)("span",{class:(0,l.C_)(["badge",e.type]),style:(0,l.j5)({verticalAlign:e.vertical})},[(0,n.WI)(t.$slots,"default",{},(()=>[(0,n.Uk)((0,l.zw)(e.text),1)]))],6))});var r=i(2262);const s=(0,n.aZ)({name:"CodeGroup",setup(e,{slots:t}){const i=(0,r.iH)(-1),a=(0,r.iH)([]);return()=>{var e;const l=((null===(e=t.default)||void 0===e?void 0:e.call(t))||[]).filter((e=>"CodeGroupItem"===e.type.name)).map((e=>(null===e.props&&(e.props={}),e)));return 0===l.length?null:(i.value<0||i.value>l.length-1?(i.value=l.findIndex((e=>""===e.props.active||!0===e.props.active)),-1===i.value&&(i.value=0)):l.forEach(((e,t)=>{e.props.active=t===i.value})),(0,n.h)("div",{class:"code-group"},[(0,n.h)("div",{class:"code-group__nav"},(0,n.h)("ul",{class:"code-group__ul"},l.map(((e,t)=>{const l=t===i.value;return(0,n.h)("li",{class:"code-group__li"},(0,n.h)("button",{ref:e=>{e&&(a.value[t]=e)},class:{"code-group__nav-tab":!0,"code-group__nav-tab-active":l},ariaPressed:l,ariaExpanded:l,onClick:()=>i.value=t,onKeydown:e=>((e,t)=>{" "===e.key||"Enter"===e.key?(e.preventDefault(),i.value=t):"ArrowRight"===e.key?(e.preventDefault(),((e=i.value)=>{e<a.value.length-1?i.value=e+1:i.value=0,a.value[i.value].focus()})(t)):"ArrowLeft"===e.key&&(e.preventDefault(),((e=i.value)=>{i.value=e>0?e-1:a.value.length-1,a.value[i.value].focus()})(t))})(e,t)},e.props.title))})))),l]))}}}),o=["aria-selected"],h=(0,n.aZ)({name:"CodeGroupItem"}),c=(0,n.aZ)({...h,props:{title:{type:String,required:!0},active:{type:Boolean,required:!1,default:!1}},setup:e=>(t,i)=>((0,n.wg)(),(0,n.iD)("div",{class:(0,l.C_)(["code-group-item",{"code-group-item__active":e.active}]),"aria-selected":e.active},[(0,n.WI)(t.$slots,"default")],10,o))});var g=i(2568);const u={class:"sr-only"},v=(0,n.aZ)({setup(e){const t=(0,g.X6)();return(e,i)=>((0,n.wg)(),(0,n.j4)((0,r.SU)(a.MS),null,{default:(0,n.w5)((()=>[(0,n._)("span",u,(0,l.zw)((0,r.SU)(t).openInNewWindow),1)])),_:1}))}}),p=(0,a.vW)((({app:e,router:t})=>{e.component("Badge",d),e.component("CodeGroup",s),e.component("CodeGroupItem",c),delete e._context.components.OutboundLink,e.component("OutboundLink",v),e.component("NavbarSearch",(()=>{const t=e.component("Docsearch")||e.component("SearchBox");return t?(0,n.h)(t):null}));const i=t.options.scrollBehavior;t.options.scrollBehavior=async(...e)=>(await(0,g.P$)().wait(),i(...e))}));var m=i(6971),w=i(1598),b=i(1843);const f=[p,m.Z,w.Z,b.Z,({app:e})=>{e.component("Btn",(0,n.RC)((()=>i.e(257).then(i.bind(i,257))))),e.component("BtnToggler",(0,n.RC)((()=>i.e(977).then(i.bind(i,2977)))))}]},9947:(e,t,i)=>{i.d(t,{p:()=>a});const a=[i(3051).Z]},7807:(e,t,i)=>{i.d(t,{l:()=>s});var a=i(7621),n=i(2568);const l=(0,a.F2)((()=>{(0,n.OX)(),(0,n.fR)()}));var d=i(1263),r=i(6243);const s=[l,d.Z,r.Z]},4150:(e,t,i)=>{i.d(t,{Z:()=>n});var a=i(6252);const n={404:(0,a.RC)((()=>i.e(895).then(i.bind(i,6895)))),Layout:(0,a.RC)((()=>Promise.all([i.e(980),i.e(276)]).then(i.bind(i,9276))))}},6056:(e,t,i)=>{i.d(t,{b:()=>n});var a=i(6252);const n={"v-7abbd9a3":(0,a.RC)((()=>i.e(410).then(i.bind(i,9663)))),"v-23c3178e":(0,a.RC)((()=>i.e(912).then(i.bind(i,4164)))),"v-7b3b5129":(0,a.RC)((()=>i.e(302).then(i.bind(i,1514)))),"v-11a5a1f8":(0,a.RC)((()=>i.e(350).then(i.bind(i,9630)))),"v-b65724de":(0,a.RC)((()=>i.e(966).then(i.bind(i,8144)))),"v-91189022":(0,a.RC)((()=>i.e(315).then(i.bind(i,6395)))),"v-801a3f98":(0,a.RC)((()=>i.e(672).then(i.bind(i,3185)))),"v-092a1d7c":(0,a.RC)((()=>i.e(262).then(i.bind(i,4346)))),"v-1dd2a66c":(0,a.RC)((()=>i.e(59).then(i.bind(i,6126)))),"v-f61f5c10":(0,a.RC)((()=>i.e(393).then(i.bind(i,6443)))),"v-ad0dea56":(0,a.RC)((()=>i.e(287).then(i.bind(i,4183)))),"v-6c0089f0":(0,a.RC)((()=>i.e(838).then(i.bind(i,5982)))),"v-8daa1a0e":(0,a.RC)((()=>i.e(509).then(i.bind(i,7111)))),"v-2b666fdc":(0,a.RC)((()=>i.e(268).then(i.bind(i,7776)))),"v-1a681f52":(0,a.RC)((()=>i.e(505).then(i.bind(i,3933)))),"v-42579c72":(0,a.RC)((()=>i.e(413).then(i.bind(i,6955)))),"v-710a4caa":(0,a.RC)((()=>i.e(670).then(i.bind(i,2037)))),"v-40dbb582":(0,a.RC)((()=>i.e(932).then(i.bind(i,3459)))),"v-2abc0796":(0,a.RC)((()=>i.e(801).then(i.bind(i,5502)))),"v-18fd2f76":(0,a.RC)((()=>i.e(164).then(i.bind(i,7537)))),"v-b106f6ee":(0,a.RC)((()=>i.e(588).then(i.bind(i,7114)))),"v-f130dd90":(0,a.RC)((()=>i.e(493).then(i.bind(i,145)))),"v-a6baef72":(0,a.RC)((()=>i.e(49).then(i.bind(i,5902)))),"v-26821122":(0,a.RC)((()=>i.e(452).then(i.bind(i,8365)))),"v-57c63dd6":(0,a.RC)((()=>i.e(435).then(i.bind(i,3006)))),"v-3bb245ba":(0,a.RC)((()=>i.e(710).then(i.bind(i,3838)))),"v-53d57338":(0,a.RC)((()=>i.e(196).then(i.bind(i,554)))),"v-596f6a0e":(0,a.RC)((()=>i.e(48).then(i.bind(i,990)))),"v-33da046e":(0,a.RC)((()=>i.e(875).then(i.bind(i,929)))),"v-26b2472a":(0,a.RC)((()=>i.e(244).then(i.bind(i,684)))),"v-3b44c0ef":(0,a.RC)((()=>i.e(992).then(i.bind(i,9862)))),"v-0a8b5dd1":(0,a.RC)((()=>i.e(303).then(i.bind(i,9556)))),"v-845d1e9e":(0,a.RC)((()=>i.e(900).then(i.bind(i,2504)))),"v-3706649a":(0,a.RC)((()=>i.e(88).then(i.bind(i,8109))))}},9706:(e,t,i)=>{i.d(t,{T:()=>a});const a={"v-7abbd9a3":()=>i.e(410).then(i.bind(i,3481)).then((({data:e})=>e)),"v-23c3178e":()=>i.e(912).then(i.bind(i,8254)).then((({data:e})=>e)),"v-7b3b5129":()=>i.e(302).then(i.bind(i,7692)).then((({data:e})=>e)),"v-11a5a1f8":()=>i.e(350).then(i.bind(i,380)).then((({data:e})=>e)),"v-b65724de":()=>i.e(966).then(i.bind(i,4204)).then((({data:e})=>e)),"v-91189022":()=>i.e(315).then(i.bind(i,1705)).then((({data:e})=>e)),"v-801a3f98":()=>i.e(672).then(i.bind(i,2631)).then((({data:e})=>e)),"v-092a1d7c":()=>i.e(262).then(i.bind(i,2932)).then((({data:e})=>e)),"v-1dd2a66c":()=>i.e(59).then(i.bind(i,7755)).then((({data:e})=>e)),"v-f61f5c10":()=>i.e(393).then(i.bind(i,7338)).then((({data:e})=>e)),"v-ad0dea56":()=>i.e(287).then(i.bind(i,1336)).then((({data:e})=>e)),"v-6c0089f0":()=>i.e(838).then(i.bind(i,3005)).then((({data:e})=>e)),"v-8daa1a0e":()=>i.e(509).then(i.bind(i,6464)).then((({data:e})=>e)),"v-2b666fdc":()=>i.e(268).then(i.bind(i,2656)).then((({data:e})=>e)),"v-1a681f52":()=>i.e(505).then(i.bind(i,2292)).then((({data:e})=>e)),"v-42579c72":()=>i.e(413).then(i.bind(i,8874)).then((({data:e})=>e)),"v-710a4caa":()=>i.e(670).then(i.bind(i,669)).then((({data:e})=>e)),"v-40dbb582":()=>i.e(932).then(i.bind(i,3778)).then((({data:e})=>e)),"v-2abc0796":()=>i.e(801).then(i.bind(i,921)).then((({data:e})=>e)),"v-18fd2f76":()=>i.e(164).then(i.bind(i,8437)).then((({data:e})=>e)),"v-b106f6ee":()=>i.e(588).then(i.bind(i,5117)).then((({data:e})=>e)),"v-f130dd90":()=>i.e(493).then(i.bind(i,3930)).then((({data:e})=>e)),"v-a6baef72":()=>i.e(49).then(i.bind(i,4211)).then((({data:e})=>e)),"v-26821122":()=>i.e(452).then(i.bind(i,7486)).then((({data:e})=>e)),"v-57c63dd6":()=>i.e(435).then(i.bind(i,882)).then((({data:e})=>e)),"v-3bb245ba":()=>i.e(710).then(i.bind(i,949)).then((({data:e})=>e)),"v-53d57338":()=>i.e(196).then(i.bind(i,6618)).then((({data:e})=>e)),"v-596f6a0e":()=>i.e(48).then(i.bind(i,4537)).then((({data:e})=>e)),"v-33da046e":()=>i.e(875).then(i.bind(i,1509)).then((({data:e})=>e)),"v-26b2472a":()=>i.e(244).then(i.bind(i,4103)).then((({data:e})=>e)),"v-3b44c0ef":()=>i.e(992).then(i.bind(i,8926)).then((({data:e})=>e)),"v-0a8b5dd1":()=>i.e(303).then(i.bind(i,6366)).then((({data:e})=>e)),"v-845d1e9e":()=>i.e(900).then(i.bind(i,8614)).then((({data:e})=>e)),"v-3706649a":()=>i.e(88).then(i.bind(i,1801)).then((({data:e})=>e))}},4634:(e,t,i)=>{i.d(t,{g:()=>n});var a=i(4802);const n=[["v-7abbd9a3","/adrenaline.html","Adrenaline",["/adrenaline","/adrenaline.md"]],["v-23c3178e","/blocking-updates.html","Blocking Updates",["/blocking-updates","/blocking-updates.md"]],["v-7b3b5129","/configuring-h-encore.html","Configuring h-encore",["/configuring-h-encore","/configuring-h-encore.md"]],["v-11a5a1f8","/credits.html","Credits",["/credits","/credits.md"]],["v-b65724de","/donations.html","Donations",["/donations","/donations.md"]],["v-91189022","/downgrading-firmware-(3.60).html","Downgrading Firmware (3.60)",["/downgrading-firmware-(3.60)","/downgrading-firmware-(3.60).md"]],["v-801a3f98","/downgrading-firmware-(3.65).html","Downgrading Firmware (3.65)",["/downgrading-firmware-(3.65)","/downgrading-firmware-(3.65).md"]],["v-092a1d7c","/faq.html","FAQ",["/faq","/faq.md"]],["v-1dd2a66c","/file-extensions-(windows).html","File Extensions (Windows)",["/file-extensions-(windows)","/file-extensions-(windows).md"]],["v-f61f5c10","/finalizing-setup-(legacy).html","Finalizing Setup (Legacy)",["/finalizing-setup-(legacy)","/finalizing-setup-(legacy).md"]],["v-ad0dea56","/finalizing-setup.html","Finalizing Setup",["/finalizing-setup","/finalizing-setup.md"]],["v-6c0089f0","/get-started.html","Get Started",["/get-started","/get-started.md"]],["v-8daa1a0e","/","Home",["/index.html","/index.md"]],["v-2b666fdc","/installing-enso-(3.60).html","Installing Ensō (3.60)",["/installing-enso-(3.60)","/installing-enso-(3.60).md"]],["v-1a681f52","/installing-enso-(3.65).html","Installing Ensō (3.65)",["/installing-enso-(3.65)","/installing-enso-(3.65).md"]],["v-42579c72","/installing-enso.html","Installing Ensō",["/installing-enso","/installing-enso.md"]],["v-710a4caa","/installing-h-encore-(qcma).html","Installing h-encore (QCMA method)",["/installing-h-encore-(qcma)","/installing-h-encore-(qcma).md"]],["v-40dbb582","/installing-h-encore.html","Installing h-encore",["/installing-h-encore","/installing-h-encore.md"]],["v-2abc0796","/installing-henkaku.html","Installing HENkaku",["/installing-henkaku","/installing-henkaku.md"]],["v-18fd2f76","/installing-vitadeploy.html","Installing VitaDeploy",["/installing-vitadeploy","/installing-vitadeploy.md"]],["v-b106f6ee","/privacy-policy.html","Privacy Policy",["/privacy-policy","/privacy-policy.md"]],["v-f130dd90","/site-navigation.html","Site Navigation",["/site-navigation","/site-navigation.md"]],["v-a6baef72","/storage-format-(linux).html","Storage Format (Linux)",["/storage-format-(linux)","/storage-format-(linux).md"]],["v-26821122","/storage-format-(mac).html","Storage Format (Mac)",["/storage-format-(mac)","/storage-format-(mac).md"]],["v-57c63dd6","/storage-format-(windows).html","Storage Format (Windows)",["/storage-format-(windows)","/storage-format-(windows).md"]],["v-3bb245ba","/storagemgr.html","StorageMgr",["/storagemgr","/storagemgr.md"]],["v-53d57338","/troubleshooting.html","Troubleshooting",["/troubleshooting","/troubleshooting.md"]],["v-596f6a0e","/uninstalling-cfw.html","Uninstalling CFW",["/uninstalling-cfw","/uninstalling-cfw.md"]],["v-33da046e","/updating-firmware-(3.60).html","Updating Firmware (3.60)",["/updating-firmware-(3.60)","/updating-firmware-(3.60).md"]],["v-26b2472a","/updating-firmware-(3.73).html","Updating Firmware (3.73)",["/updating-firmware-(3.73)","/updating-firmware-(3.73).md"]],["v-3b44c0ef","/updating-firmware-(ps-tv-3.65).html","Updating Firmware (PS TV 3.65)",["/updating-firmware-(ps-tv-3.65)","/updating-firmware-(ps-tv-3.65).md"]],["v-0a8b5dd1","/updating-firmware-(ps-vita-3.65).html","Updating Firmware (PS Vita 3.65)",["/updating-firmware-(ps-vita-3.65)","/updating-firmware-(ps-vita-3.65).md"]],["v-845d1e9e","/yamt.html","YAMT (SD2Vita)",["/yamt","/yamt.md"]],["v-3706649a","/404.html","",["/404"]]].reduce(((e,[t,i,n,l])=>(e.push({name:t,path:i,component:a.Y,meta:{title:n}},...l.map((e=>({path:e,redirect:i})))),e)),[{name:"404",path:"/:catchAll(.*)",component:a.Y}])},5472:(e,t,i)=>{i.d(t,{D:()=>a});const a=[{title:"Adrenaline",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/adrenaline.html",pathLocale:"/",extraFields:[]},{title:"Blocking Updates",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What you need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/blocking-updates.html",pathLocale:"/",extraFields:[]},{title:"Configuring h-encore",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/configuring-h-encore.html",pathLocale:"/",extraFields:[]},{title:"Credits",headers:[],path:"/credits.html",pathLocale:"/",extraFields:[]},{title:"Donations",headers:[{level:3,title:"emiyl",slug:"emiyl",children:[]}],path:"/donations.html",pathLocale:"/",extraFields:[]},{title:"Downgrading Firmware (3.60)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]}],path:"/downgrading-firmware-(3.60).html",pathLocale:"/",extraFields:[]},{title:"Downgrading Firmware (3.65)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]}],path:"/downgrading-firmware-(3.65).html",pathLocale:"/",extraFields:[]},{title:"FAQ",headers:[{level:3,title:"I am on the latest system version, is my device hackable?",slug:"i-am-on-the-latest-system-version-is-my-device-hackable",children:[]},{level:3,title:"Can I downgrade my Vita?",slug:"can-i-downgrade-my-vita",children:[]},{level:3,title:"Is it safe to update a Vita with CFW?",slug:"is-it-safe-to-update-a-vita-with-cfw",children:[]},{level:3,title:"How risky is hacking my console?",slug:"how-risky-is-hacking-my-console",children:[]},{level:3,title:"Can I run awesome homebrew and emulators with this?",slug:"can-i-run-awesome-homebrew-and-emulators-with-this",children:[]},{level:3,title:"Where should I go for support?",slug:"where-should-i-go-for-support",children:[]},{level:3,title:"Can I do this without a computer?",slug:"can-i-do-this-without-a-computer",children:[]}],path:"/faq.html",pathLocale:"/",extraFields:[]},{title:"File Extensions (Windows)",headers:[{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/file-extensions-(windows).html",pathLocale:"/",extraFields:[]},{title:"Finalizing Setup (Legacy)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/finalizing-setup-(legacy).html",pathLocale:"/",extraFields:[]},{title:"Finalizing Setup",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/finalizing-setup.html",pathLocale:"/",extraFields:[]},{title:"Get Started",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"Version Table",slug:"version-table",children:[]}],path:"/get-started.html",pathLocale:"/",extraFields:[]},{title:"Home",headers:[{level:2,title:"What is Homebrew?",slug:"what-is-homebrew",children:[]},{level:2,title:"What is Custom Firmware?",slug:"what-is-custom-firmware",children:[]},{level:2,title:"What does this guide install?",slug:"what-does-this-guide-install",children:[]},{level:2,title:"What can I do with Custom Firmware?",slug:"what-can-i-do-with-custom-firmware",children:[]},{level:2,title:"What do I need to know before starting?",slug:"what-do-i-need-to-know-before-starting",children:[]}],path:"/",pathLocale:"/",extraFields:[]},{title:"Installing Ensō (3.60)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/installing-enso-(3.60).html",pathLocale:"/",extraFields:[]},{title:"Installing Ensō (3.65)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/installing-enso-(3.65).html",pathLocale:"/",extraFields:[]},{title:"Installing Ensō",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/installing-enso.html",pathLocale:"/",extraFields:[]},{title:"Installing h-encore (QCMA method)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/installing-h-encore-(qcma).html",pathLocale:"/",extraFields:[]},{title:"Installing h-encore",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/installing-h-encore.html",pathLocale:"/",extraFields:[]},{title:"Installing HENkaku",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/installing-henkaku.html",pathLocale:"/",extraFields:[]},{title:"Installing VitaDeploy",headers:[{level:3,title:"What You Need",slug:"what-you-need",children:[]}],path:"/installing-vitadeploy.html",pathLocale:"/",extraFields:[]},{title:"Privacy Policy",headers:[{level:3,title:"Embedded Content From Other Websites",slug:"embedded-content-from-other-websites",children:[]},{level:3,title:"Analytics",slug:"analytics",children:[]},{level:3,title:"Information Collected",slug:"information-collected",children:[]},{level:3,title:"Third-Party Websites",slug:"third-party-websites",children:[]},{level:3,title:"Changes to Privacy Policy",slug:"changes-to-privacy-policy",children:[]}],path:"/privacy-policy.html",pathLocale:"/",extraFields:[]},{title:"Site Navigation",headers:[],path:"/site-navigation.html",pathLocale:"/",extraFields:[]},{title:"Storage Format (Linux)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/storage-format-(linux).html",pathLocale:"/",extraFields:[]},{title:"Storage Format (Mac)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/storage-format-(mac).html",pathLocale:"/",extraFields:[]},{title:"Storage Format (Windows)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/storage-format-(windows).html",pathLocale:"/",extraFields:[]},{title:"StorageMgr",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/storagemgr.html",pathLocale:"/",extraFields:[]},{title:"Troubleshooting",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:2,title:"A browser based exploit is not working",slug:"a-browser-based-exploit-is-not-working",children:[]},{level:2,title:"Removing an PSN account without formatting your device",slug:"removing-an-psn-account-without-formatting-your-device",children:[]},{level:2,title:"Black screen on boot",slug:"black-screen-on-boot",children:[]}],path:"/troubleshooting.html",pathLocale:"/",extraFields:[]},{title:"Uninstalling CFW",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/uninstalling-cfw.html",pathLocale:"/",extraFields:[]},{title:"Updating Firmware (3.60)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What you need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/updating-firmware-(3.60).html",pathLocale:"/",extraFields:[]},{title:"Updating Firmware (3.73)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What you need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/updating-firmware-(3.73).html",pathLocale:"/",extraFields:[]},{title:"Updating Firmware (PS TV 3.65)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What you need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/updating-firmware-(ps-tv-3.65).html",pathLocale:"/",extraFields:[]},{title:"Updating Firmware (PS Vita 3.65)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What you need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/updating-firmware-(ps-vita-3.65).html",pathLocale:"/",extraFields:[]},{title:"YAMT (SD2Vita)",headers:[{level:3,title:"Required Reading",slug:"required-reading",children:[]},{level:3,title:"What You Need",slug:"what-you-need",children:[]},{level:3,title:"Instructions",slug:"instructions",children:[]}],path:"/yamt.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]}]},5220:(e,t,i)=>{i.d(t,{H:()=>a});const a={base:"/",lang:"en-US",title:"",description:"",head:[["link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/images/apple-touch-icon.png?v=PYEmwKvQAx"}],["link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/images/favicon-16x16.png?v=PYEmwKvQAx"}],["link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/images/favicon-32x32.png?v=PYEmwKvQAx"}],["link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/images/android-chrome-192x192.png?v=PYEmwKvQAx"}],["link",{rel:"icon",type:"image/png",sizes:"194x194",href:"/assets/images/favicon-194x194.png?v=PYEmwKvQAx"}],["link",{rel:"manifest",href:"/assets/images/manifest.json?v=PYEmwKvQAx"}],["link",{rel:"mask-icon",color:"#2E3440",href:"/assets/images/safari-pinned-tab.svg?v=PYEmwKvQAx"}],["link",{rel:"shortcut icon",href:"/assets/images/favicon.ico?v=PYEmwKvQAx"}],["meta",{name:"apple-mobile-web-app-title",content:"Guide"}],["meta",{name:"application-name",content:"Guide"}],["meta",{name:"msapplication-TileColor",content:"#2E3440"}],["meta",{name:"msapplication-TileImage",content:"/assets/images/mstile-144x144.png?v=PYEmwKvQAx"}],["meta",{name:"msapplication-config",content:"/assets/images/browserconfig.xml?v=PYEmwKvQAx"}],["meta",{name:"theme-color",content:"#2E3440"}],["link",{rel:"stylesheet",href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"}],["script",{src:"https://cdn.thisiswaldo.com/static/js/5303.js"}],["script",{src:"https://www.googletagmanager.com/gtag/js?id=UA-152619365-1"}],["script",{},'function gtag(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],gtag("js",new Date),gtag("config","UA-152619365-1");'],["script",{},"window.googletag = window.googletag || {cmd: []}; var adScript__w = window.innerWidth;var adScript__id, adScript__slot, adScript__size;adScript__id = 'div-gpt-ad-1649073007284-0';adScript__slot = '/22046652915/vita-0';adScript__size = [[728,90],[320,50]];adScript__size = adScript__size.filter(x => x[0] <= adScript__w);adScript__size = adScript__size.sort().reverse();adScript__size = [adScript__size[0]];if (adScript__size) {  googletag.cmd.push(function() {    googletag.defineSlot(adScript__slot, adScript__size, adScript__id).addService(googletag.pubads());    googletag.pubads().enableSingleRequest();    googletag.enableServices();  });}adScript__id = 'div-gpt-ad-1649073038121-0';adScript__slot = '/22046652915/vita-1';adScript__size = [[728,90],[320,50]];adScript__size = adScript__size.filter(x => x[0] <= adScript__w);adScript__size = adScript__size.sort().reverse();adScript__size = [adScript__size[0]];if (adScript__size) {  googletag.cmd.push(function() {    googletag.defineSlot(adScript__slot, adScript__size, adScript__id).addService(googletag.pubads());    googletag.pubads().enableSingleRequest();    googletag.enableServices();  });}"]],locales:{"/":{lang:"en-US",title:"Vita Guide",description:"A complete guide to PS Vita (TV) custom firmware, from stock to Ensō."}}}},2232:(e,t,i)=>{i.d(t,{f:()=>a});const a={repo:"hacks-guide/Guide_Vita",docsBranch:"master",docsDir:"docs",selectLanguageText:'<i class="fas fa-globe"/>',adArr:[{slot:"/22046652915/vita-0",size:[[728,90],[320,50]],id:"div-gpt-ad-1649073007284-0"},{slot:"/22046652915/vita-1",size:[[728,90],[320,50]],id:"div-gpt-ad-1649073038121-0"}],locales:{"/":{selectLanguageName:"English",backToHome:"Take me home",contributorsText:"Contributors",editLinkText:"Edit this page",lastUpdatedText:"Last Updated",openInNewWindow:"Open in new window",selectLanguageAriaLabel:"Select language",toggleDarkMode:"Toggle dark mode",toggleSidebar:"Toggle sidebar",discordNoticeText:"For support in English, ask for help at [HENkaku on Discord](https://discord.gg/m7MwpKA).",navbar:[{text:"Guides",children:["adrenaline",{text:"SD2Vita",link:"yamt"},{text:"Uninstalling CFW",link:"uninstalling-cfw.md"}]},{text:"Help",children:["troubleshooting","faq",{text:"Discord",link:"https://discord.gg/m7MwpKA"}]},{text:"Site Info",children:["donations","credits","site-navigation"]}],sidebar:{"/":[{text:"Guide",children:["index.html","get-started","updating-firmware-(3.73)","installing-h-encore","installing-enso","finalizing-setup"]}],"/installing-henkaku":[{text:"Guide",children:["index.html","get-started","installing-henkaku","installing-enso","finalizing-setup"]}]}}},navbar:[],logo:null,darkMode:!0,selectLanguageAriaLabel:"Select language",sidebar:"auto",sidebarDepth:2,editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributors:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"}},2568:(e,t,i)=>{i.d(t,{OX:()=>r,fR:()=>y,vs:()=>d,sC:()=>g,P$:()=>m,VU:()=>f,X6:()=>C});var a=i(5762),n=i(6252);const l=Symbol(""),d=()=>{const e=(0,n.f3)(l);if(!e)throw new Error("useDarkMode() is called without provider.");return e},r=()=>{const e=C(),t=(0,a.QA3)(),i=(0,a.y$C)("vuepress-color-scheme","auto"),d=(0,n.Fl)({get:()=>!!e.value.darkMode&&("auto"===i.value?t.value:"dark"===i.value),set(e){e===t.value?i.value="auto":i.value=e?"dark":"light"}});(0,n.JJ)(l,d),s(d)},s=e=>{const t=(t=e.value)=>{const i=null===window||void 0===window?void 0:window.document.querySelector("html");null==i||i.classList.toggle("dark",t)};(0,n.bv)((()=>{(0,n.YP)(e,t,{immediate:!0})})),(0,n.Ah)((()=>t()))};var o=i(480),h=i(2119);const c=(...e)=>{const t=(0,h.tv)().resolve(...e),i=t.matched[t.matched.length-1];if(!(null==i?void 0:i.redirect))return t;const{redirect:a}=i,n=(0,o.mf)(a)?a(t):a,l=(0,o.HD)(n)?{path:n}:n;return c({hash:t.hash,query:t.query,params:t.params,...l})},g=e=>{const t=c(e);return{text:t.meta.title||e,link:"404"===t.name?e:t.fullPath}};let u=null,v=null;const p={wait:()=>u,pending:()=>{u=new Promise((e=>v=e))},resolve:()=>{null==v||v(),u=null,v=null}},m=()=>p;var w=i(7621);const b=Symbol("sidebarItems"),f=()=>{const e=(0,n.f3)(b);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},y=()=>{const e=C(),t=(0,w.I2)(),i=(0,n.Fl)((()=>x(t.value,e.value)));(0,n.JJ)(b,i)},x=(e,t)=>{var i,a,n,l;const d=null!==(a=null!==(i=e.sidebar)&&void 0!==i?i:t.sidebar)&&void 0!==a?a:"auto",r=null!==(l=null!==(n=e.sidebarDepth)&&void 0!==n?n:t.sidebarDepth)&&void 0!==l?l:2;return e.home||!1===d?[]:"auto"===d?k(r):(0,o.kJ)(d)?S(d,r):(0,o.PO)(d)?_(d,r):[]},R=(e,t)=>t>0?e.map((e=>((e,t)=>({text:e.title,link:`#${e.slug}`,children:R(e.children,t)}))(e,t-1))):[],k=e=>{const t=(0,w.Vi)();return[{text:t.value.title,children:R(t.value.headers,e)}]},S=(e,t)=>{const i=(0,h.yj)(),a=(0,w.Vi)(),n=e=>{var l;let d;if(d=(0,o.HD)(e)?g(e):e,d.children)return{...d,children:d.children.map((e=>n(e)))};if(d.link===i.path){const e=1===(null===(l=a.value.headers[0])||void 0===l?void 0:l.level)?a.value.headers[0].children:a.value.headers;return{...d,children:R(e,t)}}return d};return e.map((e=>n(e)))},_=(e,t)=>{var i;const a=(0,h.yj)(),n=null!==(i=e[(0,o.gb)(e,a.path)])&&void 0!==i?i:[];return S(n,t)};var F=i(6333);const C=()=>(0,F.X6)()}},e=>{e.O(0,[90,827],(()=>(5698,e(e.s=5698)))),e.O()}]);