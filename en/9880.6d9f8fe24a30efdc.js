"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9880],{5064:(N,R,e)=>{e.r(R),e.d(R,{UserProfileComponent:()=>lt});var t=e(4496),O=e(4616),I=e(7692),P=e(8048),f=e(8212),p=e(1560),r=e(1368),u=e(4872),c=e(2992),v=e(1040);function C(o,h){if(1&o&&(t.I0R(0,"mat-icon",1),t.OEk(1),t.C$Y()),2&o){const n=t.GaO();t.yG2(),t.cNF(n.icon)}}function T(o,h){if(1&o&&t.OEk(0),2&o){const n=t.GaO();t.oRS(" ",n.label," ")}}function l(o,h){1&o&&t.C_f(0)}function S(o,h){if(1&o&&t.yuY(0,l,1,0,"ng-container",7),2&o){const n=t.GaO();t.E7m("polymorpheusOutlet",n.label)}}function L(o,h){1&o&&t.C_f(0)}const U=o=>({$implicit:o});function M(o,h){if(1&o&&(t.I0R(0,"tui-loader",5),t.yuY(1,L,1,0,"ng-container",8),t.C$Y()),2&o){const n=t.GaO();t.E7m("overlay",!0)("showLoader",n.submitting),t.yG2(),t.E7m("polymorpheusOutlet",n.editTemplate)("polymorpheusOutletContext",t.S45(4,U,n.edit$))}}function D(o,h){1&o&&t._Xx(0)}function s(o,h){if(1&o&&(t.I0R(0,"mat-icon",1),t.OEk(1),t.C$Y()),2&o){const n=t.GaO(2);t.yG2(),t.cNF(n.editIcon)}}function i(o,h){1&o&&t.C_f(0)}function m(o,h){if(1&o&&t.yuY(0,i,1,0,"ng-container",7),2&o){const n=t.GaO(2);t.E7m("polymorpheusOutlet",n.editIcon)}}function _(o,h){if(1&o){const n=t.KQA();t.I0R(0,"a",9),t.qCj("click",function(){t.usT(n);const a=t.GaO();return t.CGJ(a.startEdit())})("keydown.enter",function(){t.usT(n);const a=t.GaO();return t.CGJ(a.startEdit())})("keydown.space",function(){t.usT(n);const a=t.GaO();return t.CGJ(a.startEdit())}),t.I0R(1,"span",10),t.yuY(2,s,2,1)(3,m,1,1),t.C$Y()()}if(2&o){const n=t.GaO();let d;t.yG2(2),t.C0Y(2,"string"===(d=n.labelType)?2:"template"===d?3:-1)}}const g=["*"];let A=(()=>{class o{constructor(){this.label="",this.editable=!0,this.editIcon="edit",this.editTemplate="",this.edit=new t._w7,this.editing=!1,this.submitting=!1,this.edit$=new t._w7,this.destroyRef=(0,t.uUt)(t.eM9),this.changeDetectorRef=(0,t.uUt)(t.kD9),this.router=(0,t.uUt)(c.E5),this.activatedRoute=(0,t.uUt)(c.gV)}ngOnInit(){this.edit$.pipe((0,u.ay)(this.destroyRef)).subscribe(n=>{switch(n){case"started":this.editing=!0,this.submitting=!1,this.edit.emit(this);break;case"terminated":case"cancel":this.submitting=!1,this.editing=!1,console.log("Terminated");break;case"submitting":this.submitting=!0;break;case"error":this.submitting=!1}this.changeDetectorRef.markForCheck()})}get labelType(){return"string"==typeof this.label?"string":"template"}get editIconType(){return"string"==typeof this.editIcon?"string":"template"}startEdit(){this.link?this.router.navigate([this.link],{relativeTo:this.activatedRoute}):this.edit$.next("started")}terminateEdit(){this.edit$.next("terminated")}static#t=this.\u0275fac=function(d){return new(d||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-profile-item"]],inputs:{icon:"icon",label:"label",editable:"editable",editIcon:"editIcon",editTemplate:"editTemplate",link:"link"},outputs:{edit:"edit"},standalone:!0,features:[t.UHJ],ngContentSelectors:g,decls:10,vars:4,consts:[[1,"w-[40px]","min-w-[40px]","h-[40px]","text-[40px]/[40px]","me-4"],["inline",""],[1,"flex","flex-col","w-full","min-h-[40px]"],[1,"font-light","uppercase","text-gray-400"],[1,"font-bold","text-lg"],[3,"overlay","showLoader"],["tuiButton","","appearance","custom","class","me-4","style","--tui-padding: 0","tabindex","1"],[4,"polymorpheusOutlet"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiButton","","appearance","custom","tabindex","1",1,"me-4",2,"--tui-padding","0",3,"click","keydown.enter","keydown.space"],[1,"text-3xl"]],template:function(d,a){if(1&d&&(t.kPM(),t.I0R(0,"div",0),t.yuY(1,C,2,1,"mat-icon",1),t.C$Y(),t.I0R(2,"div",2)(3,"h4",3),t.yuY(4,T,1,1)(5,S,1,1),t.C$Y(),t.I0R(6,"div",4),t.yuY(7,M,2,6,"tui-loader",5)(8,D,1,0),t.C$Y()(),t.yuY(9,_,4,1,"a",6)),2&d){let E;t.yG2(),t.C0Y(1,a.icon?1:-1),t.yG2(3),t.C0Y(4,"string"===(E=a.labelType)?4:"template"===E?5:-1),t.yG2(3),t.C0Y(7,a.editing&&a.editTemplate?7:8),t.yG2(2),t.C0Y(9,a.editable&&!a.editing?9:-1)}},dependencies:[r.MD,p.oB,p.qL,v.Ux,v.Af,f.CI,f.Kw,I.Sk,I.Cb],styles:["[_nghost-%COMP%]{display:flex;flex-direction:row;align-items:center;border-width:1px;border-bottom-width:0px;padding:1rem}[_nghost-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}[_nghost-%COMP%]:first-of-type{border-top-left-radius:.75rem;border-top-right-radius:.75rem}[_nghost-%COMP%]:last-of-type{border-bottom-right-radius:.75rem;border-bottom-left-radius:.75rem;border-bottom-width:1px}"],changeDetection:0})}return o})();var y=e(3797),$=e(2204),x=e(6504),F=e(5e3);function k(o,h){1&o&&(t.I0R(0,"p",3),t.aS0(1,4),t.C$Y())}function X(o,h){if(1&o&&(t.I0R(0,"p",3),t.aS0(1,5),t.C$Y()),2&o){const n=t.GaO();t.yG2(),t.oBb(n.minlength.requiredLength),t.Ylm(1)}}function j(o,h){1&o&&t.yuY(0,k,2,0,"p",2)(1,X,2,1,"p",2),2&o&&(t.C0Y(0,h.required?0:-1),t.yG2(),t.C0Y(1,h.minlength?1:-1))}function V(o,h){1&o&&(t.I0R(0,"p",6),t.aS0(1,7),t.C$Y())}let Q=(()=>{class o{constructor(){this.control=new x.Ku(null,[x.AQ.required,x.AQ.minLength(3)]),this.destroyRef=(0,t.uUt)(t.eM9),this.profile=(0,t.uUt)(O.x)}ngOnInit(){console.log("EditFullnameComponent initialized"),this.control.setValue(this.profile.cu()?.fullname),this.observable$?.pipe((0,u.ay)(this.destroyRef)).subscribe(n=>{"submit"===n&&this.submit()})}submit(){this.control.invalid||(this.observable$?.next("submitting"),this.profile.update({fullname:this.control.value}).subscribe({next:()=>{this.observable$?.next("terminated")},error:()=>{this.observable$?.next("error")}}))}static#t=this.\u0275fac=function(d){return new(d||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-edit-fullname"]],inputs:{user:"user",observable$:"observable$"},standalone:!0,features:[t.UHJ],decls:4,vars:3,consts:()=>{let n,d,a;return n="The name cannot be empty.",d="\n           The name must be at least \n          " + "\ufffd0\ufffd" + "\n           characters long. \n        ",a="Enter your full name.",[[1,"font-normal"],["tuiAutoFocus","",3,"formControl","tuiTextfieldLabelOutside","keydown.enter"],["class","form-text error"],[1,"form-text","error"],n,d,[1,"form-text"],a]},template:function(d,a){if(1&d&&(t.I0R(0,"div",0)(1,"tui-input",1),t.qCj("keydown.enter",function(){return a.submit()}),t.C$Y(),t.yuY(2,j,2,2)(3,V,2,0),t.C$Y()),2&d){let E;t.yG2(),t.E7m("formControl",a.control)("tuiTextfieldLabelOutside",!0),t.yG2(),t.C0Y(2,(E=a.control.touched&&a.control.errors)?2:3,E)}},dependencies:[x.sl,x.ue,x.ug,y.CQ,y.Oo,y.cP,P.aS,P.E9,F.m6,F.gJ],styles:["[_nghost-%COMP%]{display:inline-block;width:100%;min-width:200px;max-width:400px}[_nghost-%COMP%]   .form-text[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}"]})}return o})();function H(o,h){1&o&&(t.I0R(0,"p",3),t.aS0(1,4),t.C$Y())}function J(o,h){if(1&o&&(t.I0R(0,"p",3),t.aS0(1,5),t.C$Y()),2&o){const n=t.GaO();t.yG2(),t.oBb(n.minlength.requiredLength),t.Ylm(1)}}function Z(o,h){1&o&&t.yuY(0,H,2,0,"p",2)(1,J,2,1,"p",2),2&o&&(t.C0Y(0,h.required?0:-1),t.yG2(),t.C0Y(1,h.minlength?1:-1))}function q(o,h){1&o&&(t.I0R(0,"p",6),t.aS0(1,7),t.C$Y())}let tt=(()=>{class o{constructor(){this.control=new x.Ku(null,[x.AQ.required,x.AQ.minLength(3)]),this.destroyRef=(0,t.uUt)(t.eM9),this.profile=(0,t.uUt)(O.x)}ngOnInit(){this.control.setValue(this.profile.cu()?.username),this.observable$?.pipe((0,u.ay)(this.destroyRef)).subscribe(n=>{"submit"===n&&this.submit()})}submit(){this.control.invalid||(this.observable$?.next("submitting"),this.profile.update({username:this.control.value}).subscribe({next:()=>{this.observable$?.next("terminated")},error:()=>{this.observable$?.next("error")}}))}static#t=this.\u0275fac=function(d){return new(d||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-edit-username"]],inputs:{user:"user",observable$:"observable$"},standalone:!0,features:[t.UHJ],decls:4,vars:3,consts:()=>{let n,d,a;return n="The username cannot be empty.",d="\n           The username must be at least \n          " + "\ufffd0\ufffd" + "\n           characters long. \n        ",a="Enter your username",[[1,"font-normal"],["tuiAutoFocus","",3,"formControl","tuiTextfieldLabelOutside","keydown.enter"],["class","form-text error"],[1,"form-text","error"],n,d,[1,"form-text"],a]},template:function(d,a){if(1&d&&(t.I0R(0,"div",0)(1,"tui-input",1),t.qCj("keydown.enter",function(){return a.submit()}),t.C$Y(),t.yuY(2,Z,2,2)(3,q,2,0),t.C$Y()),2&d){let E;t.yG2(),t.E7m("formControl",a.control)("tuiTextfieldLabelOutside",!0),t.yG2(),t.C0Y(2,(E=a.control.touched&&a.control.errors)?2:3,E)}},dependencies:[x.sl,x.ue,x.ug,y.CQ,y.Oo,y.cP,P.aS,P.E9,F.m6,F.gJ],styles:["[_nghost-%COMP%]{display:inline-block;width:100%;min-width:200px;max-width:400px}[_nghost-%COMP%]   .form-text[_ngcontent-%COMP%]{margin-bottom:0;margin-top:0}"]})}return o})();function et(o,h){1&o&&(t.I0R(0,"mat-icon"),t.OEk(1,"done"),t.C$Y())}function ot(o,h){1&o&&(t.I0R(0,"mat-icon"),t.OEk(1,"close"),t.C$Y())}function it(o,h){if(1&o){const n=t.KQA();t.I0R(0,"div",20),t.wR5(1,"app-edit-fullname",21),t.I0R(2,"div",22)(3,"button",23),t.qCj("click",function(){const E=t.usT(n).$implicit;return t.CGJ(E.next("submit"))}),t.C$Y(),t.I0R(4,"button",24),t.qCj("click",function(){const E=t.usT(n).$implicit;return t.CGJ(E.next("cancel"))}),t.C$Y()(),t.yuY(5,et,2,0,"ng-template",null,25,t.gJz)(7,ot,2,0,"ng-template",null,26,t.gJz),t.C$Y()}if(2&o){const n=h.$implicit,d=t.Gew(6),a=t.Gew(8),E=t.GaO(2);t.yG2(),t.E7m("user",E.user)("observable$",n),t.yG2(2),t.E7m("icon",d),t.yG2(),t.E7m("icon",a)}}function nt(o,h){1&o&&(t.I0R(0,"mat-icon"),t.OEk(1,"done"),t.C$Y())}function rt(o,h){1&o&&(t.I0R(0,"mat-icon"),t.OEk(1,"close"),t.C$Y())}function at(o,h){if(1&o){const n=t.KQA();t.I0R(0,"div",20),t.wR5(1,"app-edit-username",21),t.I0R(2,"div",22)(3,"button",23),t.qCj("click",function(){const E=t.usT(n).$implicit;return t.CGJ(E.next("submit"))}),t.C$Y(),t.I0R(4,"button",24),t.qCj("click",function(){const E=t.usT(n).$implicit;return t.CGJ(E.next("cancel"))}),t.C$Y()(),t.yuY(5,nt,2,0,"ng-template",null,25,t.gJz)(7,rt,2,0,"ng-template",null,26,t.gJz),t.C$Y()}if(2&o){const n=h.$implicit,d=t.Gew(6),a=t.Gew(8),E=t.GaO(2);t.yG2(),t.E7m("user",E.user)("observable$",n),t.yG2(2),t.E7m("icon",d),t.yG2(),t.E7m("icon",a)}}function _t(o,h){1&o&&(t.I0R(0,"p",27),t.aS0(1,28),t.C$Y(),t.I0R(2,"p",29),t.aS0(3,30),t.C$Y(),t.I0R(4,"a",31),t.aS0(5,32),t.C$Y())}const ut=o=>({"rotate-180":o});function st(o,h){if(1&o){const n=t.KQA();t.I0R(0,"div"),t.yuY(1,it,9,4,"ng-template",null,3,t.gJz)(3,at,9,4,"ng-template",null,4,t.gJz),t.I0R(5,"app-profile-item",5)(6,"span"),t.OEk(7),t.C$Y()(),t.I0R(8,"app-profile-item",6)(9,"span"),t.OEk(10),t.C$Y()(),t.I0R(11,"app-profile-item",7)(12,"span",8),t.OEk(13),t.C$Y()(),t.I0R(14,"app-profile-item",9)(15,"span"),t.OEk(16,"*********"),t.C$Y()(),t.I0R(17,"app-profile-item",10)(18,"span"),t.OEk(19),t.wVc(20,"date"),t.wVc(21,"date"),t.C$Y()()(),t.I0R(22,"tui-accordion-item",11),t.iHE("openChange",function(a){t.usT(n);const E=t.GaO();return t.kNx(E.deleteAccordionOpen,a)||(E.deleteAccordionOpen=a),t.CGJ(a)}),t.I0R(23,"h3",12)(24,"div",13)(25,"span"),t.aS0(26,14),t.C$Y(),t.I0R(27,"span",15),t.aS0(28,16),t.C$Y()(),t.I0R(29,"span",17)(30,"mat-icon",18),t.OEk(31,"keyboard_arrow_down"),t.C$Y()()(),t.yuY(32,_t,6,0,"ng-template",19),t.C$Y()}if(2&o){const n=t.Gew(2),d=t.Gew(4),a=t.GaO();t.yG2(5),t.E7m("editTemplate",n),t.yG2(2),t.cNF(a.user.fullname||"--"),t.yG2(),t.E7m("editTemplate",d),t.yG2(2),t.cNF(a.user.username||"--"),t.yG2(3),t.cNF(a.user.email||"--"),t.yG2(4),t.E7m("editable",!1),t.yG2(2),t.CAO("",t.g7$(20,11,a.user.created_at,"longDate"),", ",t.g7$(21,14,a.user.created_at,"shortTime"),""),t.yG2(3),t.E7m("showArrow",!1),t.OKB("open",a.deleteAccordionOpen),t.yG2(8),t.E7m("ngClass",t.S45(17,ut,a.deleteAccordionOpen))}}let lt=(()=>{class o{constructor(){this.deleteAccordionOpen=!1,this.profile=(0,t.uUt)(O.x),(0,t.o3l)(()=>{this.user=this.profile.cu()})}onEdit(n){console.log("Editing",n)}static#t=this.\u0275fac=function(d){return new(d||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-user-profile"]],standalone:!0,features:[t.UHJ],decls:5,vars:3,consts:()=>{let n,d,a,E,G,w,z,Y,B,K,W;return n="Your profile",d="Your name",a="Login username",E="Email address",G="Password",w="Account created.",z="Deletion",Y="Delete your account and remove all associated data.",B="\n           If you wish to delete your account from our platform, follow the\n          instructions below. \n        ",K="\n           WARNING: this operation is irreversible and by proceeding with the\n          account deletion all your data will be lost and cannot be recovered! \n        ",W="Delete account",[[3,"overlay","showLoader"],[1,"block","mb-[5]"],n,["editFullname",""],["editUsername",""],["icon","badge","label",d,3,"editTemplate"],["icon","badge","label",a,3,"editTemplate"],["icon","alternate_email","label",E,"link","edit-email"],[1,"break-all"],["icon","lock","label",G,"link","edit-password"],["icon","edit_calendar","label",w,3,"editable"],[1,"container","mt-5",3,"showArrow","open","openChange"],[1,"flex","flex-row","items-center","justify-between","|","text-2xl","font-bold","|","whitespace-normal"],[1,"flex","flex-col"],z,[1,"text-sm","text-gray-400","font-normal"],Y,[1,"text-[40px]/[20px]"],["inline","",1,"me-2","transition-all","duration-500",3,"ngClass"],["tuiAccordionItemContent",""],[1,"flex","flex-row","flex-wrap","gap-2"],[3,"user","observable$"],[1,"flex","flex-row","gap-2"],["tuiIconButton","","appearance","primary","type","button",3,"icon","click"],["tuiIconButton","","appearance","secondary-destructive","type","button",3,"icon","click"],["confirmIcon",""],["cancelIcon",""],[1,"mb-2"],B,[1,"text-red-800","font-bold","mb-2"],K,["tuiButton","","appearance","accent","routerLink","delete"],W]},template:function(d,a){1&d&&(t.I0R(0,"tui-loader",0)(1,"h1",1),t.aS0(2,2),t.C$Y(),t.yuY(3,st,33,19),t.C$Y(),t.wR5(4,"router-outlet")),2&d&&(t.E7m("overlay",!0)("showLoader",!a.user),t.yG2(3),t.C0Y(3,a.user?3:-1))},dependencies:[r.MD,r.QF,r.y,c.qQ,c.cP,c.ER,I.Sk,I.Cb,p.oB,p.qL,A,y.CQ,P.aS,x.sl,f.CI,f.Kw,Q,$.Ep,$._Q,$.Up,tt],styles:["[_nghost-%COMP%]{--dot-size: .35rem;width:100%}@media (min-width: 640px){[_nghost-%COMP%]{max-width:640px}}@media (min-width: 768px){[_nghost-%COMP%]{max-width:768px}}@media (min-width: 1024px){[_nghost-%COMP%]{max-width:1024px}}@media (min-width: 1280px){[_nghost-%COMP%]{max-width:1280px}}@media (min-width: 1536px){[_nghost-%COMP%]{max-width:1536px}}[_nghost-%COMP%]{margin-left:auto;margin-right:auto;display:block}[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]{margin-inline-end:.5rem;display:flex;flex-direction:row;align-items:center;border-inline-end-width:0px;padding-inline-end:.5rem}@media (min-width: 640px){[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]{border-inline-end-width:1px}}[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{min-width:24px}[_nghost-%COMP%]   .anagraphic-data-item[_ngcontent-%COMP%]:last-child{border-inline-end-width:0px}[_nghost-%COMP%]     tui-accordion-item   .t-header{padding:1.5rem;--tw-text-opacity: 1;color:rgb(234 88 12 / var(--tw-text-opacity))}"]})}return o})()},832:(N,R,e)=>{e.d(R,{I:()=>P,w:()=>I});var t=e(4496),O=e(3480);let I=(()=>{class f{constructor(r){this.tuiFocusVisibleChange=r}}return f.\u0275fac=function(r){return new(r||f)(t.GI1(O.MF))},f.\u0275dir=t.Sc5({type:f,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([O.UF,O.MF])]}),f})(),P=(()=>{class f{}return f.\u0275fac=function(r){return new(r||f)},f.\u0275mod=t.a4G({type:f}),f.\u0275inj=t.s3X({}),f})()},1096:(N,R,e)=>{e.d(R,{O:()=>v,h:()=>c});var t=e(4496),O=e(900),I=e(4164),P=e(3412),f=e(4704),p=e(5568),r=e(4e3),u=e(2644);let c=(()=>{class C{constructor({nativeElement:l},S){this.tuiFocusedChange=(0,P.U)((0,O.Ax)(l,"focusin"),(0,O.Ax)(l,"focusout")).pipe((0,f.k)(()=>(0,I.ER)(l)),(0,p.W)(!1),(0,r.a)(),(0,u.s)(1),(0,O.OA)(S))}}return C.\u0275fac=function(l){return new(l||C)(t.GI1(t.GMv),t.GI1(t.WW2))},C.\u0275dir=t.Sc5({type:C,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),C})(),v=(()=>{class C{}return C.\u0275fac=function(l){return new(l||C)},C.\u0275mod=t.a4G({type:C}),C.\u0275inj=t.s3X({}),C})()},9880:(N,R,e)=>{e.d(R,{kP:()=>T,kh:()=>U,st:()=>L});var t=e(4496),O=e(3480),I=e(4392),P=e(3120),f=e(3616),p=e(7692),r=e(1368);const u=["wrapper"];function c(M,D){if(1&M&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&M){const s=t.GaO(2);t.E7m("overlay",!0)("showLoader",s.loading),t.yG2(),t.E7m("ngTemplateOutlet",s.content)}}function v(M,D){if(1&M&&(t.SAx(0),t._Xx(1),t.yuY(2,c,2,3,"tui-loader",3),t.k70()),2&M){const s=t.GaO();t.yG2(2),t.E7m("ngIf",s.async)("ngIfElse",s.content)}}const C=["*"];let T=(()=>{class M{}return M.\u0275fac=function(s){return new(s||M)},M.\u0275dir=t.Sc5({type:M,selectors:[["","tuiExpandContent",""]]}),M})();let L=(()=>{class M{constructor(s,i){this.cdr=s,this.destroy$=i,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(s){if(null!==this.expanded)return 0!==this.state?(this.expanded=s,void(this.state=3)):(this.expanded=s,void this.retrigger(this.async&&s?1:3));this.expanded=s}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:s,state:i,contentWrapper:m}=this;return s&&2===i||!s&&3===i?0:m&&(!s&&2===i||s&&3===i)?m.nativeElement.offsetHeight:m&&s&&1===i?Math.max(m.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:s}){"opacity"===s&&3===this.state&&(this.state=0)}onExpandLoaded(s){s.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(s){this.state=2,(0,P.k)(0).pipe((0,f.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=s,this.cdr.markForCheck())})}}return M.\u0275fac=function(s){return new(s||M)(t.GI1(t.kD9),t.GI1(O.UF,2))},M.\u0275cmp=t.In1({type:M,selectors:[["tui-expand"]],contentQueries:function(s,i,m){if(1&s&&t.szK(m,T,5,t.Yw2),2&s){let _;t.wto(_=t.Gqi())&&(i.content=_.first)}},viewQuery:function(s,i){if(1&s&&t.CC$(u,5),2&s){let m;t.wto(m=t.Gqi())&&(i.contentWrapper=m.first)}},hostVars:9,hostBindings:function(s,i){1&s&&t.qCj("transitionend.self",function(_){return i.onTransitionEnd(_)})("tui-expand-loaded",function(_){return i.onExpandLoaded(_)}),2&s&&(t.e48("aria-expanded",i.expanded),t.m4B("height",i.height,"px"),t.eAK("_expanded",i.expanded)("_overflow",i.overflow)("_loading",i.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([O.UF])],ngContentSelectors:C,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(s,i){1&s&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,v,3,2,"ng-container",2),t.C$Y()),2&s&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",i.overflow),t.yG2(2),t.E7m("ngIf",i.contentVisible))},dependencies:[p.Cb,r.u_,r.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[I.cI]},changeDetection:0}),M})(),U=(()=>{class M{}return M.\u0275fac=function(s){return new(s||M)},M.\u0275mod=t.a4G({type:M}),M.\u0275inj=t.s3X({imports:[[r.MD,p.Sk]]}),M})()},8976:(N,R,e)=>{e.d(R,{Gy:()=>p,Ko:()=>f});var t=e(4496),O=e(3480),I=e(1368);let P=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275cmp=t.In1({type:r,selectors:[["ng-component"]],hostAttrs:[1,"tui-group-styles"],decls:0,vars:0,template:function(c,v){},styles:[".tui-group{position:relative;display:flex;isolation:isolate}.tui-group>*{flex:1 1 0;min-width:0}.tui-group>*:not(:last-child){margin-right:.125rem}.tui-group.tui-group>*:nth-child(n){border-radius:0}.tui-group_collapsed>*{z-index:1}.tui-group_collapsed>*:not(:last-child){margin-right:-1px}.tui-group_collapsed>*._readonly,.tui-group_collapsed>*._disabled,.tui-group_collapsed>*._readonly:hover,.tui-group_collapsed>*._disabled:hover{z-index:0}.tui-group_collapsed>*:hover,.tui-group_collapsed>*._hovered,.tui-group_collapsed>*._pressed{z-index:3}.tui-group_collapsed>*._invalid{z-index:2}.tui-group_collapsed>*._invalid:hover,.tui-group_collapsed>*._invalid._hovered,.tui-group_collapsed>*._invalid._pressed{z-index:4}.tui-group_collapsed>*._hosted_dropdown_focused,.tui-group_collapsed>*._focus-visible,.tui-group_collapsed>*._focused.ng-touched,.tui-group_collapsed>*._focused.ng-untouched{z-index:5}.tui-group_collapsed>*._active,.tui-group_collapsed>*[data-appearance=whiteblock-active]{z-index:6}.tui-group_collapsed>*._focus-visible._focused,.tui-group_collapsed>*._focus-visible._active,.tui-group_collapsed>*._focus-visible[data-appearance=whiteblock-active]{z-index:7}.tui-group_orientation_vertical{display:inline-flex;flex-direction:column}.tui-group_orientation_vertical>*{min-height:auto;flex:0 0 auto}.tui-group_orientation_vertical>*:not(:last-child){margin-right:0;margin-bottom:.125rem}.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}.tui-group_rounded.tui-group_orientation_horizontal>*:first-child{border-top-left-radius:var(--tui-radius-m);border-bottom-left-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal>*:last-child{border-top-right-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-bottom-left-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_horizontal.tui-group_radius_large>*:last-child{border-top-right-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical>*:first-child{border-top-left-radius:var(--tui-radius-m);border-top-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical>*:last-child{border-bottom-left-radius:var(--tui-radius-m);border-bottom-right-radius:var(--tui-radius-m)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:first-child{border-top-left-radius:var(--tui-radius-l);border-top-right-radius:var(--tui-radius-l)}.tui-group_rounded.tui-group_orientation_vertical.tui-group_radius_large>*:last-child{border-bottom-left-radius:var(--tui-radius-l);border-bottom-right-radius:var(--tui-radius-l)}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-m)}}@media screen and (max-width: 47.9625em){.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:first-child:not(:last-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical:not(.tui-group_collapsed)>*:last-child:not(:first-child),.tui-group_rounded.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:last-child:not(:first-child){border-radius:var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_vertical{width:100%}.tui-group_adaptive.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical>*:not(:last-child){margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_vertical.tui-group_collapsed>*:not(:last-child){margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_orientation_horizontal{flex-direction:column;width:100%}.tui-group_adaptive.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal>*:not(:last-child){margin-right:0;margin-bottom:1rem}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-m) var(--tui-radius-m) 0 0}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-m) var(--tui-radius-m)}.tui-group_adaptive.tui-group_orientation_horizontal.tui-group_collapsed>*:not(:last-child){margin-right:0;margin-bottom:-1px}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_vertical.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}@media screen and (max-width: 47.9625em){.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal>*:nth-child(n):not(:only-child){border-radius:var(--tui-radius-l)}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:nth-child(n):not(:only-child){border-radius:0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:first-child:not(:last-child){border-radius:var(--tui-radius-l) var(--tui-radius-l) 0 0}.tui-group_adaptive.tui-group_radius_large.tui-group_orientation_horizontal.tui-group_collapsed>*:last-child:not(:first-child){border-radius:0 0 var(--tui-radius-l) var(--tui-radius-l)}}.tui-group__auto-width-item{min-width:auto;flex:0 0 auto}.tui-group .tui-group__inherit-item{border-radius:inherit}\n"],encapsulation:2,changeDetection:0}),r})(),f=(()=>{class r{constructor(c){this.orientation="horizontal",this.adaptive=!1,this.collapsed=!1,this.rounded=!0,this.size="m",c.addComponent(P)}get orientationHorizontal(){return"horizontal"===this.orientation}get orientationVertical(){return"vertical"===this.orientation}get sizeLarge(){return"l"===this.size}}return r.\u0275fac=function(c){return new(c||r)(t.GI1(O.WS))},r.\u0275dir=t.Sc5({type:r,selectors:[["","tuiGroup","",5,"ng-container"]],hostAttrs:["role","group",1,"tui-group"],hostVars:12,hostBindings:function(c,v){2&c&&t.eAK("tui-group_adaptive",v.adaptive)("tui-group_collapsed",v.collapsed)("tui-group_rounded",v.rounded)("tui-group_orientation_horizontal",v.orientationHorizontal)("tui-group_orientation_vertical",v.orientationVertical)("tui-group_radius_large",v.sizeLarge)},inputs:{orientation:"orientation",adaptive:"adaptive",collapsed:"collapsed",rounded:"rounded",size:"size"}}),r})(),p=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({imports:[[I.MD]]}),r})()},4736:(N,R,e)=>{e.d(R,{M:()=>P,O:()=>f});var t=e(4496),O=e(5944),I=e(4704);let P=(()=>{class p{constructor(u){this.months$=u}transform({month:u}){return this.months$.pipe((0,I.k)(c=>c[u]))}}return p.\u0275fac=function(u){return new(u||p)(t.GI1(O.GU,16))},p.\u0275pipe=t.UTH({name:"tuiMonth",type:p,pure:!0}),p})(),f=(()=>{class p{}return p.\u0275fac=function(u){return new(u||p)},p.\u0275mod=t.a4G({type:p}),p.\u0275inj=t.s3X({}),p})()},7176:(N,R,e)=>{e.d(R,{S2:()=>U,ie:()=>L,qE:()=>D,qu:()=>T});var t=e(4496),O=e(3656),I=e(5608),P=e(466),f=e(8048),p=e(1040),r=e(2528),u=e(1368);function c(i,m){1&i&&t.wR5(0,"tui-svg",2),2&i&&t.E7m("src",m.polymorpheusOutlet)}function v(i,m){1&i&&t.C_f(0)}const T=(0,r.AL)({iconSmall:"tuiIconChevronDown",iconLarge:"tuiIconChevronDownLarge"}),L=new p.WO((()=>{class i{constructor(_,g,A){this.dropdown=_,this.textfieldSize=g,this.options=A}get rotated(){return this.dropdown.open}get arrowIcon(){return(0,I.yi)(this.textfieldSize.size)?this.options.iconLarge:this.options.iconSmall}}return i.\u0275fac=function(_){return new(_||i)(t.GI1(P.Qw),t.GI1(f.$K),t.GI1(T))},i.\u0275cmp=t.In1({type:i,selectors:[["tui-arrow"]],hostVars:2,hostBindings:function(_,g){2&_&&t.eAK("_rotated",g.rotated)},decls:3,vars:4,consts:[[3,"src",4,"polymorpheusOutlet"],[4,"ngIf"],[3,"src"]],template:function(_,g){1&_&&(t.yuY(0,c,1,1,"tui-svg",0)(1,v,1,0,"ng-container",1),t.wVc(2,"async")),2&_&&(t.E7m("polymorpheusOutlet",g.arrowIcon),t.yG2(),t.E7m("ngIf",t.kDX(2,2,g.dropdown.openChange)))},dependencies:[O.Wu,p.Af,u.u_,u.a],styles:["[_nghost-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;cursor:pointer;pointer-events:none}._rotated[_nghost-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),i})());let U=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[u.MD,O.Yt,p.Ux]]}),i})();const D=(0,r.AL)({interactive:L,disabled:L})},3797:(N,R,e)=>{e.d(R,{CQ:()=>s,Oo:()=>M,cP:()=>D});var t=e(4496),O=e(6504),I=e(3044),P=e(1800),f=e(4164),p=e(4680),r=e(466),u=e(7936),c=e(8048),v=e(4336),C=e(5944),T=e(9371),l=e(796),S=e(1368);const L=["*",[["input"]]],U=["*","input"];let M=(()=>{class i extends P._y{constructor(_,g,A,y){super(_,g,y),this.textfieldSize=A,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,f.ER)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(_){this.value=_,this.open=!0}onActiveZone(_){this.updateFocused(_)}handleOption(_){this.setNativeValue(String(_)),this.focusInput(),this.value=String(_),this.open=!1}getFallbackValue(){return""}focusInput(_=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:_})}setNativeValue(_){this.nativeFocusableElement&&(this.nativeFocusableElement.value=_)}}return i.\u0275fac=function(_){return new(_||i)(t.GI1(O.eq,10),t.GI1(t.kD9),t.GI1(c.$K),t.GI1(P.cn,8))},i.\u0275cmp=t.In1({type:i,selectors:[["tui-input"]],contentQueries:function(_,g,A){if(1&_&&t.szK(A,v.Ux,5,t.Yw2),2&_){let y;t.wto(y=t.Gqi())&&(g.datalist=y.first)}},viewQuery:function(_,g){if(1&_&&(t.CC$(r.Qw,5),t.CC$(u.y_,5)),2&_){let A;t.wto(A=t.Gqi())&&(g.hostedDropdown=A.first),t.wto(A=t.Gqi())&&(g.textfield=A.first)}},hostVars:1,hostBindings:function(_,g){2&_&&t.e48("data-size",g.size)},features:[t.M5G([l.g3,(0,p.NK)(i),(0,C.UH)(i),(0,P.q4)(i)],[l.YL]),t.eg9],ngContentSelectors:U,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(_,g){1&_&&(t.kPM(L),t.I0R(0,"tui-hosted-dropdown",0),t.iHE("openChange",function(y){return t.kNx(g.open,y)||(g.open=y),y}),t.qCj("tuiActiveZoneChange",function(y){return g.onActiveZone(y)}),t.I0R(1,"tui-primitive-textfield",1),t.qCj("valueChange",function(y){return g.onValueChange(y)}),t._Xx(2),t._Xx(3,1,["ngProjectAs","input",5,["input"]]),t.C$Y()()),2&_&&(t.E7m("canOpen",g.canOpen)("content",g.datalist||""),t.OKB("open",g.open),t.yG2(),t.E7m("disabled",g.computedDisabled)("focusable",g.computedFocusable)("invalid",g.computedInvalid)("nativeId",g.nativeId)("pseudoFocus",g.computedFocused)("pseudoHover",g.pseudoHover)("readOnly",g.readOnly)("value",g.value))},dependencies:[r.Qw,u.y_,I.M,u.KQ],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),i})(),D=(()=>{class i extends T.Cm{onValueChange(_){this.host.onValueChange(_)}}return i.\u0275fac=(()=>{let m;return function(g){return(m||(m=t.otF(i)))(g||i)}})(),i.\u0275dir=t.Sc5({type:i,selectors:[["tui-input"]],features:[t.M5G([(0,C.iu)(i)]),t.eg9]}),i})(),s=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[S.MD,I.L,u.KA,r.GE]]}),i})()},796:(N,R,e)=>{e.d(R,{YL:()=>C,g3:()=>T}),e(4736);var O=e(5193),I=e(5944),p=(e(3012),e(2700),e(528)),u=(e(4704),e(4496)),c=e(6504);const C=(0,O.Sk)({limitWidth:"fixed",align:"right"}),T={provide:I.Y9,deps:[[new u.T7N,new u.Yiy,c.Y6]],useFactory:p.Z}},4872:(N,R,e)=>{e.d(R,{ay:()=>P});var t=e(4496),O=e(3252),I=e(3616);function P(r){r||((0,t.yAg)(P),r=(0,t.uUt)(t.eM9));const u=new O._(c=>r.onDestroy(c.next.bind(c)));return c=>c.pipe((0,I.a)(u))}}}]);