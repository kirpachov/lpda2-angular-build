"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8168],{5328:(h,N,s)=>{s.r(N),s.d(N,{AdminLayoutComponent:()=>H});var d=s(1368),e=s(4496),l=s(1236),_=s(1560),M=s(8016),c=s(466),g=s(8212),m=s(4336),T=s(4964),$=s(1128),D=s(8256),k=s(8392),L=s(968),x=s(5193);function y(n,C){if(1&n){const t=e.KQA();e.I0R(0,"tui-data-list")(1,"a",8),e.aS0(2,9),e.C$Y(),e.I0R(3,"button",10),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.logout())}),e.aS0(4,11),e.C$Y()()}}const G=n=>({rotate180:n});let P=(()=>{class n{constructor(){this.auth=(0,e.uUt)(T.o),this.notification=(0,e.uUt)($.E),this.injector=(0,e.uUt)(e.zZn),this.fullnameOrEmail=(0,e.OCB)(null)}set user(t){this.fullnameOrEmail.set(t?t.fullname&&t.fullname.length>0?t.fullname:t.email??null:null)}logout(){this.auth.logout().subscribe({next:()=>{(0,L.Q)(this.injector,!1)},error:t=>{this.notification.error((0,D.mk)(t)||k.a)}})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-navbar-user-badge"]],inputs:{user:"user"},standalone:!0,features:[e.UHJ],decls:12,vars:6,consts:()=>{let t,i;return t="Profile",i="Go out",[["loginDropdownContent",""],[3,"tuiDropdownAlign","content"],["dropdown",""],[1,"flex","items-center"],[1,"flex","flex-col","items-end","me-3"],[1,"font-bold","text-lg","mb-1","text-slate-800"],[1,"text-slate-600",2,"font-size","50px","height","50px","width","50px"],[1,"animation-speed-2",3,"ngClass"],["routerLink","/admin/profile","tuiOption",""],t,["tuiOption","",3,"click"],i]},template:function(i,o){if(1&i&&(e.yuY(0,y,5,0,"ng-template",null,0,e.gJz),e.I0R(2,"tui-hosted-dropdown",1,2)(4,"span",3)(5,"span",4)(6,"span",5),e.OEk(7),e.C$Y()(),e.I0R(8,"mat-icon",6),e.OEk(9,"account_circle"),e.C$Y(),e.I0R(10,"mat-icon",7),e.OEk(11,"expand_more"),e.C$Y()()()),2&i){const a=e.Gew(1),r=e.Gew(3);e.yG2(2),e.E7m("tuiDropdownAlign","right")("content",a),e.yG2(5),e.cNF(o.fullnameOrEmail()),e.yG2(3),e.E7m("ngClass",e.S45(4,G,r.open))}},dependencies:[d.QF,c.GE,c.Qw,x.oF,g.CI,_.qL,m.A$,m.yi,m.sP,l.ER]})}return n})();var S=s(3480),O=s(3616),f=s(1040),b=s(8780);let V=(()=>{class n{constructor(t,i){this.dialogs=t,this.context=i}created(t){this.context.completeWith(t)}cancelled(){this.context.completeWith(null)}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(M._k),e.GI1(f.C0))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-create-reservation-modal"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,consts:[[3,"created","cancelled"]],template:function(i,o){1&i&&(e.I0R(0,"app-create-reservation",0),e.qCj("created",function(r){return o.created(r)})("cancelled",function(){return o.cancelled()}),e.C$Y())},dependencies:[b.I],encapsulation:2})}return n})();var z=s(6532),w=s(4616);function B(n,C){if(1&n){const t=e.KQA();e.I0R(0,"button",34),e.qCj("click",function(){e.usT(t);const o=e.GaO();return e.CGJ(o.triggerSidenav())}),e.I0R(1,"mat-icon"),e.OEk(2,"menu"),e.C$Y()()}}function Y(n,C){1&n&&(e.I0R(0,"a",6)(1,"span",1)(2,"mat-icon",35),e.OEk(3,"account_circle"),e.C$Y(),e.SAx(4),e.aS0(5,36),e.k70(),e.C$Y()())}function U(n,C){if(1&n&&e.wR5(0,"app-navbar-user-badge",37),2&n){const t=e.GaO();e.E7m("user",t.cu())}}function X(n,C){if(1&n){const t=e.KQA();e.I0R(0,"div",38),e.qCj("click",function(o){e.usT(t);const a=e.GaO();return e.CGJ(a.overlayClick(o))}),e.C$Y()}}const j=(n,C,t)=>({collapsed:n,expanded:C,"absolute top-0 bottom-0 z-20":t}),I=()=>({exact:!0}),A=n=>({hidden:n});let F=(()=>{class n{constructor(){this.profile=(0,e.uUt)(w.x),this.route=(0,e.uUt)(l.gV),this.router=(0,e.uUt)(l.E5),this.destroy$=(0,e.uUt)(S.UF),this.dialogs=(0,e.uUt)(M._k),this.injector=(0,e.uUt)(e.zZn),this.cu=this.profile.cu,this.isOpen=!1,this.showMenuButton=!1,this.isMobile=!1,this.router.events.pipe((0,O.a)(this.destroy$)).subscribe(t=>{t instanceof l.Qx&&this.isMobile&&this.closeSidenav()})}ngOnInit(){this.onResize()}onResize(){this.showMenuButton=window.innerWidth<1024,this.isMobile=window.innerWidth<1024,this.isOpen=!this.isMobile}triggerSidenav(){this.isOpen=!this.isOpen}overlayClick(t){this.closeSidenav()}closeSidenav(){this.isOpen=!1}fireCreateReservationModal(){this.dialogs.open(new f.WO(V,this.injector)).pipe((0,O.a)(this.destroy$)).subscribe({next:t=>{},error:t=>console.error(t)})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-admin-sidenav"]],hostBindings:function(i,o){1&i&&e.qCj("resize",function(){return o.onResize()},!1,e.MbM)},standalone:!0,features:[e.M5G([S.UF]),e.UHJ],decls:55,vars:28,consts:()=>{let t,i,o,a,r,E,p,R;return t="Reservations",i="Menu",o="Menu tag",a="Ingredients",r="Allergens",E="Create reservation",p="Settings",R="Log in",[[1,"bg-white","flex","flex-wrap","justify-between","sticky","top-0","shadow-sm","px-3","z-20"],[1,"flex","items-center"],["tuiIconButton","","appearance","icon","type","button"],["routerLink","/"],["src","assets/img/logo.png","alt","Lpda2",1,"max-h-[60px]"],[1,"me-2"],["routerLink","/auth","size","m","tuiButton","","appearance","outline"],[1,"flex","flex-row","h-full","overflow-hidden","relative"],["class","block fixed top-0 bottom-0 left-0 right-0 z-10","style","background-color: black; opacity: 0.4;"],[1,"flex","flex-col","justify-between","bg-slate-50","py-5","overflow-y-auto",3,"ngClass"],[1,"flex","flex-col"],["routerLink","/admin/",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive","routerLinkActiveOptions"],[1,"text-lg"],["routerLink","/admin/reservations",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive"],t,["routerLink","/admin/menu",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive","routerLinkActiveOptions"],["menuLink","routerLinkActive"],i,["routerLink","/admin/menu/tags",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuTagsLink","routerLinkActive"],[1,"ms-5","text-md"],o,["routerLink","/admin/menu/ingredients",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuIngredientsLink","routerLinkActive"],a,["routerLink","/admin/menu/allergens",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"ngClass","routerLinkActive"],["menuAllergensLink","routerLinkActive"],r,[1,"cursor-pointer","bg-transparent","border-0","outline-0","flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"click"],E,[1,"w-1/2"],["routerLink","/admin/settings",1,"flex","items-center","no-underline","text-slate-700","hover:bg-slate-200","p-3",3,"routerLinkActive"],p,[1,"grow","flex","flex-col","overflow-auto","md:p-3","lg:p-5","p-2"],["tuiIconButton","","appearance","icon","type","button",3,"click"],[1,"me-1"],R,[3,"user"],[1,"block","fixed","top-0","bottom-0","left-0","right-0","z-10",2,"background-color","black","opacity","0.4",3,"click"]]},template:function(i,o){if(1&i&&(e.I0R(0,"div",0)(1,"div",1),e.yuY(2,B,3,0,"button",2),e.I0R(3,"a",3),e.wR5(4,"img",4),e.C$Y()(),e.I0R(5,"div",1),e.wR5(6,"app-admin-language-switcher",5),e.yuY(7,Y,6,0,"a",6)(8,U,1,1),e.C$Y()(),e.I0R(9,"div",7),e.yuY(10,X,1,0,"div",8),e.I0R(11,"div",9)(12,"div",10)(13,"a",11)(14,"mat-icon",5),e.OEk(15,"dashboard"),e.C$Y(),e.I0R(16,"span",12),e.OEk(17,"Dashboard"),e.C$Y()(),e.I0R(18,"a",13)(19,"mat-icon",5),e.OEk(20,"menu_book"),e.C$Y(),e.I0R(21,"span",12),e.aS0(22,14),e.C$Y()(),e.I0R(23,"a",15,16)(25,"mat-icon",5),e.OEk(26,"restaurant"),e.C$Y(),e.I0R(27,"span",12),e.aS0(28,17),e.C$Y()(),e.I0R(29,"a",18,19)(31,"span",20),e.aS0(32,21),e.C$Y()(),e.I0R(33,"a",22,23)(35,"span",20),e.aS0(36,24),e.C$Y()(),e.I0R(37,"a",25,26)(39,"span",20),e.aS0(40,27),e.C$Y()()(),e.I0R(41,"div",10)(42,"button",28),e.qCj("click",function(){return o.fireCreateReservationModal()}),e.I0R(43,"mat-icon",5),e.OEk(44,"add_circle"),e.C$Y(),e.I0R(45,"span",12),e.aS0(46,29),e.C$Y()(),e.wR5(47,"hr",30),e.I0R(48,"a",31)(49,"mat-icon",5),e.OEk(50,"settings"),e.C$Y(),e.I0R(51,"span",12),e.aS0(52,32),e.C$Y()()()(),e.I0R(53,"div",33),e.wR5(54,"router-outlet"),e.C$Y()()),2&i){const a=e.Gew(24),r=e.Gew(30),E=e.Gew(34),p=e.Gew(38);e.yG2(2),e.C0Y(2,o.showMenuButton?2:-1),e.yG2(5),e.C0Y(7,null==o.cu()?7:8),e.yG2(3),e.C0Y(10,o.isMobile&&o.isOpen?10:-1),e.yG2(),e.E7m("ngClass",e.uAc(16,j,!o.isOpen,o.isOpen,o.isMobile)),e.yG2(2),e.E7m("routerLinkActive","bg-slate-100 active-link")("routerLinkActiveOptions",e.q4q(20,I)),e.yG2(5),e.E7m("routerLinkActive","bg-slate-100 active-link"),e.yG2(5),e.E7m("routerLinkActive","bg-slate-100 active-link")("routerLinkActiveOptions",e.q4q(21,I)),e.yG2(6),e.E7m("ngClass",e.S45(22,A,!(a.isActive||r.isActive||E.isActive||p.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(24,A,!(a.isActive||r.isActive||E.isActive||p.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(4),e.E7m("ngClass",e.S45(26,A,!(a.isActive||r.isActive||E.isActive||p.isActive)))("routerLinkActive","bg-slate-100 active-link"),e.yG2(11),e.E7m("routerLinkActive","bg-slate-100 active-link")}},dependencies:[d.MD,d.QF,l.cP,l.qQ,l.ER,l.LC,_.qL,c.GE,g.CI,g.Kw,_.oB,m.A$,P,z.y],styles:["[_nghost-%COMP%]{--blue: rgb(75, 75, 163);display:flex;flex-direction:column;height:100vh}[_nghost-%COMP%]   .active-link[_ngcontent-%COMP%]{box-shadow:inset 4px 0 var(--blue);color:var(--blue);font-weight:700}[_nghost-%COMP%]   .expanded[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_expand .75s}[_nghost-%COMP%]   .collapsed[_ngcontent-%COMP%]{max-width:1px}@keyframes _ngcontent-%COMP%_expand{0%{max-width:1px}to{max-width:1000px}}"]})}return n})(),H=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-admin-layout"]],standalone:!0,features:[e.UHJ],decls:1,vars:0,template:function(i,o){1&i&&e.wR5(0,"app-admin-sidenav")},dependencies:[d.MD,F]})}return n})()},7364:(h,N,s)=>{s.d(N,{e:()=>l});var d=s(4496);const e={it:"Italian",en:"Inglese",fr:"French",de:"German",es:"Spanish",pt:"Portuguese",ru:"Russian",zh:"Cinese"};let l=(()=>{class _{transform(c){return"string"==typeof c&&c.length>0?e[c]??c:"unknown"}static#e=this.\u0275fac=function(g){return new(g||_)};static#t=this.\u0275pipe=d.UTH({name:"language",type:_,pure:!0,standalone:!0})}return _})()}}]);