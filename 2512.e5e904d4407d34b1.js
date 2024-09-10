"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2512],{9184:(N,S,o)=>{o.r(S),o.d(S,{NewUserModule:()=>n});var e=o(4496),t=o(3480),h=o(5e3),m=o(6504),s=o(3797),r=o(3273),i=o(9956),c=o(8048),l=o(8212),d=o(3732),u=o(2992),T=o(3616),f=o(8824),R=o(9938),A=o(4388),O=o(8256),U=o(8392),y=o(7936);let a=(()=>{class _{constructor(){this.destroy$=(0,e.uUt)(t.UF),this.notifications=(0,e.uUt)(A.E),this.service=(0,e.uUt)(d.u),this.route=(0,e.uUt)(u.gV),this.router=(0,e.uUt)(u.E5),this.form=new m.WC({fullname:new m.Ku(""),email:new m.Ku("",[m.AQ.required,m.AQ.email]),can_root:new m.Ku(!1)}),this.submitting=(0,e.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}submit(){this.submitted=!0,!this.form.invalid&&(this.submitting.set(!0),this.service.create(this.formVal()).pipe((0,T.a)(this.destroy$),(0,f.U)(()=>this.submitting.set(!1))).subscribe({next:g=>{this.notifications.fireSnackBar("Utente creato."),this.router.navigate([".."],{relativeTo:this.route})},error:g=>{R.y.assignErrorsToForm(this.form,g),this.notifications.error((0,O.mk)(g)||U.a)}}))}cancel(){const g=this.form.dirty||this.form.touched;(!g||g&&confirm("Sei sicuro di voler annullare?"))&&this.router.navigate([".."],{relativeTo:this.route})}errorsFor(g){const p=this.form.get(g);return p&&(p.touched||p.dirty||this.submitted)?p.errors:null}formVal(){return{...this.form.value}}static#e=this.\u0275fac=function(p){return new(p||_)};static#t=this.\u0275cmp=e.In1({type:_,selectors:[["app-new-user"]],standalone:!0,features:[e.M5G([t.UF]),e.UHJ],decls:29,vars:5,consts:()=>{let g,p,v,I,$,P,D;return g="Nuovo utente",p="\n          Attenzione. L'utente che si sta per creare potr\xE0 accedere alla\n          parte amministrativa e apportare modifiche ad alcune parti sensibili\n          dell'applicazione.\n        ",v="Nome e cognome",I="Email",$="Ha diritti di amministratore?",P="Conferma",D="Annulla",[g,p,[3,"formGroup","ngSubmit"],[1,"mb-3"],["tuiTextfieldSize","l","formControlName","fullname",3,"tuiAutoFocus"],v,["tuiTextfield",""],[3,"errors"],["tuiTextfieldSize","l","formControlName","email"],I,["contentAlign","right","formControlName","can_root","size","l"],$,[1,"flex","items-center"],["type","submit","size","l","tuiButton","","appearance","primary",1,"me-2"],P,["type","button","size","l","tuiButton","","appearance","outline",3,"click"],D]},template:function(p,v){1&p&&(e.I0R(0,"h1"),e.aS0(1,0),e.C$Y(),e.I0R(2,"p"),e.aS0(3,1),e.C$Y(),e.I0R(4,"form",2),e.qCj("ngSubmit",function(){return v.submit()}),e.I0R(5,"div",3)(6,"tui-input",4),e.SAx(7),e.aS0(8,5),e.k70(),e.wR5(9,"input",6),e.C$Y(),e.wR5(10,"app-errors",7),e.C$Y(),e.I0R(11,"div",3)(12,"tui-input",8),e.SAx(13),e.aS0(14,9),e.k70(),e.wR5(15,"input",6),e.C$Y(),e.wR5(16,"app-errors",7),e.C$Y(),e.I0R(17,"div",3)(18,"tui-checkbox-block",10),e.SAx(19),e.aS0(20,11),e.k70(),e.C$Y(),e.wR5(21,"app-errors",7),e.C$Y(),e.I0R(22,"div",12)(23,"button",13),e.SAx(24),e.aS0(25,14),e.k70(),e.C$Y(),e.I0R(26,"button",15),e.qCj("click",function(){return v.cancel()}),e.SAx(27),e.aS0(28,16),e.k70(),e.C$Y()()()),2&p&&(e.yG2(4),e.E7m("formGroup",v.form),e.yG2(2),e.E7m("tuiAutoFocus",!0),e.yG2(4),e.E7m("errors",v.e("fullname")),e.yG2(6),e.E7m("errors",v.e("email")),e.yG2(5),e.E7m("errors",v.e("can_root")))},dependencies:[m.sl,m.sz,m.ue,m.u,m.uW,m.Wo,s.CQ,s.Oo,s.cP,y.b,i.g,c.aS,c.rD,l.CI,l.Kw,r.i,r.I,h.m6,h.gJ],encapsulation:2,changeDetection:0})}return _})();var E=o(7552);let n=(()=>{class _{static#e=this.\u0275fac=function(p){return new(p||_)};static#t=this.\u0275mod=e.a4G({type:_});static#o=this.\u0275inj=e.s3X({imports:[u.qQ.forChild([(0,E.VV)(a,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return _})()},9956:(N,S,o)=>{o.d(S,{g:()=>y});var e=o(1368),t=o(4496),h=o(9938),m=o(2528),s=o(7308),r=o(7012),i=o(3972),c=o(5944),l=o(1040);function d(a,E){if(1&a&&(t.SAx(0),t.OEk(1),t.k70()),2&a){const n=E.polymorpheusOutlet;t.yG2(),t.oRS(" ",n," ")}}const u=()=>({});function T(a,E){if(1&a&&(t.I0R(0,"div",1),t.wVc(1,"async"),t.yuY(2,d,2,1,"ng-container",2),t.wVc(3,"async"),t.C$Y()),2&a){const n=t.GaO();t.eAK("t-message-text_light","onDark"===t.kDX(1,6,n.mode$)),t.E7m("@tuiFadeIn",n.animation)("@tuiHeightCollapse",n.animation),t.yG2(2),t.E7m("polymorpheusOutlet",n.error.message||t.kDX(3,8,n.defaultErrorMessage$))("polymorpheusOutletContext",n.error.context||t.q4q(10,u))}}let f=(()=>{class a{constructor(n,_,M){this.animation=n,this.mode$=_,this.defaultErrorMessage$=M,this.error=null,this.visible=!0}set errorSetter(n){this.error=(0,m.gT)(n)?new s.E(n):n}onAnimation(n){this.visible=n}}return a.\u0275fac=function(n){return new(n||a)(t.GI1(c.kp),t.GI1(c.Yx),t.GI1(c.cX))},a.\u0275cmp=t.In1({type:a,selectors:[["tui-error"]],hostBindings:function(n,_){1&n&&t.qCj("animationcancel.self",function(){return _.onAnimation(!1)})("animationstart.self",function(){return _.onAnimation(!0)})},inputs:{errorSetter:[t.Wk5.None,"error","errorSetter"]},features:[t.M5G([i.Ir])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(n,_){1&n&&t.yuY(0,T,4,11,"div",0),2&n&&t.E7m("ngIf",_.error&&_.visible)},dependencies:[e.u_,l.Af,e.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[r.iY,r.K2]},changeDetection:0}),a})(),R=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[e.MD,l.Ux]]}),a})();function A(a,E){1&a&&t.wR5(0,"tui-error",0),2&a&&t.E7m("error",E.$implicit)}function O(a,E){1&a&&t.C_f(0)}function U(a,E){1&a&&t.yuY(0,O,1,0,"ng-container",1),2&a&&t.E7m("ngTemplateOutlet",E.$implicit)}let y=(()=>{class a{constructor(){this._errors=null}get errors(){return this._errors}set errors(n){this._errors=n}allErrors(){return this.errors||null}errorsToTemplates(){return h.y.formatErrors(this.errors||null).filter(n=>n&&n instanceof t.Yw2)}errorsToStr(){return h.y.formatErrors(this.errors||null).filter(n=>n&&"string"==typeof n)}static#e=this.\u0275fac=function(_){return new(_||a)};static#t=this.\u0275cmp=t.In1({type:a,selectors:[["app-errors"]],inputs:{errors:"errors"},standalone:!0,features:[t.UHJ],decls:4,vars:0,consts:[[3,"error"],[4,"ngTemplateOutlet"]],template:function(_,M){1&_&&(t.c53(0,A,1,1,"tui-error",0,t.oxv),t.c53(2,U,1,1,"ng-container",null,t.oxv)),2&_&&(t.oho(M.errorsToStr()),t.yG2(2),t.oho(M.errorsToTemplates()))},dependencies:[e.MD,e.XV,R,f]})}return a})()},9938:(N,S,o)=>{o.d(S,{y:()=>m});var e=o(6504);const t={required:"Questo campo non pu\xf2 essere vuoto!",email:"Questa email non \xe8 valida!",numbersOnly:"Solo numeri ammessi!",numberOnly:"Solo numeri ammessi!",numerical:"Solo numeri ammessi!",invalid_http_url:"Collegamento http non valido",minlength:s=>`Testo troppo corto: Lunghezza minima: ${s.requiredLength}, lunghezza attuale: ${s.actualLength}`,InvalidFormat:s=>`"${s.value}" non \xe8 un formato valido. Esempio valido: "${s.validExample}"`,pattern:s=>`"${s.actualValue}" non \xe8 un formato valido. Il formato deve rispettare la seguente espressione regolare (RegExp): "${s.requiredPattern}"`,max:s=>`Il valore inserito \xe8 troppo grande! Valore massimo: ${s.max}, valore attuale: ${s.actual}`,min:s=>`Il valore inserito \xe8 troppo piccolo! Valore minimo: ${s.min}, valore attuale: ${s.actual}`,maxlength:s=>`Il valore inserito \xe8 troppo lungo! Lunghezza massima: ${s.requiredLength}, Lunghezza attuale: ${s.actualLength}`,phoneIT:"Questo non sembra essere un numero di telefono italiano valido. Esempio: +39 123 456 7890",inclusion:s=>"Il valore inserito non \xe8 valido. "+(Array.isArray(s)?`I valori ammessi sono: ${s.join(", ")}.`:""),arrayMinLength:s=>`Devi inserire almeno ${s.requiredLength} elementi.`,passwordConfirmation:"Le password non coincidono!"},h={assignToFormUnlessControl:!0};class m{static formatErrors(r,i){return null==r||null==r?[]:new m(r,i).formatErrors()}static assignErrorsToForm(r,i,c={}){const l=i.error?.details;if(!l||!Array.isArray(l))return"object"==typeof l&&Object.keys(l).length>0?this.assignErrorsToFormFromJson(r,l,c):void console.warn("invalid errors provided to assignErrorsToForm",l);this.assignErrorsToFormFromArray(r,l,c)}static assignErrorsToFormFromJson(r,i,c={}){const l={...h,...c};Object.keys(i).forEach(d=>{const u=i[d];u&&Array.isArray(u)?u.forEach(T=>{const f=r.controls[d];f?f.setErrors({[T.attribute]:T.message}):l.assignToFormUnlessControl&&r.setErrors({[T.attribute]:T.message})}):console.warn("assignErrorsToFormFromJson expected an array of ActiveError, but got:",u)})}static assignErrorsToFormFromArray(r,i,c={}){const l={...h,...c};i.forEach(d=>{const u=r instanceof e.WC?r.controls[d.attribute]:r;u?u.setErrors({[d.attribute]:d.message}):l.assignToFormUnlessControl&&r.setErrors({[d.attribute]:d.message})})}constructor(r,i=t){this.defaultMessages=t,this.messages={},this.enableLogging=!1,this.errors=r,i?this.mergeMessages(i):this.assignDefaults()}assignDefaults(){this.messages={},Object.keys(this.defaultMessages).forEach(r=>{this.messages[r]=this.defaultMessages[r]})}mergeMessages(r){[...Object.keys(this.defaultMessages),...Object.keys(r)].forEach(c=>{this.messages[c]=r[c]?r[c]:this.defaultMessages[c]})}formatErrors(){return[...this.errorMsgFromControl()]}warn(...r){this.enableLogging&&console.warn(...r)}errorMsgFromControl(){if(null==this.errors||null==this.errors)return[];var r=[];return Object.keys(this.errors).filter(i=>{if("string"==typeof this.errors[i]&&this.errors[i].length>0)return r.push(this.errors[i]);if(this.messages.hasOwnProperty(i)&&this.messages[i]&&null!=this.messages[i]){const d=this.messages[i];switch(typeof d){case"string":default:r.push(d);break;case"function":r.push(d(this.errors[i]))}}else if(this.warn(`ReactiveFormsErrors missing error message of "${i}". Parser error with your custom logic.`),[!0,!1].includes(this.errors[i])){var l={};l[i]=this.errors[i],"string"!=typeof l&&(l=JSON.stringify(l)),r.push(l)}else r.push(this.errors[i])}),r}}},8392:(N,S,o)=>{o.d(S,{a:()=>e});const e="Qualcosa \xE8 andato storto."},832:(N,S,o)=>{o.d(S,{I:()=>m,w:()=>h});var e=o(4496),t=o(3480);let h=(()=>{class s{constructor(i){this.tuiFocusVisibleChange=i}}return s.\u0275fac=function(i){return new(i||s)(e.GI1(t.MF))},s.\u0275dir=e.Sc5({type:s,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[e.M5G([t.UF,t.MF])]}),s})(),m=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.a4G({type:s}),s.\u0275inj=e.s3X({}),s})()},1096:(N,S,o)=>{o.d(S,{O:()=>d,h:()=>l});var e=o(4496),t=o(900),h=o(4164),m=o(3412),s=o(4704),r=o(5568),i=o(4e3),c=o(2644);let l=(()=>{class u{constructor({nativeElement:f},R){this.tuiFocusedChange=(0,m.U)((0,t.Ax)(f,"focusin"),(0,t.Ax)(f,"focusout")).pipe((0,s.k)(()=>(0,h.ER)(f)),(0,r.W)(!1),(0,i.a)(),(0,c.s)(1),(0,t.OA)(R))}}return u.\u0275fac=function(f){return new(f||u)(e.GI1(e.GMv),e.GI1(e.WW2))},u.\u0275dir=e.Sc5({type:u,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),u})(),d=(()=>{class u{}return u.\u0275fac=function(f){return new(f||u)},u.\u0275mod=e.a4G({type:u}),u.\u0275inj=e.s3X({}),u})()}}]);