"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7499],{65064:(D,R,i)=>{i.r(R),i.d(R,{UserProfileComponent:()=>st});var t=i(54496),h=i(94616),T=i(27692),I=i(8048),m=i(58212),M=i(1560),r=i(91368),p=i(74872),d=i(31236),f=i(1040);function E(e,c){if(1&e&&(t.I0R(0,"mat-icon",1),t.OEk(1),t.C$Y()),2&e){const o=t.GaO();t.yG2(),t.cNF(o.icon)}}function P(e,c){if(1&e&&t.OEk(0),2&e){const o=t.GaO();t.oRS(" ",o.label," ")}}function l(e,c){1&e&&t.C_f(0)}function b(e,c){if(1&e&&t.yuY(0,l,1,0,"ng-container",7),2&e){const o=t.GaO();t.E7m("polymorpheusOutlet",o.label)}}function x(e,c){1&e&&t.C_f(0)}const L=e=>({$implicit:e});function g(e,c){if(1&e&&(t.I0R(0,"tui-loader",5),t.yuY(1,x,1,0,"ng-container",8),t.C$Y()),2&e){const o=t.GaO();t.E7m("overlay",!0)("showLoader",o.submitting),t.yG2(),t.E7m("polymorpheusOutlet",o.editTemplate)("polymorpheusOutletContext",t.S45(4,L,o.edit$))}}function v(e,c){1&e&&t._Xx(0)}function _(e,c){if(1&e&&(t.I0R(0,"mat-icon",1),t.OEk(1),t.C$Y()),2&e){const o=t.GaO(2);t.yG2(),t.cNF(o.editIcon)}}function a(e,c){1&e&&t.C_f(0)}function C(e,c){if(1&e&&t.yuY(0,a,1,0,"ng-container",7),2&e){const o=t.GaO(2);t.E7m("polymorpheusOutlet",o.editIcon)}}function O(e,c){if(1&e){const o=t.KQA();t.I0R(0,"a",9),t.qCj("click",function(){t.usT(o);const n=t.GaO();return t.CGJ(n.startEdit())})("keydown.enter",function(){t.usT(o);const n=t.GaO();return t.CGJ(n.startEdit())})("keydown.space",function(){t.usT(o);const n=t.GaO();return t.CGJ(n.startEdit())}),t.I0R(1,"span",10),t.yuY(2,_,2,1)(3,C,1,1),t.C$Y()()}if(2&e){const o=t.GaO();let u;t.yG2(2),t.C0Y(2,"string"===(u=o.labelType)?2:"template"===u?3:-1)}}const A=["*"];let $=(()=>{class e{constructor(){this.label="",this.editable=!0,this.editIcon="edit",this.editTemplate="",this.edit=new t._w7,this.editing=!1,this.submitting=!1,this.edit$=new t._w7,this.destroyRef=(0,t.uUt)(t.eM9),this.changeDetectorRef=(0,t.uUt)(t.kD9),this.router=(0,t.uUt)(d.E5),this.activatedRoute=(0,t.uUt)(d.gV)}ngOnInit(){this.edit$.pipe((0,p.ay)(this.destroyRef)).subscribe(o=>{switch(o){case"started":this.editing=!0,this.submitting=!1,this.edit.emit(this);break;case"terminated":case"cancel":this.submitting=!1,this.editing=!1,console.log("Terminated");break;case"submitting":this.submitting=!0;break;case"error":this.submitting=!1}this.changeDetectorRef.markForCheck()})}get labelType(){return"string"==typeof this.label?"string":"template"}get editIconType(){return"string"==typeof this.editIcon?"string":"template"}startEdit(){this.link?this.router.navigate([this.link],{relativeTo:this.activatedRoute}):this.edit$.next("started")}terminateEdit(){this.edit$.next("terminated")}static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-profile-item"]],inputs:{icon:"icon",label:"label",editable:"editable",editIcon:"editIcon",editTemplate:"editTemplate",link:"link"},outputs:{edit:"edit"},standalone:!0,features:[t.UHJ],ngContentSelectors:A,decls:10,vars:4,consts:[[1,"w-[40px]","min-w-[40px]","h-[40px]","text-[40px]/[40px]","me-4"],["inline",""],[1,"flex","flex-col","w-full","min-h-[40px]"],[1,"font-light","uppercase","text-gray-400"],[1,"font-bold","text-lg"],[3,"overlay","showLoader"],["tuiButton","","appearance","custom","class","me-4","style","--tui-padding: 0","tabindex","1"],[4,"polymorpheusOutlet"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiButton","","appearance","custom","tabindex","1",1,"me-4",2,"--tui-padding","0",3,"click","keydown.enter","keydown.space"],[1,"text-3xl"]],template:function(u,n){if(1&u&&(t.kPM(),t.I0R(0,"div",0),t.yuY(1,E,2,1,"mat-icon",1),t.C$Y(),t.I0R(2,"div",2)(3,"h4",3),t.yuY(4,P,1,1)(5,b,1,1),t.C$Y(),t.I0R(6,"div",4),t.yuY(7,g,2,6,"tui-loader",5)(8,v,1,0),t.C$Y()(),t.yuY(9,O,4,1,"a",6)),2&u){let s;t.yG2(),t.C0Y(1,n.icon?1:-1),t.yG2(3),t.C0Y(4,"string"===(s=n.labelType)?4:"template"===s?5:-1),t.yG2(3),t.C0Y(7,n.editing&&n.editTemplate?7:8),t.yG2(2),t.C0Y(9,n.editable&&!n.editing?9:-1)}},dependencies:[r.MD,M.oB,M.qL,f.Ux,f.Af,m.CI,m.Kw,T.Sk,T.Cb],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;border-width:1px;border-bottom-width:0px;padding:1rem}[_nghost-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}[_nghost-%COMP%]:first-of-type{border-top-left-radius:.75rem;border-top-right-radius:.75rem}[_nghost-%COMP%]:last-of-type{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem;border-bottom-width:1px}"],changeDetection:0})}return e})();var N=i(53797),F=i(32204),y=i(6504),U=i(35e3);function W(e,c){1&e&&(t.I0R(0,"p",3),t.aS0(1,4),t.C$Y())}function X(e,c){if(1&e&&(t.I0R(0,"p",3),t.aS0(1,5),t.C$Y()),2&e){const o=t.GaO();t.yG2(),t.oBb(o.minlength.requiredLength),t.Ylm(1)}}function j(e,c){1&e&&t.yuY(0,W,2,0,"p",2)(1,X,2,1,"p",2),2&e&&(t.C0Y(0,c.required?0:-1),t.yG2(),t.C0Y(1,c.minlength?1:-1))}function V(e,c){1&e&&(t.I0R(0,"p",6),t.aS0(1,7),t.C$Y())}let J=(()=>{class e{constructor(){this.control=new y.Ku(null,[y.AQ.required,y.AQ.minLength(3)]),this.destroyRef=(0,t.uUt)(t.eM9),this.profile=(0,t.uUt)(h.x)}ngOnInit(){console.log("EditFullnameComponent initialized"),this.control.setValue(this.profile.cu()?.fullname),this.observable$?.pipe((0,p.ay)(this.destroyRef)).subscribe(o=>{"submit"===o&&this.submit()})}submit(){this.control.invalid||(this.observable$?.next("submitting"),this.profile.update({fullname:this.control.value}).subscribe({next:()=>{this.observable$?.next("terminated")},error:()=>{this.observable$?.next("error")}}))}static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-edit-fullname"]],inputs:{user:"user",observable$:"observable$"},standalone:!0,features:[t.UHJ],decls:4,vars:3,consts:()=>{let o,u,n;return o="The name cannot be empty.",u="\n           The name must be at least \n          " + "\ufffd0\ufffd" + "\n           characters long. \n        ",n="Enter your full name.",[[1,"font-normal"],["tuiAutoFocus","",3,"formControl","tuiTextfieldLabelOutside","keydown.enter"],["class","form-text error"],[1,"form-text","error"],o,u,[1,"form-text"],n]},template:function(u,n){if(1&u&&(t.I0R(0,"div",0)(1,"tui-input",1),t.qCj("keydown.enter",function(){return n.submit()}),t.C$Y(),t.yuY(2,j,2,2)(3,V,2,0),t.C$Y()),2&u){let s;t.yG2(),t.E7m("formControl",n.control)("tuiTextfieldLabelOutside",!0),t.yG2(),t.C0Y(2,(s=n.control.touched&&n.control.errors)?2:3,s)}},dependencies:[y.sl,y.ue,y.ug,N.CQ,N.Oo,N.cP,I.aS,I.E9,U.m6,U.gJ],styles:["[_nghost-%COMP%]{display:inline-block;width:100%;min-width:200px;max-width:400px}[_nghost-%COMP%]   .form-text[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}"]})}return e})();function Q(e,c){1&e&&(t.I0R(0,"p",3),t.aS0(1,4),t.C$Y())}function H(e,c){if(1&e&&(t.I0R(0,"p",3),t.aS0(1,5),t.C$Y()),2&e){const o=t.GaO();t.yG2(),t.oBb(o.minlength.requiredLength),t.Ylm(1)}}function Z(e,c){1&e&&t.yuY(0,Q,2,0,"p",2)(1,H,2,1,"p",2),2&e&&(t.C0Y(0,c.required?0:-1),t.yG2(),t.C0Y(1,c.minlength?1:-1))}function q(e,c){1&e&&(t.I0R(0,"p",6),t.aS0(1,7),t.C$Y())}let tt=(()=>{class e{constructor(){this.control=new y.Ku(null,[y.AQ.required,y.AQ.minLength(3)]),this.destroyRef=(0,t.uUt)(t.eM9),this.profile=(0,t.uUt)(h.x)}ngOnInit(){this.control.setValue(this.profile.cu()?.username),this.observable$?.pipe((0,p.ay)(this.destroyRef)).subscribe(o=>{"submit"===o&&this.submit()})}submit(){this.control.invalid||(this.observable$?.next("submitting"),this.profile.update({username:this.control.value}).subscribe({next:()=>{this.observable$?.next("terminated")},error:()=>{this.observable$?.next("error")}}))}static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-edit-username"]],inputs:{user:"user",observable$:"observable$"},standalone:!0,features:[t.UHJ],decls:4,vars:3,consts:()=>{let o,u,n;return o="The username cannot be empty.",u="\n           The username must be at least \n          " + "\ufffd0\ufffd" + "\n           characters long. \n        ",n="Enter your username",[[1,"font-normal"],["tuiAutoFocus","",3,"formControl","tuiTextfieldLabelOutside","keydown.enter"],["class","form-text error"],[1,"form-text","error"],o,u,[1,"form-text"],n]},template:function(u,n){if(1&u&&(t.I0R(0,"div",0)(1,"tui-input",1),t.qCj("keydown.enter",function(){return n.submit()}),t.C$Y(),t.yuY(2,Z,2,2)(3,q,2,0),t.C$Y()),2&u){let s;t.yG2(),t.E7m("formControl",n.control)("tuiTextfieldLabelOutside",!0),t.yG2(),t.C0Y(2,(s=n.control.touched&&n.control.errors)?2:3,s)}},dependencies:[y.sl,y.ue,y.ug,N.CQ,N.Oo,N.cP,I.aS,I.E9,U.m6,U.gJ],styles:["[_nghost-%COMP%]{display:inline-block;width:100%;min-width:200px;max-width:400px}[_nghost-%COMP%]   .form-text[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}"]})}return e})();function et(e,c){1&e&&(t.I0R(0,"mat-icon"),t.OEk(1,"done"),t.C$Y())}function ot(e,c){1&e&&(t.I0R(0,"mat-icon"),t.OEk(1,"close"),t.C$Y())}function it(e,c){if(1&e){const o=t.KQA();t.I0R(0,"div",20),t.wR5(1,"app-edit-fullname",21),t.I0R(2,"div",22)(3,"button",23),t.qCj("click",function(){const s=t.usT(o).$implicit;return t.CGJ(s.next("submit"))}),t.C$Y(),t.I0R(4,"button",24),t.qCj("click",function(){const s=t.usT(o).$implicit;return t.CGJ(s.next("cancel"))}),t.C$Y()(),t.yuY(5,et,2,0,"ng-template",null,25,t.gJz)(7,ot,2,0,"ng-template",null,26,t.gJz),t.C$Y()}if(2&e){const o=c.$implicit,u=t.Gew(6),n=t.Gew(8),s=t.GaO(2);t.yG2(),t.E7m("user",s.user)("observable$",o),t.yG2(2),t.E7m("icon",u),t.yG2(),t.E7m("icon",n)}}function nt(e,c){1&e&&(t.I0R(0,"mat-icon"),t.OEk(1,"done"),t.C$Y())}function rt(e,c){1&e&&(t.I0R(0,"mat-icon"),t.OEk(1,"close"),t.C$Y())}function at(e,c){if(1&e){const o=t.KQA();t.I0R(0,"div",20),t.wR5(1,"app-edit-username",21),t.I0R(2,"div",22)(3,"button",23),t.qCj("click",function(){const s=t.usT(o).$implicit;return t.CGJ(s.next("submit"))}),t.C$Y(),t.I0R(4,"button",24),t.qCj("click",function(){const s=t.usT(o).$implicit;return t.CGJ(s.next("cancel"))}),t.C$Y()(),t.yuY(5,nt,2,0,"ng-template",null,25,t.gJz)(7,rt,2,0,"ng-template",null,26,t.gJz),t.C$Y()}if(2&e){const o=c.$implicit,u=t.Gew(6),n=t.Gew(8),s=t.GaO(2);t.yG2(),t.E7m("user",s.user)("observable$",o),t.yG2(2),t.E7m("icon",u),t.yG2(),t.E7m("icon",n)}}function _t(e,c){1&e&&(t.I0R(0,"p",27),t.aS0(1,28),t.C$Y(),t.I0R(2,"p",29),t.aS0(3,30),t.C$Y(),t.I0R(4,"a",31),t.aS0(5,32),t.C$Y())}const ut=e=>({"rotate-180":e});function lt(e,c){if(1&e){const o=t.KQA();t.I0R(0,"div"),t.yuY(1,it,9,4,"ng-template",null,3,t.gJz)(3,at,9,4,"ng-template",null,4,t.gJz),t.I0R(5,"app-profile-item",5)(6,"span"),t.OEk(7),t.C$Y()(),t.I0R(8,"app-profile-item",6)(9,"span"),t.OEk(10),t.C$Y()(),t.I0R(11,"app-profile-item",7)(12,"span",8),t.OEk(13),t.C$Y()(),t.I0R(14,"app-profile-item",9)(15,"span"),t.OEk(16,"*********"),t.C$Y()(),t.I0R(17,"app-profile-item",10)(18,"span"),t.OEk(19),t.wVc(20,"date"),t.wVc(21,"date"),t.C$Y()()(),t.I0R(22,"tui-accordion-item",11),t.iHE("openChange",function(n){t.usT(o);const s=t.GaO();return t.kNx(s.deleteAccordionOpen,n)||(s.deleteAccordionOpen=n),t.CGJ(n)}),t.I0R(23,"h3",12)(24,"div",13)(25,"span"),t.aS0(26,14),t.C$Y(),t.I0R(27,"span",15),t.aS0(28,16),t.C$Y()(),t.I0R(29,"span",17)(30,"mat-icon",18),t.OEk(31,"keyboard_arrow_down"),t.C$Y()()(),t.yuY(32,_t,6,0,"ng-template",19),t.C$Y()}if(2&e){const o=t.Gew(2),u=t.Gew(4),n=t.GaO();t.yG2(5),t.E7m("editTemplate",o),t.yG2(2),t.cNF(n.user.fullname||"--"),t.yG2(),t.E7m("editTemplate",u),t.yG2(2),t.cNF(n.user.username||"--"),t.yG2(3),t.cNF(n.user.email||"--"),t.yG2(4),t.E7m("editable",!1),t.yG2(2),t.CAO("",t.g7$(20,11,n.user.created_at,"longDate"),", ",t.g7$(21,14,n.user.created_at,"shortTime"),""),t.yG2(3),t.E7m("showArrow",!1),t.OKB("open",n.deleteAccordionOpen),t.yG2(8),t.E7m("ngClass",t.S45(17,ut,n.deleteAccordionOpen))}}let st=(()=>{class e{constructor(){this.deleteAccordionOpen=!1,this.profile=(0,t.uUt)(h.x),(0,t.o3l)(()=>{this.user=this.profile.cu()})}onEdit(o){console.log("Editing",o)}static#t=this.\u0275fac=function(u){return new(u||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-user-profile"]],standalone:!0,features:[t.UHJ],decls:5,vars:3,consts:()=>{let o,u,n,s,w,G,z,Y,k,B,K;return o="Your profile",u="Your name",n="Login username",s="Email address",w="Password",G="Account created.",z="Deletion",Y="Delete your account and remove all associated data.",k="\n           If you wish to delete your account from our platform, follow the\n          instructions below. \n        ",B="\n           WARNING: this operation is irreversible and by proceeding with the\n          account deletion all your data will be lost and cannot be recovered! \n        ",K="Delete account",[[3,"overlay","showLoader"],[1,"block","mb-[5]"],o,["editFullname",""],["editUsername",""],["icon","badge","label",u,3,"editTemplate"],["icon","badge","label",n,3,"editTemplate"],["icon","alternate_email","label",s,"link","edit-email"],[1,"break-all"],["icon","lock","label",w,"link","edit-password"],["icon","edit_calendar","label",G,3,"editable"],[1,"container","mt-5",3,"showArrow","open","openChange"],[1,"flex","flex-row","items-center","justify-between","|","text-2xl","font-bold","|","whitespace-normal"],[1,"flex","flex-col"],z,[1,"text-sm","text-gray-400","font-normal"],Y,[1,"text-[40px]/[20px]"],["inline","",1,"me-2","transition-all","duration-500",3,"ngClass"],["tuiAccordionItemContent",""],[1,"flex","flex-row","flex-wrap","gap-2"],[3,"user","observable$"],[1,"flex","flex-row","gap-2"],["tuiIconButton","","appearance","primary","type","button",3,"icon","click"],["tuiIconButton","","appearance","secondary-destructive","type","button",3,"icon","click"],["confirmIcon",""],["cancelIcon",""],[1,"mb-2"],k,[1,"text-red-800","font-bold","mb-2"],B,["tuiButton","","appearance","accent","routerLink","delete"],K]},template:function(u,n){1&u&&(t.I0R(0,"tui-loader",0)(1,"h1",1),t.aS0(2,2),t.C$Y(),t.yuY(3,lt,33,19),t.C$Y(),t.wR5(4,"router-outlet")),2&u&&(t.E7m("overlay",!0)("showLoader",!n.user),t.yG2(3),t.C0Y(3,n.user?3:-1))},dependencies:[r.MD,r.QF,r.y,d.qQ,d.cP,d.ER,T.Sk,T.Cb,M.oB,M.qL,$,N.CQ,I.aS,y.sl,m.CI,m.Kw,J,F.Ep,F._Q,F.Up,tt],styles:["[_nghost-%COMP%]{--dot-size: .35rem;width:100%}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{margin-left:auto;margin-right:auto;display:block}[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]{margin-inline-end:.5rem;display:flex;flex-direction:row;align-items:center;border-inline-end-width:0px;padding-inline-end:.5rem}@media (min-width: 640px){[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]{border-inline-end-width:1px}}[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:24px}[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]:last-child{border-inline-end-width:0px}[_nghost-%COMP%]     tui-accordion-item   .t-header{padding:1.5rem;--tw-text-opacity: 1;color:rgb(234 88 12 / var(--tw-text-opacity))}"]})}return e})()},60832:(D,R,i)=>{i.d(R,{I:()=>I,w:()=>T});var t=i(54496),h=i(83480);let T=(()=>{class m{constructor(r){this.tuiFocusVisibleChange=r}}return m.\u0275fac=function(r){return new(r||m)(t.GI1(h.MF))},m.\u0275dir=t.Sc5({type:m,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([h.UF,h.MF])]}),m})(),I=(()=>{class m{}return m.\u0275fac=function(r){return new(r||m)},m.\u0275mod=t.a4G({type:m}),m.\u0275inj=t.s3X({}),m})()},81096:(D,R,i)=>{i.d(R,{O:()=>f,h:()=>d});var t=i(54496),h=i(50900),T=i(94164),I=i(33412),m=i(54704),M=i(75568),r=i(74e3),p=i(2644);let d=(()=>{class E{constructor({nativeElement:l},b){this.tuiFocusedChange=(0,I.U)((0,h.Ax)(l,"focusin"),(0,h.Ax)(l,"focusout")).pipe((0,m.k)(()=>(0,T.ER)(l)),(0,M.W)(!1),(0,r.a)(),(0,p.s)(1),(0,h.OA)(b))}}return E.\u0275fac=function(l){return new(l||E)(t.GI1(t.GMv),t.GI1(t.WW2))},E.\u0275dir=t.Sc5({type:E,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),E})(),f=(()=>{class E{}return E.\u0275fac=function(l){return new(l||E)},E.\u0275mod=t.a4G({type:E}),E.\u0275inj=t.s3X({}),E})()},19880:(D,R,i)=>{i.d(R,{kP:()=>P,kh:()=>L,st:()=>x});var t=i(54496),h=i(83480),T=i(64392),I=i(83120),m=i(53616),M=i(27692),r=i(91368);const p=["wrapper"];function d(g,v){if(1&g&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&g){const _=t.GaO(2);t.E7m("overlay",!0)("showLoader",_.loading),t.yG2(),t.E7m("ngTemplateOutlet",_.content)}}function f(g,v){if(1&g&&(t.SAx(0),t._Xx(1),t.yuY(2,d,2,3,"tui-loader",3),t.k70()),2&g){const _=t.GaO();t.yG2(2),t.E7m("ngIf",_.async)("ngIfElse",_.content)}}const E=["*"];let P=(()=>{class g{}return g.\u0275fac=function(_){return new(_||g)},g.\u0275dir=t.Sc5({type:g,selectors:[["","tuiExpandContent",""]]}),g})();let x=(()=>{class g{constructor(_,a){this.cdr=_,this.destroy$=a,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(_){if(null!==this.expanded)return 0!==this.state?(this.expanded=_,void(this.state=3)):(this.expanded=_,void this.retrigger(this.async&&_?1:3));this.expanded=_}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:_,state:a,contentWrapper:C}=this;return _&&2===a||!_&&3===a?0:C&&(!_&&2===a||_&&3===a)?C.nativeElement.offsetHeight:C&&_&&1===a?Math.max(C.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:_}){"opacity"===_&&3===this.state&&(this.state=0)}onExpandLoaded(_){_.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(_){this.state=2,(0,I.k)(0).pipe((0,m.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=_,this.cdr.markForCheck())})}}return g.\u0275fac=function(_){return new(_||g)(t.GI1(t.kD9),t.GI1(h.UF,2))},g.\u0275cmp=t.In1({type:g,selectors:[["tui-expand"]],contentQueries:function(_,a,C){if(1&_&&t.szK(C,P,5,t.Yw2),2&_){let O;t.wto(O=t.Gqi())&&(a.content=O.first)}},viewQuery:function(_,a){if(1&_&&t.CC$(p,5),2&_){let C;t.wto(C=t.Gqi())&&(a.contentWrapper=C.first)}},hostVars:9,hostBindings:function(_,a){1&_&&t.qCj("transitionend.self",function(O){return a.onTransitionEnd(O)})("tui-expand-loaded",function(O){return a.onExpandLoaded(O)}),2&_&&(t.e48("aria-expanded",a.expanded),t.m4B("height",a.height,"px"),t.eAK("_expanded",a.expanded)("_overflow",a.overflow)("_loading",a.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([h.UF])],ngContentSelectors:E,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(_,a){1&_&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,f,3,2,"ng-container",2),t.C$Y()),2&_&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",a.overflow),t.yG2(2),t.E7m("ngIf",a.contentVisible))},dependencies:[M.Cb,r.u_,r.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[T.cI]},changeDetection:0}),g})(),L=(()=>{class g{}return g.\u0275fac=function(_){return new(_||g)},g.\u0275mod=t.a4G({type:g}),g.\u0275inj=t.s3X({imports:[[r.MD,M.Sk]]}),g})()},78976:(D,R,i)=>{i.d(R,{Gy:()=>M,Ko:()=>m});var t=i(54496),h=i(83480),T=i(91368);let I=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275cmp=t.In1({type:r,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(d,f){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),r})(),m=(()=>{class r{constructor(d){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",d.addComponent(I)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return r.\u0275fac=function(d){return new(d||r)(t.GI1(h.WS))},r.\u0275dir=t.Sc5({type:r,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(d,f){2&d&&t.eAK("tui-group_adaptive",f.adaptive)("tui-group_collapsed",f.collapsed)("tui-group_rounded",f.rounded)("tui-group_orientation_horizontal",f.orientationHorizontal)("tui-group_orientation_vertical",f.orientationVertical)("tui-group_radius_large",f.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),r})(),M=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({imports:[[T.MD]]}),r})()},77176:(D,R,i)=>{i.d(R,{S2:()=>L,ie:()=>x,qE:()=>v,qu:()=>P});var t=i(54496),h=i(93656),T=i(85608),I=i(10466),m=i(8048),M=i(1040),r=i(82528),p=i(91368);function d(a,C){1&a&&t.wR5(0,"tui-svg",2),2&a&&t.E7m("src",C.polymorpheusOutlet)}function f(a,C){1&a&&t.C_f(0)}const P=(0,r.AL)({iconSmall:"tuiIconChevronDown",iconLarge:"tuiIconChevronDownLarge"}),x=new M.WO((()=>{class a{constructor(O,A,$){this.dropdown=O,this.textfieldSize=A,this.options=$}get rotated(){return this.dropdown.open}get arrowIcon(){return(0,T.yi)(this.textfieldSize.size)?this.options.iconLarge:this.options.iconSmall}}return a.\u0275fac=function(O){return new(O||a)(t.GI1(I.Qw),t.GI1(m.$K),t.GI1(P))},a.\u0275cmp=t.In1({type:a,selectors:[["tui-arrow"]],hostVars:2,hostBindings:function(O,A){2&O&&t.eAK("_rotated",A.rotated)},decls:3,vars:4,consts:[[3,"src",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"src"]],template:function(O,A){1&O&&(t.yuY(0,d,1,1,"tui-svg",0)(1,f,1,0,"ng-container",1),t.wVc(2,"async")),2&O&&(t.E7m("polymorpheusOutlet",A.arrowIcon),t.yG2(),t.E7m("ngIf",t.kDX(2,2,A.dropdown.openChange)))},dependencies:[h.Wu,M.Af,p.u_,p.a],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})());let L=(()=>{class a{}return a.\u0275fac=function(O){return new(O||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[p.MD,h.Yt,M.Ux]]}),a})();const v=(0,r.AL)({interactive:x,disabled:x})},74872:(D,R,i)=>{i.d(R,{ay:()=>I});var t=i(54496),h=i(53252),T=i(53616);function I(r){r||((0,t.yAg)(I),r=(0,t.uUt)(t.eM9));const p=new h._(d=>r.onDestroy(d.next.bind(d)));return d=>d.pipe((0,T.a)(p))}}}]);