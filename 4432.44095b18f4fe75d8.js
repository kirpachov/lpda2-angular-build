"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4432],{4432:(R,E,e)=>{e.r(E),e.d(E,{ListComponent:()=>u});var t=e(1368),n=e(4496),l=e(4476),m=e(8256),r=e(1128),i=e(3480),T=e(3616),M=e(6684),f=e(8824),P=e(1560),S=e(1236),v=e(5892),D=e(1512),G=e(8212),y=e(466),N=e(4336),b=e(8640),U=e(1260),g=e(2516),I=e(1240);const p=(s,C)=>C.id,O=s=>[s];function x(s,C){if(1&s){const o=n.KQA();n.I0R(0,"tui-data-list",18)(1,"button",19)(2,"span",2)(3,"span",20),n.aS0(4,21),n.C$Y()()(),n.I0R(5,"button",22),n.qCj("click",function(){n.usT(o);const A=n.GaO().$implicit,k=n.GaO(2);return n.CGJ(k.delete(A.id))}),n.I0R(6,"span",2)(7,"span",20),n.aS0(8,23),n.C$Y()()()()}if(2&s){const o=n.GaO().$implicit;n.yG2(),n.E7m("routerLink",n.S45(1,O,o.id))}}function $(s,C){if(1&s&&(n.SAx(0),n.aS0(1,24),n.k70(),n.OEk(2),n.wVc(3,"date")),2&s){const o=n.GaO(2).$implicit;n.yG2(2),n.oRS(" ",n.g7$(3,1,o.from_date,"shortDate")," ")}}function z(s,C){if(1&s&&(n.SAx(0),n.aS0(1,25),n.k70(),n.OEk(2),n.wVc(3,"date")),2&s){const o=n.GaO(2).$implicit;n.yG2(2),n.oRS(" ",n.g7$(3,1,o.to_date,"shortDate")," ")}}function W(s,C){if(1&s&&n.yuY(0,$,4,4)(1,z,4,4),2&s){const o=n.GaO().$implicit;n.C0Y(0,o.from_date?0:-1),n.yG2(),n.C0Y(1,o.to_date?1:-1)}}function B(s,C){1&s&&(n.SAx(0),n.aS0(1,26),n.k70())}function K(s,C){if(1&s&&(n.I0R(0,"div",27),n.OEk(1),n.SAx(2),n.aS0(3,28),n.k70(),n.OEk(4),n.wVc(5,"downcase"),n.wVc(6,"weekday"),n.C$Y()),2&s){const o=C.$implicit;n.yG2(),n.oRS(" ",o.name," "),n.yG2(3),n.oRS(" ",n.kDX(5,2,n.kDX(6,4,o.weekday))," ")}}function a(s,C){if(1&s&&(n.yuY(0,x,9,3,"ng-template",null,6,n.gJz),n.I0R(2,"div",7)(3,"div",8)(4,"div",2)(5,"a",9)(6,"span",10),n.OEk(7),n.C$Y()(),n.I0R(8,"tui-hosted-dropdown",11)(9,"button",12)(10,"mat-icon"),n.OEk(11,"expand_more"),n.C$Y()()()()(),n.I0R(12,"div",13)(13,"div",14)(14,"span",15),n.aS0(15,16),n.C$Y(),n.OEk(16,": "),n.I0R(17,"span",17),n.yuY(18,W,2,2)(19,B,2,0),n.C$Y()(),n.I0R(20,"div"),n.c53(21,K,7,6,"div",29,p),n.C$Y()()()),2&s){const o=C.$implicit,c=n.Gew(1);n.yG2(5),n.E7m("routerLink",n.S45(4,O,o.id)),n.yG2(2),n.cNF(o.message),n.yG2(),n.E7m("content",c),n.yG2(10),n.C0Y(18,o.from_date||o.to_date?18:19),n.yG2(3),n.oho(o.turns)}}const h=()=>[10,20,50,100];function _(s,C){if(1&s){const o=n.KQA();n.c53(0,a,23,6,null,null,p),n.I0R(2,"tui-table-pagination",5),n.qCj("paginationChange",function(A){n.usT(o);const k=n.GaO();return n.CGJ(k.paginationChange(A))}),n.C$Y()}if(2&s){const o=n.GaO();let c;n.oho(o.items()),n.yG2(2),n.E7m("items",n.q4q(2,h))("total",null!==(c=null==(c=o.data())||null==c.metadata?null:c.metadata.total_count)&&void 0!==c?c:0)}}function d(s,C){1&s&&n.wR5(0,"app-no-items")}let u=(()=>{class s{constructor(){this.loading=(0,n.OCB)(!1),this.data=(0,n.OCB)(null),this.items=(0,n.S6b)(()=>this.data()?.items||[]),this.route=(0,n.uUt)(S.gV),this.router=(0,n.uUt)(S.E5),this.service=(0,n.uUt)(U.U),this.notifications=(0,n.uUt)(r.E),this.destroy$=(0,n.uUt)(i.UF),this._=(0,n.uUt)(l.OY).setTitle("Messaggi alla prenotazione | La Porta D'Acqua"),this.filters={}}ngOnInit(){this.search(),this.router.events.pipe((0,T.a)(this.destroy$),(0,M.I)(o=>o instanceof S.MT)).subscribe({next:()=>this.search()})}paginationChange(o){this.filters.page=o.page,this.filters.per_page=o.size,this.search()}delete(o){o&&this.notifications.confirm("Sei sicuro di voler cancellare questo messaggio?").subscribe({next:c=>{c&&this.confirmedDelete(o)}})}filtersChanged(o){this.filters=o,this.search(o)}confirmedDelete(o){this.loading.set(!0),this.service.destroy(o).pipe((0,T.a)(this.destroy$),(0,f.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:c=>{this.notifications.error((0,m.mk)(c)||"Qualcosa \xE8 andato storto nella cancellazione.")}})}search(o=this.filters){o||={},o={...o},this.loading.set(!0),this.service.search(o).pipe((0,T.a)(this.destroy$),(0,f.U)(()=>this.loading.set(!1))).subscribe({next:c=>{this.data.set(c)},error:c=>{this.notifications.error((0,m.mk)(c)||"Qualcosa \xE8 andato storto nella ricerca."),console.error(c)}})}static#t=this.\u0275fac=function(c){return new(c||s)};static#n=this.\u0275cmp=n.In1({type:s,selectors:[["app-list"]],standalone:!0,features:[n.M5G([i.UF]),n.UHJ],decls:12,vars:1,consts:()=>{let o,c,A,k,Y,w,V,F,X;return o="Messaggi alla prenotazione",c="Crea nuovo",A="Visibilit\xE0",k="Dettagli",Y="Elimina",w="dal giorno",V="fino al",F="Tutti i giorni",X="di",[o,["tuiButton","","appearance","flat","routerLink","new",1,"mb-3","me-3"],[1,"flex","items-center"],c,["class","my-2",3,"items","total"],[1,"my-2",3,"items","total","paginationChange"],["actions",""],[1,"border","rounded-lg","flex","flex-col","mb-5"],[1,"w-full","p-4","border-b"],["tuiLink","",3,"routerLink"],[1,"text-3xl"],[3,"content"],["tuiButton","","appearance","flat"],[1,"p-2"],[1,"block"],[1,"font-bold","me-1"],A,[1,"text-xl"],["size","m"],["tuiOption","","type","button",3,"routerLink"],[1,"me-1"],k,["tuiOption","","type","button",3,"click"],Y,w,V,F,[1,"inline-block","p-3","border","me-2","rounded","border-md","border-slate-400"],X,["class","inline-block p-3 border me-2 rounded border-md border-slate-400"]]},template:function(c,A){1&c&&(n.I0R(0,"h1"),n.SAx(1),n.aS0(2,0),n.k70(),n.C$Y(),n.I0R(3,"a",1)(4,"span",2)(5,"mat-icon"),n.OEk(6,"add"),n.C$Y(),n.I0R(7,"span"),n.aS0(8,3),n.C$Y()()(),n.yuY(9,_,3,3,"tui-table-pagination",4)(10,d,1,0),n.wR5(11,"router-outlet")),2&c&&(n.yG2(9),n.C0Y(9,A.items().length>0?9:10))},dependencies:[P.oB,P.qL,S.qQ,S.cP,S.ER,t.y,v.yy,v.Ws,D.w,D.C,G.CI,G.Kw,b.O,g.G,I.e,y.GE,y.Qw,N.A$,N.yi,N.sP],encapsulation:2,changeDetection:0})}return s})()},9772:(R,E,e)=>{e.d(E,{CU:()=>n,ye:()=>l});const t=(new Date).getTimezoneOffset()/60;function n(m,r=t){return"string"==typeof m&&m.length>0&&m.match(/\d{1,2}:\d{1,2}/)?`${Number(m.split(":")[0])-r}:${m.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:m}),"")}function l(m,r=t){return n(m,-1*r)}},1960:(R,E,e)=>{e.d(E,{u:()=>m});var t=e(8400),n=e(5136);class l extends t.w{constructor(i){super(i),this.date=i.date?new Date(i.date):void 0,this.reservation_turn_id=i.reservation_turn_id,this.group_id=i.group_id,this.reservation_turn=i.reservation_turn?new n.e(i.reservation_turn):void 0}}class m extends t.w{constructor(i){super(i),this.turns=[],this.dates=[],this.title=i.title,this.status=i.status,this.preorder_type=i.preorder_type,this.payment_value=i.payment_value,this.message=i.message,this.turns=(i.turns||[]).map(T=>new n.e(T)),this.dates=(i.dates||[]).map(T=>new l(T))}}},5136:(R,E,e)=>{e.d(E,{e:()=>m});var t=e(8400),n=e(9772),l=e(1960);class m extends t.w{constructor(i){super(i),this.messages=[],this.name=i.name,this.weekday=i.weekday,this.step=i.step,this.valid_times=i.valid_times,this.starts_at=i.starts_at?(0,n.CU)(i.starts_at):void 0,this.ends_at=i.ends_at?(0,n.CU)(i.ends_at):void 0,this.preorder_reservation_group=i.preorder_reservation_group?new l.u(i.preorder_reservation_group):void 0,this.messages=i.messages}}},1240:(R,E,e)=>{e.d(E,{e:()=>n});var t=e(4496);let n=(()=>{class l{transform(r){return"string"==typeof r&&r.length>0?r.toLowerCase():null}static#t=this.\u0275fac=function(i){return new(i||l)};static#n=this.\u0275pipe=t.UTH({name:"downcase",type:l,pure:!0,standalone:!0})}return l})()},2516:(R,E,e)=>{e.d(E,{G:()=>n});var t=e(4496);let n=(()=>{class l{constructor(){this.weekdays=["Domenica","Luned\xEC","Marted\xEC","Mercoled\xEC","Gioved\xEC","Venerd\xEC","Sabato"]}transform(r){return"number"!=typeof r&&"string"==typeof r&&(r=parseInt(r)),"number"==typeof r&&r>=0&&r<=6?this.weekdays[r]:null}static#t=this.\u0275fac=function(i){return new(i||l)};static#n=this.\u0275pipe=t.UTH({name:"weekday",type:l,pure:!0,standalone:!0})}return l})()},1260:(R,E,e)=>{e.d(E,{U:()=>i});var t=e(6012),n=e(8400),l=e(5136);class m extends n.w{constructor(M){super(M),this.message=M.message,this.from_date=M.from_date,this.to_date=M.to_date,this.translations=M.translations,this.turns=M.turns?M.turns.map(f=>new l.e(f)):[]}}var r=e(4496);let i=(()=>{class T extends t.s{constructor(){super(m,"admin/reservation_turn_messages")}create(f){return super.create(f)}update(f,P){return super.update(f,P)}static#t=this.\u0275fac=function(P){return new(P||T)};static#n=this.\u0275prov=r.wxM({token:T,factory:T.\u0275fac,providedIn:"root"})}return T})()},5892:(R,E,e)=>{e.d(E,{Ws:()=>B,yy:()=>K});var t=e(4496),n=e(2528),l=e(4472);(0,n.W0)((0,l.u)("showHideText"));const r=(0,n.W0)((0,l.u)("paginationTexts"));var i=e(466),T=e(1512),M=e(4336),f=e(3656),P=e(8212),S=e(5944),v=e(1368),D=e(1040);function G(a,h){if(1&a&&(t.SAx(0),t.OEk(1),t.I0R(2,"strong",6),t.OEk(3),t.C$Y(),t.k70()),2&a){const _=t.GaO().ngIf,d=t.GaO();t.yG2(),t.oRS(" ",_.pages," "),t.yG2(2),t.cNF(d.pages)}}function y(a,h){if(1&a&&(t.SAx(0),t.OEk(1),t.k70()),2&a){const _=h.polymorpheusOutlet;t.yG2(),t.oRS(" ",_," ")}}function N(a,h){if(1&a&&t.wR5(0,"tui-svg",13),2&a){const _=t.GaO(4);t.E7m("src",_.commonIcons.check)}}function b(a,h){1&a&&t.wR5(0,"span",14)}const U=(a,h)=>({$implicit:a,total:h});function g(a,h){if(1&a){const _=t.KQA();t.SAx(0),t.I0R(1,"button",9),t.qCj("click",function(){const s=t.usT(_).$implicit,C=t.GaO(3);return t.CGJ(C.onItem(s))}),t.yuY(2,y,2,1,"ng-container",10)(3,N,1,1,"tui-svg",11)(4,b,1,0,"ng-template",null,12,t.gJz),t.C$Y(),t.k70()}if(2&a){const _=h.$implicit,d=t.Gew(5),u=t.GaO(3);t.yG2(2),t.E7m("polymorpheusOutlet",u.options.sizeOptionContent)("polymorpheusOutletContext",t.IBC(4,U,_,u.total)),t.yG2(),t.E7m("ngIf",_===u.size)("ngIfElse",d)}}function I(a,h){if(1&a&&(t.I0R(0,"tui-data-list",7),t.yuY(1,g,6,7,"ng-container",8),t.C$Y()),2&a){const _=t.GaO(2);t.yG2(),t.E7m("ngForOf",_.items)}}function p(a,h){if(1&a){const _=t.KQA();t.SAx(0),t.I0R(1,"button",15),t.qCj("click",function(){t.usT(_);const u=t.GaO(2);return t.CGJ(u.back())}),t.C$Y(),t.I0R(2,"button",16),t.qCj("click",function(){t.usT(_);const u=t.GaO(2);return t.CGJ(u.forth())}),t.C$Y(),t.k70()}if(2&a){const _=h.ngIf,d=t.GaO(2);t.yG2(),t.E7m("disabled",d.leftDisabled)("icon",d.icons.decrement)("title",_[0]),t.yG2(),t.E7m("disabled",d.rightDisabled)("icon",d.icons.increment)("title",_[1])}}function O(a,h){if(1&a){const _=t.KQA();t.SAx(0),t.I0R(1,"span",1),t.yuY(2,G,4,2,"ng-container",0),t.C$Y(),t.I0R(3,"span",2),t.OEk(4),t.I0R(5,"tui-hosted-dropdown",3),t.iHE("openChange",function(u){t.usT(_);const s=t.GaO();return t.kNx(s.open,u)||(s.open=u),t.CGJ(u)}),t.I0R(6,"button",4)(7,"strong"),t.OEk(8),t.C$Y()(),t.yuY(9,I,2,1,"ng-template",null,5,t.gJz),t.C$Y(),t.OEk(11),t.I0R(12,"strong",6),t.OEk(13),t.C$Y()(),t.yuY(14,p,3,6,"ng-container",0),t.wVc(15,"async"),t.k70()}if(2&a){const _=h.ngIf,d=t.Gew(10),u=t.GaO();t.yG2(2),t.E7m("ngIf",u.options.showPages),t.yG2(2),t.oRS(" ",_.linesPerPage," "),t.yG2(),t.E7m("content",d),t.OKB("open",u.open),t.yG2(3),t.CAO("",u.start+1,"\u2013",u.end,""),t.yG2(3),t.oRS(" ",_.of," "),t.yG2(2),t.cNF(u.total),t.yG2(),t.E7m("ngIf",t.kDX(15,9,u.spinTexts$))}}const z=(0,n.AL)({sizeOptionContent:function x({$implicit:a}){return`${a}`},showPages:!0,items:[10,20,50,100],size:10});let B=(()=>{class a{constructor(_,d,u,s,C){this.icons=_,this.spinTexts$=d,this.texts$=u,this.options=s,this.commonIcons=C,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new t._w7,this.sizeChange=new t._w7,this.paginationChange=new t._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(_){const{start:d}=this;this.size=_,this.sizeChange.emit(_),this.open=!1,this.page=Math.floor(d/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return a.\u0275fac=function(_){return new(_||a)(t.GI1(S.KY),t.GI1(S.s1),t.GI1(r),t.GI1(z),t.GI1(S.QJ))},a.\u0275cmp=t.In1({type:a,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(_,d){1&_&&(t.yuY(0,O,16,11,"ng-container",0),t.wVc(1,"async")),2&_&&t.E7m("ngIf",t.kDX(1,1,d.texts$))},dependencies:[i.Qw,T.C,M.yi,M.sP,f.Wu,P.Kw,v.u_,v.ay,D.Af,v.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),a})(),K=(()=>{class a{}return a.\u0275fac=function(_){return new(_||a)},a.\u0275mod=t.a4G({type:a}),a.\u0275inj=t.s3X({imports:[[v.MD,P.CI,T.w,i.GE,M.A$,f.Yt,D.Ux]]}),a})()},1512:(R,E,e)=>{e.d(E,{C:()=>b,w:()=>U});var t=e(4496),n=e(900),l=e(4392),m=e(4164),r=e(3480),i=e(4680),T=e(3972),M=e(5944),f=e(3412),P=e(4704),S=e(3656),v=e(1368);const D=["tuiLink",""];function G(g,I){if(1&g&&t.wR5(0,"tui-svg",3),2&g){const p=t.GaO();t.E7m("src",p.icon||"")}}function y(g,I){if(1&g&&t.wR5(0,"tui-svg",4),2&g){const p=t.GaO();t.E7m("src",p.icon||"")}}const N=["*"];let b=(()=>{class g{constructor(p,O,x){this.el=p,this.mode$=O,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,n.Ax)(this.el.nativeElement,"focusin").pipe((0,P.k)(l.Ml)),(0,n.Ax)(this.el.nativeElement,"focusout").pipe((0,P.k)(l.so))),x.subscribe($=>{this.focusVisible=$})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,m.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return g.\u0275fac=function(p){return new(p||g)(t.GI1(t.GMv),t.GI1(M.Yx),t.GI1(r.MF))},g.\u0275cmp=t.In1({type:g,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(p,O){1&p&&t.qCj("$.data-mode.attr",function(){return O.mode$}),2&p&&(t.e48("data-host-mode",O.mode),t.eAK("_pseudo",O.pseudo)("_icon-rotated",O.iconRotated)("_focus-visible",O.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,i.NK)(g),r.MF,r.UF,T.Ir])],attrs:D,ngContentSelectors:N,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(p,O){1&p&&(t.kPM(),t.yuY(0,G,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,y,1,1,"tui-svg",2)),2&p&&(t.E7m("ngIf",O.iconAlignLeft),t.yG2(3),t.E7m("ngIf",O.iconAlignRight))},dependencies:[S.Wu,v.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),g})(),U=(()=>{class g{}return g.\u0275fac=function(p){return new(p||g)},g.\u0275mod=t.a4G({type:g}),g.\u0275inj=t.s3X({imports:[[v.MD,S.Yt]]}),g})()}}]);