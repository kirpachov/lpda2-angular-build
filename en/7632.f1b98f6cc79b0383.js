"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7632],{7632:(d,S,t)=>{t.r(S),t.d(S,{ListComponent:()=>b});var T=t(1368),_=t(4496),r=t(1560),s=t(4476),i=t(2992),E=t(8256),L=t(6820),M=t(1128),O=t(5892),N=t(3480),A=t(1512),g=t(8212),u=t(3616),G=t(6684),f=t(8824),Y=t(2516),k=t(3932);const v=(o,l)=>l.id;function x(o,l){if(1&o&&(_.I0R(0,"span",9),_.aS0(1,17),_.C$Y(),_.I0R(2,"span",9),_.OEk(3),_.wVc(4,"date"),_.C$Y()),2&o){const e=_.GaO().$implicit;_.yG2(3),_.cNF(_.g7$(4,1,e.to_timestamp,"shortDate"))}}function U(o,l){1&o&&(_.SAx(0),_.aS0(1,18),_.k70())}function W(o,l){1&o&&(_.I0R(0,"span"),_.aS0(1,20),_.C$Y())}function w(o,l){if(1&o&&(_.I0R(0,"span",9),_.aS0(1,21),_.C$Y(),_.I0R(2,"span",9),_.OEk(3),_.C$Y(),_.I0R(4,"span",9),_.aS0(5,22),_.C$Y(),_.I0R(6,"span",9),_.OEk(7),_.C$Y()),2&o){const e=_.GaO(2).$implicit;_.yG2(3),_.cNF(e.weekly_from),_.yG2(4),_.cNF(e.weekly_to)}}function z(o,l){if(1&o&&(_.I0R(0,"span",9),_.aS0(1,19),_.C$Y(),_.I0R(2,"span",9),_.OEk(3),_.wVc(4,"weekday"),_.C$Y(),_.yuY(5,W,2,0,"span")(6,w,8,2)),2&o){const e=_.GaO().$implicit;_.yG2(3),_.cNF(_.kDX(4,2,e.weekday)),_.yG2(2),_.C0Y(5,e.isWholeDay?5:6)}}function H(o,l){1&o&&(_.SAx(0),_.aS0(1,23),_.k70())}function B(o,l){if(1&o){const e=_.KQA();_.I0R(0,"div",6),_.wR5(1,"app-show-translations",7),_.I0R(2,"div",8)(3,"div")(4,"span",9),_.aS0(5,10),_.C$Y(),_.I0R(6,"span",9),_.OEk(7),_.wVc(8,"date"),_.C$Y(),_.yuY(9,x,5,4)(10,U,2,0),_.C$Y(),_.I0R(11,"div"),_.yuY(12,z,7,4)(13,H,2,0),_.C$Y()(),_.I0R(14,"div",11)(15,"div")(16,"button",12),_.qCj("click",function(){const c=_.usT(e).$implicit,C=_.GaO(2);return _.CGJ(C.delete(c.id))}),_.I0R(17,"span",13)(18,"span",9),_.aS0(19,14),_.C$Y(),_.I0R(20,"mat-icon"),_.OEk(21,"delete"),_.C$Y()()()(),_.I0R(22,"div")(23,"a",15)(24,"span",13)(25,"span",9),_.aS0(26,16),_.C$Y(),_.I0R(27,"mat-icon"),_.OEk(28,"edit"),_.C$Y()()()()()()}if(2&o){const e=l.$implicit;_.yG2(),_.E7m("translations",e.translations.message),_.yG2(6),_.cNF(_.g7$(8,5,e.from_timestamp,"shortDate")),_.yG2(2),_.C0Y(9,e.to_timestamp?9:10),_.yG2(3),_.C0Y(12,e.isWeekly?12:13),_.yG2(11),_._6D("routerLink",e.id)}}const X=()=>[10,20,50,100];function K(o,l){if(1&o){const e=_.KQA();_.c53(0,B,29,8,"div",24,v),_.I0R(2,"tui-table-pagination",5),_.qCj("paginationChange",function(I){_.usT(e);const c=_.GaO();return _.CGJ(c.paginationChange(I))}),_.C$Y()}if(2&o){const e=_.GaO();let n;_.oho(e.items()),_.yG2(2),_.E7m("items",_.q4q(2,X))("total",null!==(n=null==(n=e.data())||null==n.metadata?null:n.metadata.total_count)&&void 0!==n?n:0)}}function F(o,l){1&o&&(_.I0R(0,"p"),_.SAx(1),_.aS0(2,25),_.k70(),_.C$Y())}let b=(()=>{class o{constructor(){this.loading=(0,_.OCB)(!1),this.data=(0,_.OCB)(null),this.items=(0,_.S6b)(()=>this.data()?.items||[]),this.route=(0,_.uUt)(i.gV),this.router=(0,_.uUt)(i.E5),this.service=(0,_.uUt)(L.I),this.notifications=(0,_.uUt)(M.E),this.destroy$=(0,_.uUt)(N.UF),this._=(0,_.uUt)(s.OY).setTitle("Closures or Holidays | The Water Gate"),this.inputSize="m",this.filters={}}ngOnInit(){this.search(),this.router.events.pipe((0,u.a)(this.destroy$),(0,G.I)(e=>e instanceof i.MT)).subscribe({next:()=>this.search()})}paginationChange(e){this.filters.page=e.page,this.filters.per_page=e.size,this.search()}delete(e){e&&this.notifications.confirm("Are you sure you want to delete this closure?").subscribe({next:n=>{n&&this.confirmedDelete(e)}})}filtersChanged(e){this.filters=e,this.search(e)}confirmedDelete(e){this.loading.set(!0),this.service.destroy(e).pipe((0,u.a)(this.destroy$),(0,f.U)(()=>{this.loading.set(!1),this.search()})).subscribe({error:n=>{this.notifications.error((0,E.mk)(n)||"Something went wrong with the cancellation.")}})}search(e=this.filters){e||={},e={...e},this.loading.set(!0),this.service.search(e).pipe((0,u.a)(this.destroy$),(0,f.U)(()=>this.loading.set(!1))).subscribe({next:n=>{this.data.set(n)},error:n=>{this.notifications.error((0,E.mk)(n)||"Something went wrong in the research."),console.error(n)}})}static#_=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=_.In1({type:o,selectors:[["app-list"]],standalone:!0,features:[_.M5G([N.UF]),_.UHJ],decls:14,vars:1,consts:()=>{let e,n,I,c,C,m,p,P,D,h,$,R,y;return e="Holidays",n="Create new",I="From the",c="Delete",C="Modify",m="to the",p="From now on",P="Closed every",D="All day long",h="From the hours",$="At hours",R="Always closed during this period.",y="No element found.",[e,["tuiButton","","appearance","flat","routerLink","new",1,"mb-3","me-3"],[1,"flex","items-center"],n,["class","my-2",3,"items","total"],[1,"my-2",3,"items","total","paginationChange"],[1,"border","rounded-lg","flex","flex-col","mb-5"],[3,"translations"],[1,"flex","flex-row","justify-between","p-4"],[1,"me-1"],I,[1,"flex","items-center","justify-end"],["type","button","size","m","tuiButton","","appearance","secondary-destructive",3,"click"],[1,"flex","items-center","justify-between","p-4"],c,["tuiLink","",3,"routerLink"],C,m,p,P,D,h,$,R,["class","border rounded-lg flex flex-col mb-5"],y]},template:function(n,I){1&n&&(_.I0R(0,"h1"),_.SAx(1),_.aS0(2,0),_.k70(),_.C$Y(),_.I0R(3,"p"),_.OEk(4," Di seguito l'elenco delle ferie o giorni di chiusura settimanli.\n"),_.C$Y(),_.I0R(5,"a",1)(6,"span",2)(7,"mat-icon"),_.OEk(8,"add"),_.C$Y(),_.I0R(9,"span"),_.aS0(10,3),_.C$Y()()(),_.yuY(11,K,3,3,"tui-table-pagination",4)(12,F,3,0),_.wR5(13,"router-outlet")),2&n&&(_.yG2(11),_.C0Y(11,I.items().length>0?11:12))},dependencies:[r.oB,r.qL,i.qQ,i.cP,i.ER,T.y,O.yy,O.Ws,A.w,A.C,g.CI,g.Kw,Y.G,k.G],encapsulation:2,changeDetection:0})}return o})()},2720:(d,S,t)=>{t.d(S,{k:()=>_});var T=t(8400);class _ extends T.w{static wholeDay(s){return"00:00"===s.weekly_from&&"23:59"===s.weekly_to}constructor(s){super(s),this.isWeekly=!1,this.isWholeDay=!1,this.from_timestamp=s.from_timestamp?new Date(s.from_timestamp):void 0,this.to_timestamp=s.to_timestamp?new Date(s.to_timestamp):void 0,this.weekly_from=s.weekly_from,this.weekly_to=s.weekly_to,this.weekday=s.weekday,this.message=s.message,this.translations={...s.translations??{}},this.isWeekly=this.calcIsWeekly(),this.isWholeDay=this.calcIsWholeday()}calcIsWeekly(){return"string"==typeof this.weekly_from&&this.weekly_from.length>0||"string"==typeof this.weekly_to&&this.weekly_to.length>0}calcIsWholeday(){return _.wholeDay({weekly_from:this.weekly_from,weekly_to:this.weekly_to})}}},2516:(d,S,t)=>{t.d(S,{G:()=>_});var T=t(4496);let _=(()=>{class r{constructor(){this.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}transform(i){return"number"!=typeof i&&"string"==typeof i&&(i=parseInt(i)),"number"==typeof i&&i>=0&&i<=6?this.weekdays[i]:null}static#_=this.\u0275fac=function(E){return new(E||r)};static#e=this.\u0275pipe=T.UTH({name:"weekday",type:r,pure:!0,standalone:!0})}return r})()},6820:(d,S,t)=>{t.d(S,{I:()=>s});var T=t(6012),_=t(2720),r=t(4496);let s=(()=>{class i extends T.s{constructor(){super(_.k,"admin/holidays")}static#_=this.\u0275fac=function(M){return new(M||i)};static#e=this.\u0275prov=r.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()}}]);