"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[1384],{692:(U,E,o)=>{o.r(E),o.d(E,{CancelReservationComponent:()=>N});var t=o(4496),l=o(3480),d=o(1236),R=o(4820),g=o(1128),C=o(3616),A=o(4704),T=o(4e3),O=o(9212),M=o(8824),h=o(6684),v=o(7368),f=o(7048),L=o(908),P=o(7692),m=o(8212),D=o(7296),I=o(8256),n=o(8392),_=o(4476);function i(s,S){if(1&s){const e=t.KQA();t.I0R(0,"p",6),t.aS0(1,7),t.C$Y(),t.wR5(2,"app-public-message",8),t.I0R(3,"div",9)(4,"a",10),t.SAx(5),t.aS0(6,11),t.k70(),t.C$Y(),t.I0R(7,"button",12),t.qCj("click",function(){t.usT(e);const c=t.GaO();return t.CGJ(c.cancelReservation())}),t.SAx(8),t.aS0(9,13),t.k70(),t.C$Y()()}2&s&&(t.yG2(2),t.E7m("location","cancel-reservation"))}function a(s,S){1&s&&t.wR5(0,"tui-loader",14),2&s&&t.E7m("size","xl")}function p(s,S){1&s&&(t.I0R(0,"p",6),t.SAx(1),t.Mff(2,15),t.wR5(3,"span",16),t.U7j(),t.k70(),t.C$Y())}let N=(()=>{class s{constructor(){this.destroy$=(0,t.uUt)(l.UF),this.route=(0,t.uUt)(d.gV),this.router=(0,t.uUt)(d.E5),this.reservations=(0,t.uUt)(R.G),this.notifications=(0,t.uUt)(g.E),this.reservation=(0,t.OCB)(null),this.loading=(0,t.OCB)(!0),this.secret=null,this._=(0,t.uUt)(_.OY).setTitle("Cancel reservation | La Porta D'Acqua")}ngOnInit(){this.route.params.pipe((0,C.a)(this.destroy$),(0,A.k)(e=>e.secret),(0,h.I)(e=>"string"==typeof e&&e.length>0),(0,T.a)(),(0,O.y)(()=>this.loading.set(!0)),(0,O.y)(e=>this.secret=e),(0,v.G)(e=>this.reservations.load(e))).subscribe({next:e=>{this.loading.set(!1),this.reservation.set(e)},error:e=>{this.loading.set(!1),this.reservation.set(null)}})}cancelReservation(){this.secret?(this.loading.set(!0),this.reservations.cancel(this.secret).pipe((0,C.a)(this.destroy$),(0,M.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.reservations.created.next(null),this.notifications.fireSnackBar("Reservation cancelled."),this.router.navigate(["/"])},error:e=>{this.notifications.error(e instanceof f.gj?(0,I.mk)(e):n.a)}})):this.notifications.error(n.a)}static#t=this.\u0275fac=function(r){return new(r||s)};static#o=this.\u0275cmp=t.In1({type:s,selectors:[["app-cancel-reservation"]],standalone:!0,features:[t.M5G([l.UF]),t.UHJ],decls:13,vars:1,consts:()=>{let e,r,c,x,$,k;return e="Cancel your reservation.",r="Forgot something?",c="Are you sure you want to cancel your reservation at La Porta d'Acqua?",x="Cancel",$="Cancel reservation",k="\n          " + "\ufffd#3\ufffd" + "\n           We were unable to find your reservation. \n          " + "\ufffd/#3\ufffd" + "\n           Is it in the past? Or has it been deleted? \n        ",[[1,"mx-4","md:mx-8","lg:mx-12"],[1,"text-5xl","text-center","text-primary","mb-2"],e,[1,"bg-primary","w-3/4","mx-auto","h-[1px]","mb-5"],[1,"flex","items-center","justify-center","mb-3","text-xl"],r,[1,"text-xl","text-center","mb-3"],c,[1,"block","mb-3","text-center","text-xl",3,"location"],[1,"flex","items-center","justify-center","mb-3"],["routerLink","/","type","button","size","m","tuiButton","","appearance","custom",1,"btn-primary","me-2"],x,["type","button","size","m","tuiButton","","appearance","secondary-destructive",3,"click"],$,[3,"size"],k,[1,"text-red-600"]]},template:function(r,c){1&r&&(t.I0R(0,"div",0)(1,"h2",1),t.SAx(2),t.aS0(3,2),t.k70(),t.C$Y(),t.wR5(4,"hr",3),t.yuY(5,i,10,1)(6,a,1,1)(7,p,4,0),t.I0R(8,"div",4),t.SAx(9),t.aS0(10,5),t.k70(),t.I0R(11,"app-contact-us"),t.OEk(12,"Contattaci"),t.C$Y()()()),2&r&&(t.yG2(5),t.C0Y(5,c.reservation()?5:c.loading()?6:7))},dependencies:[L.Q,P.Sk,P.Cb,D.K,m.CI,m.Kw,d.ER],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;background-position:center center!important;background-repeat:no-repeat!important;background-size:cover!important;background-attachment:unset!important}"],changeDetection:0})}return s})()},1512:(U,E,o)=>{o.d(E,{C:()=>D,w:()=>I});var t=o(4496),l=o(900),d=o(4392),R=o(4164),g=o(3480),C=o(4680),A=o(3972),T=o(5944),O=o(3412),M=o(4704),h=o(3656),v=o(1368);const f=["tuiLink",""];function L(n,_){if(1&n&&t.wR5(0,"tui-svg",3),2&n){const i=t.GaO();t.E7m("src",i.icon||"")}}function P(n,_){if(1&n&&t.wR5(0,"tui-svg",4),2&n){const i=t.GaO();t.E7m("src",i.icon||"")}}const m=["*"];let D=(()=>{class n{constructor(i,a,p){this.el=i,this.mode$=a,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,O.U)((0,l.Ax)(this.el.nativeElement,"focusin").pipe((0,M.k)(d.Ml)),(0,l.Ax)(this.el.nativeElement,"focusout").pipe((0,M.k)(d.so))),p.subscribe(N=>{this.focusVisible=N})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,R.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return n.\u0275fac=function(i){return new(i||n)(t.GI1(t.GMv),t.GI1(T.Yx),t.GI1(g.MF))},n.\u0275cmp=t.In1({type:n,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(i,a){1&i&&t.qCj("$.data-mode.attr",function(){return a.mode$}),2&i&&(t.e48("data-host-mode",a.mode),t.eAK("_pseudo",a.pseudo)("_icon-rotated",a.iconRotated)("_focus-visible",a.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,C.NK)(n),g.MF,g.UF,A.Ir])],attrs:f,ngContentSelectors:m,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(i,a){1&i&&(t.kPM(),t.yuY(0,L,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,P,1,1,"tui-svg",2)),2&i&&(t.E7m("ngIf",a.iconAlignLeft),t.yG2(3),t.E7m("ngIf",a.iconAlignRight))},dependencies:[h.Wu,v.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),n})(),I=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[[v.MD,h.Yt]]}),n})()}}]);