(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[6088],{26088:(P,g,e)=>{"use strict";e.r(g),e.d(g,{ListComponent:()=>B});var t=e(54496),d=e(1560),l=e(58212),r=e(27692),s=e(41512),n=e(42516),c=e(83480),O=e(87556),f=e(53616),I=e(66684),T=e(68824),L=e(1128),R=e(38256),D=e(48392),y=e(58640),C=e(31236),x=e(14476),M=e(16236);const E=(i,v)=>v.id;function u(i,v){if(1&i){const o=t.KQA();t.I0R(0,"div",11)(1,"div",12),t.OEk(2),t.C$Y(),t.I0R(3,"div",13)(4,"div",14)(5,"span",15),t.OEk(6),t.C$Y(),t.I0R(7,"span",16),t.OEk(8),t.C$Y()(),t.I0R(9,"span",17),t.SAx(10),t.aS0(11,18),t.k70(),t.C$Y()(),t.I0R(12,"div",8)(13,"a",19)(14,"mat-icon"),t.OEk(15,"edit"),t.C$Y()(),t.I0R(16,"button",20),t.qCj("click",function(){t.usT(o);const m=t.GaO().$implicit,p=t.GaO(3);return t.CGJ(p.delete(m.id))}),t.I0R(17,"mat-icon"),t.OEk(18,"delete"),t.C$Y()()()()}if(2&i){const o=t.GaO().$implicit;t.yG2(2),t.oRS(" ",o.name," "),t.yG2(4),t.cNF(o.starts_at),t.yG2(2),t.oRS("- ",o.ends_at,""),t.yG2(3),t.oBb(o.step),t.Ylm(11),t.yG2(2),t._6D("routerLink",o.id)}}function h(i,v){1&i&&t.yuY(0,u,19,5,"div",10),2&i&&t.C0Y(0,v.$implicit.id?0:-1)}const A=i=>({weekday:i});function S(i,v){if(1&i&&(t.I0R(0,"tr",3)(1,"td",4)(2,"p",5),t.OEk(3),t.wVc(4,"weekday"),t.C$Y()(),t.I0R(5,"td",4)(6,"div",6),t.c53(7,h,1,1,null,null,E),t.C$Y(),t.I0R(9,"a",7)(10,"span",8)(11,"mat-icon"),t.OEk(12,"add"),t.C$Y(),t.I0R(13,"span"),t.aS0(14,9),t.C$Y()()()()()),2&i){const o=v.$implicit,a=t.GaO(2);t.yG2(3),t.cNF(t.kDX(4,2,o)),t.yG2(4),t.oho(a.itemsByWeekday()[o]),t.yG2(2),t.E7m("queryParams",t.S45(4,A,o))}}function k(i,v){if(1&i&&(t.I0R(0,"table",2)(1,"tbody"),t.c53(2,S,15,6,"tr",21,t.oxv),t.C$Y()()),2&i){const o=t.GaO();t.yG2(2),t.oho(o.weekdays)}}function U(i,v){if(1&i&&t.wR5(0,"tui-loader",22),2&i){const o=t.GaO(2);t.E7m("overlay",!0)("showLoader",o.loading())}}function $(i,v){1&i&&(t.I0R(0,"app-no-items")(1,"h2"),t.OEk(2,"Dev'esserci stato un errore :'("),t.C$Y()())}function b(i,v){if(1&i&&t.yuY(0,U,1,2,"tui-loader",22)(1,$,3,0),2&i){const o=t.GaO();t.C0Y(0,o.loading()?0:1)}}let B=(()=>{class i{constructor(){this.destroy$=(0,t.uUt)(c.UF),this.service=(0,t.uUt)(O.K),this.notifications=(0,t.uUt)(L.E),this.router=(0,t.uUt)(C.E5),this._=(0,t.uUt)(x.OY).setTitle(M.$localize`Turni di prenotazioni | La Porta D'Acqua`),this.weekdays=Array.from({length:7},(o,a)=>`${a}`),this.loading=(0,t.OCB)(!1),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>(this.data()?.items??[]).sort((o,a)=>o.starts_at&&a.starts_at?Number(o.starts_at?.split(":")[0])-Number(a.starts_at?.split(":")[0]):0)),this.itemsByWeekday=(0,t.S6b)(()=>this.items().reduce((o,a)=>{if(null!=a.weekday&&null!=a.weekday){const m=`${a.weekday}`;o[m]||=[],o[m].push(a)}return o},{}))}ngOnInit(){this.search(),this.router.events.pipe((0,f.a)(this.destroy$),(0,I.I)(o=>o instanceof C.MT)).subscribe({next:()=>this.search()})}delete(o){if(!("number"==typeof o&&o>0))return console.error(`Invalid item id: ${o}`),void this.notifications.error(D.a);this.notifications.confirm(M.$localize`Sei sicuro di voler cancellare questo turno?`).subscribe({next:a=>{a&&this.confirmedDelete(o)}})}confirmedDelete(o){this.loading.set(!0),this.service.destroy(o).pipe((0,f.a)(this.destroy$),(0,T.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:a=>{this.notifications.error((0,R.mk)(a)||D.a)}})}search(){this.loading.set(!0),this.service.search({per_page:1e3}).pipe((0,f.a)(this.destroy$),(0,T.U)(()=>this.loading.set(!1))).subscribe({next:o=>this.data.set(o),error:o=>{this.data.set(null),this.notifications.error((0,R.mk)(o)||D.a)}})}static#t=this.\u0275fac=function(a){return new(a||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-list"]],standalone:!0,features:[t.UHJ],decls:5,vars:1,consts:()=>{let o,a,m;return o=M.$localize`Turni di prenotazioni`,a=M.$localize`Aggiungi`,m=M.$localize`Ogni ${"\ufffd0\ufffd"}:INTERPOLATION: minuti`,[o,["class","tui-table"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],[1,"text-xl"],[1,"flex","flex-col"],["routerLink","new","tuiLink","",3,"queryParams"],[1,"flex","items-center"],a,["class","flex flex-row items-center justify-between mb-5"],[1,"flex","flex-row","items-center","justify-between","mb-5"],[1,"border","border-slate-400","rounded-lg","p-3","me-2"],[1,"flex","flex-col","items-center","justify-center"],[1,"flex","flex-row","items-center","justify-center"],[1,"me-1"],[1,"me-2"],[1,"text-sm","text-slate-400"],m,["tuiLink","",1,"me-2",3,"routerLink"],["size","m","tuiIconButton","","type","button","appearance","secondary-destructive",3,"click"],["class","tui-table__tr tui-table__tr_border_none"],["size","xl",3,"overlay","showLoader"]]},template:function(a,m){1&a&&(t.I0R(0,"h1"),t.aS0(1,0),t.C$Y(),t.yuY(2,k,4,0,"table",1)(3,b,2,1),t.wR5(4,"router-outlet")),2&a&&(t.yG2(2),t.C0Y(2,m.items().length>0?2:3))},dependencies:[l.CI,l.Kw,d.oB,d.qL,r.Sk,r.Cb,n.G,y.O,C.qQ,C.cP,C.ER,s.w,s.C],encapsulation:2})}return i})()},69772:(P,g,e)=>{"use strict";e.d(g,{CU:()=>d,ye:()=>l});const t=(new Date).getTimezoneOffset()/60;function d(r,s=t){return"string"==typeof r&&r.length>0&&r.match(/\d{1,2}:\d{1,2}/)?`${Number(r.split(":")[0])-s}:${r.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:r}),"")}function l(r,s=t){return d(r,-1*s)}},71960:(P,g,e)=>{"use strict";e.d(g,{u:()=>r});var t=e(58400),d=e(35136);class l extends t.w{constructor(n){super(n),this.date=n.date?new Date(n.date):void 0,this.reservation_turn_id=n.reservation_turn_id,this.group_id=n.group_id,this.reservation_turn=n.reservation_turn?new d.e(n.reservation_turn):void 0}}class r extends t.w{constructor(n){super(n),this.turns=[],this.dates=[],this.title=n.title,this.status=n.status,this.preorder_type=n.preorder_type,this.payment_value=n.payment_value,this.message=n.message,this.turns=(n.turns||[]).map(c=>new d.e(c)),this.dates=(n.dates||[]).map(c=>new l(c))}}},35136:(P,g,e)=>{"use strict";e.d(g,{e:()=>r});var t=e(58400),d=e(69772),l=e(71960);class r extends t.w{constructor(n){super(n),this.name=n.name,this.weekday=n.weekday,this.step=n.step,this.valid_times=n.valid_times,this.starts_at=n.starts_at?(0,d.CU)(n.starts_at):void 0,this.ends_at=n.ends_at?(0,d.CU)(n.ends_at):void 0,this.preorder_reservation_group=n.preorder_reservation_group?new l.u(n.preorder_reservation_group):void 0}}},42516:(P,g,e)=>{"use strict";e.d(g,{G:()=>r});var t=e(30220),l=e(54496);let r=(()=>{class s{constructor(){this.weekdays=[t.$localize`Domenica`,t.$localize`Lunedì`,t.$localize`Martedì`,t.$localize`Mercoledì`,t.$localize`Giovedì`,t.$localize`Venerdì`,t.$localize`Sabato`]}transform(c){return"number"!=typeof c&&"string"==typeof c&&(c=parseInt(c)),"number"==typeof c&&c>=0&&c<=6?this.weekdays[c]:null}static#t=this.\u0275fac=function(O){return new(O||s)};static#e=this.\u0275pipe=l.UTH({name:"weekday",type:s,pure:!0,standalone:!0})}return s})()},87556:(P,g,e)=>{"use strict";e.d(g,{K:()=>r});var t=e(36012),d=e(35136),l=e(54496);let r=(()=>{class s extends t.s{constructor(){super(d.e,"admin/reservation_turns")}static#t=this.\u0275fac=function(O){return new(O||s)};static#e=this.\u0275prov=l.wxM({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},41512:(P,g,e)=>{"use strict";e.d(g,{C:()=>x,w:()=>M});var t=e(54496),d=e(50900),l=e(64392),r=e(94164),s=e(83480),n=e(74680),c=e(3972),O=e(85944),f=e(33412),I=e(54704),T=e(93656),L=e(91368);const R=["tuiLink",""];function D(_,E){if(1&_&&t.wR5(0,"tui-svg",3),2&_){const u=t.GaO();t.E7m("src",u.icon||"")}}function y(_,E){if(1&_&&t.wR5(0,"tui-svg",4),2&_){const u=t.GaO();t.E7m("src",u.icon||"")}}const C=["*"];let x=(()=>{class _{constructor(u,h,A){this.el=u,this.mode$=h,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,d.Ax)(this.el.nativeElement,"focusin").pipe((0,I.k)(l.Ml)),(0,d.Ax)(this.el.nativeElement,"focusout").pipe((0,I.k)(l.so))),A.subscribe(S=>{this.focusVisible=S})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,r.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return _.\u0275fac=function(u){return new(u||_)(t.GI1(t.GMv),t.GI1(O.Yx),t.GI1(s.MF))},_.\u0275cmp=t.In1({type:_,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(u,h){1&u&&t.qCj("$.data-mode.attr",function(){return h.mode$}),2&u&&(t.e48("data-host-mode",h.mode),t.eAK("_pseudo",h.pseudo)("_icon-rotated",h.iconRotated)("_focus-visible",h.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,n.NK)(_),s.MF,s.UF,c.Ir])],attrs:R,ngContentSelectors:C,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(u,h){1&u&&(t.kPM(),t.yuY(0,D,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,y,1,1,"tui-svg",2)),2&u&&(t.E7m("ngIf",h.iconAlignLeft),t.yG2(3),t.E7m("ngIf",h.iconAlignRight))},dependencies:[T.Wu,L.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),_})(),M=(()=>{class _{}return _.\u0275fac=function(u){return new(u||_)},_.\u0275mod=t.a4G({type:_}),_.\u0275inj=t.s3X({imports:[[L.MD,T.Yt]]}),_})()},16236:()=>{},30220:()=>{}}]);