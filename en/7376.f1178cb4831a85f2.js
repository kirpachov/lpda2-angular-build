"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7376],{1690:(L,T,n)=>{n.d(T,{O:()=>U});var e=n(4496),s=n(6504),y=n(3480),O=n(8212),E=n(2720),h=n(400),_=n(7924),c=n(9956),C=n(6528),g=n(2740),M=n(1940),A=n(9880),p=n(8048),S=n(9852),N=n(9064);function R(u,D){if(1&u&&e.wR5(0,"app-errors",3),2&u){const t=e.GaO();let a;e.E7m("errors",null==(a=t.form.get("weekday"))?null:a.errors)}}function f(u,D){if(1&u&&e.wR5(0,"app-errors",3),2&u){const t=e.GaO();e.E7m("errors",t.wholeDay.errors)}}function l(u,D){if(1&u&&e.wR5(0,"app-errors",3),2&u){const t=e.GaO();e.E7m("errors",t.weeklyFrom.errors)}}function o(u,D){if(1&u&&e.wR5(0,"app-errors",3),2&u){const t=e.GaO();e.E7m("errors",t.weeklyTo.errors)}}function i(u,D){if(1&u&&e.wR5(0,"app-errors",3),2&u){const t=e.GaO();e.E7m("errors",t.message.errors)}}function m(u,D){if(1&u&&e.wR5(0,"app-errors",3),2&u){const t=e.GaO();e.E7m("errors",t.form.errors)}}let I=(()=>{class u{constructor(){this.submitEvent=new e._w7,this.cancelEvent=new e._w7,this.submitted=(0,e.OCB)(!1),this.weeklyFrom=new s.Ku(null),this.weeklyTo=new s.Ku(null),this.wholeDay=new s.Ku(!0),this.message=new s.Ku(null,[s.AQ.required,S.S.objectNotEmpty]),this.form=new s.WC({weekly_from:this.weeklyFrom,weekly_to:this.weeklyTo,weekday:new s.Ku(null,[s.AQ.required,s.AQ.min(0),s.AQ.max(6)]),message:this.message,wholeDay:this.wholeDay},{validators:[S.S.formWeeklyFromTo("weekly_from","weekly_to"),S.S.canBeBlankIf("weekly_from",()=>!0===this.wholeDay.value,{message:"Enter the start time."}),S.S.canBeBlankIf("weekly_to",()=>!0===this.wholeDay.value,{message:"Enter the end time"})]}),this.formDefaultValue=this.form.value}submit(){if(this.submitted.set(!0),this.form.invalid)return;const t=this.formatOutput();t&&this.submitEvent.emit(t)}cancel(){this.cancelEvent.emit()}set holiday(t){const a=t instanceof E.k?t.data:t;a?this.form.patchValue({weekly_from:a.weekly_from?h.uc.fromString(a.weekly_from):null,weekly_to:a.weekly_to?h.uc.fromString(a.weekly_to):null,weekday:a.weekday??null,message:a.translations?.message??{},wholeDay:E.k.wholeDay({weekly_from:a.weekly_from,weekly_to:a.weekly_to})}):this.form.reset(this.formDefaultValue)}formatOutput(){if(this.form.invalid)return null;const{weekly_from:t,weekly_to:a,weekday:r}=this.form.value;let d=null,v=null;if(!0===this.wholeDay.value?(v="00:00",d="23:59"):(t&&(v=t.hours+":"+t.minutes),a&&(d=a.hours+":"+a.minutes)),!v||!d||"number"!=typeof r)return null;const w=this.message.value;return w?{weekday:r,weekly_from:v,weekly_to:d,message:w}:null}static#e=this.\u0275fac=function(a){return new(a||u)};static#t=this.\u0275cmp=e.In1({type:u,selectors:[["app-weekly-holiday-form"]],inputs:{holiday:"holiday"},outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},standalone:!0,features:[e.M5G([y.UF]),e.UHJ],decls:37,vars:12,consts:()=>{let t,a,r,d;return t="Closed all day",a="Message for customers looking to make a reservation.",r="Confirm",d="Cancel",[[3,"formGroup","ngSubmit"],[1,"block","mb-3"],["formControlName","weekday",3,"autofocus"],[3,"errors"],[3,"formControl"],t,[3,"expanded"],[1,"my-3"],[1,"flex","items-center","justify-around"],["formControlName","weekly_from"],["formControlName","weekly_to"],[3,"long","formControl"],a,[1,"flex","items-center"],["type","submit","tuiButton","","appearance","primary",1,"me-2"],r,["type","button","tuiButton","","appearance","outline",3,"click"],d]},template:function(a,r){1&a&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return r.submit()}),e.I0R(1,"div",1)(2,"p"),e.OEk(3,"Seleziona il giorno della settimana"),e.C$Y(),e.wR5(4,"app-weekday-select",2),e.yuY(5,R,1,1,"app-errors",3),e.C$Y(),e.I0R(6,"div",1)(7,"tui-checkbox-block",4),e.SAx(8),e.aS0(9,5),e.k70(),e.C$Y(),e.yuY(10,f,1,1,"app-errors",3),e.I0R(11,"tui-expand",6)(12,"div",7)(13,"p"),e.OEk(14,"Orario di chiusura"),e.C$Y(),e.I0R(15,"div",8)(16,"div")(17,"tui-input-time",9),e.OEk(18," Chiusi dalle ore (Formato 24h): "),e.C$Y(),e.yuY(19,l,1,1,"app-errors",3),e.C$Y(),e.I0R(20,"div")(21,"tui-input-time",10),e.OEk(22," Chiusi fino alle ore (Formato 24h): "),e.C$Y(),e.yuY(23,o,1,1,"app-errors",3),e.C$Y()()()()(),e.I0R(24,"div",1)(25,"app-i18n-input",11),e.SAx(26),e.aS0(27,12),e.k70(),e.C$Y(),e.yuY(28,i,1,1,"app-errors",3),e.C$Y(),e.yuY(29,m,1,1,"app-errors",3),e.I0R(30,"div",13)(31,"button",14),e.SAx(32),e.aS0(33,15),e.k70(),e.C$Y(),e.I0R(34,"button",16),e.qCj("click",function(){return r.cancel()}),e.SAx(35),e.aS0(36,17),e.k70(),e.C$Y()()()),2&a&&(e.E7m("formGroup",r.form),e.yG2(4),e.E7m("autofocus",!0),e.yG2(),e.C0Y(5,r.submitted()?5:-1),e.yG2(2),e.E7m("formControl",r.wholeDay),e.yG2(3),e.C0Y(10,r.submitted()?10:-1),e.yG2(),e.E7m("expanded",!1===r.wholeDay.value),e.yG2(8),e.C0Y(19,r.submitted()?19:-1),e.yG2(4),e.C0Y(23,r.submitted()?23:-1),e.yG2(2),e.E7m("long",!1)("formControl",r.message),e.yG2(3),e.C0Y(28,r.submitted()?28:-1),e.yG2(),e.C0Y(29,r.submitted()?29:-1))},dependencies:[_.W,s.sl,s.sz,s.ue,s.u,s.ug,s.uW,s.Wo,c.g,C.i,C.I,A.kh,A.st,g.IZ,g.iw,g.gt,O.CI,O.Kw,M.Q,p.aS,N.w],encapsulation:2})}return u})();var P=n(964),H=n(5e3),$=n(5193),F=n(424);function G(u,D){if(1&u&&e.wR5(0,"app-errors",4),2&u){const t=e.GaO();e.E7m("errors",t.dates.errors)}}function x(u,D){if(1&u&&e.wR5(0,"app-errors",4),2&u){const t=e.GaO();e.E7m("errors",t.message.errors)}}function W(u,D){if(1&u&&e.wR5(0,"app-errors",4),2&u){const t=e.GaO();e.E7m("errors",t.form.errors)}}let k=(()=>{class u{constructor(){this.today=h.EK.currentLocal(),this.submitEvent=new e._w7,this.cancelEvent=new e._w7,this.dates=new s.Ku(null,[s.AQ.required]),this.message=new s.Ku(null,[s.AQ.required,S.S.objectNotEmpty]),this.submitted=(0,e.OCB)(!1),this.form=new s.WC({dates:this.dates,message:this.message}),this.formDefaultValue=this.form.value}submit(){if(this.submitted.set(!0),this.form.invalid)return;const t=this.formatOutput();if(!t)return console.warn("Invalid form value",this.form.value);this.submitEvent.emit(t)}cancel(){this.cancelEvent.emit()}set holiday(t){const a=t instanceof E.k?t.data:t;if(a){const r={dates:null,message:t?.translations?.message||null},d=a.from_timestamp?(0,P.yc)(a.from_timestamp):null,v=a.to_timestamp?(0,P.yc)(a.to_timestamp):null;d&&v&&(r.dates=new h.Se(d,v)),this.form.patchValue(r)}else this.form.reset(this.formDefaultValue)}formatOutput(){if(this.form.invalid)return null;const t=this.form.value;if(!t)return null;const a=t.dates;if(!a)return null;const r=a.from,d=a.to;if(!r||!d)return null;if(!(r instanceof h.EK&&d instanceof h.EK))throw new Error("Invalid TuiDay object");return{from_timestamp:r.toString("YMD"),to_timestamp:d.toString("YMD"),message:t.message}}static#e=this.\u0275fac=function(a){return new(a||u)};static#t=this.\u0275cmp=e.In1({type:u,selectors:[["app-once-holiday-form"]],inputs:{holiday:"holiday"},outputs:{submitEvent:"submitEvent",cancelEvent:"cancelEvent"},standalone:!0,features:[e.M5G([y.UF]),e.UHJ],decls:23,vars:9,consts:()=>{let t,a,r,d,v,w;return t="Start and end dates",a="Select the start and end date of the scheduled closure.",r="\n           Attention: The closure will be active from the first included day to\n          the last excluded day (By selecting from September 1st to 8th, it will\n          not be possible to book the first, the second, etc., but it will be\n          possible to book the 8th.). \n        ",d="Message for customers looking to make a reservation.",v="Confirm",w="Cancel",[[3,"formGroup","ngSubmit"],[1,"block","mb-3"],[3,"min","tuiDropdownOpen","formControl"],t,[3,"errors"],a,r,[3,"long","formControl"],d,[1,"flex","items-center"],["type","submit","tuiButton","","appearance","primary",1,"me-2"],v,["type","button","tuiButton","","appearance","outline",3,"click"],w]},template:function(a,r){1&a&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return r.submit()}),e.I0R(1,"div",1)(2,"tui-input-date-range",2),e.SAx(3),e.aS0(4,3),e.k70(),e.C$Y(),e.yuY(5,G,1,1,"app-errors",4),e.I0R(6,"p"),e.aS0(7,5),e.C$Y(),e.I0R(8,"p"),e.aS0(9,6),e.C$Y()(),e.I0R(10,"div",1)(11,"app-i18n-input",7),e.SAx(12),e.aS0(13,8),e.k70(),e.C$Y(),e.yuY(14,x,1,1,"app-errors",4),e.C$Y(),e.yuY(15,W,1,1,"app-errors",4),e.I0R(16,"div",9)(17,"button",10),e.SAx(18),e.aS0(19,11),e.k70(),e.C$Y(),e.I0R(20,"button",12),e.qCj("click",function(){return r.cancel()}),e.SAx(21),e.aS0(22,13),e.k70(),e.C$Y()()()),2&a&&(e.E7m("formGroup",r.form),e.yG2(2),e.E7m("min",r.today)("tuiDropdownOpen",!0)("formControl",r.dates),e.yG2(3),e.C0Y(5,r.submitted()?5:-1),e.yG2(6),e.E7m("long",!1)("formControl",r.message),e.yG2(3),e.C0Y(14,r.submitted()?14:-1),e.yG2(),e.C0Y(15,r.submitted()?15:-1))},dependencies:[c.g,O.CI,O.Kw,s.sl,s.sz,s.ue,s.u,s.ug,s.uW,F.uy,F.YZ,F.Ku,H.m6,p.aS,$.ms,$.oL,N.w],encapsulation:2})}return u})();function b(u,D){if(1&u){const t=e.KQA();e.I0R(0,"app-weekly-holiday-form",1),e.qCj("cancelEvent",function(){e.usT(t);const r=e.GaO(2);return e.CGJ(r.cancelEvent.emit())})("submitEvent",function(r){e.usT(t);const d=e.GaO(2);return e.CGJ(d.submitEvent.emit(r))}),e.C$Y()}if(2&u){const t=e.GaO(2);e.E7m("holiday",t.holiday)}}function K(u,D){if(1&u){const t=e.KQA();e.I0R(0,"app-once-holiday-form",1),e.qCj("cancelEvent",function(){e.usT(t);const r=e.GaO(2);return e.CGJ(r.cancelEvent.emit())})("submitEvent",function(r){e.usT(t);const d=e.GaO(2);return e.CGJ(d.submitEvent.emit(r))}),e.C$Y()}if(2&u){const t=e.GaO(2);e.E7m("holiday",t.holiday)}}function B(u,D){if(1&u&&e.yuY(0,b,1,1,"app-weekly-holiday-form",0)(1,K,1,1),2&u){const t=e.GaO();e.C0Y(0,!0===t.weekly()?0:1)}}function z(u,D){if(1&u){const t=e.KQA();e.I0R(0,"div",2)(1,"div",3)(2,"div")(3,"p"),e.aS0(4,4),e.C$Y(),e.I0R(5,"div",5)(6,"div",6)(7,"button",7),e.qCj("click",function(){e.usT(t);const r=e.GaO();return e.CGJ(r.weekly.set(!0))}),e.SAx(8),e.aS0(9,8),e.k70(),e.C$Y()(),e.I0R(10,"div")(11,"button",7),e.qCj("click",function(){e.usT(t);const r=e.GaO();return e.CGJ(r.weekly.set(!1))}),e.SAx(12),e.aS0(13,9),e.k70(),e.C$Y()()()()()()}}let U=(()=>{class u{constructor(){this.weekly=(0,e.OCB)(null),this.cancelEvent=new e._w7,this.submitEvent=new e._w7,this.holidayValue=null,this.weeklyHolidayForm=null,this.onceHolidayForm=null}set holiday(t){this.holidayValue=t,this.updateWeeklyByHoliday()}get holiday(){return this.holidayValue}findForm(){const t=this.weekly()?this.weeklyHolidayForm:this.onceHolidayForm;if(!t)throw new Error("Component not found");if(!t.form)throw new Error("Form not found");return t.form}updateWeeklyByHoliday(){const t=this.holiday;this.weekly.set(t?!0===t.isWeekly:null)}static#e=this.\u0275fac=function(a){return new(a||u)};static#t=this.\u0275cmp=e.In1({type:u,selectors:[["app-holiday-form"]],viewQuery:function(a,r){if(1&a&&(e.CC$(I,5),e.CC$(k,5)),2&a){let d;e.wto(d=e.Gqi())&&(r.weeklyHolidayForm=d.first),e.wto(d=e.Gqi())&&(r.onceHolidayForm=d.first)}},inputs:{holiday:"holiday"},outputs:{cancelEvent:"cancelEvent",submitEvent:"submitEvent"},standalone:!0,features:[e.M5G([y.UF]),e.UHJ],decls:2,vars:1,consts:()=>{let t,a,r;return t="What type of closure do you want to create?",a="Weekly repetition",r="One time only",[[3,"holiday"],[3,"holiday","cancelEvent","submitEvent"],[1,"flex","flex-col","justify-center","items-center"],[1,"flex","flex-row","justify-center","items-center"],t,[1,"flex","items-center","justify-around"],[1,"me-2"],["type","button","appearance","outline","tuiButton","",3,"click"],a,r]},template:function(a,r){1&a&&e.yuY(0,B,2,1)(1,z,14,0),2&a&&e.C0Y(0,null!=r.weekly()?0:1)},dependencies:[O.CI,O.Kw,I,k,s.y],encapsulation:2,changeDetection:0})}return u})()},9064:(L,T,n)=>{n.d(T,{w:()=>f});var e=n(4496),s=n(6504),y=n(3480),O=n(6700),E=n(3616),h=n(6684),_=n(3797),c=n(8588),C=n(1368),g=n(9956),M=n(1292);function A(l,o){if(1&l&&(e.I0R(0,"tui-textarea",2),e.OEk(1),e.C$Y()),2&l){const i=e.GaO().$implicit,m=e.GaO();e.E7m("formControl",i.control),e.yG2(),e.oRS(" ",m.getFullLang(i.lang)," ")}}function p(l,o){if(1&l&&(e.I0R(0,"tui-input",2),e.OEk(1),e.C$Y()),2&l){const i=e.GaO().$implicit,m=e.GaO();e.E7m("formControl",i.control),e.yG2(),e.oRS(" ",m.getFullLang(i.lang)," ")}}const S=l=>({"mb-3":l});function N(l,o){if(1&l&&(e.SAx(0),e.I0R(1,"div",1),e.yuY(2,A,2,2,"tui-textarea",2)(3,p,2,2),e.wR5(4,"app-errors",3),e.C$Y(),e.k70()),2&l){const i=o.$implicit,m=o.last,I=e.GaO();e.yG2(),e.E7m("ngClass",e.S45(3,S,!m)),e.yG2(),e.C0Y(2,I.long?2:3),e.yG2(2),e.E7m("errors",i.control.errors)}}const R=["*"];let f=(()=>{class l{constructor(){this.destroy$=new y.UF,this.long=!1,this.controls=(0,e.OCB)({}),this.controlsArr=(0,e.S6b)(()=>{const i=this.controls();return Object.keys(i).map(m=>({lang:m,control:i[m]}))}),this.touched$=new O.g(!1),this.value$=new O.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(i){this.value$.pipe((0,E.a)(this.destroy$)).subscribe({next:m=>i(m)})}registerOnTouched(i){this.touched$.pipe((0,h.I)(m=>!0===m)).subscribe({next:()=>i()})}writeValue(i){this.patchValue(i??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(i){return M.S[i]??i}controlChanged(i){this.value$.next({...this.value$.value,[i]:this.controls()[i].value})}patchValue(i){Object.keys(i).forEach(m=>this.addLang(m)),Object.keys(this.controls()).forEach(m=>{this.controls()[m].patchValue(i[m]??null)})}addLang(i){if(this.controls()[i])return;const m=new s.Ku;m.valueChanges.subscribe({next:()=>this.controlChanged(i)}),this.controls.set({...this.controls(),[i]:m})}static#e=this.\u0275fac=function(m){return new(m||l)};static#t=this.\u0275cmp=e.In1({type:l,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[e.M5G([{provide:s.Y6,useExisting:(0,e.wd)(()=>l),multi:!0},y.UF]),e.UHJ],ngContentSelectors:R,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(m,I){1&m&&(e.kPM(),e._Xx(0),e.yuY(1,N,5,5,"ng-container",0)),2&m&&(e.yG2(),e.E7m("ngForOf",I.controlsArr()))},dependencies:[s.sl,s.ue,s.ug,_.CQ,_.Oo,_.cP,C.Iw,g.g,C.QF,c.Y3,c.wp,c.kd],changeDetection:0})}return l})()},7924:(L,T,n)=>{n.d(T,{W:()=>N});var e=n(4496),s=n(6504),y=n(3480),O=n(5e3),E=n(8048),h=n(5193),_=n(6052),c=n(5188),C=n(2516),g=n(4336),M=n(7936);function A(R,f){1&R&&(e.OEk(0),e.wVc(1,"weekday")),2&R&&e.cNF(e.kDX(1,1,f.$implicit))}const p=()=>[0,1,2,3,4,5,6];function S(R,f){if(1&R&&e.wR5(0,"tui-data-list-wrapper",5),2&R){e.GaO();const l=e.Gew(1);e.E7m("items",e.q4q(2,p))("itemContent",l)}}let N=(()=>{class R{constructor(){this.control=new s.Ku(null,[s.AQ.min(0),s.AQ.max(6)]),this.initialAutofocus=(0,e.OCB)(!1),this.dropdownOpen=(0,e.OCB)(!1),this.showCleaner=!0}set autofocus(l){this.initialAutofocus.set(!0===l),this.dropdownOpen.set(!0===l)}ngOnChanges(){this.control.valueChanges.subscribe({next:l=>{l&&this.dropdownOpen.set(!1)}})}writeValue(l){let o=null;o="number"==typeof l?l:"string"==typeof l?Number(l):null,this.control.setValue(o)}registerOnChange(l){this.control.valueChanges.subscribe({next:o=>l(o)})}registerOnTouched(l){this.control.valueChanges.subscribe({next:o=>l(o)})}setDisabledState(l){l?this.control.disable():this.control.enable()}static#e=this.\u0275fac=function(o){return new(o||R)};static#t=this.\u0275cmp=e.In1({type:R,selectors:[["app-weekday-select"]],inputs:{showCleaner:"showCleaner",autofocus:"autofocus"},standalone:!0,features:[e.M5G([y.UF,{provide:s.Y6,useExisting:R,multi:!0}]),e.SYr,e.UHJ],decls:7,vars:5,consts:()=>{let l;return l="Day of the week",[["selectItem",""],[3,"tuiAutoFocus","tuiDropdownOpen","valueContent","tuiTextfieldCleaner","formControl","tuiDropdownOpenChange"],l,["tuiTextfield",""],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]]},template:function(o,i){if(1&o&&(e.yuY(0,A,2,3,"ng-template",null,0,e.gJz),e.I0R(2,"tui-select",1),e.qCj("tuiDropdownOpenChange",function(I){return i.dropdownOpen.set(I)}),e.SAx(3),e.aS0(4,2),e.k70(),e.wR5(5,"input",3),e.yuY(6,S,1,3,"tui-data-list-wrapper",4),e.C$Y()),2&o){const m=e.Gew(1);e.yG2(2),e.E7m("tuiAutoFocus",i.initialAutofocus())("tuiDropdownOpen",i.dropdownOpen())("valueContent",m)("tuiTextfieldCleaner",i.showCleaner)("formControl",i.control)}},dependencies:[_.q8,_.OO,g.Ux,E.aS,E.es,c.my,c.cP,c.uO,M.b,s.sl,s.ue,s.ug,C.G,O.m6,O.gJ,h.ms,h.oL],encapsulation:2})}return R})()},9852:(L,T,n)=>{n.d(T,{S:()=>E});var e=n(6504),s=n(400);const y=h=>null!=h&&""!=`${h}`;class E extends e.AQ{static formWeeklyFromTo(_,c){return C=>{if(!(C instanceof e.WC))return console.warn("formWeeklyFromTo: param is not a FormGroup",C),null;const g=C,M=g.get(_),A=g.get(c);return M&&A&&M.value instanceof s.uc&&A.value instanceof s.uc&&M.value&&A.value&&M.value.toAbsoluteMilliseconds()>=A.value.toAbsoluteMilliseconds()?{formWeeklyFromTo:!0}:null}}static canBeBlankIf(_,c,C){const g=C?.message||"The form is not valid.";return M=>{if(!(M instanceof e.WC))throw new Error("canBeBlankIf: thisIsAFormGroup is not a FormGroup");const p=M.get(_);if(!p)throw new Error("canBeBlankIf: control is blank. control name: "+_);return y(p.value)||c()?null:{[`${_}canBeBlankIf`]:g}}}static listOfEmails(_){const c=_.value;if(!c||"string"!=typeof c||!c.length)return null;const C=new RegExp("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$","i");return c.split(/\,|\s+/gm).map(g=>g.trim()).filter(g=>g.length).forEach(g=>{if(!C.test(g))return{listOfEmails:!0}}),null}static mustBeArray(_){return Array.isArray(_.value)?null:{mustBeArray:!0}}static objectNotEmpty(_){return y(_.value)&&"object"==typeof _.value&&0===Object.keys(_.value).length&&0===Object.values(_.value).filter(C=>y(C)).length?{objectNotEmpty:!0}:null}static arrayMinLength(_){return c=>Array.isArray(c.value)&&c.value.length<_?{arrayMinLength:{requiredLength:_,actualLength:c.value?.length??0}}:null}static validateArray(_){return c=>{if(!Array.isArray(c.value))return null;const C={};for(const g of c.value){const M=_(new e.yM(g));M&&Object.assign(C,M)}return Object.keys(C).length?C:null}}static percentage(_){return y(_.value)&&(isNaN(_.value)||_.value<0||_.value>100)?{percentage:!0}:null}static phoneIT(_){const c=g=>g?null:{phoneIT:!0},C=`${_.value}`.trim().replace(/\s+/gm,"").replace(/^\+39/gm,"");return y(C)?c(!((h=C).length<9||isNaN(Number(h))||h.length>14)):c(!0);var h}static instanceof(_){return c=>!y(c.value)||c.value instanceof _?null:{instanceof:!0}}static#e=this.instanceOf=this.instanceof;static numerical(_){return y(_.value)&&isNaN(_.value)?{numerical:!0}:null}static moreThan(_){return c=>c.value<=_?{moreThan:!0}:null}static in(_){return this.inclusion(_)}static inclusion(_){return c=>y(c.value)&&!_.includes(c.value)?{inclusion:!0}:null}}},1292:(L,T,n)=>{n.d(T,{S:()=>e});const e={it:"Italian",en:"English",es:"Spanish",fr:"French",de:"German",pt:"Portuguese",ru:"Russian",zh:"Chinese",ja:"Japanese",ar:"Arabic",hi:"Hindi",bn:"Bengali",pa:"Punjabi",ms:"Malaysian"}},2720:(L,T,n)=>{n.d(T,{k:()=>s});var e=n(8400);class s extends e.w{static wholeDay(O){return"00:00"===O.weekly_from&&"23:59"===O.weekly_to}constructor(O){super(O),this.isWeekly=!1,this.isWholeDay=!1,this.from_timestamp=O.from_timestamp?new Date(O.from_timestamp):void 0,this.to_timestamp=O.to_timestamp?new Date(O.to_timestamp):void 0,this.weekly_from=O.weekly_from,this.weekly_to=O.weekly_to,this.weekday=O.weekday,this.message=O.message,this.translations={...O.translations??{}},this.isWeekly=this.calcIsWeekly(),this.isWholeDay=this.calcIsWholeday()}calcIsWeekly(){return"string"==typeof this.weekly_from&&this.weekly_from.length>0||"string"==typeof this.weekly_to&&this.weekly_to.length>0}calcIsWholeday(){return s.wholeDay({weekly_from:this.weekly_from,weekly_to:this.weekly_to})}}},2516:(L,T,n)=>{n.d(T,{G:()=>s});var e=n(4496);let s=(()=>{class y{constructor(){this.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}transform(E){return"number"!=typeof E&&"string"==typeof E&&(E=parseInt(E)),"number"==typeof E&&E>=0&&E<=6?this.weekdays[E]:null}static#e=this.\u0275fac=function(h){return new(h||y)};static#t=this.\u0275pipe=e.UTH({name:"weekday",type:y,pure:!0,standalone:!0})}return y})()},6820:(L,T,n)=>{n.d(T,{I:()=>O});var e=n(6012),s=n(2720),y=n(4496);let O=(()=>{class E extends e.s{constructor(){super(s.k,"admin/holidays")}static#e=this.\u0275fac=function(c){return new(c||E)};static#t=this.\u0275prov=y.wxM({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},9880:(L,T,n)=>{n.d(T,{kP:()=>A,kh:()=>R,st:()=>N});var e=n(4496),s=n(3480),y=n(4392),O=n(3120),E=n(3616),h=n(7692),_=n(1368);const c=["wrapper"];function C(f,l){if(1&f&&(e.I0R(0,"tui-loader",4),e.C_f(1,5),e.C$Y()),2&f){const o=e.GaO(2);e.E7m("overlay",!0)("showLoader",o.loading),e.yG2(),e.E7m("ngTemplateOutlet",o.content)}}function g(f,l){if(1&f&&(e.SAx(0),e._Xx(1),e.yuY(2,C,2,3,"tui-loader",3),e.k70()),2&f){const o=e.GaO();e.yG2(2),e.E7m("ngIf",o.async)("ngIfElse",o.content)}}const M=["*"];let A=(()=>{class f{}return f.\u0275fac=function(o){return new(o||f)},f.\u0275dir=e.Sc5({type:f,selectors:[["","tuiExpandContent",""]]}),f})();let N=(()=>{class f{constructor(o,i){this.cdr=o,this.destroy$=i,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(o){if(null!==this.expanded)return 0!==this.state?(this.expanded=o,void(this.state=3)):(this.expanded=o,void this.retrigger(this.async&&o?1:3));this.expanded=o}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:o,state:i,contentWrapper:m}=this;return o&&2===i||!o&&3===i?0:m&&(!o&&2===i||o&&3===i)?m.nativeElement.offsetHeight:m&&o&&1===i?Math.max(m.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:o}){"opacity"===o&&3===this.state&&(this.state=0)}onExpandLoaded(o){o.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(o){this.state=2,(0,O.k)(0).pipe((0,E.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=o,this.cdr.markForCheck())})}}return f.\u0275fac=function(o){return new(o||f)(e.GI1(e.kD9),e.GI1(s.UF,2))},f.\u0275cmp=e.In1({type:f,selectors:[["tui-expand"]],contentQueries:function(o,i,m){if(1&o&&e.szK(m,A,5,e.Yw2),2&o){let I;e.wto(I=e.Gqi())&&(i.content=I.first)}},viewQuery:function(o,i){if(1&o&&e.CC$(c,5),2&o){let m;e.wto(m=e.Gqi())&&(i.contentWrapper=m.first)}},hostVars:9,hostBindings:function(o,i){1&o&&e.qCj("transitionend.self",function(I){return i.onTransitionEnd(I)})("tui-expand-loaded",function(I){return i.onExpandLoaded(I)}),2&o&&(e.e48("aria-expanded",i.expanded),e.m4B("height",i.height,"px"),e.eAK("_expanded",i.expanded)("_overflow",i.overflow)("_loading",i.loading))},inputs:{async:"async",expandedSetter:[e.Wk5.None,"expanded","expandedSetter"]},features:[e.M5G([s.UF])],ngContentSelectors:M,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(o,i){1&o&&(e.kPM(),e.I0R(0,"div",0,1),e.yuY(2,g,3,2,"ng-container",2),e.C$Y()),2&o&&(e.E7m("@tuiParentAnimation",void 0)("@.disabled",i.overflow),e.yG2(2),e.E7m("ngIf",i.contentVisible))},dependencies:[h.Cb,_.u_,_.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[y.cI]},changeDetection:0}),f})(),R=(()=>{class f{}return f.\u0275fac=function(o){return new(o||f)},f.\u0275mod=e.a4G({type:f}),f.\u0275inj=e.s3X({imports:[[_.MD,h.Sk]]}),f})()}}]);