"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4144],{4144:(R,C,n)=>{n.r(C),n.d(C,{ListComponent:()=>G});var t=n(1368),e=n(4496),r=n(4476),v=n(8256),_=n(1128),o=n(3480),O=n(3616),l=n(6684),f=n(8824),T=n(4251),I=n(1560),P=n(1236),D=n(5892),x=n(1512),L=n(8212),k=n(6424),b=n(7748);const U=(m,y)=>y.id;function u(m,y){if(1&m&&(e.I0R(0,"p",15),e.OEk(1),e.wVc(2,"currency"),e.C$Y()),2&m){const a=e.GaO().$implicit;e.yG2(),e.oRS("",e.kDX(2,1,a.payment_value)," ")}}function M(m,y){if(1&m&&(e.I0R(0,"div",6)(1,"div",7)(2,"a",8)(3,"span",9),e.OEk(4),e.C$Y()()(),e.I0R(5,"div",10)(6,"div",11),e.wR5(7,"app-preorder-reservation-group-status",12),e.C$Y(),e.wR5(8,"div",11),e.I0R(9,"div")(10,"div"),e.wR5(11,"app-preorder-reservation-group-preorder-type",13),e.C$Y(),e.yuY(12,u,3,3,"p",14),e.C$Y()()()),2&m){const a=y.$implicit;e.yG2(2),e._6D("routerLink",a.id),e.yG2(2),e.cNF(a.title),e.yG2(3),e.E7m("item",a),e.yG2(4),e.E7m("item",a),e.yG2(),e.C0Y(12,a.payment_value&&a.payment_value>0?12:-1)}}const h=()=>[10,20,50,100];function E(m,y){if(1&m){const a=e.KQA();e.c53(0,M,13,5,"div",16,U),e.I0R(2,"tui-table-pagination",5),e.qCj("paginationChange",function(i){e.usT(a);const g=e.GaO();return e.CGJ(g.paginationChange(i))}),e.C$Y()}if(2&m){const a=e.GaO();let c;e.oho(a.items()),e.yG2(2),e.E7m("items",e.q4q(2,h))("total",null!==(c=null==(c=a.data())||null==c.metadata?null:c.metadata.total_count)&&void 0!==c?c:0)}}function A(m,y){1&m&&(e.I0R(0,"p"),e.SAx(1),e.aS0(2,17),e.k70(),e.C$Y())}let G=(()=>{class m{constructor(){this.loading=(0,e.OCB)(!1),this.data=(0,e.OCB)(null),this.items=(0,e.S6b)(()=>this.data()?.items||[]),this.route=(0,e.uUt)(P.gV),this.router=(0,e.uUt)(P.E5),this.service=(0,e.uUt)(T.e),this.notifications=(0,e.uUt)(_.E),this.destroy$=(0,e.uUt)(o.UF),this._=(0,e.uUt)(r.OY).setTitle("Payments at the time of booking | La Porta D'Acqua"),this.inputSize="m",this.filters={}}ngOnInit(){this.search(),this.router.events.pipe((0,O.a)(this.destroy$),(0,l.I)(a=>a instanceof P.MT)).subscribe({next:()=>this.search()})}paginationChange(a){this.filters.page=a.page,this.filters.per_page=a.size,this.search()}delete(a){a&&this.notifications.confirm("Are you sure you want to cancel this payment?").subscribe({next:c=>{c&&this.confirmedDelete(a)}})}filtersChanged(a){this.filters=a,this.search(a)}confirmedDelete(a){this.loading.set(!0),this.service.destroy(a).pipe((0,O.a)(this.destroy$),(0,f.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:c=>{this.notifications.error((0,v.mk)(c)||"Something went wrong with the cancellation.")}})}search(a=this.filters){a||={},a={...a},this.loading.set(!0),this.service.search(a).pipe((0,O.a)(this.destroy$),(0,f.U)(()=>this.loading.set(!1))).subscribe({next:c=>{this.data.set(c)},error:c=>{this.notifications.error((0,v.mk)(c)||"Something went wrong in the research."),console.error(c)}})}static#t=this.\u0275fac=function(c){return new(c||m)};static#e=this.\u0275cmp=e.In1({type:m,selectors:[["app-list"]],standalone:!0,features:[e.M5G([o.UF]),e.UHJ],decls:12,vars:1,consts:()=>{let a,c,i;return a="Payments upon booking",c="Create new",i="No advance payment required.",[a,["tuiButton","","appearance","flat","routerLink","new",1,"mb-3","me-3"],[1,"flex","items-center"],c,["class","my-2",3,"items","total"],[1,"my-2",3,"items","total","paginationChange"],[1,"border","rounded-lg","flex","flex-col","mb-5"],[1,"w-full","p-4","border-b"],["tuiLink","",3,"routerLink"],[1,"text-3xl"],[1,"flex","flex-row","justify-between","p-4"],[1,"flex","flex-col"],[3,"item"],[1,"text-xl",3,"item"],["class","text-xl text-success-dark"],[1,"text-xl","text-success-dark"],["class","border rounded-lg flex flex-col mb-5"],i]},template:function(c,i){1&c&&(e.I0R(0,"h1"),e.SAx(1),e.aS0(2,0),e.k70(),e.C$Y(),e.I0R(3,"a",1)(4,"span",2)(5,"mat-icon"),e.OEk(6,"add"),e.C$Y(),e.I0R(7,"span"),e.aS0(8,3),e.C$Y()()(),e.yuY(9,E,3,3,"tui-table-pagination",4)(10,A,3,0),e.wR5(11,"router-outlet")),2&c&&(e.yG2(9),e.C0Y(9,i.items().length>0?9:10))},dependencies:[I.oB,I.qL,P.qQ,P.cP,P.ER,t.cf,D.yy,D.Ws,x.w,x.C,k.w,b.c,L.CI,L.Kw],encapsulation:2,changeDetection:0})}return m})()},7748:(R,C,n)=>{n.d(C,{c:()=>_});var t=n(6404),e=n(5656),r=n(4496);function v(o,O){if(1&o&&(r.I0R(0,"span",0),r.OEk(1),r.C$Y()),2&o){const l=r.GaO();r.E7m("tuiHint",l.trans[l.type].long),r.yG2(),r.cNF(l.trans[l.type].short)}}let _=(()=>{class o{constructor(){this.trans={nexi_payment:{short:"Payment CC with nexi",long:"\n           A payment with a credit card of the specified amount will be required\n          at the time of booking. \n        "},nexi_authorization:{short:"Authorization cc with nexi",long:"\n           A credit card authorization in the specified amount will be required\n          at the time of booking. \n        "}}}set item(l){l&&!(0,t.ch)(l)&&console.warn("Invalid preorder type:",l),this.type=l?.preorder_type}static#t=this.\u0275fac=function(f){return new(f||o)};static#e=this.\u0275cmp=r.In1({type:o,selectors:[["app-preorder-reservation-group-preorder-type"]],inputs:{item:"item",type:"type"},standalone:!0,features:[r.UHJ],decls:1,vars:1,consts:[[3,"tuiHint"]],template:function(f,T){1&f&&r.yuY(0,v,2,2,"span",0),2&f&&r.C0Y(0,T.type&&T.trans[T.type]?0:-1)},dependencies:[e.WY,e.lh,e.SL,e.i6,e.IT],encapsulation:2,changeDetection:0})}return o})()},6404:(R,C,n)=>{n.d(C,{ch:()=>r,i4:()=>e});const e=["nexi_payment","nexi_authorization"];function r(v){return e.includes(v)}},9772:(R,C,n)=>{n.d(C,{CU:()=>r,MJ:()=>e,ye:()=>v}),(new Date).getTimezoneOffset();const e=1;function r(_,o=e){if(!("string"==typeof _&&_.length>0&&_.match(/\d{1,2}:\d{1,2}/)))return console.error("Invalid string provided to strTimeTimezone",{string:_}),"";const l=Number(_.split(":")[0])+o;return`${l<10?"0":""}${l}:${_.split(":")[1]}`}function v(_,o=e){return r(_,-1*o)}},1960:(R,C,n)=>{n.d(C,{u:()=>v});var t=n(8400),e=n(5136);class r extends t.w{constructor(o){super(o),this.date=o.date?new Date(o.date):void 0,this.reservation_turn_id=o.reservation_turn_id,this.group_id=o.group_id,this.reservation_turn=o.reservation_turn?new e.e(o.reservation_turn):void 0}}class v extends t.w{constructor(o){super(o),this.turns=[],this.dates=[],this.title=o.title,this.status=o.status,this.preorder_type=o.preorder_type,this.payment_value=o.payment_value,this.message=o.message,this.turns=(o.turns||[]).map(O=>new e.e(O)),this.dates=(o.dates||[]).map(O=>new r(O)),this.translations=o.translations||{},this.table_type_to_preorder_reservation_groups=o.table_type_to_preorder_reservation_groups}}},5136:(R,C,n)=>{n.d(C,{e:()=>v});var t=n(8400),e=n(9772),r=n(1960);class v extends t.w{constructor(o){super(o),this.messages=[],this.name=o.name,this.weekday=o.weekday,this.step=o.step,this.valid_times=o.valid_times,this.starts_at=o.starts_at?(0,e.CU)(o.starts_at):void 0,this.ends_at=o.ends_at?(0,e.CU)(o.ends_at):void 0,this.preorder_reservation_group=o.preorder_reservation_group?new r.u(o.preorder_reservation_group):void 0,this.messages=o.messages}}},4251:(R,C,n)=>{n.d(C,{e:()=>v});var t=n(6012),e=n(1960),r=n(4496);let v=(()=>{class _ extends t.s{constructor(){super(e.u,"admin/preorder_reservation_groups")}static#t=this.\u0275fac=function(l){return new(l||_)};static#e=this.\u0275prov=r.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},5892:(R,C,n)=>{n.d(C,{Ws:()=>a,yy:()=>c});var t=n(4496),e=n(2528),r=n(4472);(0,e.W0)((0,r.u)("showHideText"));const _=(0,e.W0)((0,r.u)("paginationTexts"));var o=n(466),O=n(1512),l=n(4336),f=n(3656),T=n(8212),I=n(5944),P=n(1368),D=n(1040);function x(i,g){if(1&i&&(t.SAx(0),t.OEk(1),t.I0R(2,"strong",6),t.OEk(3),t.C$Y(),t.k70()),2&i){const s=t.GaO().ngIf,p=t.GaO();t.yG2(),t.oRS(" ",s.pages," "),t.yG2(2),t.cNF(p.pages)}}function L(i,g){if(1&i&&(t.SAx(0),t.OEk(1),t.k70()),2&i){const s=g.polymorpheusOutlet;t.yG2(),t.oRS(" ",s," ")}}function k(i,g){if(1&i&&t.wR5(0,"tui-svg",13),2&i){const s=t.GaO(4);t.E7m("src",s.commonIcons.check)}}function b(i,g){1&i&&t.wR5(0,"span",14)}const U=(i,g)=>({$implicit:i,total:g});function u(i,g){if(1&i){const s=t.KQA();t.SAx(0),t.I0R(1,"button",9),t.qCj("click",function(){const S=t.usT(s).$implicit,$=t.GaO(3);return t.CGJ($.onItem(S))}),t.yuY(2,L,2,1,"ng-container",10)(3,k,1,1,"tui-svg",11)(4,b,1,0,"ng-template",null,12,t.gJz),t.C$Y(),t.k70()}if(2&i){const s=g.$implicit,p=t.Gew(5),d=t.GaO(3);t.yG2(2),t.E7m("polymorpheusOutlet",d.options.sizeOptionContent)("polymorpheusOutletContext",t.IBC(4,U,s,d.total)),t.yG2(),t.E7m("ngIf",s===d.size)("ngIfElse",p)}}function M(i,g){if(1&i&&(t.I0R(0,"tui-data-list",7),t.yuY(1,u,6,7,"ng-container",8),t.C$Y()),2&i){const s=t.GaO(2);t.yG2(),t.E7m("ngForOf",s.items)}}function h(i,g){if(1&i){const s=t.KQA();t.SAx(0),t.I0R(1,"button",15),t.qCj("click",function(){t.usT(s);const d=t.GaO(2);return t.CGJ(d.back())}),t.C$Y(),t.I0R(2,"button",16),t.qCj("click",function(){t.usT(s);const d=t.GaO(2);return t.CGJ(d.forth())}),t.C$Y(),t.k70()}if(2&i){const s=g.ngIf,p=t.GaO(2);t.yG2(),t.E7m("disabled",p.leftDisabled)("icon",p.icons.decrement)("title",s[0]),t.yG2(),t.E7m("disabled",p.rightDisabled)("icon",p.icons.increment)("title",s[1])}}function E(i,g){if(1&i){const s=t.KQA();t.SAx(0),t.I0R(1,"span",1),t.yuY(2,x,4,2,"ng-container",0),t.C$Y(),t.I0R(3,"span",2),t.OEk(4),t.I0R(5,"tui-hosted-dropdown",3),t.iHE("openChange",function(d){t.usT(s);const S=t.GaO();return t.kNx(S.open,d)||(S.open=d),t.CGJ(d)}),t.I0R(6,"button",4)(7,"strong"),t.OEk(8),t.C$Y()(),t.yuY(9,M,2,1,"ng-template",null,5,t.gJz),t.C$Y(),t.OEk(11),t.I0R(12,"strong",6),t.OEk(13),t.C$Y()(),t.yuY(14,h,3,6,"ng-container",0),t.wVc(15,"async"),t.k70()}if(2&i){const s=g.ngIf,p=t.Gew(10),d=t.GaO();t.yG2(2),t.E7m("ngIf",d.options.showPages),t.yG2(2),t.oRS(" ",s.linesPerPage," "),t.yG2(),t.E7m("content",p),t.OKB("open",d.open),t.yG2(3),t.CAO("",d.start+1,"\u2013",d.end,""),t.yG2(3),t.oRS(" ",s.of," "),t.yG2(2),t.cNF(d.total),t.yG2(),t.E7m("ngIf",t.kDX(15,9,d.spinTexts$))}}const m=(0,e.AL)({sizeOptionContent:function A({$implicit:i}){return`${i}`},showPages:!0,items:[10,20,50,100],size:10});let a=(()=>{class i{constructor(s,p,d,S,$){this.icons=s,this.spinTexts$=p,this.texts$=d,this.options=S,this.commonIcons=$,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new t._w7,this.sizeChange=new t._w7,this.paginationChange=new t._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(s){const{start:p}=this;this.size=s,this.sizeChange.emit(s),this.open=!1,this.page=Math.floor(p/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return i.\u0275fac=function(s){return new(s||i)(t.GI1(I.KY),t.GI1(I.s1),t.GI1(_),t.GI1(m),t.GI1(I.QJ))},i.\u0275cmp=t.In1({type:i,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(s,p){1&s&&(t.yuY(0,E,16,11,"ng-container",0),t.wVc(1,"async")),2&s&&t.E7m("ngIf",t.kDX(1,1,p.texts$))},dependencies:[o.Qw,O.C,l.yi,l.sP,f.Wu,T.Kw,P.u_,P.ay,D.Af,P.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),i})(),c=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=t.a4G({type:i}),i.\u0275inj=t.s3X({imports:[[P.MD,T.CI,O.w,o.GE,l.A$,f.Yt,D.Ux]]}),i})()},1512:(R,C,n)=>{n.d(C,{C:()=>b,w:()=>U});var t=n(4496),e=n(900),r=n(4392),v=n(4164),_=n(3480),o=n(4680),O=n(3972),l=n(5944),f=n(3412),T=n(4704),I=n(3656),P=n(1368);const D=["tuiLink",""];function x(u,M){if(1&u&&t.wR5(0,"tui-svg",3),2&u){const h=t.GaO();t.E7m("src",h.icon||"")}}function L(u,M){if(1&u&&t.wR5(0,"tui-svg",4),2&u){const h=t.GaO();t.E7m("src",h.icon||"")}}const k=["*"];let b=(()=>{class u{constructor(h,E,A){this.el=h,this.mode$=E,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,f.U)((0,e.Ax)(this.el.nativeElement,"focusin").pipe((0,T.k)(r.Ml)),(0,e.Ax)(this.el.nativeElement,"focusout").pipe((0,T.k)(r.so))),A.subscribe(G=>{this.focusVisible=G})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,v.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return u.\u0275fac=function(h){return new(h||u)(t.GI1(t.GMv),t.GI1(l.Yx),t.GI1(_.MF))},u.\u0275cmp=t.In1({type:u,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(h,E){1&h&&t.qCj("$.data-mode.attr",function(){return E.mode$}),2&h&&(t.e48("data-host-mode",E.mode),t.eAK("_pseudo",E.pseudo)("_icon-rotated",E.iconRotated)("_focus-visible",E.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,o.NK)(u),_.MF,_.UF,O.Ir])],attrs:D,ngContentSelectors:k,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(h,E){1&h&&(t.kPM(),t.yuY(0,x,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,L,1,1,"tui-svg",2)),2&h&&(t.E7m("ngIf",E.iconAlignLeft),t.yG2(3),t.E7m("ngIf",E.iconAlignRight))},dependencies:[I.Wu,P.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),u})(),U=(()=>{class u{}return u.\u0275fac=function(h){return new(h||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[P.MD,I.Yt]]}),u})()}}]);