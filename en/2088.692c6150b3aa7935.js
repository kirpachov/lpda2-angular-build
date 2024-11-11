"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2088],{9740:(y,u,n)=>{n.r(u),n.d(u,{ExportReservationsModalModule:()=>x});var _=n(2992),m=n(7552),e=n(4496),i=n(6504),E=n(1368),l=n(400);let d=(()=>{class s{constructor(){this.datePipe=(0,e.uUt)(E.y)}transform(o,r){return o instanceof l.Se?`Dal ${this.datePipe.transform(o.from.toUtcNativeDate(),r)} al ${this.datePipe.transform(o.to.toUtcNativeDate(),r)}`:null}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275pipe=e.UTH({name:"datePeriodSummary",type:s,pure:!0,standalone:!0})}return s})();var t=n(3480),c=n(3984),S=n(424),v=n(3616);function p(s,G){if(1&s&&e.OEk(0),2&s){const o=e.GaO();e.oRS(" ",o.label," ")}}function O(s,G){if(1&s&&(e.I0R(0,"small",3),e.OEk(1),e.wVc(2,"datePeriodSummary"),e.C$Y()),2&s){const o=e.GaO();e.yG2(),e.cNF(e.kDX(2,1,o.control.value))}}const R=["*"];let T=(()=>{class s{constructor(){this.destroy$=new t.UF,this.control=new i.Ku(null),this.today=l.EK.currentLocal(),this.tomorrow=l.EK.currentLocal().append({day:1}),this.max=null,this.appProductionDate=l.EK.fromLocalNativeDate(new Date("2023-8-1")),this.endOfCurrentYear=l.EK.fromLocalNativeDate(new Date(`${this.today.year}-12-31`)),this.periodOptions=[new c.Ib(new l.Se(this.today.append({day:-30}),this.today),"Last month"),new c.Ib(new l.Se(this.today.append({day:-365}),this.today),"Last year"),...Array.from({length:5},(o,r)=>r).map(o=>this.today.year-o).filter(o=>o>=this.appProductionDate.year).map(o=>new c.Ib(new l.Se(l.EK.fromLocalNativeDate(new Date(`${o}-01-01`)),l.EK.fromLocalNativeDate(new Date(`${o}-12-31`))),`${o}`))],this.label="Select the time period."}writeValue(o){if(void 0===o&&(o=null),null===o||o instanceof l.Se)return this.control.setValue(o);console.warn("Invalid value for DatePeriodComponent",o)}registerOnChange(o){this.control.valueChanges.pipe((0,v.a)(this.destroy$)).subscribe((...r)=>o(...r))}registerOnTouched(o){this.control.valueChanges.pipe((0,v.a)(this.destroy$)).subscribe((...r)=>o(...r))}setDisabledState(o){o?this.control.disable():this.control.enable()}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-date-period"]],inputs:{max:"max",label:"label"},standalone:!0,features:[e.M5G([{provide:i.Y6,useExisting:(0,e.wd)(()=>s),multi:!0},t.UF]),e.UHJ],ngContentSelectors:R,decls:6,vars:6,consts:[[3,"min","max","formControl","items"],["content",""],["class","d-block text-muted"],[1,"d-block","text-muted"]],template:function(r,a){if(1&r&&(e.kPM(),e.I0R(0,"tui-input-date-range",0)(1,"span",null,1),e._Xx(3),e.C$Y(),e.yuY(4,p,1,1),e.C$Y(),e.yuY(5,O,3,3,"small",2)),2&r){const P=e.Gew(2);e.E7m("min",a.appProductionDate)("max",a.max)("formControl",a.control)("items",a.periodOptions),e.yG2(4),e.C0Y(4,P.children.length?-1:4),e.yG2(),e.C0Y(5,null!=a.control.value&&a.control.value.from&&null!=a.control.value&&a.control.value.to?5:-1)}},dependencies:[S.uy,S.YZ,S.Ku,i.sl,i.ue,i.ug,d],encapsulation:2})}return s})();var h=n(1183),M=n(8212),A=n(9956),I=n(8304),f=n(8824),g=n(3264),D=n(1128),V=n(8256),X=n(8392);let U=(()=>{class s{constructor(){this.service=(0,e.uUt)(I.S),this.destroy$=(0,e.uUt)(t.UF),this.date=(0,e.uUt)(E.y),this.notifications=(0,e.uUt)(D.E),this.loading=(0,e.OCB)(!1),this.form=new i.WC({created_at:new i.Ku(null),datetime:new i.Ku(null),status:new i.Ku(null)})}export(){this.loading.set(!0),this.service.export(this.formatFormValue()).pipe((0,v.a)(this.destroy$),(0,f.U)(()=>this.loading.set(!1))).subscribe({error:o=>{this.notifications.error((0,V.mk)(o)||X.a)}})}formatFormValue(){const o={};return this.form.value.created_at&&(o.created_at_from=this.date.transform(this.form.value.created_at.from.toUtcNativeDate(),"yyyy-MM-dd")||"",o.created_at_to=this.date.transform(this.form.value.created_at.to.toUtcNativeDate(),"yyyy-MM-dd")||""),this.form.value.datetime&&(o.datetime_from=this.date.transform(this.form.value.datetime.from.toUtcNativeDate(),"yyyy-MM-dd")||"",o.datetime_to=this.date.transform(this.form.value.datetime.to.toUtcNativeDate(),"yyyy-MM-dd")||""),this.form.value.status&&(0,h.s)(this.form.value.status)&&(o.status=this.form.value.status),o}static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275cmp=e.In1({type:s,selectors:[["app-export-reservations-modal"]],standalone:!0,features:[e.M5G([t.UF]),e.UHJ],decls:27,vars:10,consts:()=>{let o,r,a,P,C,L,$;return o="Export reservations",r="Booking status",a="Booking creation date",P="Booking date",C="(date when people come to eat)",L="Download Excel",$="Cancel",[o,[3,"formGroup","ngSubmit"],[1,"block","mb-3"],[3,"formControlName"],r,[3,"errors"],a,P,[1,"text-slate-400"],C,[1,"flex","items-center","justify-center"],["type","submit","tuiButton","","appearance","primary",1,"me-2",3,"disabled","showLoader"],L,["type","button","routerLink","..","tuiButton","","appearance","icon",3,"disabled"],$]},template:function(r,a){1&r&&(e.I0R(0,"h1"),e.aS0(1,0),e.C$Y(),e.I0R(2,"form",1),e.qCj("ngSubmit",function(){return a.export()}),e.I0R(3,"div",2)(4,"app-reservation-status-select",3),e.SAx(5),e.aS0(6,4),e.k70(),e.C$Y(),e.wR5(7,"app-errors",5),e.C$Y(),e.I0R(8,"div",2)(9,"app-date-period",3)(10,"span"),e.aS0(11,6),e.C$Y()(),e.wR5(12,"app-errors",5),e.C$Y(),e.I0R(13,"div",2)(14,"app-date-period",3)(15,"span"),e.aS0(16,7),e.C$Y()(),e.I0R(17,"span",8),e.aS0(18,9),e.C$Y(),e.wR5(19,"app-errors",5),e.C$Y(),e.I0R(20,"div",10)(21,"button",11),e.SAx(22),e.aS0(23,12),e.k70(),e.C$Y(),e.I0R(24,"button",13),e.SAx(25),e.aS0(26,14),e.k70(),e.C$Y()()()),2&r&&(e.yG2(2),e.E7m("formGroup",a.form),e.yG2(2),e.E7m("formControlName","status"),e.yG2(3),e.E7m("errors",a.form.controls.status.errors),e.yG2(2),e.E7m("formControlName","created_at"),e.yG2(3),e.E7m("errors",a.form.controls.created_at.errors),e.yG2(2),e.E7m("formControlName","datetime"),e.yG2(5),e.E7m("errors",a.form.controls.datetime.errors),e.yG2(2),e.E7m("disabled",a.form.disabled)("showLoader",a.loading()),e.yG2(3),e.E7m("disabled",a.form.disabled||a.loading()))},dependencies:[T,i.sl,i.sz,i.ue,i.u,i.uW,i.Wo,M.CI,M.Kw,A.g,g.Y,_.qQ,_.ER],encapsulation:2})}return s})(),x=(()=>{class s{static#e=this.\u0275fac=function(r){return new(r||s)};static#t=this.\u0275mod=e.a4G({type:s});static#o=this.\u0275inj=e.s3X({imports:[_.qQ.forChild([(0,m.VV)(U,{path:"",closeable:!0,dismissible:!0,size:"m"})])]})}return s})()},8128:(y,u,n)=>{function _(m){if(!m)return null;const e=m.match(/filename="(.+)"/);return e?e[1]:null}n.d(u,{k:()=>_})},5180:(y,u,n)=>{n.d(u,{C:()=>l});var _=n(8400);class m extends _.w{constructor(t){super(t),this.image_pixel_id=t.image_pixel_id,this.event_data=t.event_data,this.event_time=t.event_time?new Date(t.event_time):void 0}}class e extends _.w{constructor(t){super(t),this.image_id=t.image_id,this.delivered_email_id=t.delivered_email_id,this.record_type=t.record_type,this.record_id=t.record_id,this.event_type=t.event_type,this.secret=t.secret,this.events=t.events?t.events.map(c=>new m(c)):[]}}class i extends _.w{constructor(t){super(t),this.record_id=t.record_id,this.record_type=t.record_type,this.text=t.text,this.html=t.html,this.subject=t.subject,this.headers=t.headers,this.raw=t.raw,this.image_pixels=t.image_pixels?t.image_pixels.map(c=>new e(c)):[]}}class E extends _.w{constructor(t){super(t),this.hpp_url=t.hpp_url,this.value=t.value,this.status=t.status,this.reservation_id=t.reservation_id,this.preorder_type=t.preorder_type,this.other=t.other}}class l extends _.w{constructor(t){super(t),this.fullname=t.fullname,this.datetime=t.datetime?new Date(t.datetime):void 0,this.status=t.status,this.secret=t.secret,this.adults=t.adults,this.children=t.children,this.table=t.table,this.notes=t.notes,this.email=t.email,this.phone=t.phone,this.payment=t.payment?new E(t.payment):void 0,this.delivered_emails=t.delivered_emails?t.delivered_emails.map(c=>new i(c)):[]}}},8304:(y,u,n)=>{n.d(u,{S:()=>c});var _=n(6012),m=n(5180),e=n(4704),i=n(3252),E=n(9144),l=n(7048),d=n(8128),t=n(4496);let c=(()=>{class S extends _.s{constructor(){super(m.C,"admin/reservations")}tablesSummary(p={}){return this.get("tables_summary",{params:p})}deliverConfirmationEmail(p){return this.post(`${p}/deliver_confirmation_email`,{}).pipe((0,e.k)(O=>this.mapItem(O)))}export(p){return new i._(O=>{this.get("export",{responseType:"blob",observe:"response",params:p}).pipe((0,E.a)(R=>(console.error("ReservationsService.export() error:",R),O.error(R),new i._))).subscribe(R=>{if(R instanceof l.WA&&R.body){const T=(0,d.k)(R.headers?.get("Content-Disposition"))??"Prenotazioni.xlsx",h=R.headers?.get("Content-Type")??"application/octet-stream",M=window.URL.createObjectURL(new Blob([R.body],{type:h})),A=document.createElement("a");A.href=M,A.download=T,A.click(),O.complete()}})})}static#e=this.\u0275fac=function(O){return new(O||S)};static#t=this.\u0275prov=t.wxM({token:S,factory:S.\u0275fac,providedIn:"root"})}return S})()},3984:(y,u,n)=>{n.d(u,{AF:()=>e,Ib:()=>_});class _{constructor(E,l,d){this.range=E,this.name=l,this.content=d}toString(){return this.name}}class e{constructor(E,l){this.item=E,this.stringify=l}toString(){return this.stringify(this.item)}}},812:(y,u,n)=>{n.d(u,{m2:()=>p,mU:()=>t,qS:()=>i,w3:()=>O}),n(4392);var m=n(2528);n(3840);const i={DMY:"dd/mm/yyyy",MDY:"mm/dd/yyyy",YMD:"yyyy/mm/dd"},t=/\([#]+\)|[#\- ]/g,p=(T,h,M,A)=>{if(!h?.isSingleDay||!M)return T;const I=(0,m.Kw)(Object.entries(M).map(([g,D])=>[g,-D])),f=h.from.append(A?I:M).append({day:A?1:-1});return A?f.dayBefore(T)?T:f:T&&f.dayAfter(T)?T:f},O={HH:23,MM:59,SS:59,MS:999}}}]);