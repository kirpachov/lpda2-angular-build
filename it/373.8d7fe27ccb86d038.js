"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[373],{3016:(A,M,e)=>{e.r(M),e.d(M,{ListComponent:()=>T});var t=e(4496),l=e(1560),E=e(4476),m=e(1236),i=e(8256),r=e(1128),h=e(5892),C=e(3480),f=e(1512),I=e(8212),u=e(3616),O=e(6684),P=e(8824),R=e(7492),G=e(1264);const N=(c,D)=>D.id;function b(c,D){if(1&c){const n=t.KQA();t.I0R(0,"div",8)(1,"p",9),t.OEk(2),t.C$Y(),t.wR5(3,"app-show-images",10),t.I0R(4,"div",11)(5,"span"),t.OEk(6),t.C$Y()(),t.I0R(7,"div",11)(8,"span",12),t.aS0(9,13),t.C$Y(),t.I0R(10,"span"),t.OEk(11),t.C$Y()(),t.I0R(12,"div",11)(13,"span",12),t.aS0(14,14),t.C$Y(),t.I0R(15,"span"),t.OEk(16),t.C$Y()(),t.I0R(17,"div",15)(18,"div")(19,"button",16),t.qCj("click",function(){const L=t.usT(n).$implicit,y=t.GaO(2);return t.CGJ(y.delete(L.id))}),t.I0R(20,"span",17)(21,"span",18),t.aS0(22,19),t.C$Y(),t.I0R(23,"mat-icon"),t.OEk(24,"delete"),t.C$Y()()()(),t.I0R(25,"div")(26,"a",20)(27,"span",17)(28,"span",18),t.aS0(29,21),t.C$Y(),t.I0R(30,"mat-icon"),t.OEk(31,"info"),t.C$Y()()()()()()}if(2&c){const n=D.$implicit;t.yG2(2),t.oRS("",n.name," "),t.yG2(),t.E7m("recordType","TableType")("recordId",null==n?null:n.id)("images",null==n?null:n.images),t.yG2(3),t.cNF(n.description),t.yG2(5),t.cNF(n.default_people_per_turn),t.yG2(5),t.cNF(n.default_price),t.yG2(10),t._6D("routerLink",n.id)}}const k=()=>[10,20,50,100];function g(c,D){if(1&c){const n=t.KQA();t.c53(0,b,32,8,"div",22,N),t.I0R(2,"tui-table-pagination",7),t.qCj("paginationChange",function(S){t.usT(n);const L=t.GaO();return t.CGJ(L.paginationChange(S))}),t.C$Y()}if(2&c){const n=t.GaO();let s;t.oho(n.items()),t.yG2(2),t.E7m("items",t.q4q(2,k))("total",null!==(s=null==(s=n.data())||null==s.metadata?null:s.metadata.total_count)&&void 0!==s?s:0)}}function v(c,D){1&c&&(t.I0R(0,"p"),t.SAx(1),t.aS0(2,23),t.k70(),t.C$Y())}let T=(()=>{class c{constructor(){this.loading=(0,t.OCB)(!1),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>this.data()?.items||[]),this.route=(0,t.uUt)(m.gV),this.router=(0,t.uUt)(m.E5),this.service=(0,t.uUt)(R.W),this.notifications=(0,t.uUt)(r.E),this.destroy$=(0,t.uUt)(C.UF),this._=(0,t.uUt)(E.OY).setTitle("Tiplogie di tavoli | La Porta D'Acqua"),this.inputSize="m",this.filters={}}ngOnInit(){this.search(),this.router.events.pipe((0,u.a)(this.destroy$),(0,O.I)(n=>n instanceof m.MT)).subscribe({next:()=>this.search()})}paginationChange(n){this.filters.page=n.page,this.filters.per_page=n.size,this.search()}delete(n){n&&this.notifications.confirm("Sei sicuro di voler cancellare questa tipologia di tavolo?").subscribe({next:s=>{s&&this.confirmedDelete(n)}})}filtersChanged(n){this.filters=n,this.search(n)}confirmedDelete(n){this.loading.set(!0),this.service.destroy(n).pipe((0,u.a)(this.destroy$),(0,P.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:s=>{this.notifications.error((0,i.mk)(s)||"Qualcosa \xE8 andato storto nella cancellazione.")}})}search(n=this.filters){n||={},n={...n},this.loading.set(!0),this.service.search(n).pipe((0,u.a)(this.destroy$),(0,P.U)(()=>this.loading.set(!1))).subscribe({next:s=>{this.data.set(s)},error:s=>{this.notifications.error((0,i.mk)(s)||"Qualcosa \xE8 andato storto nella ricerca."),console.error(s)}})}static#t=this.\u0275fac=function(s){return new(s||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-list"]],standalone:!0,features:[t.M5G([C.UF]),t.UHJ],decls:14,vars:1,consts:()=>{let n,s,S,L,y,o,d,a;return n="Tipologie di tavoli",s=" Configura le tipologie di tavoli presenti nel tuo locale. Potrai richiedere un pagamento specifico per ciascuna tipologia nella sezione \"Pagamenti alla prenotazione\".\n",S="Crea nuovo",L="Ospiti per turno (default):",y="Prezzo a persona per turno (default):",o="Elimina",d="Dettagli",a="Nessun elemento trovato.",[n,[1,"text-slate-400"],s,["tuiButton","","appearance","flat","routerLink","new",1,"mb-3","me-3"],[1,"flex","items-center"],S,["class","my-2",3,"items","total"],[1,"my-2",3,"items","total","paginationChange"],[1,"border","rounded-lg","flex","flex-col","mb-5","p-4"],[1,"block","text-xl"],[1,"block","mb-3",3,"recordType","recordId","images"],[1,"block"],[1,"text-slate-400","me-2"],L,y,[1,"flex","items-center","justify-end"],["type","button","size","m","tuiButton","","appearance","secondary-destructive",3,"click"],[1,"flex","items-center","justify-between","p-4"],[1,"me-1"],o,["tuiLink","",3,"routerLink"],d,["class","border rounded-lg flex flex-col mb-5 p-4"],a]},template:function(s,S){1&s&&(t.I0R(0,"h1"),t.SAx(1),t.aS0(2,0),t.k70(),t.C$Y(),t.I0R(3,"p",1),t.aS0(4,2),t.C$Y(),t.I0R(5,"a",3)(6,"span",4)(7,"mat-icon"),t.OEk(8,"add"),t.C$Y(),t.I0R(9,"span"),t.aS0(10,5),t.C$Y()()(),t.yuY(11,g,3,3,"tui-table-pagination",6)(12,v,3,0),t.wR5(13,"router-outlet")),2&s&&(t.yG2(11),t.C0Y(11,S.items().length>0?11:12))},dependencies:[l.oB,l.qL,m.qQ,m.cP,m.ER,h.yy,h.Ws,f.w,f.C,I.CI,I.Kw,G.g],encapsulation:2,changeDetection:0})}return c})()},9064:(A,M,e)=>{e.d(M,{g:()=>E});var t=e(8400),l=e(2264);class E extends t.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.default_people_per_turn=i.default_people_per_turn,this.default_price=i.default_price,this.notes=i.notes,this.status=i.status,this.translations=i.translations,this.images=i.images?i.images.map(r=>new l.W(r)):[]}}},7492:(A,M,e)=>{e.d(M,{W:()=>m});var t=e(6012),l=e(9064),E=e(4496);let m=(()=>{class i extends t.s{constructor(){super(l.g,"admin/table_types")}static#t=this.\u0275fac=function(C){return new(C||i)};static#e=this.\u0275prov=E.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},5892:(A,M,e)=>{e.d(M,{Ws:()=>L,yy:()=>y});var t=e(4496),l=e(2528),E=e(4472);(0,l.W0)((0,E.u)("showHideText"));const i=(0,l.W0)((0,E.u)("paginationTexts"));var r=e(466),h=e(1512),C=e(4336),f=e(3656),I=e(8212),u=e(5944),O=e(1368),P=e(1040);function R(o,d){if(1&o&&(t.SAx(0),t.OEk(1),t.I0R(2,"strong",6),t.OEk(3),t.C$Y(),t.k70()),2&o){const a=t.GaO().ngIf,_=t.GaO();t.yG2(),t.oRS(" ",a.pages," "),t.yG2(2),t.cNF(_.pages)}}function G(o,d){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const a=d.polymorpheusOutlet;t.yG2(),t.oRS(" ",a," ")}}function N(o,d){if(1&o&&t.wR5(0,"tui-svg",13),2&o){const a=t.GaO(4);t.E7m("src",a.commonIcons.check)}}function b(o,d){1&o&&t.wR5(0,"span",14)}const k=(o,d)=>({$implicit:o,total:d});function g(o,d){if(1&o){const a=t.KQA();t.SAx(0),t.I0R(1,"button",9),t.qCj("click",function(){const x=t.usT(a).$implicit,$=t.GaO(3);return t.CGJ($.onItem(x))}),t.yuY(2,G,2,1,"ng-container",10)(3,N,1,1,"tui-svg",11)(4,b,1,0,"ng-template",null,12,t.gJz),t.C$Y(),t.k70()}if(2&o){const a=d.$implicit,_=t.Gew(5),p=t.GaO(3);t.yG2(2),t.E7m("polymorpheusOutlet",p.options.sizeOptionContent)("polymorpheusOutletContext",t.IBC(4,k,a,p.total)),t.yG2(),t.E7m("ngIf",a===p.size)("ngIfElse",_)}}function v(o,d){if(1&o&&(t.I0R(0,"tui-data-list",7),t.yuY(1,g,6,7,"ng-container",8),t.C$Y()),2&o){const a=t.GaO(2);t.yG2(),t.E7m("ngForOf",a.items)}}function T(o,d){if(1&o){const a=t.KQA();t.SAx(0),t.I0R(1,"button",15),t.qCj("click",function(){t.usT(a);const p=t.GaO(2);return t.CGJ(p.back())}),t.C$Y(),t.I0R(2,"button",16),t.qCj("click",function(){t.usT(a);const p=t.GaO(2);return t.CGJ(p.forth())}),t.C$Y(),t.k70()}if(2&o){const a=d.ngIf,_=t.GaO(2);t.yG2(),t.E7m("disabled",_.leftDisabled)("icon",_.icons.decrement)("title",a[0]),t.yG2(),t.E7m("disabled",_.rightDisabled)("icon",_.icons.increment)("title",a[1])}}function c(o,d){if(1&o){const a=t.KQA();t.SAx(0),t.I0R(1,"span",1),t.yuY(2,R,4,2,"ng-container",0),t.C$Y(),t.I0R(3,"span",2),t.OEk(4),t.I0R(5,"tui-hosted-dropdown",3),t.iHE("openChange",function(p){t.usT(a);const x=t.GaO();return t.kNx(x.open,p)||(x.open=p),t.CGJ(p)}),t.I0R(6,"button",4)(7,"strong"),t.OEk(8),t.C$Y()(),t.yuY(9,v,2,1,"ng-template",null,5,t.gJz),t.C$Y(),t.OEk(11),t.I0R(12,"strong",6),t.OEk(13),t.C$Y()(),t.yuY(14,T,3,6,"ng-container",0),t.wVc(15,"async"),t.k70()}if(2&o){const a=d.ngIf,_=t.Gew(10),p=t.GaO();t.yG2(2),t.E7m("ngIf",p.options.showPages),t.yG2(2),t.oRS(" ",a.linesPerPage," "),t.yG2(),t.E7m("content",_),t.OKB("open",p.open),t.yG2(3),t.CAO("",p.start+1,"\u2013",p.end,""),t.yG2(3),t.oRS(" ",a.of," "),t.yG2(2),t.cNF(p.total),t.yG2(),t.E7m("ngIf",t.kDX(15,9,p.spinTexts$))}}const s=(0,l.AL)({sizeOptionContent:function D({$implicit:o}){return`${o}`},showPages:!0,items:[10,20,50,100],size:10});let L=(()=>{class o{constructor(a,_,p,x,$){this.icons=a,this.spinTexts$=_,this.texts$=p,this.options=x,this.commonIcons=$,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new t._w7,this.sizeChange=new t._w7,this.paginationChange=new t._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(a){const{start:_}=this;this.size=a,this.sizeChange.emit(a),this.open=!1,this.page=Math.floor(_/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return o.\u0275fac=function(a){return new(a||o)(t.GI1(u.KY),t.GI1(u.s1),t.GI1(i),t.GI1(s),t.GI1(u.QJ))},o.\u0275cmp=t.In1({type:o,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(a,_){1&a&&(t.yuY(0,c,16,11,"ng-container",0),t.wVc(1,"async")),2&a&&t.E7m("ngIf",t.kDX(1,1,_.texts$))},dependencies:[r.Qw,h.C,C.yi,C.sP,f.Wu,I.Kw,O.u_,O.ay,P.Af,O.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),o})(),y=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[[O.MD,I.CI,h.w,r.GE,C.A$,f.Yt,P.Ux]]}),o})()},832:(A,M,e)=>{e.d(M,{I:()=>m,w:()=>E});var t=e(4496),l=e(3480);let E=(()=>{class i{constructor(h){this.tuiFocusVisibleChange=h}}return i.\u0275fac=function(h){return new(h||i)(t.GI1(l.MF))},i.\u0275dir=t.Sc5({type:i,selectors:[["","tuiFocusVisibleChange",""]],outputs:{tuiFocusVisibleChange:"tuiFocusVisibleChange"},features:[t.M5G([l.UF,l.MF])]}),i})(),m=(()=>{class i{}return i.\u0275fac=function(h){return new(h||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({}),i})()},1096:(A,M,e)=>{e.d(M,{O:()=>I,h:()=>f});var t=e(4496),l=e(900),E=e(4164),m=e(3412),i=e(4704),r=e(5568),h=e(4e3),C=e(2644);let f=(()=>{class u{constructor({nativeElement:P},R){this.tuiFocusedChange=(0,m.U)((0,l.Ax)(P,"focusin"),(0,l.Ax)(P,"focusout")).pipe((0,i.k)(()=>(0,E.ER)(P)),(0,r.W)(!1),(0,h.a)(),(0,C.s)(1),(0,l.OA)(R))}}return u.\u0275fac=function(P){return new(P||u)(t.GI1(t.GMv),t.GI1(t.WW2))},u.\u0275dir=t.Sc5({type:u,selectors:[["","tuiFocusedChange",""]],outputs:{tuiFocusedChange:"tuiFocusedChange"}}),u})(),I=(()=>{class u{}return u.\u0275fac=function(P){return new(P||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({}),u})()},1632:(A,M,e)=>{e.d(M,{k:()=>m,u:()=>i});var t=e(4496),l=e(900),E=e(4680);let m=(()=>{class r{constructor(C,f){this.el=C,this.takeOnlyTrustedEvents=f,this.tuiPressedChange=(0,l.Y7)(this.el.nativeElement,{onlyTrusted:this.takeOnlyTrustedEvents})}}return r.\u0275fac=function(C){return new(C||r)(t.GI1(t.GMv),t.GI1(E.mm))},r.\u0275dir=t.Sc5({type:r,selectors:[["","tuiPressedChange",""]],outputs:{tuiPressedChange:"tuiPressedChange"}}),r})(),i=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({}),r})()},1512:(A,M,e)=>{e.d(M,{C:()=>b,w:()=>k});var t=e(4496),l=e(900),E=e(4392),m=e(4164),i=e(3480),r=e(4680),h=e(3972),C=e(5944),f=e(3412),I=e(4704),u=e(3656),O=e(1368);const P=["tuiLink",""];function R(g,v){if(1&g&&t.wR5(0,"tui-svg",3),2&g){const T=t.GaO();t.E7m("src",T.icon||"")}}function G(g,v){if(1&g&&t.wR5(0,"tui-svg",4),2&g){const T=t.GaO();t.E7m("src",T.icon||"")}}const N=["*"];let b=(()=>{class g{constructor(T,c,D){this.el=T,this.mode$=c,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,l.Ax)(this.el.nativeElement,"focusin").pipe((0,I.k)(E.Ml)),(0,l.Ax)(this.el.nativeElement,"focusout").pipe((0,I.k)(E.so))),D.subscribe(n=>{this.focusVisible=n})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,m.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return g.\u0275fac=function(T){return new(T||g)(t.GI1(t.GMv),t.GI1(C.Yx),t.GI1(i.MF))},g.\u0275cmp=t.In1({type:g,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(T,c){1&T&&t.qCj("$.data-mode.attr",function(){return c.mode$}),2&T&&(t.e48("data-host-mode",c.mode),t.eAK("_pseudo",c.pseudo)("_icon-rotated",c.iconRotated)("_focus-visible",c.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,r.NK)(g),i.MF,i.UF,h.Ir])],attrs:P,ngContentSelectors:N,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(T,c){1&T&&(t.kPM(),t.yuY(0,R,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,G,1,1,"tui-svg",2)),2&T&&(t.E7m("ngIf",c.iconAlignLeft),t.yG2(3),t.E7m("ngIf",c.iconAlignRight))},dependencies:[u.Wu,O.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),g})(),k=(()=>{class g{}return g.\u0275fac=function(T){return new(T||g)},g.\u0275mod=t.a4G({type:g}),g.\u0275inj=t.s3X({imports:[[O.MD,u.Yt]]}),g})()}}]);