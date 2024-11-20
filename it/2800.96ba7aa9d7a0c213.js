"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2800],{2800:(U,M,o)=>{o.r(M),o.d(M,{ViewReservationComponent:()=>m});var t=o(4496),I=o(1680),R=o(1236),p=o(4820),d=o(3480),f=o(3616),A=o(8824),g=o(7692);function S(s,u){if(1&s&&t.wR5(0,"app-public-reservation-confirmation",0),2&s){const r=t.GaO();t.E7m("reservation",r.reservation())}}function N(s,u){1&s&&t.wR5(0,"tui-loader",1)}function T(s,u){1&s&&(t.I0R(0,"p",2),t.SAx(1),t.Mff(2,3),t.wR5(3,"span",4),t.U7j(),t.k70(),t.C$Y())}let m=(()=>{class s{constructor(){this.destroy$=(0,t.uUt)(d.UF),this.router=(0,t.uUt)(R.E5),this.route=(0,t.uUt)(R.gV),this.reservations=(0,t.uUt)(p.G),this.loading=(0,t.OCB)(!0),this.reservation=(0,t.OCB)(null)}ngOnInit(){this.route.params.subscribe({next:r=>{const a=r.secret;"string"==typeof a&&a.length>0&&this.loadReservation(a)}})}loadReservation(r){this.reservation.set(null),this.reservations.load(r).pipe((0,f.a)(this.destroy$),(0,A.U)(()=>this.loading.set(!1))).subscribe({next:a=>{this.reservation.set(a)}})}static#t=this.\u0275fac=function(a){return new(a||s)};static#o=this.\u0275cmp=t.In1({type:s,selectors:[["app-view-reservation"]],standalone:!0,features:[t.M5G([d.UF]),t.UHJ],decls:3,vars:1,consts:()=>{let r;return r="" + "\ufffd#3\ufffd" + "Non siamo stati in grado di trovare la tua prenotazione." + "\ufffd/#3\ufffd" + " \xC8 nel passato? O \xE8 stata eliminata? ",[[3,"reservation"],["size","xl"],[1,"text-xl","text-center","mb-3"],r,[1,"text-red-600"]]},template:function(a,P){1&a&&t.yuY(0,S,1,1,"app-public-reservation-confirmation",0)(1,N,1,0)(2,T,4,0),2&a&&t.C0Y(0,P.reservation()?0:P.loading()?1:2)},dependencies:[I.I,g.Sk,g.Cb],styles:["[_nghost-%COMP%]{background-color:var(--sixth-color);display:block;overflow:hidden;padding-top:2em;padding-bottom:2em}"],changeDetection:0})}return s})()},1680:(U,M,o)=>{o.d(M,{I:()=>H});var t=o(4496),I=o(7296),R=o(7048),p=o(8256),d=o(8392),f=o(4820),A=o(6616),g=o(1128),S=o(3480),N=o(3616),T=o(8824),m=o(1368),s=o(1236),u=o(8212),r=o(1512),a=o(7692),P=o(908);function L(n,l){1&n&&(t.I0R(0,"p",0),t.aS0(1,10),t.C$Y())}function i(n,l){if(1&n&&(t.I0R(0,"p",0),t.aS0(1,11),t.C$Y(),t.I0R(2,"div",12)(3,"a",13),t.SAx(4),t.aS0(5,14),t.k70(),t.C$Y()()),2&n){const e=t.GaO(4);t.yG2(3),t._6D("href",e.reservation.payment.hpp_url,t.K6U)}}function E(n,l){if(1&n&&t.yuY(0,L,2,0,"p",9)(1,i,6,1),2&n){const e=t.GaO(3);t.C0Y(0,e.isFreshReservation()?0:1)}}function _(n,l){1&n&&(t.I0R(0,"p",0),t.aS0(1,15),t.C$Y())}function O(n,l){1&n&&(t.I0R(0,"p",0),t.aS0(1,16),t.C$Y())}function h(n,l){if(1&n&&t.yuY(0,E,2,1)(1,_,2,0)(2,O,2,0),2&n){const e=t.GaO(2);let C;t.C0Y(0,"todo"===(C=e.reservation.payment.status)?0:"paid"===C?1:"refunded"===C?2:-1)}}function D(n,l){1&n&&(t.I0R(0,"p",0),t.aS0(1,17),t.C$Y())}function W(n,l){1&n&&(t.SAx(0),t.aS0(1,18),t.k70())}function z(n,l){1&n&&t.wR5(0,"tui-loader",21)}function Y(n,l){1&n&&(t.SAx(0),t.aS0(1,22),t.k70())}function X(n,l){if(1&n){const e=t.KQA();t.SAx(0),t.aS0(1,19),t.k70(),t.I0R(2,"span",20),t.qCj("click",function(){t.usT(e);const v=t.GaO(2);return t.CGJ(v.resendConfirmation())}),t.yuY(3,z,1,0,"tui-loader",21)(4,Y,2,0),t.C$Y()}if(2&n){const e=t.GaO(2);t.yG2(3),t.C0Y(3,e.resendingConfirmation()?3:4)}}function j(n,l){if(1&n&&(t.yuY(0,h,3,1)(1,D,2,0),t.I0R(2,"p",0),t.yuY(3,W,2,0,"ng-container")(4,X,5,1),t.C$Y(),t.I0R(5,"p",0),t.SAx(6),t.aS0(7,1),t.k70(),t.OEk(8),t.wVc(9,"date"),t.wVc(10,"date"),t.C$Y(),t.wR5(11,"app-public-message",2),t.I0R(12,"div",3),t.SAx(13),t.aS0(14,4),t.k70(),t.I0R(15,"app-contact-us"),t.SAx(16),t.aS0(17,5),t.k70(),t.C$Y(),t.I0R(18,"span",6),t.OEk(19,"-"),t.C$Y(),t.I0R(20,"a",7),t.SAx(21),t.aS0(22,8),t.k70(),t.C$Y()()),2&n){const e=t.GaO();t.C0Y(0,e.reservation.payment?0:1),t.yG2(3),t.C0Y(3,e.isFreshReservation()?3:4),t.yG2(5),t.CAO(" ",t.g7$(9,6,e.reservation.datetime,"EEEE d MMMM y")," ",t.g7$(10,9,e.reservation.datetime,"HH:mm"),". "),t.yG2(3),t.E7m("location","existing-reservation-form"),t.yG2(9),t.CI5("routerLink","/cr/",e.reservation.secret,"")}}let H=(()=>{class n{constructor(){this.notifications=(0,t.uUt)(g.E),this.reservations=(0,t.uUt)(f.G),this.destroy$=(0,t.uUt)(S.UF),this.localStorage=(0,t.uUt)(A.s),this.resendingConfirmation=(0,t.OCB)(!1)}isFreshReservation(){return this.reservation&&this.reservation.created_at?Date.now()-this.reservation.created_at.getTime()<3e5:(console.warn("isFreshReservation","missing reservation or created_at",this.reservation),!1)}resendConfirmation(){const e=this.reservation?.secret;e&&(this.resendingConfirmation.set(!0),this.reservations.resendConfirmation(e).pipe((0,N.a)(this.destroy$),(0,T.U)(()=>this.resendingConfirmation.set(!1))).subscribe({next:()=>{this.notifications.fireSnackBar("L'email arriver\xE0 a breve.")},error:C=>{this.notifications.error(C instanceof R.gj?(0,p.mk)(C):d.a)}}))}static#t=this.\u0275fac=function(C){return new(C||n)};static#o=this.\u0275cmp=t.In1({type:n,selectors:[["app-public-reservation-confirmation"]],inputs:{reservation:"reservation"},standalone:!0,features:[t.UHJ],decls:1,vars:1,consts:()=>{let e,C,v,$,B,F,x,V,b,y,G,k,K;return e="La prenotazione \xE8 fissata per ",C="Dimenticato qualcosa?",v="Contattaci",$="Cancella prenotazione",B="Il pagamento di conferma della prenotazione non risulta essere andato a buon fine, ma \xE8 possibile che sia necessario aspettare qualche minuto. Riprova pi\xF9 tardi.",F="Il pagamento di conferma della prenotazione non risulta essere andato a buon fine.",x="Esegui pagamento",V="Il pagamento della prenotazione \xE8 andato a buon fine e la prenotazione \xE8 confermata.",b="Il pagamento della prenotazione \xE8 stato rimborsato.",y="La tua prenotazione \xE8 stata creata.",G="Riceverai a breve un'email di conferma.",k="Dovresti aver ricevuto una mail di conferma. Non \xE8 arrivata?",K="Rimanda email",[[1,"text-xl","text-center","mb-3"],e,[1,"block","mb-3","text-center","text-xl",3,"location"],[1,"flex","items-center","justify-center","mb-3","text-xl"],C,v,[1,"mx-2"],["tuiLink","",3,"routerLink"],$,["class","text-xl text-center mb-3"],B,F,[1,"flex","items-center","justify-center","mb-3"],["size","m","tuiButton","","appearance","custom",1,"btn-primary","me-2",3,"href"],x,V,b,y,G,k,["type","button","role","button","size","m",1,"cursor-pointer","inline-flex","items-center","ms-2","underline",3,"click"],["size","xs"],K]},template:function(C,v){1&C&&t.yuY(0,j,23,12),2&C&&t.C0Y(0,v.reservation?0:-1)},dependencies:[m.y,u.CI,u.Kw,I.K,s.ER,r.w,r.C,P.Q,a.Sk,a.Cb],changeDetection:0})}return n})()},1512:(U,M,o)=>{o.d(M,{C:()=>P,w:()=>L});var t=o(4496),I=o(900),R=o(4392),p=o(4164),d=o(3480),f=o(4680),A=o(3972),g=o(5944),S=o(3412),N=o(4704),T=o(3656),m=o(1368);const s=["tuiLink",""];function u(i,E){if(1&i&&t.wR5(0,"tui-svg",3),2&i){const _=t.GaO();t.E7m("src",_.icon||"")}}function r(i,E){if(1&i&&t.wR5(0,"tui-svg",4),2&i){const _=t.GaO();t.E7m("src",_.icon||"")}}const a=["*"];let P=(()=>{class i{constructor(_,O,h){this.el=_,this.mode$=O,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,S.U)((0,I.Ax)(this.el.nativeElement,"focusin").pipe((0,N.k)(R.Ml)),(0,I.Ax)(this.el.nativeElement,"focusout").pipe((0,N.k)(R.so))),h.subscribe(D=>{this.focusVisible=D})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,p.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return i.\u0275fac=function(_){return new(_||i)(t.GI1(t.GMv),t.GI1(g.Yx),t.GI1(d.MF))},i.\u0275cmp=t.In1({type:i,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(_,O){1&_&&t.qCj("$.data-mode.attr",function(){return O.mode$}),2&_&&(t.e48("data-host-mode",O.mode),t.eAK("_pseudo",O.pseudo)("_icon-rotated",O.iconRotated)("_focus-visible",O.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,f.NK)(i),d.MF,d.UF,A.Ir])],attrs:s,ngContentSelectors:a,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(_,O){1&_&&(t.kPM(),t.yuY(0,u,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,r,1,1,"tui-svg",2)),2&_&&(t.E7m("ngIf",O.iconAlignLeft),t.yG2(3),t.E7m("ngIf",O.iconAlignRight))},dependencies:[T.Wu,m.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),i})(),L=(()=>{class i{}return i.\u0275fac=function(_){return new(_||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[m.MD,T.Yt]]}),i})()}}]);