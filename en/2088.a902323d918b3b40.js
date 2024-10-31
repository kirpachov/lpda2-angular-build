"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2088],{5948:(R,E,t)=>{t.r(E),t.d(E,{ListPreferencesComponent:()=>O});var e=t(4496),C=t(6772);let S=(()=>{class _ extends C.A{constructor(){super("/admin/preferences")}search(n={}){return this.http.get("/")}show(n){return this.http.get(`/${n}`)}value(n){return this.http.get(`/${n}/value`)}update(n,s){return this.http.patch(`/${n}`,{value:s})}static#e=this.\u0275fac=function(s){return new(s||_)};static#t=this.\u0275prov=e.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();var i=t(3480),u=t(8824),c=t(3616),M=t(1128),f=t(8256),v=t(8392),p=t(6800),m=t(2760),h=t(6052),g=t(6504),y=t(1292),r=t(7364),T=t(5193),o=t(7728),a=t(4476);function P(_,N){1&_&&(e.SAx(0),e.aS0(1,11),e.k70())}function D(_,N){1&_&&(e.OEk(0),e.wVc(1,"language")),2&_&&e.cNF(e.kDX(1,1,N.$implicit))}let O=(()=>{class _{constructor(){this.service=(0,e.uUt)(S),this.destroy$=(0,e.uUt)(i.UF),this.notifications=(0,e.uUt)(M.E),this._=(0,e.uUt)(a.OY).setTitle("Preferences | La Porta D'Acqua"),this.inputSize="l",this.languagePipe=(0,e.uUt)(r.e),this.allLanguages=Object.keys(y.S),this.form=new g.WC({known_languages:new g.Ku([])}),this.saving=(0,e.OCB)(!1),this.searching=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.searching())}ngOnInit(){this.reload()}save(n,s){this.saving.set(!0),Array.isArray(s)&&(s=s.join(",")),this.service.update(n,s).pipe((0,u.U)(()=>this.saving.set(!1)),(0,u.U)(()=>this.reload())).subscribe({error:l=>{this.notifications.error((0,f.mk)(l)||v.a)}})}applyPipeFunction(n){return n.transform}reload(){this.searching.set(!0),this.service.search().pipe((0,c.a)(this.destroy$),(0,u.U)(()=>this.searching.set(!1))).subscribe({next:n=>{this.updateFormByData(n.items)},error:n=>{this.notifications.error((0,f.mk)(n)||v.a)}})}updateFormByData(n){const s={};["known_languages"].forEach(l=>{const d=n.find(I=>I.key===l);d&&Array.isArray(d.value)?s[l]=d.value:d&&"string"==typeof d.value?s[l]=d.value.split(","):d?console.warn(`Preference ${l} not found or invalid`,d.value):console.warn(`Preference ${l} not found`)}),this.form.patchValue(s)}static#e=this.\u0275fac=function(s){return new(s||_)};static#t=this.\u0275cmp=e.In1({type:_,selectors:[["app-list-preferences"]],standalone:!0,features:[e.M5G([i.UF,r.e]),e.UHJ],decls:23,vars:6,consts:()=>{let n,s,l,d;return n="Personal preferences",s="These settings will only be applied to your account.",l="Select many languages.",d="No element",[["noItems",""],n,[1,"text-slate-400","mb-3"],s,[3,"formGroup"],[1,"mb-4"],[1,"text-lg","font-bold"],[1,"text-slate-400"],["knownLanguagesItemContent",""],[3,"formControlName","items","itemContent","stringifyFn","inputSize","submit"],l,d]},template:function(s,l){if(1&s&&(e.yuY(0,P,2,0,"ng-template",null,0,e.gJz),e.I0R(2,"h1"),e.aS0(3,1),e.C$Y(),e.I0R(4,"p",2),e.aS0(5,3),e.C$Y(),e.I0R(6,"form",4)(7,"div",5)(8,"p",6),e.OEk(9,"Lingua preferita"),e.C$Y(),e.I0R(10,"p",7),e.OEk(11,"Seleziona la lingua che preferisci utilizzare."),e.C$Y(),e.wR5(12,"app-admin-language-switcher"),e.C$Y(),e.I0R(13,"div",5)(14,"p",6),e.OEk(15,"Lingue conosciute"),e.C$Y(),e.I0R(16,"p",7),e.OEk(17,"Quali lingue conosci? Questa informazione ci serve per capire quali lingue mostrarti quando crei o modifichi elementi con nomi in diverse lingue."),e.C$Y(),e.yuY(18,D,2,3,"ng-template",null,8,e.gJz),e.I0R(20,"app-preferences-multiple-select",9),e.qCj("submit",function(I){return l.save("known_languages",I)}),e.SAx(21),e.aS0(22,10),e.k70(),e.C$Y()()()),2&s){const d=e.Gew(19);e.yG2(6),e.E7m("formGroup",l.form),e.yG2(14),e.E7m("formControlName","known_languages")("items",l.allLanguages)("itemContent",d)("stringifyFn",l.applyPipeFunction(l.languagePipe))("inputSize",l.inputSize)}},dependencies:[p.y,m.BZ,g.sl,g.sz,g.ue,g.u,g.uW,g.Wo,h.q8,r.e,T.ms,o.M],encapsulation:2,changeDetection:0})}return _})()},8392:(R,E,t)=>{t.d(E,{a:()=>e});const e="Something went wrong."},168:(R,E,t)=>{t.d(E,{C:()=>S,O:()=>C});var e=t(4496);let C=(()=>{class i{constructor(){this.focusable=!0}get tabIndex(){return this.focusable?0:-1}}return i.\u0275fac=function(c){return new(c||i)},i.\u0275dir=e.Sc5({type:i,selectors:[["","tuiFocusable",""]],hostVars:1,hostBindings:function(c,M){2&c&&e.SoX("tabIndex",M.tabIndex)},inputs:{focusable:[e.Wk5.None,"tuiFocusable","focusable"]}}),i})(),S=(()=>{class i{}return i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({}),i})()},4436:(R,E,t)=>{t.d(E,{a:()=>y,i:()=>g});var e=t(4496),C=t(3480),S=t(4680),i=t(5656),u=t(3972),c=t(5944),M=t(3616),f=t(3656),v=t(4108),p=t(1040),m=t(1368);function h(r,T){1&r&&e.wR5(0,"tui-svg",3),2&r&&e.E7m("src",T.polymorpheusOutlet)}let g=(()=>{class r extends i.cb{constructor(o,a,P,D){super(P),this.isMobile=D,this.mode=null,this.describeId="",a.pipe((0,M.a)(o)).subscribe(O=>{this.mode=O})}get computedAppearance(){return this.appearance||this.mode||""}stopOnMobile(o){var a;this.isMobile&&(o.preventDefault(),o.stopPropagation()),null===(a=this.driver$)||void 0===a||a.toggle()}}return r.\u0275fac=function(o){return new(o||r)(e.GI1(C.UF,2),e.GI1(c.Yx),e.GI1(i.Oi),e.GI1(S.Mv))},r.\u0275cmp=e.In1({type:r,selectors:[["tui-tooltip"]],viewQuery:function(o,a){if(1&o&&e.CC$(i.i6,5),2&o){let P;e.wto(P=e.Gqi())&&(a.driver$=P.first)}},hostVars:1,hostBindings:function(o,a){1&o&&e.qCj("mousedown",function(D){return a.stopOnMobile(D)}),2&o&&e.e48("data-appearance",a.computedAppearance)},inputs:{content:"content",direction:"direction",appearance:"appearance",showDelay:"showDelay",hideDelay:"hideDelay",describeId:"describeId",context:"context"},features:[e.M5G([C.UF,u.Ir]),e.eg9],decls:4,vars:11,consts:[["appearance","icon","automation-id","tui-tooltip__icon","tuiWrapper","",1,"t-tooltip-icon",3,"hover","tuiHint","tuiHintAppearance","tuiHintContext","tuiHintDescribe","tuiHintDirection","tuiHintHideDelay","tuiHintShowDelay"],["driver","tuiHintHover"],[3,"src",4,"polymorpheusOutlet"],[3,"src"]],template:function(o,a){if(1&o&&(e.I0R(0,"span",0,1),e.wVc(2,"async"),e.yuY(3,h,1,1,"tui-svg",2),e.C$Y()),2&o){const P=e.Gew(1);e.E7m("hover",e.kDX(2,9,P)||null)("tuiHint",a.content)("tuiHintAppearance",a.computedAppearance)("tuiHintContext",a.context)("tuiHintDescribe",a.describeId)("tuiHintDirection",a.direction)("tuiHintHideDelay",a.hideDelay)("tuiHintShowDelay",a.showDelay),e.yG2(3),e.E7m("polymorpheusOutlet",a.icon)}},dependencies:[f.Wu,v.S,i.lh,i.SL,i.i6,i.IT,i.KM,p.Af,m.a],styles:['[_nghost-%COMP%]{transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;display:inline-block;width:1.5rem;height:1.5rem;vertical-align:middle;font-size:0;line-height:0;pointer-events:auto;cursor:pointer;color:var(--tui-text-01)}[data-appearance=error][_nghost-%COMP%]{color:var(--tui-error-fill)}.t-tooltip-icon[_ngcontent-%COMP%]{display:inline-block;width:100%;height:100%;color:inherit}[tuiWrapper][data-appearance="textfield"][data-state="disabled"][_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%], [tuiWrapper][data-appearance="textfield"][data-state="disabled"]   [_nghost-%COMP%]   .t-tooltip-icon[_ngcontent-%COMP%]{opacity:1}'],changeDetection:0}),r})(),y=(()=>{class r{}return r.\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.a4G({type:r}),r.\u0275inj=e.s3X({imports:[[m.MD,v.g,f.Yt,i.WY,p.Ux]]}),r})()},7020:(R,E,t)=>{t.d(E,{q:()=>M});var e=t(4496),C=t(1800),S=t(3480),i=t(5944),u=t(4336),c=t(3012);let M=(()=>{class f{constructor(p,m,h,g,y){this.host=p,this.control=m,this.el=h,this.idService=g,this.itemsHandlers=y,this.disabledItemHandler=null,this.datalist=null}get id(){return this.el.nativeElement.id||this.idService.generate()}}return f.\u0275fac=function(p){return new(p||f)(e.GI1(i.Mn),e.GI1(C._y),e.GI1(e.GMv),e.GI1(S.y2),e.GI1(c.qc))},f.\u0275dir=e.Sc5({type:f,viewQuery:function(p,m){if(1&p&&e.CC$(u.Ux,7,e.Yw2),2&p){let h;e.wto(h=e.Gqi())&&(m.datalist=h.first)}},hostVars:1,hostBindings:function(p,m){2&p&&e.SoX("id",m.id)},inputs:{disabledItemHandler:"disabledItemHandler"}}),f})()},9612:(R,E,t)=>{t.d(E,{W:()=>S});var e=t(4496);let S=(()=>{class i{}return i.\u0275fac=function(c){return new(c||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({}),i})()}}]);