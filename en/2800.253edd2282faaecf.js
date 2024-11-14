"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2800],{2800:(U,g,o)=>{o.r(g),o.d(g,{ViewReservationComponent:()=>m});var t=o(4496),M=o(1680),u=o(1236),p=o(4820),E=o(3480),f=o(3616),h=o(8824),I=o(7692);function A(s,R){if(1&s&&t.wR5(0,"app-public-reservation-confirmation",0),2&s){const r=t.GaO();t.E7m("reservation",r.reservation())}}function T(s,R){1&s&&t.wR5(0,"tui-loader",1)}function N(s,R){1&s&&(t.I0R(0,"p",2),t.SAx(1),t.Mff(2,3),t.wR5(3,"span",4),t.U7j(),t.k70(),t.C$Y())}let m=(()=>{class s{constructor(){this.destroy$=(0,t.uUt)(E.UF),this.router=(0,t.uUt)(u.E5),this.route=(0,t.uUt)(u.gV),this.reservations=(0,t.uUt)(p.G),this.loading=(0,t.OCB)(!0),this.reservation=(0,t.OCB)(null)}ngOnInit(){this.route.params.subscribe({next:r=>{const a=r.secret;"string"==typeof a&&a.length>0&&this.loadReservation(a)}})}loadReservation(r){this.reservation.set(null),this.reservations.load(r).pipe((0,f.a)(this.destroy$),(0,h.U)(()=>this.loading.set(!1))).subscribe({next:a=>{this.reservation.set(a)}})}static#t=this.\u0275fac=function(a){return new(a||s)};static#o=this.\u0275cmp=t.In1({type:s,selectors:[["app-view-reservation"]],standalone:!0,features:[t.M5G([E.UF]),t.UHJ],decls:3,vars:1,consts:()=>{let r;return r="\n          " + "\ufffd#3\ufffd" + "\n           We were unable to find your reservation. \n          " + "\ufffd/#3\ufffd" + "\n           Is it in the past? Or has it been deleted? \n        ",[[3,"reservation"],["size","xl"],[1,"text-xl","text-center","mb-3"],r,[1,"text-red-600"]]},template:function(a,P){1&a&&t.yuY(0,A,1,1,"app-public-reservation-confirmation",0)(1,T,1,0)(2,N,4,0),2&a&&t.C0Y(0,P.reservation()?0:P.loading()?1:2)},dependencies:[M.I,I.Sk,I.Cb],styles:["[_nghost-%COMP%]{background-color:var(--sixth-color);display:block;overflow:hidden;padding-top:2em;padding-bottom:2em}"],changeDetection:0})}return s})()},1680:(U,g,o)=>{o.d(g,{I:()=>Y});var t=o(4496),M=o(7296),u=o(7048),p=o(8256),E=o(8392),f=o(4820),h=o(6616),I=o(1128),A=o(3480),T=o(3616),N=o(8824),m=o(1368),s=o(1236),R=o(8212),r=o(1512),a=o(7692),P=o(908);function L(n,O){1&n&&(t.I0R(0,"p",0),t.aS0(1,9),t.C$Y())}function i(n,O){if(1&n&&(t.I0R(0,"p",0),t.aS0(1,10),t.C$Y(),t.I0R(2,"div",11)(3,"a",12),t.SAx(4),t.aS0(5,13),t.k70(),t.C$Y()()),2&n){const e=t.GaO(4);t.yG2(3),t._6D("href",e.reservation.payment.hpp_url,t.K6U)}}function d(n,O){if(1&n&&t.yuY(0,L,2,0,"p",8)(1,i,6,1),2&n){const e=t.GaO(3);t.C0Y(0,e.isFreshReservation()?0:1)}}function _(n,O){1&n&&(t.I0R(0,"p",0),t.aS0(1,14),t.C$Y())}function c(n,O){if(1&n&&t.yuY(0,d,2,1)(1,_,2,0),2&n){const e=t.GaO(2);let C;t.C0Y(0,"todo"===(C=e.reservation.payment.status)?0:"paid"===C?1:-1)}}function S(n,O){1&n&&(t.I0R(0,"p",0),t.aS0(1,15),t.C$Y())}function D(n,O){1&n&&(t.SAx(0),t.aS0(1,16),t.k70())}function k(n,O){1&n&&t.wR5(0,"tui-loader",19)}function K(n,O){1&n&&(t.SAx(0),t.aS0(1,20),t.k70())}function W(n,O){if(1&n){const e=t.KQA();t.SAx(0),t.aS0(1,17),t.k70(),t.I0R(2,"span",18),t.qCj("click",function(){t.usT(e);const v=t.GaO(2);return t.CGJ(v.resendConfirmation())}),t.yuY(3,k,1,0,"tui-loader",19)(4,K,2,0),t.C$Y()}if(2&n){const e=t.GaO(2);t.yG2(3),t.C0Y(3,e.resendingConfirmation()?3:4)}}function z(n,O){if(1&n&&(t.yuY(0,c,2,1)(1,S,2,0),t.I0R(2,"p",0),t.yuY(3,D,2,0,"ng-container")(4,W,5,1),t.C$Y(),t.I0R(5,"p",0),t.SAx(6),t.aS0(7,1),t.k70(),t.OEk(8),t.wVc(9,"date"),t.wVc(10,"date"),t.C$Y(),t.wR5(11,"app-public-message",2),t.I0R(12,"div",3),t.SAx(13),t.aS0(14,4),t.k70(),t.I0R(15,"app-contact-us"),t.OEk(16,"Contattaci"),t.C$Y(),t.I0R(17,"span",5),t.OEk(18,"-"),t.C$Y(),t.I0R(19,"a",6),t.SAx(20),t.aS0(21,7),t.k70(),t.C$Y()()),2&n){const e=t.GaO();t.C0Y(0,e.reservation.payment?0:1),t.yG2(3),t.C0Y(3,e.isFreshReservation()?3:4),t.yG2(5),t.CAO(" ",t.g7$(9,6,e.reservation.datetime,"EEEE d MMMM y")," ",t.g7$(10,9,e.reservation.datetime,"HH:mm"),". "),t.yG2(3),t.E7m("location","existing-reservation-form"),t.yG2(8),t.CI5("routerLink","/cr/",e.reservation.secret,"")}}let Y=(()=>{class n{constructor(){this.notifications=(0,t.uUt)(I.E),this.reservations=(0,t.uUt)(f.G),this.destroy$=(0,t.uUt)(A.UF),this.localStorage=(0,t.uUt)(h.s),this.resendingConfirmation=(0,t.OCB)(!1)}isFreshReservation(){return this.reservation&&this.reservation.created_at?Date.now()-this.reservation.created_at.getTime()<3e5:(console.warn("isFreshReservation","missing reservation or created_at",this.reservation),!1)}resendConfirmation(){const e=this.reservation?.secret;e&&(this.resendingConfirmation.set(!0),this.reservations.resendConfirmation(e).pipe((0,T.a)(this.destroy$),(0,N.U)(()=>this.resendingConfirmation.set(!1))).subscribe({next:()=>{this.notifications.fireSnackBar("The email will arrive shortly.")},error:C=>{this.notifications.error(C instanceof u.gj?(0,p.mk)(C):E.a)}}))}static#t=this.\u0275fac=function(C){return new(C||n)};static#o=this.\u0275cmp=t.In1({type:n,selectors:[["app-public-reservation-confirmation"]],inputs:{reservation:"reservation"},standalone:!0,features:[t.UHJ],decls:1,vars:1,consts:()=>{let e,C,v,x,B,$,F,V,b,y,G;return e="The reservation is set for",C="Forgot something?",v="Cancel reservation",x="\n           The payment to confirm the reservation does not appear to have been\n          successful, but it is possible that you may need to wait a few\n          minutes. Please try again later. \n        ",B="The payment to confirm the reservation has not been successful.",$="Execute payment",F="\n           The payment for the reservation has been successfully completed and\n          the reservation is confirmed. \n        ",V="Your reservation has been created.",b="You will receive a confirmation email shortly.",y="You should have received a confirmation email. Has it not arrived?",G="Forward email",[[1,"text-xl","text-center","mb-3"],e,[1,"block","mb-3","text-center","text-xl",3,"location"],[1,"flex","items-center","justify-center","mb-3","text-xl"],C,[1,"mx-2"],["tuiLink","",3,"routerLink"],v,["class","text-xl text-center mb-3"],x,B,[1,"flex","items-center","justify-center","mb-3"],["size","m","tuiButton","","appearance","custom",1,"btn-primary","me-2",3,"href"],$,F,V,b,y,["type","button","role","button","size","m",1,"cursor-pointer","inline-flex","items-center","ms-2","underline",3,"click"],["size","xs"],G]},template:function(C,v){1&C&&t.yuY(0,z,22,12),2&C&&t.C0Y(0,v.reservation?0:-1)},dependencies:[m.y,R.CI,R.Kw,M.K,s.ER,r.w,r.C,P.Q,a.Sk,a.Cb],changeDetection:0})}return n})()},1512:(U,g,o)=>{o.d(g,{C:()=>P,w:()=>L});var t=o(4496),M=o(900),u=o(4392),p=o(4164),E=o(3480),f=o(4680),h=o(3972),I=o(5944),A=o(3412),T=o(4704),N=o(3656),m=o(1368);const s=["tuiLink",""];function R(i,d){if(1&i&&t.wR5(0,"tui-svg",3),2&i){const _=t.GaO();t.E7m("src",_.icon||"")}}function r(i,d){if(1&i&&t.wR5(0,"tui-svg",4),2&i){const _=t.GaO();t.E7m("src",_.icon||"")}}const a=["*"];let P=(()=>{class i{constructor(_,c,S){this.el=_,this.mode$=c,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,A.U)((0,M.Ax)(this.el.nativeElement,"focusin").pipe((0,T.k)(u.Ml)),(0,M.Ax)(this.el.nativeElement,"focusout").pipe((0,T.k)(u.so))),S.subscribe(D=>{this.focusVisible=D})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,p.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return i.\u0275fac=function(_){return new(_||i)(t.GI1(t.GMv),t.GI1(I.Yx),t.GI1(E.MF))},i.\u0275cmp=t.In1({type:i,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(_,c){1&_&&t.qCj("$.data-mode.attr",function(){return c.mode$}),2&_&&(t.e48("data-host-mode",c.mode),t.eAK("_pseudo",c.pseudo)("_icon-rotated",c.iconRotated)("_focus-visible",c.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,f.NK)(i),E.MF,E.UF,h.Ir])],attrs:s,ngContentSelectors:a,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(_,c){1&_&&(t.kPM(),t.yuY(0,R,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,r,1,1,"tui-svg",2)),2&_&&(t.E7m("ngIf",c.iconAlignLeft),t.yG2(3),t.E7m("ngIf",c.iconAlignRight))},dependencies:[N.Wu,m.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),i})(),L=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[m.MD,N.Yt]]}),i})()}}]);