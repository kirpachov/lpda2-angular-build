"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[5900],{9064:(A,P,n)=>{n.d(P,{w:()=>r});var t=n(4496),a=n(6504),M=n(3480),g=n(6700),f=n(3616),p=n(6684),O=n(3797),E=n(8588),C=n(1368),d=n(9956),m=n(1292);function T(_,o){if(1&_&&(t.I0R(0,"tui-textarea",2),t.OEk(1),t.C$Y()),2&_){const e=t.GaO().$implicit,i=t.GaO();t.E7m("formControl",e.control),t.yG2(),t.oRS(" ",i.getFullLang(e.lang)," ")}}function s(_,o){if(1&_&&(t.I0R(0,"tui-input",2),t.OEk(1),t.C$Y()),2&_){const e=t.GaO().$implicit,i=t.GaO();t.E7m("formControl",e.control),t.yG2(),t.oRS(" ",i.getFullLang(e.lang)," ")}}const h=_=>({"mb-3":_});function D(_,o){if(1&_&&(t.SAx(0),t.I0R(1,"div",1),t.yuY(2,T,2,2,"tui-textarea",2)(3,s,2,2),t.wR5(4,"app-errors",3),t.C$Y(),t.k70()),2&_){const e=o.$implicit,i=o.last,R=t.GaO();t.yG2(),t.E7m("ngClass",t.S45(3,h,!i)),t.yG2(),t.C0Y(2,R.long?2:3),t.yG2(2),t.E7m("errors",e.control.errors)}}const I=["*"];let r=(()=>{class _{constructor(){this.destroy$=new M.UF,this.long=!1,this.controls=(0,t.OCB)({}),this.controlsArr=(0,t.S6b)(()=>{const e=this.controls();return Object.keys(e).map(i=>({lang:i,control:e[i]}))}),this.touched$=new g.g(!1),this.value$=new g.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(e){this.value$.pipe((0,f.a)(this.destroy$)).subscribe({next:i=>e(i)})}registerOnTouched(e){this.touched$.pipe((0,p.I)(i=>!0===i)).subscribe({next:()=>e()})}writeValue(e){this.patchValue(e??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(e){return m.S[e]??e}controlChanged(e){this.value$.next({...this.value$.value,[e]:this.controls()[e].value})}patchValue(e){Object.keys(e).forEach(i=>this.addLang(i)),Object.keys(this.controls()).forEach(i=>{this.controls()[i].patchValue(e[i]??null)})}addLang(e){if(this.controls()[e])return;const i=new a.Ku;i.valueChanges.subscribe({next:()=>this.controlChanged(e)}),this.controls.set({...this.controls(),[e]:i})}static#t=this.\u0275fac=function(i){return new(i||_)};static#e=this.\u0275cmp=t.In1({type:_,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[t.M5G([{provide:a.Y6,useExisting:(0,t.wd)(()=>_),multi:!0},M.UF]),t.UHJ],ngContentSelectors:I,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(i,R){1&i&&(t.kPM(),t._Xx(0),t.yuY(1,D,5,5,"ng-container",0)),2&i&&(t.yG2(),t.E7m("ngForOf",R.controlsArr()))},dependencies:[a.sl,a.ue,a.ug,O.CQ,O.Oo,O.cP,C.Iw,d.g,C.QF,E.Y3,E.wp,E.kd],changeDetection:0})}return _})()},7900:(A,P,n)=>{n.d(P,{g:()=>R});var t=n(4496),a=n(6504),M=n(3480),g=n(5e3),f=n(1960),p=n(8212),O=n(4336),E=n(8048),C=n(5656),d=n(9880),m=n(3797),T=n(8588),s=n(5188),h=n(9888),D=n(6528),I=n(6380),r=n(9956),_=n(1236),o=n(1744),e=n(9064),i=n(7936);let R=(()=>{class N{constructor(){this.destroy$=(0,t.uUt)(M.UF),this.router=(0,t.uUt)(_.E5),this.route=(0,t.uUt)(_.gV),this.submit=new t._w7,this.disabled=(0,t.OCB)(!1),this.form=new a.WC({title:new a.Ku("Pagamento alla prenotazione richiesto " + Date.now() + "",[a.AQ.required]),active:new a.Ku(!0,[a.AQ.required,a.AQ.pattern(/^(true|false)$/)]),payment_value:new a.Ku(null,[a.AQ.required]),message:new a.Ku(null,[])}),this.submitted=!1,this._item=null,this.cases=(0,t.OCB)(null),this.e=this.errorsForControl}set item(l){if(!(l instanceof f.u))return console.warn("PreorderReservationGroupFormComponent: value is blank or invalid",l),this.form.reset(),void(this._item=null);this._item=l,this.form.patchValue({payment_value:l.payment_value??null,title:l.title??null,active:"active"===l.status,message:l.translations?.message||{}})}get item(){return this._item}errorsForControl(l){const c=this.form.get(l);return c&&(this.submitted||c.touched)?c.errors??null:null}cancel(){this.router.navigate(["../"],{relativeTo:this.route})}formSubmit(){if(this.submitted=!0,this.form.invalid)return;const l={...this.form.value,...this.cases()??{}};l.status=l.active?"active":"inactive",delete l.active,this.submit.emit(l)}static#t=this.\u0275fac=function(c){return new(c||N)};static#e=this.\u0275cmp=t.In1({type:N,selectors:[["app-preorder-reservation-group-form"]],inputs:{item:"item"},outputs:{submit:"submit"},standalone:!0,features:[t.M5G([M.UF]),t.UHJ],decls:36,vars:12,consts:()=>{let l,c,u,S,G,y,$,U;return l="Titolo: visibile solo a te",c="Valore pagamento",u="Messaggio per i clienti che cercano di prenotare",S="Attivazione",G="Richiedere il pagamento?",y="Quando sono richiesti pagamenti?",$="Conferma",U="Annulla",[[3,"formGroup","ngSubmit"],[1,"block","mb-3"],["formControlName","title",3,"tuiAutoFocus"],l,[3,"errors"],[3,"formControlName","tuiTextfieldPrefix"],c,["tuiTextfield",""],[3,"long","formControlName"],u,[1,"text-xl"],S,["contentAlign","right","formControlName","active","size","l"],G,[1,"mb-3","text-2xl"],y,[1,"block","mb-3",3,"item","editable","outputMamiChanges"],[1,"flex","items-center"],["type","submit","tuiButton","","appearance","primary"],$,["tuiButton","","appearance","icon","type","button",3,"click"],U]},template:function(c,u){1&c&&(t.I0R(0,"form",0),t.qCj("ngSubmit",function(){return u.formSubmit()}),t.I0R(1,"div",1)(2,"tui-input",2),t.SAx(3),t.aS0(4,3),t.k70(),t.C$Y(),t.wR5(5,"app-errors",4),t.C$Y(),t.I0R(6,"div",1)(7,"tui-input-number",5),t.SAx(8),t.aS0(9,6),t.k70(),t.wR5(10,"input",7),t.C$Y(),t.wR5(11,"app-errors",4),t.C$Y(),t.I0R(12,"div",1)(13,"app-i18n-input",8),t.SAx(14),t.aS0(15,9),t.k70(),t.C$Y(),t.wR5(16,"app-errors",4),t.C$Y(),t.I0R(17,"div",1)(18,"p",10),t.SAx(19),t.aS0(20,11),t.k70(),t.C$Y(),t.I0R(21,"tui-checkbox-block",12),t.SAx(22),t.aS0(23,13),t.k70(),t.C$Y(),t.wR5(24,"app-errors",4),t.C$Y(),t.I0R(25,"h2",14),t.aS0(26,15),t.C$Y(),t.I0R(27,"div",1)(28,"app-select-turns-paymentv2",16),t.qCj("outputMamiChanges",function(G){return u.cases.set(G)}),t.C$Y()(),t.I0R(29,"div",17)(30,"button",18),t.SAx(31),t.aS0(32,19),t.k70(),t.C$Y(),t.I0R(33,"button",20),t.qCj("click",function(){return u.cancel()}),t.SAx(34),t.aS0(35,21),t.k70(),t.C$Y()()()),2&c&&(t.E7m("formGroup",u.form),t.yG2(2),t.E7m("tuiAutoFocus",!0),t.yG2(3),t.E7m("errors",u.e("title")),t.yG2(2),t.E7m("formControlName","payment_value")("tuiTextfieldPrefix","\u20ac"),t.yG2(4),t.E7m("errors",u.e("payment_value")),t.yG2(2),t.E7m("long",!1)("formControlName","message"),t.yG2(3),t.E7m("errors",u.e("message")),t.yG2(8),t.E7m("errors",u.e("active")),t.yG2(4),t.E7m("item",u.item)("editable",!0))},dependencies:[a.y,a.sz,a.ue,a.u,a.sl,a.uW,a.Wo,p.CI,p.Kw,m.CQ,m.Oo,m.cP,i.b,T.Y3,s.my,O.A$,g.m6,g.gJ,r.g,h.Q7,h.mi,h.Qj,E.aS,E.Id,C.WY,D.i,D.I,d.kh,I.iO,o.t,e.w],changeDetection:0})}return N})()},1292:(A,P,n)=>{n.d(P,{S:()=>t});const t={it:"Italiano",en:"Inglese",es:"Spagnolo",fr:"Francese",de:"Tedesco",pt:"Portoghese",ru:"Russo",zh:"Cinese",ja:"Giapponese",ar:"Arabo",hi:"Hindi",bn:"Bengalese",pa:"Punjabi",ms:"Malese"}},1200:(A,P,n)=>{n.d(P,{A:()=>p,m:()=>O});var t=n(4496),a=n(900),M=n(3480),g=n(800),f=n(3616);let p=(()=>{class E{constructor(d,m,T){this.el=d,this.zone=m,this.destroy$=T,this.eventName=""}ngOnInit(){(0,g.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,a.Uv)(this.zone),(0,a.uy)(),(0,f.a)(this.destroy$)).subscribe()}}return E.\u0275fac=function(d){return new(d||E)(t.GI1(t.GMv),t.GI1(t.WW2),t.GI1(M.UF,2))},E.\u0275dir=t.Sc5({type:E,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[t.Wk5.None,"tuiPreventDefault","eventName"]},features:[t.M5G([M.UF])]}),E})(),O=(()=>{class E{}return E.\u0275fac=function(d){return new(d||E)},E.\u0275mod=t.a4G({type:E}),E.\u0275inj=t.s3X({}),E})()},9880:(A,P,n)=>{n.d(P,{kP:()=>T,kh:()=>I,st:()=>D});var t=n(4496),a=n(3480),M=n(4392),g=n(3120),f=n(3616),p=n(7692),O=n(1368);const E=["wrapper"];function C(r,_){if(1&r&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&r){const o=t.GaO(2);t.E7m("overlay",!0)("showLoader",o.loading),t.yG2(),t.E7m("ngTemplateOutlet",o.content)}}function d(r,_){if(1&r&&(t.SAx(0),t._Xx(1),t.yuY(2,C,2,3,"tui-loader",3),t.k70()),2&r){const o=t.GaO();t.yG2(2),t.E7m("ngIf",o.async)("ngIfElse",o.content)}}const m=["*"];let T=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275dir=t.Sc5({type:r,selectors:[["","tuiExpandContent",""]]}),r})();let D=(()=>{class r{constructor(o,e){this.cdr=o,this.destroy$=e,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(o){if(null!==this.expanded)return 0!==this.state?(this.expanded=o,void(this.state=3)):(this.expanded=o,void this.retrigger(this.async&&o?1:3));this.expanded=o}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:o,state:e,contentWrapper:i}=this;return o&&2===e||!o&&3===e?0:i&&(!o&&2===e||o&&3===e)?i.nativeElement.offsetHeight:i&&o&&1===e?Math.max(i.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:o}){"opacity"===o&&3===this.state&&(this.state=0)}onExpandLoaded(o){o.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(o){this.state=2,(0,g.k)(0).pipe((0,f.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=o,this.cdr.markForCheck())})}}return r.\u0275fac=function(o){return new(o||r)(t.GI1(t.kD9),t.GI1(a.UF,2))},r.\u0275cmp=t.In1({type:r,selectors:[["tui-expand"]],contentQueries:function(o,e,i){if(1&o&&t.szK(i,T,5,t.Yw2),2&o){let R;t.wto(R=t.Gqi())&&(e.content=R.first)}},viewQuery:function(o,e){if(1&o&&t.CC$(E,5),2&o){let i;t.wto(i=t.Gqi())&&(e.contentWrapper=i.first)}},hostVars:9,hostBindings:function(o,e){1&o&&t.qCj("transitionend.self",function(R){return e.onTransitionEnd(R)})("tui-expand-loaded",function(R){return e.onExpandLoaded(R)}),2&o&&(t.e48("aria-expanded",e.expanded),t.m4B("height",e.height,"px"),t.eAK("_expanded",e.expanded)("_overflow",e.overflow)("_loading",e.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([a.UF])],ngContentSelectors:m,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(o,e){1&o&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,d,3,2,"ng-container",2),t.C$Y()),2&o&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",e.overflow),t.yG2(2),t.E7m("ngIf",e.contentVisible))},dependencies:[p.Cb,O.u_,O.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[M.cI]},changeDetection:0}),r})(),I=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({imports:[[O.MD,p.Sk]]}),r})()}}]);