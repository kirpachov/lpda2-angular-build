"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2208],{9956:(D,A,t)=>{t.d(A,{g:()=>P});var e=t(1368),o=t(4496),E=t(9938),C=t(2528),u=t(7308),r=t(7012),l=t(3972),O=t(5944),R=t(1040);function c(_,N){if(1&_&&(o.SAx(0),o.OEk(1),o.k70()),2&_){const i=N.polymorpheusOutlet;o.yG2(),o.oRS(" ",i," ")}}const T=()=>({});function m(_,N){if(1&_&&(o.I0R(0,"div",1),o.wVc(1,"async"),o.yuY(2,c,2,1,"ng-container",2),o.wVc(3,"async"),o.C$Y()),2&_){const i=o.GaO();o.eAK("t-message-text_light","onDark"===o.kDX(1,6,i.mode$)),o.E7m("@tuiFadeIn",i.animation)("@tuiHeightCollapse",i.animation),o.yG2(2),o.E7m("polymorpheusOutlet",i.error.message||o.kDX(3,8,i.defaultErrorMessage$))("polymorpheusOutletContext",i.error.context||o.q4q(10,T))}}let I=(()=>{class _{constructor(i,f,p){this.animation=i,this.mode$=f,this.defaultErrorMessage$=p,this.error=null,this.visible=!0}set errorSetter(i){this.error=(0,C.gT)(i)?new u.E(i):i}onAnimation(i){this.visible=i}}return _.\u0275fac=function(i){return new(i||_)(o.GI1(O.kp),o.GI1(O.Yx),o.GI1(O.cX))},_.\u0275cmp=o.In1({type:_,selectors:[["tui-error"]],hostBindings:function(i,f){1&i&&o.qCj("animationcancel.self",function(){return f.onAnimation(!1)})("animationstart.self",function(){return f.onAnimation(!0)})},inputs:{errorSetter:[o.Wk5.None,"error","errorSetter"]},features:[o.M5G([l.Ir])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(i,f){1&i&&o.yuY(0,m,4,11,"div",0),2&i&&o.E7m("ngIf",f.error&&f.visible)},dependencies:[e.u_,R.Af,e.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[r.iY,r.K2]},changeDetection:0}),_})(),s=(()=>{class _{}return _.\u0275fac=function(i){return new(i||_)},_.\u0275mod=o.a4G({type:_}),_.\u0275inj=o.s3X({imports:[[e.MD,R.Ux]]}),_})();function M(_,N){1&_&&o.wR5(0,"tui-error",0),2&_&&o.E7m("error",N.$implicit)}function v(_,N){1&_&&o.C_f(0)}function h(_,N){1&_&&o.yuY(0,v,1,0,"ng-container",1),2&_&&o.E7m("ngTemplateOutlet",N.$implicit)}let P=(()=>{class _{constructor(){this._errors=null}get errors(){return this._errors}set errors(i){this._errors=i}allErrors(){return this.errors||null}errorsToTemplates(){return E.y.formatErrors(this.errors||null).filter(i=>i&&i instanceof o.Yw2)}errorsToStr(){return E.y.formatErrors(this.errors||null).filter(i=>i&&"string"==typeof i)}static#e=this.\u0275fac=function(f){return new(f||_)};static#t=this.\u0275cmp=o.In1({type:_,selectors:[["app-errors"]],inputs:{errors:"errors"},standalone:!0,features:[o.UHJ],decls:4,vars:0,consts:[[3,"error"],[4,"ngTemplateOutlet"]],template:function(f,p){1&f&&(o.c53(0,M,1,1,"tui-error",0,o.oxv),o.c53(2,h,1,1,"ng-container",null,o.oxv)),2&f&&(o.oho(p.errorsToStr()),o.yG2(2),o.oho(p.errorsToTemplates()))},dependencies:[e.MD,e.XV,s,I]})}return _})()},2208:(D,A,t)=>{t.d(A,{G:()=>J});var e=t(4496),o=t(9956),E=t(6504),C=t(8212),u=t(8048),r=t(5193),l=t(3797),O=t(9888),R=t(3320),c=t(6380),T=t(2740),m=t(400),I=t(3480),s=t(4680),M=t(5e3),v=t(8304),h=t(3616),P=t(6684),_=t(9212),N=t(7368),i=t(8824),f=t(3724),p=t(1560),F=t(1368),L=t(9772),W=t(964),Y=t(4592),w=t(4820),j=t(7936);const X=(S,y)=>({date:S,time:y});function Q(S,y){if(1&S&&(e.I0R(0,"app-reservation-tables-summary",26)(1,"p"),e.OEk(2,"Situazione tavoli per l'orario selezionato:"),e.C$Y()()),2&S){const n=e.GaO();let d;e.E7m("filters",e.IBC(1,X,n.form.value.date,null!==(d=n.utcTime())&&void 0!==d?d:""))}}function H(S,y){if(1&S){const n=e.KQA();e.I0R(0,"button",27),e.qCj("click",function(){e.usT(n);const a=e.GaO();return a.dateOpen.set(!0),e.CGJ(a.timeOpen.set(!1))}),e.I0R(1,"span",3)(2,"span",28),e.aS0(3,29),e.C$Y(),e.I0R(4,"mat-icon"),e.OEk(5,"calendar_today"),e.C$Y()()()}}let J=(()=>{class S{set item(n){n?this.form.patchValue({date:n.datetime?new m.EK(n.datetime?.getFullYear(),n.datetime?.getMonth(),n.datetime?.getDate()):null,time:n.datetime?new m.uc(n.datetime?.getHours(),n.datetime?.getMinutes()):null,fullname:n.fullname,adults:n.adults,children:n.children,email:n.email,table:n.table,notes:n.notes,phone:n.phone}):this.form.reset()}constructor(n){this.isMobile=n,this.reservationsService=(0,e.uUt)(v.S),this.publicRes=(0,e.uUt)(w.G),this.destroy$=(0,e.uUt)(I.UF),this.datePipe=(0,e.uUt)(F.y),this.formSubmit=new e._w7,this.cancelled=new e._w7,this.validTimes=(0,e.OCB)([]),this.utcTime=(0,e.OCB)(null),this.today=m.EK.currentLocal(),this.inputSize="l",this.form=new E.WC({date:new E.Ku(null,[E.AQ.required]),time:new E.Ku(null,[E.AQ.required]),fullname:new E.Ku(null,[E.AQ.required]),adults:new E.Ku(null,[E.AQ.required,E.AQ.min(0)]),children:new E.Ku(null,[E.AQ.required,E.AQ.min(0)]),email:new E.Ku(null,[E.AQ.email]),table:new E.Ku(null),notes:new E.Ku(null),phone:new E.Ku(null)}),this.loading=!1,this.dateOpen=(0,e.OCB)(!1),this.timeOpen=(0,e.OCB)(!1),this.loadingTimes=(0,e.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}ngOnInit(){this.dateOpen.set(!0),this.timeOpen.set(!1),this.form.get("date").valueChanges.pipe((0,h.a)(this.destroy$),(0,P.I)(n=>n instanceof m.EK),(0,_.y)(()=>this.dateOpen.set(!1)),(0,_.y)(()=>this.timeOpen.set(!0)),(0,_.y)(()=>this.loadingTimes.set(!0)),(0,N.G)(n=>this.publicRes.getValidTimes(n)),(0,i.U)(()=>this.loadingTimes.set(!1))).subscribe({next:n=>{const d=n.map(a=>a.valid_times).filter(a=>Array.isArray(a)&&a.length>0).flat();this.validTimes.set(d.map(a=>m.uc.fromString((0,L.CU)(a))))}}),this.form.get("time").valueChanges.pipe((0,h.a)(this.destroy$),(0,_.y)(()=>this.timeOpen.set(!1)),(0,_.y)(n=>this.utcTime.set(n?(0,L.ye)(n.toString("HH:MM")):null))).subscribe((0,f.I)())}submit(){this.submitted=!0,!this.form.invalid&&this.formSubmit.emit(this.formVal())}formVal(){const n=this.form.value;return n.datetime=(0,W.Qx)(n.date,n.time),delete n.date,delete n.time,n.table&&n.table.length>0||delete n.table,n.notes&&n.notes.length>0||delete n.notes,n.email&&n.email.length>0||delete n.notes,n}errorsFor(n){const d=this.form.get(n);return d&&(d.dirty||d.touched||this.submitted)?d.errors:null}cancel(){this.cancelled.emit()}static#e=this.\u0275fac=function(d){return new(d||S)(e.GI1(s.Mv))};static#t=this.\u0275cmp=e.In1({type:S,selectors:[["app-admin-reservation-form"]],inputs:{item:"item",loading:"loading"},outputs:{formSubmit:"formSubmit",cancelled:"cancelled"},standalone:!0,features:[e.M5G([I.UF,F.y]),e.UHJ],decls:59,vars:41,consts:()=>{let n,d,a,$,V,z,G,B,K,x,U,b;return n="Data",d="Now",a="Name",$="Number of adults",V="No. of children",z="Email",G="Table",B="Cell phone",K="Note",x="Confirm",U="Cancel",b="Set date",[[3,"autocomplete","formGroup","ngSubmit"],["class","block mb-3",3,"filters"],[1,"mb-3"],[1,"flex","items-center"],[1,"me-2","grow",3,"tuiDropdownOpen","tuiAutoFocus","tuiTextfieldSize","min","formControlName"],n,["formControlName","time",1,"grow",3,"tuiDropdownOpen","tuiTextfieldSize","items"],d,["tuiButton","","appearance","icon","type","button","size","s"],[3,"errors"],[3,"tuiTextfieldSize","formControlName"],a,["tuiTextfield","","type","text",3,"autocomplete"],[1,"me-2","grow",3,"tuiTextfieldSize","formControlName"],$,[1,"ms-2","grow",3,"tuiTextfieldSize","formControlName"],V,z,G,B,K,[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],x,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],U,[1,"block","mb-3",3,"filters"],["tuiButton","","appearance","icon","type","button","size","s",3,"click"],[1,"me-1"],b]},template:function(d,a){1&d&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return a.submit()}),e.yuY(1,Q,3,4,"app-reservation-tables-summary",1),e.I0R(2,"div",2)(3,"div",3)(4,"tui-input-date",4),e.SAx(5),e.aS0(6,5),e.k70(),e.C$Y(),e.I0R(7,"tui-input-time",6),e.SAx(8),e.aS0(9,7),e.k70(),e.C$Y()(),e.yuY(10,H,6,0,"button",8),e.wR5(11,"app-errors",9),e.C$Y(),e.I0R(12,"div",2)(13,"tui-input",10),e.SAx(14),e.aS0(15,11),e.k70(),e.wR5(16,"input",12),e.C$Y(),e.wR5(17,"app-errors",9),e.C$Y(),e.I0R(18,"div",2)(19,"div",3)(20,"tui-input-number",13),e.SAx(21),e.aS0(22,14),e.k70(),e.wR5(23,"input",12),e.C$Y(),e.I0R(24,"tui-input-number",15),e.SAx(25),e.aS0(26,16),e.k70(),e.wR5(27,"input",12),e.C$Y()()(),e.I0R(28,"div",2)(29,"tui-input",10),e.SAx(30),e.aS0(31,17),e.k70(),e.wR5(32,"input",12),e.C$Y(),e.wR5(33,"app-errors",9),e.C$Y(),e.I0R(34,"div",2)(35,"tui-input",10),e.SAx(36),e.aS0(37,18),e.k70(),e.wR5(38,"input",12),e.C$Y(),e.wR5(39,"app-errors",9),e.C$Y(),e.I0R(40,"div",2)(41,"tui-input",10),e.SAx(42),e.aS0(43,19),e.k70(),e.wR5(44,"input",12),e.C$Y(),e.wR5(45,"app-errors",9),e.C$Y(),e.I0R(46,"div",2)(47,"tui-input",10),e.SAx(48),e.aS0(49,20),e.k70(),e.wR5(50,"input",12),e.C$Y(),e.wR5(51,"app-errors",9),e.C$Y(),e.I0R(52,"div",21)(53,"button",22),e.SAx(54),e.aS0(55,23),e.k70(),e.C$Y(),e.I0R(56,"button",24),e.qCj("click",function(){return a.cancel()}),e.SAx(57),e.aS0(58,25),e.k70(),e.C$Y()()()),2&d&&(e.E7m("autocomplete","off")("formGroup",a.form),e.yG2(),e.C0Y(1,a.form.value.date&&a.utcTime()?1:-1),e.yG2(3),e.E7m("tuiDropdownOpen",a.dateOpen())("tuiAutoFocus",!0)("tuiTextfieldSize",a.inputSize)("min",a.today)("formControlName","date"),e.yG2(3),e.E7m("tuiDropdownOpen",a.timeOpen())("tuiTextfieldSize",a.inputSize)("items",a.validTimes()),e.yG2(3),e.C0Y(10,a.isMobile?10:-1),e.yG2(),e.E7m("errors",a.e("datetime")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","fullname"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("fullname")),e.yG2(3),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","adults"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","children"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","email"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("email")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","table"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("table")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","phone"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("phone")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","notes"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("notes")),e.yG2(2),e.E7m("showLoader",a.loading),e.yG2(3),e.E7m("showLoader",a.loading))},dependencies:[o.g,E.sl,E.sz,E.ue,E.u,E.uW,E.Wo,C.CI,C.Kw,l.CQ,l.Oo,l.cP,j.b,u.aS,u.rD,O.Q7,O.mi,O.Qj,R.K6,c.iO,c.yc,c.Ml,T.IZ,T.iw,T.gt,M.m6,M.gJ,r.ms,r.oL,p.qL,Y.u],encapsulation:2})}return S})()},9938:(D,A,t)=>{t.d(A,{y:()=>C});var e=t(6504);const o={required:"This field cannot be empty!",email:"This email is not valid!",numbersOnly:"Only numbers allowed!",numberOnly:"Only numbers allowed!",numerical:"Only numbers allowed!",invalid_http_url:"Invalid HTTP connection",minlength:u=>"\n           Text too short: Minimum length: \n          " + u.requiredLength + "\n           , current length: \n          " + u.actualLength + "\n        ",InvalidFormat:u=>"\n           \" \n          " + u.value + "\n           \" is not a valid format. Valid example: \" \n          " + u.validExample + "\n           \" \n        ",pattern:u=>"\n           \" \n          " + u.actualValue + "\n           \" is not a valid format. The format must comply with the following\n          regular expression (RegExp): \" \n          " + u.requiredPattern + "\n           \" \n        ",max:u=>"\n           The entered value is too large! Maximum value: \n          " + u.max + "\n           , current value: \n          " + u.actual + "\n        ",min:u=>"\n           The entered value is too small! Minimum value: \n          " + u.min + "\n           , current value: \n          " + u.actual + "\n        ",maxlength:u=>"\n           The entered value is too long! Maximum length: \n          " + u.requiredLength + "\n           , Current length: \n          " + u.actualLength + "\n        ",phoneIT:"\n           This does not seem to be a valid Italian phone number. Example: +39\n          123 456 7890 \n        ",inclusion:u=>{const r=Array.isArray(u)?"\n           The allowed values are: \n          " + u.join(", ") + "\n           . \n        ":"";return "\n           The entered value is not valid. \n          " + r + "\n        "},arrayMinLength:u=>"\n           You must enter at least \n          " + u.requiredLength + "\n           elements. \n        ",passwordConfirmation:"The passwords do not match!",formWeeklyFromTo:"The start time must be earlier than the end time!"},E={assignToFormUnlessControl:!0};class C{static formatErrors(r,l){return null==r||null==r?[]:new C(r,l).formatErrors()}static assignErrorsToForm(r,l,O={}){const R=l.error?.details;if(!R||!Array.isArray(R))return"object"==typeof R&&Object.keys(R).length>0?this.assignErrorsToFormFromJson(r,R,O):void console.warn("invalid errors provided to assignErrorsToForm",R);this.assignErrorsToFormFromArray(r,R,O)}static assignErrorsToFormFromJson(r,l,O={}){const R={...E,...O};Object.keys(l).forEach(c=>{const T=l[c];T&&Array.isArray(T)?T.forEach(m=>{const I=r.controls[c];I?I.setErrors({[m.attribute]:m.message}):R.assignToFormUnlessControl&&r.setErrors({[m.attribute]:m.message})}):console.warn("assignErrorsToFormFromJson expected an array of ActiveError, but got:",T)})}static assignErrorsToFormFromArray(r,l,O={}){const R={...E,...O};l.forEach(c=>{const T=r instanceof e.WC?r.controls[c.attribute]:r;T?T.setErrors({[c.attribute]:c.message}):R.assignToFormUnlessControl&&r.setErrors({[c.attribute]:c.message})})}constructor(r,l=o){this.defaultMessages=o,this.messages={},this.enableLogging=!1,this.errors=r,l?this.mergeMessages(l):this.assignDefaults()}assignDefaults(){this.messages={},Object.keys(this.defaultMessages).forEach(r=>{this.messages[r]=this.defaultMessages[r]})}mergeMessages(r){[...Object.keys(this.defaultMessages),...Object.keys(r)].forEach(O=>{this.messages[O]=r[O]?r[O]:this.defaultMessages[O]})}formatErrors(){return[...this.errorMsgFromControl()]}warn(...r){this.enableLogging&&console.warn(...r)}errorMsgFromControl(){if(null==this.errors||null==this.errors)return[];var r=[];return Object.keys(this.errors).filter(l=>{if("string"==typeof this.errors[l]&&this.errors[l].length>0)return r.push(this.errors[l]);if(this.messages.hasOwnProperty(l)&&this.messages[l]&&null!=this.messages[l]){const c=this.messages[l];switch(typeof c){case"string":default:r.push(c);break;case"function":r.push(c(this.errors[l]))}}else if(this.warn(`ReactiveFormsErrors missing error message of "${l}". Parser error with your custom logic.`),[!0,!1].includes(this.errors[l])){var R={};R[l]=this.errors[l],"string"!=typeof R&&(R=JSON.stringify(R)),r.push(R)}else r.push(this.errors[l])}),r}}},1676:(D,A,t)=>{t.d(A,{s:()=>T});var e=t(4496),o=t(6772),E=t(1128),C=t(7048),u=t(8256),r=t(8392),l=t(6700),O=t(4704),R=t(9212);function c(m){if(null==m)return null;if("object"==typeof m)return m;if(!("string"==typeof m&&m.length>0))return null;try{return JSON.parse(m)}catch{}return null}let T=(()=>{class m extends o.A{constructor(){super("public_data"),this.notifications=(0,e.uUt)(E.E),this.data$=new l.g(null),this.messages=(0,e.OCB)(null),this.messages$=this.data$.pipe((0,O.k)(s=>"object"==typeof s&&null!==s?c(s.public_messages):null),(0,R.y)(s=>this.messages.set(s))),this.contacts=(0,e.OCB)(null),this.contacts$=this.data$.pipe((0,O.k)(s=>"object"==typeof s&&null!==s?c(s.settings.email_contacts):null),(0,R.y)(s=>this.contacts.set(s))),this.load(),[this.contacts$,this.messages$].forEach(s=>{s.subscribe({error:M=>{console.warn("unexpected error",M)}})})}load(){this.http.get("").subscribe({next:s=>{this.data$.next(s)},error:s=>{this.notifications.error(s instanceof C.gj?(0,u.mk)(s):r.a)}})}static#e=this.\u0275fac=function(M){return new(M||m)};static#t=this.\u0275prov=e.wxM({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},4820:(D,A,t)=>{t.d(A,{G:()=>T});var e=t(4496),o=t(5180),E=t(6700),C=t(4704),u=t(9212),r=t(9144),l=t(6772),O=t(1676),R=t(5136),c=t(400);let T=(()=>{class m extends l.A{constructor(){super("reservations"),this.publicData=(0,e.uUt)(O.s),this.created=new E.g(null),this.publicData.data$.subscribe({next:s=>{this.created.next(s?.reservation?new o.C(s.reservation):null)}})}getValidTimes(s){let M="";return s instanceof c.EK&&(M=`${s.year}-${(s.month+1)%13}-${s.day}`),this.get("valid_times",{params:{date:M}}).pipe((0,C.k)(v=>v.map(h=>new R.e(h))))}load(s){return this.get(`${s}`).pipe((0,C.k)(M=>new o.C(M.item)))}create(s){return this.post("",s).pipe((0,C.k)(M=>new o.C(M.item)),(0,u.y)(M=>this.created.next(M)),(0,r.a)(M=>{throw this.created.next(null),M}))}resendConfirmation(s){return this.post(`${s}/resend_confirmation_email`,{})}cancel(s){return this.post(`${s}/cancel`,{})}static#e=this.\u0275fac=function(M){return new(M||m)};static#t=this.\u0275prov=e.wxM({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()}}]);