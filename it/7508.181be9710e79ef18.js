"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7508],{9956:(A,y,s)=>{s.d(y,{g:()=>I});var O=s(1368),t=s(4496),v=s(9938),x=s(2528),u=s(7308),a=s(7012),c=s(3972),p=s(5944),d=s(1040);function _(l,h){if(1&l&&(t.SAx(0),t.OEk(1),t.k70()),2&l){const r=h.polymorpheusOutlet;t.yG2(),t.oRS(" ",r," ")}}const C=()=>({});function M(l,h){if(1&l&&(t.I0R(0,"div",1),t.wVc(1,"async"),t.yuY(2,_,2,1,"ng-container",2),t.wVc(3,"async"),t.C$Y()),2&l){const r=t.GaO();t.eAK("t-message-text_light","onDark"===t.kDX(1,6,r.mode$)),t.E7m("@tuiFadeIn",r.animation)("@tuiHeightCollapse",r.animation),t.yG2(2),t.E7m("polymorpheusOutlet",r.error.message||t.kDX(3,8,r.defaultErrorMessage$))("polymorpheusOutletContext",r.error.context||t.q4q(10,C))}}let b=(()=>{class l{constructor(r,m,P){this.animation=r,this.mode$=m,this.defaultErrorMessage$=P,this.error=null,this.visible=!0}set errorSetter(r){this.error=(0,x.gT)(r)?new u.E(r):r}onAnimation(r){this.visible=r}}return l.\u0275fac=function(r){return new(r||l)(t.GI1(p.kp),t.GI1(p.Yx),t.GI1(p.cX))},l.\u0275cmp=t.In1({type:l,selectors:[["tui-error"]],hostBindings:function(r,m){1&r&&t.qCj("animationcancel.self",function(){return m.onAnimation(!1)})("animationstart.self",function(){return m.onAnimation(!0)})},inputs:{errorSetter:[t.Wk5.None,"error","errorSetter"]},features:[t.M5G([c.Ir])],decls:1,vars:1,consts:[["automation-id","tui-error__text","class","t-message-text",3,"t-message-text_light",4,"ngIf"],["automation-id","tui-error__text",1,"t-message-text"],[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(r,m){1&r&&t.yuY(0,M,4,11,"div",0),2&r&&t.E7m("ngIf",m.error&&m.visible)},dependencies:[O.u_,d.Af,O.a],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);display:block;color:var(--tui-negative);word-wrap:break-word;animation:tuiPresent 1s infinite}.t-message-text[_ngcontent-%COMP%]{margin-top:.25rem;white-space:pre-line}.t-message-text_light[_ngcontent-%COMP%]{color:var(--tui-negative-night)}"],data:{animation:[a.iY,a.K2]},changeDetection:0}),l})(),E=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=t.a4G({type:l}),l.\u0275inj=t.s3X({imports:[[O.MD,d.Ux]]}),l})();function w(l,h){1&l&&t.wR5(0,"tui-error",0),2&l&&t.E7m("error",h.$implicit)}function D(l,h){1&l&&t.C_f(0)}function z(l,h){1&l&&t.yuY(0,D,1,0,"ng-container",1),2&l&&t.E7m("ngTemplateOutlet",h.$implicit)}let I=(()=>{class l{constructor(){this._errors=null}get errors(){return this._errors}set errors(r){this._errors=r}allErrors(){return this.errors||null}errorsToTemplates(){return v.y.formatErrors(this.errors||null).filter(r=>r&&r instanceof t.Yw2)}errorsToStr(){return v.y.formatErrors(this.errors||null).filter(r=>r&&"string"==typeof r)}static#t=this.\u0275fac=function(m){return new(m||l)};static#e=this.\u0275cmp=t.In1({type:l,selectors:[["app-errors"]],inputs:{errors:"errors"},standalone:!0,features:[t.UHJ],decls:4,vars:0,consts:[[3,"error"],[4,"ngTemplateOutlet"]],template:function(m,P){1&m&&(t.c53(0,w,1,1,"tui-error",0,t.oxv),t.c53(2,z,1,1,"ng-container",null,t.oxv)),2&m&&(t.oho(P.errorsToStr()),t.yG2(2),t.oho(P.errorsToTemplates()))},dependencies:[O.MD,O.XV,E,b]})}return l})()},9938:(A,y,s)=>{s.d(y,{y:()=>x});var O=s(6504);const t={required:"Questo campo non pu\xf2 essere vuoto!",email:"Questa email non \xe8 valida!",numbersOnly:"Solo numeri ammessi!",numberOnly:"Solo numeri ammessi!",numerical:"Solo numeri ammessi!",invalid_http_url:"Collegamento http non valido",minlength:u=>`Testo troppo corto: Lunghezza minima: ${u.requiredLength}, lunghezza attuale: ${u.actualLength}`,InvalidFormat:u=>`"${u.value}" non \xe8 un formato valido. Esempio valido: "${u.validExample}"`,pattern:u=>`"${u.actualValue}" non \xe8 un formato valido. Il formato deve rispettare la seguente espressione regolare (RegExp): "${u.requiredPattern}"`,max:u=>`Il valore inserito \xe8 troppo grande! Valore massimo: ${u.max}, valore attuale: ${u.actual}`,min:u=>`Il valore inserito \xe8 troppo piccolo! Valore minimo: ${u.min}, valore attuale: ${u.actual}`,maxlength:u=>`Il valore inserito \xe8 troppo lungo! Lunghezza massima: ${u.requiredLength}, Lunghezza attuale: ${u.actualLength}`,phoneIT:"Questo non sembra essere un numero di telefono italiano valido. Esempio: +39 123 456 7890",inclusion:u=>"Il valore inserito non \xe8 valido. "+(Array.isArray(u)?`I valori ammessi sono: ${u.join(", ")}.`:""),arrayMinLength:u=>`Devi inserire almeno ${u.requiredLength} elementi.`,passwordConfirmation:"Le password non coincidono!"},v={assignToFormUnlessControl:!0};class x{static formatErrors(a,c){return null==a||null==a?[]:new x(a,c).formatErrors()}static assignErrorsToForm(a,c,p={}){const d=c.error?.details;if(!d||!Array.isArray(d))return"object"==typeof d&&Object.keys(d).length>0?this.assignErrorsToFormFromJson(a,d,p):void console.warn("invalid errors provided to assignErrorsToForm",d);this.assignErrorsToFormFromArray(a,d,p)}static assignErrorsToFormFromJson(a,c,p={}){const d={...v,...p};Object.keys(c).forEach(_=>{const C=c[_];C&&Array.isArray(C)?C.forEach(M=>{const b=a.controls[_];b?b.setErrors({[M.attribute]:M.message}):d.assignToFormUnlessControl&&a.setErrors({[M.attribute]:M.message})}):console.warn("assignErrorsToFormFromJson expected an array of ActiveError, but got:",C)})}static assignErrorsToFormFromArray(a,c,p={}){const d={...v,...p};c.forEach(_=>{const C=a instanceof O.WC?a.controls[_.attribute]:a;C?C.setErrors({[_.attribute]:_.message}):d.assignToFormUnlessControl&&a.setErrors({[_.attribute]:_.message})})}constructor(a,c=t){this.defaultMessages=t,this.messages={},this.enableLogging=!1,this.errors=a,c?this.mergeMessages(c):this.assignDefaults()}assignDefaults(){this.messages={},Object.keys(this.defaultMessages).forEach(a=>{this.messages[a]=this.defaultMessages[a]})}mergeMessages(a){[...Object.keys(this.defaultMessages),...Object.keys(a)].forEach(p=>{this.messages[p]=a[p]?a[p]:this.defaultMessages[p]})}formatErrors(){return[...this.errorMsgFromControl()]}warn(...a){this.enableLogging&&console.warn(...a)}errorMsgFromControl(){if(null==this.errors||null==this.errors)return[];var a=[];return Object.keys(this.errors).filter(c=>{if("string"==typeof this.errors[c]&&this.errors[c].length>0)return a.push(this.errors[c]);if(this.messages.hasOwnProperty(c)&&this.messages[c]&&null!=this.messages[c]){const _=this.messages[c];switch(typeof _){case"string":default:a.push(_);break;case"function":a.push(_(this.errors[c]))}}else if(this.warn(`ReactiveFormsErrors missing error message of "${c}". Parser error with your custom logic.`),[!0,!1].includes(this.errors[c])){var d={};d[c]=this.errors[c],"string"!=typeof d&&(d=JSON.stringify(d)),a.push(d)}else a.push(this.errors[c])}),a}}},8588:(A,y,s)=>{s.d(y,{Y3:()=>q,kd:()=>Z,wp:()=>J});var O=s(1368),t=s(4496),v=s(6504),x=s(168),u=s(1800),a=s(4164),c=s(4680),p=s(1152),d=s(3656),_=s(4436),C=s(4108),M=s(7936),b=s(5608),E=s(5944),w=s(5488),D=s(5656),z=s(3972),I=s(9371),l=s(1040);const h=["focusableElement"];function r(n,i){1&n&&t.C_f(0)}function m(n,i){if(1&n&&(t.I0R(0,"div",19),t.OEk(1),t.C$Y()),2&n){const e=t.GaO();t.yG2(),t.CAO(" ",e.value.length,"/",e.maxLength," ")}}function P(n,i){if(1&n&&(t.I0R(0,"div",20),t._Xx(1,1),t.C$Y()),2&n){const e=t.GaO();t.eAK("t-placeholder_raised",e.placeholderRaised)}}function F(n,i){1&n&&t.wR5(0,"tui-svg",23),2&n&&t.E7m("src",i.polymorpheusOutlet)}const T=n=>({$implicit:n});function k(n,i){if(1&n&&(t.I0R(0,"div",21),t.yuY(1,F,1,1,"tui-svg",22),t.C$Y()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.iconLeftContent)("polymorpheusOutletContext",t.S45(2,T,e.size))}}function R(n,i){1&n&&t.wR5(0,"tui-svg",25),2&n&&t.E7m("src",i.polymorpheusOutlet)}function W(n,i){if(1&n&&(t.SAx(0),t.yuY(1,R,1,1,"tui-svg",24),t.k70()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.controller.customContent)}}function L(n,i){if(1&n){const e=t.KQA();t.I0R(0,"tui-svg",27),t.qCj("click.stop",function(){t.usT(e);const g=t.GaO(2);return t.CGJ(g.onValueChange(""))}),t.C$Y()}2&n&&t.E7m("src",i.polymorpheusOutlet)}function G(n,i){if(1&n&&(t.SAx(0),t.yuY(1,L,1,1,"tui-svg",26),t.k70()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.iconCleaner)("polymorpheusOutletContext",t.S45(2,T,e.size))}}function S(n,i){if(1&n&&t.wR5(0,"tui-tooltip",28),2&n){const e=t.GaO();t.E7m("content",null==e.hintOptions?null:e.hintOptions.content)("describeId",e.id)}}function $(n,i){1&n&&t.wR5(0,"tui-svg",23),2&n&&t.E7m("src",i.polymorpheusOutlet)}function B(n,i){if(1&n&&(t.I0R(0,"div",29),t.yuY(1,$,1,1,"tui-svg",22),t.C$Y()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.iconContent)("polymorpheusOutletContext",t.S45(2,T,e.size))}}const Y=[[["textarea"]],"*"],H=["textarea","*"];let J=(()=>{class n extends u._y{constructor(e,o,g,f,tt,et){super(e,o),this.isIOS=g,this.mode$=f,this.controller=tt,this.hintOptions=et,this.rows=20,this.maxLength=null,this.expandable=!1}get labelOutside(){return this.controller.labelOutside}get nativeFocusableElement(){var e,o;return this.computedDisabled?null:(null===(e=this.textfield)||void 0===e?void 0:e.nativeElement)||(null===(o=this.focusableElement)||void 0===o?void 0:o.nativeElement)||null}get focused(){return(0,a.ER)(this.nativeFocusableElement)}get appearance(){return this.controller.appearance}get size(){return this.controller.size}get borderStart(){return this.iconLeftContent?M.wB[this.size]:0}get borderEnd(){return(0,b.qy)(!!this.iconContent,this.hasCleaner,this.hasTooltip,this.hasCustomContent,this.size)}get hasCleaner(){return this.controller.cleaner&&this.hasValue&&this.interactive}get hasTooltip(){var e;return!(null===(e=this.hintOptions)||void 0===e||!e.content)&&(this.controller.options.hintOnDisabled||!this.computedDisabled)}get hasValue(){return""!==this.value}get hasCounter(){return!!this.maxLength&&this.interactive}get hasPlaceholder(){return this.placeholderRaisable||!this.hasValue&&!this.hasExampleText}get hasCustomContent(){return!!this.controller.customContent}get iconLeftContent(){return this.controller.iconLeft}get iconContent(){return this.controller.icon}get iconCleaner(){return this.controller.options.iconCleaner}get hasExampleText(){var e;return!(null===(e=this.textfield)||void 0===e||!e.nativeElement.placeholder)&&this.focused&&!this.hasValue&&!this.readOnly}get computeMaxHeight(){return this.expandable?this.rows*this.lineHeight:null}get placeholderRaised(){return this.placeholderRaisable&&(this.computedFocused&&!this.readOnly||this.hasValue)}get fittedContent(){return this.value.slice(0,this.maxLength||1/0)}get extraContent(){return this.value.slice(this.maxLength||1/0)}onFocused(e){this.updateFocused(e)}onValueChange(e){this.value=e}onMouseDown(e){e.target!==this.nativeFocusableElement&&(e.preventDefault(),this.nativeFocusableElement&&this.nativeFocusableElement.focus())}getFallbackValue(){return""}get lineHeight(){return"m"===this.controller.size?20:24}get placeholderRaisable(){return"s"!==this.size&&!this.controller.labelOutside}}return n.\u0275fac=function(e){return new(e||n)(t.GI1(v.eq,10),t.GI1(t.kD9),t.GI1(c.kh),t.GI1(E.Yx),t.GI1(w.W),t.GI1(D.cb,8))},n.\u0275cmp=t.In1({type:n,selectors:[["tui-textarea"]],contentQueries:function(e,o,g){if(1&e&&t.szK(g,M.b,5,t.GMv),2&e){let f;t.wto(f=t.Gqi())&&(o.textfield=f.first)}},viewQuery:function(e,o){if(1&e&&t.CC$(h,5),2&e){let g;t.wto(g=t.Gqi())&&(o.focusableElement=g.first)}},hostVars:17,hostBindings:function(e,o){1&e&&t.qCj("$.data-mode.attr",function(){return o.mode$})("focusin",function(){return o.onFocused(!0)})("focusout",function(){return o.onFocused(!1)}),2&e&&(t.e48("data-size",o.size),t.m4B("--border-start",o.borderStart,"rem")("--border-end",o.borderEnd,"rem"),t.eAK("_ios",o.isIOS)("_expandable",o.expandable)("_label-outside",o.labelOutside)("_has-tooltip",o.hasTooltip)("_has-value",o.hasValue)("_has-counter",o.hasCounter))},inputs:{rows:"rows",maxLength:"maxLength",expandable:"expandable"},features:[t.M5G([(0,c.NK)(n),(0,u.q4)(n),w.cn,z.Ir]),t.eg9],ngContentSelectors:H,decls:23,vars:25,consts:[[4,"ngIf"],["automation-id","tui-text-area__wrapper","tuiWrapper","",1,"t-outline",3,"appearance","disabled","focus","hover","invalid","readOnly"],["automation-id","tui-text-area__counter","class","t-counter",4,"ngIf"],[1,"t-content",3,"mousedown"],[1,"t-wrapper"],["automation-id","tui-text-area__placeholder","class","t-placeholder",3,"t-placeholder_raised",4,"ngIf"],["automation-id","tui-text-area__scrollbar",1,"t-box"],[1,"t-input-wrapper"],[1,"t-relative"],["aria-hidden","true",1,"t-pseudo-content"],[3,"textContent"],[1,"t-pseudo-content__extra",3,"textContent"],[1,"t-caret"],["automation-id","tui-text-area__native",1,"t-input",3,"disabled","id","readOnly","tuiFocusable","ngModel","ngModelChange"],["focusableElement",""],[1,"t-icons"],["class","t-icon t-icon_left t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__tooltip",3,"content","describeId",4,"ngIf"],["class","t-icon t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__counter",1,"t-counter"],["automation-id","tui-text-area__placeholder",1,"t-placeholder"],[1,"t-icon","t-icon_left","t-textfield-icon"],["appearance","icon","tuiWrapper","",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",3,"src"],[3,"src",4,"polymorpheusOutlet"],[3,"src"],["appearance","icon","tuiWrapper","","class","t-cleaner",3,"src","click.stop",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",1,"t-cleaner",3,"src","click.stop"],["automation-id","tui-text-area__tooltip",3,"content","describeId"],[1,"t-icon","t-textfield-icon"]],template:function(e,o){1&e&&(t.kPM(Y),t.yuY(0,r,1,0,"ng-container",0),t.wVc(1,"async"),t.I0R(2,"div",1),t.yuY(3,m,2,2,"div",2),t.I0R(4,"label",3),t.qCj("mousedown",function(f){return o.onMouseDown(f)}),t.I0R(5,"div",4),t.yuY(6,P,2,2,"div",5),t.I0R(7,"tui-scrollbar",6)(8,"div",7)(9,"div",8)(10,"div",9),t.wR5(11,"span",10)(12,"span",11)(13,"span",12),t.C$Y(),t.I0R(14,"textarea",13,14),t.iHE("ngModelChange",function(f){return t.kNx(o.value,f)||(o.value=f),f}),t.C$Y(),t._Xx(16),t.C$Y()()()(),t.I0R(17,"div",15),t.yuY(18,k,2,4,"div",16)(19,W,2,1,"ng-container",0)(20,G,2,4,"ng-container",0)(21,S,1,2,"tui-tooltip",17)(22,B,2,4,"div",18),t.C$Y()()()),2&e&&(t.E7m("ngIf",t.kDX(1,23,null==o.hintOptions?null:o.hintOptions.change$)),t.yG2(2),t.E7m("appearance",o.appearance)("disabled",o.disabled)("focus",o.computedFocused)("hover",o.pseudoHover)("invalid",o.computedInvalid)("readOnly",o.readOnly),t.yG2(),t.E7m("ngIf",o.hasCounter),t.yG2(3),t.E7m("ngIf",o.hasPlaceholder),t.yG2(),t.m4B("max-height",o.computeMaxHeight,"px"),t.yG2(4),t.E7m("textContent",o.fittedContent||(null==o.nativeFocusableElement?null:o.nativeFocusableElement.placeholder)),t.yG2(),t.E7m("textContent",o.extraContent),t.yG2(2),t.E7m("disabled",o.computedDisabled)("id",o.id)("readOnly",o.readOnly)("tuiFocusable",o.computedFocusable),t.OKB("ngModel",o.value),t.yG2(4),t.E7m("ngIf",o.iconLeftContent),t.yG2(),t.E7m("ngIf",o.hasCustomContent),t.yG2(),t.E7m("ngIf",o.hasCleaner),t.yG2(),t.E7m("ngIf",o.hasTooltip),t.yG2(),t.E7m("ngIf",o.iconContent))},dependencies:[p.o7,d.Wu,_.i,O.u_,C.S,v.ot,x.O,v.ue,v._G,l.Af,O.a],styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-height:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-01)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}.t-outline[_ngcontent-%COMP%]{min-height:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-height:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-height:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-height:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-height:inherit;width:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-height:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-height:calc(100% - 1rem);width:100%}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{height:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{height:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word;pointer-events:none;color:transparent;overflow:hidden;border:solid transparent;border-top:0;border-bottom:0;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-error-bg-night)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03-night)}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:-moz-read-only)::placeholder{opacity:1}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-width:100%;border:solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;height:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:auto;margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;height:1rem;width:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:right;color:var(--tui-text-03)}[data-mode=onDark][_nghost-%COMP%]   .t-counter[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}"],changeDetection:0}),n})(),Z=(()=>{class n extends I.Cm{onValueChange(e){this.host.onValueChange(e)}}return n.\u0275fac=(()=>{let i;return function(o){return(i||(i=t.otF(n)))(o||n)}})(),n.\u0275dir=t.Sc5({type:n,selectors:[["tui-textarea"]],features:[t.M5G([(0,E.iu)(n)]),t.eg9]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[[O.MD,v.y,x.C,p.M9,_.a,C.g,d.Yt,M.KA,l.Ux]]}),n})()}}]);