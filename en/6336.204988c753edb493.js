"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[6336],{4592:(C,m,o)=>{o.d(m,{u:()=>G});var e=o(4496),a=o(3480),u=o(400),_=o(8304),E=o(3616),s=o(8824),h=o(7692),t=o(5656);let R=(()=>{class i{transform(n){return null==n||"object"!=typeof n||Array.isArray(n)?[]:Object.keys(n).map(r=>[r,n[r]])}static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275pipe=e.UTH({name:"objectToArray",type:i,pure:!0,standalone:!0})}return i})();var T=o(1560);function I(i,l){if(1&i&&e.wR5(0,"tui-loader",0),2&i){const n=e.GaO();e.E7m("showLoader",n.showLoader)("size","s")}}const d=(i,l)=>l[0];function p(i,l){if(1&i&&(e.SAx(0),e.aS0(1,8),e.k70(),e.OEk(2)),2&i){const n=e.GaO(2);e.yG2(2),e.oRS(" ",n.totalPeople(),"\n")}}function S(i,l){if(1&i&&(e.OEk(0),e.SAx(1),e.aS0(2,11),e.k70(),e.OEk(3),e.SAx(4),e.aS0(5,12),e.k70()),2&i){const n=e.GaO().$implicit;e.oRS(" ",n[1]," "),e.yG2(3),e.oRS(" ",n[0]," ")}}function M(i,l){if(1&i&&(e.yuY(0,S,6,2,"ng-template",null,9,e.gJz),e.I0R(2,"span",10),e.OEk(3),e.C$Y()),2&i){const n=l.$implicit,r=e.Gew(1);e.yG2(2),e.E7m("tuiHint",r),e.yG2(),e.CAO(" ",n[1]," x ",n[0]," ")}}function y(i,l){if(1&i&&(e.I0R(0,"p",13),e.OEk(1),e.C$Y()),2&i){const n=e.GaO(2);e.yG2(),e.oRS(" ",n.groupedError()," ")}}const A=(i,l)=>l.turn.id;function O(i,l){1&i&&e.OEk(0,"Quante persone ci sono al tavolo in questione")}function P(i,l){if(1&i&&(e.I0R(0,"th",19),e.OEk(1),e.C$Y()),2&i){const n=l.$implicit;e.yG2(),e.oRS(" ",n[0]," ")}}function b(i,l){1&i&&e.OEk(0,"Quanti tavoli con lo stesso numero di persone")}function x(i,l){if(1&i&&(e.I0R(0,"td",23)(1,"span"),e.OEk(2),e.C$Y()()),2&i){const n=l.$implicit;e.yG2(2),e.cNF(n[1])}}function L(i,l){if(1&i&&(e.I0R(0,"div",15)(1,"p",16)(2,"b"),e.OEk(3),e.C$Y()(),e.I0R(4,"table",17)(5,"thead")(6,"tr",18)(7,"th",19),e.yuY(8,O,1,0,"ng-template",null,20,e.gJz),e.I0R(10,"span",21),e.aS0(11,22),e.C$Y()(),e.c53(12,P,2,1,"th",26,d),e.wVc(14,"objectToArray"),e.C$Y()(),e.I0R(15,"tbody")(16,"tr",18)(17,"td",23),e.yuY(18,b,1,0,"ng-template",null,24,e.gJz),e.I0R(20,"span",21),e.aS0(21,25),e.C$Y()(),e.c53(22,x,3,1,"td",27,d),e.wVc(24,"objectToArray"),e.C$Y()()()()),2&i){const n=l.$implicit,r=e.Gew(9),c=e.Gew(19);e.yG2(3),e.cNF(n.turn.name),e.yG2(7),e.E7m("tuiHint",r),e.yG2(2),e.oho(e.kDX(14,3,n.summary)),e.yG2(8),e.E7m("tuiHint",c),e.yG2(2),e.oho(e.kDX(24,5,n.summary))}}function $(i,l){if(1&i&&(e.I0R(0,"div",14),e.c53(1,L,25,7,"div",28,A),e.C$Y()),2&i){const n=e.GaO(2);e.yG2(),e.oho(n.groupedData())}}function U(i,l){if(1&i&&(e.yuY(0,p,3,1,"ng-template",null,1,e.gJz),e.I0R(2,"div",2)(3,"span",3),e.SAx(4),e.aS0(5,4),e.k70(),e.C$Y(),e.c53(6,M,4,3,null,null,d),e.I0R(8,"span",5)(9,"mat-icon",6),e.OEk(10,"import_contacts"),e.C$Y(),e.OEk(11),e.C$Y()(),e.yuY(12,y,2,1,"p",7)(13,$,3,0)),2&i){const n=e.Gew(1),r=e.GaO();e.yG2(6),e.oho(r.ungroupedData()),e.yG2(2),e.E7m("tuiHint",n),e.yG2(3),e.oRS(" ",r.totalPeople()," "),e.yG2(),e.C0Y(12,r.groupedError()?12:13)}}let G=(()=>{class i{constructor(){this.destroy$=(0,e.uUt)(a.UF),this.service=(0,e.uUt)(_.S),this.ungroupedData=(0,e.OCB)(null),this.totalPeople=(0,e.S6b)(()=>this.ungroupedData()?.reduce((n,[r,c])=>n+r*c,0)||0),this.groupedData=(0,e.OCB)(null),this.loadingGrouped=(0,e.OCB)(!1),this.loadingUngrouped=(0,e.OCB)(!1),this.parentLoading=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.loadingGrouped()||this.loadingUngrouped()||this.parentLoading()),this.groupedError=(0,e.OCB)(null),this.filters=null}set showLoader(n){this.parentLoading.set(n)}get showLoader(){return this.parentLoading()}ngOnChanges(){this.query()}query(){this.queryUngrouped(),this.queryGrouped()}queryUngrouped(){this.loadingUngrouped.set(!0);const n={};Object.keys(this.filters??{}).forEach(r=>{if(this.filters){const c=this.filters[r];c instanceof u.EK?n[r]=c.toString():c&&(n[r]=c)}}),this.service.ungroupedTablesSummary(n).pipe((0,E.a)(this.destroy$),(0,s.U)(()=>this.loadingUngrouped.set(!1))).subscribe({next:r=>{this.ungroupedData.set(Object.entries(r).map(([c,g])=>[Number(c),g]))}})}queryGrouped(){this.groupedError.set(null),this.groupedData.set(null);const n={};if(this.filters&&this.filters.date_from&&this.filters.date_from===this.filters.date_to)n.date=this.filters.date_from.toString();else{if(!(this.filters&&this.filters.date instanceof u.EK))return console.warn("invalid filters for grouped data",this.filters,JSON.stringify(this.filters)),void this.groupedError.set("Select a single day to view the summary grouped by shift.");n.date=this.filters.date.toString()}this.loadingGrouped.set(!0),this.service.tablesSummary(n).pipe((0,E.a)(this.destroy$),(0,s.U)(()=>this.loadingGrouped.set(!1))).subscribe({next:r=>{this.groupedData.set(r)}})}static#e=this.\u0275fac=function(r){return new(r||i)};static#t=this.\u0275cmp=e.In1({type:i,selectors:[["app-reservation-tables-summary"]],inputs:{showLoader:"showLoader",filters:"filters"},standalone:!0,features:[e.M5G([a.UF]),e.SYr,e.UHJ],decls:2,vars:1,consts:()=>{let n,r,c,g,v,N;return n="Table distribution",r="Total people",c="tables from",g="people",v="N\xB0 of people",N="Quantity:",[[3,"showLoader","size"],["totalHint",""],[1,"flex","items-center","justify-around","border","px-2","py-2","border-slate-200"],[1,"hidden","md:flex","items-center","justify-center"],n,[1,"flex","items-center",3,"tuiHint"],[1,"me-1"],["class","text-slate-500"],r,["dHint",""],[1,"me-1",3,"tuiHint"],c,g,[1,"text-slate-500"],[1,"flex","flex-wrap"],[1,"col-12","pe-2","mb-2","md:col-6"],[1,"font-xl"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__th"],["headerExplain",""],[3,"tuiHint"],v,[1,"tui-table__td"],["valueExplain",""],N,["class","tui-table__th"],["class","tui-table__td"],["class","col-12 pe-2 mb-2 md:col-6"]]},template:function(r,c){1&r&&e.yuY(0,I,1,2,"tui-loader",0)(1,U,14,3),2&r&&e.C0Y(0,c.loading()?0:1)},dependencies:[h.Sk,h.Cb,t.WY,t.lh,t.SL,t.i6,t.IT,T.oB,T.qL,R],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04)}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.9rem}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__th[_ngcontent-%COMP%]{padding:.5rem;height:inherit}"],changeDetection:0})}return i})()},8128:(C,m,o)=>{function e(a){if(!a)return null;const u=a.match(/filename="(.+)"/);return u?u[1]:null}o.d(m,{k:()=>e})},9772:(C,m,o)=>{o.d(m,{CU:()=>a,ye:()=>u});const e=(new Date).getTimezoneOffset()/60;function a(_,E=e){return"string"==typeof _&&_.length>0&&_.match(/\d{1,2}:\d{1,2}/)?`${Number(_.split(":")[0])-E}:${_.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:_}),"")}function u(_,E=e){return a(_,-1*E)}},1960:(C,m,o)=>{o.d(m,{u:()=>_});var e=o(8400),a=o(5136);class u extends e.w{constructor(s){super(s),this.date=s.date?new Date(s.date):void 0,this.reservation_turn_id=s.reservation_turn_id,this.group_id=s.group_id,this.reservation_turn=s.reservation_turn?new a.e(s.reservation_turn):void 0}}class _ extends e.w{constructor(s){super(s),this.turns=[],this.dates=[],this.title=s.title,this.status=s.status,this.preorder_type=s.preorder_type,this.payment_value=s.payment_value,this.message=s.message,this.turns=(s.turns||[]).map(h=>new a.e(h)),this.dates=(s.dates||[]).map(h=>new u(h)),this.translations=s.translations||{}}}},5136:(C,m,o)=>{o.d(m,{e:()=>_});var e=o(8400),a=o(9772),u=o(1960);class _ extends e.w{constructor(s){super(s),this.messages=[],this.name=s.name,this.weekday=s.weekday,this.step=s.step,this.valid_times=s.valid_times,this.starts_at=s.starts_at?(0,a.CU)(s.starts_at):void 0,this.ends_at=s.ends_at?(0,a.CU)(s.ends_at):void 0,this.preorder_reservation_group=s.preorder_reservation_group?new u.u(s.preorder_reservation_group):void 0,this.messages=s.messages}}},5180:(C,m,o)=>{o.d(m,{C:()=>s});var e=o(8400);class a extends e.w{constructor(t){super(t),this.image_pixel_id=t.image_pixel_id,this.event_data=t.event_data,this.event_time=t.event_time?new Date(t.event_time):void 0}}class u extends e.w{constructor(t){super(t),this.image_id=t.image_id,this.delivered_email_id=t.delivered_email_id,this.record_type=t.record_type,this.record_id=t.record_id,this.event_type=t.event_type,this.secret=t.secret,this.events=t.events?t.events.map(R=>new a(R)):[]}}class _ extends e.w{constructor(t){super(t),this.record_id=t.record_id,this.record_type=t.record_type,this.text=t.text,this.html=t.html,this.subject=t.subject,this.headers=t.headers,this.raw=t.raw,this.image_pixels=t.image_pixels?t.image_pixels.map(R=>new u(R)):[]}}class E extends e.w{constructor(t){super(t),this.hpp_url=t.hpp_url,this.value=t.value,this.status=t.status,this.reservation_id=t.reservation_id,this.preorder_type=t.preorder_type,this.external_id=t.external_id,this.other=t.other}}class s extends e.w{constructor(t){super(t),this.fullname=t.fullname,this.datetime=t.datetime?new Date(t.datetime):void 0,this.status=t.status,this.secret=t.secret,this.adults=t.adults,this.children=t.children,this.table=t.table,this.notes=t.notes,this.email=t.email,this.phone=t.phone,this.payment=t.payment?new E(t.payment):void 0,this.delivered_emails=t.delivered_emails?t.delivered_emails.map(R=>new _(R)):[]}}},8304:(C,m,o)=>{o.d(m,{S:()=>R});var e=o(6012),a=o(5180),u=o(4704),_=o(3252),E=o(9144),s=o(7048),h=o(8128),t=o(4496);let R=(()=>{class T extends e.s{constructor(){super(a.C,"admin/reservations")}updateStatus(d,p){return this.patch(`${d}/status/${p}`,{}).pipe((0,u.k)(S=>this.mapItem(S)))}tablesSummary(d={}){return this.get("tables_summary",{params:d})}ungroupedTablesSummary(d={}){return this.get("ungrouped_tables_summary",{params:d})}deliverConfirmationEmail(d){return this.post(`${d}/deliver_confirmation_email`,{}).pipe((0,u.k)(p=>this.mapItem(p)))}refoundPayment(d){return this.post(`${d}/refund_payment`,{}).pipe((0,u.k)(p=>this.mapItem(p)))}refreshPaymentStatus(d){return this.post(`${d}/refresh_payment_status`,{}).pipe((0,u.k)(p=>this.mapItem(p)))}export(d){return new _._(p=>{this.get("export",{responseType:"blob",observe:"response",params:d}).pipe((0,E.a)(S=>(console.error("ReservationsService.export() error:",S),p.error(S),new _._))).subscribe(S=>{if(S instanceof s.WA&&S.body){const M=(0,h.k)(S.headers?.get("Content-Disposition"))??"Prenotazioni.xlsx",y=S.headers?.get("Content-Type")??"application/octet-stream",A=window.URL.createObjectURL(new Blob([S.body],{type:y})),O=document.createElement("a");O.href=A,O.download=M,O.click(),p.complete()}})})}static#e=this.\u0275fac=function(p){return new(p||T)};static#t=this.\u0275prov=t.wxM({token:T,factory:T.\u0275fac,providedIn:"root"})}return T})()}}]);