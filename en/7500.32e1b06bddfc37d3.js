"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7500],{7900:(h,D,n)=>{n.d(D,{g:()=>u});var e=n(4496),i=n(6504),r=n(3480),c=n(5e3),v=n(1960),C=n(8212),T=n(4336),s=n(8048),p=n(5656),P=n(9880),m=n(3797),g=n(8588),a=n(5188),A=n(9888),d=n(6528),f=n(6380),_=n(9956),E=n(2992),t=n(9722),o=n(7936);let u=(()=>{class O{constructor(){this.destroy$=(0,e.uUt)(r.UF),this.router=(0,e.uUt)(E.E5),this.route=(0,e.uUt)(E.gV),this.submit=new e._w7,this.disabled=(0,e.OCB)(!1),this.form=new i.WC({title:new i.Ku("\n           Payment at the time of booking required \n          " + Date.now() + "\n        ",[i.AQ.required]),active:new i.Ku(!0,[i.AQ.required,i.AQ.pattern(/^(true|false)$/)]),payment_value:new i.Ku(null,[i.AQ.required])}),this.submitted=!1,this._item=null,this.cases=(0,e.OCB)(null),this.e=this.errorsForControl}set item(R){if(!(R instanceof v.u))return console.warn("PreorderReservationGroupFormComponent: value is blank or invalid",R),this.form.reset(),void(this._item=null);this._item=R,this.form.patchValue({payment_value:R.payment_value??null,title:R.title??null,active:"active"===R.status})}get item(){return this._item}errorsForControl(R){const l=this.form.get(R);return l&&(this.submitted||l.touched)?l.errors??null:null}cancel(){this.router.navigate(["../"],{relativeTo:this.route})}formSubmit(){if(this.submitted=!0,this.form.invalid)return;const R={...this.form.value,...this.cases()??{}};R.status=R.active?"active":"inactive",delete R.active,this.submit.emit(R)}static#e=this.\u0275fac=function(l){return new(l||O)};static#t=this.\u0275cmp=e.In1({type:O,selectors:[["app-preorder-reservation-group-form"]],inputs:{item:"item"},outputs:{submit:"submit"},standalone:!0,features:[e.M5G([r.UF]),e.UHJ],decls:31,vars:9,consts:()=>{let R,l,M,I,N,y,U;return R="Title: visible only to you",l="Payment value",M="Activation",I="Request payment?",N="When are payments due?",y="Confirm",U="Cancel",[[3,"formGroup","ngSubmit"],[1,"block","mb-3"],["formControlName","title",3,"tuiAutoFocus"],R,[3,"errors"],[3,"formControlName","tuiTextfieldPrefix"],l,["tuiTextfield",""],[1,"text-xl"],M,["contentAlign","right","formControlName","active","size","l"],I,[1,"mb-3","text-2xl"],N,[1,"block","mb-3",3,"item","editable","outputMamiChanges"],[1,"flex","items-center"],["type","submit","tuiButton","","appearance","primary"],y,["tuiButton","","appearance","icon","type","button",3,"click"],U]},template:function(l,M){1&l&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return M.formSubmit()}),e.I0R(1,"div",1)(2,"tui-input",2),e.SAx(3),e.aS0(4,3),e.k70(),e.C$Y(),e.wR5(5,"app-errors",4),e.C$Y(),e.I0R(6,"div",1)(7,"tui-input-number",5),e.SAx(8),e.aS0(9,6),e.k70(),e.wR5(10,"input",7),e.C$Y(),e.wR5(11,"app-errors",4),e.C$Y(),e.I0R(12,"div",1)(13,"p",8),e.SAx(14),e.aS0(15,9),e.k70(),e.C$Y(),e.I0R(16,"tui-checkbox-block",10),e.SAx(17),e.aS0(18,11),e.k70(),e.C$Y(),e.wR5(19,"app-errors",4),e.C$Y(),e.I0R(20,"h2",12),e.aS0(21,13),e.C$Y(),e.I0R(22,"div",1)(23,"app-select-turns-paymentv2",14),e.qCj("outputMamiChanges",function(N){return M.cases.set(N)}),e.C$Y()(),e.I0R(24,"div",15)(25,"button",16),e.SAx(26),e.aS0(27,17),e.k70(),e.C$Y(),e.I0R(28,"button",18),e.qCj("click",function(){return M.cancel()}),e.SAx(29),e.aS0(30,19),e.k70(),e.C$Y()()()),2&l&&(e.E7m("formGroup",M.form),e.yG2(2),e.E7m("tuiAutoFocus",!0),e.yG2(3),e.E7m("errors",M.e("title")),e.yG2(2),e.E7m("formControlName","payment_value")("tuiTextfieldPrefix","\u20ac"),e.yG2(4),e.E7m("errors",M.e("payment_value")),e.yG2(8),e.E7m("errors",M.e("active")),e.yG2(4),e.E7m("item",M.item)("editable",!0))},dependencies:[i.y,i.sz,i.ue,i.u,i.sl,i.uW,i.Wo,C.CI,C.Kw,m.CQ,m.Oo,m.cP,o.b,g.Y3,a.my,T.A$,c.m6,c.gJ,_.g,A.Q7,A.mi,A.Qj,s.aS,s.Id,p.WY,d.i,d.I,P.kh,f.iO,t.t],changeDetection:0})}return O})()},1200:(h,D,n)=>{n.d(D,{A:()=>C,m:()=>T});var e=n(4496),i=n(900),r=n(3480),c=n(800),v=n(3616);let C=(()=>{class s{constructor(P,m,g){this.el=P,this.zone=m,this.destroy$=g,this.eventName=""}ngOnInit(){(0,c.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,i.Uv)(this.zone),(0,i.uy)(),(0,v.a)(this.destroy$)).subscribe()}}return s.\u0275fac=function(P){return new(P||s)(e.GI1(e.GMv),e.GI1(e.WW2),e.GI1(r.UF,2))},s.\u0275dir=e.Sc5({type:s,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[e.Wk5.None,"tuiPreventDefault","eventName"]},features:[e.M5G([r.UF])]}),s})(),T=(()=>{class s{}return s.\u0275fac=function(P){return new(P||s)},s.\u0275mod=e.a4G({type:s}),s.\u0275inj=e.s3X({}),s})()},9880:(h,D,n)=>{n.d(D,{kP:()=>g,kh:()=>f,st:()=>d});var e=n(4496),i=n(3480),r=n(4392),c=n(3120),v=n(3616),C=n(7692),T=n(1368);const s=["wrapper"];function p(_,E){if(1&_&&(e.I0R(0,"tui-loader",4),e.C_f(1,5),e.C$Y()),2&_){const t=e.GaO(2);e.E7m("overlay",!0)("showLoader",t.loading),e.yG2(),e.E7m("ngTemplateOutlet",t.content)}}function P(_,E){if(1&_&&(e.SAx(0),e._Xx(1),e.yuY(2,p,2,3,"tui-loader",3),e.k70()),2&_){const t=e.GaO();e.yG2(2),e.E7m("ngIf",t.async)("ngIfElse",t.content)}}const m=["*"];let g=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275dir=e.Sc5({type:_,selectors:[["","tuiExpandContent",""]]}),_})();let d=(()=>{class _{constructor(t,o){this.cdr=t,this.destroy$=o,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(t){if(null!==this.expanded)return 0!==this.state?(this.expanded=t,void(this.state=3)):(this.expanded=t,void this.retrigger(this.async&&t?1:3));this.expanded=t}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:t,state:o,contentWrapper:u}=this;return t&&2===o||!t&&3===o?0:u&&(!t&&2===o||t&&3===o)?u.nativeElement.offsetHeight:u&&t&&1===o?Math.max(u.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:t}){"opacity"===t&&3===this.state&&(this.state=0)}onExpandLoaded(t){t.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(t){this.state=2,(0,c.k)(0).pipe((0,v.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=t,this.cdr.markForCheck())})}}return _.\u0275fac=function(t){return new(t||_)(e.GI1(e.kD9),e.GI1(i.UF,2))},_.\u0275cmp=e.In1({type:_,selectors:[["tui-expand"]],contentQueries:function(t,o,u){if(1&t&&e.szK(u,g,5,e.Yw2),2&t){let O;e.wto(O=e.Gqi())&&(o.content=O.first)}},viewQuery:function(t,o){if(1&t&&e.CC$(s,5),2&t){let u;e.wto(u=e.Gqi())&&(o.contentWrapper=u.first)}},hostVars:9,hostBindings:function(t,o){1&t&&e.qCj("transitionend.self",function(O){return o.onTransitionEnd(O)})("tui-expand-loaded",function(O){return o.onExpandLoaded(O)}),2&t&&(e.e48("aria-expanded",o.expanded),e.m4B("height",o.height,"px"),e.eAK("_expanded",o.expanded)("_overflow",o.overflow)("_loading",o.loading))},inputs:{async:"async",expandedSetter:[e.Wk5.None,"expanded","expandedSetter"]},features:[e.M5G([i.UF])],ngContentSelectors:m,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(t,o){1&t&&(e.kPM(),e.I0R(0,"div",0,1),e.yuY(2,P,3,2,"ng-container",2),e.C$Y()),2&t&&(e.E7m("@tuiParentAnimation",void 0)("@.disabled",o.overflow),e.yG2(2),e.E7m("ngIf",o.contentVisible))},dependencies:[C.Cb,T.u_,T.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[r.cI]},changeDetection:0}),_})(),f=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=e.a4G({type:_}),_.\u0275inj=e.s3X({imports:[[T.MD,C.Sk]]}),_})()},812:(h,D,n)=>{n.d(D,{m2:()=>g,mU:()=>s,qS:()=>c,w3:()=>a}),n(4392);var i=n(2528);n(3840);const c={DMY:"dd/mm/yyyy",MDY:"mm/dd/yyyy",YMD:"yyyy/mm/dd"},s=/\([#]+\)|[#\- ]/g,g=(d,f,_,E)=>{if(!f?.isSingleDay||!_)return d;const t=(0,i.Kw)(Object.entries(_).map(([u,O])=>[u,-O])),o=f.from.append(E?t:_).append({day:E?1:-1});return E?o.dayBefore(d)?d:o:d&&o.dayAfter(d)?d:o},a={HH:23,MM:59,SS:59,MS:999}}}]);