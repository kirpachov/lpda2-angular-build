"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[812],{5400:(D,M,o)=>{o.r(M),o.d(M,{ContactsPageModule:()=>C});var t=o(2100),g=o(7552),_=o(1368),n=o(4496),v=o(1560),m=o(1512),l=o(5656),P=o(3468);let O=(()=>{class a{constructor(){this.config=(0,n.uUt)(P.m)}static#t=this.\u0275fac=function(e){return new(e||a)};static#o=this.\u0275cmp=n.In1({type:a,selectors:[["app-contacts"]],standalone:!0,features:[n.UHJ],decls:8,vars:0,consts:()=>{let u,e;return u="Contacts",e="For any information or clarification, do not hesitate to contact us:",[[1,"text-4xl","font-bold","uppercase","flex","items-center","justify-center","border-b-2","border-b-slate-100","pb-4","mb-4"],["inline","",1,"me-3"],u,[1,"mb-2"],e]},template:function(e,r){1&e&&(n.I0R(0,"h1",0)(1,"mat-icon",1),n.OEk(2,"contacts"),n.C$Y(),n.SAx(3),n.aS0(4,2),n.k70(),n.C$Y(),n.I0R(5,"p",3),n.SAx(6),n.aS0(7,4),n.k70(),n.C$Y())},dependencies:[_.MD,t.qQ,v.oB,v.qL,m.w,l.WY]})}return a})(),C=(()=>{class a{static#t=this.\u0275fac=function(e){return new(e||a)};static#o=this.\u0275mod=n.a4G({type:a});static#e=this.\u0275inj=n.s3X({imports:[t.qQ.forChild([(0,g.VV)(O,{path:"",closeable:!0,dismissible:!0,size:"m"})])]})}return a})()},3905:(D,M,o)=>{o.d(M,{MZ:()=>u,ae:()=>a,uU:()=>f});var t=o(4496),g=o(4392),_=o(900),n=o(8987),v=o(3252),m=o(3412),l=o(4704),P=o(6684),O=o(4e3);function C({currentTarget:e,relatedTarget:r}){return!(0,n.CK)(r)||!(0,n.CK)(e)||!e.contains(r)}let a=(()=>{class e extends v._{constructor(c,E){super(p=>this.stream$.subscribe(p)),this.el=c,this.zone=E,this.stream$=(0,m.U)((0,_.Ax)(this.el.nativeElement,"mouseenter").pipe((0,l.k)(g.Ml)),(0,_.Ax)(this.el.nativeElement,"mouseleave").pipe((0,l.k)(g.so)),(0,_.Ax)(this.el.nativeElement,"mouseout").pipe((0,P.I)(C),(0,l.k)(g.so))).pipe((0,O.a)(),(0,_.OA)(this.zone))}}return e.\u0275fac=function(c){return new(c||e)(t.CoB(t.GMv),t.CoB(t.WW2))},e.\u0275prov=t.wxM({token:e,factory:e.\u0275fac}),e})(),f=(()=>{class e{constructor(c){this.tuiHoveredChange=c}}return e.\u0275fac=function(c){return new(c||e)(t.GI1(a))},e.\u0275dir=t.Sc5({type:e,selectors:[["","tuiHoveredChange",""]],outputs:{tuiHoveredChange:"tuiHoveredChange"},features:[t.M5G([a])]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({}),e})()},1512:(D,M,o)=>{o.d(M,{C:()=>E,w:()=>p});var t=o(4496),g=o(900),_=o(4392),n=o(4164),v=o(3480),m=o(4680),l=o(3972),P=o(5944),O=o(3412),C=o(4704),a=o(3656),f=o(1368);const u=["tuiLink",""];function e(i,h){if(1&i&&t.wR5(0,"tui-svg",3),2&i){const s=t.GaO();t.E7m("src",s.icon||"")}}function r(i,h){if(1&i&&t.wR5(0,"tui-svg",4),2&i){const s=t.GaO();t.E7m("src",s.icon||"")}}const c=["*"];let E=(()=>{class i{constructor(s,d,T){this.el=s,this.mode$=d,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,O.U)((0,g.Ax)(this.el.nativeElement,"focusin").pipe((0,C.k)(_.Ml)),(0,g.Ax)(this.el.nativeElement,"focusout").pipe((0,C.k)(_.so))),T.subscribe(A=>{this.focusVisible=A})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,n.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return i.\u0275fac=function(s){return new(s||i)(t.GI1(t.GMv),t.GI1(P.Yx),t.GI1(v.MF))},i.\u0275cmp=t.In1({type:i,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(s,d){1&s&&t.qCj("$.data-mode.attr",function(){return d.mode$}),2&s&&(t.e48("data-host-mode",d.mode),t.eAK("_pseudo",d.pseudo)("_icon-rotated",d.iconRotated)("_focus-visible",d.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,m.NK)(i),v.MF,v.UF,l.Ir])],attrs:u,ngContentSelectors:c,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(s,d){1&s&&(t.kPM(),t.yuY(0,e,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,r,1,1,"tui-svg",2)),2&s&&(t.E7m("ngIf",d.iconAlignLeft),t.yG2(3),t.E7m("ngIf",d.iconAlignRight))},dependencies:[a.Wu,f.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),i})(),p=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[f.MD,a.Yt]]}),i})()}}]);