"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4144],{4144:(x,C,e)=>{e.r(C),e.d(C,{ListComponent:()=>G});var t=e(1368),n=e(4496),m=e(4476),l=e(8256),u=e(1128),a=e(3480),E=e(3616),f=e(6684),M=e(8824),I=e(4251),T=e(1560),v=e(2992),R=e(5892),L=e(1512),A=e(8212),k=e(6424),b=e(7748);const U=(p,D)=>D.id;function _(p,D){if(1&p&&(n.I0R(0,"p",15),n.OEk(1),n.wVc(2,"currency"),n.C$Y()),2&p){const i=n.GaO().$implicit;n.yG2(),n.oRS("",n.kDX(2,1,i.payment_value)," ")}}function P(p,D){if(1&p&&(n.I0R(0,"div",6)(1,"div",7)(2,"a",8)(3,"span",9),n.OEk(4),n.C$Y()()(),n.I0R(5,"div",10)(6,"div",11),n.wR5(7,"app-preorder-reservation-group-status",12),n.C$Y(),n.wR5(8,"div",11),n.I0R(9,"div")(10,"div"),n.wR5(11,"app-preorder-reservation-group-preorder-type",13),n.C$Y(),n.yuY(12,_,3,3,"p",14),n.C$Y()()()),2&p){const i=D.$implicit;n.yG2(2),n._6D("routerLink",i.id),n.yG2(2),n.cNF(i.title),n.yG2(3),n.E7m("item",i),n.yG2(4),n.E7m("item",i),n.yG2(),n.C0Y(12,i.payment_value&&i.payment_value>0?12:-1)}}const h=()=>[10,20,50,100];function O(p,D){if(1&p){const i=n.KQA();n.c53(0,P,13,5,"div",16,U),n.I0R(2,"tui-table-pagination",5),n.qCj("paginationChange",function(o){n.usT(i);const c=n.GaO();return n.CGJ(c.paginationChange(o))}),n.C$Y()}if(2&p){const i=n.GaO();let r;n.oho(i.items()),n.yG2(2),n.E7m("items",n.q4q(2,h))("total",null!==(r=null==(r=i.data())||null==r.metadata?null:r.metadata.total_count)&&void 0!==r?r:0)}}function y(p,D){1&p&&(n.I0R(0,"p"),n.SAx(1),n.aS0(2,17),n.k70(),n.C$Y())}let G=(()=>{class p{constructor(){this.loading=(0,n.OCB)(!1),this.data=(0,n.OCB)(null),this.items=(0,n.S6b)(()=>this.data()?.items||[]),this.route=(0,n.uUt)(v.gV),this.router=(0,n.uUt)(v.E5),this.service=(0,n.uUt)(I.e),this.notifications=(0,n.uUt)(u.E),this.destroy$=(0,n.uUt)(a.UF),this._=(0,n.uUt)(m.OY).setTitle("Payments at the time of booking | La Porta D'Acqua"),this.inputSize="m",this.filters={}}ngOnInit(){this.search(),this.router.events.pipe((0,E.a)(this.destroy$),(0,f.I)(i=>i instanceof v.MT)).subscribe({next:()=>this.search()})}paginationChange(i){this.filters.page=i.page,this.filters.per_page=i.size,this.search()}delete(i){i&&this.notifications.confirm("Are you sure you want to cancel this payment?").subscribe({next:r=>{r&&this.confirmedDelete(i)}})}filtersChanged(i){this.filters=i,this.search(i)}confirmedDelete(i){this.loading.set(!0),this.service.destroy(i).pipe((0,E.a)(this.destroy$),(0,M.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:r=>{this.notifications.error((0,l.mk)(r)||"Something went wrong with the cancellation.")}})}search(i=this.filters){i||={},i={...i},this.loading.set(!0),this.service.search(i).pipe((0,E.a)(this.destroy$),(0,M.U)(()=>this.loading.set(!1))).subscribe({next:r=>{this.data.set(r)},error:r=>{this.notifications.error((0,l.mk)(r)||"Something went wrong in the research."),console.error(r)}})}static#t=this.\u0275fac=function(r){return new(r||p)};static#n=this.\u0275cmp=n.In1({type:p,selectors:[["app-list"]],standalone:!0,features:[n.M5G([a.UF]),n.UHJ],decls:12,vars:1,consts:()=>{let i,r,o;return i="Payments upon booking",r="Create new",o="No advance payment required.",[i,["tuiButton","","appearance","flat","routerLink","new",1,"mb-3","me-3"],[1,"flex","items-center"],r,["class","my-2",3,"items","total"],[1,"my-2",3,"items","total","paginationChange"],[1,"border","rounded-lg","flex","flex-col","mb-5"],[1,"w-full","p-4","border-b"],["tuiLink","",3,"routerLink"],[1,"text-3xl"],[1,"flex","flex-row","justify-between","p-4"],[1,"flex","flex-col"],[3,"item"],[1,"text-xl",3,"item"],["class","text-xl text-success-dark"],[1,"text-xl","text-success-dark"],["class","border rounded-lg flex flex-col mb-5"],o]},template:function(r,o){1&r&&(n.I0R(0,"h1"),n.SAx(1),n.aS0(2,0),n.k70(),n.C$Y(),n.I0R(3,"a",1)(4,"span",2)(5,"mat-icon"),n.OEk(6,"add"),n.C$Y(),n.I0R(7,"span"),n.aS0(8,3),n.C$Y()()(),n.yuY(9,O,3,3,"tui-table-pagination",4)(10,y,3,0),n.wR5(11,"router-outlet")),2&r&&(n.yG2(9),n.C0Y(9,o.items().length>0?9:10))},dependencies:[T.oB,T.qL,v.qQ,v.cP,v.ER,t.cf,R.yy,R.Ws,L.w,L.C,k.w,b.c,A.CI,A.Kw],encapsulation:2,changeDetection:0})}return p})()},9772:(x,C,e)=>{e.d(C,{CU:()=>n,ye:()=>m});const t=(new Date).getTimezoneOffset()/60;function n(l,u=t){return"string"==typeof l&&l.length>0&&l.match(/\d{1,2}:\d{1,2}/)?`${Number(l.split(":")[0])-u}:${l.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:l}),"")}function m(l,u=t){return n(l,-1*u)}},1960:(x,C,e)=>{e.d(C,{u:()=>l});var t=e(8400),n=e(5136);class m extends t.w{constructor(a){super(a),this.date=a.date?new Date(a.date):void 0,this.reservation_turn_id=a.reservation_turn_id,this.group_id=a.group_id,this.reservation_turn=a.reservation_turn?new n.e(a.reservation_turn):void 0}}class l extends t.w{constructor(a){super(a),this.turns=[],this.dates=[],this.title=a.title,this.status=a.status,this.preorder_type=a.preorder_type,this.payment_value=a.payment_value,this.message=a.message,this.turns=(a.turns||[]).map(E=>new n.e(E)),this.dates=(a.dates||[]).map(E=>new m(E))}}},5136:(x,C,e)=>{e.d(C,{e:()=>l});var t=e(8400),n=e(9772),m=e(1960);class l extends t.w{constructor(a){super(a),this.name=a.name,this.weekday=a.weekday,this.step=a.step,this.valid_times=a.valid_times,this.starts_at=a.starts_at?(0,n.CU)(a.starts_at):void 0,this.ends_at=a.ends_at?(0,n.CU)(a.ends_at):void 0,this.preorder_reservation_group=a.preorder_reservation_group?new m.u(a.preorder_reservation_group):void 0}}},4251:(x,C,e)=>{e.d(C,{e:()=>l});var t=e(6012),n=e(1960),m=e(4496);let l=(()=>{class u extends t.s{constructor(){super(n.u,"admin/preorder_reservation_groups")}static#t=this.\u0275fac=function(f){return new(f||u)};static#n=this.\u0275prov=m.wxM({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},5892:(x,C,e)=>{e.d(C,{Ws:()=>i,yy:()=>r});var t=e(4496),n=e(2528),m=e(3568);(0,n.W0)((0,m.u)("showHideText"));const u=(0,n.W0)((0,m.u)("paginationTexts"));var a=e(466),E=e(1512),f=e(4336),M=e(3656),I=e(8212),T=e(5944),v=e(1368),R=e(1040);function L(o,c){if(1&o&&(t.SAx(0),t.OEk(1),t.I0R(2,"strong",6),t.OEk(3),t.C$Y(),t.k70()),2&o){const s=t.GaO().ngIf,d=t.GaO();t.yG2(),t.oRS(" ",s.pages," "),t.yG2(2),t.cNF(d.pages)}}function A(o,c){if(1&o&&(t.SAx(0),t.OEk(1),t.k70()),2&o){const s=c.polymorpheusOutlet;t.yG2(),t.oRS(" ",s," ")}}function k(o,c){if(1&o&&t.wR5(0,"tui-svg",13),2&o){const s=t.GaO(4);t.E7m("src",s.commonIcons.check)}}function b(o,c){1&o&&t.wR5(0,"span",14)}const U=(o,c)=>({$implicit:o,total:c});function _(o,c){if(1&o){const s=t.KQA();t.SAx(0),t.I0R(1,"button",9),t.qCj("click",function(){const S=t.usT(s).$implicit,$=t.GaO(3);return t.CGJ($.onItem(S))}),t.yuY(2,A,2,1,"ng-container",10)(3,k,1,1,"tui-svg",11)(4,b,1,0,"ng-template",null,12,t.gJz),t.C$Y(),t.k70()}if(2&o){const s=c.$implicit,d=t.Gew(5),g=t.GaO(3);t.yG2(2),t.E7m("polymorpheusOutlet",g.options.sizeOptionContent)("polymorpheusOutletContext",t.IBC(4,U,s,g.total)),t.yG2(),t.E7m("ngIf",s===g.size)("ngIfElse",d)}}function P(o,c){if(1&o&&(t.I0R(0,"tui-data-list",7),t.yuY(1,_,6,7,"ng-container",8),t.C$Y()),2&o){const s=t.GaO(2);t.yG2(),t.E7m("ngForOf",s.items)}}function h(o,c){if(1&o){const s=t.KQA();t.SAx(0),t.I0R(1,"button",15),t.qCj("click",function(){t.usT(s);const g=t.GaO(2);return t.CGJ(g.back())}),t.C$Y(),t.I0R(2,"button",16),t.qCj("click",function(){t.usT(s);const g=t.GaO(2);return t.CGJ(g.forth())}),t.C$Y(),t.k70()}if(2&o){const s=c.ngIf,d=t.GaO(2);t.yG2(),t.E7m("disabled",d.leftDisabled)("icon",d.icons.decrement)("title",s[0]),t.yG2(),t.E7m("disabled",d.rightDisabled)("icon",d.icons.increment)("title",s[1])}}function O(o,c){if(1&o){const s=t.KQA();t.SAx(0),t.I0R(1,"span",1),t.yuY(2,L,4,2,"ng-container",0),t.C$Y(),t.I0R(3,"span",2),t.OEk(4),t.I0R(5,"tui-hosted-dropdown",3),t.iHE("openChange",function(g){t.usT(s);const S=t.GaO();return t.kNx(S.open,g)||(S.open=g),t.CGJ(g)}),t.I0R(6,"button",4)(7,"strong"),t.OEk(8),t.C$Y()(),t.yuY(9,P,2,1,"ng-template",null,5,t.gJz),t.C$Y(),t.OEk(11),t.I0R(12,"strong",6),t.OEk(13),t.C$Y()(),t.yuY(14,h,3,6,"ng-container",0),t.wVc(15,"async"),t.k70()}if(2&o){const s=c.ngIf,d=t.Gew(10),g=t.GaO();t.yG2(2),t.E7m("ngIf",g.options.showPages),t.yG2(2),t.oRS(" ",s.linesPerPage," "),t.yG2(),t.E7m("content",d),t.OKB("open",g.open),t.yG2(3),t.CAO("",g.start+1,"\u2013",g.end,""),t.yG2(3),t.oRS(" ",s.of," "),t.yG2(2),t.cNF(g.total),t.yG2(),t.E7m("ngIf",t.kDX(15,9,g.spinTexts$))}}const p=(0,n.AL)({sizeOptionContent:function y({$implicit:o}){return`${o}`},showPages:!0,items:[10,20,50,100],size:10});let i=(()=>{class o{constructor(s,d,g,S,$){this.icons=s,this.spinTexts$=d,this.texts$=g,this.options=S,this.commonIcons=$,this.items=this.options.items,this.total=0,this.page=0,this.size=this.options.size,this.pageChange=new t._w7,this.sizeChange=new t._w7,this.paginationChange=new t._w7,this.open=!1}get pages(){return Math.ceil(this.total/this.size)}get start(){return this.page*this.size}get end(){return Math.min(this.start+this.size,this.total)}get leftDisabled(){return!this.start}get rightDisabled(){return this.end===this.total}get pagination(){return{page:this.page,size:this.size}}onItem(s){const{start:d}=this;this.size=s,this.sizeChange.emit(s),this.open=!1,this.page=Math.floor(d/this.size),this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}back(){this.page--,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}forth(){this.page++,this.pageChange.emit(this.page),this.paginationChange.emit(this.pagination)}}return o.\u0275fac=function(s){return new(s||o)(t.GI1(T.KY),t.GI1(T.s1),t.GI1(u),t.GI1(p),t.GI1(T.QJ))},o.\u0275cmp=t.In1({type:o,selectors:[["tui-table-pagination"]],inputs:{items:"items",total:"total",page:"page",size:"size"},outputs:{pageChange:"pageChange",sizeChange:"sizeChange",paginationChange:"paginationChange"},decls:2,vars:3,consts:[[4,"ngIf"],[1,"t-pages"],["automation-id","tui-table-pagination__lines-per-page-wrapper"],[3,"content","open","openChange"],["tuiLink","","type","button"],["content",""],[1,"t-strong"],["size","s"],[4,"ngFor","ngForOf"],["tuiOption","",1,"t-item",3,"click"],[4,"polymorpheusOutlet","polymorpheusOutletContext"],["class","t-checkmark",3,"src",4,"ngIf","ngIfElse"],["fakeIcon",""],[1,"t-checkmark",3,"src"],[1,"t-checkmark"],["appearance","icon","size","xs","tuiIconButton","","type","button",1,"t-back",3,"disabled","icon","title","click"],["appearance","icon","size","xs","tuiIconButton","","type","button",3,"disabled","icon","title","click"]],template:function(s,d){1&s&&(t.yuY(0,O,16,11,"ng-container",0),t.wVc(1,"async")),2&s&&t.E7m("ngIf",t.kDX(1,1,d.texts$))},dependencies:[a.Qw,E.C,f.yi,f.sP,M.Wu,I.Kw,v.u_,v.ay,R.Af,v.a],styles:["[_nghost-%COMP%]{display:flex;font:var(--tui-font-text-s);align-items:center;color:var(--tui-text-03)}.t-strong[_ngcontent-%COMP%]{color:var(--tui-text-01)}.t-pages[_ngcontent-%COMP%]{margin-right:auto}.t-item[_ngcontent-%COMP%]{min-width:5.5rem;box-sizing:border-box}.t-checkmark[_ngcontent-%COMP%]{min-width:1.5rem;border-left:5px solid transparent}.t-back[_ngcontent-%COMP%]{margin:0 .25rem 0 1.5rem}"],changeDetection:0}),o})(),r=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[[v.MD,I.CI,E.w,a.GE,f.A$,M.Yt,R.Ux]]}),o})()},1512:(x,C,e)=>{e.d(C,{C:()=>b,w:()=>U});var t=e(4496),n=e(900),m=e(4392),l=e(4164),u=e(3480),a=e(4680),E=e(3972),f=e(5944),M=e(3412),I=e(4704),T=e(3656),v=e(1368);const R=["tuiLink",""];function L(_,P){if(1&_&&t.wR5(0,"tui-svg",3),2&_){const h=t.GaO();t.E7m("src",h.icon||"")}}function A(_,P){if(1&_&&t.wR5(0,"tui-svg",4),2&_){const h=t.GaO();t.E7m("src",h.icon||"")}}const k=["*"];let b=(()=>{class _{constructor(h,O,y){this.el=h,this.mode$=O,this.pseudo=!1,this.icon="",this.iconAlign="right",this.iconRotated=!1,this.mode=null,this.focusVisible=!1,this.focusedChange=(0,M.U)((0,n.Ax)(this.el.nativeElement,"focusin").pipe((0,I.k)(m.Ml)),(0,n.Ax)(this.el.nativeElement,"focusout").pipe((0,I.k)(m.so))),y.subscribe(G=>{this.focusVisible=G})}get nativeFocusableElement(){return this.el.nativeElement}get focused(){return(0,l.ER)(this.nativeFocusableElement)}get hasIcon(){return!!this.icon}get iconAlignLeft(){return this.hasIcon&&"left"===this.iconAlign}get iconAlignRight(){return this.hasIcon&&"right"===this.iconAlign}}return _.\u0275fac=function(h){return new(h||_)(t.GI1(t.GMv),t.GI1(f.Yx),t.GI1(u.MF))},_.\u0275cmp=t.In1({type:_,selectors:[["a","tuiLink",""],["button","tuiLink",""]],hostVars:7,hostBindings:function(h,O){1&h&&t.qCj("$.data-mode.attr",function(){return O.mode$}),2&h&&(t.e48("data-host-mode",O.mode),t.eAK("_pseudo",O.pseudo)("_icon-rotated",O.iconRotated)("_focus-visible",O.focusVisible))},inputs:{pseudo:"pseudo",icon:"icon",iconAlign:"iconAlign",iconRotated:"iconRotated",mode:"mode"},exportAs:["tuiLink"],features:[t.M5G([(0,a.NK)(_),u.MF,u.UF,E.Ir])],attrs:R,ngContentSelectors:k,decls:4,vars:2,consts:[["class","t-icon t-icon_left",3,"src",4,"ngIf"],[1,"t-content"],["class","t-icon t-icon_right",3,"src",4,"ngIf"],[1,"t-icon","t-icon_left",3,"src"],[1,"t-icon","t-icon_right",3,"src"]],template:function(h,O){1&h&&(t.kPM(),t.yuY(0,L,1,1,"tui-svg",0),t.I0R(1,"span",1),t._Xx(2),t.C$Y(),t.yuY(3,A,1,1,"tui-svg",2)),2&h&&(t.E7m("ngIf",O.iconAlignLeft),t.yG2(3),t.E7m("ngIf",O.iconAlignRight))},dependencies:[T.Wu,v.u_],styles:["[_nghost-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;color:var(--tui-link);text-align:left;text-transform:inherit;font-weight:inherit;cursor:pointer;outline:none}[_nghost-%COMP%]:hover{color:var(--tui-link-hover)}[_nghost-%COMP%]:disabled{opacity:var(--tui-disabled-opacity);cursor:default}[data-mode=onLight][_nghost-%COMP%]{color:var(--tui-text-02)}[data-mode=onLight][_nghost-%COMP%]:hover, [data-mode=onLight]._active[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01)}[data-mode=onLight]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(0,0,0,.48);text-decoration-color:#0000007a}[data-mode=onLight]._pseudo[_nghost-%COMP%]:hover, [data-mode=onLight]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative-night)}[data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:hover, [data-mode=onLight][data-host-mode=negative][_nghost-%COMP%]:active, [data-mode=onLight][data-host-mode=negative]._active[_nghost-%COMP%]{color:var(--tui-negative-night-hover)}[data-mode=onDark][_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][_nghost-%COMP%]:hover, [data-mode=onDark][_nghost-%COMP%]:active, [data-mode=onDark]._active[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onDark]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(255,255,255,.48);text-decoration-color:#ffffff7a}[data-mode=onDark]._pseudo[_nghost-%COMP%]:hover, [data-mode=onDark]._pseudo[_nghost-%COMP%]:active, [data-mode=onDark]._pseudo._active[_nghost-%COMP%]{color:var(--tui-text-03-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive-night)}[data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:hover, [data-mode=onDark][data-host-mode=positive][_nghost-%COMP%]:active, [data-mode=onDark][data-host-mode=positive]._active[_nghost-%COMP%]{color:var(--tui-positive-night-hover)}[data-host-mode=negative][_nghost-%COMP%]{color:var(--tui-negative)}[data-host-mode=negative][_nghost-%COMP%]:hover{color:var(--tui-negative-hover)}[data-host-mode=negative]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(222,76,30,.48);text-decoration-color:#de4c1e7a}[data-host-mode=positive][_nghost-%COMP%]{color:var(--tui-positive)}[data-host-mode=positive][_nghost-%COMP%]:hover{color:var(--tui-positive-hover)}[data-host-mode=positive]._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{-webkit-text-decoration-color:rgba(58,169,129,.48);text-decoration-color:#3aa9817a}._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-selection)}[data-mode=onLight]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear);color:var(--tui-text-01)}[data-mode=onDark]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-clear-inverse);color:var(--tui-text-01-night)}[data-host-mode=positive]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-success-bg)}[data-host-mode=negative]._focus-visible[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{background:var(--tui-error-bg)}._pseudo[_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{padding-bottom:.15em;-webkit-text-decoration:underline dashed rgba(51,111,238,.48);text-decoration:underline dashed rgba(51,111,238,.48);text-underline-offset:.2em;text-decoration-thickness:.7px}.t-icon[_ngcontent-%COMP%]{transition-property:transform;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:var(--tui-link-icon-size, 1.5rem);height:var(--tui-link-icon-size, 1.5rem);margin-top:-.125rem}.t-icon_left[_ngcontent-%COMP%]{margin-right:.25rem}.t-icon_right[_ngcontent-%COMP%]{margin-left:.25rem}._icon-rotated[_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{transform:rotate(180deg)}"],changeDetection:0}),_})(),U=(()=>{class _{}return _.\u0275fac=function(h){return new(h||_)},_.\u0275mod=t.a4G({type:_}),_.\u0275inj=t.s3X({imports:[[v.MD,T.Yt]]}),_})()}}]);