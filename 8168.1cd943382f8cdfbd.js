"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8168],{5328:(h,A,s)=>{s.r(A),s.d(A,{AdminLayoutComponent:()=>Q});var d=s(1368),e=s(4496),l=s(2100),c=s(1560),m=s(8016),_=s(466),g=s(8212),p=s(4336),$=s(4964),D=s(4388),L=s(8256),G=s(8392),P=s(968),x=s(5193);function k(n,C){if(1&n){const t=e.KQA();e.I0R(0,"tui-data-list")(1,"a",9),e.aS0(2,10),e.C$Y(),e.I0R(3,"button",11),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.logout())}),e.aS0(4,12),e.C$Y()()}}const y=n=>({rotate180:n});let b=(()=>{class n{constructor(){this.auth=(0,e.uUt)($.o),this.notification=(0,e.uUt)(D.E),this.injector=(0,e.uUt)(e.zZn),this.fullnameOrEmail=(0,e.OCB)(null)}set user(t){this.fullnameOrEmail.set(t?t.fullname&&t.fullname.length>0?t.fullname:t.email??null:null)}logout(){this.auth.logout().subscribe({next:()=>{(0,P.Q)(this.injector,!1)},error:t=>{this.notification.error((0,L.mk)(t)||G.a)}})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-navbar-user-badge"]],inputs:{user:"user"},standalone:!0,features:[e.UHJ],decls:12,vars:6,consts:()=>{let t,i,o;return t="" + "\ufffd0\ufffd" + "",i="Profilo",o="Esci",[["loginDropdownContent",""],[3,"tuiDropdownAlign","content"],["dropdown",""],[1,"flex","items-center"],[1,"flex","flex-col","items-end","me-3"],[1,"font-bold","text-lg","mb-1","text-slate-800"],t,[1,"text-slate-600",2,"font-size","50px","height","50px","width","50px"],[1,"animation-speed-2",3,"ngClass"],["routerLink","/admin/profile","tuiOption",""],i,["tuiOption","",3,"click"],o]},template:function(i,o){if(1&i&&(e.yuY(0,k,5,0,"ng-template",null,0,e.gJz),e.I0R(2,"tui-hosted-dropdown",1,2)(4,"span",3)(5,"span",4)(6,"span",5),e.aS0(7,6),e.C$Y()(),e.I0R(8,"mat-icon",7),e.OEk(9,"account_circle"),e.C$Y(),e.I0R(10,"mat-icon",8),e.OEk(11,"expand_more"),e.C$Y()()()),2&i){const a=e.Gew(1),r=e.Gew(3);e.yG2(2),e.E7m("tuiDropdownAlign","right")("content",a),e.yG2(5),e.oBb(o.fullnameOrEmail()),e.Ylm(7),e.yG2(3),e.E7m("ngClass",e.S45(4,y,r.open))}},dependencies:[d.QF,_.GE,_.Qw,x.oF,g.CI,c.qL,p.A$,p.yi,p.sP,l.ER]})}return n})();var M=s(3480),O=s(3616),f=s(1040),V=s(8780);let z=(()=>{class n{constructor(t,i){this.dialogs=t,this.context=i}created(t){this.context.completeWith(t)}cancelled(){this.context.completeWith(null)}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(m._k),e.GI1(f.C0))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-create-reservation-modal"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,consts:[[3,"created","cancelled"]],template:function(i,o){1&i&&(e.I0R(0,"app-create-reservation",0),e.qCj("created",function(r){return o.created(r)})("cancelled",function(){return o.cancelled()}),e.C$Y())},dependencies:[V.I],encapsulation:2})}return n})();var B=s(6800),w=s(4616);function U(n,C){if(1&n){const t=e.KQA();e.I0R(0,"button",35),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.triggerSidenav())}),e.I0R(1,"mat-icon"),e.OEk(2,"menu"),e.C$Y()()}}function Y(n,C){1&n&&(e.I0R(0,"a",6)(1,"span",1)(2,"mat-icon",36),e.OEk(3,"account_circle"),e.C$Y(),e.SAx(4),e.aS0(5,37),e.k70(),e.C$Y()())}function X(n,C){if(1&n&&e.wR5(0,"app-navbar-user-badge",38),2&n){const t=e.GaO();e.E7m("user",t.cu())}}function F(n,C){if(1&n){const t=e.KQA();e.I0R(0,"div",39),e.qCj("click",function(o){e.usT(t);const a=e.GaO();return e.CGJ(a.overlayClick(o))}),e.C$Y()}}const j=(n,C,t)=>({collapsed:n,expanded:C,"absolute top-0 bottom-0 z-20":t}),I=()=>({exact:!0}),S=n=>({hidden:n});let H=(()=>{class n{constructor(){this.profile=(0,e.uUt)(w.x),this.route=(0,e.uUt)(l.gV),this.router=(0,e.uUt)(l.E5),this.destroy$=(0,e.uUt)(M.UF),this.dialogs=(0,e.uUt)(m._k),this.injector=(0,e.uUt)(e.zZn),this.cu=this.profile.cu,this.isOpen=!1,this.showMenuButton=!1,this.isMobile=!1,this.router.events.pipe((0,O.a)(this.destroy$)).subscribe(t=>{t instanceof l.Qx&&this.isMobile&&this.closeSidenav()})}ngOnInit(){this.onResize()}onResize(){this.showMenuButton=window.innerWidth<1024,this.isMobile=window.innerWidth<1024,this.isOpen=!this.isMobile}triggerSidenav(){this.isOpen=!this.isOpen}overlayClick(t){this.closeSidenav()}closeSidenav(){this.isOpen=!1}fireCreateReservationModal(){this.dialogs.open(new f.WO(z,this.injector)).pipe((0,O.a)(this.destroy$)).subscribe({next:t=>{},error:t=>console.error(t)})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-admin-sidenav"]],hostBindings:function(i,o){1&i&&e.qCj("resize",function(){return o.onResize()},!1,e.MbM)},standalone:!0,features:[e.M5G([M.UF]),e.UHJ],decls:55,vars:28,consts:()=>{let t,i,o,a,r,E,N,v,T;return t="Dashboard",i="Prenotazioni",o="Menu",a="Menu tag",r="Ingredienti",E="Allergeni",N="Crea prenotazione",v="Impostazioni",T="Login",[[1,"bg-white","flex","flex-wrap","justify-between","sticky","top-0","shadow-sm","px-3","z-20"],[1,"flex","items-center"],["tuiIconButton","","appearance","icon","type","button"],["routerLink","/admin"],["src","assets/img/logo.png","alt","Lpda2",1,"max-h-[60px]"],[1,"me-2"],["routerLink","/auth","size","m","tuiButton","","appearance","outline"],[1,"flex","flex-row","h-full","overflow-hidden","relative"],["class","block fixed top-0 bottom-0 left-0 right-0 z-10","style","background-color: black; opacity: 0.4;"],[1,"flex","flex-col","justify-between","bg-slate-50","py-5","overflow-y-auto",3,"ngClass"],[1,"flex","flex-col"],["routerLink","/admin/",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive","routerLinkActiveOptions"],[1,"text-lg"],t,["routerLink","/admin/reservations",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive"],i,["routerLink","/admin/menu",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive","routerLinkActiveOptions"],["menuLink","routerLinkActive"],o,["routerLink","/admin/menu/tags",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuTagsLink","routerLinkActive"],[1,"ms-5","text-md"],a,["routerLink","/admin/menu/ingredients",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuIngredientsLink","routerLinkActive"],r,["routerLink","/admin/menu/allergens",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuAllergensLink","routerLinkActive"],E,[1,"cursor-pointer","bg-transparent","border-0","outline-0","flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"click"],N,[1,"w-1/2"],["routerLink","/admin/settings",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive"],v,[1,"grow","flex","flex-col","overflow-auto","md:p-3","lg:p-5","p-2"],["tuiIconButton","","appearance","icon","type","button",3,"click"],[1,"me-1"],T,[3,"user"],[1,"block","fixed","top-0","bottom-0","left-0","right-0","z-10",2,"background-color","black","opacity","0.4",3,"click"]]},template:function(i,o){if(1&i&&(e.I0R(0,"div",0)(1,"div",1),e.yuY(2,U,3,0,"button",2),e.I0R(3,"a",3),e.wR5(4,"img",4),e.C$Y()(),e.I0R(5,"div",1),e.wR5(6,"app-admin-language-switcher",5),e.yuY(7,Y,6,0,"a",6)(8,X,1,1),e.C$Y()(),e.I0R(9,"div",7),e.yuY(10,F,1,0,"div",8),e.I0R(11,"div",9)(12,"div",10)(13,"a",11)(14,"mat-icon",5),e.OEk(15,"dashboard"),e.C$Y(),e.I0R(16,"span",12),e.aS0(17,13),e.C$Y()(),e.I0R(18,"a",14)(19,"mat-icon",5),e.OEk(20,"menu_book"),e.C$Y(),e.I0R(21,"span",12),e.aS0(22,15),e.C$Y()(),e.I0R(23,"a",16,17)(25,"mat-icon",5),e.OEk(26,"restaurant"),e.C$Y(),e.I0R(27,"span",12),e.aS0(28,18),e.C$Y()(),e.I0R(29,"a",19,20)(31,"span",21),e.aS0(32,22),e.C$Y()(),e.I0R(33,"a",23,24)(35,"span",21),e.aS0(36,25),e.C$Y()(),e.I0R(37,"a",26,27)(39,"span",21),e.aS0(40,28),e.C$Y()()(),e.I0R(41,"div",10)(42,"button",29),e.qCj("click",function(){return o.fireCreateReservationModal()}),e.I0R(43,"mat-icon",5),e.OEk(44,"add_circle"),e.C$Y(),e.I0R(45,"span",12),e.aS0(46,30),e.C$Y()(),e.wR5(47,"hr",31),e.I0R(48,"a",32)(49,"mat-icon",5),e.OEk(50,"settings"),e.C$Y(),e.I0R(51,"span",12),e.aS0(52,33),e.C$Y()()()(),e.I0R(53,"div",34),e.wR5(54,"router-outlet"),e.C$Y()()),2&i){const a=e.Gew(24),r=e.Gew(30),E=e.Gew(34),N=e.Gew(38);e.yG2(2),e.C0Y(2,o.showMenuButton?2:-1),e.yG2(5),e.C0Y(7,null==o.cu()?7:8),e.yG2(3),e.C0Y(10,o.isMobile&&o.isOpen?10:-1),e.yG2(),e.E7m("ngClass",e.uAc(16,j,!o.isOpen,o.isOpen,o.isMobile)),e.yG2(2),e.E7m("routerLinkActive","bg-slate-100 active-link")("routerLinkActiveOptions",e.q4q(20,I)),e.yG2(5),e.E7m("routerLinkActive","bg-slate-100 active-link"),e.yG2(5),e.E7m("routerLinkActive","bg-slate-100 active-link")("routerLinkActiveOptions",e.q4q(21,I)),e.yG2(6),e.E7m("ngClass",e.S45(22,S,!(a.isActive||r.isActive||E.isActive||N.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(24,S,!(a.isActive||r.isActive||E.isActive||N.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(26,S,!(a.isActive||r.isActive||E.isActive||N.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(11),e.E7m("routerLinkActive","bg-slate-100 active-link")}},dependencies:[d.MD,d.QF,l.cP,l.qQ,l.ER,l.LC,c.qL,_.GE,g.CI,g.Kw,c.oB,p.A$,b,B.y],styles:["[_nghost-%COMP%]{--blue: rgb(75, 75, 163);display:flex;flex-direction:column;height:100vh}[_nghost-%COMP%]   .active-link[_ngcontent-%COMP%]{box-shadow:inset 4px 0 var(--blue);color:var(--blue);font-weight:700}[_nghost-%COMP%]   .expanded[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_expand .75s}[_nghost-%COMP%]   .collapsed[_ngcontent-%COMP%]{max-width:1px}@keyframes _ngcontent-%COMP%_expand{0%{max-width:1px}to{max-width:1000px}}"]})}return n})(),Q=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-admin-layout"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,template:function(i,o){1&i&&e.wR5(0,"app-admin-sidenav")},dependencies:[d.MD,H]})}return n})()},7364:(h,A,s)=>{s.d(A,{e:()=>l});var d=s(4496);const e={it:"Italiano",en:"English",fr:"French",de:"German",es:"Spanish",pt:"Portuguese",ru:"Russian",zh:"Chinese"};let l=(()=>{class c{transform(_){return"string"==typeof _&&_.length>0?e[_]??_:"unknown"}static#e=this.\u0275fac=function(g){return new(g||c)};static#t=this.\u0275pipe=d.UTH({name:"language",type:c,pure:!0,standalone:!0})}return c})()}}]);