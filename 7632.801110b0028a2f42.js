"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7632],{7632:(v,I,o)=>{o.r(I),o.d(I,{ListComponent:()=>s});var n=o(1368),t=o(4496),u=o(1560),c=o(4476),r=o(1236),S=o(8256),P=o(6820),M=o(1128),L=o(5892),O=o(3480),E=o(1512),p=o(8212),f=o(3616),$=o(6684),A=o(8824),R=o(2516),y=o(8248);const G=(i,_)=>_.id;function l(i,_){if(1&i&&(t.I0R(0,"span",13),t.aS0(1,21),t.C$Y(),t.I0R(2,"span",13),t.OEk(3),t.wVc(4,"date"),t.C$Y()),2&i){const e=t.GaO().$implicit;t.yG2(3),t.cNF(t.g7$(4,1,e.to_timestamp,"shortDate"))}}function m(i,_){1&i&&(t.SAx(0),t.aS0(1,22),t.k70())}function g(i,_){1&i&&(t.I0R(0,"span"),t.aS0(1,24),t.C$Y())}function T(i,_){if(1&i&&(t.I0R(0,"span",13),t.aS0(1,25),t.C$Y(),t.I0R(2,"span",13),t.OEk(3),t.C$Y(),t.I0R(4,"span",13),t.aS0(5,26),t.C$Y(),t.I0R(6,"span",13),t.OEk(7),t.C$Y()),2&i){const e=t.GaO(2).$implicit;t.yG2(3),t.cNF(e.weekly_from),t.yG2(4),t.cNF(e.weekly_to)}}function N(i,_){if(1&i&&(t.I0R(0,"span",13),t.aS0(1,23),t.C$Y(),t.I0R(2,"span",13),t.OEk(3),t.wVc(4,"weekday"),t.C$Y(),t.yuY(5,g,2,0,"span")(6,T,8,2)),2&i){const e=t.GaO().$implicit;t.yG2(3),t.cNF(t.kDX(4,2,e.weekday)),t.yG2(2),t.C0Y(5,e.isWholeDay?5:6)}}function D(i,_){if(1&i&&(t.I0R(0,"span",13),t.aS0(1,27),t.C$Y(),t.I0R(2,"span",13),t.OEk(3),t.wVc(4,"date"),t.C$Y(),t.I0R(5,"span",13),t.aS0(6,28),t.C$Y(),t.I0R(7,"span",13),t.OEk(8),t.wVc(9,"date"),t.C$Y(),t.I0R(10,"span",13),t.aS0(11,29),t.C$Y(),t.I0R(12,"span",13),t.OEk(13),t.wVc(14,"date"),t.C$Y(),t.I0R(15,"span",13),t.aS0(16,30),t.C$Y(),t.I0R(17,"span",13),t.OEk(18),t.wVc(19,"date"),t.C$Y()),2&i){const e=t.GaO().$implicit;t.yG2(3),t.cNF(t.g7$(4,4,e.from_timestamp,"HH:mm")),t.yG2(5),t.cNF(t.g7$(9,7,e.from_timestamp,"fullDate")),t.yG2(5),t.cNF(t.g7$(14,10,e.to_timestamp,"HH:mm")),t.yG2(5),t.cNF(t.g7$(19,13,e.to_timestamp,"fullDate"))}}function k(i,_){if(1&i){const e=t.KQA();t.I0R(0,"div",10),t.wR5(1,"app-show-translations",11),t.I0R(2,"div",12)(3,"div")(4,"span",13),t.aS0(5,14),t.C$Y(),t.I0R(6,"span",13),t.OEk(7),t.wVc(8,"date"),t.C$Y(),t.yuY(9,l,5,4)(10,m,2,0),t.C$Y(),t.I0R(11,"div"),t.yuY(12,N,7,4)(13,D,20,16),t.C$Y()(),t.I0R(14,"div",15)(15,"div")(16,"button",16),t.qCj("click",function(){const h=t.usT(e).$implicit,x=t.GaO(2);return t.CGJ(x.delete(h.id))}),t.I0R(17,"span",17)(18,"span",13),t.aS0(19,18),t.C$Y(),t.I0R(20,"mat-icon"),t.OEk(21,"delete"),t.C$Y()()()(),t.I0R(22,"div")(23,"a",19)(24,"span",17)(25,"span",13),t.aS0(26,20),t.C$Y(),t.I0R(27,"mat-icon"),t.OEk(28,"edit"),t.C$Y()()()()()()}if(2&i){const e=_.$implicit;t.yG2(),t.E7m("translations",e.translations.message),t.yG2(6),t.cNF(t.g7$(8,5,e.from_timestamp,"shortDate")),t.yG2(2),t.C0Y(9,e.to_timestamp?9:10),t.yG2(3),t.C0Y(12,e.isWeekly?12:13),t.yG2(11),t._6D("routerLink",e.id)}}const z=()=>[10,20,50,100];function Y(i,_){if(1&i){const e=t.KQA();t.c53(0,k,29,8,"div",31,G),t.I0R(2,"tui-table-pagination",9),t.qCj("paginationChange",function(C){t.usT(e);const h=t.GaO();return t.CGJ(h.paginationChange(C))}),t.C$Y()}if(2&i){const e=t.GaO();let a;t.oho(e.items()),t.yG2(2),t.E7m("items",t.q4q(2,z))("total",null!==(a=null==(a=e.data())||null==a.metadata?null:a.metadata.total_count)&&void 0!==a?a:0)}}function b(i,_){1&i&&(t.I0R(0,"p"),t.SAx(1),t.aS0(2,32),t.k70(),t.C$Y())}let s=(()=>{class i{constructor(){this.loading=(0,t.OCB)(!1),this.data=(0,t.OCB)(null),this.items=(0,t.S6b)(()=>this.data()?.items||[]),this.route=(0,t.uUt)(r.gV),this.router=(0,t.uUt)(r.E5),this.service=(0,t.uUt)(P.I),this.notifications=(0,t.uUt)(M.E),this.destroy$=(0,t.uUt)(O.UF),this._=(0,t.uUt)(c.OY).setTitle("Chiusure o Ferie | La Porta D'Acqua"),this.inputSize="m",this.filters={}}ngOnInit(){this.search(),this.router.events.pipe((0,f.a)(this.destroy$),(0,$.I)(e=>e instanceof r.MT)).subscribe({next:()=>this.search()})}paginationChange(e){this.filters.page=e.page,this.filters.per_page=e.size,this.search()}delete(e){e&&this.notifications.confirm("Sei sicuro di voler cancellare questa chiusura?").subscribe({next:a=>{a&&this.confirmedDelete(e)}})}filtersChanged(e){this.filters=e,this.search(e)}confirmedDelete(e){this.loading.set(!0),this.service.destroy(e).pipe((0,f.a)(this.destroy$),(0,A.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:a=>{this.notifications.error((0,S.mk)(a)||"Qualcosa \xE8 andato storto nella cancellazione.")}})}search(e=this.filters){e||={},e={...e},this.loading.set(!0),this.service.search(e).pipe((0,f.a)(this.destroy$),(0,A.U)(()=>this.loading.set(!1))).subscribe({next:a=>{this.data.set(a)},error:a=>{this.notifications.error((0,S.mk)(a)||"Qualcosa \xE8 andato storto nella ricerca."),console.error(a)}})}static#t=this.\u0275fac=function(a){return new(a||i)};static#n=this.\u0275cmp=t.In1({type:i,selectors:[["app-list"]],standalone:!0,features:[t.M5G([O.UF]),t.UHJ],decls:16,vars:1,consts:()=>{let e,a,C,h,x,U,w,W,B,H,K,X,F,j,V,J,Q,Z;return e="Chiusure",a=" Nota che per evitare confusione dovuta al fuso orario, tutti gli orari in questa pagina sono espressi in UTC. Dovrai quindi sommare 1 ora per ottenere l'orario italiano.\n",C=" Di seguito l'elenco delle chiusure.\n",h="Crea nuovo",x="Dal",U="Elimina",w="Modifica",W="al",B="In poi",H="Chiusi ogni",K="Tutto il giorno",X="Dalle ore",F="Alle ore",j="Chiusi dalle ore",V="del giorno",J="fino alle ore",Q="del giorno",Z="Nessun elemento trovato.",[e,[1,"text-warning"],a,[1,"text-slate-400"],C,["tuiButton","","appearance","flat","routerLink","new",1,"mb-3","me-3"],[1,"flex","items-center"],h,["class","my-2",3,"items","total"],[1,"my-2",3,"items","total","paginationChange"],[1,"border","rounded-lg","flex","flex-col","mb-5"],[3,"translations"],[1,"flex","flex-row","justify-between","p-4"],[1,"me-1"],x,[1,"flex","items-center","justify-end"],["type","button","size","m","tuiButton","","appearance","secondary-destructive",3,"click"],[1,"flex","items-center","justify-between","p-4"],U,["tuiLink","",3,"routerLink"],w,W,B,H,K,X,F,j,V,J,Q,["class","border rounded-lg flex flex-col mb-5"],Z]},template:function(a,C){1&a&&(t.I0R(0,"h1"),t.SAx(1),t.aS0(2,0),t.k70(),t.C$Y(),t.I0R(3,"p",1),t.aS0(4,2),t.C$Y(),t.I0R(5,"p",3),t.aS0(6,4),t.C$Y(),t.I0R(7,"a",5)(8,"span",6)(9,"mat-icon"),t.OEk(10,"add"),t.C$Y(),t.I0R(11,"span"),t.aS0(12,7),t.C$Y()()(),t.yuY(13,Y,3,3,"tui-table-pagination",8)(14,b,3,0),t.wR5(15,"router-outlet")),2&a&&(t.yG2(13),t.C0Y(13,C.items().length>0?13:14))},dependencies:[u.oB,u.qL,r.qQ,r.cP,r.ER,n.y,L.yy,L.Ws,E.w,E.C,p.CI,p.Kw,R.G,y.G],encapsulation:2,changeDetection:0})}return i})()},2720:(v,I,o)=>{o.d(I,{k:()=>t});var n=o(8400);class t extends n.w{static wholeDay(c){return"00:00"===c.weekly_from&&"23:59"===c.weekly_to}constructor(c){super(c),this.isWeekly=!1,this.isWholeDay=!1,this.from_timestamp=c.from_timestamp?new Date(c.from_timestamp):void 0,this.to_timestamp=c.to_timestamp?new Date(c.to_timestamp):void 0,this.weekly_from=c.weekly_from,this.weekly_to=c.weekly_to,this.weekday=c.weekday,this.message=c.message,this.translations={...c.translations??{}},this.isWeekly=this.calcIsWeekly(),this.isWholeDay=this.calcIsWholeday()}calcIsWeekly(){return"string"==typeof this.weekly_from&&this.weekly_from.length>0||"string"==typeof this.weekly_to&&this.weekly_to.length>0}calcIsWholeday(){return t.wholeDay({weekly_from:this.weekly_from,weekly_to:this.weekly_to})}}},2516:(v,I,o)=>{o.d(I,{G:()=>t});var n=o(4496);let t=(()=>{class u{constructor(){this.weekdays=["Domenica","Luned\xEC","Marted\xEC","Mercoled\xEC","Gioved\xEC","Venerd\xEC","Sabato"]}transform(r){return"number"!=typeof r&&"string"==typeof r&&(r=parseInt(r)),"number"==typeof r&&r>=0&&r<=6?this.weekdays[r]:null}static#t=this.\u0275fac=function(S){return new(S||u)};static#n=this.\u0275pipe=n.UTH({name:"weekday",type:u,pure:!0,standalone:!0})}return u})()},6820:(v,I,o)=>{o.d(I,{I:()=>c});var n=o(6012),t=o(2720),u=o(4496);let c=(()=>{class r extends n.s{constructor(){super(t.k,"admin/holidays")}static#t=this.\u0275fac=function(M){return new(M||r)};static#n=this.\u0275prov=u.wxM({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},5892:(v,I,o)=>{o.d(I,{Ws:()=>Y,yy:()=>b});var n=o(4496),t=o(2528),u=o(4472);(0,t.W0)((0,u.u)("showHideText"));const r=(0,t.W0)((0,u.u)("paginationTexts"));var S=o(466),P=o(1512),M=o(4336),L=o(3656),O=o(8212),E=o(5944),p=o(1368),f=o(1040);function $(s,i){if(1&s&&(n.SAx(0),n.OEk(1),n.I0R(2,"strong",6),n.OEk(3),n.C$Y(),n.k70()),2&s){const _=n.GaO().ngIf,e=n.GaO();n.yG2(),n.oRS(" ",_.pages," "),n.yG2(2),n.cNF(e.pages)}}function A(s,i){if(1&s&&(n.SAx(0),n.OEk(1),n.k70()),2&s){const _=i.polymorpheusOutlet;n.yG2(),n.oRS(" ",_," ")}}function R(s,i){if(1&s&&n.wR5(0,"tui-svg",13),2&s){const _=n.GaO(4);n.E7m("src",_.commonIcons.check)}}function y(s,i){1&s&&n.wR5(0,"span",14)}const G=(s,i)=>({$implicit:s,total:i});function l(s,i){if(1&s){const _=n.KQA();n.SAx(0),n.I0R(1,"button",9),n.qCj("click",function(){const C=n.usT(_).$implicit,h=n.GaO(3);return n.CGJ(h.onItem(C))}),n.yuY(2,A,2,1,"ng-container",10)(3,R,1,1,"tui-svg",11)(4,y,1,0,"ng-template",null,12,n.gJz),n.C$Y(),n.k70()}if(2&s){const _=i.$implicit,e=n.Gew(5),a=n.GaO(3);n.yG2(2),n.E7m("polymorpheusOutlet",a.options.sizeOptionContent)("polymorpheusOutletContext",n.IBC(4,G,_,a.total)),n.yG2(),n.E7m("ngIf",_===a.size)("ngIfElse",e)}}function m(s,i){if(1&s&&(n.I0R(0,"tui-data-list",7),n.yuY(1,l,6,7,"ng-container",8),n.C$Y()),2&s){const _=n.GaO(2);n.yG2(),n.E7m("ngForOf",_.items)}}function g(s,i){if(1&s){const _=n.KQA();n.SAx(0),n.I0R(1,"button",15),n.qCj("click",function(){n.usT(_);const a=n.GaO(2);return n.CGJ(a.back())}),n.C$Y(),n.I0R(2,"button",16),n.qCj("click",function(){n.usT(_);const a=n.GaO(2);return n.CGJ(a.forth())}),n.C$Y(),n.k70()}if(2&s){const _=i.ngIf,e=n.GaO(2);n.yG2(),n.E7m("disabled",e.leftDisabled)("icon",e.icons.decrement)("title",_[0]),n.yG2(),n.E7m("disabled",e.rightDisabled)("icon",e.icons.increment)("title",_[1])}}function T(s,i){if(1&s){const _=n.KQA();n.SAx(0),n.I0R(1,"span",1),n.yuY(2,$,4,2,"ng-container",0),n.C$Y(),n.I0R(3,"span",2),n.OEk(4),n.I0R(5,"tui-hosted-dropdown",3),n.iHE("openChange",function(a){n.usT(_);const C=n.GaO();return n.kNx(C.open,a)||(C.open=a),n.CGJ(a)}),n.I0R(6,"button",4)(7,"strong"),n.OEk(8),n.C$Y()(),n.yuY(9,m,2,1,"ng-template",null,5,n.gJz),n.C$Y(),n.OEk(11),n.I0R(12,"strong",6),n.OEk(13),n.C$Y()(),n.yuY(14,g,3,6,"ng-container",0),n.wVc(15,"async"),n.k70()}if(2&s){const _=i.ngIf,e=n.Gew(10),a=n.GaO();n.yG2(2),n.E7m("ngIf",a.options.showPages),n.yG2(2),n.oRS(" ",_.linesPerPage," "),n.yG2(),n.E7m("content",e),n.OKB("open",a.open),n.yG2(3),n.CAO("",a.start+1,"\u2013",a.end,""),n.yG2(3),n.oRS(" ",_.of," "),n.yG2(2),n.cNF(a.total),n.yG2(),n.E7m("ngIf",n.kDX(15,9,a.spinTexts$))}}const k=(0,t.AL)({sizeOptionContent:function N({$implicit:s}){return`${s}`},showPages:!0,items:[10,20,50,100],size:10});let Y=(()=>{class s{constructor(_,e,a,C,h){this.icons=_,this.spinTexts$=e,this.texts$=a,this.options=C,this.commonIcons=h,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new n._w7,this.sizeChange=new n._w7,this.paginationChange=new n._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(_){const{start:e}=this;this.size=_,this.sizeChange.emit(_),this.open=!1,this.page=Math.floor(e/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return s.\u0275fac=function(_){return new(_||s)(n.GI1(E.KY),n.GI1(E.s1),n.GI1(r),n.GI1(k),n.GI1(E.QJ))},s.\u0275cmp=n.In1({type:s,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(_,e){1&_&&(n.yuY(0,T,16,11,"ng-container",0),n.wVc(1,"async")),2&_&&n.E7m("ngIf",n.kDX(1,1,e.texts$))},dependencies:[S.Qw,P.C,M.yi,M.sP,L.Wu,O.Kw,p.u_,p.ay,f.Af,p.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),s})(),b=(()=>{class s{}return s.\u0275fac=function(_){return new(_||s)},s.\u0275mod=n.a4G({type:s}),s.\u0275inj=n.s3X({imports:[[p.MD,O.CI,P.w,S.GE,M.A$,L.Yt,f.Ux]]}),s})()},1512:(v,I,o)=>{o.d(I,{C:()=>y,w:()=>G});var n=o(4496),t=o(900),u=o(4392),c=o(4164),r=o(3480),S=o(4680),P=o(3972),M=o(5944),L=o(3412),O=o(4704),E=o(3656),p=o(1368);const f=["tuiLink",""];function $(l,m){if(1&l&&n.wR5(0,"tui-svg",3),2&l){const g=n.GaO();n.E7m("src",g.icon||"")}}function A(l,m){if(1&l&&n.wR5(0,"tui-svg",4),2&l){const g=n.GaO();n.E7m("src",g.icon||"")}}const R=["*"];let y=(()=>{class l{constructor(g,T,N){this.el=g,this.mode$=T,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,L.U)((0,t.Ax)(this.el.nativeElement,"focusin").pipe((0,O.k)(u.Ml)),(0,t.Ax)(this.el.nativeElement,"focusout").pipe((0,O.k)(u.so))),N.subscribe(D=>{this.focusVisible=D})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,c.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return l.\u0275fac=function(g){return new(g||l)(n.GI1(n.GMv),n.GI1(M.Yx),n.GI1(r.MF))},l.\u0275cmp=n.In1({type:l,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(g,T){1&g&&n.qCj("$.data-mode.attr",function(){return T.mode$}),2&g&&(n.e48("data-host-mode",T.mode),n.eAK("_pseudo",T.pseudo)("_icon-rotated",T.iconRotated)("_focus-visible",T.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[n.M5G([(0,S.NK)(l),r.MF,r.UF,P.Ir])],attrs:f,ngContentSelectors:R,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(g,T){1&g&&(n.kPM(),n.yuY(0,$,1,1,"tui-svg",0),n.I0R(1,"span",1),n._Xx(2),n.C$Y(),n.yuY(3,A,1,1,"tui-svg",2)),2&g&&(n.E7m("ngIf",T.iconAlignLeft),n.yG2(3),n.E7m("ngIf",T.iconAlignRight))},dependencies:[E.Wu,p.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),l})(),G=(()=>{class l{}return l.\u0275fac=function(g){return new(g||l)},l.\u0275mod=n.a4G({type:l}),l.\u0275inj=n.s3X({imports:[[p.MD,E.Yt]]}),l})()}}]);