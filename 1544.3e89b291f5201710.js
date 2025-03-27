"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[1544],{1920:(C,m,e)=>{e.d(m,{w:()=>D});var t=e(4496),s=e(6504),E=e(3480),h=e(6700),n=e(3616),r=e(6684),u=e(3797),d=e(8588),v=e(1368),c=e(9956),a=e(1292);function l(g,_){if(1&g&&(t.I0R(0,"tui-textarea",2),t.OEk(1),t.C$Y()),2&g){const i=t.GaO().$implicit,o=t.GaO();t.E7m("formControl",i.control),t.yG2(),t.oRS(" ",o.getFullLang(i.lang)," ")}}function M(g,_){if(1&g&&(t.I0R(0,"tui-input",2),t.OEk(1),t.C$Y()),2&g){const i=t.GaO().$implicit,o=t.GaO();t.E7m("formControl",i.control),t.yG2(),t.oRS(" ",o.getFullLang(i.lang)," ")}}const f=g=>({"mb-3":g});function P(g,_){if(1&g&&(t.SAx(0),t.I0R(1,"div",1),t.yuY(2,l,2,2,"tui-textarea",2)(3,M,2,2),t.wR5(4,"app-errors",3),t.C$Y(),t.k70()),2&g){const i=_.$implicit,o=_.last,O=t.GaO();t.yG2(),t.E7m("ngClass",t.S45(3,f,!o)),t.yG2(),t.C0Y(2,O.long?2:3),t.yG2(2),t.E7m("errors",i.control.errors)}}const p=["*"];let D=(()=>{class g{constructor(){this.destroy$=new E.UF,this.long=!1,this.controls=(0,t.OCB)({}),this.controlsArr=(0,t.S6b)(()=>{const i=this.controls();return Object.keys(i).map(o=>({lang:o,control:i[o]}))}),this.touched$=new h.g(!1),this.value$=new h.g({})}ngAfterViewInit(){this.addLang("it"),this.addLang("en")}ngOnInit(){}registerOnChange(i){this.value$.pipe((0,n.a)(this.destroy$)).subscribe({next:o=>i(o)})}registerOnTouched(i){this.touched$.pipe((0,r.I)(o=>!0===o)).subscribe({next:()=>i()})}writeValue(i){this.patchValue(i??{}),this.touched$.next(!1)}wasTouched(){this.touched$.next(!0)}getFullLang(i){return a.S[i]??i}controlChanged(i){this.value$.next({...this.value$.value,[i]:this.controls()[i].value})}patchValue(i){Object.keys(i).forEach(o=>this.addLang(o)),Object.keys(this.controls()).forEach(o=>{this.controls()[o].patchValue(i[o]??null)})}addLang(i){if(this.controls()[i])return;const o=new s.Ku;o.valueChanges.subscribe({next:()=>this.controlChanged(i)}),this.controls.set({...this.controls(),[i]:o})}static#t=this.\u0275fac=function(o){return new(o||g)};static#e=this.\u0275cmp=t.In1({type:g,selectors:[["app-i18n-input"]],inputs:{long:"long"},standalone:!0,features:[t.M5G([{provide:s.Y6,useExisting:(0,t.wd)(()=>g),multi:!0},E.UF]),t.UHJ],ngContentSelectors:p,decls:2,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngClass"],[3,"formControl"],[3,"errors"]],template:function(o,O){1&o&&(t.kPM(),t._Xx(0),t.yuY(1,P,5,5,"ng-container",0)),2&o&&(t.yG2(),t.E7m("ngForOf",O.controlsArr()))},dependencies:[s.sl,s.ue,s.ug,u.CQ,u.Oo,u.cP,v.Iw,c.g,v.QF,d.Y3,d.wp,d.kd],changeDetection:0})}return g})()},8564:(C,m,e)=>{e.d(m,{A:()=>u});var t=e(4496),s=e(6504),E=e(9956),h=e(1920),n=e(8212),r=e(4152);let u=(()=>{class d{constructor(){this.formSubmit=new t._w7,this.cancelled=new t._w7,this.form=new s.WC({name:new s.Ku(null),description:new s.Ku(null),image:new s.Ku(null)}),this.loading=!1,this.submitted=!1,this.e=this.errorsFor}set item(c){c?this.form.patchValue({name:c.translations.name,description:c.translations.description,image:c.image}):this.form.reset()}submit(){this.submitted=!0,!this.form.invalid&&this.formSubmit.emit(this.formData())}formData(){const c=new FormData;return(this.form.get("image")?.dirty||this.form.get("image")?.touched)&&c.append("image",this.form.get("image")?.value),(this.form.get("name")?.dirty||this.form.get("name")?.touched)&&c.append("name",JSON.stringify(this.form.get("name")?.value)),(this.form.get("description")?.dirty||this.form.get("description")?.touched)&&c.append("description",JSON.stringify(this.form.get("description")?.value)),c}errorsFor(c){const a=this.form.get(c);return a&&(a.dirty||a.touched||this.submitted)?a.errors:null}cancel(){this.cancelled.emit()}static#t=this.\u0275fac=function(a){return new(a||d)};static#e=this.\u0275cmp=t.In1({type:d,selectors:[["app-ingredient-form"]],inputs:{item:"item",loading:"loading"},outputs:{formSubmit:"formSubmit",cancelled:"cancelled"},standalone:!0,features:[t.UHJ],decls:23,vars:7,consts:()=>{let c,a,l,M,f;return c="Nome dell'ingrediente",a="Descrizione dell'ingrediente",l="Immagine associata all'ingrediente",M="Conferma",f="Annulla",[[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],c,[3,"errors"],["formControlName","description",3,"long"],a,["formControlName","image"],l,[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],M,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],f]},template:function(a,l){1&a&&(t.I0R(0,"form",0),t.qCj("ngSubmit",function(){return l.submit()}),t.I0R(1,"div",1)(2,"app-i18n-input",2),t.SAx(3),t.aS0(4,3),t.k70(),t.C$Y(),t.wR5(5,"app-errors",4),t.C$Y(),t.I0R(6,"div",1)(7,"app-i18n-input",5),t.SAx(8),t.aS0(9,6),t.k70(),t.C$Y(),t.wR5(10,"app-errors",4),t.C$Y(),t.I0R(11,"div",1)(12,"app-image-input",7),t.SAx(13),t.aS0(14,8),t.k70(),t.C$Y(),t.wR5(15,"app-errors",4),t.C$Y(),t.I0R(16,"div",9)(17,"button",10),t.SAx(18),t.aS0(19,11),t.k70(),t.C$Y(),t.I0R(20,"button",12),t.qCj("click",function(){return l.cancel()}),t.SAx(21),t.aS0(22,13),t.k70(),t.C$Y()()()),2&a&&(t.E7m("formGroup",l.form),t.yG2(5),t.E7m("errors",l.e("name")),t.yG2(2),t.E7m("long",!0),t.yG2(3),t.E7m("errors",l.e("description")),t.yG2(5),t.E7m("errors",l.e("image")),t.yG2(2),t.E7m("showLoader",l.loading),t.yG2(3),t.E7m("showLoader",l.loading))},dependencies:[E.g,s.sl,s.sz,s.ue,s.u,s.uW,s.Wo,h.w,n.CI,n.Kw,r.c],encapsulation:2})}return d})()},1292:(C,m,e)=>{e.d(m,{S:()=>t});const t={it:"Italiano",en:"Inglese",es:"Spagnolo",fr:"Francese",de:"Tedesco",pt:"Portoghese",ru:"Russo",zh:"Cinese",ja:"Giapponese",ar:"Arabo",hi:"Hindi",bn:"Bengalese",pa:"Punjabi",ms:"Malese"}},532:(C,m,e)=>{e.d(m,{e:()=>E});var t=e(8400),s=e(2264);class E extends t.w{constructor(n){super(n),this.name=n.name,this.description=n.description,this.status=n.status,this.other=n.other,this.translations={...n.translations},n.image&&(this.image=new s.W(n.image))}}},8432:(C,m,e)=>{e.d(m,{K:()=>h});var t=e(6012),s=e(532),E=e(4496);let h=(()=>{class n extends t.s{constructor(){super(s.e,"admin/menu/ingredients")}static#t=this.\u0275fac=function(d){return new(d||n)};static#e=this.\u0275prov=E.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},832:(C,m,e)=>{e.d(m,{I:()=>h,w:()=>E});var t=e(4496),s=e(3480);let E=(()=>{class n{constructor(u){this.tuiFocusVisibleChange=u}}return n.\u0275fac=function(u){return new(u||n)(t.GI1(s.MF))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([s.UF,s.MF])]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(u){return new(u||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({}),n})()},1096:(C,m,e)=>{e.d(m,{O:()=>c,h:()=>v});var t=e(4496),s=e(900),E=e(4164),h=e(3412),n=e(4704),r=e(5568),u=e(4e3),d=e(2644);let v=(()=>{class a{constructor({nativeElement:M},f){this.tuiFocusedChange=(0,h.U)((0,s.Ax)(M,"focusin"),(0,s.Ax)(M,"focusout")).pipe((0,n.k)(()=>(0,E.ER)(M)),(0,r.W)(!1),(0,u.a)(),(0,d.s)(1),(0,s.OA)(f))}}return a.\u0275fac=function(M){return new(M||a)(t.GI1(t.GMv),t.GI1(t.WW2))},a.\u0275dir=t.Sc5({type:a,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),a})(),c=(()=>{class a{}return a.\u0275fac=function(M){return new(M||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({}),a})()},1632:(C,m,e)=>{e.d(m,{k:()=>h,u:()=>n});var t=e(4496),s=e(900),E=e(4680);let h=(()=>{class r{constructor(d,v){this.el=d,this.takeOnlyTrustedEvents=v,this.tuiPressedChange=(0,s.Y7)(this.el.nativeElement,{onlyTrusted:this.takeOnlyTrustedEvents})}}return r.\u0275fac=function(d){return new(d||r)(t.GI1(t.GMv),t.GI1(E.mm))},r.\u0275dir=t.Sc5({type:r,selectors:[["","tuiPressedChange",""]],outputs:{tuiPressedChange:"tuiPressedChange"}}),r})(),n=(()=>{class r{}return r.\u0275fac=function(d){return new(d||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({}),r})()},1512:(C,m,e)=>{e.d(m,{C:()=>D,w:()=>g});var t=e(4496),s=e(900),E=e(4392),h=e(4164),n=e(3480),r=e(4680),u=e(3972),d=e(5944),v=e(3412),c=e(4704),a=e(3656),l=e(1368);const M=["tuiLink",""];function f(_,i){if(1&_&&t.wR5(0,"tui-svg",3),2&_){const o=t.GaO();t.E7m("src",o.icon||"")}}function P(_,i){if(1&_&&t.wR5(0,"tui-svg",4),2&_){const o=t.GaO();t.E7m("src",o.icon||"")}}const p=["*"];let D=(()=>{class _{constructor(o,O,T){this.el=o,this.mode$=O,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,v.U)((0,s.Ax)(this.el.nativeElement,"focusin").pipe((0,c.k)(E.Ml)),(0,s.Ax)(this.el.nativeElement,"focusout").pipe((0,c.k)(E.so))),T.subscribe(I=>{this.focusVisible=I})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,h.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return _.\u0275fac=function(o){return new(o||_)(t.GI1(t.GMv),t.GI1(d.Yx),t.GI1(n.MF))},_.\u0275cmp=t.In1({type:_,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(o,O){1&o&&t.qCj("$.data-mode.attr",function(){return O.mode$}),2&o&&(t.e48("data-host-mode",O.mode),t.eAK("_pseudo",O.pseudo)("_icon-rotated",O.iconRotated)("_focus-visible",O.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,r.NK)(_),n.MF,n.UF,u.Ir])],attrs:M,ngContentSelectors:p,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(o,O){1&o&&(t.kPM(),t.yuY(0,f,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,P,1,1,"tui-svg",2)),2&o&&(t.E7m("ngIf",O.iconAlignLeft),t.yG2(3),t.E7m("ngIf",O.iconAlignRight))},dependencies:[a.Wu,l.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),_})(),g=(()=>{class _{}return _.\u0275fac=function(o){return new(o||_)},_.\u0275mod=t.a4G({type:_}),_.\u0275inj=t.s3X({imports:[[l.MD,a.Yt]]}),_})()}}]);