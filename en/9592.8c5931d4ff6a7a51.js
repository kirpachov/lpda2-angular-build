"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9592],{2208:(y,A,e)=>{e.d(A,{G:()=>U});var t=e(4496),N=e(9956),i=e(6504),C=e(8212),M=e(8048),d=e(5193),m=e(3797),o=e(9888),R=e(939),E=e(6380),T=e(2740),I=e(400),D=e(3480),$=e(4680),P=e(5e3),p=e(3616),V=e(6684),c=e(9212),G=e(1343),L=e(1560),v=e(1368),F=e(9772),K=e(964),a=e(4208),S=e(7936);const l=(O,g)=>({date:O,time:g});function r(O,g){if(1&O&&(t.I0R(0,"app-reservation-tables-summary",27)(1,"p"),t.OEk(2,"Situazione tavoli per l'orario selezionato:"),t.C$Y()()),2&O){const _=t.GaO();let s;t.E7m("filters",t.IBC(1,l,_.form.value.date,null!==(s=_.utcTime())&&void 0!==s?s:""))}}function f(O,g){if(1&O){const _=t.KQA();t.I0R(0,"button",28),t.qCj("click",function(){t.usT(_);const n=t.GaO();return t.CGJ(n.dateOpen.set(!0))}),t.I0R(1,"span",3)(2,"span",29),t.aS0(3,30),t.C$Y(),t.I0R(4,"mat-icon"),t.OEk(5,"calendar_today"),t.C$Y()()()}}let U=(()=>{class O{set item(_){_?this.form.patchValue({date:_.datetime?new I.EK(_.datetime?.getFullYear(),_.datetime?.getMonth(),_.datetime?.getDate()):null,time:_.datetime?new I.uc(_.datetime?.getHours(),_.datetime?.getMinutes()):null,fullname:_.fullname,adults:_.adults,children:_.children,email:_.email,table:_.table,notes:_.notes,phone:_.phone}):this.form.reset()}constructor(_){this.isMobile=_,this.destroy$=(0,t.uUt)(D.UF),this.formSubmit=new t._w7,this.cancelled=new t._w7,this.utcTime=(0,t.OCB)(null),this.today=I.EK.currentLocal(),this.inputSize="l",this.form=new i.WC({date:new i.Ku(null,[i.AQ.required]),time:new i.Ku(null,[i.AQ.required]),fullname:new i.Ku(null,[i.AQ.required]),adults:new i.Ku(null,[i.AQ.required,i.AQ.min(0)]),children:new i.Ku(0,[i.AQ.required,i.AQ.min(0)]),email:new i.Ku(null,[i.AQ.email]),table:new i.Ku(null),notes:new i.Ku(null),phone:new i.Ku(null)}),this.loading=!1,this.dateOpen=(0,t.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}ngOnInit(){this.dateOpen.set(!0),this.form.get("date").valueChanges.pipe((0,p.a)(this.destroy$),(0,V.I)(_=>_ instanceof I.EK),(0,c.y)(()=>this.dateOpen.set(!1))).subscribe({}),this.form.get("time").valueChanges.pipe((0,p.a)(this.destroy$),(0,c.y)(_=>this.utcTime.set(_?(0,F.ye)(_.toString("HH:MM")):null))).subscribe((0,G.I)())}submit(){this.submitted=!0,!this.form.invalid&&this.formSubmit.emit(this.formVal())}formVal(){const _=this.form.value;return this.form.value.date&&this.form.value.time&&(_.datetime=(0,K.Qx)(this.form.value.date,this.form.value.time)),delete _.date,delete _.time,_}errorsFor(_){const s=this.form.get(_);return s&&(s.dirty||s.touched||this.submitted)?s.errors:null}cancel(){this.cancelled.emit()}static#t=this.\u0275fac=function(s){return new(s||O)(t.GI1($.Mv))};static#e=this.\u0275cmp=t.In1({type:O,selectors:[["app-admin-reservation-form"]],inputs:{item:"item",loading:"loading"},outputs:{formSubmit:"formSubmit",cancelled:"cancelled"},standalone:!0,features:[t.M5G([D.UF,v.y]),t.UHJ],decls:64,vars:42,consts:()=>{let _,s,n,h,B,W,z,x,w,Y,X,k;return _="Data",s="Now",n="Name",h="Number of adults",B="No. of children",W="Email",z="Table",x="Cell phone",w="Note",Y="Confirm",X="Cancel",k="Set date",[[3,"autocomplete","formGroup","ngSubmit"],["class","block mb-3",3,"filters"],[1,"mb-3"],[1,"flex","items-center"],[1,"me-2","grow",3,"tuiDropdownOpen","tuiAutoFocus","tuiTextfieldSize","min","formControlName"],_,["formControlName","time",1,"grow",3,"tuiTextfieldSize"],s,["tuiButton","","appearance","icon","type","button","size","s"],[3,"errors"],[3,"tuiTextfieldSize","formControlName"],n,["tuiTextfield","","type","text",3,"autocomplete"],[1,"flex","flex-col","grow"],[1,"me-2","grow",3,"tuiTextfieldSize","formControlName"],h,[1,"ms-2","grow",3,"tuiTextfieldSize","formControlName"],B,W,z,x,w,[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],Y,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],X,[1,"block","mb-3",3,"filters"],["tuiButton","","appearance","icon","type","button","size","s",3,"click"],[1,"me-1"],k]},template:function(s,n){1&s&&(t.I0R(0,"form",0),t.qCj("ngSubmit",function(){return n.submit()}),t.yuY(1,r,3,4,"app-reservation-tables-summary",1),t.I0R(2,"div",2)(3,"div",3)(4,"tui-input-date",4),t.SAx(5),t.aS0(6,5),t.k70(),t.C$Y(),t.I0R(7,"tui-input-time",6),t.SAx(8),t.aS0(9,7),t.k70(),t.C$Y()(),t.yuY(10,f,6,0,"button",8),t.wR5(11,"app-errors",9)(12,"app-errors",9),t.C$Y(),t.I0R(13,"div",2)(14,"tui-input",10),t.SAx(15),t.aS0(16,11),t.k70(),t.wR5(17,"input",12),t.C$Y(),t.wR5(18,"app-errors",9),t.C$Y(),t.I0R(19,"div",2)(20,"div",3)(21,"div",13)(22,"tui-input-number",14),t.SAx(23),t.aS0(24,15),t.k70(),t.wR5(25,"input",12),t.C$Y(),t.wR5(26,"app-errors",9),t.C$Y(),t.I0R(27,"div",13)(28,"tui-input-number",16),t.SAx(29),t.aS0(30,17),t.k70(),t.wR5(31,"input",12),t.C$Y(),t.wR5(32,"app-errors",9),t.C$Y()()(),t.I0R(33,"div",2)(34,"tui-input",10),t.SAx(35),t.aS0(36,18),t.k70(),t.wR5(37,"input",12),t.C$Y(),t.wR5(38,"app-errors",9),t.C$Y(),t.I0R(39,"div",2)(40,"tui-input",10),t.SAx(41),t.aS0(42,19),t.k70(),t.wR5(43,"input",12),t.C$Y(),t.wR5(44,"app-errors",9),t.C$Y(),t.I0R(45,"div",2)(46,"tui-input",10),t.SAx(47),t.aS0(48,20),t.k70(),t.wR5(49,"input",12),t.C$Y(),t.wR5(50,"app-errors",9),t.C$Y(),t.I0R(51,"div",2)(52,"tui-input",10),t.SAx(53),t.aS0(54,21),t.k70(),t.wR5(55,"input",12),t.C$Y(),t.wR5(56,"app-errors",9),t.C$Y(),t.I0R(57,"div",22)(58,"button",23),t.SAx(59),t.aS0(60,24),t.k70(),t.C$Y(),t.I0R(61,"button",25),t.qCj("click",function(){return n.cancel()}),t.SAx(62),t.aS0(63,26),t.k70(),t.C$Y()()()),2&s&&(t.E7m("autocomplete","off")("formGroup",n.form),t.yG2(),t.C0Y(1,n.form.value.date&&n.utcTime()?1:-1),t.yG2(3),t.E7m("tuiDropdownOpen",n.dateOpen())("tuiAutoFocus",!0)("tuiTextfieldSize",n.inputSize)("min",n.today)("formControlName","date"),t.yG2(3),t.E7m("tuiTextfieldSize",n.inputSize),t.yG2(3),t.C0Y(10,n.isMobile?10:-1),t.yG2(),t.E7m("errors",n.e("date")),t.yG2(),t.E7m("errors",n.e("time")),t.yG2(2),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","fullname"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("fullname")),t.yG2(4),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","adults"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("adults")),t.yG2(2),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","children"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("children")),t.yG2(2),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","email"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("email")),t.yG2(2),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","table"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("table")),t.yG2(2),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","phone"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("phone")),t.yG2(2),t.E7m("tuiTextfieldSize",n.inputSize)("formControlName","notes"),t.yG2(3),t.E7m("autocomplete","off"),t.yG2(),t.E7m("errors",n.e("notes")),t.yG2(2),t.E7m("showLoader",n.loading),t.yG2(3),t.E7m("showLoader",n.loading))},dependencies:[N.g,i.sl,i.sz,i.ue,i.u,i.uW,i.Wo,C.CI,C.Kw,m.CQ,m.Oo,m.cP,S.b,M.aS,M.rD,o.Q7,o.mi,o.Qj,R.K6,E.iO,E.yc,E.Ml,T.IZ,T.iw,T.gt,P.m6,P.gJ,d.ms,d.oL,L.qL,a.u],encapsulation:2})}return O})()},1200:(y,A,e)=>{e.d(A,{A:()=>d,m:()=>m});var t=e(4496),N=e(900),i=e(3480),C=e(800),M=e(3616);let d=(()=>{class o{constructor(E,T,I){this.el=E,this.zone=T,this.destroy$=I,this.eventName=""}ngOnInit(){(0,C.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,N.Uv)(this.zone),(0,N.uy)(),(0,M.a)(this.destroy$)).subscribe()}}return o.\u0275fac=function(E){return new(E||o)(t.GI1(t.GMv),t.GI1(t.WW2),t.GI1(i.UF,2))},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[t.Wk5.None,"tuiPreventDefault","eventName"]},features:[t.M5G([i.UF])]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(E){return new(E||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({}),o})()},6988:(y,A,e)=>{e.d(A,{E:()=>d,Q:()=>m});var t=e(4496),N=e(3480),i=e(3840),C=e(3120),M=e(3616);let d=(()=>{class o{constructor(E,T){this.el=E,this.destroy$=T}set tuiScrollIntoView(E){E&&(0,C.k)(0).pipe((0,M.a)(this.destroy$)).subscribe(()=>{this.el.nativeElement.dispatchEvent(new CustomEvent(i.dG,{bubbles:!0,detail:this.el.nativeElement}))})}}return o.\u0275fac=function(E){return new(E||o)(t.GI1(t.GMv),t.GI1(N.UF,2))},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiScrollIntoView",""]],inputs:{tuiScrollIntoView:"tuiScrollIntoView"},features:[t.M5G([N.UF])]}),o})(),m=(()=>{class o{}return o.\u0275fac=function(E){return new(E||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({}),o})()},5384:(y,A,e)=>{e.d(A,{E$:()=>F,YB:()=>K,wu:()=>v});var t=e(4496),N=e(6504),i=e(900),C=e(4392),M=e(2528),d=e(1800),m=e(3656),o=e(6988),R=e(5944),E=e(4336),T=e(1040),I=e(5657),D=e(3412),$=e(8960),P=e(5568),p=e(4704),V=e(4e3),c=e(1368);function G(a,S){if(1&a&&t.wR5(0,"tui-svg",3),2&a){const l=t.GaO();t.E7m("src",l.icons.check)("tuiScrollIntoView",!0)}}function L(a,S){1&a&&t.wR5(0,"span",4)}let v=(()=>{class a{constructor(l,r,f,U,O,g,_,s){this.icons=l,this.context=r,this.host=f,this.el=U,this.option=O,this.dataList=g,this.control=_,this.abstractControl=s,this.changeDetection$=new I.E,this.selected$=(0,D.U)(this.changeDetection$,this.control.valueChanges||$.k,(0,i.Ax)(this.el.nativeElement,"animationstart")).pipe((0,P.W)(null),(0,p.k)(()=>this.selected),(0,V.a)())}get matcher(){return this.host.identityMatcher||C.y}ngOnInit(){Promise.resolve().then(()=>{var l,r;(0,M.kF)(this.option.value)&&!this.option.disabled&&(null===(r=(l=this.host).checkOption)||void 0===r||r.call(l,this.option.value))})}ngDoCheck(){this.changeDetection$.next()}get value(){var l,r;return null!==(r=null===(l=this.abstractControl)||void 0===l?void 0:l.value)&&void 0!==r?r:this.control.value}get selected(){return(0,M.kF)(this.option.value)&&(0,M.kF)(this.value)&&this.matcher(this.value,this.option.value)}}return a.\u0275fac=function(l){return new(l||a)(t.GI1(R.QJ),t.GI1(T.C0),t.GI1(R.u2),t.GI1(t.GMv),t.GI1(E.sP),t.GI1(E.yi,8),t.GI1(N.eq),t.GI1(d._y,8))},a.\u0275cmp=t.In1({type:a,selectors:[["tui-select-option"]],decls:5,vars:5,consts:[[3,"ngTemplateOutlet"],["automation-id","tui-select-option__checkmark","class","t-checkmark",3,"src","tuiScrollIntoView",4,"ngIf","ngIfElse"],["dummy",""],["automation-id","tui-select-option__checkmark",1,"t-checkmark",3,"src","tuiScrollIntoView"],[1,"t-dummy"]],template:function(l,r){if(1&l&&(t.C_f(0,0),t.yuY(1,G,1,2,"tui-svg",1),t.wVc(2,"async"),t.yuY(3,L,1,0,"ng-template",null,2,t.gJz)),2&l){const f=t.Gew(4);t.E7m("ngTemplateOutlet",r.context.$implicit),t.yG2(),t.E7m("ngIf",t.kDX(2,3,r.selected$))("ngIfElse",f)}},dependencies:[m.Wu,c.XV,c.u_,o.E,c.a],styles:['@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-border-start:.25rem solid transparent;border-inline-start:.25rem solid transparent}tui-data-list[data-list-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}tui-data-list[data-list-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{width:1.75rem}'],changeDetection:0}),a})();const F=new T.WO(v);let K=(()=>{class a{}return a.\u0275fac=function(l){return new(l||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[c.MD,m.Yt,o.Q]]}),a})()}}]);