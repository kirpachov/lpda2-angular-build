"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[968],{70968:(et,f,a)=>{a.d(f,{Y3:()=>Z,kd:()=>J,wp:()=>X});var d=a(91368),t=a(54496),c=a(6504),_=a(50168),p=a(81800),P=a(94164),g=a(74680),h=a(91152),m=a(93656),C=a(64436),O=a(44108),u=a(37936),b=a(85608),M=a(85944),x=a(8048),T=a(45656),y=a(3972),w=a(59371),v=a(1040);const E=["focusableElement"];function D(n,i){1&n&&t.C_f(0)}function z(n,i){if(1&n&&(t.I0R(0,"div",19),t.OEk(1),t.C$Y()),2&n){const e=t.GaO();t.yG2(),t.CAO(" ",e.value.length,"/",e.maxLength," ")}}function A(n,i){if(1&n&&(t.I0R(0,"div",20),t._Xx(1,1),t.C$Y()),2&n){const e=t.GaO();t.eAK("t-placeholder_raised",e.placeholderRaised)}}function I(n,i){1&n&&t.wR5(0,"tui-svg",23),2&n&&t.E7m("src",i.polymorpheusOutlet)}const s=n=>({$implicit:n});function k(n,i){if(1&n&&(t.I0R(0,"div",21),t.yuY(1,I,1,1,"tui-svg",22),t.C$Y()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.iconLeftContent)("polymorpheusOutletContext",t.S45(2,s,e.size))}}function W(n,i){1&n&&t.wR5(0,"tui-svg",25),2&n&&t.E7m("src",i.polymorpheusOutlet)}function F(n,i){if(1&n&&(t.SAx(0),t.yuY(1,W,1,1,"tui-svg",24),t.k70()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.controller.customContent)}}function R(n,i){if(1&n){const e=t.KQA();t.I0R(0,"tui-svg",27),t.qCj("click.stop",function(){t.usT(e);const r=t.GaO(2);return t.CGJ(r.onValueChange(""))}),t.C$Y()}2&n&&t.E7m("src",i.polymorpheusOutlet)}function L(n,i){if(1&n&&(t.SAx(0),t.yuY(1,R,1,1,"tui-svg",26),t.k70()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.iconCleaner)("polymorpheusOutletContext",t.S45(2,s,e.size))}}function G(n,i){if(1&n&&t.wR5(0,"tui-tooltip",28),2&n){const e=t.GaO();t.E7m("content",null==e.hintOptions?null:e.hintOptions.content)("describeId",e.id)}}function B(n,i){1&n&&t.wR5(0,"tui-svg",23),2&n&&t.E7m("src",i.polymorpheusOutlet)}function S(n,i){if(1&n&&(t.I0R(0,"div",29),t.yuY(1,B,1,1,"tui-svg",22),t.C$Y()),2&n){const e=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",e.iconContent)("polymorpheusOutletContext",t.S45(2,s,e.size))}}const K=[[["textarea"]],"*"],Y=["textarea","*"];let X=(()=>{class n extends p._y{constructor(e,o,r,l,q,tt){super(e,o),this.isIOS=r,this.mode$=l,this.controller=q,this.hintOptions=tt,this.rows=20,this.maxLength=null,this.expandable=!1}get labelOutside(){return this.controller.labelOutside}get nativeFocusableElement(){var e,o;return this.computedDisabled?null:(null===(e=this.textfield)||void 0===e?void 0:e.nativeElement)||(null===(o=this.focusableElement)||void 0===o?void 0:o.nativeElement)||null}get focused(){return(0,P.ER)(this.nativeFocusableElement)}get appearance(){return this.controller.appearance}get size(){return this.controller.size}get borderStart(){return this.iconLeftContent?u.wB[this.size]:0}get borderEnd(){return(0,b.qy)(!!this.iconContent,this.hasCleaner,this.hasTooltip,this.hasCustomContent,this.size)}get hasCleaner(){return this.controller.cleaner&&this.hasValue&&this.interactive}get hasTooltip(){var e;return!(null===(e=this.hintOptions)||void 0===e||!e.content)&&(this.controller.options.hintOnDisabled||!this.computedDisabled)}get hasValue(){return""!==this.value}get hasCounter(){return!!this.maxLength&&this.interactive}get hasPlaceholder(){return this.placeholderRaisable||!this.hasValue&&!this.hasExampleText}get hasCustomContent(){return!!this.controller.customContent}get iconLeftContent(){return this.controller.iconLeft}get iconContent(){return this.controller.icon}get iconCleaner(){return this.controller.options.iconCleaner}get hasExampleText(){var e;return!(null===(e=this.textfield)||void 0===e||!e.nativeElement.placeholder)&&this.focused&&!this.hasValue&&!this.readOnly}get computeMaxHeight(){return this.expandable?this.rows*this.lineHeight:null}get placeholderRaised(){return this.placeholderRaisable&&(this.computedFocused&&!this.readOnly||this.hasValue)}get fittedContent(){return this.value.slice(0,this.maxLength||1/0)}get extraContent(){return this.value.slice(this.maxLength||1/0)}onFocused(e){this.updateFocused(e)}onValueChange(e){this.value=e}onMouseDown(e){e.target!==this.nativeFocusableElement&&(e.preventDefault(),this.nativeFocusableElement&&this.nativeFocusableElement.focus())}getFallbackValue(){return""}get lineHeight(){return"m"===this.controller.size?20:24}get placeholderRaisable(){return"s"!==this.size&&!this.controller.labelOutside}}return n.\u0275fac=function(e){return new(e||n)(t.GI1(c.eq,10),t.GI1(t.kD9),t.GI1(g.kh),t.GI1(M.Yx),t.GI1(x.W),t.GI1(T.cb,8))},n.\u0275cmp=t.In1({type:n,selectors:[["tui-textarea"]],contentQueries:function(e,o,r){if(1&e&&t.szK(r,u.b,5,t.GMv),2&e){let l;t.wto(l=t.Gqi())&&(o.textfield=l.first)}},viewQuery:function(e,o){if(1&e&&t.CC$(E,5),2&e){let r;t.wto(r=t.Gqi())&&(o.focusableElement=r.first)}},hostVars:17,hostBindings:function(e,o){1&e&&t.qCj("$.data-mode.attr",function(){return o.mode$})("focusin",function(){return o.onFocused(!0)})("focusout",function(){return o.onFocused(!1)}),2&e&&(t.e48("data-size",o.size),t.m4B("--border-start",o.borderStart,"rem")("--border-end",o.borderEnd,"rem"),t.eAK("_ios",o.isIOS)("_expandable",o.expandable)("_label-outside",o.labelOutside)("_has-tooltip",o.hasTooltip)("_has-value",o.hasValue)("_has-counter",o.hasCounter))},inputs:{rows:"rows",maxLength:"maxLength",expandable:"expandable"},features:[t.M5G([(0,g.NK)(n),(0,p.q4)(n),x.cn,y.Ir]),t.eg9],ngContentSelectors:Y,decls:23,vars:25,consts:[[4,"ngIf"],["automation-id","tui-text-area__wrapper","tuiWrapper","",1,"t-outline",3,"appearance","disabled","focus","hover","invalid","readOnly"],["automation-id","tui-text-area__counter","class","t-counter",4,"ngIf"],[1,"t-content",3,"mousedown"],[1,"t-wrapper"],["automation-id","tui-text-area__placeholder","class","t-placeholder",3,"t-placeholder_raised",4,"ngIf"],["automation-id","tui-text-area__scrollbar",1,"t-box"],[1,"t-input-wrapper"],[1,"t-relative"],["aria-hidden","true",1,"t-pseudo-content"],[3,"textContent"],[1,"t-pseudo-content__extra",3,"textContent"],[1,"t-caret"],["automation-id","tui-text-area__native",1,"t-input",3,"disabled","id","readOnly","tuiFocusable","ngModel","ngModelChange"],["focusableElement",""],[1,"t-icons"],["class","t-icon t-icon_left t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__tooltip",3,"content","describeId",4,"ngIf"],["class","t-icon t-textfield-icon",4,"ngIf"],["automation-id","tui-text-area__counter",1,"t-counter"],["automation-id","tui-text-area__placeholder",1,"t-placeholder"],[1,"t-icon","t-icon_left","t-textfield-icon"],["appearance","icon","tuiWrapper","",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",3,"src"],[3,"src",4,"polymorpheusOutlet"],[3,"src"],["appearance","icon","tuiWrapper","","class","t-cleaner",3,"src","click.stop",4,"polymorpheusOutlet","polymorpheusOutletContext"],["appearance","icon","tuiWrapper","",1,"t-cleaner",3,"src","click.stop"],["automation-id","tui-text-area__tooltip",3,"content","describeId"],[1,"t-icon","t-textfield-icon"]],template:function(e,o){1&e&&(t.kPM(K),t.yuY(0,D,1,0,"ng-container",0),t.wVc(1,"async"),t.I0R(2,"div",1),t.yuY(3,z,2,2,"div",2),t.I0R(4,"label",3),t.qCj("mousedown",function(l){return o.onMouseDown(l)}),t.I0R(5,"div",4),t.yuY(6,A,2,2,"div",5),t.I0R(7,"tui-scrollbar",6)(8,"div",7)(9,"div",8)(10,"div",9),t.wR5(11,"span",10)(12,"span",11)(13,"span",12),t.C$Y(),t.I0R(14,"textarea",13,14),t.iHE("ngModelChange",function(l){return t.kNx(o.value,l)||(o.value=l),l}),t.C$Y(),t._Xx(16),t.C$Y()()()(),t.I0R(17,"div",15),t.yuY(18,k,2,4,"div",16)(19,F,2,1,"ng-container",0)(20,L,2,4,"ng-container",0)(21,G,1,2,"tui-tooltip",17)(22,S,2,4,"div",18),t.C$Y()()()),2&e&&(t.E7m("ngIf",t.kDX(1,23,null==o.hintOptions?null:o.hintOptions.change$)),t.yG2(2),t.E7m("appearance",o.appearance)("disabled",o.disabled)("focus",o.computedFocused)("hover",o.pseudoHover)("invalid",o.computedInvalid)("readOnly",o.readOnly),t.yG2(),t.E7m("ngIf",o.hasCounter),t.yG2(3),t.E7m("ngIf",o.hasPlaceholder),t.yG2(),t.m4B("max-height",o.computeMaxHeight,"px"),t.yG2(4),t.E7m("textContent",o.fittedContent||(null==o.nativeFocusableElement?null:o.nativeFocusableElement.placeholder)),t.yG2(),t.E7m("textContent",o.extraContent),t.yG2(2),t.E7m("disabled",o.computedDisabled)("id",o.id)("readOnly",o.readOnly)("tuiFocusable",o.computedFocusable),t.OKB("ngModel",o.value),t.yG2(4),t.E7m("ngIf",o.iconLeftContent),t.yG2(),t.E7m("ngIf",o.hasCustomContent),t.yG2(),t.E7m("ngIf",o.hasCleaner),t.yG2(),t.E7m("ngIf",o.hasTooltip),t.yG2(),t.E7m("ngIf",o.iconContent))},dependencies:[h.o7,m.Wu,C.i,d.u_,O.S,c.ot,_.O,c.ue,c._G,v.Af,d.a],styles:["[_nghost-%COMP%]{position:relative;z-index:0;display:flex;flex-direction:column;min-height:var(--tui-textarea-height);border-radius:var(--tui-radius-m);color:var(--tui-text-01)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-size=s][_nghost-%COMP%]{--tui-height: var(--tui-height-s);--tui-textarea-height: 4.5625rem;font:var(--tui-font-text-s)}[data-size=m][_nghost-%COMP%]{--tui-height: var(--tui-height-m);--tui-textarea-height: 5.5rem;font:var(--tui-font-text-s)}[data-size=l][_nghost-%COMP%]{--tui-height: var(--tui-height-l);--tui-textarea-height: 6.75rem;font:var(--tui-font-text-m)}[data-size=m]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 6.625rem}[data-size=l]._has-counter[_nghost-%COMP%]{--tui-textarea-height: 7.875rem}.t-outline[_ngcontent-%COMP%]{min-height:inherit}.t-content[_ngcontent-%COMP%]{display:block;margin-top:0;margin-bottom:0;min-height:inherit;box-sizing:border-box;overflow:hidden;cursor:text}._disabled[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{cursor:auto;opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:1px;right:0;min-height:auto}._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1.6875rem}._label-outside._has-counter[_nghost-%COMP%]:not(._expandable)   .t-content[_ngcontent-%COMP%]{bottom:1rem}.t-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;min-height:inherit;box-sizing:border-box;padding:calc((var(--tui-height) - 1.25rem) / 2) 0}[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) 0}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.25rem) / 2) 0}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-wrapper[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 2.625rem) / 2) 0}table[data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=m]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:.75rem}table[data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%], table   [data-size=l]._label-outside[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{padding-bottom:1rem}.t-input-wrapper[_ngcontent-%COMP%]{min-height:inherit;width:100%;flex:1}.t-relative[_ngcontent-%COMP%]{position:relative;min-height:inherit}.t-box[_ngcontent-%COMP%]{display:flex;min-height:calc(100% - 1rem);width:100%}[_nghost-%COMP%]:not(._expandable)   .t-box[_ngcontent-%COMP%]{height:calc(100% - 1rem)}[_nghost-%COMP%]:not(._expandable)._label-outside   .t-box[_ngcontent-%COMP%]{height:100%}._has-counter._expandable[_nghost-%COMP%]   .t-box[_ngcontent-%COMP%]{margin-bottom:1.25rem}[data-size=m][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1rem solid transparent}[data-size=l][_nghost-%COMP%]:not(._label-outside)   .t-box[_ngcontent-%COMP%]{border-top:1.25rem solid transparent}.t-pseudo-content[_ngcontent-%COMP%]{white-space:pre-wrap;word-wrap:break-word;pointer-events:none;color:transparent;overflow:hidden;border:solid transparent;border-top:0;border-bottom:0;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}[data-size=s][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-pseudo-content[_ngcontent-%COMP%]{padding:0 1rem}.t-pseudo-content__extra[_ngcontent-%COMP%]{background-color:var(--tui-error-bg-night)}.t-input[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;resize:none;overflow:hidden;outline:none;border-style:solid;border-color:transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0)}.t-input[_ngcontent-%COMP%]:-webkit-autofill, .t-input[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-input[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}.t-input[_ngcontent-%COMP%]:not(:last-of-type){display:none}.t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03);opacity:0}[data-mode=onDark][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]::placeholder{color:var(--tui-text-03-night)}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:-moz-read-only)::placeholder{opacity:1}._focused[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]:not(:read-only)::placeholder{opacity:1}[data-size=s][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%], [data-size=m][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding:0 1rem}[data-mode=onDark]._disabled[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}@supports (-webkit-marquee-repetition: infinite) and (object-fit: fill){._ios[_nghost-%COMP%]   .t-input[_ngcontent-%COMP%]{padding-left:.8125rem}}.t-placeholder[_ngcontent-%COMP%]{transition-property:transform,font-size,color,letter-spacing;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font:var(--tui-font-text-s);color:var(--tui-text-02);pointer-events:none;will-change:transform;transform:translateY(0);position:absolute;top:calc(var(--tui-height) / 2 - .625rem);left:0;max-width:100%;border:solid transparent;border-inline-start-width:var(--border-start, 0);border-inline-end-width:var(--border-end, 0);box-sizing:border-box}@supports (-webkit-hyphens: none){.t-placeholder[_ngcontent-%COMP%]{will-change:unset;transition-property:transform,color,letter-spacing}}.t-placeholder_raised[_ngcontent-%COMP%]{transform:translateY(-.625rem)}[data-size=m][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font:var(--tui-font-text-xs);line-height:1.25rem;transform:translateY(-.5rem);letter-spacing:.025rem}._invalid[_nghost-%COMP%]:not(._focused)   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill)}._invalid[_nghost-%COMP%]:not(._focused)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%], ._invalid[_nghost-%COMP%]:not(._focused):hover   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{color:var(--tui-error-fill-night)}._focused[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-03)}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{font:var(--tui-font-text-m);line-height:1.25rem}[data-size=l][_nghost-%COMP%]   .t-placeholder_raised[_ngcontent-%COMP%]{font-size:.8156rem}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01)}[tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=m]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused[_nghost-%COMP%]:not(._label-outside)   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}._focused[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=m]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%], [data-size=l]._focused._label-outside[_nghost-%COMP%]   [tuiWrapper][data-mode=onDark][_ngcontent-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{color:var(--tui-text-02-night)}[data-size=s][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=m][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 .75rem}[data-size=l][_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{padding:0 1rem}._label-outside[_nghost-%COMP%]   .t-placeholder[_ngcontent-%COMP%]{overflow:initial;height:auto;white-space:initial}.t-icons[_ngcontent-%COMP%]{position:absolute;top:0;left:0;bottom:0;right:0;display:flex;justify-content:flex-end;pointer-events:none;padding:calc((var(--tui-height) - 1.5rem) / 2) 1rem}[data-size=m][_nghost-%COMP%]   .t-icons[_ngcontent-%COMP%]{padding:calc((var(--tui-height) - 1.5rem) / 2) .625rem}.t-icons[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){-webkit-margin-start:.25rem;margin-inline-start:.25rem}.t-icon[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none}.t-icon_left[_ngcontent-%COMP%]{-webkit-margin-end:auto;margin-inline-end:auto}.t-cleaner[_ngcontent-%COMP%]{position:relative;display:flex;width:1.5rem;height:1.5rem;align-items:center;justify-content:center;box-sizing:border-box;cursor:pointer;pointer-events:none;pointer-events:auto}._readonly[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%], ._disabled[_nghost-%COMP%]   .t-cleaner[_ngcontent-%COMP%]{pointer-events:none}.t-caret[_ngcontent-%COMP%]{display:inline-block;height:1rem;width:0}.t-counter[_ngcontent-%COMP%]{position:absolute;right:.75rem;bottom:.5rem;font:var(--tui-font-text-s);pointer-events:none;margin-top:auto;text-align:right;color:var(--tui-text-03)}[data-mode=onDark][_nghost-%COMP%]   .t-counter[_ngcontent-%COMP%]{color:var(--tui-text-03-night)}"],changeDetection:0}),n})(),J=(()=>{class n extends w.Cm{onValueChange(e){this.host.onValueChange(e)}}return n.\u0275fac=(()=>{let i;return function(o){return(i||(i=t.otF(n)))(o||n)}})(),n.\u0275dir=t.Sc5({type:n,selectors:[["tui-textarea"]],features:[t.M5G([(0,M.iu)(n)]),t.eg9]}),n})(),Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[[d.MD,c.y,_.C,h.M9,C.a,O.g,m.Yt,u.KA,v.Ux]]}),n})()}}]);