"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9656],{9656:(T,O,a)=>{a.r(O),a.d(O,{HomeLayoutComponent:()=>H});var e=a(4496),_=a(1236),m=a(3480),s=a(1368),h=a(1560),v=a(466),c=a(8212),g=a(4336),u=a(2500),f=a(1512),R=a(5657),M=a(3616),N=a(3724);let b=(()=>{class i{static#e=this.\u0275fac=function(n){return new(n||i)};static#n=this.\u0275mod=e.a4G({type:i});static#t=this.\u0275inj=e.s3X({})}return i})();var S=a(3468);let $=(()=>{class i{constructor(){this.isOpen=!1,this.active=!1,this.defaults={upper:"M 3.38361 6.14771 H 21.3836",middle:"M 3.38361 12.1477 H 21.3836",lower:"M3.38361 18.1477H21.3836"},this.upperD=this.defaults.upper,this.middleD=this.defaults.middle,this.lowerD=this.defaults.lower,this.hovering=!1}onHover(){this.hovering=!0}onLeave(){this.hovering=!1}static#e=this.\u0275fac=function(n){return new(n||i)};static#n=this.\u0275cmp=e.In1({type:i,selectors:[["app-menu-icon"]],hostVars:8,hostBindings:function(n,o){1&n&&e.qCj("mouseenter",function(){return o.onHover()})("mouseleave",function(){return o.onLeave()}),2&n&&(e.m4B("--color",o.color),e.eAK("open",o.isOpen)("active",o.active)("hovering",o.hovering))},inputs:{isOpen:"isOpen",active:"active",color:"color"},decls:4,vars:3,consts:[["viewBox","0 0 24 24","xmlns","http://www.w3.org/2000/svg"],["id","upper"],["id","middle"],["id","lower"]],template:function(n,o){1&n&&(e.S2Z(),e.I0R(0,"svg",0),e.wR5(1,"path",1)(2,"path",2)(3,"path",3),e.C$Y()),2&n&&(e.yG2(),e.e48("d",o.upperD),e.yG2(),e.e48("d",o.middleD),e.yG2(),e.e48("d",o.lowerD))},styles:["[_nghost-%COMP%]{--color: var(--first-color);--active-color: var(--first-color)}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{display:block;width:24px;height:24px;fill:none}[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--color, var(--app-secondary-text-color));stroke:var(--color, var(--app-secondary-text-color));stroke-width:2;stroke-linecap:round;stroke-linejoin:round;transition:all .25s ease}.hovering[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .active[_nghost-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--active-color, var(--app-secondary-text-color));stroke:var(--active-color, var(--app-secondary-text-color))}[_nghost-%COMP%]:not(.open)   #middle[_ngcontent-%COMP%]{transform:rotateY(45deg)}[_nghost-%COMP%]:not(.open).hovering   #middle[_ngcontent-%COMP%], [_nghost-%COMP%]:not(.open).active   #middle[_ngcontent-%COMP%]{transform:rotateY(0)}.open[_nghost-%COMP%]   #upper[_ngcontent-%COMP%]{transform:rotate(45deg);transform-origin:50% 50%}.open[_nghost-%COMP%]   #middle[_ngcontent-%COMP%]{transform:rotate(-45deg);transform-origin:50% 50%}.open[_nghost-%COMP%]   #lower[_ngcontent-%COMP%]{transform:rotate(45deg);transform-origin:50% 50%}"]})}return i})();const A=["navbar"],B=["navbarLinks"];function G(i,r){if(1&i){const t=e.KQA();e.SAx(0),e.I0R(1,"button",42),e.qCj("click",function(){e.usT(t);const o=e.GaO().$implicit,l=e.GaO(3);return e.CGJ(l.changePath(o.code))}),e.I0R(2,"span",43),e.wR5(3,"span",44)(4,"img",39),e.wVc(5,"tuiFlag"),e.C$Y()(),e.k70()}if(2&i){const t=e.GaO().$implicit;e.yG2(3),e.E7m("innerText",t.name),e.yG2(),e.E7m("src",e.kDX(5,2,t.iso),e.K6U)}}function x(i,r){if(1&i&&(e.SAx(0),e.yuY(1,G,6,4,"ng-container",41),e.k70()),2&i){const t=r.$implicit,n=e.GaO(3);e.yG2(),e.E7m("ngIf",t.iso!=n.currentLanguage().iso)}}function U(i,r){if(1&i&&(e.I0R(0,"tui-data-list"),e.yuY(1,x,2,1,"ng-container",40),e.C$Y()),2&i){const t=e.GaO(2);e.yG2(),e.E7m("ngForOf",t.languages)}}function w(i,r){if(1&i&&(e.yuY(0,U,2,1,"ng-template",null,36,e.gJz),e.I0R(2,"tui-hosted-dropdown",37)(3,"button",38),e.wR5(4,"img",39),e.wVc(5,"tuiFlag"),e.C$Y()()),2&i){const t=e.Gew(1),n=e.GaO();e.yG2(2),e.E7m("content",t),e.yG2(2),e.E7m("src",e.kDX(5,2,n.currentLanguage().iso),e.K6U)}}function Y(i,r){1&i&&e.C_f(0)}const I=()=>({exact:!0}),F=i=>({open:i}),V=()=>({"max-height":"350px",height:"50%"});let z=(()=>{class i{get isMenuOpen(){return this._isMenuOpen}set isMenuOpen(t){this._isMenuOpen=t,this.isMenuOpenChange$.next(t),this.updateLinksTop()}constructor(t,n){this.router=t,this.configs=n,this.destroy$=new R.E,this.isMenuOpenChange$=new R.E,this._isMenuOpen=!1,this.scrolled=(0,e.OCB)(!1),this.languages=[{name:"Italiano",code:"it",iso:N.q.IT},{name:"English",code:"en",iso:N.q.US}],this.currentLanguage=(0,e.OCB)(this.languages[0]),this.isMenuOpenChange$.pipe((0,M.a)(this.destroy$)).subscribe(o=>{this.updateBodyClass()}),n.locale$.pipe((0,M.a)(this.destroy$)).subscribe(o=>{this.localeId=o,this.updateCurrentLanguage()}),this.router.events.pipe((0,M.a)(this.destroy$)).subscribe(()=>{this.isMenuOpen=!1,this.updateCurrentLanguage()})}ngOnInit(){}changePath(t){location.replace(`/${t}/#${this.router.url}`)}onResize(t){this.isMenuOpen=!1,this.updateLinksTop()}onScroll(t){this.scrolled.set(window.scrollY>0)}ngAfterViewInit(){this.updateLinksTop()}triggerMenu(){this.isMenuOpen=!this.isMenuOpen}updateCurrentLanguage(){this.localeId&&this.currentLanguage.set(this.getCurrentLanguage())}updateLinksTop(){if(!this.navbar||!this.navbarLinks)return;const t=window.getComputedStyle(this.navbar.nativeElement,null).getPropertyValue("padding-bottom"),n=this.navbar.nativeElement.offsetHeight-parseInt(t);this.navbarLinks.nativeElement.style.top=`${n}px`}getCurrentLanguage(){if(!this.localeId)return this.languages[0];const t=this.localeId.split("-")[0];return this.languages.find(n=>n.code===t)||this.languages[0]}updateBodyClass(){this.isMenuOpen?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}static#e=this.\u0275fac=function(n){return new(n||i)(e.GI1(_.E5),e.GI1(S.m))};static#n=this.\u0275cmp=e.In1({type:i,selectors:[["app-public-navbar"]],viewQuery:function(n,o){if(1&n&&(e.CC$(A,7),e.CC$(B,7)),2&n){let l;e.wto(l=e.Gqi())&&(o.navbar=l.first),e.wto(l=e.Gqi())&&(o.navbarLinks=l.first)}},hostBindings:function(n,o){1&n&&e.qCj("resize",function(p){return o.onResize(p)},!1,e.MbM)("scroll",function(p){return o.onScroll(p)},!1,e.MbM)},standalone:!0,features:[e.M5G([m.UF]),e.UHJ],decls:48,vars:18,consts:()=>{let t,n,o,l,p,y,k;return t="Prenota ora",n="Prenota ora",o="Men\xF9",l="Chi siamo",p="Home",y="Men\xF9",k="Chi siamo",[["langSelectTemp",""],[1,"placeholder"],[1,"navbar","|","fixed","w-full","z-20","top-0","start-0"],["navbar",""],[1,"max-w-screen-xl","flex","flex-wrap","items-center","justify-between","mx-auto","px-4","py-2"],["routerLink","/",1,"flex","items-center","space-x-3","rtl:space-x-reverse"],["src","assets/img/logo-partial-building.svg","alt","Logo",1,"block","sm:hidden","h-[52px]"],["src","assets/img/logo.png","alt","Logo",1,"hidden","sm:block","h-[52px]"],[1,"flex","items-center","md:order-2","space-x-3","md:space-x-0","rtl:space-x-reverse"],[4,"ngTemplateOutlet"],[1,"hidden","md:inline-block"],["tuiButton","","size","m","appearance","custom","routerLink","/reserve",1,"btn-primary","text-base"],t,[1,"inline-block","md:hidden"],["tuiButton","","size","s","appearance","custom","routerLink","/reserve",1,"btn-primary","text-base"],n,[1,"block","md:hidden"],["size","m","appearance","outline","tuiIconButton","",3,"click"],[3,"isOpen"],["id","navbar-sticky",1,"items-center","justify-between","hidden","w-full","md:flex","md:w-auto","md:order-1"],[1,"navbar-links","|","flex","flex-col","p-4","md:p-0","mt-4","font-medium","border","border-gray-100","rounded-lg","bg-gray-50","md:space-x-8","rtl:space-x-reverse","md:flex-row","md:mt-0","md:border-0","md:bg-white","dark:bg-gray-800","md:dark:bg-gray-900","dark:border-gray-700"],["tuiLink","","routerLink","/","aria-current","page",1,"block","py-2","px-3","text-base",3,"routerLinkActive","routerLinkActiveOptions"],[1,"text-lg"],["tuiLink","","routerLink","/menu",1,"block","py-2","px-3","text-base",3,"routerLinkActive"],o,["tuiLink","","routerLink","/about",1,"block","py-2","px-3","text-base",3,"routerLinkActive"],l,[1,"fullsize-navbar-links","|","items-center","flex","md:hidden","flex-col","px-3",3,"ngClass"],["navbarLinks",""],[1,"content-around","flex","flex-col","items-center","my-auto"],["tuiLink","","routerLink","/",1,"simple-link",3,"routerLinkActive","routerLinkActiveOptions"],p,["tuiLink","","routerLink","/menu",1,"simple-link",3,"routerLinkActive"],y,["tuiLink","","routerLink","/about",1,"simple-link",3,"routerLinkActive"],k,["dataList",""],[3,"content"],["tuiIconButton","","appearance","custom","size","m",1,"md:me-2"],[1,"flag",3,"src"],[4,"ngFor","ngForOf"],[4,"ngIf"],["tuiOption","",3,"click"],[1,"d-flex","flex-row","align-items-center"],[1,"me-1",3,"innerText"]]},template:function(n,o){if(1&n&&(e.yuY(0,w,6,4,"ng-template",null,0,e.gJz),e.I0R(2,"div",1),e.OEk(3,"."),e.C$Y(),e.I0R(4,"nav",2,3)(6,"div",4)(7,"a",5),e.wR5(8,"img",6)(9,"img",7),e.C$Y(),e.I0R(10,"div",8),e.yuY(11,Y,1,0,"ng-container",9),e.I0R(12,"span",10)(13,"a",11),e.SAx(14),e.aS0(15,12),e.k70(),e.C$Y()(),e.I0R(16,"span",13)(17,"a",14),e.SAx(18),e.aS0(19,15),e.k70(),e.C$Y()(),e.I0R(20,"div",16)(21,"button",17),e.qCj("click",function(){return o.triggerMenu()}),e.wR5(22,"app-menu-icon",18),e.C$Y()()(),e.I0R(23,"div",19)(24,"ul",20)(25,"li")(26,"a",21)(27,"span",22),e.OEk(28,"Home"),e.C$Y()()(),e.I0R(29,"li")(30,"a",23)(31,"span",22),e.aS0(32,24),e.C$Y()()(),e.I0R(33,"li")(34,"a",25)(35,"span",22),e.aS0(36,26),e.C$Y()()()()()()(),e.I0R(37,"div",27,28)(39,"div",29)(40,"a",30),e.aS0(41,31),e.C$Y(),e.I0R(42,"a",32),e.SAx(43),e.aS0(44,33),e.k70(),e.C$Y(),e.I0R(45,"a",34),e.SAx(46),e.aS0(47,35),e.k70(),e.C$Y()()()),2&n){const l=e.Gew(1);e.yG2(11),e.E7m("ngTemplateOutlet",l),e.yG2(11),e.E7m("isOpen",o.isMenuOpen),e.yG2(4),e.E7m("routerLinkActive","active")("routerLinkActiveOptions",e.q4q(13,I)),e.yG2(4),e.E7m("routerLinkActive","active"),e.yG2(4),e.E7m("routerLinkActive","active"),e.yG2(3),e.E7m("ngClass",e.S45(14,F,o.isMenuOpen)),e.yG2(2),e.m_g(e.q4q(16,V)),e.yG2(),e.E7m("routerLinkActive","active")("routerLinkActiveOptions",e.q4q(17,I)),e.yG2(2),e.E7m("routerLinkActive","active"),e.yG2(3),e.E7m("routerLinkActive","active")}},dependencies:[s.MD,s.QF,s.ay,s.u_,s.XV,_.qQ,_.ER,_.LC,v.GE,v.Qw,c.CI,c.Kw,h.oB,g.A$,g.yi,g.sP,b,$,u.y,u.i,f.w,f.C],styles:["[_nghost-%COMP%]{--navbar-height: 70px;--navbar-color: #f8f9fa}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%], [_nghost-%COMP%]   .placeholder[_ngcontent-%COMP%]{height:var(--navbar-height)}[_nghost-%COMP%]   .navbar[_ngcontent-%COMP%], [_nghost-%COMP%]   .navbar-links[_ngcontent-%COMP%], [_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]{background-color:var(--navbar-color)}[_nghost-%COMP%]   .placeholder[_ngcontent-%COMP%]{height:var(--navbar-height);display:block}[_nghost-%COMP%]   img.flag[_ngcontent-%COMP%]{max-height:25px}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]{opacity:.9;transition:max-height .5s linear;position:fixed;z-index:100;inset:100px 0 0;overflow:hidden;max-height:0}[_nghost-%COMP%]   .fullsize-navbar-links.open[_ngcontent-%COMP%]{max-height:100vh}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]   .colored-transition[_ngcontent-%COMP%]{color:var(--app-secondary-text-color);transition:color .5s ease}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]   .colored-transition[_ngcontent-%COMP%]:hover{color:var(--app-main-text-color)}[_nghost-%COMP%]   .fullsize-navbar-links[_ngcontent-%COMP%]   .simple-link[_ngcontent-%COMP%]{margin-bottom:3rem;display:flex;font-size:1.25rem;text-decoration:none}"],changeDetection:0})}return i})();var E=a(1316),L=a(1676),P=a(9392),D=a(7184);class d{constructor(){this.public=(0,e.uUt)(L.s),this.destroy$=(0,e.uUt)(m.UF),this.contacts=this.public.contacts,this.messages=this.public.messages}contact(r){const t=this.contacts();return t?t[r]??null:null}toLink(r){return r?r.replace(/\s+/g,""):""}message(r){const t=this.messages();return t?t[r]??null:null}static#e=this.\u0275fac=function(t){return new(t||d)};static#n=this.\u0275cmp=e.In1({type:d,selectors:[["app-public-footer"]],standalone:!0,features:[e.M5G([m.UF]),e.UHJ],decls:83,vars:22,consts:()=>{let r,t,n;return r="Invia un email a",t="Chiamaci al",n="Scrivici su Whatsapp!",[[1,"grid","grid-cols-1","md:grid-cols-2","xl:grid-cols-3","p-12"],[1,"mb-8","flex","flex-col","items-start","fit-content","mx-auto"],["alt","La Porta d'acqua",1,"mb-3",3,"ngSrc","width","height"],[1,"mb-3"],["target","_blank","tuiLink","",1,"dark-link",3,"href"],[1,"flex","items-center"],[1,"text-lg","flex","items-center"],[1,"inline-block","me-2"],[1,"inline-block"],r,t,[3,"name"],[1,"text-lg"],[1,"block"],n,[1,"flex","items-center","justify-around","w-full"],[1,"w-fit","mx-auto","mb-8"],[1,"text-2xl","block","mb-3","text-center"],[1,"grid","grid-cols-2","text-xl","overflow-hidden"],[1,"me-2","text-end","w-fit"],[1,"w-fit"],[1,"col-span-1","md:col-span-2","xl:col-span-1"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2799.614772347502!2d12.331580915828495!3d45.437266343260816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477eb1db193f1f51%3A0x8852e3e79481a8b5!2sLa%20Porta%20d'Acqua%20-%20Restaurant%20On%20Grand%20Canal!5e0!3m2!1sit!2sit!4v1607717626810!5m2!1sit!2sit","width","100%","height","100%","frameborder","0","allowfullscreen","","aria-hidden","false","tabindex","0 ",1,"my-auto"],[1,"block","mb-3","text-lg","text-center"],[1,"block","pb-5","text-lg","text-center"],["tuiLink","","routerLink","/privacy",1,"dark-link"],["tuiLink","","routerLink","/terms",1,"dark-link"],["tuiLink","","routerLink","/disclaimers",1,"dark-link"]]},template:function(t,n){1&t&&(e.I0R(0,"div",0)(1,"div",1),e.wR5(2,"img",2),e.I0R(3,"div",3)(4,"a",4)(5,"div",5)(6,"div",6)(7,"mat-icon",7),e.OEk(8,"mail"),e.C$Y(),e.I0R(9,"span",8),e.SAx(10),e.aS0(11,9),e.k70(),e.OEk(12),e.C$Y()()()()(),e.I0R(13,"div",3)(14,"a",4)(15,"div",5)(16,"div",6)(17,"mat-icon",7),e.OEk(18,"phone"),e.C$Y(),e.I0R(19,"span",8),e.SAx(20),e.aS0(21,10),e.k70(),e.OEk(22),e.C$Y()()()()(),e.I0R(23,"div",3)(24,"a",4)(25,"div",5),e.wR5(26,"app-icon",11),e.I0R(27,"div",12)(28,"span",13),e.aS0(29,14),e.C$Y()()()()(),e.I0R(30,"div",15)(31,"a",4),e.wR5(32,"app-icon",11),e.C$Y(),e.I0R(33,"a",4),e.wR5(34,"app-icon",11),e.C$Y(),e.I0R(35,"a",4),e.wR5(36,"app-icon",11),e.C$Y()()(),e.I0R(37,"div",16)(38,"h3",17),e.OEk(39,"Orari"),e.C$Y(),e.I0R(40,"div",18)(41,"div",19),e.OEk(42,"Luned\xec"),e.C$Y(),e.I0R(43,"div",20),e.OEk(44),e.C$Y(),e.I0R(45,"div",19),e.OEk(46,"Marted\xec"),e.C$Y(),e.I0R(47,"div",20),e.OEk(48),e.C$Y(),e.I0R(49,"div",19),e.OEk(50,"Mercoled\xec"),e.C$Y(),e.I0R(51,"div",20),e.OEk(52),e.C$Y(),e.I0R(53,"div",19),e.OEk(54,"Gioved\xec"),e.C$Y(),e.I0R(55,"div",20),e.OEk(56),e.C$Y(),e.I0R(57,"div",19),e.OEk(58,"Venerd\xec"),e.C$Y(),e.I0R(59,"div",20),e.OEk(60),e.C$Y(),e.I0R(61,"div",19),e.OEk(62,"Sabato"),e.C$Y(),e.I0R(63,"div",20),e.OEk(64),e.C$Y(),e.I0R(65,"div",19),e.OEk(66,"Domenica"),e.C$Y(),e.I0R(67,"div",20),e.OEk(68),e.C$Y()()(),e.I0R(69,"div",21),e.wR5(70,"iframe",22),e.C$Y()(),e.I0R(71,"div",23),e.OEk(72,"Sospiri S.A.S. P.iva: 03780730275 N\xb0 REA: VE - 337943"),e.C$Y(),e.I0R(73,"div",24),e.OEk(74," \xa9 2024 Copyright: "),e.I0R(75,"a",25),e.OEk(76,"Privacy"),e.C$Y(),e.OEk(77," - "),e.I0R(78,"a",26),e.OEk(79,"Terms of Use "),e.C$Y(),e.OEk(80," - "),e.I0R(81,"a",27),e.OEk(82,"Disclaimers"),e.C$Y()()),2&t&&(e.yG2(2),e.E7m("ngSrc","/assets/img/logo-partial-name-dark.svg")("width",250)("height",110.13),e.yG2(2),e.E7m("href","mailto:"+n.contact("email"),e.K6U),e.yG2(8),e.oRS(" ",n.contact("email"),""),e.yG2(2),e.E7m("href","tel:"+n.toLink(n.contact("phone")),e.K6U),e.yG2(8),e.oRS(" ",n.contact("phone"),""),e.yG2(2),e.E7m("href",n.contact("whatsapp_url"),e.K6U),e.yG2(2),e.E7m("name","whatsapp-svg"),e.yG2(5),e.E7m("href",n.contact("instagram_url"),e.K6U),e.yG2(),e.E7m("name","instagram-svg"),e.yG2(),e.E7m("href",n.contact("facebook_url"),e.K6U),e.yG2(),e.E7m("name","facebook-svg"),e.yG2(),e.E7m("href",n.contact("tripadvisor_url"),e.K6U),e.yG2(),e.E7m("name","tripadvisor-svg"),e.yG2(8),e.cNF(n.message("openings_monday")),e.yG2(4),e.cNF(n.message("openings_tuesday")),e.yG2(4),e.cNF(n.message("openings_wednesday")),e.yG2(4),e.cNF(n.message("openings_thursday")),e.yG2(4),e.cNF(n.message("openings_friday")),e.yG2(4),e.cNF(n.message("openings_saturday")),e.yG2(4),e.cNF(n.message("openings_sunday")))},dependencies:[f.w,f.C,s.ys,h.qL,_.ER,D.g],styles:["[_nghost-%COMP%]{background-color:var(--fourth-color);display:block}"],changeDetection:0})}(0,E.UN)([P.w7],d.prototype,"contact",null),(0,E.UN)([P.w7],d.prototype,"toLink",null),(0,E.UN)([P.w7],d.prototype,"message",null);let H=(()=>{class i{constructor(){this.PublicPagesDataService=(0,e.uUt)(L.s)}static#e=this.\u0275fac=function(n){return new(n||i)};static#n=this.\u0275cmp=e.In1({type:i,selectors:[["app-home-layout"]],standalone:!0,features:[e.UHJ],decls:3,vars:0,template:function(n,o){1&n&&e.wR5(0,"app-public-navbar")(1,"router-outlet")(2,"app-public-footer")},dependencies:[_.cP,z,d]})}return i})()},2500:(T,O,a)=>{a.d(O,{i:()=>h,y:()=>v});var e=a(4496),_=a(3656),m=a(3840),s=a(3724);let h=(()=>{class c{constructor(u){this.svgOptions=u,this.staticPath=this.svgOptions.path("tuiIcon").replace("tuiIcon.svg#tuiIcon","").replace(`tuiIcon.svg${m._m}#tuiIcon`,"")}transform(u){if(!u)return null;switch(u){case s.q.BL:case s.q.BQ:case s.q.CW:case s.q.GF:case s.q.GP:case s.q.MF:case s.q.MQ:case s.q.NC:case s.q.RE:case s.q.YT:return`${this.staticPath}${s.q.FR}.png`;case s.q.SX:return`${this.staticPath}${s.q.NL}.png`;default:return`${this.staticPath}${u}.png`}}}return c.\u0275fac=function(u){return new(u||c)(e.GI1(_.iY,16))},c.\u0275pipe=e.UTH({name:"tuiFlag",type:c,pure:!0}),c})(),v=(()=>{class c{}return c.\u0275fac=function(u){return new(u||c)},c.\u0275mod=e.a4G({type:c}),c.\u0275inj=e.s3X({}),c})()}}]);