"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[5760],{7924:(y,f,r)=>{r.d(f,{W:()=>M});var t=r(4496),d=r(6504),_=r(3480),m=r(5e3),l=r(8048),p=r(5193),g=r(6052),E=r(5188),h=r(2516),C=r(4336),O=r(7936);function T(e,o){1&e&&(t.OEk(0),t.wVc(1,"weekday")),2&e&&t.cNF(t.kDX(1,1,o.$implicit))}const s=()=>[0,1,2,3,4,5,6];function D(e,o){if(1&e&&t.wR5(0,"tui-data-list-wrapper",5),2&e){t.GaO();const i=t.Gew(1);t.E7m("items",t.q4q(2,s))("itemContent",i)}}let M=(()=>{class e{constructor(){this.control=new d.Ku(null,[d.AQ.min(0),d.AQ.max(6)]),this.initialAutofocus=(0,t.OCB)(!1),this.dropdownOpen=(0,t.OCB)(!1),this.showCleaner=!0}set autofocus(i){this.initialAutofocus.set(!0===i),this.dropdownOpen.set(!0===i)}ngOnChanges(){this.control.valueChanges.subscribe({next:i=>{i&&this.dropdownOpen.set(!1)}})}writeValue(i){let n=null;n="number"==typeof i?i:"string"==typeof i?Number(i):null,this.control.setValue(n)}registerOnChange(i){this.control.valueChanges.subscribe({next:n=>i(n)})}registerOnTouched(i){this.control.valueChanges.subscribe({next:n=>i(n)})}setDisabledState(i){i?this.control.disable():this.control.enable()}static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-weekday-select"]],inputs:{showCleaner:"showCleaner",autofocus:"autofocus"},standalone:!0,features:[t.M5G([_.UF,{provide:d.Y6,useExisting:e,multi:!0}]),t.SYr,t.UHJ],decls:7,vars:5,consts:()=>{let i;return i="Giorno della settimana",[["selectItem",""],[3,"tuiAutoFocus","tuiDropdownOpen","valueContent","tuiTextfieldCleaner","formControl","tuiDropdownOpenChange"],i,["tuiTextfield",""],[3,"items","itemContent",4,"tuiDataList"],[3,"items","itemContent"]]},template:function(n,a){if(1&n&&(t.yuY(0,T,2,3,"ng-template",null,0,t.gJz),t.I0R(2,"tui-select",1),t.qCj("tuiDropdownOpenChange",function(c){return a.dropdownOpen.set(c)}),t.SAx(3),t.aS0(4,2),t.k70(),t.wR5(5,"input",3),t.yuY(6,D,1,3,"tui-data-list-wrapper",4),t.C$Y()),2&n){const u=t.Gew(1);t.yG2(2),t.E7m("tuiAutoFocus",a.initialAutofocus())("tuiDropdownOpen",a.dropdownOpen())("valueContent",u)("tuiTextfieldCleaner",a.showCleaner)("formControl",a.control)}},dependencies:[g.q8,g.OO,C.Ux,l.aS,l.es,E.my,E.cP,E.uO,O.b,d.sl,d.ue,d.ug,h.G,m.m6,m.gJ,p.ms,p.oL],encapsulation:2})}return e})()},964:(y,f,r)=>{r.d(f,{Ez:()=>h,In:()=>s,Q1:()=>M,Q9:()=>T,QX:()=>g,Qx:()=>_,_0:()=>D,ay:()=>m,cr:()=>p,e6:()=>d,yc:()=>l});var t=r(400);const d=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;function _(e,o){return new Date(`${e.formattedYear}-${e.formattedMonthPart}-${e.formattedDayPart} ${o.toString()}`).toISOString()}function m(e){if(!("string"==typeof e&&e.length>0&&e.match(d)))return console.error("Invalid string provided to isoStringToTuiDay",{isoString:e}),null;const o=new Date(e);return new t.EK(o.getFullYear(),o.getMonth()+1,o.getDate())}function l(e){if("string"==typeof e&&e.length>0&&e.match(/^\d{4}-\d{1,2}-\d{1,2}\s{1}\d{1,2}:\d{1,2}$/)&&(e=e.split(" ")[0]),!("string"==typeof e&&e.length>0&&e.match(/^\d{4}-\d{1,2}-\d{1,2}$/)))return console.error("Invalid string provided to stringToTuiDay. Expected format YYYY-MM-DD, got",{str:e}),null;const{day:o,month:i,year:n}=t.EK.parseRawDateString(e,"YMD");return new t.EK(n,i,o)}function p(e){if("string"==typeof e&&e.length>0&&e.match(/^\d{4}-\d{1,2}-\d{1,2}\s{1}\d{1,2}:\d{1,2}$/)&&(e=e.split(" ")[1]),!("string"==typeof e&&e.length>0&&e.match(/^\d{1,2}:\d{1,2}$/)))return console.error("Invalid string provided to stringToTuiDay. Expected format HH:mm, got",{str:e}),null;const[o,i]=e.split(":").map(n=>Number(n));return"number"==typeof o&&o>=0&&o<=23?"number"==typeof i&&i>=0&&i<60?new t.uc(o,i):(console.error("error while parsing time in stringToTuiTime. minutes are invalid",{minutes:i}),null):(console.error("error while parsing time in stringToTuiTime. hours is invalid ",{hours:o}),null)}function g(e){if(!("string"==typeof e&&e.length>0&&e.match(d)))return console.error("Invalid string provided to isoStringToTuiTime",{isoString:e}),null;const o=new Date(e);return new t.uc(o.getHours(),o.getMinutes())}function h(e){return new Date(`1970-01-01 ${e.toString()}`).toISOString()}function T(e){const o=new Date(`${e}Z`);return`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")} ${String(o.getHours()).padStart(2,"0")}:${String(o.getMinutes()).padStart(2,"0")}`}function s(e){return function C(e){const o=new Date(`1970-01-01 ${e}`);return`${`${o.getUTCHours()}`.padStart(2,"0")}:${`${o.getUTCMinutes()}`.padStart(2,"0")}`}(e.toString())}function D(e){return new t.EK(e.getFullYear(),e.getMonth(),e.getDate())}function M(e){return new t.uc(e.getHours(),e.getMinutes())}},2516:(y,f,r)=>{r.d(f,{G:()=>d});var t=r(4496);let d=(()=>{class _{constructor(){this.weekdays=["Domenica","Luned\xEC","Marted\xEC","Mercoled\xEC","Gioved\xEC","Venerd\xEC","Sabato"]}transform(l){return"number"!=typeof l&&"string"==typeof l&&(l=parseInt(l)),"number"==typeof l&&l>=0&&l<=6?this.weekdays[l]:null}static#t=this.\u0275fac=function(p){return new(p||_)};static#e=this.\u0275pipe=t.UTH({name:"weekday",type:_,pure:!0,standalone:!0})}return _})()},9880:(y,f,r)=>{r.d(f,{kP:()=>T,kh:()=>e,st:()=>M});var t=r(4496),d=r(3480),_=r(4392),m=r(3120),l=r(3616),p=r(7692),g=r(1368);const E=["wrapper"];function h(o,i){if(1&o&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&o){const n=t.GaO(2);t.E7m("overlay",!0)("showLoader",n.loading),t.yG2(),t.E7m("ngTemplateOutlet",n.content)}}function C(o,i){if(1&o&&(t.SAx(0),t._Xx(1),t.yuY(2,h,2,3,"tui-loader",3),t.k70()),2&o){const n=t.GaO();t.yG2(2),t.E7m("ngIf",n.async)("ngIfElse",n.content)}}const O=["*"];let T=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiExpandContent",""]]}),o})();let M=(()=>{class o{constructor(n,a){this.cdr=n,this.destroy$=a,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(n){if(null!==this.expanded)return 0!==this.state?(this.expanded=n,void(this.state=3)):(this.expanded=n,void this.retrigger(this.async&&n?1:3));this.expanded=n}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:n,state:a,contentWrapper:u}=this;return n&&2===a||!n&&3===a?0:u&&(!n&&2===a||n&&3===a)?u.nativeElement.offsetHeight:u&&n&&1===a?Math.max(u.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:n}){"opacity"===n&&3===this.state&&(this.state=0)}onExpandLoaded(n){n.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(n){this.state=2,(0,m.k)(0).pipe((0,l.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=n,this.cdr.markForCheck())})}}return o.\u0275fac=function(n){return new(n||o)(t.GI1(t.kD9),t.GI1(d.UF,2))},o.\u0275cmp=t.In1({type:o,selectors:[["tui-expand"]],contentQueries:function(n,a,u){if(1&n&&t.szK(u,T,5,t.Yw2),2&n){let c;t.wto(c=t.Gqi())&&(a.content=c.first)}},viewQuery:function(n,a){if(1&n&&t.CC$(E,5),2&n){let u;t.wto(u=t.Gqi())&&(a.contentWrapper=u.first)}},hostVars:9,hostBindings:function(n,a){1&n&&t.qCj("transitionend.self",function(c){return a.onTransitionEnd(c)})("tui-expand-loaded",function(c){return a.onExpandLoaded(c)}),2&n&&(t.e48("aria-expanded",a.expanded),t.m4B("height",a.height,"px"),t.eAK("_expanded",a.expanded)("_overflow",a.overflow)("_loading",a.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([d.UF])],ngContentSelectors:O,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(n,a){1&n&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,C,3,2,"ng-container",2),t.C$Y()),2&n&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",a.overflow),t.yG2(2),t.E7m("ngIf",a.contentVisible))},dependencies:[p.Cb,g.u_,g.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[_.cI]},changeDetection:0}),o})(),e=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[[g.MD,p.Sk]]}),o})()}}]);