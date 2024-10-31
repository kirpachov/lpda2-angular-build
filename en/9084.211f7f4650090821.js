"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9084],{964:(F,M,s)=>{s.d(M,{Ez:()=>g,In:()=>f,Q1:()=>T,QX:()=>C,Qx:()=>_,_0:()=>D,ay:()=>I,e6:()=>e,yc:()=>O});var m=s(400);const e=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;function _(o,l){return new Date(`${o.formattedYear}-${o.formattedMonthPart}-${o.formattedDayPart} ${l.toString()}`).toISOString()}function I(o){if(!("string"==typeof o&&o.length>0&&o.match(e)))return console.error("Invalid string provided to isoStringToTuiDay",{isoString:o}),null;const l=new Date(o);return new m.EK(l.getFullYear(),l.getMonth()+1,l.getDate())}function O(o){if("string"==typeof o&&o.length>0&&o.match(/^\d{4}-\d{1,2}-\d{1,2}\s{1}00:00$/)&&(o=o.split(" ")[0]),!("string"==typeof o&&o.length>0&&o.match(/^\d{4}-\d{1,2}-\d{1,2}$/)))return console.error("Invalid string provided to stringToTuiDay. Expected format YYYY-MM-DD, got",{str:o}),null;const{day:l,month:d,year:c}=m.EK.parseRawDateString(o,"YMD");return new m.EK(c,d,l)}function C(o){if(!("string"==typeof o&&o.length>0&&o.match(e)))return console.error("Invalid string provided to isoStringToTuiTime",{isoString:o}),null;const l=new Date(o);return new m.uc(l.getHours(),l.getMinutes())}function g(o){return new Date(`1970-01-01 ${o.toString()}`).toISOString()}function f(o){return function y(o){const l=new Date(`1970-01-01 ${o}`);return`${`${l.getUTCHours()}`.padStart(2,"0")}:${`${l.getUTCMinutes()}`.padStart(2,"0")}`}(o.toString())}function D(o){return new m.EK(o.getFullYear(),o.getMonth(),o.getDate())}function T(o){return new m.uc(o.getHours(),o.getMinutes())}},2740:(F,M,s)=>{s.d(M,{IZ:()=>nt,gt:()=>it,iw:()=>et});var m=s(1316),e=s(4496),_=s(6504),I=s(6572),O=s(2528),C=s(3480),P=s(1800),g=s(4392),y=s(4164),f=s(400),D=s(8987),T=s(4680),o=s(9392),l=s(466),d=s(7936),c=s(4336),E=s(3656),h=s(8048),A=s(4108),p=s(5944),U=s(9371),S=s(5384),H=s(796),V=s(3012),G=s(3120),$=s(4704),k=s(3616),N=s(812),v=s(1368),K=s(5900),B=s(5620),L=s(1040);const Y=["tuiTime",""];function x(n,u){1&n&&e.wR5(0,"option",3),2&n&&e._6D("value",u.$implicit)}function z(n,u){if(1&n&&(e.I0R(0,"datalist",1),e.yuY(1,x,1,1,"option",2),e.C$Y()),2&n){const t=e.GaO();e.E7m("id",t.autoIdString),e.yG2(),e.E7m("ngForOf",t.items)}}function b(n,u){if(1&n&&(e.I0R(0,"button",7),e.OEk(1),e.C$Y()),2&n){const t=u.$implicit,i=e.GaO(2);e.E7m("disabled",i.disabledItemHandler(t))("value",t),e.yG2(),e.oRS(" ",t," ")}}function j(n,u){if(1&n&&(e.I0R(0,"tui-data-list",5),e.yuY(1,b,2,3,"button",6),e.C$Y()),2&n){const t=e.GaO();e.E7m("size",t.itemSize),e.yG2(),e.E7m("ngForOf",t.filtered)}}function X(n,u){1&n&&e.wR5(0,"tui-svg",10),2&n&&e.E7m("src",u.polymorpheusOutlet)}function Q(n,u){1&n&&e.wR5(0,"input",11)}const Z=n=>({$implicit:n});function J(n,u){if(1&n&&e.yuY(0,X,1,1,"tui-svg",8)(1,Q,1,0,"input",9),2&n){const t=e.GaO();e.E7m("polymorpheusOutlet",t.icon)("polymorpheusOutletContext",e.S45(3,Z,t.size)),e.yG2(),e.E7m("ngIf",t.showNativePicker)}}const q=["*"],w=(0,O.AL)({icon:({$implicit:n})=>"s"===n?"tuiIconClock":"tuiIconClockLarge",mode:"HH:MM",postfix:"",maxValues:N.w3,itemSize:"m",nativePicker:!1});let tt=(()=>{class n{constructor(t,i){this.host=t,this.autoIdString=i.generate()}get items(){return this.host.items.map(t=>t.toString(this.host.mode))}get value(){return this.host.value.length===this.host.mode.length?this.host.value:""}get step(){switch(this.host.mode){case"HH:MM:SS":return 1;case"HH:MM:SS.MSS":return.001;default:return 60}}onChange(t){this.host.onValueChange(t)}}return n.\u0275fac=function(t){return new(t||n)(e.GI1(p.Mn),e.GI1(C.y2))},n.\u0275cmp=e.In1({type:n,selectors:[["input","tuiTime",""]],hostAttrs:["type","time"],hostVars:4,hostBindings:function(t,i){1&t&&e.qCj("change.stop",function(r){return i.onChange(r.target.value)})("click.stop.silent",function(){return 0})("mousedown.stop.silent",function(){return 0}),2&t&&(e.SoX("tabIndex",-1)("value",i.value)("step",i.step),e.e48("list",i.autoIdString))},attrs:Y,decls:1,vars:1,consts:[[3,"id",4,"ngIf"],[3,"id"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,i){1&t&&e.yuY(0,z,2,2,"datalist",0),2&t&&e.E7m("ngIf",i.items.length)},dependencies:[v.u_,v.ay],styles:["[_nghost-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;pointer-events:auto;font-size:2rem}"],changeDetection:0}),n})(),et=(()=>{class n extends P.GG{constructor(t,i,a,r,R,ot,st){super(t,i),this.timeTexts$=a,this.options=r,this.isMobile=R,this.isIos=ot,this.textfieldSize=st,this.disabledItemHandler=g.so,this.items=[],this.itemSize=this.options.itemSize,this.strict=!1,this.mode=this.options.mode,this.postfix=this.options.postfix,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){var t,i;return null!==(i=null===(t=this.textfield)||void 0===t?void 0:t.nativeFocusableElement)&&void 0!==i?i:null}get focused(){return(0,y.ER)(this.nativeFocusableElement)}get canOpen(){return this.interactive&&!!this.filtered.length}get filtered(){return this.filter(this.items,this.mode,this.computedSearch)}get showNativePicker(){return this.nativePicker&&(!this.isIos||"HH:MM"===this.mode&&!this.items.length)}get nativeDatalist(){return this.nativePicker&&!this.isIos}get maskOptions(){return this.calculateMask(this.mode)}get computedValue(){return this.value?this.value.toString(this.mode):this.nativeValue}get computedSearch(){return this.computedValue.length!==this.mode.length?this.computedValue:""}get innerPseudoFocused(){return!1!==this.pseudoFocus&&(!!(this.open&&this.canOpen||this.computedFocused)||null)}get icon(){return this.options.icon}get nativeValue(){var t;return(null===(t=this.nativeFocusableElement)||void 0===t?void 0:t.value)||""}set nativeValue(t){this.nativeFocusableElement&&(this.nativeFocusableElement.value=t)}getFiller$(t){return this.timeTexts$.pipe((0,$.k)(i=>i[t]))}onClick(){this.open=!this.open}onValueChange(t){this.open=!!this.items.length,this.control&&this.control.updateValueAndValidity({emitEvent:!1});const i=this.getMatch(t);if(void 0!==i)return void(this.value=i);if(t.length!==this.mode.length)return void(this.value=null);const a=f.uc.fromString(t);this.value=this.strict?this.findNearestTimeFromItems(a):a}onFocused(t){this.updateFocused(t),!t&&null===this.value&&""!==this.nativeValue&&"HH:MM"!==this.mode&&(this.value=f.uc.fromString(this.nativeValue),(0,G.k)(0).pipe((0,k.a)(this.destroy$)).subscribe(()=>{(this.nativeValue.endsWith(".")||this.nativeValue.endsWith(":"))&&(this.nativeValue=this.nativeValue.slice(0,-1))}))}onArrowUp(t){this.items.length||this.processArrow(t,1)}onArrowDown(t){this.items.length||this.processArrow(t,-1)}handleOption(t){this.focusInput(),this.value=t}onOpen(t){this.open=t}writeValue(t){super.writeValue(t),this.nativeValue=t?this.computedValue:""}get nativePicker(){return!!this.options.nativePicker&&this.isMobile}calculateMask(t){const{HH:i,MM:a,SS:r,MS:R}=this.options.maxValues;return(0,I.ee)({mode:t,timeSegmentMaxValues:{hours:i,minutes:a,seconds:r,milliseconds:R}})}filter(t,i,a){return t.filter(r=>r.toString(i).includes(a))}findNearestTimeFromItems(t){return this.items.reduce((i,a)=>Math.abs(a.valueOf()-t.valueOf())<Math.abs(i.valueOf()-t.valueOf())?a:i,new f.uc(0,0))}getMatch(t){return this.items.find(i=>(0,g.yG)(i,t))}close(){this.open=!1}processArrow(t,i){const{target:a}=t;if(this.readOnly||!(0,D.CK)(a)||!(0,D.kZ)(a))return;const r=a.selectionStart||0;this.shiftTime(this.calculateShift(r,i)),a.setSelectionRange(r,r),t.preventDefault()}calculateShift(t,i){return t<=2?{hours:i}:t<=5?{minutes:i}:t<=8?{seconds:i}:{ms:i}}shiftTime(t){if(null===this.value)return;const i=this.value.shift(t);this.nativeValue=i.toString(this.mode),this.value=i}focusInput(t=!1){this.nativeFocusableElement&&(this.nativeFocusableElement.focus({preventScroll:t}),this.close())}}return n.\u0275fac=function(t){return new(t||n)(e.GI1(_.eq,10),e.GI1(e.kD9),e.GI1(V.Ul),e.GI1(w),e.GI1(T.Mv),e.GI1(T.kh),e.GI1(h.$K))},n.\u0275cmp=e.In1({type:n,selectors:[["tui-input-time"]],viewQuery:function(t,i){if(1&t&&e.CC$(d.y_,5),2&t){let a;e.wto(a=e.Gqi())&&(i.textfield=a.first)}},hostVars:1,hostBindings:function(t,i){1&t&&e.qCj("click",function(){return i.onClick()}),2&t&&e.e48("data-size",i.size)},inputs:{disabledItemHandler:"disabledItemHandler",items:"items",itemSize:"itemSize",strict:"strict",mode:"mode",postfix:"postfix"},features:[e.M5G([(0,T.NK)(n),(0,P.q4)(n),(0,p.UH)(n),(0,p.YB)(S.E$)],[H.YL]),e.eg9],ngContentSelectors:q,decls:9,vars:18,consts:[[1,"t-wrapper",3,"canOpen","content","open","focusedChange","openChange"],["tuiValueAccessor","",1,"t-textfield",3,"disabled","focusable","invalid","maskito","nativeId","postfix","pseudoActive","pseudoFocus","pseudoHover","readOnly","tuiTextfieldFiller","tuiTextfieldIcon","value","keydown.arrowDown","keydown.arrowUp","valueChange"],["inputmode","numeric","tuiTextfield",""],["dropdownContent",""],["iconContent",""],["automation-id","tui-input-time__dropdown",3,"size"],["automation-id","tui-input-time__item","tuiOption","",3,"disabled","value",4,"ngFor","ngForOf"],["automation-id","tui-input-time__item","tuiOption","",3,"disabled","value"],["appearance","icon","tuiWrapper","",3,"src",4,"polymorpheusOutlet","polymorpheusOutletContext"],["tuiTime","",4,"ngIf"],["appearance","icon","tuiWrapper","",3,"src"],["tuiTime",""]],template:function(t,i){if(1&t&&(e.kPM(),e.I0R(0,"tui-hosted-dropdown",0),e.qCj("focusedChange",function(r){return i.onFocused(r)})("openChange",function(r){return i.onOpen(r)}),e.I0R(1,"tui-primitive-textfield",1),e.qCj("keydown.arrowDown",function(r){return i.onArrowDown(r)})("keydown.arrowUp",function(r){return i.onArrowUp(r)})("valueChange",function(r){return i.onValueChange(r)}),e.wVc(2,"async"),e._Xx(3),e.wR5(4,"input",2),e.C$Y()(),e.yuY(5,j,2,2,"ng-template",null,3,e.gJz)(7,J,2,5,"ng-template",null,4,e.gJz)),2&t){const a=e.Gew(6),r=e.Gew(8);e.E7m("canOpen",i.canOpen&&!i.nativeDatalist)("content",a)("open",i.canOpen&&i.open),e.yG2(),e.E7m("disabled",i.disabled)("focusable",i.focusable)("invalid",i.computedInvalid)("maskito",i.maskOptions)("nativeId",i.nativeId)("postfix",i.postfix)("pseudoActive",i.pseudoActive)("pseudoFocus",i.innerPseudoFocused)("pseudoHover",i.pseudoHover)("readOnly",i.readOnly)("tuiTextfieldFiller",e.kDX(2,16,i.getFiller$(i.mode))||"")("tuiTextfieldIcon",r)("value",i.computedValue)}},dependencies:[l.Qw,d.y_,d.b,c.yi,c.sP,E.Wu,tt,d.KQ,K.a,B.sD,h.Gk,h.uU,v.ay,L.Af,A.S,v.u_,v.a],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),(0,m.UN)([o.w7],n.prototype,"getFiller$",null),(0,m.UN)([o.w7],n.prototype,"calculateMask",null),(0,m.UN)([o.w7],n.prototype,"filter",null),n})(),it=(()=>{class n extends U.Cm{get value(){return this.host.computedValue}get mode(){return this.host.mode}get items(){return this.host.items}onValueChange(t){t||(this.host.nativeValue=""),this.host.onValueChange(t)}process(t){t.inputMode="numeric"}}return n.\u0275fac=(()=>{let u;return function(i){return(u||(u=e.otF(n)))(i||n)}})(),n.\u0275dir=e.Sc5({type:n,selectors:[["tui-input-time"]],features:[e.M5G([(0,p.iu)(n)]),e.eg9]}),n})(),nt=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({imports:[[v.MD,B.S,S.YB,c.A$,A.g,l.GE,d.KA,K.i,h.aS,E.Yt,L.Ux]]}),n})()},812:(F,M,s)=>{s.d(M,{m2:()=>T,mU:()=>g,qS:()=>I,w3:()=>o}),s(4392);var e=s(2528);s(3840);const I={DMY:"dd/mm/yyyy",MDY:"mm/dd/yyyy",YMD:"yyyy/mm/dd"},g=/\([#]+\)|[#\- ]/g,T=(d,c,E,h)=>{if(!c?.isSingleDay||!E)return d;const A=(0,e.Kw)(Object.entries(E).map(([U,S])=>[U,-S])),p=c.from.append(h?A:E).append({day:h?1:-1});return h?p.dayBefore(d)?d:p:d&&p.dayAfter(d)?d:p},o={HH:23,MM:59,SS:59,MS:999}}}]);