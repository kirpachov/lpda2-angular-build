"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4956],{1700:(C,M,o)=>{o.d(M,{k:()=>d});var t=o(4496),i=o(6504),g=o(9956),m=o(9064),e=o(8212),s=o(4152);let d=(()=>{class u{constructor(){this.formSubmit=new t._w7,this.cancelled=new t._w7,this.form=new i.WC({name:new i.Ku(null),description:new i.Ku(null),image:new i.Ku(null)}),this.loading=!1,this.submitted=!1,this.e=this.errorsFor}set item(a){a?this.form.patchValue({name:a.translations.name,description:a.translations.description,image:a.image}):this.form.reset()}submit(){this.submitted=!0,!this.form.invalid&&this.formSubmit.emit(this.formData())}formData(){const a=new FormData;return(this.form.get("image")?.dirty||this.form.get("image")?.touched)&&a.append("image",this.form.get("image")?.value),(this.form.get("name")?.dirty||this.form.get("name")?.touched)&&a.append("name",JSON.stringify(this.form.get("name")?.value)),(this.form.get("description")?.dirty||this.form.get("description")?.touched)&&a.append("description",JSON.stringify(this.form.get("description")?.value)),a}errorsFor(a){const n=this.form.get(a);return n&&(n.dirty||n.touched||this.submitted)?n.errors:null}cancel(){this.cancelled.emit()}static#t=this.\u0275fac=function(n){return new(n||u)};static#o=this.\u0275cmp=t.In1({type:u,selectors:[["app-tag-form"]],inputs:{item:"item",loading:"loading"},outputs:{formSubmit:"formSubmit",cancelled:"cancelled"},standalone:!0,features:[t.UHJ],decls:23,vars:7,consts:()=>{let a,n,_,l,v;return a="Nome del tag",n="Descrizione del tag",_="Immagine associata al tag",l="Conferma",v="Annulla",[[3,"formGroup","ngSubmit"],[1,"mb-3"],["formControlName","name"],a,[3,"errors"],["formControlName","description",3,"long"],n,["formControlName","image"],_,[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],l,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],v]},template:function(n,_){1&n&&(t.I0R(0,"form",0),t.qCj("ngSubmit",function(){return _.submit()}),t.I0R(1,"div",1)(2,"app-i18n-input",2),t.SAx(3),t.aS0(4,3),t.k70(),t.C$Y(),t.wR5(5,"app-errors",4),t.C$Y(),t.I0R(6,"div",1)(7,"app-i18n-input",5),t.SAx(8),t.aS0(9,6),t.k70(),t.C$Y(),t.wR5(10,"app-errors",4),t.C$Y(),t.I0R(11,"div",1)(12,"app-image-input",7),t.SAx(13),t.aS0(14,8),t.k70(),t.C$Y(),t.wR5(15,"app-errors",4),t.C$Y(),t.I0R(16,"div",9)(17,"button",10),t.SAx(18),t.aS0(19,11),t.k70(),t.C$Y(),t.I0R(20,"button",12),t.qCj("click",function(){return _.cancel()}),t.SAx(21),t.aS0(22,13),t.k70(),t.C$Y()()()),2&n&&(t.E7m("formGroup",_.form),t.yG2(5),t.E7m("errors",_.e("name")),t.yG2(2),t.E7m("long",!0),t.yG2(3),t.E7m("errors",_.e("description")),t.yG2(5),t.E7m("errors",_.e("image")),t.yG2(2),t.E7m("showLoader",_.loading),t.yG2(3),t.E7m("showLoader",_.loading))},dependencies:[g.g,i.sl,i.sz,i.ue,i.u,i.uW,i.Wo,m.w,e.CI,e.Kw,s.c],encapsulation:2})}return u})()},355:(C,M,o)=>{o.d(M,{E:()=>g});var t=o(8400),i=o(2264);class g extends t.w{constructor(e){super(e),this.name=e.name,this.description=e.description,this.status=e.status,this.other=e.other,this.translations={...e.translations},this.color=e.color,e.image&&(this.image=new i.W(e.image))}}},9116:(C,M,o)=>{o.d(M,{w:()=>m});var t=o(6012),i=o(355),g=o(4496);let m=(()=>{class e extends t.s{constructor(){super(i.E,"admin/menu/tags")}static#t=this.\u0275fac=function(u){return new(u||e)};static#o=this.\u0275prov=g.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},832:(C,M,o)=>{o.d(M,{I:()=>m,w:()=>g});var t=o(4496),i=o(3480);let g=(()=>{class e{constructor(d){this.tuiFocusVisibleChange=d}}return e.\u0275fac=function(d){return new(d||e)(t.GI1(i.MF))},e.\u0275dir=t.Sc5({type:e,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([i.UF,i.MF])]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({}),e})()},1096:(C,M,o)=>{o.d(M,{O:()=>a,h:()=>f});var t=o(4496),i=o(900),g=o(4164),m=o(3412),e=o(4704),s=o(5568),d=o(4e3),u=o(2644);let f=(()=>{class n{constructor({nativeElement:l},v){this.tuiFocusedChange=(0,m.U)((0,i.Ax)(l,"focusin"),(0,i.Ax)(l,"focusout")).pipe((0,e.k)(()=>(0,g.ER)(l)),(0,s.W)(!1),(0,d.a)(),(0,u.s)(1),(0,i.OA)(v))}}return n.\u0275fac=function(l){return new(l||n)(t.GI1(t.GMv),t.GI1(t.WW2))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),n})(),a=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({}),n})()},1632:(C,M,o)=>{o.d(M,{k:()=>m,u:()=>e});var t=o(4496),i=o(900),g=o(4680);let m=(()=>{class s{constructor(u,f){this.el=u,this.takeOnlyTrustedEvents=f,this.tuiPressedChange=(0,i.Y7)(this.el.nativeElement,{onlyTrusted:this.takeOnlyTrustedEvents})}}return s.\u0275fac=function(u){return new(u||s)(t.GI1(t.GMv),t.GI1(g.mm))},s.\u0275dir=t.Sc5({type:s,selectors:[["","tuiPressedChange",""]],outputs:{tuiPressedChange:"tuiPressedChange"}}),s})(),e=(()=>{class s{}return s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=t.a4G({type:s}),s.\u0275inj=t.s3X({}),s})()},1512:(C,M,o)=>{o.d(M,{C:()=>T,w:()=>D});var t=o(4496),i=o(900),g=o(4392),m=o(4164),e=o(3480),s=o(4680),d=o(3972),u=o(5944),f=o(3412),a=o(4704),n=o(3656),_=o(1368);const l=["tuiLink",""];function v(r,O){if(1&r&&t.wR5(0,"tui-svg",3),2&r){const c=t.GaO();t.E7m("src",c.icon||"")}}function E(r,O){if(1&r&&t.wR5(0,"tui-svg",4),2&r){const c=t.GaO();t.E7m("src",c.icon||"")}}const p=["*"];let T=(()=>{class r{constructor(c,h,P){this.el=c,this.mode$=h,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,i.Ax)(this.el.nativeElement,"focusin").pipe((0,a.k)(g.Ml)),(0,i.Ax)(this.el.nativeElement,"focusout").pipe((0,a.k)(g.so))),P.subscribe(R=>{this.focusVisible=R})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,m.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return r.\u0275fac=function(c){return new(c||r)(t.GI1(t.GMv),t.GI1(u.Yx),t.GI1(e.MF))},r.\u0275cmp=t.In1({type:r,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(c,h){1&c&&t.qCj("$.data-mode.attr",function(){return h.mode$}),2&c&&(t.e48("data-host-mode",h.mode),t.eAK("_pseudo",h.pseudo)("_icon-rotated",h.iconRotated)("_focus-visible",h.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,s.NK)(r),e.MF,e.UF,d.Ir])],attrs:l,ngContentSelectors:p,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(c,h){1&c&&(t.kPM(),t.yuY(0,v,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,E,1,1,"tui-svg",2)),2&c&&(t.E7m("ngIf",h.iconAlignLeft),t.yG2(3),t.E7m("ngIf",h.iconAlignRight))},dependencies:[n.Wu,_.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),r})(),D=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({imports:[[_.MD,n.Yt]]}),r})()}}]);