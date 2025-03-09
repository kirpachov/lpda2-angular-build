"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[5156],{3932:(k,u,o)=>{o.r(u),o.d(u,{CancelReservationComponent:()=>y});var t=o(4496),g=o(3480),l=o(1236),A=o(4820),C=o(1128),E=o(3616),p=o(4704),T=o(4e3),O=o(9212),M=o(8824),h=o(6684),P=o(7368),L=o(7048),f=o(908),v=o(7692),m=o(8212),I=o(7296),N=o(8256),e=o(8392),s=o(4476),i=o(6076);function _(a,S){if(1&a){const n=t.KQA();t.I0R(0,"p",7),t.aS0(1,8),t.C$Y(),t.wR5(2,"app-public-message",9),t.I0R(3,"div",10)(4,"a",11),t.SAx(5),t.aS0(6,12),t.k70(),t.C$Y(),t.I0R(7,"button",13),t.qCj("click",function(){t.usT(n);const r=t.GaO();return t.CGJ(r.cancelReservation())}),t.SAx(8),t.aS0(9,14),t.k70(),t.C$Y()()}2&a&&(t.yG2(2),t.E7m("location","cancel-reservation"))}function R(a,S){1&a&&t.wR5(0,"tui-loader",15),2&a&&t.E7m("size","xl")}function D(a,S){1&a&&(t.I0R(0,"p",7),t.SAx(1),t.Mff(2,16),t.wR5(3,"span",17),t.U7j(),t.k70(),t.C$Y())}let y=(()=>{class a extends i.G{constructor(){super(...arguments),this.destroy$=(0,t.uUt)(g.UF),this.route=(0,t.uUt)(l.gV),this.router=(0,t.uUt)(l.E5),this.reservations=(0,t.uUt)(A.G),this.notifications=(0,t.uUt)(C.E),this.reservation=(0,t.OCB)(null),this.loading=(0,t.OCB)(!0),this.secret=null,this._=(0,t.uUt)(s.OY).setTitle("Cancel reservation | La Porta D'Acqua")}ngOnInit(){super.ngOnInit(),this.route.params.pipe((0,E.a)(this.destroy$),(0,p.k)(n=>n.secret),(0,h.I)(n=>"string"==typeof n&&n.length>0),(0,T.a)(),(0,O.y)(()=>this.loading.set(!0)),(0,O.y)(n=>this.secret=n),(0,P.G)(n=>this.reservations.load(n))).subscribe({next:n=>{this.loading.set(!1),this.reservation.set(n)},error:n=>{this.loading.set(!1),this.reservation.set(null)}})}cancelReservation(){this.secret?(this.loading.set(!0),this.reservations.cancel(this.secret).pipe((0,E.a)(this.destroy$),(0,M.U)(()=>this.loading.set(!1))).subscribe({next:()=>{this.reservations.created.next(null),this.notifications.fireSnackBar("Reservation cancelled."),this.router.navigate(["/"])},error:n=>{this.notifications.error(n instanceof L.gj?(0,N.mk)(n):e.a)}})):this.notifications.error(e.a)}static#t=this.\u0275fac=(()=>{let n;return function(r){return(n||(n=t.otF(a)))(r||a)}})();static#o=this.\u0275cmp=t.In1({type:a,selectors:[["app-cancel-reservation"]],standalone:!0,features:[t.M5G([g.UF]),t.eg9,t.UHJ],decls:14,vars:1,consts:()=>{let n,c,r,x,U,B,$;return n="Cancel your reservation.",c="Forgot something?",r="Contact us",x="Are you sure you want to cancel your reservation at La Porta d'Acqua?",U="Cancel",B="Cancel reservation",$="\n          " + "\ufffd#3\ufffd" + "\n           We were unable to find your reservation. \n          " + "\ufffd/#3\ufffd" + "\n           Is it in the past? Or has it been deleted? \n        ",[[1,"mx-4","md:mx-8","lg:mx-12"],[1,"text-5xl","text-center","text-primary","mb-2"],n,[1,"bg-primary","w-3/4","mx-auto","h-[1px]","mb-5"],[1,"flex","items-center","justify-center","mb-3","text-xl"],c,r,[1,"text-xl","text-center","mb-3"],x,[1,"block","mb-3","text-center","text-xl",3,"location"],[1,"flex","items-center","justify-center","mb-3"],["routerLink","/","type","button","size","m","tuiButton","","appearance","custom",1,"btn-primary","me-2"],U,["type","button","size","m","tuiButton","","appearance","secondary-destructive",3,"click"],B,[3,"size"],$,[1,"text-red-600"]]},template:function(c,r){1&c&&(t.I0R(0,"div",0)(1,"h2",1),t.SAx(2),t.aS0(3,2),t.k70(),t.C$Y(),t.wR5(4,"hr",3),t.yuY(5,_,10,1)(6,R,1,1)(7,D,4,0),t.I0R(8,"div",4),t.SAx(9),t.aS0(10,5),t.k70(),t.I0R(11,"app-contact-us"),t.SAx(12),t.aS0(13,6),t.k70(),t.C$Y()()()),2&c&&(t.yG2(5),t.C0Y(5,r.reservation()?5:r.loading()?6:7))},dependencies:[f.Q,v.Sk,v.Cb,I.K,m.CI,m.Kw,l.ER],styles:["[_nghost-%COMP%]{display:block;overflow:hidden;background-position:center center!important;background-repeat:no-repeat!important;background-size:cover!important;background-attachment:unset!important}"],changeDetection:0})}return a})()},1512:(k,u,o)=>{o.d(u,{C:()=>I,w:()=>N});var t=o(4496),g=o(900),l=o(4392),A=o(4164),C=o(3480),E=o(4680),p=o(3972),T=o(5944),O=o(3412),M=o(4704),h=o(3656),P=o(1368);const L=["tuiLink",""];function f(e,s){if(1&e&&t.wR5(0,"tui-svg",3),2&e){const i=t.GaO();t.E7m("src",i.icon||"")}}function v(e,s){if(1&e&&t.wR5(0,"tui-svg",4),2&e){const i=t.GaO();t.E7m("src",i.icon||"")}}const m=["*"];let I=(()=>{class e{constructor(i,_,R){this.el=i,this.mode$=_,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,O.U)((0,g.Ax)(this.el.nativeElement,"focusin").pipe((0,M.k)(l.Ml)),(0,g.Ax)(this.el.nativeElement,"focusout").pipe((0,M.k)(l.so))),R.subscribe(D=>{this.focusVisible=D})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,A.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return e.\u0275fac=function(i){return new(i||e)(t.GI1(t.GMv),t.GI1(T.Yx),t.GI1(C.MF))},e.\u0275cmp=t.In1({type:e,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(i,_){1&i&&t.qCj("$.data-mode.attr",function(){return _.mode$}),2&i&&(t.e48("data-host-mode",_.mode),t.eAK("_pseudo",_.pseudo)("_icon-rotated",_.iconRotated)("_focus-visible",_.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,E.NK)(e),C.MF,C.UF,p.Ir])],attrs:L,ngContentSelectors:m,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(i,_){1&i&&(t.kPM(),t.yuY(0,f,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,v,1,1,"tui-svg",2)),2&i&&(t.E7m("ngIf",_.iconAlignLeft),t.yG2(3),t.E7m("ngIf",_.iconAlignRight))},dependencies:[h.Wu,P.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),e})(),N=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({imports:[[P.MD,h.Yt]]}),e})()}}]);