"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[6088],{6088:(O,l,e)=>{e.r(l),e.d(l,{ListComponent:()=>$});var t=e(4496),c=e(1560),d=e(8212),_=e(7692),i=e(1512),n=e(2516),C=e(3480),p=e(7556),f=e(3616),D=e(6684),P=e(8824),I=e(1128),L=e(8256),T=e(8392),A=e(8640),M=e(1236),y=e(4476);const x=(s,m)=>m.id;function a(s,m){if(1&s){const o=t.KQA();t.I0R(0,"div",11)(1,"div",12),t.OEk(2),t.C$Y(),t.I0R(3,"div",13)(4,"div",14)(5,"span",15),t.OEk(6),t.C$Y(),t.I0R(7,"span",16),t.OEk(8),t.C$Y()(),t.I0R(9,"span",17),t.SAx(10),t.aS0(11,18),t.k70(),t.C$Y()(),t.I0R(12,"div",8)(13,"a",19)(14,"mat-icon"),t.OEk(15,"edit"),t.C$Y()(),t.I0R(16,"button",20),t.qCj("click",function(){t.usT(o);const h=t.GaO().$implicit,E=t.GaO(3);return t.CGJ(E.delete(h.id))}),t.I0R(17,"mat-icon"),t.OEk(18,"delete"),t.C$Y()()()()}if(2&s){const o=t.GaO().$implicit;t.yG2(2),t.oRS(" ",o.name," "),t.yG2(4),t.cNF(o.starts_at),t.yG2(2),t.oRS("- ",o.ends_at,""),t.yG2(3),t.oBb(o.step),t.Ylm(11),t.yG2(2),t._6D("routerLink",o.id)}}function v(s,m){1&s&&t.yuY(0,a,19,5,"div",10),2&s&&t.C0Y(0,m.$implicit.id?0:-1)}const u=s=>({weekday:s});function g(s,m){if(1&s&&(t.I0R(0,"tr",3)(1,"td",4)(2,"p",5),t.OEk(3),t.wVc(4,"weekday"),t.C$Y()(),t.I0R(5,"td",4)(6,"div",6),t.c53(7,v,1,1,null,null,x),t.C$Y(),t.I0R(9,"a",7)(10,"span",8)(11,"mat-icon"),t.OEk(12,"add"),t.C$Y(),t.I0R(13,"span"),t.aS0(14,9),t.C$Y()()()()()),2&s){const o=m.$implicit,r=t.GaO(2);t.yG2(3),t.cNF(t.kDX(4,2,o)),t.yG2(4),t.oho(r.itemsByWeekday()[o]),t.yG2(2),t.E7m("queryParams",t.S45(4,u,o))}}function R(s,m){if(1&s&&(t.I0R(0,"table",2)(1,"tbody"),t.c53(2,g,15,6,"tr",21,t.oxv),t.C$Y()()),2&s){const o=t.GaO();t.yG2(2),t.oho(o.weekdays)}}function S(s,m){if(1&s&&t.wR5(0,"tui-loader",22),2&s){const o=t.GaO(2);t.E7m("overlay",!0)("showLoader",o.loading())}}function k(s,m){1&s&&(t.I0R(0,"app-no-items")(1,"h2"),t.OEk(2,"Dev'esserci stato un errore :'("),t.C$Y()())}function U(s,m){if(1&s&&t.yuY(0,S,1,2,"tui-loader",22)(1,k,3,0),2&s){const o=t.GaO();t.C0Y(0,o.loading()?0:1)}}let $=(()=>{class s{constructor(){this.destroy$=(0,t.uUt)(C.UF),this.service=(0,t.uUt)(p.K),this.notifications=(0,t.uUt)(I.E),this.router=(0,t.uUt)(M.E5),this._=(0,t.uUt)(y.OY).setTitle("Turni di prenotazioni | La Porta D'Acqua"),this.weekdays=Array.from({length:7},(o,r)=>`${r}`),this.loading=(0,t.OCB)(!1),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>(this.data()?.items??[]).sort((o,r)=>o.starts_at&&r.starts_at?Number(o.starts_at?.split(":")[0])-Number(r.starts_at?.split(":")[0]):0)),this.itemsByWeekday=(0,t.S6b)(()=>this.items().reduce((o,r)=>{if(null!=r.weekday&&null!=r.weekday){const h=`${r.weekday}`;o[h]||=[],o[h].push(r)}return o},{}))}ngOnInit(){this.search(),this.router.events.pipe((0,f.a)(this.destroy$),(0,D.I)(o=>o instanceof M.MT)).subscribe({next:()=>this.search()})}delete(o){if(!("number"==typeof o&&o>0))return console.error(`Invalid item id: ${o}`),void this.notifications.error(T.a);this.notifications.confirm("Sei sicuro di voler cancellare questo turno?").subscribe({next:r=>{r&&this.confirmedDelete(o)}})}confirmedDelete(o){this.loading.set(!0),this.service.destroy(o).pipe((0,f.a)(this.destroy$),(0,P.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:r=>{this.notifications.error((0,L.mk)(r)||T.a)}})}search(){this.loading.set(!0),this.service.search({per_page:1e3}).pipe((0,f.a)(this.destroy$),(0,P.U)(()=>this.loading.set(!1))).subscribe({next:o=>this.data.set(o),error:o=>{this.data.set(null),this.notifications.error((0,L.mk)(o)||T.a)}})}static#t=this.\u0275fac=function(r){return new(r||s)};static#e=this.\u0275cmp=t.In1({type:s,selectors:[["app-list"]],standalone:!0,features:[t.UHJ],decls:5,vars:1,consts:()=>{let o,r,h;return o="Turni di prenotazioni",r="Aggiungi",h="\n          Ogni \n          " + "\ufffd0\ufffd" + "\n           minuti\n        ",[o,["class","tui-table"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],[1,"text-xl"],[1,"flex","flex-col"],["routerLink","new","tuiLink","",3,"queryParams"],[1,"flex","items-center"],r,["class","flex flex-row items-center justify-between mb-5"],[1,"flex","flex-row","items-center","justify-between","mb-5"],[1,"border","border-slate-400","rounded-lg","p-3","me-2"],[1,"flex","flex-col","items-center","justify-center"],[1,"flex","flex-row","items-center","justify-center"],[1,"me-1"],[1,"me-2"],[1,"text-sm","text-slate-400"],h,["tuiLink","",1,"me-2",3,"routerLink"],["size","m","tuiIconButton","","type","button","appearance","secondary-destructive",3,"click"],["class","tui-table__tr tui-table__tr_border_none"],["size","xl",3,"overlay","showLoader"]]},template:function(r,h){1&r&&(t.I0R(0,"h1"),t.aS0(1,0),t.C$Y(),t.yuY(2,R,4,0,"table",1)(3,U,2,1),t.wR5(4,"router-outlet")),2&r&&(t.yG2(2),t.C0Y(2,h.items().length>0?2:3))},dependencies:[d.CI,d.Kw,c.oB,c.qL,_.Sk,_.Cb,n.G,A.O,M.qQ,M.cP,M.ER,i.w,i.C],encapsulation:2})}return s})()},9772:(O,l,e)=>{e.d(l,{CU:()=>c,ye:()=>d});const t=(new Date).getTimezoneOffset()/60;function c(_,i=t){return"string"==typeof _&&_.length>0&&_.match(/\d{1,2}:\d{1,2}/)?`${Number(_.split(":")[0])-i}:${_.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:_}),"")}function d(_,i=t){return c(_,-1*i)}},1960:(O,l,e)=>{e.d(l,{u:()=>_});var t=e(8400),c=e(5136);class d extends t.w{constructor(n){super(n),this.date=n.date?new Date(n.date):void 0,this.reservation_turn_id=n.reservation_turn_id,this.group_id=n.group_id,this.reservation_turn=n.reservation_turn?new c.e(n.reservation_turn):void 0}}class _ extends t.w{constructor(n){super(n),this.turns=[],this.dates=[],this.title=n.title,this.status=n.status,this.preorder_type=n.preorder_type,this.payment_value=n.payment_value,this.message=n.message,this.turns=(n.turns||[]).map(C=>new c.e(C)),this.dates=(n.dates||[]).map(C=>new d(C))}}},5136:(O,l,e)=>{e.d(l,{e:()=>_});var t=e(8400),c=e(9772),d=e(1960);class _ extends t.w{constructor(n){super(n),this.name=n.name,this.weekday=n.weekday,this.step=n.step,this.valid_times=n.valid_times,this.starts_at=n.starts_at?(0,c.CU)(n.starts_at):void 0,this.ends_at=n.ends_at?(0,c.CU)(n.ends_at):void 0,this.preorder_reservation_group=n.preorder_reservation_group?new d.u(n.preorder_reservation_group):void 0}}},2516:(O,l,e)=>{e.d(l,{G:()=>c});var t=e(4496);let c=(()=>{class d{constructor(){this.weekdays=["Domenica","Luned\xEC","Marted\xEC","Mercoled\xEC","Gioved\xEC","Venerd\xEC","Sabato"]}transform(i){return"number"!=typeof i&&"string"==typeof i&&(i=parseInt(i)),"number"==typeof i&&i>=0&&i<=6?this.weekdays[i]:null}static#t=this.\u0275fac=function(n){return new(n||d)};static#e=this.\u0275pipe=t.UTH({name:"weekday",type:d,pure:!0,standalone:!0})}return d})()},7556:(O,l,e)=>{e.d(l,{K:()=>_});var t=e(6012),c=e(5136),d=e(4496);let _=(()=>{class i extends t.s{constructor(){super(c.e,"admin/reservation_turns")}static#t=this.\u0275fac=function(p){return new(p||i)};static#e=this.\u0275prov=d.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},1512:(O,l,e)=>{e.d(l,{C:()=>y,w:()=>x});var t=e(4496),c=e(900),d=e(4392),_=e(4164),i=e(3480),n=e(4680),C=e(3972),p=e(5944),f=e(3412),D=e(4704),P=e(3656),I=e(1368);const L=["tuiLink",""];function T(a,v){if(1&a&&t.wR5(0,"tui-svg",3),2&a){const u=t.GaO();t.E7m("src",u.icon||"")}}function A(a,v){if(1&a&&t.wR5(0,"tui-svg",4),2&a){const u=t.GaO();t.E7m("src",u.icon||"")}}const M=["*"];let y=(()=>{class a{constructor(u,g,R){this.el=u,this.mode$=g,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,c.Ax)(this.el.nativeElement,"focusin").pipe((0,D.k)(d.Ml)),(0,c.Ax)(this.el.nativeElement,"focusout").pipe((0,D.k)(d.so))),R.subscribe(S=>{this.focusVisible=S})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,_.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return a.\u0275fac=function(u){return new(u||a)(t.GI1(t.GMv),t.GI1(p.Yx),t.GI1(i.MF))},a.\u0275cmp=t.In1({type:a,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(u,g){1&u&&t.qCj("$.data-mode.attr",function(){return g.mode$}),2&u&&(t.e48("data-host-mode",g.mode),t.eAK("_pseudo",g.pseudo)("_icon-rotated",g.iconRotated)("_focus-visible",g.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,n.NK)(a),i.MF,i.UF,C.Ir])],attrs:L,ngContentSelectors:M,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(u,g){1&u&&(t.kPM(),t.yuY(0,T,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,A,1,1,"tui-svg",2)),2&u&&(t.E7m("ngIf",g.iconAlignLeft),t.yG2(3),t.E7m("ngIf",g.iconAlignRight))},dependencies:[P.Wu,I.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),a})(),x=(()=>{class a{}return a.\u0275fac=function(u){return new(u||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[I.MD,P.Yt]]}),a})()}}]);