"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4054],{4054:(A,O,e)=>{e.r(O),e.d(O,{LoginComponent:()=>k});var t=e(4496),i=e(1368),v=e(2992),E=e(3797),_=e(7568),o=e(8212),s=e(1512),a=e(7692),r=e(6504),m=e(3480),f=e(5e3),M=e(9956),C=e(9212),D=e(2300),y=e(3616),L=e(4964),x=e(4872),R=e(3468),u=e(4616),c=e(6376),n=e(3724);function l(p,U){if(1&p){const d=t.KQA();t.I0R(0,"tui-island",0)(1,"h3",1),t.OEk(2),t.C$Y(),t.I0R(3,"p",2)(4,"button",3),t.qCj("click",function(){t.usT(d);const I=t.GaO();return t.CGJ(I.logout())}),t.OEk(5,"Logout"),t.C$Y()(),t.I0R(6,"a",4),t.OEk(7," Prosegui "),t.C$Y()()}if(2&p){const d=t.GaO();let h;t.E7m("size","l"),t.yG2(2),t.oRS("Bentornato ",(null==(h=d.user())?null:h.fullname)||(null==(h=d.user())?null:h.email),"."),t.yG2(4),t._6D("routerLink",d.redirectUrl)}}let g=(()=>{class p{constructor(){this.auth=(0,t.uUt)(L.o),this.profile=(0,t.uUt)(u.x),this.redirectUrl="/admin",this.user=this.profile.cu}logout(){this.auth.logout().subscribe((0,n.I)())}static#t=this.\u0275fac=function(h){return new(h||p)};static#e=this.\u0275cmp=t.In1({type:p,selectors:[["app-already-logged-in"]],inputs:{redirectUrl:"redirectUrl"},standalone:!0,features:[t.UHJ],decls:1,vars:1,consts:[[3,"size"],[1,"tui-island__title"],[1,"tui-island__paragraph"],["tuiLink","",3,"click"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-island__footer-button",3,"routerLink"]],template:function(h,I){1&h&&t.yuY(0,l,8,3,"tui-island",0),2&h&&t.C0Y(0,I.user()?0:-1)},dependencies:[i.MD,c.k,c.C,s.w,s.C,o.CI,o.Kw,v.qQ,v.ER]})}return p})();var P=e(4476),T=e(7936);function G(p,U){if(1&p&&t.wR5(0,"app-already-logged-in",2),2&p){const d=t.GaO();t.E7m("redirectUrl",d.redirectUrl)}}function S(p,U){if(1&p&&t.wR5(0,"app-errors",10),2&p){const d=t.GaO(2);t.E7m("errors",d.e("username"))}}function F(p,U){if(1&p&&t.wR5(0,"app-errors",10),2&p){const d=t.GaO(2);t.E7m("errors",d.e("password"))}}function z(p,U){if(1&p&&t.wR5(0,"app-errors",10),2&p){const d=t.GaO(2);t.E7m("errors",d.form.errors)}}const B=p=>({email:p});function K(p,U){if(1&p){const d=t.KQA();t.I0R(0,"form",3),t.qCj("ngSubmit",function(){t.usT(d);const I=t.GaO();return t.CGJ(I.submit())}),t.I0R(1,"h2",4),t.OEk(2,"Benvenuto."),t.C$Y(),t.I0R(3,"span",5),t.OEk(4,"Accedi per proseguire"),t.C$Y(),t.I0R(5,"div",6)(6,"tui-input",7),t.SAx(7),t.aS0(8,8),t.k70(),t.wR5(9,"input",9),t.C$Y(),t.yuY(10,S,1,1,"app-errors",10),t.C$Y(),t.I0R(11,"div",11)(12,"tui-input-password",12),t.SAx(13),t.aS0(14,13),t.k70(),t.wR5(15,"input",14),t.C$Y(),t.yuY(16,F,1,1,"app-errors",10)(17,z,1,1,"app-errors",10),t.C$Y(),t.I0R(18,"a",15),t.OEk(19,"Password dimenticata?"),t.C$Y(),t.I0R(20,"button",16),t.SAx(21),t.aS0(22,17),t.k70(),t.C$Y()()}if(2&p){const d=t.GaO();t.E7m("formGroup",d.form),t.yG2(6),t.E7m("tuiAutoFocus",!0),t.yG2(4),t.C0Y(10,d.se("username")?10:-1),t.yG2(6),t.C0Y(16,d.se("password")?16:-1),t.yG2(),t.C0Y(17,d.seForm()?17:-1),t.yG2(),t.E7m("routerLink","reset-password")("queryParams",t.S45(9,B,d.username.value)),t.yG2(2),t.E7m("showLoader",d.submitting)("disabled",d.submitting)}}let k=(()=>{class p{constructor(){this.username=new r.Ku(null,[r.AQ.required]),this.password=new r.Ku(null,[r.AQ.required]),this.form=new r.WC({username:this.username,password:this.password}),this.destroy$=(0,t.uUt)(m.UF),this.type$=this.form.valueChanges.pipe((0,x.ay)(),(0,C.y)(()=>this.typing=!0),(0,D.o)(1e3),(0,C.y)(()=>this.typing=!1)).subscribe(),this.route=(0,t.uUt)(v.gV),this.router=(0,t.uUt)(v.E5),this.auth=(0,t.uUt)(L.o),this.configs=(0,t.uUt)(R.m),this.profile=(0,t.uUt)(u.x),this._=(0,t.uUt)(P.OY).setTitle("Login | La Porta D'Acqua"),this.cu=this.profile.cu,this.submitted=!1,this.typing=!1,this.defaultRedirectUrl="/admin",this.redirectUrl=this.defaultRedirectUrl,this.se=this.shouldShowErrors,this.seForm=this.shouldShowErrorsForm,this.e=this.errorsFor}get submitting(){return!1===this.submitSubscription?.closed}ngOnInit(){this.auth.refreshTokenIfNotCalled().subscribe((0,n.I)());const d=this.route.snapshot.queryParams;d.email&&this.username.setValue(d.email),d.username&&this.username.setValue(d.username),d.password&&(0,t.sPQ)()&&this.password.setValue(d.password),d.url&&(this.redirectUrl=d.url.replace(window.location.origin,"").replace("#",""))}submit(){this.submitted=!0,!this.form.invalid&&(this.submitSubscription=this.auth.login(this.form.value).pipe((0,y.a)(this.destroy$)).subscribe(d=>{this.router.navigateByUrl(this.redirectUrl||this.defaultRedirectUrl)},d=>{const h=d.error;if(h.details){const I=Object.keys(h.details).reduce((b,$)=>(b[$]=h.details[$].join(", "),b),{});this.form.setErrors(I)}else h.message&&this.form.setErrors({message:h.message})}))}errorsFor(d){const h=this.control(d);return null!=h?h.errors:null}shouldShowErrors(d){if(this.typing)return!1;const h=this.control(d);return null!=h&&(h.dirty||this.submitted)&&h.invalid}shouldShowErrorsForm(){return!this.typing&&this.form.invalid&&(this.form.dirty||this.submitted)}control(d){return this.form.get(d)}static#t=this.\u0275fac=function(h){return new(h||p)};static#e=this.\u0275cmp=t.In1({type:p,selectors:[["app-login"]],standalone:!0,features:[t.M5G([m.UF]),t.UHJ],decls:4,vars:1,consts:()=>{let d,h,I;return d="Username or email",h="Password",I="Log in",[[1,"flex","justify-center","h-full"],[1,"flex","flex-col","justify-center","min-w-[300px]"],[3,"redirectUrl"],[1,"flex","flex-col",3,"formGroup","ngSubmit"],[1,"mb-1"],[1,"text-slate-400","mb-3"],[1,"flex","flex-col","mb-2"],["formControlName","username",1,"min-width",3,"tuiAutoFocus"],d,["autocomplete","username","tuiTextfield",""],[3,"errors"],[1,"flex","flex-col","mb-3"],["formControlName","password",1,"min-width"],h,["autocomplete","current-password","tuiTextfield",""],["tuiLink","",1,"mb-1",3,"routerLink","queryParams"],["type","submit","tuiButton","","size","m",3,"showLoader","disabled"],I]},template:function(h,I){1&h&&(t.I0R(0,"div",0)(1,"div",1),t.yuY(2,G,1,1,"app-already-logged-in",2)(3,K,23,11),t.C$Y()()),2&h&&(t.yG2(2),t.C0Y(2,I.cu()?2:3))},dependencies:[i.MD,v.qQ,v.ER,E.CQ,E.Oo,E.cP,T.b,o.CI,o.Kw,s.w,s.C,r.sl,r.sz,r.ue,r.u,r.uW,r.Wo,_.eW,_.Mt,_.Ki,f.m6,f.gJ,M.g,a.Sk,g],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})}return p})()},9956:(A,O,e)=>{e.d(O,{g:()=>R});var t=e(1368),i=e(4496),v=e(9938),E=e(2528),_=e(7308),o=e(7012),s=e(3972),a=e(5944),r=e(1040);function m(u,c){if(1&u&&(i.SAx(0),i.OEk(1),i.k70()),2&u){const n=c.polymorpheusOutlet;i.yG2(),i.oRS(" ",n," ")}}const f=()=>({});function M(u,c){if(1&u&&(i.I0R(0,"div",1),i.wVc(1,"async"),i.yuY(2,m,2,1,"ng-container",2),i.wVc(3,"async"),i.C$Y()),2&u){const n=i.GaO();i.eAK("t-message-text_light","onDark"===i.kDX(1,6,n.mode$)),i.E7m("@tuiFadeIn",n.animation)("@tuiHeightCollapse",n.animation),i.yG2(2),i.E7m("polymorpheusOutlet",n.error.message||i.kDX(3,8,n.defaultErrorMessage$))("polymorpheusOutletContext",n.error.context||i.q4q(10,f))}}let C=(()=>{class u{constructor(n,l,g){this.animation=n,this.mode$=l,this.defaultErrorMessage$=g,this.error=null,this.visible=!0}set errorSetter(n){this.error=(0,E.gT)(n)?new _.E(n):n}onAnimation(n){this.visible=n}}return u.\u0275fac=function(n){return new(n||u)(i.GI1(a.kp),i.GI1(a.Yx),i.GI1(a.cX))},u.\u0275cmp=i.In1({type:u,selectors:[["tui-error"]],hostBindings:function(n,l){1&n&&i.qCj("animationcancel.self",function(){return l.onAnimation(!1)})("animationstart.self",function(){return l.onAnimation(!0)})},inputs:{errorSetter:[i.Wk5.None,"error","errorSetter"]},features:[i.M5G([s.Ir])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(n,l){1&n&&i.yuY(0,M,4,11,"div",0),2&n&&i.E7m("ngIf",l.error&&l.visible)},dependencies:[t.u_,r.Af,t.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[o.iY,o.K2]},changeDetection:0}),u})(),D=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=i.a4G({type:u}),u.\u0275inj=i.s3X({imports:[[t.MD,r.Ux]]}),u})();function y(u,c){1&u&&i.wR5(0,"tui-error",0),2&u&&i.E7m("error",c.$implicit)}function L(u,c){1&u&&i.C_f(0)}function x(u,c){1&u&&i.yuY(0,L,1,0,"ng-container",1),2&u&&i.E7m("ngTemplateOutlet",c.$implicit)}let R=(()=>{class u{constructor(){this._errors=null}get errors(){return this._errors}set errors(n){this._errors=n}allErrors(){return this.errors||null}errorsToTemplates(){return v.y.formatErrors(this.errors||null).filter(n=>n&&n instanceof i.Yw2)}errorsToStr(){return v.y.formatErrors(this.errors||null).filter(n=>n&&"string"==typeof n)}static#t=this.\u0275fac=function(l){return new(l||u)};static#e=this.\u0275cmp=i.In1({type:u,selectors:[["app-errors"]],inputs:{errors:"errors"},standalone:!0,features:[i.UHJ],decls:4,vars:0,consts:[[3,"error"],[4,"ngTemplateOutlet"]],template:function(l,g){1&l&&(i.c53(0,y,1,1,"tui-error",0,i.oxv),i.c53(2,x,1,1,"ng-container",null,i.oxv)),2&l&&(i.oho(g.errorsToStr()),i.yG2(2),i.oho(g.errorsToTemplates()))},dependencies:[t.MD,t.XV,D,C]})}return u})()},9938:(A,O,e)=>{e.d(O,{y:()=>E});var t=e(6504);const i={required:"This field cannot be empty!",email:"This email is not valid!",numbersOnly:"Only numbers allowed!",numberOnly:"Only numbers allowed!",numerical:"Only numbers allowed!",invalid_http_url:"Invalid HTTP connection",minlength:_=>"\n          Text too short: Minimum length: \n          " + _.requiredLength + "\n          , current length: \n          " + _.actualLength + "\n        ",InvalidFormat:_=>"\n          \" \n          " + _.value + "\n           \" is not a valid format. Valid example: \"\n          " + _.validExample + "\n          \"\n        ",pattern:_=>"\n           \" \n          " + _.actualValue + "\n           \" is not a valid format. The format must comply with the following\n          regular expression (RegExp): \" \n          " + _.requiredPattern + "\n           \" \n        ",max:_=>"\n          The entered value is too large! Maximum value: \n          " + _.max + "\n           , current value: \n          " + _.actual + "\n        ",min:_=>"\n           The entered value is too small! Minimum value: \n          " + _.min + "\n           , current value: \n          " + _.actual + "\n        ",maxlength:_=>"\n           The entered value is too long! Maximum length: \n          " + _.requiredLength + "\n           , Current length: \n          " + _.actualLength + "\n        ",phoneIT:"\n           This does not seem to be a valid Italian phone number. Example: +39\n          123 456 7890 \n        ",inclusion:_=>{const o=Array.isArray(_)?"\n           The allowed values are: \n          " + _.join(", ") + "\n           . \n        ":"";return "\n           The entered value is not valid. \n          " + o + "\n        "},arrayMinLength:_=>"\n           You must enter at least \n          " + _.requiredLength + "\n           elements. \n        ",passwordConfirmation:"The passwords do not match!",formWeeklyFromTo:"The start time must be earlier than the end time!"},v={assignToFormUnlessControl:!0};class E{static formatErrors(o,s){return null==o||null==o?[]:new E(o,s).formatErrors()}static assignErrorsToForm(o,s,a={}){const r=s.error?.details;if(!r||!Array.isArray(r))return"object"==typeof r&&Object.keys(r).length>0?this.assignErrorsToFormFromJson(o,r,a):void console.warn("invalid errors provided to assignErrorsToForm",r);this.assignErrorsToFormFromArray(o,r,a)}static assignErrorsToFormFromJson(o,s,a={}){const r={...v,...a};Object.keys(s).forEach(m=>{const f=s[m];f&&Array.isArray(f)?f.forEach(M=>{const C=o.controls[m];C?C.setErrors({[M.attribute]:M.message}):r.assignToFormUnlessControl&&o.setErrors({[M.attribute]:M.message})}):console.warn("assignErrorsToFormFromJson expected an array of ActiveError, but got:",f)})}static assignErrorsToFormFromArray(o,s,a={}){const r={...v,...a};s.forEach(m=>{const f=o instanceof t.WC?o.controls[m.attribute]:o;f?f.setErrors({[m.attribute]:m.message}):r.assignToFormUnlessControl&&o.setErrors({[m.attribute]:m.message})})}constructor(o,s=i){this.defaultMessages=i,this.messages={},this.enableLogging=!1,this.errors=o,s?this.mergeMessages(s):this.assignDefaults()}assignDefaults(){this.messages={},Object.keys(this.defaultMessages).forEach(o=>{this.messages[o]=this.defaultMessages[o]})}mergeMessages(o){[...Object.keys(this.defaultMessages),...Object.keys(o)].forEach(a=>{this.messages[a]=o[a]?o[a]:this.defaultMessages[a]})}formatErrors(){return[...this.errorMsgFromControl()]}warn(...o){this.enableLogging&&console.warn(...o)}errorMsgFromControl(){if(null==this.errors||null==this.errors)return[];var o=[];return Object.keys(this.errors).filter(s=>{if("string"==typeof this.errors[s]&&this.errors[s].length>0)return o.push(this.errors[s]);if(this.messages.hasOwnProperty(s)&&this.messages[s]&&null!=this.messages[s]){const m=this.messages[s];switch(typeof m){case"string":default:o.push(m);break;case"function":o.push(m(this.errors[s]))}}else if(this.warn(`ReactiveFormsErrors missing error message of "${s}". Parser error with your custom logic.`),[!0,!1].includes(this.errors[s])){var r={};r[s]=this.errors[s],"string"!=typeof r&&(r=JSON.stringify(r)),o.push(r)}else o.push(this.errors[s])}),o}}},1512:(A,O,e)=>{e.d(O,{C:()=>x,w:()=>R});var t=e(4496),i=e(900),v=e(4392),E=e(4164),_=e(3480),o=e(4680),s=e(3972),a=e(5944),r=e(3412),m=e(4704),f=e(3656),M=e(1368);const C=["tuiLink",""];function D(u,c){if(1&u&&t.wR5(0,"tui-svg",3),2&u){const n=t.GaO();t.E7m("src",n.icon||"")}}function y(u,c){if(1&u&&t.wR5(0,"tui-svg",4),2&u){const n=t.GaO();t.E7m("src",n.icon||"")}}const L=["*"];let x=(()=>{class u{constructor(n,l,g){this.el=n,this.mode$=l,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,r.U)((0,i.Ax)(this.el.nativeElement,"focusin").pipe((0,m.k)(v.Ml)),(0,i.Ax)(this.el.nativeElement,"focusout").pipe((0,m.k)(v.so))),g.subscribe(P=>{this.focusVisible=P})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,E.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return u.\u0275fac=function(n){return new(n||u)(t.GI1(t.GMv),t.GI1(a.Yx),t.GI1(_.MF))},u.\u0275cmp=t.In1({type:u,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(n,l){1&n&&t.qCj("$.data-mode.attr",function(){return l.mode$}),2&n&&(t.e48("data-host-mode",l.mode),t.eAK("_pseudo",l.pseudo)("_icon-rotated",l.iconRotated)("_focus-visible",l.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,o.NK)(u),_.MF,_.UF,s.Ir])],attrs:C,ngContentSelectors:L,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(n,l){1&n&&(t.kPM(),t.yuY(0,D,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,y,1,1,"tui-svg",2)),2&n&&(t.E7m("ngIf",l.iconAlignLeft),t.yG2(3),t.E7m("ngIf",l.iconAlignRight))},dependencies:[f.Wu,M.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),u})(),R=(()=>{class u{}return u.\u0275fac=function(n){return new(n||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[M.MD,f.Yt]]}),u})()},4736:(A,O,e)=>{e.d(O,{M:()=>E,O:()=>_});var t=e(4496),i=e(5944),v=e(4704);let E=(()=>{class o{constructor(a){this.months$=a}transform({month:a}){return this.months$.pipe((0,v.k)(r=>r[a]))}}return o.\u0275fac=function(a){return new(a||o)(t.GI1(i.GU,16))},o.\u0275pipe=t.UTH({name:"tuiMonth",type:o,pure:!0}),o})(),_=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({}),o})()},3797:(A,O,e)=>{e.d(O,{CQ:()=>u,Oo:()=>x,cP:()=>R});var t=e(4496),i=e(6504),v=e(3044),E=e(1800),_=e(4164),o=e(4680),s=e(466),a=e(7936),r=e(8048),m=e(4336),f=e(5944),M=e(9371),C=e(796),D=e(1368);const y=["*",[["input"]]],L=["*","input"];let x=(()=>{class c extends E._y{constructor(l,g,P,T){super(l,g,T),this.textfieldSize=P,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,_.ER)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(l){this.value=l,this.open=!0}onActiveZone(l){this.updateFocused(l)}handleOption(l){this.setNativeValue(String(l)),this.focusInput(),this.value=String(l),this.open=!1}getFallbackValue(){return""}focusInput(l=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:l})}setNativeValue(l){this.nativeFocusableElement&&(this.nativeFocusableElement.value=l)}}return c.\u0275fac=function(l){return new(l||c)(t.GI1(i.eq,10),t.GI1(t.kD9),t.GI1(r.$K),t.GI1(E.cn,8))},c.\u0275cmp=t.In1({type:c,selectors:[["tui-input"]],contentQueries:function(l,g,P){if(1&l&&t.szK(P,m.Ux,5,t.Yw2),2&l){let T;t.wto(T=t.Gqi())&&(g.datalist=T.first)}},viewQuery:function(l,g){if(1&l&&(t.CC$(s.Qw,5),t.CC$(a.y_,5)),2&l){let P;t.wto(P=t.Gqi())&&(g.hostedDropdown=P.first),t.wto(P=t.Gqi())&&(g.textfield=P.first)}},hostVars:1,hostBindings:function(l,g){2&l&&t.e48("data-size",g.size)},features:[t.M5G([C.g3,(0,o.NK)(c),(0,f.UH)(c),(0,E.q4)(c)],[C.YL]),t.eg9],ngContentSelectors:L,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(l,g){1&l&&(t.kPM(y),t.I0R(0,"tui-hosted-dropdown",0),t.iHE("openChange",function(T){return t.kNx(g.open,T)||(g.open=T),T}),t.qCj("tuiActiveZoneChange",function(T){return g.onActiveZone(T)}),t.I0R(1,"tui-primitive-textfield",1),t.qCj("valueChange",function(T){return g.onValueChange(T)}),t._Xx(2),t._Xx(3,1,["ngProjectAs","input",5,["input"]]),t.C$Y()()),2&l&&(t.E7m("canOpen",g.canOpen)("content",g.datalist||""),t.OKB("open",g.open),t.yG2(),t.E7m("disabled",g.computedDisabled)("focusable",g.computedFocusable)("invalid",g.computedInvalid)("nativeId",g.nativeId)("pseudoFocus",g.computedFocused)("pseudoHover",g.pseudoHover)("readOnly",g.readOnly)("value",g.value))},dependencies:[s.Qw,a.y_,v.M,a.KQ],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),c})(),R=(()=>{class c extends M.Cm{onValueChange(l){this.host.onValueChange(l)}}return c.\u0275fac=(()=>{let n;return function(g){return(n||(n=t.otF(c)))(g||c)}})(),c.\u0275dir=t.Sc5({type:c,selectors:[["tui-input"]],features:[t.M5G([(0,f.iu)(c)]),t.eg9]}),c})(),u=(()=>{class c{}return c.\u0275fac=function(l){return new(l||c)},c.\u0275mod=t.a4G({type:c}),c.\u0275inj=t.s3X({imports:[[D.MD,v.L,a.KA,s.GE]]}),c})()},6376:(A,O,e)=>{e.d(O,{C:()=>E,k:()=>_});var t=e(4496),i=e(1368);const v=["*"];let E=(()=>{class o{constructor(){this.size="m",this.textAlign="left",this.hoverable=!1,this.transparent=!1}get sizeS(){return"s"===this.size}get sizeM(){return"m"===this.size}get sizeL(){return"l"===this.size}get textAlignLeft(){return"left"===this.textAlign}get textAlignCenter(){return"center"===this.textAlign}get textAlignRight(){return"right"===this.textAlign}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.In1({type:o,selectors:[["tui-island"],["a","tuiIsland",""]],hostAttrs:[1,"tui-island"],hostVars:16,hostBindings:function(a,r){2&a&&t.eAK("tui-island_hoverable",r.hoverable)("tui-island_transparent",r.transparent)("tui-island_size_s",r.sizeS)("tui-island_size_m",r.sizeM)("tui-island_size_l",r.sizeL)("tui-island_text-align_left",r.textAlignLeft)("tui-island_text-align_center",r.textAlignCenter)("tui-island_text-align_right",r.textAlignRight)},inputs:{size:"size",textAlign:"textAlign",hoverable:"hoverable",transparent:"transparent"},ngContentSelectors:v,decls:1,vars:0,template:function(a,r){1&a&&(t.kPM(),t._Xx(0))},styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),o})(),_=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[[i.MD]]}),o})()},796:(A,O,e)=>{e.d(O,{YL:()=>f,g3:()=>M}),e(4736);var i=e(5193),v=e(5944),o=(e(3012),e(2700),e(528)),a=(e(4704),e(4496)),r=e(6504);const f=(0,i.Sk)({limitWidth:"fixed",align:"right"}),M={provide:v.Y9,deps:[[new a.T7N,new a.Yiy,r.Y6]],useFactory:o.Z}},4872:(A,O,e)=>{e.d(O,{ay:()=>E});var t=e(4496),i=e(3252),v=e(3616);function E(s){s||((0,t.yAg)(E),s=(0,t.uUt)(t.eM9));const a=new i._(r=>s.onDestroy(r.next.bind(r)));return r=>r.pipe((0,v.a)(a))}}}]);