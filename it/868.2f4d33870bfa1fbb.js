"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[868],{1408:(T,g,t)=>{t.r(g),t.d(g,{NewIngredientModule:()=>D});var n=t(2992),u=t(7552),o=t(4496),h=t(1512),s=t(8212),v=t(1560),C=t(6504),M=t(3797),f=t(8588),l=t(8564),_=t(3480),m=t(8432),p=t(1128),O=t(3616),P=t(9938),E=t(8256);let I=(()=>{class e{constructor(){this.service=(0,o.uUt)(m.K),this.destroy$=(0,o.uUt)(_.UF),this.router=(0,o.uUt)(n.E5),this.route=(0,o.uUt)(n.gV),this.notifications=(0,o.uUt)(p.E),this.loading=(0,o.OCB)(!1)}submit(a){this.loading.set(!0),this.service.create(a).pipe((0,O.a)(this.destroy$)).subscribe({next:i=>{this.notifications.fireSnackBar("Ingrediente salvato"),this.router.navigate([".."],{relativeTo:this.route})},error:i=>{this.formComponent&&P.y.assignErrorsToForm(this.formComponent.form,i),this.notifications.error((0,E.mk)(i)||"Qualcosa \xE8 andato storto nel salvataggio.")}})}cancel(){confirm("Sei sicuro di voler annullare?")&&this.navigateBack()}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}static#t=this.\u0275fac=function(i){return new(i||e)};static#o=this.\u0275cmp=o.In1({type:e,selectors:[["app-new-ingredient"]],viewQuery:function(i,r){if(1&i&&o.CC$(l.A,5),2&i){let d;o.wto(d=o.Gqi())&&(r.formComponent=d.first)}},standalone:!0,features:[o.M5G([_.UF]),o.UHJ],decls:8,vars:1,consts:()=>{let a;return a="Crea ingrediente",[[1,"flex","items-center","justify-between"],a,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(i,r){1&i&&(o.I0R(0,"div",0)(1,"h1"),o.SAx(2),o.aS0(3,1),o.k70(),o.C$Y(),o.I0R(4,"button",2),o.qCj("click",function(){return r.cancel()}),o.I0R(5,"mat-icon"),o.OEk(6,"close"),o.C$Y()()(),o.I0R(7,"app-ingredient-form",3),o.qCj("cancelled",function(){return r.cancel()})("formSubmit",function(L){return r.submit(L)}),o.C$Y()),2&i&&(o.yG2(7),o.E7m("loading",r.loading()))},dependencies:[h.w,v.qL,C.sl,s.CI,s.Kw,M.CQ,f.Y3,l.A],encapsulation:2})}return e})(),D=(()=>{class e{static#t=this.\u0275fac=function(i){return new(i||e)};static#o=this.\u0275mod=o.a4G({type:e});static#n=this.\u0275inj=o.s3X({imports:[n.qQ.forChild([(0,u.VV)(I,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return e})()},532:(T,g,t)=>{t.d(g,{e:()=>o});var n=t(8400),u=t(2264);class o extends n.w{constructor(s){super(s),this.name=s.name,this.description=s.description,this.status=s.status,this.other=s.other,this.translations={...s.translations},s.image&&(this.image=new u.W(s.image))}}},1512:(T,g,t)=>{t.d(g,{C:()=>I,w:()=>D});var n=t(4496),u=t(900),o=t(4392),h=t(4164),s=t(3480),v=t(4680),C=t(3972),M=t(5944),f=t(3412),l=t(4704),_=t(3656),m=t(1368);const p=["tuiLink",""];function O(e,c){if(1&e&&n.wR5(0,"tui-svg",3),2&e){const a=n.GaO();n.E7m("src",a.icon||"")}}function P(e,c){if(1&e&&n.wR5(0,"tui-svg",4),2&e){const a=n.GaO();n.E7m("src",a.icon||"")}}const E=["*"];let I=(()=>{class e{constructor(a,i,r){this.el=a,this.mode$=i,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,u.Ax)(this.el.nativeElement,"focusin").pipe((0,l.k)(o.Ml)),(0,u.Ax)(this.el.nativeElement,"focusout").pipe((0,l.k)(o.so))),r.subscribe(d=>{this.focusVisible=d})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,h.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return e.\u0275fac=function(a){return new(a||e)(n.GI1(n.GMv),n.GI1(M.Yx),n.GI1(s.MF))},e.\u0275cmp=n.In1({type:e,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(a,i){1&a&&n.qCj("$.data-mode.attr",function(){return i.mode$}),2&a&&(n.e48("data-host-mode",i.mode),n.eAK("_pseudo",i.pseudo)("_icon-rotated",i.iconRotated)("_focus-visible",i.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[n.M5G([(0,v.NK)(e),s.MF,s.UF,C.Ir])],attrs:p,ngContentSelectors:E,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(a,i){1&a&&(n.kPM(),n.yuY(0,O,1,1,"tui-svg",0),n.I0R(1,"span",1),n._Xx(2),n.C$Y(),n.yuY(3,P,1,1,"tui-svg",2)),2&a&&(n.E7m("ngIf",i.iconAlignLeft),n.yG2(3),n.E7m("ngIf",i.iconAlignRight))},dependencies:[_.Wu,m.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})(),D=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=n.a4G({type:e}),e.\u0275inj=n.s3X({imports:[[m.MD,_.Yt]]}),e})()}}]);