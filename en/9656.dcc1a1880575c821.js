"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9656],{9656:(y,O,n)=>{n.r(O),n.d(O,{HomeLayoutComponent:()=>H});var t=n(4496),h=n(2100),f=n(3480),c=n(1368),r=n(1560),p=n(466),a=n(8212),v=n(4336),g=n(2500),P=n(1512),R=n(5657),d=n(3616),b=n(1343);let l=(()=>{class i{static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275mod=t.a4G({type:i});static#n=this.\u0275inj=t.s3X({})}return i})();var L=n(3468);let A=(()=>{class i{constructor(){this.isOpen=!1,this.active=!1,this.defaults={upper:"M 3.38361 6.14771 H 21.3836",middle:"M 3.38361 12.1477 H 21.3836",lower:"M3.38361 18.1477H21.3836"},this.upperD=this.defaults.upper,this.middleD=this.defaults.middle,this.lowerD=this.defaults.lower,this.hovering=!1}onHover(){this.hovering=!0}onLeave(){this.hovering=!1}static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-menu-icon"]],hostVars:8,hostBindings:function(e,s){1&e&&t.qCj("mouseenter",function(){return s.onHover()})("mouseleave",function(){return s.onLeave()}),2&e&&(t.m4B("--color",s.color),t.eAK("open",s.isOpen)("active",s.active)("hovering",s.hovering))},inputs:{isOpen:"isOpen",active:"active",color:"color"},decls:4,vars:3,consts:[["viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg"],["id","upper"],["id","middle"],["id","lower"]],template:function(e,s){1&e&&(t.S2Z(),t.I0R(0,"svg",0),t.wR5(1,"path",1)(2,"path",2)(3,"path",3),t.C$Y()),2&e&&(t.yG2(),t.e48("d",s.upperD),t.yG2(),t.e48("d",s.middleD),t.yG2(),t.e48("d",s.lowerD))},styles:["[_nghost-%COMP%]{--color: var(--first-color);--active-color: var(--first-color)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{display:block;width:24px;height:24px;fill:none}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--color, var(--app-secondary-text-color));stroke:var(--color, var(--app-secondary-text-color));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all .25s ease}.hovering[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .active[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--active-color, var(--app-secondary-text-color));stroke:var(--active-color, var(--app-secondary-text-color))}[_nghost-%COMP%]:not(.open)   #middle[_ngcontent-%COMP%]{transform:rotateY(45deg)}[_nghost-%COMP%]:not(.open).hovering   #middle[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.open).active   #middle[_ngcontent-%COMP%]{transform:rotateY(0)}.open[_nghost-%COMP%]   #upper[_ngcontent-%COMP%]{transform:rotate(45deg);transform-origin:50% 50%}.open[_nghost-%COMP%]   #middle[_ngcontent-%COMP%]{transform:rotate(-45deg);transform-origin:50% 50%}.open[_nghost-%COMP%]   #lower[_ngcontent-%COMP%]{transform:rotate(45deg);transform-origin:50% 50%}"]})}return i})();const x=["navbar"],S=["navbarLinks"];function u(i,_){if(1&i){const o=t.KQA();t.SAx(0),t.I0R(1,"button",36),t.qCj("click",function(){t.usT(o);const s=t.GaO().$implicit,m=t.GaO(3);return t.CGJ(m.changePath(s.code))}),t.I0R(2,"span",37),t.wR5(3,"span",38)(4,"img",33),t.wVc(5,"tuiFlag"),t.C$Y()(),t.k70()}if(2&i){const o=t.GaO().$implicit;t.yG2(3),t.E7m("innerText",o.name),t.yG2(),t.E7m("src",t.kDX(5,2,o.iso),t.K6U)}}function E(i,_){if(1&i&&(t.SAx(0),t.yuY(1,u,6,4,"ng-container",35),t.k70()),2&i){const o=_.$implicit,e=t.GaO(3);t.yG2(),t.E7m("ngIf",o.iso!=e.currentLanguage().iso)}}function C(i,_){if(1&i&&(t.I0R(0,"tui-data-list"),t.yuY(1,E,2,1,"ng-container",34),t.C$Y()),2&i){const o=t.GaO(2);t.yG2(),t.E7m("ngForOf",o.languages)}}function M(i,_){if(1&i&&(t.yuY(0,C,2,1,"ng-template",null,30,t.gJz),t.I0R(2,"tui-hosted-dropdown",31)(3,"button",32),t.wR5(4,"img",33),t.wVc(5,"tuiFlag"),t.C$Y()()),2&i){const o=t.Gew(1),e=t.GaO();t.yG2(2),t.E7m("content",o),t.yG2(2),t.E7m("src",t.kDX(5,2,e.currentLanguage().iso),t.K6U)}}function T(i,_){1&i&&t.C_f(0)}const N=()=>({exact:!0}),U=i=>({open:i}),D=()=>({"max-height":"350px",height:"50%"});let Y=(()=>{class i{get isMenuOpen(){return this._isMenuOpen}set isMenuOpen(o){this._isMenuOpen=o,this.isMenuOpenChange$.next(o),this.updateLinksTop()}constructor(o,e){this.router=o,this.configs=e,this.destroy$=new R.E,this.isMenuOpenChange$=new R.E,this._isMenuOpen=!1,this.scrolled=(0,t.OCB)(!1),this.languages=[{name:"Italiano",code:"it",iso:b.q.IT},{name:"English",code:"en",iso:b.q.US}],this.currentLanguage=(0,t.OCB)(this.languages[0]),this.isMenuOpenChange$.pipe((0,d.a)(this.destroy$)).subscribe(s=>{this.updateBodyClass()}),e.locale$.pipe((0,d.a)(this.destroy$)).subscribe(s=>{this.localeId=s,this.updateCurrentLanguage()}),this.router.events.pipe((0,d.a)(this.destroy$)).subscribe(()=>{this.isMenuOpen=!1,this.updateCurrentLanguage()})}ngOnInit(){}changePath(o){location.replace(`/${o}/#${this.router.url}`)}onResize(o){this.isMenuOpen=!1,this.updateLinksTop()}onScroll(o){this.scrolled.set(window.scrollY>0)}ngAfterViewInit(){this.updateLinksTop()}triggerMenu(){this.isMenuOpen=!this.isMenuOpen}updateCurrentLanguage(){this.localeId&&this.currentLanguage.set(this.getCurrentLanguage())}updateLinksTop(){if(!this.navbar||!this.navbarLinks)return;const o=window.getComputedStyle(this.navbar.nativeElement,null).getPropertyValue("padding-bottom"),e=this.navbar.nativeElement.offsetHeight-parseInt(o);this.navbarLinks.nativeElement.style.top=`${e}px`}getCurrentLanguage(){if(!this.localeId)return this.languages[0];const o=this.localeId.split("-")[0];return this.languages.find(e=>e.code===o)||this.languages[0]}updateBodyClass(){this.isMenuOpen?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}static#t=this.\u0275fac=function(e){return new(e||i)(t.GI1(h.E5),t.GI1(L.m))};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-public-navbar"]],viewQuery:function(e,s){if(1&e&&(t.CC$(x,7),t.CC$(S,7)),2&e){let m;t.wto(m=t.Gqi())&&(s.navbar=m.first),t.wto(m=t.Gqi())&&(s.navbarLinks=m.first)}},hostBindings:function(e,s){1&e&&t.qCj("resize",function(I){return s.onResize(I)},!1,t.MbM)("scroll",function(I){return s.onScroll(I)},!1,t.MbM)},standalone:!0,features:[t.M5G([f.UF]),t.UHJ],decls:42,vars:18,consts:()=>{let o,e,s,m,I;return o="Book now",e="Menu",s="Home",m="Menu",I="Who we are",[["langSelectTemp",""],[1,"placeholder"],[1,"navbar","|","fixed","w-full","z-20","top-0","start-0"],["navbar",""],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","px-4","py-2"],["routerLink","/",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["src","assets/img/logo.png","alt","Lpda2",1,"h-[52px]"],[1,"flex","md:order-2","space-x-3","md:space-x-0","rtl:space-x-reverse"],[4,"ngTemplateOutlet"],["tuiButton","","size","m","appearance","custom","routerLink","/reserve",1,"btn-primary","text-base"],o,[1,"block","md:hidden"],["size","m","appearance","outline","tuiIconButton","",3,"click"],[3,"isOpen"],["id","navbar-sticky",1,"items-center","justify-between","hidden","w-full","md:flex","md:w-auto","md:order-1"],[1,"navbar-links","|","flex","flex-col","p-4","md:p-0","mt-4","font-medium","border","border-gray-100","rounded-lg","bg-gray-50","md:space-x-8","rtl:space-x-reverse","md:flex-row","md:mt-0","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["tuiLink","","routerLink","/","aria-current","page",1,"block","py-2","px-3","text-base",3,"routerLinkActive","routerLinkActiveOptions"],[1,"text-lg"],["tuiLink","","routerLink","/menu",1,"block","py-2","px-3","text-base",3,"routerLinkActive"],e,["tuiLink","","routerLink","/about",1,"block","py-2","px-3","text-base",3,"routerLinkActive"],[1,"fullsize-navbar-links","|","items-center","flex","md:hidden","flex-col","px-3",3,"ngClass"],["navbarLinks",""],[1,"content-around","flex","flex-col","items-center","my-auto"],["tuiLink","","routerLink","/",1,"simple-link",3,"routerLinkActive","routerLinkActiveOptions"],s,["tuiLink","","routerLink","/menu",1,"simple-link",3,"routerLinkActive"],m,["tuiLink","","routerLink","/about",1,"simple-link",3,"routerLinkActive"],I,["dataList",""],[3,"content"],["tuiIconButton","","appearance","custom","size","m"],[1,"flag",3,"src"],[4,"ngFor","ngForOf"],[4,"ngIf"],["tuiOption","",3,"click"],[1,"d-flex","flex-row","align-items-center"],[1,"me-1",3,"innerText"]]},template:function(e,s){if(1&e&&(t.yuY(0,M,6,4,"ng-template",null,0,t.gJz),t.I0R(2,"div",1),t.OEk(3,"."),t.C$Y(),t.I0R(4,"nav",2,3)(6,"div",4)(7,"a",5),t.wR5(8,"img",6),t.C$Y(),t.I0R(9,"div",7),t.yuY(10,T,1,0,"ng-container",8),t.I0R(11,"a",9),t.SAx(12),t.aS0(13,10),t.k70(),t.C$Y(),t.I0R(14,"div",11)(15,"button",12),t.qCj("click",function(){return s.triggerMenu()}),t.wR5(16,"app-menu-icon",13),t.C$Y()()(),t.I0R(17,"div",14)(18,"ul",15)(19,"li")(20,"a",16)(21,"span",17),t.OEk(22,"Home"),t.C$Y()()(),t.I0R(23,"li")(24,"a",18)(25,"span",17),t.aS0(26,19),t.C$Y()()(),t.I0R(27,"li")(28,"a",20)(29,"span",17),t.OEk(30,"Chi siamo"),t.C$Y()()()()()()(),t.I0R(31,"div",21,22)(33,"div",23)(34,"a",24),t.aS0(35,25),t.C$Y(),t.I0R(36,"a",26),t.SAx(37),t.aS0(38,27),t.k70(),t.C$Y(),t.I0R(39,"a",28),t.SAx(40),t.aS0(41,29),t.k70(),t.C$Y()()()),2&e){const m=t.Gew(1);t.yG2(10),t.E7m("ngTemplateOutlet",m),t.yG2(6),t.E7m("isOpen",s.isMenuOpen),t.yG2(4),t.E7m("routerLinkActive","active")("routerLinkActiveOptions",t.q4q(13,N)),t.yG2(4),t.E7m("routerLinkActive","active"),t.yG2(4),t.E7m("routerLinkActive","active"),t.yG2(3),t.E7m("ngClass",t.S45(14,U,s.isMenuOpen)),t.yG2(2),t.m_g(t.q4q(16,D)),t.yG2(),t.E7m("routerLinkActive","active")("routerLinkActiveOptions",t.q4q(17,N)),t.yG2(2),t.E7m("routerLinkActive","active"),t.yG2(3),t.E7m("routerLinkActive","active")}},dependencies:[c.MD,c.QF,c.ay,c.u_,c.XV,h.qQ,h.ER,h.LC,p.GE,p.Qw,a.CI,a.Kw,r.oB,v.A$,v.yi,v.sP,l,A,g.y,g.i,P.w,P.C],styles:["[_nghost-%COMP%]{--navbar-height: 70px;--navbar-color: #f8f9fa}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%], [_nghost-%COMP%]   .placeholder[_ngcontent-%COMP%]{height:var(--navbar-height)}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%], [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%], [_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]{background-color:var(--navbar-color)}[_nghost-%COMP%]   .placeholder[_ngcontent-%COMP%]{height:var(--navbar-height);display:block}[_nghost-%COMP%]   img.flag[_ngcontent-%COMP%]{max-height:25px}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]{opacity:.9;transition:max-height .5s linear;position:fixed;z-index:100;inset:100px 0 0;overflow:hidden;max-height:0}[_nghost-%COMP%]   .fullsize-navbar-links.open[_ngcontent-%COMP%]{max-height:100vh}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]   .colored-transition[_ngcontent-%COMP%]{color:var(--app-secondary-text-color);transition:color .5s ease}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]   .colored-transition[_ngcontent-%COMP%]:hover{color:var(--app-main-text-color)}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]   .simple-link[_ngcontent-%COMP%]{margin-bottom:3rem;display:flex;font-size:1.25rem;text-decoration:none}"],changeDetection:0})}return i})();var B=n(1316),w=n(1676),G=n(9392);class k{constructor(){this.public=(0,t.uUt)(w.s),this.destroy$=(0,t.uUt)(f.UF),this.contacts=this.public.contacts,this.messages=this.public.messages}contact(_){const o=this.contacts();return o?o[_]??null:null}toLink(_){return _?_.replace(/\s+/g,""):""}message(_){const o=this.messages();return o?o[_]??null:null}static#t=this.\u0275fac=function(o){return new(o||k)};static#e=this.\u0275cmp=t.In1({type:k,selectors:[["app-public-footer"]],standalone:!0,features:[t.M5G([f.UF]),t.UHJ],decls:97,vars:18,consts:()=>{let _,o,e;return _="Send an email to ",o="Call us at ",e="Write to us on Whatsapp!",[[1,"grid","grid-cols-1","md:grid-cols-2","xl:grid-cols-3","p-12"],[1,"mb-8","flex","flex-col","items-start","fit-content","mx-auto"],["alt","La Porta d'acqua",1,"mb-3",3,"ngSrc","width","height"],[1,"mb-3"],["target","_blank","tuiLink","",1,"dark-link",3,"href"],[1,"flex","items-center"],[1,"text-lg","flex","items-center"],[1,"inline-block","me-2"],[1,"inline-block"],_,o,["width","24","height","24","viewBox","0 0 48 48","xmlns","http://www.w3.org/2000/svg",1,"me-2"],["fill-rule","evenodd","clip-rule","evenodd","d","M40.5811 7.35018C36.1957 2.95966 30.3635 0.540661 24.1502 0.538086C11.3471 0.538086 0.92728 10.9576 0.922131 23.7642C0.920414 27.858 1.98986 31.8543 4.02262 35.3768L0.727295 47.4131L13.0409 44.183C16.4337 46.0338 20.2535 47.0091 24.1408 47.0103H24.1505C36.9521 47.0103 47.3731 36.5898 47.378 23.7828C47.3806 17.576 44.9667 11.7404 40.5811 7.35018ZM24.1502 43.0875H24.1422C20.6781 43.0861 17.2806 42.1551 14.316 40.3964L13.6113 39.9779L6.30429 41.8947L8.25465 34.7705L7.79545 34.0401C5.86283 30.9662 4.8423 27.4134 4.84402 23.7656C4.84803 13.1212 13.5089 4.46112 24.1579 4.46112C29.3146 4.46284 34.1621 6.47356 37.807 10.1228C41.452 13.772 43.4581 18.6226 43.4564 23.7813C43.4518 34.4266 34.7915 43.0875 24.1502 43.0875ZM34.74 28.6282C34.1598 28.3375 31.3062 26.9339 30.774 26.7399C30.2425 26.5462 29.8551 26.4498 29.4686 27.0306C29.0815 27.6114 27.9694 28.9189 27.6306 29.306C27.2919 29.6933 26.9537 29.742 26.3732 29.4513C25.7927 29.1609 23.9228 28.5478 21.7057 26.5705C19.9805 25.0316 18.8158 23.131 18.4771 22.5502C18.1389 21.9689 18.4742 21.685 18.7317 21.3658C19.36 20.5856 19.9891 19.7676 20.1825 19.3805C20.3762 18.9931 20.2792 18.6541 20.1339 18.3637C19.9891 18.0733 18.8284 15.2166 18.3449 14.0541C17.8734 12.9229 17.3953 13.0757 17.0388 13.0579C16.7007 13.041 16.3136 13.0376 15.9265 13.0376C15.5397 13.0376 14.9108 13.1827 14.3787 13.764C13.8468 14.3451 12.3476 15.749 12.3476 18.6057C12.3476 21.4625 14.4273 24.2222 14.7174 24.6096C15.0075 24.997 18.8101 30.8592 24.632 33.3729C26.0167 33.9714 27.0976 34.3282 27.9408 34.5957C29.3312 35.0374 30.5961 34.9751 31.5963 34.8257C32.7115 34.6589 35.0298 33.4215 35.5139 32.066C35.9974 30.7101 35.9974 29.5483 35.8521 29.306C35.7073 29.0639 35.3202 28.9189 34.74 28.6282Z"],[1,"text-lg"],[1,"block"],e,[1,"flex","items-center","justify-around","w-full"],["width","40","height","40","viewBox","0 0 53 56","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0)"],["d","M52.7673 16.2172C52.6436 13.2863 52.1897 11.2714 51.5396 9.52541C50.8689 7.6721 49.837 6.01284 48.4852 4.63348C47.1643 3.23266 45.565 2.14416 43.8108 1.4547C42.1293 0.775755 40.2099 0.301799 37.4034 0.172577C34.5759 0.0324108 33.6782 0 26.5069 0C19.3356 0 18.438 0.0324108 15.621 0.161633C12.8145 0.290855 10.885 0.765232 9.21352 1.44375C7.43843 2.14416 5.84955 3.22172 4.52872 4.63348C3.18732 6.01284 2.1454 7.68305 1.48478 9.51489C0.834642 11.2714 0.380793 13.2754 0.257053 16.2062C0.122833 19.159 0.0917969 20.0964 0.0917969 27.5854C0.0917969 35.0744 0.122833 36.0118 0.246573 38.9536C0.370314 41.8844 0.824566 43.8994 1.47471 45.6454C2.1454 47.4987 3.18732 49.1579 4.52872 50.5373C5.84955 51.9381 7.44891 53.0266 9.20304 53.7161C10.885 54.395 12.804 54.869 15.6109 54.9982C18.4275 55.1278 19.3256 55.1598 26.4969 55.1598C33.6682 55.1598 34.5658 55.1278 37.3828 54.9982C40.1893 54.869 42.1188 54.395 43.7903 53.7161C47.3401 52.2828 50.1466 49.352 51.519 45.6454C52.1688 43.8889 52.623 41.8844 52.7468 38.9536C52.8705 36.0118 52.9015 35.0744 52.9015 27.5854C52.9015 20.0964 52.8911 19.159 52.7673 16.2172ZM48.0108 38.7381C47.8971 41.432 47.4638 42.8867 47.1027 43.8565C46.2151 46.2595 44.3888 48.1667 42.0878 49.0935C41.1591 49.4707 39.756 49.9232 37.1865 50.0414C34.4005 50.1711 33.565 50.2031 26.5174 50.2031C19.4699 50.2031 18.6238 50.1711 15.8479 50.0414C13.2683 49.9232 11.8753 49.4707 10.9467 49.0935C9.80159 48.6516 8.75927 47.9512 7.91324 47.0352C7.03617 46.1408 6.36547 45.0632 5.94226 43.8674C5.58111 42.8976 5.14782 41.432 5.03456 38.749C4.91042 35.8396 4.87978 34.9666 4.87978 27.6069C4.87978 20.2471 4.91042 19.3636 5.03456 16.4651C5.14782 13.7712 5.58111 12.3165 5.94226 11.3467C6.36547 10.1505 7.03617 9.0624 7.92372 8.17847C8.77982 7.26255 9.81166 6.56214 10.9572 6.12059C11.8858 5.74345 13.2893 5.29096 15.8584 5.17226C18.6444 5.04304 19.4803 5.01063 26.5275 5.01063C33.5855 5.01063 34.4211 5.04304 37.197 5.17226C39.7766 5.29096 41.1696 5.74345 42.0982 6.12059C43.2433 6.56214 44.2857 7.26255 45.1317 8.17847C46.0087 9.07292 46.6794 10.1505 47.1027 11.3467C47.4638 12.3165 47.8971 13.7818 48.0108 16.4651C48.1345 19.3745 48.1655 20.2471 48.1655 27.6069C48.1655 34.9666 48.1345 35.8287 48.0108 38.7381Z"],["d","M26.5062 13.4155C19.0153 13.4155 12.9375 19.7622 12.9375 27.5854C12.9375 35.4086 19.0153 41.7552 26.5062 41.7552C33.9976 41.7552 40.0749 35.4086 40.0749 27.5854C40.0749 19.7622 33.9976 13.4155 26.5062 13.4155ZM26.5062 36.777C21.6465 36.777 17.7045 32.6608 17.7045 27.5854C17.7045 22.5099 21.6465 18.3937 26.5062 18.3937C31.3664 18.3937 35.3079 22.5099 35.3079 27.5854C35.3079 32.6608 31.3664 36.777 26.5062 36.777V36.777Z"],["d","M43.7811 12.8552C43.7811 14.682 42.3627 16.1633 40.613 16.1633C38.8637 16.1633 37.4453 14.682 37.4453 12.8552C37.4453 11.028 38.8637 9.54724 40.613 9.54724C42.3627 9.54724 43.7811 11.028 43.7811 12.8552V12.8552Z"],["width","40","height","40","viewBox","0 0 50 50","xmlns","http://www.w3.org/2000/svg"],["d","M7.32422 50H23.6328V32.2266H17.7734V26.3672H23.6328V19.043C23.6328 15.0043 26.9184 11.7188 30.957 11.7188H38.2812V17.5781H32.4219C30.8064 17.5781 29.4922 18.8923 29.4922 20.5078V26.3672H38.0169L37.0403 32.2266H29.4922V50H42.6758C46.7144 50 50 46.7144 50 42.6758V7.32422C50 3.2856 46.7144 0 42.6758 0H7.32422C3.2856 0 0 3.2856 0 7.32422V42.6758C0 46.7144 3.2856 50 7.32422 50ZM2.92969 7.32422C2.92969 4.90112 4.90112 2.92969 7.32422 2.92969H42.6758C45.0989 2.92969 47.0703 4.90112 47.0703 7.32422V42.6758C47.0703 45.0989 45.0989 47.0703 42.6758 47.0703H32.4219V35.1562H39.5222L41.4753 23.4375H32.4219V20.5078H41.2109V8.78906H30.957C25.3029 8.78906 20.7031 13.3888 20.7031 19.043V23.4375H14.8438V35.1562H20.7031V47.0703H7.32422C4.90112 47.0703 2.92969 45.0989 2.92969 42.6758V7.32422Z"],["d","M12.5 15.5503H1.5625C0.865625 15.5503 0.25625 16.0097 0.0625 16.6784C-0.13125 17.3503 0.140625 18.0659 0.73125 18.4347C0.74375 18.444 1.8125 19.1409 2.64062 20.4097C0.93125 22.5815 0 25.2503 0 28.0503C0 34.944 5.60625 40.5503 12.5 40.5503C19.3938 40.5503 25 34.944 25 28.0503C25 21.1565 19.3938 15.5503 12.5 15.5503ZM12.5 37.4253C7.33125 37.4253 3.125 33.219 3.125 28.0503C3.125 25.669 4.02813 23.4097 5.6625 21.6909C6.10313 21.2284 6.21875 20.5503 5.95625 19.969C5.74375 19.5003 5.5 19.0659 5.24063 18.6753H12.5C17.6688 18.6753 21.875 22.8815 21.875 28.0503C21.875 33.219 17.6688 37.4253 12.5 37.4253Z"],["d","M29.4469 33.0378C28.75 32.5347 27.775 32.6784 27.2625 33.3847L25.0812 36.3909L22.7031 33.3409C22.1718 32.6597 21.1875 32.5347 20.5093 33.0691C19.8312 33.6003 19.7093 34.5816 20.2406 35.2628L23.8968 39.9503C24.1937 40.3284 24.6468 40.5503 25.1281 40.5503C25.1375 40.5503 25.1468 40.5503 25.1562 40.5503C25.6468 40.5409 26.1062 40.3034 26.3906 39.9066L29.7906 35.2191C30.2969 34.5222 30.1469 33.5441 29.4469 33.0378Z"],["d","M41.6782 15.9595C32.172 7.28135 17.8282 7.27822 8.32199 15.9595C7.68449 16.5407 7.63762 17.5282 8.22199 18.1657C8.80324 18.8063 9.79074 18.847 10.4282 18.2657C18.7376 10.6813 31.2657 10.6813 39.572 18.2657C39.872 18.5407 40.2501 18.6751 40.6251 18.6751C41.0501 18.6751 41.472 18.5032 41.7782 18.1657C42.3626 17.5282 42.3157 16.5407 41.6782 15.9595Z"],["d","M12.5 21.8003C9.05312 21.8003 6.25 24.6034 6.25 28.0503C6.25 31.4972 9.05312 34.3003 12.5 34.3003C15.9469 34.3003 18.75 31.4972 18.75 28.0503C18.75 24.6034 15.9469 21.8003 12.5 21.8003ZM12.5 31.1753C10.7781 31.1753 9.375 29.7753 9.375 28.0503C9.375 26.3284 10.7781 24.9253 12.5 24.9253C14.2219 24.9253 15.625 26.3284 15.625 28.0503C15.625 29.7753 14.2219 31.1753 12.5 31.1753Z"],["d","M12.5625 26.4878H12.5312C11.6687 26.4878 10.9844 27.1878 10.9844 28.0503C10.9844 28.9128 11.7 29.6128 12.5625 29.6128C13.425 29.6128 14.125 28.9128 14.125 28.0503C14.125 27.1878 13.425 26.4878 12.5625 26.4878Z"],["d","M47.3563 20.4097C48.1844 19.144 49.2594 18.4378 49.2687 18.4347C49.8594 18.0628 50.1312 17.3472 49.9375 16.6784C49.7469 16.0097 49.1344 15.5503 48.4375 15.5503H37.5C30.6062 15.5503 25 21.1565 25 28.0503C25 34.944 30.6062 40.5503 37.5 40.5503C44.3938 40.5503 50 34.944 50 28.0503C50 25.2534 49.0688 22.5815 47.3563 20.4097ZM37.5 37.4253C32.3312 37.4253 28.125 33.219 28.125 28.0503C28.125 22.8815 32.3312 18.6753 37.5 18.6753H44.7594C44.5 19.0659 44.2563 19.5003 44.0437 19.969C43.7844 20.5503 43.8969 21.2315 44.3375 21.6909C45.975 23.4128 46.875 25.669 46.875 28.0503C46.875 33.219 42.6688 37.4253 37.5 37.4253Z"],["d","M37.5 21.8003C34.0531 21.8003 31.25 24.6034 31.25 28.0503C31.25 31.4972 34.0531 34.3003 37.5 34.3003C40.9469 34.3003 43.75 31.4972 43.75 28.0503C43.75 24.6034 40.9469 21.8003 37.5 21.8003ZM37.5 31.1753C35.775 31.1753 34.375 29.7753 34.375 28.0503C34.375 26.3284 35.775 24.9253 37.5 24.9253C39.225 24.9253 40.625 26.3284 40.625 28.0503C40.625 29.7753 39.225 31.1753 37.5 31.1753Z"],["d","M37.5625 26.4878H37.5312C36.6687 26.4878 35.9844 27.1878 35.9844 28.0503C35.9844 28.9128 36.7031 29.6128 37.5625 29.6128C38.425 29.6128 39.125 28.9128 39.125 28.0503C39.125 27.1878 38.425 26.4878 37.5625 26.4878Z"],[1,"w-fit","mx-auto","mb-8"],[1,"text-2xl","block","mb-3","text-center"],[1,"grid","grid-cols-2","text-xl","overflow-hidden"],[1,"me-2","text-end","w-fit"],[1,"w-fit"],[1,"col-span-1","md:col-span-2","xl:col-span-1"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.614772347502!2d12.331580915828495!3d45.437266343260816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1db193f1f51%3A0x8852e3e79481a8b5!2sLa%20Porta%20d'Acqua%20-%20Restaurant%20On%20Grand%20Canal!5e0!3m2!1sit!2sit!4v1607717626810!5m2!1sit!2sit","width","100%","height","100%","frameborder","0","allowfullscreen","","aria-hidden","false","tabindex","0 ",1,"my-auto"],[1,"block","mb-3","text-lg","text-center"],[1,"block","pb-5","text-lg","text-center"],["tuiLink","","routerLink","/privacy",1,"dark-link"],["tuiLink","","routerLink","/terms",1,"dark-link"],["tuiLink","","routerLink","/disclaimers",1,"dark-link"]]},template:function(o,e){1&o&&(t.I0R(0,"div",0)(1,"div",1),t.wR5(2,"img",2),t.I0R(3,"div",3)(4,"a",4)(5,"div",5)(6,"div",6)(7,"mat-icon",7),t.OEk(8,"mail"),t.C$Y(),t.I0R(9,"span",8),t.SAx(10),t.aS0(11,9),t.k70(),t.OEk(12),t.C$Y()()()()(),t.I0R(13,"div",3)(14,"a",4)(15,"div",5)(16,"div",6)(17,"mat-icon",7),t.OEk(18,"phone"),t.C$Y(),t.I0R(19,"span",8),t.SAx(20),t.aS0(21,10),t.k70(),t.OEk(22),t.C$Y()()()()(),t.I0R(23,"div",3)(24,"a",4)(25,"div",5),t.S2Z(),t.I0R(26,"svg",11),t.wR5(27,"path",12),t.C$Y(),t.gRP(),t.I0R(28,"div",13)(29,"span",14),t.aS0(30,15),t.C$Y()()()()(),t.I0R(31,"div",16)(32,"a",4),t.S2Z(),t.I0R(33,"svg",17)(34,"g",18),t.wR5(35,"path",19)(36,"path",20)(37,"path",21),t.C$Y()()(),t.gRP(),t.I0R(38,"a",4),t.S2Z(),t.I0R(39,"svg",22),t.wR5(40,"path",23),t.C$Y()(),t.gRP(),t.I0R(41,"a",4),t.S2Z(),t.I0R(42,"svg",22),t.wR5(43,"path",24)(44,"path",25)(45,"path",26)(46,"path",27)(47,"path",28)(48,"path",29)(49,"path",30)(50,"path",31),t.C$Y()()()(),t.gRP(),t.I0R(51,"div",32)(52,"h3",33),t.OEk(53,"Orari"),t.C$Y(),t.I0R(54,"div",34)(55,"div",35),t.OEk(56,"Luned\xec"),t.C$Y(),t.I0R(57,"div",36),t.OEk(58),t.C$Y(),t.I0R(59,"div",35),t.OEk(60,"Marted\xec"),t.C$Y(),t.I0R(61,"div",36),t.OEk(62),t.C$Y(),t.I0R(63,"div",35),t.OEk(64,"Mercoled\xec"),t.C$Y(),t.I0R(65,"div",36),t.OEk(66),t.C$Y(),t.I0R(67,"div",35),t.OEk(68,"Gioved\xec"),t.C$Y(),t.I0R(69,"div",36),t.OEk(70),t.C$Y(),t.I0R(71,"div",35),t.OEk(72,"Venerd\xec"),t.C$Y(),t.I0R(73,"div",36),t.OEk(74),t.C$Y(),t.I0R(75,"div",35),t.OEk(76,"Sabato"),t.C$Y(),t.I0R(77,"div",36),t.OEk(78),t.C$Y(),t.I0R(79,"div",35),t.OEk(80,"Domenica"),t.C$Y(),t.I0R(81,"div",36),t.OEk(82),t.C$Y()()(),t.I0R(83,"div",37),t.wR5(84,"iframe",38),t.C$Y()(),t.I0R(85,"div",39),t.OEk(86,"Sospiri S.A.S. P.iva: 03780730275 N\xb0 REA: VE - 337943"),t.C$Y(),t.I0R(87,"div",40),t.OEk(88," \xa9 2024 Copyright: "),t.I0R(89,"a",41),t.OEk(90,"Privacy"),t.C$Y(),t.OEk(91," - "),t.I0R(92,"a",42),t.OEk(93,"Terms of Use "),t.C$Y(),t.OEk(94," - "),t.I0R(95,"a",43),t.OEk(96,"Disclaimers"),t.C$Y()()),2&o&&(t.yG2(2),t.E7m("ngSrc","/assets/img/logo-partial-name-dark.svg")("width",250)("height",110.13),t.yG2(2),t.E7m("href","mailto:"+e.contact("email"),t.K6U),t.yG2(8),t.oRS(" ",e.contact("email"),""),t.yG2(2),t.E7m("href","tel:"+e.toLink(e.contact("phone")),t.K6U),t.yG2(8),t.oRS(" ",e.contact("phone"),""),t.yG2(2),t.E7m("href",e.contact("whatsapp_url"),t.K6U),t.yG2(8),t.E7m("href",e.contact("instagram_url"),t.K6U),t.yG2(6),t.E7m("href",e.contact("facebook_url"),t.K6U),t.yG2(3),t.E7m("href",e.contact("tripadvisor_url"),t.K6U),t.yG2(17),t.cNF(e.message("openings_monday")),t.yG2(4),t.cNF(e.message("openings_tuesday")),t.yG2(4),t.cNF(e.message("openings_wednesday")),t.yG2(4),t.cNF(e.message("openings_thursday")),t.yG2(4),t.cNF(e.message("openings_friday")),t.yG2(4),t.cNF(e.message("openings_saturday")),t.yG2(4),t.cNF(e.message("openings_sunday")))},dependencies:[P.w,P.C,c.ys,r.qL,h.ER],styles:["[_nghost-%COMP%]{background-color:var(--fourth-color);display:block}"],changeDetection:0})}(0,B.UN)([G.w7],k.prototype,"contact",null),(0,B.UN)([G.w7],k.prototype,"toLink",null),(0,B.UN)([G.w7],k.prototype,"message",null);let H=(()=>{class i{constructor(){this.PublicPagesDataService=(0,t.uUt)(w.s)}static#t=this.\u0275fac=function(e){return new(e||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-home-layout"]],standalone:!0,features:[t.UHJ],decls:3,vars:0,template:function(e,s){1&e&&t.wR5(0,"app-public-navbar")(1,"router-outlet")(2,"app-public-footer")},dependencies:[h.cP,Y,k]})}return i})()},8256:(y,O,n)=>{function t(r,p){return r.error?.message?r.error.message:500==r.status?`${r.error.error} ${r.error.exception}`.replace(/\</gm,"").replace(/\>+/gm,""):504==r.status?"Server unreachable, check your connection and try again.":h(function c(r){if("object"==typeof r.error&&"object"==typeof r.error.details&&Array.isArray(r.error.details)&&r.error.details.length>0){const p=r.error.details.filter(a=>"object"==typeof a&&null!=a&&a instanceof Object&&Object.keys(a).length>0).filter(a=>"string"==typeof a.attribute&&a.attribute.length>0&&("string"==typeof a.message&&a.message.length>0||Array.isArray(a.message)&&a.message.length>0));if(p.length>0)return p}return[]}(r),p)}function h(r,p){if(0==r.length)return null;const a=p?.joinChar??", ",v=r.map(g=>`${g.attribute} ${g.message}`);return v.length?function f(r){return[...new Set(r)]}(v).join(a):null}n.d(O,{Yj:()=>h,mk:()=>t})},8392:(y,O,n)=>{n.d(O,{a:()=>t});const t="Something went wrong."},1676:(y,O,n)=>{n.d(O,{s:()=>R});var t=n(4496),h=n(6772),f=n(4388),c=n(7048),r=n(8256),p=n(8392),a=n(6700),v=n(4704),g=n(9212);function P(d){if(null==d)return null;if("object"==typeof d)return d;if(!("string"==typeof d&&d.length>0))return null;try{return JSON.parse(d)}catch{}return null}let R=(()=>{class d extends h.A{constructor(){super("public_data"),this.notifications=(0,t.uUt)(f.E),this.data$=new a.g(null),this.messages=(0,t.OCB)(null),this.messages$=this.data$.pipe((0,v.k)(l=>"object"==typeof l&&null!==l?P(l.public_messages):null),(0,g.y)(l=>this.messages.set(l))),this.contacts=(0,t.OCB)(null),this.contacts$=this.data$.pipe((0,v.k)(l=>"object"==typeof l&&null!==l?P(l.settings.email_contacts):null),(0,g.y)(l=>this.contacts.set(l))),this.load(),[this.contacts$,this.messages$].forEach(l=>{l.subscribe({error:L=>{console.warn("unexpected error",L)}})})}load(){this.http.get("").subscribe({next:l=>{this.data$.next(l)},error:l=>{this.notifications.error(l instanceof c.gj?(0,r.mk)(l):p.a)}})}static#t=this.\u0275fac=function(L){return new(L||d)};static#e=this.\u0275prov=t.wxM({token:d,factory:d.\u0275fac,providedIn:"root"})}return d})()},1512:(y,O,n)=>{n.d(O,{C:()=>x,w:()=>S});var t=n(4496),h=n(900),f=n(4392),c=n(4164),r=n(3480),p=n(4680),a=n(3972),v=n(5944),g=n(3412),P=n(4704),R=n(3656),d=n(1368);const b=["tuiLink",""];function l(u,E){if(1&u&&t.wR5(0,"tui-svg",3),2&u){const C=t.GaO();t.E7m("src",C.icon||"")}}function L(u,E){if(1&u&&t.wR5(0,"tui-svg",4),2&u){const C=t.GaO();t.E7m("src",C.icon||"")}}const A=["*"];let x=(()=>{class u{constructor(C,M,T){this.el=C,this.mode$=M,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,g.U)((0,h.Ax)(this.el.nativeElement,"focusin").pipe((0,P.k)(f.Ml)),(0,h.Ax)(this.el.nativeElement,"focusout").pipe((0,P.k)(f.so))),T.subscribe(N=>{this.focusVisible=N})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,c.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return u.\u0275fac=function(C){return new(C||u)(t.GI1(t.GMv),t.GI1(v.Yx),t.GI1(r.MF))},u.\u0275cmp=t.In1({type:u,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(C,M){1&C&&t.qCj("$.data-mode.attr",function(){return M.mode$}),2&C&&(t.e48("data-host-mode",M.mode),t.eAK("_pseudo",M.pseudo)("_icon-rotated",M.iconRotated)("_focus-visible",M.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,p.NK)(u),r.MF,r.UF,a.Ir])],attrs:b,ngContentSelectors:A,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(C,M){1&C&&(t.kPM(),t.yuY(0,l,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,L,1,1,"tui-svg",2)),2&C&&(t.E7m("ngIf",M.iconAlignLeft),t.yG2(3),t.E7m("ngIf",M.iconAlignRight))},dependencies:[R.Wu,d.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),u})(),S=(()=>{class u{}return u.\u0275fac=function(C){return new(C||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[d.MD,R.Yt]]}),u})()},2500:(y,O,n)=>{n.d(O,{i:()=>r,y:()=>p});var t=n(4496),h=n(3656),f=n(3840),c=n(1343);let r=(()=>{class a{constructor(g){this.svgOptions=g,this.staticPath=this.svgOptions.path("tuiIcon").replace("tuiIcon.svg#tuiIcon","").replace(`tuiIcon.svg${f._m}#tuiIcon`,"")}transform(g){if(!g)return null;switch(g){case c.q.BL:case c.q.BQ:case c.q.CW:case c.q.GF:case c.q.GP:case c.q.MF:case c.q.MQ:case c.q.NC:case c.q.RE:case c.q.YT:return`${this.staticPath}${c.q.FR}.png`;case c.q.SX:return`${this.staticPath}${c.q.NL}.png`;default:return`${this.staticPath}${g}.png`}}}return a.\u0275fac=function(g){return new(g||a)(t.GI1(h.iY,16))},a.\u0275pipe=t.UTH({name:"tuiFlag",type:a,pure:!0}),a})(),p=(()=>{class a{}return a.\u0275fac=function(g){return new(g||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({}),a})()}}]);