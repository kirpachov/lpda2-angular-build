"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[5616],{9064:(A,C,t)=>{t.d(C,{w:()=>_});var e=t(4496),a=t(6504),O=t(3480),M=t(6700),v=t(3616),f=t(6684),p=t(3797),u=t(8588),g=t(1368),m=t(9956),P=t(1292);function T(s,o){if(1&s&&(e.I0R(0,"tui-textarea",2),e.OEk(1),e.C$Y()),2&s){const n=e.GaO().$implicit,i=e.GaO();e.E7m("formControl",n.control),e.yG2(),e.oRS(" ",i.getFullLang(n.lang)," ")}}function l(s,o){if(1&s&&(e.I0R(0,"tui-input",2),e.OEk(1),e.C$Y()),2&s){const n=e.GaO().$implicit,i=e.GaO();e.E7m("formControl",n.control),e.yG2(),e.oRS(" ",i.getFullLang(n.lang)," ")}}const S=s=>({"mb-3":s});function I(s,o){if(1&s&&(e.SAx(0),e.I0R(1,"div",1),e.yuY(2,T,2,2,"tui-textarea",2)(3,l,2,2),e.wR5(4,"app-errors",3),e.C$Y(),e.k70()),2&s){const n=o.$implicit,i=o.last,c=e.GaO();e.yG2(),e.E7m("ngClass",e.S45(3,S,!i)),e.yG2(),e.C0Y(2,c.long?2:3),e.yG2(2),e.E7m("errors",n.control.errors)}}const y=["*"];let _=(()=>{class s{constructor(){this.destroy$=new O.UF,this.long=!1,this.controls=(0,e.OCB)({}),this.controlsArr=(0,e.S6b)(()=>{const n=this.controls();return Object.keys(n).map(i=>({lang:i,control:n[i]}))}),this.touched$=new M.g(!1),this.value$=new M.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(n){this.value$.pipe((0,v.a)(this.destroy$)).subscribe({next:i=>n(i)})}registerOnTouched(n){this.touched$.pipe((0,f.I)(i=>!0===i)).subscribe({next:()=>n()})}writeValue(n){this.patchValue(n??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(n){return P.S[n]??n}controlChanged(n){this.value$.next({...this.value$.value,[n]:this.controls()[n].value})}patchValue(n){Object.keys(n).forEach(i=>this.addLang(i)),Object.keys(this.controls()).forEach(i=>{this.controls()[i].patchValue(n[i]??null)})}addLang(n){if(this.controls()[n])return;const i=new a.Ku;i.valueChanges.subscribe({next:()=>this.controlChanged(n)}),this.controls.set({...this.controls(),[n]:i})}static#e=this.\u0275fac=function(i){return new(i||s)};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[e.M5G([{provide:a.Y6,useExisting:(0,e.wd)(()=>s),multi:!0},O.UF]),e.UHJ],ngContentSelectors:y,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(i,c){1&i&&(e.kPM(),e._Xx(0),e.yuY(1,I,5,5,"ng-container",0)),2&i&&(e.yG2(),e.E7m("ngForOf",c.controlsArr()))},dependencies:[a.sl,a.ue,a.ug,p.CQ,p.Oo,p.cP,g.Iw,m.g,g.QF,u.Y3,u.wp,u.kd],changeDetection:0})}return s})()},8554:(A,C,t)=>{t.d(C,{g:()=>X});var e=t(4496),a=t(6504),O=t(3480),M=t(5e3),v=t(1960),f=t(8212),p=t(4336),u=t(8048),g=t(5656),m=t(9880),P=t(3797),T=t(8588),l=t(5188),S=t(9888),I=t(6528),y=t(6380),_=t(9956),s=t(1236),o=t(1744),n=t(9064),i=t(6404),c=t(3616),V=t(4e3),z=t(7748),G=t(6052);function B(E,$){1&E&&e.wR5(0,"app-preorder-reservation-group-preorder-type",3),2&E&&e.E7m("type",$.$implicit)}function W(E,$){if(1&E&&e.wR5(0,"tui-data-list-wrapper",4),2&E){const r=e.GaO(),R=e.Gew(1);e.E7m("itemContent",R)("items",r.options)}}const Y=["*"];let K=(()=>{class E{constructor(){this.destroy$=(0,e.uUt)(O.UF),this.control=new a.Ku(null),this.form=new a.WC({control:this.control}),this.options=[...i.i4]}writeValue(r){r&&!(0,i.ch)(r)&&(console.error("Invalid preorder type:",r),r=null),this.control.setValue(r||null)}registerOnChange(r){this.control.valueChanges.pipe((0,c.a)(this.destroy$),(0,V.a)()).subscribe({next:R=>r(R)})}registerOnTouched(r){this.registerOnChange(r)}setDisabledState(r){r?this.control.disable():this.control.enable()}static#e=this.\u0275fac=function(R){return new(R||E)};static#t=this.\u0275cmp=e.In1({type:E,selectors:[["app-select-preorder-type"]],standalone:!0,features:[e.M5G([O.UF,{provide:a.Y6,useExisting:(0,e.wd)(()=>E),multi:!0}]),e.UHJ],ngContentSelectors:Y,decls:5,vars:2,consts:[["cardContent",""],[3,"formControl","valueContent"],[3,"itemContent","items",4,"tuiDataList"],[3,"type"],[3,"itemContent","items"]],template:function(R,d){if(1&R&&(e.kPM(),e.yuY(0,B,1,1,"ng-template",null,0,e.gJz),e.I0R(2,"tui-select",1),e._Xx(3),e.yuY(4,W,1,2,"tui-data-list-wrapper",2),e.C$Y()),2&R){const N=e.Gew(1);e.yG2(2),e.E7m("formControl",d.control)("valueContent",N)}},dependencies:[l.my,l.cP,l.uO,z.c,a.sl,a.ue,a.ug,G.q8,G.OO,p.Ux],encapsulation:2,changeDetection:0})}return E})();var w=t(7936);let X=(()=>{class E{constructor(){this.destroy$=(0,e.uUt)(O.UF),this.router=(0,e.uUt)(s.E5),this.route=(0,e.uUt)(s.gV),this.submit=new e._w7,this.disabled=(0,e.OCB)(!1),this.form=new a.WC({title:new a.Ku("Pagamento alla prenotazione richiesto " + Date.now() + "",[a.AQ.required]),active:new a.Ku(!0,[a.AQ.required,a.AQ.pattern(/^(true|false)$/)]),payment_value:new a.Ku(null,[a.AQ.required]),message:new a.Ku(null,[]),preorder_type:new a.Ku(null,[a.AQ.required])}),this.submitted=!1,this._item=null,this.cases=(0,e.OCB)(null),this.e=this.errorsForControl}set item(r){if(!(r instanceof v.u))return console.warn("PreorderReservationGroupFormComponent: value is blank or invalid",r),this.form.reset(),void(this._item=null);this._item=r,this.form.patchValue({payment_value:r.payment_value??null,title:r.title??null,active:"active"===r.status,message:r.translations?.message||{},preorder_type:r.preorder_type})}get item(){return this._item}errorsForControl(r){const R=this.form.get(r);return R&&(this.submitted||R.touched)?R.errors??null:null}cancel(){this.router.navigate(["../"],{relativeTo:this.route})}formSubmit(){if(this.submitted=!0,this.form.invalid)return;const r={...this.form.value,...this.cases()??{}};r.status=r.active?"active":"inactive",delete r.active,this.submit.emit(r)}static#e=this.\u0275fac=function(R){return new(R||E)};static#t=this.\u0275cmp=e.In1({type:E,selectors:[["app-preorder-reservation-group-form"]],inputs:{item:"item"},outputs:{submit:"submit"},standalone:!0,features:[e.M5G([O.UF]),e.UHJ],decls:41,vars:14,consts:()=>{let r,R,d,N,D,x,U,F,L;return r="Titolo: visibile solo a te",R="Tipologia di pagamento",d="Valore pagamento",N="Messaggio per i clienti che cercano di prenotare",D="Attivazione",x="Richiedere il pagamento?",U="Quando sono richiesti pagamenti?",F="Conferma",L="Annulla",[[3,"formGroup","ngSubmit"],[1,"block","mb-3"],["formControlName","title",3,"tuiAutoFocus"],r,[3,"errors"],[1,"block",3,"formControl"],R,[3,"formControlName","tuiTextfieldPrefix"],d,["tuiTextfield",""],[3,"long","formControlName"],N,[1,"text-xl"],D,["contentAlign","right","formControlName","active","size","l"],x,[1,"mb-3","text-2xl"],U,[1,"block","mb-3",3,"item","editable","outputMamiChanges"],[1,"flex","items-center"],["type","submit","tuiButton","","appearance","primary"],F,["tuiButton","","appearance","icon","type","button",3,"click"],L]},template:function(R,d){1&R&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return d.formSubmit()}),e.I0R(1,"div",1)(2,"tui-input",2),e.SAx(3),e.aS0(4,3),e.k70(),e.C$Y(),e.wR5(5,"app-errors",4),e.C$Y(),e.I0R(6,"div",1)(7,"app-select-preorder-type",5),e.SAx(8),e.aS0(9,6),e.k70(),e.C$Y(),e.wR5(10,"app-errors",4),e.C$Y(),e.I0R(11,"div",1)(12,"tui-input-number",7),e.SAx(13),e.aS0(14,8),e.k70(),e.wR5(15,"input",9),e.C$Y(),e.wR5(16,"app-errors",4),e.C$Y(),e.I0R(17,"div",1)(18,"app-i18n-input",10),e.SAx(19),e.aS0(20,11),e.k70(),e.C$Y(),e.wR5(21,"app-errors",4),e.C$Y(),e.I0R(22,"div",1)(23,"p",12),e.SAx(24),e.aS0(25,13),e.k70(),e.C$Y(),e.I0R(26,"tui-checkbox-block",14),e.SAx(27),e.aS0(28,15),e.k70(),e.C$Y(),e.wR5(29,"app-errors",4),e.C$Y(),e.I0R(30,"h2",16),e.aS0(31,17),e.C$Y(),e.I0R(32,"div",1)(33,"app-select-turns-paymentv2",18),e.qCj("outputMamiChanges",function(D){return d.cases.set(D)}),e.C$Y()(),e.I0R(34,"div",19)(35,"button",20),e.SAx(36),e.aS0(37,21),e.k70(),e.C$Y(),e.I0R(38,"button",22),e.qCj("click",function(){return d.cancel()}),e.SAx(39),e.aS0(40,23),e.k70(),e.C$Y()()()),2&R&&(e.E7m("formGroup",d.form),e.yG2(2),e.E7m("tuiAutoFocus",!0),e.yG2(3),e.E7m("errors",d.e("title")),e.yG2(2),e.E7m("formControl",d.form.controls.preorder_type),e.yG2(3),e.E7m("errors",d.e("preorder_type")),e.yG2(2),e.E7m("formControlName","payment_value")("tuiTextfieldPrefix","\u20ac"),e.yG2(4),e.E7m("errors",d.e("payment_value")),e.yG2(2),e.E7m("long",!1)("formControlName","message"),e.yG2(3),e.E7m("errors",d.e("message")),e.yG2(8),e.E7m("errors",d.e("active")),e.yG2(4),e.E7m("item",d.item)("editable",!0))},dependencies:[a.y,a.sz,a.ue,a.u,a.sl,a.ug,a.uW,a.Wo,f.CI,f.Kw,P.CQ,P.Oo,P.cP,w.b,T.Y3,l.my,p.A$,M.m6,M.gJ,_.g,S.Q7,S.mi,S.Qj,u.aS,u.Id,g.WY,I.i,I.I,m.kh,y.iO,o.t,n.w,K],changeDetection:0})}return E})()},1292:(A,C,t)=>{t.d(C,{S:()=>e});const e={it:"Italiano",en:"Inglese",es:"Spagnolo",fr:"Francese",de:"Tedesco",pt:"Portoghese",ru:"Russo",zh:"Cinese",ja:"Giapponese",ar:"Arabo",hi:"Hindi",bn:"Bengalese",pa:"Punjabi",ms:"Malese"}},1200:(A,C,t)=>{t.d(C,{A:()=>f,m:()=>p});var e=t(4496),a=t(900),O=t(3480),M=t(800),v=t(3616);let f=(()=>{class u{constructor(m,P,T){this.el=m,this.zone=P,this.destroy$=T,this.eventName=""}ngOnInit(){(0,M.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,a.Uv)(this.zone),(0,a.uy)(),(0,v.a)(this.destroy$)).subscribe()}}return u.\u0275fac=function(m){return new(m||u)(e.GI1(e.GMv),e.GI1(e.WW2),e.GI1(O.UF,2))},u.\u0275dir=e.Sc5({type:u,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[e.Wk5.None,"tuiPreventDefault","eventName"]},features:[e.M5G([O.UF])]}),u})(),p=(()=>{class u{}return u.\u0275fac=function(m){return new(m||u)},u.\u0275mod=e.a4G({type:u}),u.\u0275inj=e.s3X({}),u})()},9880:(A,C,t)=>{t.d(C,{kP:()=>T,kh:()=>y,st:()=>I});var e=t(4496),a=t(3480),O=t(4392),M=t(3120),v=t(3616),f=t(7692),p=t(1368);const u=["wrapper"];function g(_,s){if(1&_&&(e.I0R(0,"tui-loader",4),e.C_f(1,5),e.C$Y()),2&_){const o=e.GaO(2);e.E7m("overlay",!0)("showLoader",o.loading),e.yG2(),e.E7m("ngTemplateOutlet",o.content)}}function m(_,s){if(1&_&&(e.SAx(0),e._Xx(1),e.yuY(2,g,2,3,"tui-loader",3),e.k70()),2&_){const o=e.GaO();e.yG2(2),e.E7m("ngIf",o.async)("ngIfElse",o.content)}}const P=["*"];let T=(()=>{class _{}return _.\u0275fac=function(o){return new(o||_)},_.\u0275dir=e.Sc5({type:_,selectors:[["","tuiExpandContent",""]]}),_})();let I=(()=>{class _{constructor(o,n){this.cdr=o,this.destroy$=n,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(o){if(null!==this.expanded)return 0!==this.state?(this.expanded=o,void(this.state=3)):(this.expanded=o,void this.retrigger(this.async&&o?1:3));this.expanded=o}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:o,state:n,contentWrapper:i}=this;return o&&2===n||!o&&3===n?0:i&&(!o&&2===n||o&&3===n)?i.nativeElement.offsetHeight:i&&o&&1===n?Math.max(i.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:o}){"opacity"===o&&3===this.state&&(this.state=0)}onExpandLoaded(o){o.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(o){this.state=2,(0,M.k)(0).pipe((0,v.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=o,this.cdr.markForCheck())})}}return _.\u0275fac=function(o){return new(o||_)(e.GI1(e.kD9),e.GI1(a.UF,2))},_.\u0275cmp=e.In1({type:_,selectors:[["tui-expand"]],contentQueries:function(o,n,i){if(1&o&&e.szK(i,T,5,e.Yw2),2&o){let c;e.wto(c=e.Gqi())&&(n.content=c.first)}},viewQuery:function(o,n){if(1&o&&e.CC$(u,5),2&o){let i;e.wto(i=e.Gqi())&&(n.contentWrapper=i.first)}},hostVars:9,hostBindings:function(o,n){1&o&&e.qCj("transitionend.self",function(c){return n.onTransitionEnd(c)})("tui-expand-loaded",function(c){return n.onExpandLoaded(c)}),2&o&&(e.e48("aria-expanded",n.expanded),e.m4B("height",n.height,"px"),e.eAK("_expanded",n.expanded)("_overflow",n.overflow)("_loading",n.loading))},inputs:{async:"async",expandedSetter:[e.Wk5.None,"expanded","expandedSetter"]},features:[e.M5G([a.UF])],ngContentSelectors:P,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(o,n){1&o&&(e.kPM(),e.I0R(0,"div",0,1),e.yuY(2,m,3,2,"ng-container",2),e.C$Y()),2&o&&(e.E7m("@tuiParentAnimation",void 0)("@.disabled",n.overflow),e.yG2(2),e.E7m("ngIf",n.contentVisible))},dependencies:[f.Cb,p.u_,p.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[O.cI]},changeDetection:0}),_})(),y=(()=>{class _{}return _.\u0275fac=function(o){return new(o||_)},_.\u0275mod=e.a4G({type:_}),_.\u0275inj=e.s3X({imports:[[p.MD,f.Sk]]}),_})()}}]);