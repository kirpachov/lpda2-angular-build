"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9603],{4592:(C,g,o)=>{o.d(g,{u:()=>h});var t=o(4496),_=o(3480),l=o(8304),r=o(3616),c=o(8824),n=o(7692),u=o(5656);let e=(()=>{class i{transform(s){return null==s||"object"!=typeof s||Array.isArray(s)?[]:Object.keys(s).map(v=>[v,s[v]])}static#t=this.\u0275fac=function(v){return new(v||i)};static#e=this.\u0275pipe=t.UTH({name:"objectToArray",type:i,pure:!0,standalone:!0})}return i})();function d(i,m){if(1&i&&t.wR5(0,"tui-loader",0),2&i){const s=t.GaO();t.E7m("showLoader",s.showLoader)("size","s")}}const M=(i,m)=>m.turn.id;function E(i,m){1&i&&t._Xx(0)}const O=(i,m)=>m[0];function P(i,m){1&i&&t.OEk(0,"Quante persone ci sono al tavolo in questione")}function T(i,m){if(1&i&&(t.I0R(0,"th",4),t.OEk(1),t.I0R(2,"span"),t.aS0(3,11),t.C$Y()()),2&i){const s=m.$implicit;t.yG2(),t.oRS(" ",s[0]," ")}}function R(i,m){1&i&&t.OEk(0,"Quanti tavoli con lo stesso numero di persone")}function y(i,m){if(1&i&&(t.I0R(0,"td",8)(1,"span"),t.OEk(2),t.C$Y()()),2&i){const s=m.$implicit;t.yG2(2),t.cNF(s[1])}}function D(i,m){if(1&i&&(t.I0R(0,"p",1)(1,"b"),t.OEk(2),t.C$Y()(),t.I0R(3,"table",2)(4,"thead")(5,"tr",3)(6,"th",4),t.yuY(7,P,1,0,"ng-template",null,5,t.gJz),t.I0R(9,"span",6),t.aS0(10,7),t.C$Y()(),t.c53(11,T,4,1,"th",12,O),t.wVc(13,"objectToArray"),t.C$Y()(),t.I0R(14,"tbody")(15,"tr",3)(16,"td",8),t.yuY(17,R,1,0,"ng-template",null,9,t.gJz),t.I0R(19,"span",6),t.aS0(20,10),t.C$Y()(),t.c53(21,y,3,1,"td",13,O),t.wVc(23,"objectToArray"),t.C$Y()()()),2&i){const s=m.$implicit,v=t.Gew(8),f=t.Gew(18);t.yG2(2),t.cNF(s.turn.name),t.yG2(7),t.E7m("tuiHint",v),t.yG2(2),t.oho(t.kDX(13,3,s.summary)),t.yG2(8),t.E7m("tuiHint",f),t.yG2(2),t.oho(t.kDX(23,5,s.summary))}}const A=()=>[];function a(i,m){if(1&i&&(t.yuY(0,E,1,0),t.c53(1,D,24,7,null,null,M)),2&i){const s=t.GaO();t.C0Y(0,(s.data()||t.q4q(1,A)).length>0?0:-1),t.yG2(),t.oho(s.data())}}const p=["*"];let h=(()=>{class i{constructor(){this.destroy$=(0,t.uUt)(_.UF),this.service=(0,t.uUt)(l.S),this.data=(0,t.OCB)(null),this.loading=(0,t.OCB)(!1),this.showLoader=!0,this.filters=null}ngOnChanges(){this.query()}query(){this.loading.set(!0),this.service.tablesSummary(this.filters??{}).pipe((0,r.a)(this.destroy$),(0,c.U)(()=>this.loading.set(!1))).subscribe({next:s=>{this.data.set(s)}})}static#t=this.\u0275fac=function(v){return new(v||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-reservation-tables-summary"]],inputs:{showLoader:"showLoader",filters:"filters"},standalone:!0,features:[t.M5G([_.UF]),t.SYr,t.UHJ],ngContentSelectors:p,decls:2,vars:1,consts:()=>{let s,v,f;return s="Tipo:",v="Quantit\xE0:",f="persone",[[3,"showLoader","size"],[1,"font-xl"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__th"],["headerExplain",""],[3,"tuiHint"],s,[1,"tui-table__td"],["valueExplain",""],v,f,["class","tui-table__th"],["class","tui-table__td"]]},template:function(v,f){1&v&&(t.kPM(),t.yuY(0,d,1,2,"tui-loader",0)(1,a,3,2)),2&v&&t.C0Y(0,f.loading()?0:1)},dependencies:[n.Sk,n.Cb,e,u.WY,u.lh,u.SL,u.i6,u.IT],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04)}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.9rem}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__th[_ngcontent-%COMP%]{padding:.5rem;height:inherit}"],changeDetection:0})}return i})()},9772:(C,g,o)=>{o.d(g,{CU:()=>_,ye:()=>l});const t=(new Date).getTimezoneOffset()/60;function _(r,c=t){return"string"==typeof r&&r.length>0&&r.match(/\d{2}:\d{2}/)?`${Number(r.split(":")[0])-c}:${r.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:r}),"")}function l(r,c=t){return _(r,-1*c)}},6360:(C,g,o)=>{o.d(g,{e:()=>r});var t=o(8400),_=o(9772);class l extends t.w{constructor(n){super(n),this.title=n.title,this.status=n.status,this.active_from=n.active_from?new Date(n.active_from):void 0,this.active_to=n.active_to?new Date(n.active_to):void 0,this.preorder_type=n.preorder_type,this.payment_value=n.payment_value,this.message=n.message}}class r extends t.w{constructor(n){super(n),this.name=n.name,this.weekday=n.weekday,this.step=n.step,this.valid_times=n.valid_times,this.starts_at=n.starts_at?(0,_.CU)(n.starts_at):void 0,this.ends_at=n.ends_at?(0,_.CU)(n.ends_at):void 0,this.preorder_reservation_group=n.preorder_reservation_group?new l(n.preorder_reservation_group):void 0}}},5180:(C,g,o)=>{o.d(g,{C:()=>n});var t=o(8400);class _ extends t.w{constructor(e){super(e),this.image_pixel_id=e.image_pixel_id,this.event_data=e.event_data,this.event_time=e.event_time?new Date(e.event_time):void 0}}class l extends t.w{constructor(e){super(e),this.image_id=e.image_id,this.delivered_email_id=e.delivered_email_id,this.record_type=e.record_type,this.record_id=e.record_id,this.event_type=e.event_type,this.secret=e.secret,this.events=e.events?e.events.map(d=>new _(d)):[]}}class r extends t.w{constructor(e){super(e),this.record_id=e.record_id,this.record_type=e.record_type,this.text=e.text,this.html=e.html,this.subject=e.subject,this.headers=e.headers,this.raw=e.raw,this.image_pixels=e.image_pixels?e.image_pixels.map(d=>new l(d)):[]}}class c extends t.w{constructor(e){super(e),this.hpp_url=e.hpp_url,this.value=e.value,this.status=e.status,this.reservation_id=e.reservation_id,this.preorder_type=e.preorder_type,this.other=e.other}}class n extends t.w{constructor(e){super(e),this.fullname=e.fullname,this.datetime=e.datetime?new Date(e.datetime):void 0,this.status=e.status,this.secret=e.secret,this.adults=e.adults,this.children=e.children,this.table=e.table,this.notes=e.notes,this.email=e.email,this.phone=e.phone,this.payment=e.payment?new c(e.payment):void 0,this.delivered_emails=e.delivered_emails?e.delivered_emails.map(d=>new r(d)):[]}}},8304:(C,g,o)=>{o.d(g,{S:()=>c});var t=o(6012),_=o(5180),l=o(4704),r=o(4496);let c=(()=>{class n extends t.s{constructor(){super(_.C,"admin/reservations")}tablesSummary(e={}){return this.get("tables_summary",{params:e})}deliverConfirmationEmail(e){return this.post(`${e}/deliver_confirmation_email`,{}).pipe((0,l.k)(d=>this.mapItem(d)))}static#t=this.\u0275fac=function(d){return new(d||n)};static#e=this.\u0275prov=r.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},1632:(C,g,o)=>{o.d(g,{k:()=>r,u:()=>c});var t=o(4496),_=o(900),l=o(4680);let r=(()=>{class n{constructor(e,d){this.el=e,this.takeOnlyTrustedEvents=d,this.tuiPressedChange=(0,_.Y7)(this.el.nativeElement,{onlyTrusted:this.takeOnlyTrustedEvents})}}return n.\u0275fac=function(e){return new(e||n)(t.GI1(t.GMv),t.GI1(l.mm))},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiPressedChange",""]],outputs:{tuiPressedChange:"tuiPressedChange"}}),n})(),c=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({}),n})()},1200:(C,g,o)=>{o.d(g,{A:()=>n,m:()=>u});var t=o(4496),_=o(900),l=o(3480),r=o(800),c=o(3616);let n=(()=>{class e{constructor(M,E,O){this.el=M,this.zone=E,this.destroy$=O,this.eventName=""}ngOnInit(){(0,r.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,_.Uv)(this.zone),(0,_.uy)(),(0,c.a)(this.destroy$)).subscribe()}}return e.\u0275fac=function(M){return new(M||e)(t.GI1(t.GMv),t.GI1(t.WW2),t.GI1(l.UF,2))},e.\u0275dir=t.Sc5({type:e,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[t.Wk5.None,"tuiPreventDefault","eventName"]},features:[t.M5G([l.UF])]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(M){return new(M||e)},e.\u0275mod=t.a4G({type:e}),e.\u0275inj=t.s3X({}),e})()},1512:(C,g,o)=>{o.d(g,{C:()=>D,w:()=>A});var t=o(4496),_=o(900),l=o(4392),r=o(4164),c=o(3480),n=o(4680),u=o(3972),e=o(5944),d=o(3412),M=o(4704),E=o(3656),O=o(1368);const P=["tuiLink",""];function T(a,p){if(1&a&&t.wR5(0,"tui-svg",3),2&a){const h=t.GaO();t.E7m("src",h.icon||"")}}function R(a,p){if(1&a&&t.wR5(0,"tui-svg",4),2&a){const h=t.GaO();t.E7m("src",h.icon||"")}}const y=["*"];let D=(()=>{class a{constructor(h,i,m){this.el=h,this.mode$=i,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,d.U)((0,_.Ax)(this.el.nativeElement,"focusin").pipe((0,M.k)(l.Ml)),(0,_.Ax)(this.el.nativeElement,"focusout").pipe((0,M.k)(l.so))),m.subscribe(s=>{this.focusVisible=s})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,r.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return a.\u0275fac=function(h){return new(h||a)(t.GI1(t.GMv),t.GI1(e.Yx),t.GI1(c.MF))},a.\u0275cmp=t.In1({type:a,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(h,i){1&h&&t.qCj("$.data-mode.attr",function(){return i.mode$}),2&h&&(t.e48("data-host-mode",i.mode),t.eAK("_pseudo",i.pseudo)("_icon-rotated",i.iconRotated)("_focus-visible",i.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,n.NK)(a),c.MF,c.UF,u.Ir])],attrs:P,ngContentSelectors:y,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(h,i){1&h&&(t.kPM(),t.yuY(0,T,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,R,1,1,"tui-svg",2)),2&h&&(t.E7m("ngIf",i.iconAlignLeft),t.yG2(3),t.E7m("ngIf",i.iconAlignRight))},dependencies:[E.Wu,O.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})(),A=(()=>{class a{}return a.\u0275fac=function(h){return new(h||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[O.MD,E.Yt]]}),a})()}}]);