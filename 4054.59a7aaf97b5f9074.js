"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4054],{4054:(T,M,e)=>{e.r(M),e.d(M,{LoginComponent:()=>j});var t=e(4496),i=e(1368),v=e(2100),E=e(3797),c=e(7568),o=e(8212),a=e(1512),u=e(7692),r=e(6504),g=e(3480),f=e(5e3),C=e(9956),p=e(9212),x=e(2300),I=e(3616),y=e(4964),L=e(4872),A=e(3468),s=e(4616),_=e(6376),n=e(3724);function h(m,b){if(1&m){const l=t.KQA();t.I0R(0,"tui-island",0)(1,"h3",1),t.OEk(2),t.C$Y(),t.I0R(3,"p",2)(4,"button",3),t.qCj("click",function(){t.usT(l);const O=t.GaO();return t.CGJ(O.logout())}),t.OEk(5,"Logout"),t.C$Y()(),t.I0R(6,"a",4),t.OEk(7," Prosegui "),t.C$Y()()}if(2&m){const l=t.GaO();let d;t.E7m("size","l"),t.yG2(2),t.oRS("Bentornato ",(null==(d=l.user())?null:d.fullname)||(null==(d=l.user())?null:d.email),"."),t.yG2(4),t._6D("routerLink",l.redirectUrl)}}let P=(()=>{class m{constructor(){this.auth=(0,t.uUt)(y.o),this.profile=(0,t.uUt)(s.x),this.redirectUrl="/admin",this.user=this.profile.cu}logout(){this.auth.logout().subscribe((0,n.I)())}static#t=this.\u0275fac=function(d){return new(d||m)};static#e=this.\u0275cmp=t.In1({type:m,selectors:[["app-already-logged-in"]],inputs:{redirectUrl:"redirectUrl"},standalone:!0,features:[t.UHJ],decls:1,vars:1,consts:[[3,"size"],[1,"tui-island__title"],[1,"tui-island__paragraph"],["tuiLink","",3,"click"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-island__footer-button",3,"routerLink"]],template:function(d,O){1&d&&t.yuY(0,h,8,3,"tui-island",0),2&d&&t.C0Y(0,O.user()?0:-1)},dependencies:[i.MD,_.k,_.C,a.w,a.C,o.CI,o.Kw,v.qQ,v.ER]})}return m})();var R=e(7936);function G(m,b){if(1&m&&t.wR5(0,"app-already-logged-in",2),2&m){const l=t.GaO();t.E7m("redirectUrl",l.redirectUrl)}}function k(m,b){if(1&m&&t.wR5(0,"app-errors",10),2&m){const l=t.GaO(2);t.E7m("errors",l.e("email"))}}function U(m,b){if(1&m&&t.wR5(0,"app-errors",10),2&m){const l=t.GaO(2);t.E7m("errors",l.e("password"))}}function $(m,b){if(1&m&&t.wR5(0,"app-errors",10),2&m){const l=t.GaO(2);t.E7m("errors",l.form.errors)}}const w=m=>({email:m});function F(m,b){if(1&m){const l=t.KQA();t.I0R(0,"form",3),t.qCj("ngSubmit",function(){t.usT(l);const O=t.GaO();return t.CGJ(O.submit())}),t.I0R(1,"h2",4),t.OEk(2,"Benvenuto."),t.C$Y(),t.I0R(3,"span",5),t.OEk(4,"Accedi per proseguire"),t.C$Y(),t.I0R(5,"div",6)(6,"tui-input",7),t.SAx(7),t.aS0(8,8),t.k70(),t.wR5(9,"input",9),t.C$Y(),t.yuY(10,k,1,1,"app-errors",10),t.C$Y(),t.I0R(11,"div",11)(12,"tui-input-password",12),t.SAx(13),t.aS0(14,13),t.k70(),t.wR5(15,"input",14),t.C$Y(),t.yuY(16,U,1,1,"app-errors",10)(17,$,1,1,"app-errors",10),t.C$Y(),t.I0R(18,"a",15),t.OEk(19,"Password dimenticata?"),t.C$Y(),t.I0R(20,"button",16),t.SAx(21),t.aS0(22,17),t.k70(),t.C$Y()()}if(2&m){const l=t.GaO();t.E7m("formGroup",l.form),t.yG2(6),t.E7m("tuiAutoFocus",!0),t.yG2(4),t.C0Y(10,l.se("email")?10:-1),t.yG2(6),t.C0Y(16,l.se("password")?16:-1),t.yG2(),t.C0Y(17,l.seForm()?17:-1),t.yG2(),t.E7m("routerLink","reset-password")("queryParams",t.S45(9,w,l.form.value.email)),t.yG2(2),t.E7m("showLoader",l.submitting)("disabled",l.submitting)}}let j=(()=>{class m{constructor(){this.form=new r.WC({email:new r.Ku("",[r.AQ.required,r.AQ.email]),password:new r.Ku("",r.AQ.required)}),this.destroy$=(0,t.uUt)(g.UF),this.type$=this.form.valueChanges.pipe((0,L.ay)(),(0,p.y)(()=>this.typing=!0),(0,x.o)(1e3),(0,p.y)(()=>this.typing=!1)).subscribe(),this.route=(0,t.uUt)(v.gV),this.router=(0,t.uUt)(v.E5),this.auth=(0,t.uUt)(y.o),this.configs=(0,t.uUt)(A.m),this.profile=(0,t.uUt)(s.x),this.cu=this.profile.cu,this.submitted=!1,this.typing=!1,this.defaultRedirectUrl="/admin",this.redirectUrl=this.defaultRedirectUrl,this.se=this.shouldShowErrors,this.seForm=this.shouldShowErrorsForm,this.e=this.errorsFor}get submitting(){return!1===this.submitSubscription?.closed}ngOnInit(){this.auth.refreshTokenIfNotCalled().subscribe((0,n.I)());const l=this.route.snapshot.queryParams;l.email&&this.form.get("email")?.setValue(l.email),l.password&&(0,t.sPQ)()&&this.form.get("password")?.setValue(l.password),l.url&&(this.redirectUrl=l.url.replace(window.location.origin,""))}submit(){this.submitted=!0,!this.form.invalid&&(this.submitSubscription=this.auth.login(this.form.value).pipe((0,I.a)(this.destroy$)).subscribe(l=>{this.router.navigateByUrl(this.redirectUrl||this.defaultRedirectUrl)},l=>{const d=l.error;if(d.details){const O=Object.keys(d.details).reduce((D,S)=>(D[S]=d.details[S].join(", "),D),{});this.form.setErrors(O)}else d.message&&this.form.setErrors({message:d.message})}))}errorsFor(l){const d=this.control(l);return null!=d?d.errors:null}shouldShowErrors(l){if(this.typing)return!1;const d=this.control(l);return null!=d&&(d.dirty||this.submitted)&&d.invalid}shouldShowErrorsForm(){return!this.typing&&this.form.invalid&&(this.form.dirty||this.submitted)}control(l){return this.form.get(l)}static#t=this.\u0275fac=function(d){return new(d||m)};static#e=this.\u0275cmp=t.In1({type:m,selectors:[["app-login"]],standalone:!0,features:[t.M5G([g.UF]),t.UHJ],decls:4,vars:1,consts:()=>{let l,d,O;return l=$localize`Email`,d=$localize`Password`,O=$localize`Accedi`,[[1,"flex","justify-center","h-full"],[1,"flex","flex-col","justify-center","min-w-[300px]"],[3,"redirectUrl"],[1,"flex","flex-col",3,"formGroup","ngSubmit"],[1,"mb-1"],[1,"text-slate-400","mb-3"],[1,"flex","flex-col","mb-2"],["formControlName","email",1,"min-width",3,"tuiAutoFocus"],l,["autocomplete","email","tuiTextfield",""],[3,"errors"],[1,"flex","flex-col","mb-3"],["formControlName","password",1,"min-width"],d,["autocomplete","current-password","tuiTextfield",""],["tuiLink","",1,"mb-1",3,"routerLink","queryParams"],["type","submit","tuiButton","","size","m",3,"showLoader","disabled"],O]},template:function(d,O){1&d&&(t.I0R(0,"div",0)(1,"div",1),t.yuY(2,G,1,1,"app-already-logged-in",2)(3,F,23,11),t.C$Y()()),2&d&&(t.yG2(2),t.C0Y(2,O.cu()?2:3))},dependencies:[i.MD,v.qQ,v.ER,E.CQ,E.Oo,E.cP,R.b,o.CI,o.Kw,a.w,a.C,r.sl,r.sz,r.ue,r.u,r.uW,r.Wo,c.eW,c.Mt,c.Ki,f.m6,f.gJ,C.g,u.Sk,P],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})}return m})()},9956:(T,M,e)=>{e.d(M,{g:()=>A});var t=e(1368),i=e(4496),v=e(9938),E=e(2528),c=e(7308),o=e(7012),a=e(3972),u=e(5944),r=e(1040);function g(s,_){if(1&s&&(i.SAx(0),i.OEk(1),i.k70()),2&s){const n=_.polymorpheusOutlet;i.yG2(),i.oRS(" ",n," ")}}const f=()=>({});function C(s,_){if(1&s&&(i.I0R(0,"div",1),i.wVc(1,"async"),i.yuY(2,g,2,1,"ng-container",2),i.wVc(3,"async"),i.C$Y()),2&s){const n=i.GaO();i.eAK("t-message-text_light","onDark"===i.kDX(1,6,n.mode$)),i.E7m("@tuiFadeIn",n.animation)("@tuiHeightCollapse",n.animation),i.yG2(2),i.E7m("polymorpheusOutlet",n.error.message||i.kDX(3,8,n.defaultErrorMessage$))("polymorpheusOutletContext",n.error.context||i.q4q(10,f))}}let p=(()=>{class s{constructor(n,h,P){this.animation=n,this.mode$=h,this.defaultErrorMessage$=P,this.error=null,this.visible=!0}set errorSetter(n){this.error=(0,E.gT)(n)?new c.E(n):n}onAnimation(n){this.visible=n}}return s.\u0275fac=function(n){return new(n||s)(i.GI1(u.kp),i.GI1(u.Yx),i.GI1(u.cX))},s.\u0275cmp=i.In1({type:s,selectors:[["tui-error"]],hostBindings:function(n,h){1&n&&i.qCj("animationcancel.self",function(){return h.onAnimation(!1)})("animationstart.self",function(){return h.onAnimation(!0)})},inputs:{errorSetter:[i.Wk5.None,"error","errorSetter"]},features:[i.M5G([a.Ir])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(n,h){1&n&&i.yuY(0,C,4,11,"div",0),2&n&&i.E7m("ngIf",h.error&&h.visible)},dependencies:[t.u_,r.Af,t.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[o.iY,o.K2]},changeDetection:0}),s})(),x=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=i.a4G({type:s}),s.\u0275inj=i.s3X({imports:[[t.MD,r.Ux]]}),s})();function I(s,_){1&s&&i.wR5(0,"tui-error",0),2&s&&i.E7m("error",_.$implicit)}function y(s,_){1&s&&i.C_f(0)}function L(s,_){1&s&&i.yuY(0,y,1,0,"ng-container",1),2&s&&i.E7m("ngTemplateOutlet",_.$implicit)}let A=(()=>{class s{constructor(){this._errors=null}get errors(){return this._errors}set errors(n){this._errors=n}allErrors(){return this.errors||null}errorsToTemplates(){return v.y.formatErrors(this.errors||null).filter(n=>n&&n instanceof i.Yw2)}errorsToStr(){return v.y.formatErrors(this.errors||null).filter(n=>n&&"string"==typeof n)}static#t=this.\u0275fac=function(h){return new(h||s)};static#e=this.\u0275cmp=i.In1({type:s,selectors:[["app-errors"]],inputs:{errors:"errors"},standalone:!0,features:[i.UHJ],decls:4,vars:0,consts:[[3,"error"],[4,"ngTemplateOutlet"]],template:function(h,P){1&h&&(i.c53(0,I,1,1,"tui-error",0,i.oxv),i.c53(2,L,1,1,"ng-container",null,i.oxv)),2&h&&(i.oho(P.errorsToStr()),i.yG2(2),i.oho(P.errorsToTemplates()))},dependencies:[t.MD,t.XV,x,p]})}return s})()},9938:(T,M,e)=>{e.d(M,{y:()=>E});var t=e(6504);const i={required:"Questo campo non pu\xf2 essere vuoto!",email:"Questa email non \xe8 valida!",numbersOnly:"Solo numeri ammessi!",numberOnly:"Solo numeri ammessi!",numerical:"Solo numeri ammessi!",invalid_http_url:"Collegamento http non valido",minlength:c=>`Testo troppo corto: Lunghezza minima: ${c.requiredLength}, lunghezza attuale: ${c.actualLength}`,InvalidFormat:c=>`"${c.value}" non \xe8 un formato valido. Esempio valido: "${c.validExample}"`,pattern:c=>`"${c.actualValue}" non \xe8 un formato valido. Il formato deve rispettare la seguente espressione regolare (RegExp): "${c.requiredPattern}"`,max:c=>`Il valore inserito \xe8 troppo grande! Valore massimo: ${c.max}, valore attuale: ${c.actual}`,min:c=>`Il valore inserito \xe8 troppo piccolo! Valore minimo: ${c.min}, valore attuale: ${c.actual}`,maxlength:c=>`Il valore inserito \xe8 troppo lungo! Lunghezza massima: ${c.requiredLength}, Lunghezza attuale: ${c.actualLength}`,phoneIT:"Questo non sembra essere un numero di telefono italiano valido. Esempio: +39 123 456 7890",inclusion:c=>"Il valore inserito non \xe8 valido. "+(Array.isArray(c)?`I valori ammessi sono: ${c.join(", ")}.`:""),arrayMinLength:c=>`Devi inserire almeno ${c.requiredLength} elementi.`,passwordConfirmation:"Le password non coincidono!"},v={assignToFormUnlessControl:!0};class E{static formatErrors(o,a){return null==o||null==o?[]:new E(o,a).formatErrors()}static assignErrorsToForm(o,a,u={}){const r=a.error?.details;if(!r||!Array.isArray(r))return"object"==typeof r&&Object.keys(r).length>0?this.assignErrorsToFormFromJson(o,r,u):void console.warn("invalid errors provided to assignErrorsToForm",r);this.assignErrorsToFormFromArray(o,r,u)}static assignErrorsToFormFromJson(o,a,u={}){const r={...v,...u};Object.keys(a).forEach(g=>{const f=a[g];f&&Array.isArray(f)?f.forEach(C=>{const p=o.controls[g];p?p.setErrors({[C.attribute]:C.message}):r.assignToFormUnlessControl&&o.setErrors({[C.attribute]:C.message})}):console.warn("assignErrorsToFormFromJson expected an array of ActiveError, but got:",f)})}static assignErrorsToFormFromArray(o,a,u={}){const r={...v,...u};a.forEach(g=>{const f=o instanceof t.WC?o.controls[g.attribute]:o;f?f.setErrors({[g.attribute]:g.message}):r.assignToFormUnlessControl&&o.setErrors({[g.attribute]:g.message})})}constructor(o,a=i){this.defaultMessages=i,this.messages={},this.enableLogging=!1,this.errors=o,a?this.mergeMessages(a):this.assignDefaults()}assignDefaults(){this.messages={},Object.keys(this.defaultMessages).forEach(o=>{this.messages[o]=this.defaultMessages[o]})}mergeMessages(o){[...Object.keys(this.defaultMessages),...Object.keys(o)].forEach(u=>{this.messages[u]=o[u]?o[u]:this.defaultMessages[u]})}formatErrors(){return[...this.errorMsgFromControl()]}warn(...o){this.enableLogging&&console.warn(...o)}errorMsgFromControl(){if(null==this.errors||null==this.errors)return[];var o=[];return Object.keys(this.errors).filter(a=>{if("string"==typeof this.errors[a]&&this.errors[a].length>0)return o.push(this.errors[a]);if(this.messages.hasOwnProperty(a)&&this.messages[a]&&null!=this.messages[a]){const g=this.messages[a];switch(typeof g){case"string":default:o.push(g);break;case"function":o.push(g(this.errors[a]))}}else if(this.warn(`ReactiveFormsErrors missing error message of "${a}". Parser error with your custom logic.`),[!0,!1].includes(this.errors[a])){var r={};r[a]=this.errors[a],"string"!=typeof r&&(r=JSON.stringify(r)),o.push(r)}else o.push(this.errors[a])}),o}}},1512:(T,M,e)=>{e.d(M,{C:()=>L,w:()=>A});var t=e(4496),i=e(900),v=e(4392),E=e(4164),c=e(3480),o=e(4680),a=e(3972),u=e(5944),r=e(3412),g=e(4704),f=e(3656),C=e(1368);const p=["tuiLink",""];function x(s,_){if(1&s&&t.wR5(0,"tui-svg",3),2&s){const n=t.GaO();t.E7m("src",n.icon||"")}}function I(s,_){if(1&s&&t.wR5(0,"tui-svg",4),2&s){const n=t.GaO();t.E7m("src",n.icon||"")}}const y=["*"];let L=(()=>{class s{constructor(n,h,P){this.el=n,this.mode$=h,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,r.U)((0,i.Ax)(this.el.nativeElement,"focusin").pipe((0,g.k)(v.Ml)),(0,i.Ax)(this.el.nativeElement,"focusout").pipe((0,g.k)(v.so))),P.subscribe(R=>{this.focusVisible=R})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,E.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return s.\u0275fac=function(n){return new(n||s)(t.GI1(t.GMv),t.GI1(u.Yx),t.GI1(c.MF))},s.\u0275cmp=t.In1({type:s,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(n,h){1&n&&t.qCj("$.data-mode.attr",function(){return h.mode$}),2&n&&(t.e48("data-host-mode",h.mode),t.eAK("_pseudo",h.pseudo)("_icon-rotated",h.iconRotated)("_focus-visible",h.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,o.NK)(s),c.MF,c.UF,a.Ir])],attrs:p,ngContentSelectors:y,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(n,h){1&n&&(t.kPM(),t.yuY(0,x,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,I,1,1,"tui-svg",2)),2&n&&(t.E7m("ngIf",h.iconAlignLeft),t.yG2(3),t.E7m("ngIf",h.iconAlignRight))},dependencies:[f.Wu,C.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),s})(),A=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({imports:[[C.MD,f.Yt]]}),s})()},6376:(T,M,e)=>{e.d(M,{C:()=>E,k:()=>c});var t=e(4496),i=e(1368);const v=["*"];let E=(()=>{class o{constructor(){this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1}get sizeS(){return"s"===this.size}get sizeM(){return"m"===this.size}get sizeL(){return"l"===this.size}get textAlignLeft(){return"left"===this.textAlign}get textAlignCenter(){return"center"===this.textAlign}get textAlignRight(){return"right"===this.textAlign}}return o.\u0275fac=function(u){return new(u||o)},o.\u0275cmp=t.In1({type:o,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(u,r){2&u&&t.eAK("tui-island_hoverable",r.hoverable)("tui-island_transparent",r.transparent)("tui-island_size_s",r.sizeS)("tui-island_size_m",r.sizeM)("tui-island_size_l",r.sizeL)("tui-island_text-align_left",r.textAlignLeft)("tui-island_text-align_center",r.textAlignCenter)("tui-island_text-align_right",r.textAlignRight)},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:v,decls:1,vars:0,template:function(u,r){1&u&&(t.kPM(),t._Xx(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),o})(),c=(()=>{class o{}return o.\u0275fac=function(u){return new(u||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[[i.MD]]}),o})()},4872:(T,M,e)=>{e.d(M,{ay:()=>E});var t=e(4496),i=e(3252),v=e(3616);function E(a){a||((0,t.yAg)(E),a=(0,t.uUt)(t.eM9));const u=new i._(r=>a.onDestroy(r.next.bind(r)));return r=>r.pipe((0,v.a)(u))}}}]);