"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4640],{4640:(M,O,e)=>{e.d(O,{q:()=>q});var t=e(4496),i=e(6504),p=e(1236),m=e(8256),l=e(9938),r=e(8392),R=e(1128),h=e(3480),N=e(400),S=e(5e3),y=e(8212),I=e(7692),d=e(9880),D=e(8048),v=e(3797),C=e(9888),u=e(2740),s=e(6052),n=e(5188),_=e(3616),E=e(4e3),T=e(8824),F=e(9956),L=e(7924),G=e(7556),W=e(2516);let k=(()=>{class a{transform(o){return"string"==typeof o&&o.length>0?o.toLowerCase():null}static#t=this.\u0275fac=function(f){return new(f||a)};static#e=this.\u0275pipe=t.UTH({name:"downcase",type:a,pure:!0,standalone:!0})}return a})();var $=e(964),V=e(7936),Y=e(4336);const K=(a,g)=>g.id;function B(a,g){if(1&a&&t.wR5(0,"app-errors",4),2&a){const o=t.GaO();t.E7m("errors",o.form.controls.name.errors)}}function z(a,g){if(1&a&&t.wR5(0,"app-errors",4),2&a){const o=t.GaO();t.E7m("errors",o.form.controls.weekday.errors)}}const b=()=>[15,30,45,60];function X(a,g){1&a&&t.wR5(0,"tui-data-list-wrapper",20),2&a&&t.E7m("items",t.q4q(1,b))}function H(a,g){if(1&a&&t.wR5(0,"app-errors",4),2&a){const o=t.GaO();t.E7m("errors",o.form.controls.step.errors)}}function Q(a,g){if(1&a&&t.wR5(0,"app-errors",4),2&a){const o=t.GaO();t.E7m("errors",o.form.controls.starts_at.errors)}}function j(a,g){if(1&a&&t.wR5(0,"app-errors",4),2&a){const o=t.GaO();t.E7m("errors",o.form.controls.ends_at.errors)}}function J(a,g){if(1&a&&(t.I0R(0,"div",21),t.OEk(1),t.C$Y()),2&a){const o=g.$implicit;t.yG2(),t.MjK("",o.name,": ",o.starts_at," - ",o.ends_at,"")}}function Z(a,g){if(1&a&&t.wR5(0,"app-errors",4),2&a){const o=t.GaO();t.E7m("errors",o.form.errors)}}let q=(()=>{class a{constructor(){this.service=(0,t.uUt)(G.K),this.destroy$=(0,t.uUt)(h.UF),this.notifications=(0,t.uUt)(R.E),this.route=(0,t.uUt)(p.gV),this.formSubmitted=(0,t.OCB)(!1),this.parentLoading=(0,t.OCB)(!1),this.searching=(0,t.OCB)(!1),this.loading=(0,t.S6b)(()=>this.parentLoading()||this.searching()),this._context="create",this.submitted=new t._w7,this.cancelled=new t._w7,this.concurrentData=(0,t.OCB)(null),this.concurrent=(0,t.S6b)(()=>(this.concurrentData()?.items??[]).filter(o=>o.weekday==this.form.value.weekday&&o.id!=this.currentItemId())),this.form=new i.WC({weekday:new i.Ku(null,[i.AQ.required]),starts_at:new i.Ku(null,[i.AQ.required]),ends_at:new i.Ku(null,[i.AQ.required]),step:new i.Ku(30,[i.AQ.required,i.AQ.min(15),i.AQ.max(60)]),name:new i.Ku(null,[i.AQ.required])}),this.formInitialValue=this.form.value,this.currentItemId=(0,t.OCB)(null)}set setParentLoading(o){this.parentLoading.set(o)}set context(o){"update"==o?this.form.controls.weekday.disable():this.form.controls.weekday.enable()}get context(){return this._context}set turn(o){if(this.currentItemId.set(o?.id??null),o){const f={weekday:o.weekday,starts_at:o.starts_at?N.uc.fromString(o.starts_at):null,ends_at:o.ends_at?N.uc.fromString(o.ends_at):null,step:o.step,name:o.name};this.form.patchValue(f)}else this.form.reset(this.formInitialValue)}ngOnInit(){this.form.controls.weekday.valueChanges.pipe((0,_.a)(this.destroy$),(0,E.a)()).subscribe({next:o=>this.searchSameWeekday(o)}),this.route.queryParams.pipe((0,_.a)(this.destroy$)).subscribe({next:o=>{o.weekday&&this.form.controls.weekday.setValue(o.weekday)}})}manageHttpError(o){l.y.assignErrorsToForm(this.form,o),this.notifications.error((0,m.mk)(o)||r.a)}submit(){this.formSubmitted.set(!0),!this.form.invalid&&this.submitted.emit(this.formatOutput())}cancel(){this.cancelled.emit()}formatOutput(){const{ends_at:o,starts_at:f,name:c,step:A}=this.form.value,w={starts_at:f?(0,$.In)(f):null,ends_at:o?(0,$.In)(o):null,name:c??"",step:A??30};return"create"==this.context&&(w.weekday=this.form.controls.weekday.value||0),w}searchSameWeekday(o){null!=o?(this.searching.set(!0),this.service.search({weekday:o,per_page:100}).pipe((0,_.a)(this.destroy$),(0,T.U)(()=>this.searching.set(!1))).subscribe({next:f=>this.concurrentData.set(f)})):this.concurrentData.set(null)}static#t=this.\u0275fac=function(f){return new(f||a)};static#e=this.\u0275cmp=t.In1({type:a,selectors:[["app-reservation-turn-form"]],inputs:{setParentLoading:[t.Wk5.None,"loading","setParentLoading"],context:"context",turn:"turn"},outputs:{submitted:"submitted",cancelled:"cancelled"},standalone:!0,features:[t.UHJ],decls:44,vars:20,consts:()=>{let o,f,c,A,w,x,U;return o="Nome turno",f="Minuti tra una prenotazione e l'altra",c="Dalle ore",A="Fino alle ore",w="\n          Nota che per \n          " + "\ufffd0\ufffd" + "\n           sono presenti anche i seguenti turni:\n        ",x="Salva",U="Annulla",[[3,"formGroup","ngSubmit"],[1,"mb-3","block"],["tuiAutoFocus","",3,"formControlName"],o,[3,"errors"],[3,"formControlName"],f,["tuiTextfield",""],[3,"items",4,"tuiDataList"],[1,"flex","items-center"],[1,"me-2","grow"],c,A,[3,"expanded"],[1,"text-slate-400"],w,["type","submit","tuiButton","","appearance","primary",3,"showLoader"],x,["type","button","tuiButton","","appearance","icon",3,"disabled","click"],U,[3,"items"],[1,"block"],["class","block"]]},template:function(f,c){1&f&&(t.I0R(0,"form",0),t.qCj("ngSubmit",function(){return c.submit()}),t.I0R(1,"div",1)(2,"tui-input",2),t.SAx(3),t.aS0(4,3),t.k70(),t.C$Y(),t.yuY(5,B,1,1,"app-errors",4),t.C$Y(),t.I0R(6,"div",1),t.wR5(7,"app-weekday-select",5),t.yuY(8,z,1,1,"app-errors",4),t.C$Y(),t.I0R(9,"div",1)(10,"tui-select",5),t.SAx(11),t.aS0(12,6),t.k70(),t.wR5(13,"input",7),t.yuY(14,X,1,2,"tui-data-list-wrapper",8),t.C$Y(),t.yuY(15,H,1,1,"app-errors",4),t.C$Y(),t.I0R(16,"div",1)(17,"div",9)(18,"div",10)(19,"tui-input-time",5),t.SAx(20),t.aS0(21,11),t.k70(),t.C$Y(),t.yuY(22,Q,1,1,"app-errors",4),t.C$Y(),t.I0R(23,"div",10)(24,"tui-input-time",5),t.SAx(25),t.aS0(26,12),t.k70(),t.C$Y(),t.yuY(27,j,1,1,"app-errors",4),t.C$Y()(),t.I0R(28,"tui-expand",13)(29,"div",14)(30,"span"),t.aS0(31,15),t.wVc(32,"downcase"),t.wVc(33,"weekday"),t.C$Y(),t.c53(34,J,2,3,"div",22,K),t.C$Y()()(),t.yuY(36,Z,1,1,"app-errors",4),t.I0R(37,"div",9)(38,"button",16),t.SAx(39),t.aS0(40,17),t.k70(),t.C$Y(),t.I0R(41,"button",18),t.qCj("click",function(){return c.cancel()}),t.SAx(42),t.aS0(43,19),t.k70(),t.C$Y()()()),2&f&&(t.E7m("formGroup",c.form),t.yG2(2),t.E7m("formControlName","name"),t.yG2(3),t.C0Y(5,c.formSubmitted()||c.form.controls.name.touched?5:-1),t.yG2(2),t.E7m("formControlName","weekday"),t.yG2(),t.C0Y(8,c.formSubmitted()||c.form.controls.weekday.touched?8:-1),t.yG2(2),t.E7m("formControlName","step"),t.yG2(5),t.C0Y(15,c.formSubmitted()||c.form.controls.step.touched?15:-1),t.yG2(4),t.E7m("formControlName","starts_at"),t.yG2(3),t.C0Y(22,c.formSubmitted()||c.form.controls.starts_at.touched?22:-1),t.yG2(2),t.E7m("formControlName","ends_at"),t.yG2(3),t.C0Y(27,c.formSubmitted()||c.form.controls.ends_at.touched?27:-1),t.yG2(),t.E7m("expanded",c.concurrent().length>0),t.yG2(5),t.oBb(t.kDX(32,16,t.kDX(33,18,c.form.value.weekday))),t.Ylm(31),t.yG2(),t.oho(c.concurrent()),t.yG2(2),t.C0Y(36,c.formSubmitted()?36:-1),t.yG2(2),t.E7m("showLoader",c.loading()),t.yG2(3),t.E7m("disabled",c.loading()))},dependencies:[y.CI,y.Kw,I.Sk,i.sl,i.sz,i.ue,i.u,i.uW,i.Wo,v.CQ,v.Oo,v.cP,V.b,F.g,C.Q7,u.IZ,u.iw,u.gt,L.W,S.m6,S.gJ,W.G,d.kh,d.st,k,s.q8,s.OO,Y.Ux,D.aS,n.my,n.cP,n.uO],encapsulation:2,changeDetection:0})}return a})()},7924:(M,O,e)=>{e.d(O,{W:()=>v});var t=e(4496),i=e(6504),p=e(3480),m=e(5e3),l=e(8048),r=e(5193),R=e(6052),h=e(5188),N=e(2516),S=e(4336),y=e(7936);function I(C,u){1&C&&(t.OEk(0),t.wVc(1,"weekday")),2&C&&t.cNF(t.kDX(1,1,u.$implicit))}const d=()=>[0,1,2,3,4,5,6];function D(C,u){if(1&C&&t.wR5(0,"tui-data-list-wrapper",5),2&C){t.GaO();const s=t.Gew(1);t.E7m("items",t.q4q(2,d))("itemContent",s)}}let v=(()=>{class C{constructor(){this.control=new i.Ku(null,[i.AQ.min(0),i.AQ.max(6)]),this.initialAutofocus=(0,t.OCB)(!1),this.dropdownOpen=(0,t.OCB)(!1),this.showCleaner=!0}set autofocus(s){this.initialAutofocus.set(!0===s),this.dropdownOpen.set(!0===s)}ngOnChanges(){this.control.valueChanges.subscribe({next:s=>{s&&this.dropdownOpen.set(!1)}})}writeValue(s){let n=null;n="number"==typeof s?s:"string"==typeof s?Number(s):null,this.control.setValue(n)}registerOnChange(s){this.control.valueChanges.subscribe({next:n=>s(n)})}registerOnTouched(s){this.control.valueChanges.subscribe({next:n=>s(n)})}setDisabledState(s){s?this.control.disable():this.control.enable()}static#t=this.\u0275fac=function(n){return new(n||C)};static#e=this.\u0275cmp=t.In1({type:C,selectors:[["app-weekday-select"]],inputs:{showCleaner:"showCleaner",autofocus:"autofocus"},standalone:!0,features:[t.M5G([p.UF,{provide:i.Y6,useExisting:C,multi:!0}]),t.SYr,t.UHJ],decls:7,vars:5,consts:()=>{let s;return s="Giorno della settimana",[["selectItem",""],[3,"tuiAutoFocus","tuiDropdownOpen","valueContent","tuiTextfieldCleaner","formControl","tuiDropdownOpenChange"],s,["tuiTextfield",""],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]]},template:function(n,_){if(1&n&&(t.yuY(0,I,2,3,"ng-template",null,0,t.gJz),t.I0R(2,"tui-select",1),t.qCj("tuiDropdownOpenChange",function(T){return _.dropdownOpen.set(T)}),t.SAx(3),t.aS0(4,2),t.k70(),t.wR5(5,"input",3),t.yuY(6,D,1,3,"tui-data-list-wrapper",4),t.C$Y()),2&n){const E=t.Gew(1);t.yG2(2),t.E7m("tuiAutoFocus",_.initialAutofocus())("tuiDropdownOpen",_.dropdownOpen())("valueContent",E)("tuiTextfieldCleaner",_.showCleaner)("formControl",_.control)}},dependencies:[R.q8,R.OO,S.Ux,l.aS,l.es,h.my,h.cP,h.uO,y.b,i.sl,i.ue,i.ug,N.G,m.m6,m.gJ,r.ms,r.oL],encapsulation:2})}return C})()},9772:(M,O,e)=>{e.d(O,{CU:()=>i,ye:()=>p});const t=(new Date).getTimezoneOffset()/60;function i(m,l=t){return"string"==typeof m&&m.length>0&&m.match(/\d{1,2}:\d{1,2}/)?`${Number(m.split(":")[0])-l}:${m.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:m}),"")}function p(m,l=t){return i(m,-1*l)}},1960:(M,O,e)=>{e.d(O,{u:()=>m});var t=e(8400),i=e(5136);class p extends t.w{constructor(r){super(r),this.date=r.date?new Date(r.date):void 0,this.reservation_turn_id=r.reservation_turn_id,this.group_id=r.group_id,this.reservation_turn=r.reservation_turn?new i.e(r.reservation_turn):void 0}}class m extends t.w{constructor(r){super(r),this.turns=[],this.dates=[],this.title=r.title,this.status=r.status,this.preorder_type=r.preorder_type,this.payment_value=r.payment_value,this.message=r.message,this.turns=(r.turns||[]).map(R=>new i.e(R)),this.dates=(r.dates||[]).map(R=>new p(R))}}},5136:(M,O,e)=>{e.d(O,{e:()=>m});var t=e(8400),i=e(9772),p=e(1960);class m extends t.w{constructor(r){super(r),this.name=r.name,this.weekday=r.weekday,this.step=r.step,this.valid_times=r.valid_times,this.starts_at=r.starts_at?(0,i.CU)(r.starts_at):void 0,this.ends_at=r.ends_at?(0,i.CU)(r.ends_at):void 0,this.preorder_reservation_group=r.preorder_reservation_group?new p.u(r.preorder_reservation_group):void 0}}},2516:(M,O,e)=>{e.d(O,{G:()=>i});var t=e(4496);let i=(()=>{class p{constructor(){this.weekdays=["Domenica","Luned\xEC","Marted\xEC","Mercoled\xEC","Gioved\xEC","Venerd\xEC","Sabato"]}transform(l){return"number"!=typeof l&&"string"==typeof l&&(l=parseInt(l)),"number"==typeof l&&l>=0&&l<=6?this.weekdays[l]:null}static#t=this.\u0275fac=function(r){return new(r||p)};static#e=this.\u0275pipe=t.UTH({name:"weekday",type:p,pure:!0,standalone:!0})}return p})()},7556:(M,O,e)=>{e.d(O,{K:()=>m});var t=e(6012),i=e(5136),p=e(4496);let m=(()=>{class l extends t.s{constructor(){super(i.e,"admin/reservation_turns")}static#t=this.\u0275fac=function(h){return new(h||l)};static#e=this.\u0275prov=p.wxM({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},9880:(M,O,e)=>{e.d(O,{kP:()=>I,kh:()=>C,st:()=>v});var t=e(4496),i=e(3480),p=e(4392),m=e(3120),l=e(3616),r=e(7692),R=e(1368);const h=["wrapper"];function N(u,s){if(1&u&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&u){const n=t.GaO(2);t.E7m("overlay",!0)("showLoader",n.loading),t.yG2(),t.E7m("ngTemplateOutlet",n.content)}}function S(u,s){if(1&u&&(t.SAx(0),t._Xx(1),t.yuY(2,N,2,3,"tui-loader",3),t.k70()),2&u){const n=t.GaO();t.yG2(2),t.E7m("ngIf",n.async)("ngIfElse",n.content)}}const y=["*"];let I=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275dir=t.Sc5({type:u,selectors:[["","tuiExpandContent",""]]}),u})();let v=(()=>{class u{constructor(n,_){this.cdr=n,this.destroy$=_,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(n){if(null!==this.expanded)return 0!==this.state?(this.expanded=n,void(this.state=3)):(this.expanded=n,void this.retrigger(this.async&&n?1:3));this.expanded=n}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:n,state:_,contentWrapper:E}=this;return n&&2===_||!n&&3===_?0:E&&(!n&&2===_||n&&3===_)?E.nativeElement.offsetHeight:E&&n&&1===_?Math.max(E.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:n}){"opacity"===n&&3===this.state&&(this.state=0)}onExpandLoaded(n){n.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(n){this.state=2,(0,m.k)(0).pipe((0,l.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=n,this.cdr.markForCheck())})}}return u.\u0275fac=function(n){return new(n||u)(t.GI1(t.kD9),t.GI1(i.UF,2))},u.\u0275cmp=t.In1({type:u,selectors:[["tui-expand"]],contentQueries:function(n,_,E){if(1&n&&t.szK(E,I,5,t.Yw2),2&n){let T;t.wto(T=t.Gqi())&&(_.content=T.first)}},viewQuery:function(n,_){if(1&n&&t.CC$(h,5),2&n){let E;t.wto(E=t.Gqi())&&(_.contentWrapper=E.first)}},hostVars:9,hostBindings:function(n,_){1&n&&t.qCj("transitionend.self",function(T){return _.onTransitionEnd(T)})("tui-expand-loaded",function(T){return _.onExpandLoaded(T)}),2&n&&(t.e48("aria-expanded",_.expanded),t.m4B("height",_.height,"px"),t.eAK("_expanded",_.expanded)("_overflow",_.overflow)("_loading",_.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([i.UF])],ngContentSelectors:y,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(n,_){1&n&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,S,3,2,"ng-container",2),t.C$Y()),2&n&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",_.overflow),t.yG2(2),t.E7m("ngIf",_.contentVisible))},dependencies:[r.Cb,R.u_,R.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[p.cI]},changeDetection:0}),u})(),C=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[R.MD,r.Sk]]}),u})()}}]);