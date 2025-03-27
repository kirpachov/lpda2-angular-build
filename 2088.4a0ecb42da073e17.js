"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2088],{9740:(f,d,o)=>{o.r(d),o.d(d,{ExportReservationsModalModule:()=>K});var E=o(1236),R=o(7552),e=o(4496),n=o(6504),r=o(1368),_=o(400);let O=(()=>{class i{constructor(){this.datePipe=(0,e.uUt)(r.y)}transform(s,a){return s instanceof _.Se?`Dal ${this.datePipe.transform(s.from.toUtcNativeDate(),a)} al ${this.datePipe.transform(s.to.toUtcNativeDate(),a)}`:null}static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275pipe=e.UTH({name:"datePeriodSummary",type:i,pure:!0,standalone:!0})}return i})();var p=o(3480),t=o(3984),m=o(3460),I=o(3616);function u(i,w){if(1&i&&e.OEk(0),2&i){const s=e.GaO();e.oRS(" ",s.label," ")}}function c(i,w){if(1&i&&(e.I0R(0,"small",3),e.OEk(1),e.wVc(2,"datePeriodSummary"),e.C$Y()),2&i){const s=e.GaO();e.yG2(),e.cNF(e.kDX(2,1,s.control.value))}}const S=["*"];let h=(()=>{class i{constructor(){this.destroy$=(0,e.y_5)(p.UF),this.control=new n.Ku(null),this.today=_.EK.currentLocal(),this.tomorrow=_.EK.currentLocal().append({day:1}),this.max=null,this.appProductionDate=_.EK.fromLocalNativeDate(new Date("2023-8-1")),this.endOfCurrentYear=_.EK.fromLocalNativeDate(new Date(`${this.today.year}-12-31`)),this.periodOptions=[new t.Ib(new _.Se(this.today.append({day:-30}),this.today),"Ultimo mese"),new t.Ib(new _.Se(this.today.append({day:-365}),this.today),"Ultimo anno"),...Array.from({length:5},(s,a)=>a).map(s=>this.today.year-s).filter(s=>s>=this.appProductionDate.year).map(s=>new t.Ib(new _.Se(_.EK.fromLocalNativeDate(new Date(`${s}-01-01`)),_.EK.fromLocalNativeDate(new Date(`${s}-12-31`))),`${s}`))],this.label="Seleziona il periodo temporale"}writeValue(s){if(void 0===s&&(s=null),null===s||s instanceof _.Se)return this.control.setValue(s);console.warn("Invalid value for DatePeriodComponent",s)}registerOnChange(s){this.control.valueChanges.pipe((0,I.a)(this.destroy$)).subscribe((...a)=>s(...a))}registerOnTouched(s){this.control.valueChanges.pipe((0,I.a)(this.destroy$)).subscribe((...a)=>s(...a))}setDisabledState(s){s?this.control.disable():this.control.enable()}static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275cmp=e.In1({type:i,selectors:[["app-date-period"]],inputs:{max:"max",label:"label"},standalone:!0,features:[e.M5G([{provide:n.Y6,useExisting:(0,e.wd)(()=>i),multi:!0},p.UF]),e.UHJ],ngContentSelectors:S,decls:6,vars:6,consts:[[3,"min","max","formControl","items"],["content",""],["class","d-block text-muted"],[1,"d-block","text-muted"]],template:function(a,l){if(1&a&&(e.kPM(),e.I0R(0,"tui-input-date-range",0)(1,"span",null,1),e._Xx(3),e.C$Y(),e.yuY(4,u,1,1),e.C$Y(),e.yuY(5,c,3,3,"small",2)),2&a){const P=e.Gew(2);e.E7m("min",l.appProductionDate)("max",l.max)("formControl",l.control)("items",l.periodOptions),e.yG2(4),e.C0Y(4,P.children.length?-1:4),e.yG2(),e.C0Y(5,null!=l.control.value&&l.control.value.from&&null!=l.control.value&&l.control.value.to?5:-1)}},dependencies:[m.uy,m.YZ,m.Ku,n.sl,n.ue,n.ug,O],encapsulation:2})}return i})();var A=o(1183),M=o(8212),T=o(8048),g=o(9956),y=o(8304),v=o(8824),D=o(3264),U=o(1128),x=o(8256),G=o(8392),C=o(3797);let b=(()=>{class i{constructor(){this.service=(0,e.uUt)(y.S),this.destroy$=(0,e.uUt)(p.UF),this.date=(0,e.uUt)(r.y),this.notifications=(0,e.uUt)(U.E),this.loading=(0,e.OCB)(!1),this.form=new n.WC({created_at:new n.Ku(null),datetime:new n.Ku(null),status:new n.Ku(null),query:new n.Ku(null)})}export(){this.loading.set(!0),this.service.export(this.formatFormValue()).pipe((0,I.a)(this.destroy$),(0,v.U)(()=>this.loading.set(!1))).subscribe({error:s=>{this.notifications.error((0,x.mk)(s)||G.a)}})}formatFormValue(){const s={};return this.form.value.query&&(s.query=this.form.value.query),this.form.value.created_at&&(s.created_at_from=this.date.transform(this.form.value.created_at.from.toUtcNativeDate(),"yyyy-MM-dd")||"",s.created_at_to=this.date.transform(this.form.value.created_at.to.toUtcNativeDate(),"yyyy-MM-dd")||""),this.form.value.datetime&&(s.datetime_from=this.date.transform(this.form.value.datetime.from.toUtcNativeDate(),"yyyy-MM-dd")||"",s.datetime_to=this.date.transform(this.form.value.datetime.to.toUtcNativeDate(),"yyyy-MM-dd")||""),this.form.value.status&&(0,A.sl)(this.form.value.status)&&(s.status=this.form.value.status),s}static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275cmp=e.In1({type:i,selectors:[["app-export-reservations-modal"]],standalone:!0,features:[e.M5G([p.UF]),e.UHJ],decls:32,vars:12,consts:()=>{let s,a,l,P,L,$,V,X;return s="Esporta prenotazioni",a="Ricerca",l="Stato prenotazione",P="Data di creazione prenotazione",L="Data di prenotazione prenotazione",$="(data in cui le persone vengono a mangiare)",V="Scarica excel",X="Annulla",[s,[3,"formGroup","ngSubmit"],[1,"block","mb-3"],[3,"formControlName"],a,[3,"errors"],l,P,L,[1,"text-slate-400"],$,[1,"flex","items-center","justify-center"],["type","submit","tuiButton","","appearance","primary",1,"me-2",3,"disabled","showLoader"],V,["type","button","routerLink","..","tuiButton","","appearance","icon",3,"disabled"],X]},template:function(a,l){1&a&&(e.I0R(0,"h1"),e.aS0(1,0),e.C$Y(),e.I0R(2,"form",1),e.qCj("ngSubmit",function(){return l.export()}),e.I0R(3,"div",2)(4,"tui-input",3),e.SAx(5),e.aS0(6,4),e.k70(),e.C$Y(),e.wR5(7,"app-errors",5),e.C$Y(),e.I0R(8,"div",2)(9,"app-reservation-status-select",3),e.SAx(10),e.aS0(11,6),e.k70(),e.C$Y(),e.wR5(12,"app-errors",5),e.C$Y(),e.I0R(13,"div",2)(14,"app-date-period",3)(15,"span"),e.aS0(16,7),e.C$Y()(),e.wR5(17,"app-errors",5),e.C$Y(),e.I0R(18,"div",2)(19,"app-date-period",3)(20,"span"),e.aS0(21,8),e.C$Y()(),e.I0R(22,"span",9),e.aS0(23,10),e.C$Y(),e.wR5(24,"app-errors",5),e.C$Y(),e.I0R(25,"div",11)(26,"button",12),e.SAx(27),e.aS0(28,13),e.k70(),e.C$Y(),e.I0R(29,"button",14),e.SAx(30),e.aS0(31,15),e.k70(),e.C$Y()()()),2&a&&(e.yG2(2),e.E7m("formGroup",l.form),e.yG2(2),e.E7m("formControlName","query"),e.yG2(3),e.E7m("errors",l.form.controls.query.errors),e.yG2(2),e.E7m("formControlName","status"),e.yG2(3),e.E7m("errors",l.form.controls.status.errors),e.yG2(2),e.E7m("formControlName","created_at"),e.yG2(3),e.E7m("errors",l.form.controls.created_at.errors),e.yG2(2),e.E7m("formControlName","datetime"),e.yG2(5),e.E7m("errors",l.form.controls.datetime.errors),e.yG2(2),e.E7m("disabled",l.form.disabled)("showLoader",l.loading()),e.yG2(3),e.E7m("disabled",l.form.disabled||l.loading()))},dependencies:[h,n.sl,n.sz,n.ue,n.u,n.uW,n.Wo,M.CI,M.Kw,g.g,D.Y,E.qQ,E.ER,C.CQ,C.Oo,C.cP,T.aS],encapsulation:2})}return i})(),K=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#t=this.\u0275mod=e.a4G({type:i});static#o=this.\u0275inj=e.s3X({imports:[E.qQ.forChild([(0,R.VV)(b,{path:"",closeable:!0,dismissible:!0,size:"m"})])]})}return i})()},8128:(f,d,o)=>{function E(R){if(!R)return null;const e=R.match(/filename="(.+)"/);return e?e[1]:null}o.d(d,{k:()=>E})},2264:(f,d,o)=>{o.d(d,{W:()=>R});var E=o(8400);class R extends E.w{constructor(n){super(n),this.filename=n.filename,this.status=n.status,this.key=n.key,this.original_id=n.original_id,this.tag=n.tag,this.url=n.url}}},5180:(f,d,o)=>{o.d(d,{C:()=>O});var E=o(8400);class R extends E.w{constructor(t){super(t),this.image_pixel_id=t.image_pixel_id,this.event_data=t.event_data,this.event_time=t.event_time?new Date(t.event_time):void 0}}class e extends E.w{constructor(t){super(t),this.image_id=t.image_id,this.delivered_email_id=t.delivered_email_id,this.record_type=t.record_type,this.record_id=t.record_id,this.event_type=t.event_type,this.secret=t.secret,this.events=t.events?t.events.map(m=>new R(m)):[]}}class n extends E.w{constructor(t){super(t),this.record_id=t.record_id,this.record_type=t.record_type,this.text=t.text,this.html=t.html,this.subject=t.subject,this.headers=t.headers,this.raw=t.raw,this.image_pixels=t.image_pixels?t.image_pixels.map(m=>new e(m)):[]}}class r extends E.w{constructor(t){super(t),this.hpp_url=t.hpp_url,this.value=t.value,this.status=t.status,this.reservation_id=t.reservation_id,this.preorder_type=t.preorder_type,this.external_id=t.external_id,this.other=t.other}}var _=o(9064);class O extends E.w{constructor(t){super(t),this.fullname=t.fullname,this.datetime=t.datetime?new Date(t.datetime):void 0,this.status=t.status,this.secret=t.secret,this.adults=t.adults,this.children=t.children,this.table=t.table,this.notes=t.notes,this.email=t.email,this.phone=t.phone,this.payment=t.payment?new r(t.payment):void 0,this.delivered_emails=t.delivered_emails?t.delivered_emails.map(m=>new n(m)):[],this.table_type_id=t.table_type_id,this.table_type=t.table_type?new _.g(t.table_type):void 0}}},9064:(f,d,o)=>{o.d(d,{g:()=>e});var E=o(8400),R=o(2264);class e extends E.w{constructor(r){super(r),this.name=r.name,this.description=r.description,this.default_people_per_turn=r.default_people_per_turn,this.default_price=r.default_price,this.notes=r.notes,this.status=r.status,this.translations=r.translations,this.images=r.images?r.images.map(_=>new R.W(_)):[]}}},8304:(f,d,o)=>{o.d(d,{S:()=>t});var E=o(6012),R=o(5180),e=o(4704),n=o(3252),r=o(9144),_=o(7048),O=o(8128),p=o(4496);let t=(()=>{class m extends E.s{constructor(){super(R.C,"admin/reservations")}updateStatus(u,c){return this.patch(`${u}/status/${c}`,{}).pipe((0,e.k)(S=>this.mapItem(S)))}tablesSummary(u={}){return this.get("tables_summary",{params:u})}ungroupedTablesSummary(u={}){return this.get("ungrouped_tables_summary",{params:u})}deliverConfirmationEmail(u){return this.post(`${u}/deliver_confirmation_email`,{}).pipe((0,e.k)(c=>this.mapItem(c)))}refoundPayment(u){return this.post(`${u}/refund_payment`,{}).pipe((0,e.k)(c=>this.mapItem(c)))}refreshPaymentStatus(u){return this.post(`${u}/refresh_payment_status`,{}).pipe((0,e.k)(c=>this.mapItem(c)))}export(u){return new n._(c=>{this.get("export",{responseType:"blob",observe:"response",params:u}).pipe((0,r.a)(S=>(console.error("ReservationsService.export() error:",S),c.error(S),new n._))).subscribe(S=>{if(S instanceof _.WA&&S.body){const h=(0,O.k)(S.headers?.get("Content-Disposition"))??"Prenotazioni.xlsx",A=S.headers?.get("Content-Type")??"application/octet-stream",M=window.URL.createObjectURL(new Blob([S.body],{type:A})),T=document.createElement("a");T.href=M,T.download=h,T.click(),c.complete()}})})}static#e=this.\u0275fac=function(c){return new(c||m)};static#t=this.\u0275prov=p.wxM({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})()},3984:(f,d,o)=>{o.d(d,{AF:()=>e,Ib:()=>E});class E{constructor(r,_,O){this.range=r,this.name=_,this.content=O}toString(){return this.name}}class e{constructor(r,_){this.item=r,this.stringify=_}toString(){return this.stringify(this.item)}}},812:(f,d,o)=>{o.d(d,{m2:()=>u,mU:()=>p,qS:()=>n,w3:()=>c}),o(4392);var R=o(2528);o(3840);const n={DMY:"dd/mm/yyyy",MDY:"mm/dd/yyyy",YMD:"yyyy/mm/dd"},p=/\([#]+\)|[#\- ]/g,u=(h,A,M,T)=>{if(!A?.isSingleDay||!M)return h;const g=(0,R.Kw)(Object.entries(M).map(([v,D])=>[v,-D])),y=A.from.append(T?g:M).append({day:T?1:-1});return T?y.dayBefore(h)?h:y:h&&y.dayAfter(h)?h:y},c={HH:23,MM:59,SS:59,MS:999}}}]);