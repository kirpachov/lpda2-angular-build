"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4e3],{6380:(lt,x,o)=>{o.d(x,{Ml:()=>w,iO:()=>q,yc:()=>Z});var y=o(1316),e=o(4496),A=o(6504),G=o(4532),K=o(6572),p=o(6732),h=o(1200),l=o(400),v=o(1800),k=o(4392),B=o(2528),g=o(4680),R=o(9392),D=o(466),r=o(7936),C=o(3656),f=o(1673),M=o(1512),d=o(5488),E=o(4108),I=o(5944),L=o(3840),W=o(8016),U=o(9371),F=o(812),_=o(3012),c=o(1040),H=o(4704),b=o(3616),O=o(5900),T=o(5620),m=o(1368);function S(n,s){if(1&n){const t=e.KQA();e.I0R(0,"tui-primitive-textfield",5),e.qCj("focusedChange",function(a){e.usT(t);const u=e.GaO();return e.CGJ(u.onFocused(a))})("valueChange",function(a){e.usT(t);const u=e.GaO();return e.CGJ(u.onValueChange(a))}),e._Xx(1),e._Xx(2,1,["ngProjectAs","input",5,["input"]]),e.C$Y()}if(2&n){const t=s.tuiLet,i=e.GaO(),a=e.Gew(4);e.E7m("disabled",i.computedDisabled)("focusable",i.computedFocusable)("invalid",i.computedInvalid)("maskito",i.computedMask)("nativeId",i.nativeId)("pseudoFocus",i.pseudoFocus)("pseudoHover",i.pseudoHover)("readOnly",i.readOnly)("tuiTextfieldFiller",i.getComputedFiller(t||""))("tuiTextfieldIcon",i.calendarIcon&&a)("value",i.computedValue)}}function V(n,s){if(1&n){const t=e.KQA();e.I0R(0,"tui-svg",8),e.qCj("click",function(){e.usT(t);const a=e.GaO(2);return e.CGJ(a.onIconClick())}),e.C$Y()}if(2&n){const t=s.polymorpheusOutlet,i=e.GaO(2);e.eAK("t-icon",!i.computedDisabled),e.E7m("src",t)}}function Y(n,s){1&n&&e.wR5(0,"input",9)}const j=n=>({$implicit:n});function z(n,s){if(1&n&&e.yuY(0,V,1,3,"tui-svg",6)(1,Y,1,0,"input",7),2&n){const t=e.GaO();e.E7m("polymorpheusOutlet",t.calendarIcon)("polymorpheusOutletContext",e.S45(3,j,t.size)),e.yG2(),e.E7m("ngIf",t.isMobile&&t.nativePicker)}}function N(n,s){if(1&n){const t=e.KQA();e.I0R(0,"div",12)(1,"button",13),e.qCj("click",function(){e.usT(t);const a=e.GaO(2);return e.CGJ(a.onDayClick(a.items[0].day))}),e.OEk(2),e.C$Y()()}if(2&n){const t=e.GaO(2);e.yG2(2),e.oRS(" ",t.items[0]," ")}}function $(n,s){if(1&n){const t=e.KQA();e.I0R(0,"tui-calendar",10),e.qCj("dayClick",function(a){e.usT(t);const u=e.GaO();return e.CGJ(u.onDayClick(a))})("monthChange",function(a){e.usT(t);const u=e.GaO();return e.CGJ(u.onMonthChange(a))}),e.C$Y(),e.yuY(1,N,3,1,"div",11)}if(2&n){const t=e.GaO();e.E7m("disabledItemHandler",t.disabledItemHandler)("markerHandler",t.markerHandler)("max",t.computedMax)("min",t.computedMin)("month",t.computedActiveYearMonth)("value",t.value),e.yG2(),e.E7m("ngIf",1===t.items.length)}}const J=["*",[["input"]]],Q=["*","input"];let X=(()=>{class n{constructor(t,i){this.host=t,this.dateFormat=i}get value(){return this.host.value.length===l.wj?l.EK.normalizeParse(this.host.value,this.dateFormat).toString("YMD","-"):""}get max(){return this.host.max.toJSON()}get min(){return this.host.min.toJSON()}onChange(t){this.host.onValueChange(t?l.EK.normalizeParse(t,"YMD").toString(this.dateFormat):"")}}return n.\u0275fac=function(t){return new(t||n)(e.GI1(I.Mn),e.GI1(l.E7))},n.\u0275dir=e.Sc5({type:n,selectors:[["input","tuiDate",""]],hostAttrs:["type","date"],hostVars:4,hostBindings:function(t,i){1&t&&e.qCj("change",function(u){return i.onChange(u.target.value)})("click.stop.silent",function(){return 0})("input.stop.silent",function(){return 0})("mousedown.stop.silent",function(){return 0}),2&t&&e.SoX("tabIndex",-1)("value",i.value)("max",i.max)("min",i.min)}}),n})(),Z=(()=>{class n extends v.GG{constructor(t,i,a,u,tt,et,it,nt,at,P,ot,st){super(t,i,P),this.injector=a,this.isMobile=u,this.dialogs=tt,this.mobileCalendar=et,this.dateFormat=it,this.dateSeparator=nt,this.dateTexts$=at,this.valueTransformer=P,this.options=ot,this.textfieldSize=st,this.month=null,this.min=this.options.min,this.max=this.options.max,this.disabledItemHandler=k.so,this.markerHandler=L.SE,this.items=[],this.defaultActiveYearMonth=l.Ci.currentLocal(),this.open=!1,this.filler$=this.dateTexts$.pipe((0,H.k)(ut=>(0,l.eI)(ut[this.dateFormat],this.dateSeparator)))}get size(){return this.textfieldSize.size}get computedMin(){var t;return null!==(t=this.min)&&void 0!==t?t:this.options.min}get computedMax(){var t;return null!==(t=this.max)&&void 0!==t?t:this.options.max}get nativeFocusableElement(){var t,i;return null!==(i=null===(t=this.textfield)||void 0===t?void 0:t.nativeFocusableElement)&&void 0!==i?i:null}get focused(){var t;return!(null===(t=this.textfield)||void 0===t||!t.focused)}get computedMobile(){return this.isMobile&&(!!this.mobileCalendar||this.nativePicker)}get nativePicker(){return this.options.nativePicker}get calendarIcon(){return this.options.icon}get computedValue(){const{value:t,nativeValue:i,activeItem:a}=this;return a?String(a):t?t.toString(this.dateFormat,this.dateSeparator):i}get computedActiveYearMonth(){return this.items[0]&&this.value&&this.value.daySame(this.items[0].day)?this.items[0].displayDay:this.month||this.value||(0,l.wx)(this.defaultActiveYearMonth,this.computedMin,this.computedMax)}get nativeValue(){var t;return(null===(t=this.nativeFocusableElement)||void 0===t?void 0:t.value)||""}set nativeValue(t){this.nativeFocusableElement&&(this.nativeFocusableElement.value=t)}get canOpen(){return this.interactive&&!this.computedMobile}get computedMask(){return this.activeItem?G.Se:this.computeMaskOptions(this.dateFormat,this.dateSeparator,this.computedMin,this.computedMax)}get activeItem(){const{value:t}=this;return t&&this.items.find(i=>i.day.daySame(t))||null}onClick(){this.isMobile||(this.open=!this.open)}getComputedFiller(t){return this.activeItem?"":t}onMobileClick(){this.onIconClick()}onIconClick(){!this.computedMobile||!this.mobileCalendar||this.dialogs.open(new c.WO(this.mobileCalendar,this.injector),{size:"fullscreen",closeable:!1,data:{single:!0,min:this.min,max:this.max,disabledItemHandler:this.disabledItemHandler}}).pipe((0,b.a)(this.destroy$)).subscribe(t=>{this.value=t})}onValueChange(t){this.control&&this.control.updateValueAndValidity({emitEvent:!1}),t||this.onOpenChange(!0),this.value=t.length!==l.wj?null:l.EK.normalizeParse(t,this.dateFormat)}onDayClick(t){this.value=t,this.open=!1}onMonthChange(t){this.month=t}onOpenChange(t){this.open=t}onFocused(t){this.updateFocused(t)}setDisabledState(){super.setDisabledState(),this.open=!1}writeValue(t){super.writeValue(t),this.nativeValue=t?this.computedValue:""}valueIdenticalComparator(t,i){return(0,B.K2)(t,i,(a,u)=>a.daySame(u))}computeMaskOptions(t,i,a,u){return(0,K.kz)({separator:i,mode:F.qS[t],min:a.toLocalNativeDate(),max:u.toLocalNativeDate()})}}return n.\u0275fac=function(t){return new(t||n)(e.GI1(A.eq,10),e.GI1(e.kD9),e.GI1(e.zZn),e.GI1(g.Mv),e.GI1(W._k),e.GI1(_.gR,8),e.GI1(l.E7),e.GI1(l._Q),e.GI1(_.CY),e.GI1(_.El,8),e.GI1(_.E5),e.GI1(d.$K))},n.\u0275cmp=e.In1({type:n,selectors:[["tui-input-date"]],viewQuery:function(t,i){if(1&t&&e.CC$(r.y_,5),2&t){let a;e.wto(a=e.Gqi())&&(i.textfield=a.first)}},hostVars:1,hostBindings:function(t,i){1&t&&e.qCj("click",function(){return i.onClick()}),2&t&&e.e48("data-size",i.size)},inputs:{min:"min",max:"max",disabledItemHandler:"disabledItemHandler",markerHandler:"markerHandler",items:"items",defaultActiveYearMonth:"defaultActiveYearMonth"},features:[e.M5G([(0,g.NK)(n),(0,v.q4)(n),(0,_.Eh)(_.El)]),e.eg9],ngContentSelectors:Q,decls:7,vars:7,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange"],["automation-id","tui-input-date-range__textfield","tuiValueAccessor","","class","t-textfield",3,"disabled","focusable","invalid","maskito","nativeId","pseudoFocus","pseudoHover","readOnly","tuiTextfieldFiller","tuiTextfieldIcon","value","focusedChange","valueChange",4,"tuiLet"],["iconContent",""],[3,"polymorpheus"],["dropdown","polymorpheus"],["automation-id","tui-input-date-range__textfield","tuiValueAccessor","",1,"t-textfield",3,"disabled","focusable","invalid","maskito","nativeId","pseudoFocus","pseudoHover","readOnly","tuiTextfieldFiller","tuiTextfieldIcon","value","focusedChange","valueChange"],["appearance","icon","automation-id","tui-input-date-range__icon","tuiWrapper","",3,"t-icon","src","click",4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiDate","","class","t-native-input",4,"ngIf"],["appearance","icon","automation-id","tui-input-date-range__icon","tuiWrapper","",3,"src","click"],["tuiDate","",1,"t-native-input"],["automation-id","tui-input-date__calendar","tuiPreventDefault","mousedown",3,"disabledItemHandler","markerHandler","max","min","month","value","dayClick","monthChange"],["tuiPreventDefault","mousedown","class","t-button",4,"ngIf"],["tuiPreventDefault","mousedown",1,"t-button"],["tuiLink","","type","button",3,"click"]],template:function(t,i){if(1&t&&(e.kPM(J),e.I0R(0,"tui-hosted-dropdown",0),e.qCj("openChange",function(u){return i.onOpenChange(u)}),e.yuY(1,S,3,11,"tui-primitive-textfield",1),e.wVc(2,"async"),e.yuY(3,z,2,5,"ng-template",null,2,e.gJz)(5,$,2,7,"ng-template",3,4,e.gJz),e.C$Y()),2&t){const a=e.Gew(6);e.E7m("canOpen",i.canOpen)("content",a)("open",i.open&&i.canOpen),e.yG2(),e.E7m("tuiLet",e.kDX(2,5,i.filler$)),e.yG2(4),e.E7m("polymorpheus",i.type)}},dependencies:[D.Qw,r.y_,C.Wu,f.I,M.C,p.ew,r.KQ,O.a,T.sD,d.Gk,d.uU,c.Af,E.S,m.u_,X,c.sv,h.A,m.a],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}.t-icon[_ngcontent-%COMP%]{pointer-events:auto}.t-button[_ngcontent-%COMP%]{display:flex;height:2.75rem;justify-content:center;box-shadow:inset 0 1px var(--tui-base-03)}.t-button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1;text-align:center}.t-native-input[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:auto;font-size:2rem}"],changeDetection:0}),(0,y.UN)([R.w7],n.prototype,"computeMaskOptions",null),n})(),w=(()=>{class n extends U.Cm{get value(){return this.host.computedValue}get max(){return this.host.computedMax}get min(){return this.host.computedMin}onValueChange(t){t||(this.host.nativeValue=""),this.host.onValueChange(t)}process(t){t.inputMode="numeric"}}return n.\u0275fac=(()=>{let s;return function(i){return(s||(s=e.otF(n)))(i||n)}})(),n.\u0275dir=e.Sc5({type:n,selectors:[["tui-input-date"]],features:[e.M5G([(0,I.iu)(n)]),e.eg9]}),n})(),q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({imports:[[m.MD,T.S,c.Ux,E.g,h.m,f.y,C.Yt,M.w,D.GE,r.KA,O.i,p.kR,d.aS]]}),n})()}}]);