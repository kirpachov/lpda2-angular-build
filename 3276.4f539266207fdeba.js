"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3276],{3276:(F,D,t)=>{t.r(D),t.d(D,{ConfirmDeleteModule:()=>x});var i=t(31236),m=t(7552),l=t(91368),e=t(54496),c=t(74872),n=t(6504),_=t(1560),g=t(94616),E=t(27692),f=t(58212),d=t(8048),M=t(81800),C=t(94164),b=t(74680),o=t(85944),p=t(11739),s=t(3972),r=t(81940);const T=["*"];let P=(()=>{class h extends M.GG{constructor(a,u,v,O){super(a,u),this.mode$=v,this.options=O,this.size=this.options.size}get focused(){return(0,C.ER)(this.nativeFocusableElement)}get nativeFocusableElement(){var a,u;return null!==(u=null===(a=this.checkbox)||void 0===a?void 0:a.nativeFocusableElement)&&void 0!==u?u:null}onFocused(a){this.updateFocused(a)}onModelChange(a){this.value=a}}return h.\u0275fac=function(a){return new(a||h)(e.GI1(n.eq,10),e.GI1(e.kD9),e.GI1(o.Yx),e.GI1(p.uU))},h.\u0275cmp=e.In1({type:h,selectors:[["tui-checkbox-labeled"]],viewQuery:function(a,u){if(1&a&&e.CC$(r.g,5),2&a){let v;e.wto(v=e.Gqi())&&(u.checkbox=v.first)}},hostVars:1,hostBindings:function(a,u){1&a&&e.qCj("$.data-mode.attr",function(){return u.mode$}),2&a&&e.e48("data-size",u.size)},inputs:{size:"size"},features:[e.M5G([(0,b.NK)(h),(0,M.q4)(h),s.Ir]),e.eg9],ngContentSelectors:T,decls:4,vars:12,consts:[[1,"t-wrapper"],[3,"disabled","focusable","nativeId","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","size","ngModel","ngModelChange","focusedChange"],[1,"t-content"]],template:function(a,u){1&a&&(e.kPM(),e.I0R(0,"label",0)(1,"tui-checkbox",1),e.iHE("ngModelChange",function(O){return e.kNx(u.value,O)||(u.value=O),O}),e.qCj("focusedChange",function(O){return u.onFocused(O)}),e.C$Y(),e.I0R(2,"div",2),e._Xx(3),e.C$Y()()),2&a&&(e.yG2(),e.E7m("disabled",u.computedDisabled)("focusable",u.focusable)("nativeId",u.nativeId)("pseudoActive",u.pseudoActive)("pseudoFocus",u.pseudoFocus)("pseudoHover",u.pseudoHover)("pseudoInvalid",u.computedInvalid)("readOnly",u.readOnly)("size",u.size),e.OKB("ngModel",u.value),e.yG2(),e.eAK("t-content_disabled",u.computedDisabled))},dependencies:[r.g,n.ue,n._G],styles:["[_nghost-%COMP%]{position:relative;display:block;line-height:0}._disabled[_nghost-%COMP%], ._readonly[_nghost-%COMP%]{pointer-events:none}.t-wrapper[_ngcontent-%COMP%]{display:inline-flex;max-width:100%;cursor:pointer}._disabled[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{cursor:default}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);line-height:1rem;word-wrap:break-word;min-width:0}.t-content_disabled[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[data-size=m][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{margin-left:.5rem}[data-size=l][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);margin-left:.75rem}"],changeDetection:0}),h})(),S=(()=>{class h{}return h.\u0275fac=function(a){return new(a||h)},h.\u0275mod=e.a4G({type:h}),h.\u0275inj=e.s3X({imports:[[l.MD,n.y,r.Q]]}),h})();var y=t(53797);function G(h,I){if(1&h){const a=e.KQA();e.I0R(0,"form",5),e.qCj("ngSubmit",function(){e.usT(a);const v=e.GaO();return e.CGJ(v.submit())}),e.I0R(1,"p",6),e.aS0(2,7),e.C$Y(),e.I0R(3,"div",6)(4,"tui-checkbox-labeled",8),e.aS0(5,9),e.C$Y()(),e.I0R(6,"div",6)(7,"p",10),e.Mff(8,11),e.wR5(9,"code",12),e.U7j(),e.C$Y(),e.I0R(10,"tui-input",13),e.OEk(11),e.C$Y(),e.I0R(12,"p",14),e.aS0(13,15),e.C$Y()(),e.I0R(14,"div",16)(15,"a",17),e.aS0(16,18),e.C$Y(),e.I0R(17,"button",19),e.aS0(18,20),e.C$Y()()()}if(2&h){const a=e.GaO();e.E7m("formGroup",a.form),e.yG2(9),e.oBb(a.user.email),e.Ylm(8),e.yG2(),e.E7m("tuiTextfieldLabelOutside",!0),e.yG2(),e.cNF(a.user.email),e.yG2(6),e.E7m("disabled",!a.form.valid)}}let N=(()=>{class h{constructor(){this.profile=(0,e.uUt)(g.x),this.destroyRef=(0,e.uUt)(e.eM9),this.router=(0,e.uUt)(i.E5),this.loading=!1,this.submitting=!1,this.form=new n.WC({confirm_data_removal:new n.Ku(!1,[n.AQ.requiredTrue]),email:new n.Ku(null,[n.AQ.required])})}ngOnInit(){this.form.valueChanges.pipe((0,c.ay)(this.destroyRef)).subscribe(a=>{this.user?.email===a.email?.toLowerCase()?.trim()?this.form.get("email")?.setErrors(null):this.form.get("email")?.setErrors({notMatches:!0})}),this.loading=!0,this.profile.load().pipe((0,c.ay)(this.destroyRef)).subscribe({next:a=>{this.loading=!1,this.user=a},error:()=>{this.loading=!1}})}submit(){this.form.invalid||(this.submitting=!0,this.profile.deleteProfile().subscribe({next:()=>{this.submitting=!1,this.router.navigate(["/"])},error:()=>{this.submitting=!1}}))}static#e=this.\u0275fac=function(u){return new(u||h)};static#t=this.\u0275cmp=e.In1({type:h,selectors:[["app-confirm-delete"]],standalone:!0,features:[e.UHJ],decls:7,vars:3,consts:()=>{let a,u,v,O,k,L,A;return a="Cancellazione",u=" La cancellazione dell'account \xE8 un'operazione irreversibile: ",v="\n           Sono consapevole che la cancellazione dell'account porter\xE0 alla\n          distruzione di tutti i dati associati al mio account \n        ",O="\n          Scrivi \n          " + "\ufffd#9\ufffd" + "\n          " + "\ufffd0\ufffd" + "\n          " + "\ufffd/#9\ufffd" + "\n           per confermare la cancellazione dell'account\n        ",k="Scrivi il tuo indirizzo email per confermare la cancellazione dell'account",L="Annulla",A="Conferma",[[3,"overlay","showLoader"],[1,"text-3xl","font-bold","uppercase","|","flex","items-center","|","border-b-2","border-b-slate-100","|","pb-4","mb-4","|","text-orange-600"],["inline","",1,"me-3"],a,[3,"formGroup"],[3,"formGroup","ngSubmit"],[1,"mb-3"],u,["formControlName","confirm_data_removal","size","l"],v,[1,"mb-1"],O,[1,"inline-block","px-2","bg-orange-100"],["formControlName","email",3,"tuiTextfieldLabelOutside"],[1,"form-text"],k,[1,"flex","flex-row","items-center","justify-between"],["tuiButton","","appearance","secondary-destructive","routerLink",".."],L,["tuiButton","","appearance","accent",3,"disabled"],A]},template:function(u,v){1&u&&(e.I0R(0,"tui-loader",0)(1,"h1",1)(2,"mat-icon",2),e.OEk(3,"delete_forever"),e.C$Y(),e.SAx(4),e.aS0(5,3),e.k70(),e.C$Y(),e.yuY(6,G,19,5,"form",4),e.C$Y()),2&u&&(e.E7m("overlay",!0)("showLoader",v.loading||v.submitting),e.yG2(6),e.C0Y(6,v.user?6:-1))},dependencies:[l.MD,_.oB,_.qL,E.Sk,E.Cb,S,P,n.sl,n.sz,n.ue,n.u,n.uW,n.Wo,i.qQ,i.ER,f.CI,f.Kw,y.CQ,y.Oo,y.cP,d.aS,d.E9]})}return h})(),x=(()=>{class h{static#e=this.\u0275fac=function(u){return new(u||h)};static#t=this.\u0275mod=e.a4G({type:h});static#i=this.\u0275inj=e.s3X({imports:[i.qQ.forChild([(0,m.VV)(N,{path:"",closeable:!0,dismissible:!1,size:"m"})])]})}return h})()},97656:(F,D,t)=>{t.d(D,{W:()=>l,g:()=>m});var i=t(54496);let m=(()=>{class e{constructor(){this.indeterminate=!1,this.checked=!1,this.tuiCheckedChange=new i._w7}get isChecked(){return this.checked}get isIndeterminate(){return this.indeterminate}set tuiChecked(n){this.checked=n||!1,this.indeterminate=null===n}onChange({checked:n}){this.checked=n,this.indeterminate=!1,this.tuiCheckedChange.emit(n)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=i.Sc5({type:e,selectors:[["input","tuiChecked",""],["input","tuiCheckedChange",""]],hostVars:2,hostBindings:function(n,_){1&n&&i.qCj("change",function(E){return _.onChange(E.target)}),2&n&&i.SoX("checked",_.isChecked)("indeterminate",_.isIndeterminate)},inputs:{tuiChecked:"tuiChecked"},outputs:{tuiCheckedChange:"tuiCheckedChange"}}),e})(),l=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=i.a4G({type:e}),e.\u0275inj=i.s3X({}),e})()},60832:(F,D,t)=>{t.d(D,{I:()=>e,w:()=>l});var i=t(54496),m=t(83480);let l=(()=>{class c{constructor(_){this.tuiFocusVisibleChange=_}}return c.\u0275fac=function(_){return new(_||c)(i.GI1(m.MF))},c.\u0275dir=i.Sc5({type:c,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[i.M5G([m.UF,m.MF])]}),c})(),e=(()=>{class c{}return c.\u0275fac=function(_){return new(_||c)},c.\u0275mod=i.a4G({type:c}),c.\u0275inj=i.s3X({}),c})()},81096:(F,D,t)=>{t.d(D,{O:()=>f,h:()=>E});var i=t(54496),m=t(50900),l=t(94164),e=t(33412),c=t(54704),n=t(75568),_=t(74e3),g=t(2644);let E=(()=>{class d{constructor({nativeElement:C},b){this.tuiFocusedChange=(0,e.U)((0,m.Ax)(C,"focusin"),(0,m.Ax)(C,"focusout")).pipe((0,c.k)(()=>(0,l.ER)(C)),(0,n.W)(!1),(0,_.a)(),(0,g.s)(1),(0,m.OA)(b))}}return d.\u0275fac=function(C){return new(C||d)(i.GI1(i.GMv),i.GI1(i.WW2))},d.\u0275dir=i.Sc5({type:d,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),d})(),f=(()=>{class d{}return d.\u0275fac=function(C){return new(C||d)},d.\u0275mod=i.a4G({type:d}),d.\u0275inj=i.s3X({}),d})()},11739:(F,D,t)=>{t.d(D,{W:()=>b,g9:()=>C,uU:()=>d});var i=t(82528),m=t(4304),l=t(54496),e=t(93656),c=t(44108),n=t(1040);function _(o,p){if(1&o&&l.wR5(0,"tui-svg",2),2&o){const s=p.polymorpheusOutlet,r=l.GaO();l.eAK("t-mark_on",!r.empty),l.E7m("src",s)}}const g=o=>({$implicit:o}),E=["*"],d=(0,i.AL)({size:"m",appearances:{unchecked:m.oN.Outline,checked:m.oN.Primary,indeterminate:m.oN.Primary},icons:{checked:({$implicit:o})=>"m"===o?"tuiIconCheck":"tuiIconCheckLarge",indeterminate:({$implicit:o})=>"m"===o?"tuiIconMinus":"tuiIconMinusLarge"}});let C=(()=>{class o{constructor(s){this.options=s,this.size=this.options.size,this.disabled=!1,this.focused=!1,this.hovered=!1,this.pressed=!1,this.invalid=!1,this.icon=this.options.icons.checked,this.value=!1}set valueSetter(s){!1!==s&&this.setCurrentIcon(s),this.value=s}get appearance(){switch(this.value){case!1:return this.options.appearances.unchecked;case!0:return this.options.appearances.checked;default:return this.options.appearances.indeterminate}}get empty(){return!1===this.value}setCurrentIcon(s){this.icon=null===s?this.options.icons.indeterminate:this.options.icons.checked}}return o.\u0275fac=function(s){return new(s||o)(l.GI1(d))},o.\u0275cmp=l.In1({type:o,selectors:[["tui-primitive-checkbox"]],hostVars:1,hostBindings:function(s,r){2&s&&l.e48("data-size",r.size)},inputs:{size:"size",disabled:"disabled",focused:"focused",hovered:"hovered",pressed:"pressed",invalid:"invalid",valueSetter:[l.Wk5.None,"value","valueSetter"]},ngContentSelectors:E,decls:3,vars:10,consts:[["tuiWrapper","",3,"active","appearance","disabled","focus","hover","invalid"],["class","t-mark",3,"t-mark_on","src",4,"polymorpheusOutlet","polymorpheusOutletContext"],[1,"t-mark",3,"src"]],template:function(s,r){1&s&&(l.kPM(),l.I0R(0,"div",0),l.yuY(1,_,1,3,"tui-svg",1),l._Xx(2),l.C$Y()),2&s&&(l.E7m("active",r.pressed)("appearance",r.appearance)("disabled",r.disabled)("focus",r.focused)("hover",r.hovered)("invalid",r.invalid),l.yG2(),l.E7m("polymorpheusOutlet",r.icon)("polymorpheusOutletContext",l.S45(8,g,r.size)))},dependencies:[e.Wu,c.S,n.Af],styles:["[_nghost-%COMP%]{display:block;font-size:0;flex-shrink:0}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem;border-radius:var(--tui-radius-xs)}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem;border-radius:var(--tui-radius-s)}.t-mark[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;width:100%;height:100%;transform:scale(0)}.t-mark_on[_ngcontent-%COMP%]{transform:scale(1)}"],changeDetection:0}),o})(),b=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=l.a4G({type:o}),o.\u0275inj=l.s3X({imports:[[e.Yt,c.g,n.Ux]]}),o})()},81940:(F,D,t)=>{t.d(D,{Q:()=>b,g:()=>C});var i=t(54496),m=t(6504),l=t(97656),e=t(50168),c=t(81096),n=t(60832),_=t(81800),g=t(94164),E=t(74680),f=t(11739),d=t(91368);const M=["focusableElement"];let C=(()=>{class o extends _.GG{constructor(s,r,T){super(s,T),this.options=r,this.size=this.options.size}get nativeFocusableElement(){return!this.focusableElement||this.computedDisabled?null:this.focusableElement.nativeElement}get focused(){return(0,g.ER)(this.nativeFocusableElement)}get computedFocusable(){return this.interactive&&this.focusable}onChecked(s){this.value=s}onFocused(s){this.updateFocused(s)}onFocusVisible(s){this.updateFocusVisible(s)}}return o.\u0275fac=function(s){return new(s||o)(i.GI1(m.eq,10),i.GI1(f.uU),i.GI1(i.kD9))},o.\u0275cmp=i.In1({type:o,selectors:[["tui-checkbox"]],viewQuery:function(s,r){if(1&s&&i.CC$(M,5),2&s){let T;i.wto(T=i.Gqi())&&(r.focusableElement=T.first)}},hostVars:1,hostBindings:function(s,r){2&s&&i.e48("data-size",r.size)},inputs:{size:"size"},features:[i.M5G([(0,E.NK)(o),(0,_.q4)(o)]),i.eg9],decls:3,vars:11,consts:[[3,"disabled","focused","hovered","invalid","pressed","size","value"],["automation-id","tui-checkbox__native","type","checkbox",1,"t-native",3,"disabled","id","tuiFocusable","tuiChecked","tuiCheckedChange","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""]],template:function(s,r){1&s&&(i.I0R(0,"tui-primitive-checkbox",0)(1,"input",1,2),i.iHE("tuiCheckedChange",function(P){return i.kNx(r.value,P)||(r.value=P),P}),i.qCj("tuiFocusedChange",function(P){return r.onFocused(P)})("tuiFocusVisibleChange",function(P){return r.onFocusVisible(P)}),i.C$Y()()),2&s&&(i.E7m("disabled",r.disabled)("focused",r.computedFocusVisible)("hovered",r.pseudoHover)("invalid",r.computedInvalid)("pressed",r.pseudoActive)("size",r.size)("value",r.value),i.yG2(),i.E7m("disabled",r.disabled)("id",r.id)("tuiFocusable",r.computedFocusable),i.OKB("tuiChecked",r.value))},dependencies:[f.g9,l.g,e.O,c.h,n.w],styles:["[_nghost-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-01);position:relative;display:block;flex-shrink:0}[data-size=m][_nghost-%COMP%]{width:1rem;height:1rem}[data-size=l][_nghost-%COMP%]{width:1.5rem;height:1.5rem}._readonly[_nghost-%COMP%]   tui-primitive-checkbox[_ngcontent-%COMP%]{pointer-events:none}.t-native[_ngcontent-%COMP%]{padding:0;margin:0;border-width:0;border-radius:inherit;background:none;font-size:inherit;line-height:inherit;font-weight:inherit;color:inherit;caret-color:currentColor;outline:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;word-break:keep-all;-webkit-text-fill-color:currentColor;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;cursor:pointer}.t-native[_ngcontent-%COMP%]:-webkit-autofill, .t-native[_ngcontent-%COMP%]:-webkit-autofill:hover, .t-native[_ngcontent-%COMP%]:-webkit-autofill:focus{caret-color:var(--tui-base-09);border-radius:inherit;color:inherit!important;background-color:transparent!important;-webkit-text-fill-color:var(--tui-text-01)!important;border-color:var(--tui-autofill);-webkit-box-shadow:0 0 0 100rem var(--tui-autofill) inset!important}"],changeDetection:0}),o})(),b=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=i.a4G({type:o}),o.\u0275inj=i.s3X({imports:[[d.MD,l.W,e.C,c.O,n.I,f.W]]}),o})()},74872:(F,D,t)=>{t.d(D,{ay:()=>e});var i=t(54496),m=t(53252),l=t(53616);function e(_){_||((0,i.yAg)(e),_=(0,i.uUt)(i.eM9));const g=new m._(E=>_.onDestroy(E.next.bind(E)));return E=>E.pipe((0,l.a)(g))}}}]);