"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[1388],{4208:(g,E,s)=>{s.d(E,{u:()=>w});var e=s(4496),d=s(3480),u=s(400),a=s(8304),p=s(3616),R=s(8824),S=s(7692),t=s(5656);let b=(()=>{class n{transform(i){return null==i||"object"!=typeof i||Array.isArray(i)?[]:Object.keys(i).map(o=>[o,i[o]])}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275pipe=e.UTH({name:"objectToArray",type:n,pure:!0,standalone:!0})}return n})();var _=s(1560),c=s(1368);function m(n,r){if(1&n&&e.wR5(0,"tui-loader",0),2&n){const i=e.GaO();e.E7m("showLoader",i.showLoader)("size","s")}}const C=(n,r)=>r[0];function y(n,r){if(1&n&&(e.SAx(0),e.aS0(1,8),e.k70(),e.OEk(2)),2&n){const i=e.GaO(2);e.yG2(2),e.oRS(" ",i.totalPeople(),"\n")}}function A(n,r){if(1&n&&(e.OEk(0),e.SAx(1),e.aS0(2,11),e.k70(),e.OEk(3),e.SAx(4),e.aS0(5,12),e.k70()),2&n){const i=e.GaO().$implicit;e.oRS(" ",i[1]," "),e.yG2(3),e.oRS(" ",i[0]," ")}}function f(n,r){if(1&n&&(e.yuY(0,A,6,2,"ng-template",null,9,e.gJz),e.I0R(2,"span",10),e.OEk(3),e.C$Y()),2&n){const i=r.$implicit,o=e.Gew(1);e.yG2(2),e.E7m("tuiHint",o),e.yG2(),e.CAO(" ",i[1]," x ",i[0]," ")}}function I(n,r){if(1&n&&(e.I0R(0,"p",13),e.OEk(1),e.C$Y()),2&n){const i=e.GaO(2);e.yG2(),e.oRS(" ",i.groupedError()," ")}}const x=(n,r)=>r.turn.id;function $(n,r){1&n&&e.OEk(0,"Quante persone ci sono al tavolo in questione")}function L(n,r){if(1&n&&(e.I0R(0,"th",19),e.OEk(1),e.C$Y()),2&n){const i=r.$implicit;e.yG2(),e.oRS(" ",i[0]," ")}}function P(n,r){1&n&&e.OEk(0,"Quanti tavoli con lo stesso numero di persone")}const U=n=>({"text-slate-400":n});function G(n,r){if(1&n&&(e.I0R(0,"td",23)(1,"span",26),e.OEk(2),e.C$Y()()),2&n){const i=r.$implicit;e.yG2(),e.E7m("ngClass",e.S45(2,U,0==i[1])),e.yG2(),e.cNF(i[1])}}function Y(n,r){if(1&n&&(e.I0R(0,"div",15)(1,"p",16)(2,"b"),e.OEk(3),e.C$Y()(),e.I0R(4,"table",17)(5,"thead")(6,"tr",18)(7,"th",19),e.yuY(8,$,1,0,"ng-template",null,20,e.gJz),e.I0R(10,"span",21),e.aS0(11,22),e.C$Y()(),e.c53(12,L,2,1,"th",27,C),e.wVc(14,"objectToArray"),e.C$Y()(),e.I0R(15,"tbody")(16,"tr",18)(17,"td",23),e.yuY(18,P,1,0,"ng-template",null,24,e.gJz),e.I0R(20,"span",21),e.aS0(21,25),e.C$Y()(),e.c53(22,G,3,4,"td",28,C),e.wVc(24,"objectToArray"),e.C$Y()()()()),2&n){const i=r.$implicit,o=e.Gew(9),l=e.Gew(19);e.yG2(3),e.cNF(i.turn.name),e.yG2(7),e.E7m("tuiHint",o),e.yG2(2),e.oho(e.kDX(14,3,i.summary)),e.yG2(8),e.E7m("tuiHint",l),e.yG2(2),e.oho(e.kDX(24,5,i.summary))}}function B(n,r){if(1&n&&(e.I0R(0,"div",14),e.c53(1,Y,25,7,"div",29,x),e.C$Y()),2&n){const i=e.GaO(2);e.yG2(),e.oho(i.groupedData())}}function D(n,r){if(1&n&&(e.yuY(0,y,3,1,"ng-template",null,1,e.gJz),e.I0R(2,"div",2)(3,"span",3),e.SAx(4),e.aS0(5,4),e.k70(),e.C$Y(),e.c53(6,f,4,3,null,null,C),e.I0R(8,"span",5)(9,"mat-icon",6),e.OEk(10,"import_contacts"),e.C$Y(),e.OEk(11),e.C$Y()(),e.yuY(12,I,2,1,"p",7)(13,B,3,0)),2&n){const i=e.Gew(1),o=e.GaO();e.yG2(6),e.oho(o.ungroupedData()),e.yG2(2),e.E7m("tuiHint",i),e.yG2(3),e.oRS(" ",o.totalPeople()," "),e.yG2(),e.C0Y(12,o.groupedError()?12:13)}}let w=(()=>{class n{constructor(){this.destroy$=(0,e.uUt)(d.UF),this.service=(0,e.uUt)(a.S),this.ungroupedData=(0,e.OCB)(null),this.totalPeople=(0,e.S6b)(()=>this.ungroupedData()?.reduce((i,[o,l])=>i+o*l,0)||0),this.groupedData=(0,e.OCB)(null),this.loadingGrouped=(0,e.OCB)(!1),this.loadingUngrouped=(0,e.OCB)(!1),this.parentLoading=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.loadingGrouped()||this.loadingUngrouped()||this.parentLoading()),this.groupedError=(0,e.OCB)(null),this.filters=null}set showLoader(i){this.parentLoading.set(i)}get showLoader(){return this.parentLoading()}ngOnChanges(){this.query()}query(){this.queryUngrouped(),this.queryGrouped()}queryUngrouped(){this.loadingUngrouped.set(!0);const i={};Object.keys(this.filters??{}).forEach(o=>{if(this.filters){const l=this.filters[o];l instanceof u.EK?i[o]=l.toString():l&&(i[o]=l)}}),this.service.ungroupedTablesSummary(i).pipe((0,p.a)(this.destroy$),(0,R.U)(()=>this.loadingUngrouped.set(!1))).subscribe({next:o=>{this.ungroupedData.set(Object.entries(o).map(([l,M])=>[Number(l),M]))}})}queryGrouped(){this.groupedError.set(null),this.groupedData.set(null);const i={};if(this.filters&&this.filters.date_from&&this.filters.date_from===this.filters.date_to)i.date=this.filters.date_from.toString();else{if(!(this.filters&&this.filters.date instanceof u.EK))return console.warn("invalid filters for grouped data",this.filters,JSON.stringify(this.filters)),void this.groupedError.set("Seleziona un unico giorno per vedere il riepilogo raggruppato per turno.");i.date=this.filters.date.toString()}this.loadingGrouped.set(!0),this.service.tablesSummary(i).pipe((0,p.a)(this.destroy$),(0,R.U)(()=>this.loadingGrouped.set(!1))).subscribe({next:o=>{this.groupedData.set(function T(n){const r=n.map(i=>Object.keys(i.summary).map(Number)).flat();return n.map(i=>function h(n,r){for(let o=1;o<=8;o++)o in n.summary||(n.summary[o]=0);for(const o of r)o in n.summary||(n.summary[o]=0);return n}(i,r))}(o))}})}static#e=this.\u0275fac=function(o){return new(o||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["app-reservation-tables-summary"]],inputs:{showLoader:"showLoader",filters:"filters"},standalone:!0,features:[e.M5G([d.UF]),e.SYr,e.UHJ],decls:2,vars:1,consts:()=>{let i,o,l,M,N,v;return i="Distribuzione tavoli",o="Totale persone",l="tavoli da",M=" persone",N="N\xB0 persone",v="Quantit\xE0:",[[3,"showLoader","size"],["totalHint",""],[1,"flex","items-center","justify-around","border","px-2","py-2","border-slate-200"],[1,"hidden","md:flex","items-center","justify-center"],i,[1,"flex","items-center",3,"tuiHint"],[1,"me-1"],["class","text-slate-500"],o,["dHint",""],[1,"me-1",3,"tuiHint"],l,M,[1,"text-slate-500"],[1,"flex","flex-wrap"],[1,"col-12","pe-2","mb-2","md:col-6"],[1,"font-xl"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__th"],["headerExplain",""],[3,"tuiHint"],N,[1,"tui-table__td"],["valueExplain",""],v,[3,"ngClass"],["class","tui-table__th"],["class","tui-table__td"],["class","col-12 pe-2 mb-2 md:col-6"]]},template:function(o,l){1&o&&e.yuY(0,m,1,2,"tui-loader",0)(1,D,14,3),2&o&&e.C0Y(0,l.loading()?0:1)},dependencies:[S.Sk,S.Cb,t.WY,t.lh,t.SL,t.i6,t.IT,_.oB,_.qL,b,c.QF],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04)}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.9rem}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__th[_ngcontent-%COMP%]{padding:.5rem;height:inherit}"],changeDetection:0})}return n})()},8128:(g,E,s)=>{function e(d){if(!d)return null;const u=d.match(/filename="(.+)"/);return u?u[1]:null}s.d(E,{k:()=>e})},9772:(g,E,s)=>{s.d(E,{CU:()=>d,ye:()=>u});const e=(new Date).getTimezoneOffset()/60;function d(a,p=e){return"string"==typeof a&&a.length>0&&a.match(/\d{1,2}:\d{1,2}/)?`${Number(a.split(":")[0])-p}:${a.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:a}),"")}function u(a,p=e){return d(a,-1*p)}},5180:(g,E,s)=>{s.d(E,{C:()=>R});var e=s(8400);class d extends e.w{constructor(t){super(t),this.image_pixel_id=t.image_pixel_id,this.event_data=t.event_data,this.event_time=t.event_time?new Date(t.event_time):void 0}}class u extends e.w{constructor(t){super(t),this.image_id=t.image_id,this.delivered_email_id=t.delivered_email_id,this.record_type=t.record_type,this.record_id=t.record_id,this.event_type=t.event_type,this.secret=t.secret,this.events=t.events?t.events.map(h=>new d(h)):[]}}class a extends e.w{constructor(t){super(t),this.record_id=t.record_id,this.record_type=t.record_type,this.text=t.text,this.html=t.html,this.subject=t.subject,this.headers=t.headers,this.raw=t.raw,this.image_pixels=t.image_pixels?t.image_pixels.map(h=>new u(h)):[]}}class p extends e.w{constructor(t){super(t),this.hpp_url=t.hpp_url,this.value=t.value,this.status=t.status,this.reservation_id=t.reservation_id,this.preorder_type=t.preorder_type,this.external_id=t.external_id,this.other=t.other}}class R extends e.w{constructor(t){super(t),this.fullname=t.fullname,this.datetime=t.datetime?new Date(t.datetime):void 0,this.status=t.status,this.secret=t.secret,this.adults=t.adults,this.children=t.children,this.table=t.table,this.notes=t.notes,this.email=t.email,this.phone=t.phone,this.payment=t.payment?new p(t.payment):void 0,this.delivered_emails=t.delivered_emails?t.delivered_emails.map(h=>new a(h)):[]}}},8304:(g,E,s)=>{s.d(E,{S:()=>h});var e=s(6012),d=s(5180),u=s(4704),a=s(3252),p=s(9144),R=s(7048),S=s(8128),t=s(4496);let h=(()=>{class T extends e.s{constructor(){super(d.C,"admin/reservations")}updateStatus(_,c){return this.patch(`${_}/status/${c}`,{}).pipe((0,u.k)(m=>this.mapItem(m)))}tablesSummary(_={}){return this.get("tables_summary",{params:_})}ungroupedTablesSummary(_={}){return this.get("ungrouped_tables_summary",{params:_})}deliverConfirmationEmail(_){return this.post(`${_}/deliver_confirmation_email`,{}).pipe((0,u.k)(c=>this.mapItem(c)))}refoundPayment(_){return this.post(`${_}/refund_payment`,{}).pipe((0,u.k)(c=>this.mapItem(c)))}refreshPaymentStatus(_){return this.post(`${_}/refresh_payment_status`,{}).pipe((0,u.k)(c=>this.mapItem(c)))}export(_){return new a._(c=>{this.get("export",{responseType:"blob",observe:"response",params:_}).pipe((0,p.a)(m=>(console.error("ReservationsService.export() error:",m),c.error(m),new a._))).subscribe(m=>{if(m instanceof R.WA&&m.body){const C=(0,S.k)(m.headers?.get("Content-Disposition"))??"Prenotazioni.xlsx",y=m.headers?.get("Content-Type")??"application/octet-stream",A=window.URL.createObjectURL(new Blob([m.body],{type:y})),f=document.createElement("a");f.href=A,f.download=C,f.click(),c.complete()}})})}static#e=this.\u0275fac=function(c){return new(c||T)};static#t=this.\u0275prov=t.wxM({token:T,factory:T.\u0275fac,providedIn:"root"})}return T})()}}]);