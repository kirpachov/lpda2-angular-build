"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8168],{5328:(T,g,s)=>{s.r(g),s.d(g,{AdminLayoutComponent:()=>Q});var E=s(1368),e=s(4496),r=s(1236),_=s(1560),M=s(8016),c=s(466),p=s(8212),A=s(4336),$=s(4964),D=s(1128),L=s(8256),k=s(8392),x=s(968),y=s(5193);function G(n,N){if(1&n){const t=e.KQA();e.I0R(0,"tui-data-list")(1,"a",8),e.aS0(2,9),e.C$Y(),e.I0R(3,"button",10),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.logout())}),e.aS0(4,11),e.C$Y()()}}const P=n=>({rotate180:n});let b=(()=>{class n{constructor(){this.auth=(0,e.uUt)($.o),this.notification=(0,e.uUt)(D.E),this.injector=(0,e.uUt)(e.zZn),this.fullnameOrEmail=(0,e.OCB)(null)}set user(t){this.fullnameOrEmail.set(t?t.fullname&&t.fullname.length>0?t.fullname:t.email??null:null)}logout(){this.auth.logout().subscribe({next:()=>{(0,x.Q)(this.injector,!1)},error:t=>{this.notification.error((0,L.mk)(t)||k.a)}})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-navbar-user-badge"]],inputs:{user:"user"},standalone:!0,features:[e.UHJ],decls:12,vars:6,consts:()=>{let t,i;return t="Profile",i="Go out",[["loginDropdownContent",""],[3,"tuiDropdownAlign","content"],["dropdown",""],[1,"flex","items-center"],[1,"flex","flex-col","items-end","me-3"],[1,"font-bold","text-lg","mb-1","text-slate-800"],[1,"text-slate-600",2,"font-size","50px","height","50px","width","50px"],[1,"animation-speed-2",3,"ngClass"],["routerLink","/admin/profile","tuiOption",""],t,["tuiOption","",3,"click"],i]},template:function(i,o){if(1&i&&(e.yuY(0,G,5,0,"ng-template",null,0,e.gJz),e.I0R(2,"tui-hosted-dropdown",1,2)(4,"span",3)(5,"span",4)(6,"span",5),e.OEk(7),e.C$Y()(),e.I0R(8,"mat-icon",6),e.OEk(9,"account_circle"),e.C$Y(),e.I0R(10,"mat-icon",7),e.OEk(11,"expand_more"),e.C$Y()()()),2&i){const a=e.Gew(1),l=e.Gew(3);e.yG2(2),e.E7m("tuiDropdownAlign","right")("content",a),e.yG2(5),e.cNF(o.fullnameOrEmail()),e.yG2(3),e.E7m("ngClass",e.S45(4,P,l.open))}},dependencies:[E.QF,c.GE,c.Qw,y.oF,p.CI,_.qL,A.A$,A.yi,A.sP,r.ER]})}return n})();var S=s(3480),O=s(3616),f=s(1040),z=s(8780);let V=(()=>{class n{constructor(t,i){this.dialogs=t,this.context=i}created(t){this.context.completeWith(t)}cancelled(){this.context.completeWith(null)}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(M._k),e.GI1(f.C0))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-create-reservation-modal"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,consts:[[3,"created","cancelled"]],template:function(i,o){1&i&&(e.I0R(0,"app-create-reservation",0),e.qCj("created",function(l){return o.created(l)})("cancelled",function(){return o.cancelled()}),e.C$Y())},dependencies:[z.I],encapsulation:2})}return n})();var w=s(6532),Y=s(4616);function B(n,N){if(1&n){const t=e.KQA();e.I0R(0,"button",36),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.triggerSidenav())}),e.I0R(1,"mat-icon"),e.OEk(2,"menu"),e.C$Y()()}}function U(n,N){1&n&&(e.I0R(0,"a",6)(1,"span",1)(2,"mat-icon",37),e.OEk(3,"account_circle"),e.C$Y(),e.SAx(4),e.aS0(5,38),e.k70(),e.C$Y()())}function X(n,N){if(1&n&&e.wR5(0,"app-navbar-user-badge",39),2&n){const t=e.GaO();e.E7m("user",t.cu())}}function j(n,N){if(1&n){const t=e.KQA();e.I0R(0,"div",40),e.qCj("click",function(o){e.usT(t);const a=e.GaO();return e.CGJ(a.overlayClick(o))}),e.C$Y()}}const F=(n,N,t,i)=>({collapsed:n,expanded:N,"absolute top-0 bottom-0 z-20":t,"min-w-fit":i}),I=()=>({exact:!0}),m=n=>({hidden:n});let H=(()=>{class n{constructor(){this.profile=(0,e.uUt)(Y.x),this.route=(0,e.uUt)(r.gV),this.router=(0,e.uUt)(r.E5),this.destroy$=(0,e.uUt)(S.UF),this.dialogs=(0,e.uUt)(M._k),this.injector=(0,e.uUt)(e.zZn),this.cu=this.profile.cu,this.isOpen=!1,this.showMenuButton=!1,this.isMobile=!1,this.router.events.pipe((0,O.a)(this.destroy$)).subscribe(t=>{t instanceof r.Qx&&this.isMobile&&this.closeSidenav()})}ngOnInit(){this.onResize()}onResize(){this.showMenuButton=window.innerWidth<1024,this.isMobile=window.innerWidth<1024,this.isOpen=!this.isMobile}triggerSidenav(){this.isOpen=!this.isOpen}overlayClick(t){this.closeSidenav()}closeSidenav(){this.isOpen=!1}fireCreateReservationModal(){this.dialogs.open(new f.WO(V,this.injector)).pipe((0,O.a)(this.destroy$)).subscribe({next:t=>{},error:t=>console.error(t)})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-admin-sidenav"]],hostBindings:function(i,o){1&i&&e.qCj("resize",function(){return o.onResize()},!1,e.MbM)},standalone:!0,features:[e.M5G([S.UF]),e.UHJ],decls:59,vars:33,consts:()=>{let t,i,o,a,l,d,C,R,h;return t="Reservations",i="Menu",o="Menu tag",a="Ingredients",l="Allergens",d="Change plate prices.",C="Create reservation",R="Settings",h="Log in",[[1,"bg-white","flex","flex-wrap","justify-between","sticky","top-0","shadow-sm","px-3","z-20"],[1,"flex","items-center"],["tuiIconButton","","appearance","icon","type","button"],["routerLink","/"],["src","assets/img/logo.png","alt","Lpda2",1,"max-h-[60px]"],[1,"me-2"],["routerLink","/auth","size","m","tuiButton","","appearance","outline"],[1,"flex","flex-row","h-full","overflow-hidden","relative"],["class","block fixed top-0 bottom-0 left-0 right-0 z-10","style","background-color: black; opacity: 0.4;"],[1,"flex","flex-col","justify-between","bg-slate-50","py-5","overflow-y-auto",3,"ngClass"],[1,"flex","flex-col"],["routerLink","/admin/",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive","routerLinkActiveOptions"],[1,"text-lg"],["routerLink","/admin/reservations",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive"],t,["routerLink","/admin/menu",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive","routerLinkActiveOptions"],["menuLink","routerLinkActive"],i,["routerLink","/admin/menu/tags",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuTagsLink","routerLinkActive"],[1,"ms-5","text-md"],o,["routerLink","/admin/menu/ingredients",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuIngredientsLink","routerLinkActive"],a,["routerLink","/admin/menu/allergens",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuAllergensLink","routerLinkActive"],l,["routerLink","/admin/menu/update-dish-prices",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],d,[1,"cursor-pointer","bg-transparent","border-0","outline-0","flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"click"],C,[1,"w-1/2"],["routerLink","/admin/settings",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive"],R,[1,"grow","flex","flex-col","overflow-auto","md:p-3","lg:p-5","p-2"],["tuiIconButton","","appearance","icon","type","button",3,"click"],[1,"me-1"],h,[3,"user"],[1,"block","fixed","top-0","bottom-0","left-0","right-0","z-10",2,"background-color","black","opacity","0.4",3,"click"]]},template:function(i,o){if(1&i&&(e.I0R(0,"div",0)(1,"div",1),e.yuY(2,B,3,0,"button",2),e.I0R(3,"a",3),e.wR5(4,"img",4),e.C$Y()(),e.I0R(5,"div",1),e.wR5(6,"app-admin-language-switcher",5),e.yuY(7,U,6,0,"a",6)(8,X,1,1),e.C$Y()(),e.I0R(9,"div",7),e.yuY(10,j,1,0,"div",8),e.I0R(11,"div",9)(12,"div",10)(13,"a",11)(14,"mat-icon",5),e.OEk(15,"dashboard"),e.C$Y(),e.I0R(16,"span",12),e.OEk(17,"Dashboard"),e.C$Y()(),e.I0R(18,"a",13)(19,"mat-icon",5),e.OEk(20,"menu_book"),e.C$Y(),e.I0R(21,"span",12),e.aS0(22,14),e.C$Y()(),e.I0R(23,"a",15,16)(25,"mat-icon",5),e.OEk(26,"restaurant"),e.C$Y(),e.I0R(27,"span",12),e.aS0(28,17),e.C$Y()(),e.I0R(29,"a",18,19)(31,"span",20),e.aS0(32,21),e.C$Y()(),e.I0R(33,"a",22,23)(35,"span",20),e.aS0(36,24),e.C$Y()(),e.I0R(37,"a",25,26)(39,"span",20),e.aS0(40,27),e.C$Y()(),e.I0R(41,"a",28,26)(43,"span",20),e.aS0(44,29),e.C$Y()()(),e.I0R(45,"div",10)(46,"button",30),e.qCj("click",function(){return o.fireCreateReservationModal()}),e.I0R(47,"mat-icon",5),e.OEk(48,"add_circle"),e.C$Y(),e.I0R(49,"span",12),e.aS0(50,31),e.C$Y()(),e.wR5(51,"hr",32),e.I0R(52,"a",33)(53,"mat-icon",5),e.OEk(54,"settings"),e.C$Y(),e.I0R(55,"span",12),e.aS0(56,34),e.C$Y()()()(),e.I0R(57,"div",35),e.wR5(58,"router-outlet"),e.C$Y()()),2&i){const a=e.Gew(24),l=e.Gew(30),d=e.Gew(34),C=e.Gew(38);e.yG2(2),e.C0Y(2,o.showMenuButton?2:-1),e.yG2(5),e.C0Y(7,null==o.cu()?7:8),e.yG2(3),e.C0Y(10,o.isMobile&&o.isOpen?10:-1),e.yG2(),e.E7m("ngClass",e.WuN(18,F,!o.isOpen,o.isOpen,o.isMobile,!o.isMobile)),e.yG2(2),e.E7m("routerLinkActive","bg-slate-100 active-link")("routerLinkActiveOptions",e.q4q(23,I)),e.yG2(5),e.E7m("routerLinkActive","bg-slate-100 active-link"),e.yG2(5),e.E7m("routerLinkActive","bg-slate-100 active-link")("routerLinkActiveOptions",e.q4q(24,I)),e.yG2(6),e.E7m("ngClass",e.S45(25,m,!(a.isActive||l.isActive||d.isActive||C.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(27,m,!(a.isActive||l.isActive||d.isActive||C.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(29,m,!(a.isActive||l.isActive||d.isActive||C.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(31,m,!(a.isActive||l.isActive||d.isActive||C.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(11),e.E7m("routerLinkActive","bg-slate-100 active-link")}},dependencies:[E.MD,E.QF,r.cP,r.qQ,r.ER,r.LC,_.qL,c.GE,p.CI,p.Kw,_.oB,A.A$,b,w.y],styles:["[_nghost-%COMP%]{--blue: rgb(75, 75, 163);display:flex;flex-direction:column;height:100vh}[_nghost-%COMP%]   .active-link[_ngcontent-%COMP%]{box-shadow:inset 4px 0 var(--blue);color:var(--blue);font-weight:700}[_nghost-%COMP%]   .expanded[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_expand .75s}[_nghost-%COMP%]   .collapsed[_ngcontent-%COMP%]{max-width:1px}@keyframes _ngcontent-%COMP%_expand{0%{max-width:1px}to{max-width:1000px}}"]})}return n})(),Q=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-admin-layout"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,template:function(i,o){1&i&&e.wR5(0,"app-admin-sidenav")},dependencies:[E.MD,H]})}return n})()},7364:(T,g,s)=>{s.d(g,{e:()=>r});var E=s(4496);const e={it:"Italian",en:"Inglese",fr:"French",de:"German",es:"Spanish",pt:"Portuguese",ru:"Russian",zh:"Cinese"};let r=(()=>{class _{transform(c){return"string"==typeof c&&c.length>0?e[c]??c:"unknown"}static#e=this.\u0275fac=function(p){return new(p||_)};static#t=this.\u0275pipe=E.UTH({name:"language",type:_,pure:!0,standalone:!0})}return _})()}}]);