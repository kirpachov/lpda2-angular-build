"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9592],{6964:(v,C,t)=>{t.d(C,{u:()=>c});var e=t(4496),O=t(3480),s=t(8304),l=t(3616),m=t(8824),o=t(7692),u=t(5656),n=t(1560);function d(M,h){if(1&M&&e.wR5(0,"tui-loader",0),2&M){const R=e.GaO();e.E7m("showLoader",R.showLoader)("size","s")}}const E=(M,h)=>h[0];function p(M,h){if(1&M&&(e.SAx(0),e.aS0(1,7),e.k70(),e.OEk(2)),2&M){const R=e.GaO(2);e.yG2(2),e.oRS(" ",R.totalPeople(),"\n")}}function r(M,h){if(1&M&&(e.OEk(0),e.SAx(1),e.aS0(2,10),e.k70(),e.OEk(3),e.SAx(4),e.aS0(5,11),e.k70()),2&M){const R=e.GaO().$implicit;e.oRS(" ",R[1]," "),e.yG2(3),e.oRS(" ",R[0]," ")}}function S(M,h){if(1&M&&(e.yuY(0,r,6,2,"ng-template",null,8,e.gJz),e.I0R(2,"span",9),e.OEk(3),e.C$Y()),2&M){const R=h.$implicit,T=e.Gew(1);e.yG2(2),e.E7m("tuiHint",T),e.yG2(),e.CAO(" ",R[1]," x ",R[0]," ")}}function _(M,h){if(1&M&&(e.yuY(0,p,3,1,"ng-template",null,1,e.gJz),e.I0R(2,"div",2)(3,"span",3),e.SAx(4),e.aS0(5,4),e.k70(),e.C$Y(),e.c53(6,S,4,3,null,null,E),e.I0R(8,"span",5)(9,"mat-icon",6),e.OEk(10,"import_contacts"),e.C$Y(),e.OEk(11),e.C$Y()()),2&M){const R=e.Gew(1),T=e.GaO();e.yG2(6),e.oho(T.data()),e.yG2(2),e.E7m("tuiHint",R),e.yG2(3),e.oRS(" ",T.totalPeople()," ")}}let c=(()=>{class M{constructor(){this.destroy$=(0,e.uUt)(O.UF),this.service=(0,e.uUt)(s.S),this.data=(0,e.OCB)(null),this.totalPeople=(0,e.S6b)(()=>this.data()?.reduce((R,[T,g])=>R+T*g,0)||0),this.loading=(0,e.OCB)(!1),this.showLoader=!0,this.filters=null}ngOnChanges(){this.query()}query(){this.loading.set(!0),this.service.ungroupedTablesSummary(this.filters??{}).pipe((0,l.a)(this.destroy$),(0,m.U)(()=>this.loading.set(!1))).subscribe({next:R=>{this.data.set(Object.entries(R).map(([T,g])=>[Number(T),g]))}})}static#e=this.\u0275fac=function(T){return new(T||M)};static#t=this.\u0275cmp=e.In1({type:M,selectors:[["app-reservation-tables-summary"]],inputs:{showLoader:"showLoader",filters:"filters"},standalone:!0,features:[e.M5G([O.UF]),e.SYr,e.UHJ],decls:2,vars:1,consts:()=>{let R,T,g,L;return R="Table distribution",T="Total people",g="tables from",L="people",[[3,"showLoader","size"],["totalHint",""],[1,"flex","items-center","justify-around","border","px-2","py-2","border-slate-200"],[1,"hidden","md:flex","items-center","justify-center"],R,[1,"flex","items-center",3,"tuiHint"],[1,"me-1"],T,["dHint",""],[1,"me-1",3,"tuiHint"],g,L]},template:function(T,g){1&T&&e.yuY(0,d,1,2,"tui-loader",0)(1,_,12,2),2&T&&e.C0Y(0,g.loading()?0:1)},dependencies:[o.Sk,o.Cb,u.WY,u.lh,u.SL,u.i6,u.IT,n.oB,n.qL],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04)}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.9rem}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__th[_ngcontent-%COMP%]{padding:.5rem;height:inherit}"],changeDetection:0})}return M})()},2208:(v,C,t)=>{t.d(C,{G:()=>F});var e=t(4496),O=t(9956),s=t(6504),l=t(8212),m=t(8048),o=t(5193),u=t(3797),n=t(9888),d=t(3320),E=t(6380),p=t(2740),r=t(400),S=t(3480),_=t(4680),c=t(5e3),M=t(8304),h=t(3616),R=t(6684),T=t(9212),g=t(7368),L=t(8824),$=t(1343),G=t(1560),A=t(1368),y=t(9772),I=t(964),f=t(6964),U=t(4820),V=t(7936);const K=(P,z)=>({date:P,time:z});function x(P,z){if(1&P&&(e.I0R(0,"app-reservation-tables-summary",26)(1,"p"),e.OEk(2,"Situazione tavoli per l'orario selezionato:"),e.C$Y()()),2&P){const i=e.GaO();let N;e.E7m("filters",e.IBC(1,K,i.form.value.date,null!==(N=i.utcTime())&&void 0!==N?N:""))}}function W(P,z){if(1&P){const i=e.KQA();e.I0R(0,"button",27),e.qCj("click",function(){e.usT(i);const a=e.GaO();return a.dateOpen.set(!0),e.CGJ(a.timeOpen.set(!1))}),e.I0R(1,"span",3)(2,"span",28),e.aS0(3,29),e.C$Y(),e.I0R(4,"mat-icon"),e.OEk(5,"calendar_today"),e.C$Y()()()}}let F=(()=>{class P{set item(i){i?this.form.patchValue({date:i.datetime?new r.EK(i.datetime?.getFullYear(),i.datetime?.getMonth(),i.datetime?.getDate()):null,time:i.datetime?new r.uc(i.datetime?.getHours(),i.datetime?.getMinutes()):null,fullname:i.fullname,adults:i.adults,children:i.children,email:i.email,table:i.table,notes:i.notes,phone:i.phone}):this.form.reset()}constructor(i){this.isMobile=i,this.reservationsService=(0,e.uUt)(M.S),this.publicRes=(0,e.uUt)(U.G),this.destroy$=(0,e.uUt)(S.UF),this.datePipe=(0,e.uUt)(A.y),this.formSubmit=new e._w7,this.cancelled=new e._w7,this.validTimes=(0,e.OCB)([]),this.utcTime=(0,e.OCB)(null),this.today=r.EK.currentLocal(),this.inputSize="l",this.form=new s.WC({date:new s.Ku(null,[s.AQ.required]),time:new s.Ku(null,[s.AQ.required]),fullname:new s.Ku(null,[s.AQ.required]),adults:new s.Ku(null,[s.AQ.required,s.AQ.min(0)]),children:new s.Ku(0,[s.AQ.required,s.AQ.min(0)]),email:new s.Ku(null,[s.AQ.email]),table:new s.Ku(null),notes:new s.Ku(null),phone:new s.Ku(null)}),this.loading=!1,this.dateOpen=(0,e.OCB)(!1),this.timeOpen=(0,e.OCB)(!1),this.loadingTimes=(0,e.OCB)(!1),this.submitted=!1,this.e=this.errorsFor}ngOnInit(){this.dateOpen.set(!0),this.timeOpen.set(!1),this.form.get("date").valueChanges.pipe((0,h.a)(this.destroy$),(0,R.I)(i=>i instanceof r.EK),(0,T.y)(()=>this.dateOpen.set(!1)),(0,T.y)(()=>this.timeOpen.set(!0)),(0,T.y)(()=>this.loadingTimes.set(!0)),(0,g.G)(i=>this.publicRes.getValidTimes(i)),(0,L.U)(()=>this.loadingTimes.set(!1))).subscribe({next:i=>{const N=i.map(a=>a.valid_times).filter(a=>Array.isArray(a)&&a.length>0).flat();this.validTimes.set(N.map(a=>r.uc.fromString((0,y.CU)(a))))}}),this.form.get("time").valueChanges.pipe((0,h.a)(this.destroy$),(0,T.y)(()=>this.timeOpen.set(!1)),(0,T.y)(i=>this.utcTime.set(i?(0,y.ye)(i.toString("HH:MM")):null))).subscribe((0,$.I)())}submit(){this.submitted=!0,!this.form.invalid&&this.formSubmit.emit(this.formVal())}formVal(){const i=this.form.value;return i.datetime=(0,I.Qx)(i.date,i.time),delete i.date,delete i.time,i.table&&i.table.length>0||delete i.table,i.notes&&i.notes.length>0||delete i.notes,i.email&&i.email.length>0||delete i.notes,i}errorsFor(i){const N=this.form.get(i);return N&&(N.dirty||N.touched||this.submitted)?N.errors:null}cancel(){this.cancelled.emit()}static#e=this.\u0275fac=function(N){return new(N||P)(e.GI1(_.Mv))};static#t=this.\u0275cmp=e.In1({type:P,selectors:[["app-admin-reservation-form"]],inputs:{item:"item",loading:"loading"},outputs:{formSubmit:"formSubmit",cancelled:"cancelled"},standalone:!0,features:[e.M5G([S.UF,A.y]),e.UHJ],decls:59,vars:41,consts:()=>{let i,N,a,B,b,Y,w,j,X,k,Q,H;return i="Data",N="Now",a="Name",B="Number of adults",b="No. of children",Y="Email",w="Table",j="Cell phone",X="Note",k="Confirm",Q="Cancel",H="Set date",[[3,"autocomplete","formGroup","ngSubmit"],["class","block mb-3",3,"filters"],[1,"mb-3"],[1,"flex","items-center"],[1,"me-2","grow",3,"tuiDropdownOpen","tuiAutoFocus","tuiTextfieldSize","min","formControlName"],i,["formControlName","time",1,"grow",3,"tuiDropdownOpen","tuiTextfieldSize","items"],N,["tuiButton","","appearance","icon","type","button","size","s"],[3,"errors"],[3,"tuiTextfieldSize","formControlName"],a,["tuiTextfield","","type","text",3,"autocomplete"],[1,"me-2","grow",3,"tuiTextfieldSize","formControlName"],B,[1,"ms-2","grow",3,"tuiTextfieldSize","formControlName"],b,Y,w,j,X,[1,"flex"],["tuiButton","","type","submit","size","l",1,"me-2",3,"showLoader"],k,["tuiButton","","type","button","appearance","icon","size","l",3,"showLoader","click"],Q,[1,"block","mb-3",3,"filters"],["tuiButton","","appearance","icon","type","button","size","s",3,"click"],[1,"me-1"],H]},template:function(N,a){1&N&&(e.I0R(0,"form",0),e.qCj("ngSubmit",function(){return a.submit()}),e.yuY(1,x,3,4,"app-reservation-tables-summary",1),e.I0R(2,"div",2)(3,"div",3)(4,"tui-input-date",4),e.SAx(5),e.aS0(6,5),e.k70(),e.C$Y(),e.I0R(7,"tui-input-time",6),e.SAx(8),e.aS0(9,7),e.k70(),e.C$Y()(),e.yuY(10,W,6,0,"button",8),e.wR5(11,"app-errors",9),e.C$Y(),e.I0R(12,"div",2)(13,"tui-input",10),e.SAx(14),e.aS0(15,11),e.k70(),e.wR5(16,"input",12),e.C$Y(),e.wR5(17,"app-errors",9),e.C$Y(),e.I0R(18,"div",2)(19,"div",3)(20,"tui-input-number",13),e.SAx(21),e.aS0(22,14),e.k70(),e.wR5(23,"input",12),e.C$Y(),e.I0R(24,"tui-input-number",15),e.SAx(25),e.aS0(26,16),e.k70(),e.wR5(27,"input",12),e.C$Y()()(),e.I0R(28,"div",2)(29,"tui-input",10),e.SAx(30),e.aS0(31,17),e.k70(),e.wR5(32,"input",12),e.C$Y(),e.wR5(33,"app-errors",9),e.C$Y(),e.I0R(34,"div",2)(35,"tui-input",10),e.SAx(36),e.aS0(37,18),e.k70(),e.wR5(38,"input",12),e.C$Y(),e.wR5(39,"app-errors",9),e.C$Y(),e.I0R(40,"div",2)(41,"tui-input",10),e.SAx(42),e.aS0(43,19),e.k70(),e.wR5(44,"input",12),e.C$Y(),e.wR5(45,"app-errors",9),e.C$Y(),e.I0R(46,"div",2)(47,"tui-input",10),e.SAx(48),e.aS0(49,20),e.k70(),e.wR5(50,"input",12),e.C$Y(),e.wR5(51,"app-errors",9),e.C$Y(),e.I0R(52,"div",21)(53,"button",22),e.SAx(54),e.aS0(55,23),e.k70(),e.C$Y(),e.I0R(56,"button",24),e.qCj("click",function(){return a.cancel()}),e.SAx(57),e.aS0(58,25),e.k70(),e.C$Y()()()),2&N&&(e.E7m("autocomplete","off")("formGroup",a.form),e.yG2(),e.C0Y(1,a.form.value.date&&a.utcTime()?1:-1),e.yG2(3),e.E7m("tuiDropdownOpen",a.dateOpen())("tuiAutoFocus",!0)("tuiTextfieldSize",a.inputSize)("min",a.today)("formControlName","date"),e.yG2(3),e.E7m("tuiDropdownOpen",a.timeOpen())("tuiTextfieldSize",a.inputSize)("items",a.validTimes()),e.yG2(3),e.C0Y(10,a.isMobile?10:-1),e.yG2(),e.E7m("errors",a.e("datetime")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","fullname"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("fullname")),e.yG2(3),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","adults"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","children"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","email"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("email")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","table"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("table")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","phone"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("phone")),e.yG2(2),e.E7m("tuiTextfieldSize",a.inputSize)("formControlName","notes"),e.yG2(3),e.E7m("autocomplete","off"),e.yG2(),e.E7m("errors",a.e("notes")),e.yG2(2),e.E7m("showLoader",a.loading),e.yG2(3),e.E7m("showLoader",a.loading))},dependencies:[O.g,s.sl,s.sz,s.ue,s.u,s.uW,s.Wo,l.CI,l.Kw,u.CQ,u.Oo,u.cP,V.b,m.aS,m.rD,n.Q7,n.mi,n.Qj,d.K6,E.iO,E.yc,E.Ml,p.IZ,p.iw,p.gt,c.m6,c.gJ,o.ms,o.oL,G.qL,f.u],encapsulation:2})}return P})()},9772:(v,C,t)=>{t.d(C,{CU:()=>O,ye:()=>s});const e=(new Date).getTimezoneOffset()/60;function O(l,m=e){return"string"==typeof l&&l.length>0&&l.match(/\d{1,2}:\d{1,2}/)?`${Number(l.split(":")[0])-m}:${l.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:l}),"")}function s(l,m=e){return O(l,-1*m)}},1960:(v,C,t)=>{t.d(C,{u:()=>l});var e=t(8400),O=t(5136);class s extends e.w{constructor(o){super(o),this.date=o.date?new Date(o.date):void 0,this.reservation_turn_id=o.reservation_turn_id,this.group_id=o.group_id,this.reservation_turn=o.reservation_turn?new O.e(o.reservation_turn):void 0}}class l extends e.w{constructor(o){super(o),this.turns=[],this.dates=[],this.title=o.title,this.status=o.status,this.preorder_type=o.preorder_type,this.payment_value=o.payment_value,this.message=o.message,this.turns=(o.turns||[]).map(u=>new O.e(u)),this.dates=(o.dates||[]).map(u=>new s(u)),this.translations=o.translations||{}}}},5136:(v,C,t)=>{t.d(C,{e:()=>l});var e=t(8400),O=t(9772),s=t(1960);class l extends e.w{constructor(o){super(o),this.messages=[],this.name=o.name,this.weekday=o.weekday,this.step=o.step,this.valid_times=o.valid_times,this.starts_at=o.starts_at?(0,O.CU)(o.starts_at):void 0,this.ends_at=o.ends_at?(0,O.CU)(o.ends_at):void 0,this.preorder_reservation_group=o.preorder_reservation_group?new s.u(o.preorder_reservation_group):void 0,this.messages=o.messages}}},5180:(v,C,t)=>{t.d(C,{C:()=>o});var e=t(8400);class O extends e.w{constructor(n){super(n),this.image_pixel_id=n.image_pixel_id,this.event_data=n.event_data,this.event_time=n.event_time?new Date(n.event_time):void 0}}class s extends e.w{constructor(n){super(n),this.image_id=n.image_id,this.delivered_email_id=n.delivered_email_id,this.record_type=n.record_type,this.record_id=n.record_id,this.event_type=n.event_type,this.secret=n.secret,this.events=n.events?n.events.map(d=>new O(d)):[]}}class l extends e.w{constructor(n){super(n),this.record_id=n.record_id,this.record_type=n.record_type,this.text=n.text,this.html=n.html,this.subject=n.subject,this.headers=n.headers,this.raw=n.raw,this.image_pixels=n.image_pixels?n.image_pixels.map(d=>new s(d)):[]}}class m extends e.w{constructor(n){super(n),this.hpp_url=n.hpp_url,this.value=n.value,this.status=n.status,this.reservation_id=n.reservation_id,this.preorder_type=n.preorder_type,this.external_id=n.external_id,this.other=n.other}}class o extends e.w{constructor(n){super(n),this.fullname=n.fullname,this.datetime=n.datetime?new Date(n.datetime):void 0,this.status=n.status,this.secret=n.secret,this.adults=n.adults,this.children=n.children,this.table=n.table,this.notes=n.notes,this.email=n.email,this.phone=n.phone,this.payment=n.payment?new m(n.payment):void 0,this.delivered_emails=n.delivered_emails?n.delivered_emails.map(d=>new l(d)):[]}}},1676:(v,C,t)=>{t.d(C,{s:()=>p});var e=t(4496),O=t(6772),s=t(1128),l=t(7048),m=t(8256),o=t(8392),u=t(6700),n=t(4704),d=t(9212);let p=(()=>{class r extends O.A{constructor(){super("public_data"),this.notifications=(0,e.uUt)(s.E),this.data$=new u.g(null),this.messages=(0,e.OCB)(null),this.messages$=this.data$.pipe((0,n.k)(_=>"object"==typeof _&&null!==_?function E(r){if(null==r)return null;if("object"==typeof r)return r;if(!("string"==typeof r&&r.length>0))return null;try{return JSON.parse(r)}catch{}return null}(_.public_messages):null),(0,d.y)(_=>this.messages.set(_))),this.contacts=(0,e.OCB)(null),this.contacts$=this.data$.pipe((0,n.k)(_=>"object"==typeof _&&null!==_?_.contacts:null),(0,d.y)(_=>this.contacts.set(_))),this.load(),[this.contacts$,this.messages$].forEach(_=>{_.subscribe({error:c=>{console.warn("unexpected error",c)}})})}load(){this.http.get("").subscribe({next:_=>{this.data$.next(_)},error:_=>{this.notifications.error(_ instanceof l.gj?(0,m.mk)(_):o.a)}})}static#e=this.\u0275fac=function(c){return new(c||r)};static#t=this.\u0275prov=e.wxM({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},4820:(v,C,t)=>{t.d(C,{G:()=>p});var e=t(4496),O=t(5180),s=t(6700),l=t(4704),m=t(9212),o=t(9144),u=t(6772),n=t(1676),d=t(5136),E=t(400);let p=(()=>{class r extends u.A{constructor(){super("reservations"),this.publicData=(0,e.uUt)(n.s),this.created=new s.g(null),this.publicData.data$.subscribe({next:_=>{this.created.next(_?.reservation?new O.C(_.reservation):null)}})}getValidTimes(_){let c="";return _ instanceof E.EK&&(c=`${_.year}-${(_.month+1)%13}-${_.day}`),this.get("valid_times",{params:{date:c}}).pipe((0,l.k)(M=>M.map(h=>new d.e(h))))}getValidDates(_){return this.get("valid_dates",{params:_}).pipe((0,l.k)(c=>c.map(M=>E.EK.fromLocalNativeDate(new Date(M)))))}load(_){return this.get(`${_}`).pipe((0,l.k)(c=>new O.C(c.item)))}create(_){return this.post("",_).pipe((0,l.k)(c=>new O.C(c.item)),(0,m.y)(c=>this.created.next(c)),(0,o.a)(c=>{throw this.created.next(null),c}))}resendConfirmation(_){return this.post(`${_}/resend_confirmation_email`,{})}cancel(_){return this.post(`${_}/cancel`,{})}static#e=this.\u0275fac=function(c){return new(c||r)};static#t=this.\u0275prov=e.wxM({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},8304:(v,C,t)=>{t.d(C,{S:()=>d});var e=t(6012),O=t(5180),s=t(4704),l=t(3252),m=t(9144),o=t(7048),u=t(8128),n=t(4496);let d=(()=>{class E extends e.s{constructor(){super(O.C,"admin/reservations")}updateStatus(r,S){return this.patch(`${r}/status/${S}`,{}).pipe((0,s.k)(_=>this.mapItem(_)))}tablesSummary(r={}){return this.get("tables_summary",{params:r})}ungroupedTablesSummary(r={}){return this.get("ungrouped_tables_summary",{params:r})}deliverConfirmationEmail(r){return this.post(`${r}/deliver_confirmation_email`,{}).pipe((0,s.k)(S=>this.mapItem(S)))}refoundPayment(r){return this.post(`${r}/refund_payment`,{}).pipe((0,s.k)(S=>this.mapItem(S)))}refreshPaymentStatus(r){return this.post(`${r}/refresh_payment_status`,{}).pipe((0,s.k)(S=>this.mapItem(S)))}export(r){return new l._(S=>{this.get("export",{responseType:"blob",observe:"response",params:r}).pipe((0,m.a)(_=>(console.error("ReservationsService.export() error:",_),S.error(_),new l._))).subscribe(_=>{if(_ instanceof o.WA&&_.body){const c=(0,u.k)(_.headers?.get("Content-Disposition"))??"Prenotazioni.xlsx",M=_.headers?.get("Content-Type")??"application/octet-stream",h=window.URL.createObjectURL(new Blob([_.body],{type:M})),R=document.createElement("a");R.href=h,R.download=c,R.click(),S.complete()}})})}static#e=this.\u0275fac=function(S){return new(S||E)};static#t=this.\u0275prov=n.wxM({token:E,factory:E.\u0275fac,providedIn:"root"})}return E})()},1200:(v,C,t)=>{t.d(C,{A:()=>o,m:()=>u});var e=t(4496),O=t(900),s=t(3480),l=t(800),m=t(3616);let o=(()=>{class n{constructor(E,p,r){this.el=E,this.zone=p,this.destroy$=r,this.eventName=""}ngOnInit(){(0,l.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,O.Uv)(this.zone),(0,O.uy)(),(0,m.a)(this.destroy$)).subscribe()}}return n.\u0275fac=function(E){return new(E||n)(e.GI1(e.GMv),e.GI1(e.WW2),e.GI1(s.UF,2))},n.\u0275dir=e.Sc5({type:n,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[e.Wk5.None,"tuiPreventDefault","eventName"]},features:[e.M5G([s.UF])]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(E){return new(E||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({}),n})()},6988:(v,C,t)=>{t.d(C,{E:()=>o,Q:()=>u});var e=t(4496),O=t(3480),s=t(3840),l=t(3120),m=t(3616);let o=(()=>{class n{constructor(E,p){this.el=E,this.destroy$=p}set tuiScrollIntoView(E){E&&(0,l.k)(0).pipe((0,m.a)(this.destroy$)).subscribe(()=>{this.el.nativeElement.dispatchEvent(new CustomEvent(s.dG,{bubbles:!0,detail:this.el.nativeElement}))})}}return n.\u0275fac=function(E){return new(E||n)(e.GI1(e.GMv),e.GI1(O.UF,2))},n.\u0275dir=e.Sc5({type:n,selectors:[["","tuiScrollIntoView",""]],inputs:{tuiScrollIntoView:"tuiScrollIntoView"},features:[e.M5G([O.UF])]}),n})(),u=(()=>{class n{}return n.\u0275fac=function(E){return new(E||n)},n.\u0275mod=e.a4G({type:n}),n.\u0275inj=e.s3X({}),n})()},5384:(v,C,t)=>{t.d(C,{E$:()=>$,YB:()=>G,wu:()=>L});var e=t(4496),O=t(6504),s=t(900),l=t(4392),m=t(2528),o=t(1800),u=t(3656),n=t(6988),d=t(5944),E=t(4336),p=t(1040),r=t(5657),S=t(3412),_=t(8960),c=t(5568),M=t(4704),h=t(4e3),R=t(1368);function T(A,y){if(1&A&&e.wR5(0,"tui-svg",3),2&A){const I=e.GaO();e.E7m("src",I.icons.check)("tuiScrollIntoView",!0)}}function g(A,y){1&A&&e.wR5(0,"span",4)}let L=(()=>{class A{constructor(I,f,U,V,K,x,W,F){this.icons=I,this.context=f,this.host=U,this.el=V,this.option=K,this.dataList=x,this.control=W,this.abstractControl=F,this.changeDetection$=new r.E,this.selected$=(0,S.U)(this.changeDetection$,this.control.valueChanges||_.k,(0,s.Ax)(this.el.nativeElement,"animationstart")).pipe((0,c.W)(null),(0,M.k)(()=>this.selected),(0,h.a)())}get matcher(){return this.host.identityMatcher||l.y}ngOnInit(){Promise.resolve().then(()=>{var I,f;(0,m.kF)(this.option.value)&&!this.option.disabled&&(null===(f=(I=this.host).checkOption)||void 0===f||f.call(I,this.option.value))})}ngDoCheck(){this.changeDetection$.next()}get value(){var I,f;return null!==(f=null===(I=this.abstractControl)||void 0===I?void 0:I.value)&&void 0!==f?f:this.control.value}get selected(){return(0,m.kF)(this.option.value)&&(0,m.kF)(this.value)&&this.matcher(this.value,this.option.value)}}return A.\u0275fac=function(I){return new(I||A)(e.GI1(d.QJ),e.GI1(p.C0),e.GI1(d.u2),e.GI1(e.GMv),e.GI1(E.sP),e.GI1(E.yi,8),e.GI1(O.eq),e.GI1(o._y,8))},A.\u0275cmp=e.In1({type:A,selectors:[["tui-select-option"]],decls:5,vars:5,consts:[[3,"ngTemplateOutlet"],["automation-id","tui-select-option__checkmark","class","t-checkmark",3,"src","tuiScrollIntoView",4,"ngIf","ngIfElse"],["dummy",""],["automation-id","tui-select-option__checkmark",1,"t-checkmark",3,"src","tuiScrollIntoView"],[1,"t-dummy"]],template:function(I,f){if(1&I&&(e.C_f(0,0),e.yuY(1,T,1,2,"tui-svg",1),e.wVc(2,"async"),e.yuY(3,g,1,0,"ng-template",null,2,e.gJz)),2&I){const U=e.Gew(4);e.E7m("ngTemplateOutlet",f.context.$implicit),e.yG2(),e.E7m("ngIf",e.kDX(2,3,f.selected$))("ngIfElse",U)}},dependencies:[u.Wu,R.XV,R.u_,n.E,R.a],styles:['@keyframes _ngcontent-%COMP%_retrigger{0%{left:1px}to{left:2px}}[_nghost-%COMP%]{display:flex;flex:1;align-items:center;max-width:100%;animation:_ngcontent-%COMP%_retrigger 1s}.t-checkmark[_ngcontent-%COMP%]{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-border-start:.25rem solid transparent;border-inline-start:.25rem solid transparent}tui-data-list[data-list-size="s"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="s"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.375rem;margin-inline-end:-.375rem}tui-data-list[data-list-size="m"][_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%], tui-data-list[data-list-size="m"]   [_nghost-%COMP%]   .t-checkmark[_ngcontent-%COMP%]{-webkit-margin-end:-.125rem;margin-inline-end:-.125rem}.t-dummy[_ngcontent-%COMP%]{width:1.75rem}'],changeDetection:0}),A})();const $=new p.WO(L);let G=(()=>{class A{}return A.\u0275fac=function(I){return new(I||A)},A.\u0275mod=e.a4G({type:A}),A.\u0275inj=e.s3X({imports:[[R.MD,u.Yt,n.Q]]}),A})()}}]);