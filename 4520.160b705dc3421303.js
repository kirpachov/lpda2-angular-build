"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4520],{4592:(g,m,n)=>{n.d(m,{u:()=>O});var e=n(4496),l=n(3480),p=n(8304),u=n(3616),_=n(8824),i=n(7692),s=n(5656);let t=(()=>{class o{transform(a){return null==a||"object"!=typeof a||Array.isArray(a)?[]:Object.keys(a).map(d=>[d,a[d]])}static#e=this.\u0275fac=function(d){return new(d||o)};static#t=this.\u0275pipe=e.UTH({name:"objectToArray",type:o,pure:!0,standalone:!0})}return o})();function E(o,r){if(1&o&&e.wR5(0,"tui-loader",0),2&o){const a=e.GaO();e.E7m("showLoader",a.showLoader)("size","s")}}const h=(o,r)=>r.turn.id;function C(o,r){1&o&&e._Xx(0)}const M=(o,r)=>r[0];function f(o,r){1&o&&e.OEk(0,"Quante persone ci sono al tavolo in questione")}function v(o,r){if(1&o&&(e.I0R(0,"th",4),e.OEk(1),e.I0R(2,"span"),e.aS0(3,11),e.C$Y()()),2&o){const a=r.$implicit;e.yG2(),e.oRS(" ",a[0]," ")}}function T(o,r){1&o&&e.OEk(0,"Quanti tavoli con lo stesso numero di persone")}function D(o,r){if(1&o&&(e.I0R(0,"td",8)(1,"span"),e.OEk(2),e.C$Y()()),2&o){const a=r.$implicit;e.yG2(2),e.cNF(a[1])}}function y(o,r){if(1&o&&(e.I0R(0,"p",1)(1,"b"),e.OEk(2),e.C$Y()(),e.I0R(3,"table",2)(4,"thead")(5,"tr",3)(6,"th",4),e.yuY(7,f,1,0,"ng-template",null,5,e.gJz),e.I0R(9,"span",6),e.aS0(10,7),e.C$Y()(),e.c53(11,v,4,1,"th",12,M),e.wVc(13,"objectToArray"),e.C$Y()(),e.I0R(14,"tbody")(15,"tr",3)(16,"td",8),e.yuY(17,T,1,0,"ng-template",null,9,e.gJz),e.I0R(19,"span",6),e.aS0(20,10),e.C$Y()(),e.c53(21,D,3,1,"td",13,M),e.wVc(23,"objectToArray"),e.C$Y()()()),2&o){const a=r.$implicit,d=e.Gew(8),P=e.Gew(18);e.yG2(2),e.cNF(a.turn.name),e.yG2(7),e.E7m("tuiHint",d),e.yG2(2),e.oho(e.kDX(13,3,a.summary)),e.yG2(8),e.E7m("tuiHint",P),e.yG2(2),e.oho(e.kDX(23,5,a.summary))}}const R=()=>[];function I(o,r){if(1&o&&(e.yuY(0,C,1,0),e.c53(1,y,24,7,null,null,h)),2&o){const a=e.GaO();e.C0Y(0,(a.data()||e.q4q(1,R)).length>0?0:-1),e.yG2(),e.oho(a.data())}}const c=["*"];let O=(()=>{class o{constructor(){this.destroy$=(0,e.uUt)(l.UF),this.service=(0,e.uUt)(p.S),this.data=(0,e.OCB)(null),this.loading=(0,e.OCB)(!1),this.showLoader=!0,this.filters=null}ngOnChanges(){this.query()}query(){this.loading.set(!0),this.service.tablesSummary(this.filters??{}).pipe((0,u.a)(this.destroy$),(0,_.U)(()=>this.loading.set(!1))).subscribe({next:a=>{this.data.set(a)}})}static#e=this.\u0275fac=function(d){return new(d||o)};static#t=this.\u0275cmp=e.In1({type:o,selectors:[["app-reservation-tables-summary"]],inputs:{showLoader:"showLoader",filters:"filters"},standalone:!0,features:[e.M5G([l.UF]),e.SYr,e.UHJ],ngContentSelectors:c,decls:2,vars:1,consts:()=>{let a,d,P;return a="Tipo:",d="Quantit\xE0:",P="persone",[[3,"showLoader","size"],[1,"font-xl"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__th"],["headerExplain",""],[3,"tuiHint"],a,[1,"tui-table__td"],["valueExplain",""],d,P,["class","tui-table__th"],["class","tui-table__td"]]},template:function(d,P){1&d&&(e.kPM(),e.yuY(0,E,1,2,"tui-loader",0)(1,I,3,2)),2&d&&e.C0Y(0,P.loading()?0:1)},dependencies:[i.Sk,i.Cb,t,s.WY,s.lh,s.SL,s.i6,s.IT],styles:["td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid var(--tui-base-04)}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{font-size:.9rem}table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   .tui-table__th[_ngcontent-%COMP%]{padding:.5rem;height:inherit}"],changeDetection:0})}return o})()},8256:(g,m,n)=>{function e(_,i){return _.error?.message?_.error.message:500==_.status?`${_.error.error} ${_.error.exception}`.replace(/\</gm,"").replace(/\>+/gm,""):504==_.status?"Server irraggiungibile, controlla la tua connessione e riprova.":l(function u(_){if("object"==typeof _.error&&"object"==typeof _.error.details&&Array.isArray(_.error.details)&&_.error.details.length>0){const i=_.error.details.filter(s=>"object"==typeof s&&null!=s&&s instanceof Object&&Object.keys(s).length>0).filter(s=>"string"==typeof s.attribute&&s.attribute.length>0&&("string"==typeof s.message&&s.message.length>0||Array.isArray(s.message)&&s.message.length>0));if(i.length>0)return i}return[]}(_),i)}function l(_,i){if(0==_.length)return null;const s=i?.joinChar??", ",t=_.map(E=>`${E.attribute} ${E.message}`);return t.length?function p(_){return[...new Set(_)]}(t).join(s):null}n.d(m,{Yj:()=>l,mk:()=>e})},9772:(g,m,n)=>{n.d(m,{CU:()=>l,ye:()=>p});const e=(new Date).getTimezoneOffset()/60;function l(u,_=e){return"string"==typeof u&&u.length>0&&u.match(/\d{1,2}:\d{1,2}/)?`${Number(u.split(":")[0])-_}:${u.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:u}),"")}function p(u,_=e){return l(u,-1*_)}},1960:(g,m,n)=>{n.d(m,{u:()=>u});var e=n(8400),l=n(5136);class p extends e.w{constructor(i){super(i),this.date=i.date?new Date(i.date):void 0,this.reservation_turn_id=i.reservation_turn_id,this.group_id=i.group_id,this.reservation_turn=i.reservation_turn?new l.e(i.reservation_turn):void 0}}class u extends e.w{constructor(i){super(i),this.turns=[],this.dates=[],this.title=i.title,this.status=i.status,this.preorder_type=i.preorder_type,this.payment_value=i.payment_value,this.message=i.message,this.turns=(i.turns||[]).map(s=>new l.e(s)),this.dates=(i.dates||[]).map(s=>new p(s))}}},5136:(g,m,n)=>{n.d(m,{e:()=>u});var e=n(8400),l=n(9772),p=n(1960);class u extends e.w{constructor(i){super(i),this.name=i.name,this.weekday=i.weekday,this.step=i.step,this.valid_times=i.valid_times,this.starts_at=i.starts_at?(0,l.CU)(i.starts_at):void 0,this.ends_at=i.ends_at?(0,l.CU)(i.ends_at):void 0,this.preorder_reservation_group=i.preorder_reservation_group?new p.u(i.preorder_reservation_group):void 0}}},5180:(g,m,n)=>{n.d(m,{C:()=>i});var e=n(8400);class l extends e.w{constructor(t){super(t),this.image_pixel_id=t.image_pixel_id,this.event_data=t.event_data,this.event_time=t.event_time?new Date(t.event_time):void 0}}class p extends e.w{constructor(t){super(t),this.image_id=t.image_id,this.delivered_email_id=t.delivered_email_id,this.record_type=t.record_type,this.record_id=t.record_id,this.event_type=t.event_type,this.secret=t.secret,this.events=t.events?t.events.map(E=>new l(E)):[]}}class u extends e.w{constructor(t){super(t),this.record_id=t.record_id,this.record_type=t.record_type,this.text=t.text,this.html=t.html,this.subject=t.subject,this.headers=t.headers,this.raw=t.raw,this.image_pixels=t.image_pixels?t.image_pixels.map(E=>new p(E)):[]}}class _ extends e.w{constructor(t){super(t),this.hpp_url=t.hpp_url,this.value=t.value,this.status=t.status,this.reservation_id=t.reservation_id,this.preorder_type=t.preorder_type,this.other=t.other}}class i extends e.w{constructor(t){super(t),this.fullname=t.fullname,this.datetime=t.datetime?new Date(t.datetime):void 0,this.status=t.status,this.secret=t.secret,this.adults=t.adults,this.children=t.children,this.table=t.table,this.notes=t.notes,this.email=t.email,this.phone=t.phone,this.payment=t.payment?new _(t.payment):void 0,this.delivered_emails=t.delivered_emails?t.delivered_emails.map(E=>new u(E)):[]}}},8304:(g,m,n)=>{n.d(m,{S:()=>E});var e=n(6012),l=n(5180),p=n(4704),u=n(3252),_=n(9144),i=n(7048),s=n(8128),t=n(4496);let E=(()=>{class h extends e.s{constructor(){super(l.C,"admin/reservations")}tablesSummary(M={}){return this.get("tables_summary",{params:M})}deliverConfirmationEmail(M){return this.post(`${M}/deliver_confirmation_email`,{}).pipe((0,p.k)(f=>this.mapItem(f)))}export(M){return new u._(f=>{this.get("export",{responseType:"blob",observe:"response",params:M}).pipe((0,_.a)(v=>(console.error("ReservationsService.export() error:",v),f.error(v),new u._))).subscribe(v=>{if(v instanceof i.WA&&v.body){const T=(0,s.k)(v.headers?.get("Content-Disposition"))??"Prenotazioni.xlsx",D=v.headers?.get("Content-Type")??"application/octet-stream",y=window.URL.createObjectURL(new Blob([v.body],{type:D})),R=document.createElement("a");R.href=y,R.download=T,R.click(),f.complete()}})})}static#e=this.\u0275fac=function(f){return new(f||h)};static#t=this.\u0275prov=t.wxM({token:h,factory:h.\u0275fac,providedIn:"root"})}return h})()},1200:(g,m,n)=>{n.d(m,{A:()=>i,m:()=>s});var e=n(4496),l=n(900),p=n(3480),u=n(800),_=n(3616);let i=(()=>{class t{constructor(h,C,M){this.el=h,this.zone=C,this.destroy$=M,this.eventName=""}ngOnInit(){(0,u.w)(this.el.nativeElement,this.eventName,{passive:!1}).pipe((0,l.Uv)(this.zone),(0,l.uy)(),(0,_.a)(this.destroy$)).subscribe()}}return t.\u0275fac=function(h){return new(h||t)(e.GI1(e.GMv),e.GI1(e.WW2),e.GI1(p.UF,2))},t.\u0275dir=e.Sc5({type:t,selectors:[["","tuiPreventDefault",""]],inputs:{eventName:[e.Wk5.None,"tuiPreventDefault","eventName"]},features:[e.M5G([p.UF])]}),t})(),s=(()=>{class t{}return t.\u0275fac=function(h){return new(h||t)},t.\u0275mod=e.a4G({type:t}),t.\u0275inj=e.s3X({}),t})()},4736:(g,m,n)=>{n.d(m,{M:()=>u,O:()=>_});var e=n(4496),l=n(5944),p=n(4704);let u=(()=>{class i{constructor(t){this.months$=t}transform({month:t}){return this.months$.pipe((0,p.k)(E=>E[t]))}}return i.\u0275fac=function(t){return new(t||i)(e.GI1(l.GU,16))},i.\u0275pipe=e.UTH({name:"tuiMonth",type:i,pure:!0}),i})(),_=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({}),i})()},3797:(g,m,n)=>{n.d(m,{CQ:()=>I,Oo:()=>y,cP:()=>R});var e=n(4496),l=n(6504),p=n(3044),u=n(1800),_=n(4164),i=n(4680),s=n(466),t=n(7936),E=n(8048),h=n(4336),C=n(5944),M=n(9371),f=n(796),v=n(1368);const T=["*",[["input"]]],D=["*","input"];let y=(()=>{class c extends u._y{constructor(o,r,a,d){super(o,r,d),this.textfieldSize=a,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,_.ER)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(o){this.value=o,this.open=!0}onActiveZone(o){this.updateFocused(o)}handleOption(o){this.setNativeValue(String(o)),this.focusInput(),this.value=String(o),this.open=!1}getFallbackValue(){return""}focusInput(o=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:o})}setNativeValue(o){this.nativeFocusableElement&&(this.nativeFocusableElement.value=o)}}return c.\u0275fac=function(o){return new(o||c)(e.GI1(l.eq,10),e.GI1(e.kD9),e.GI1(E.$K),e.GI1(u.cn,8))},c.\u0275cmp=e.In1({type:c,selectors:[["tui-input"]],contentQueries:function(o,r,a){if(1&o&&e.szK(a,h.Ux,5,e.Yw2),2&o){let d;e.wto(d=e.Gqi())&&(r.datalist=d.first)}},viewQuery:function(o,r){if(1&o&&(e.CC$(s.Qw,5),e.CC$(t.y_,5)),2&o){let a;e.wto(a=e.Gqi())&&(r.hostedDropdown=a.first),e.wto(a=e.Gqi())&&(r.textfield=a.first)}},hostVars:1,hostBindings:function(o,r){2&o&&e.e48("data-size",r.size)},features:[e.M5G([f.g3,(0,i.NK)(c),(0,C.UH)(c),(0,u.q4)(c)],[f.YL]),e.eg9],ngContentSelectors:D,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(o,r){1&o&&(e.kPM(T),e.I0R(0,"tui-hosted-dropdown",0),e.iHE("openChange",function(d){return e.kNx(r.open,d)||(r.open=d),d}),e.qCj("tuiActiveZoneChange",function(d){return r.onActiveZone(d)}),e.I0R(1,"tui-primitive-textfield",1),e.qCj("valueChange",function(d){return r.onValueChange(d)}),e._Xx(2),e._Xx(3,1,["ngProjectAs","input",5,["input"]]),e.C$Y()()),2&o&&(e.E7m("canOpen",r.canOpen)("content",r.datalist||""),e.OKB("open",r.open),e.yG2(),e.E7m("disabled",r.computedDisabled)("focusable",r.computedFocusable)("invalid",r.computedInvalid)("nativeId",r.nativeId)("pseudoFocus",r.computedFocused)("pseudoHover",r.pseudoHover)("readOnly",r.readOnly)("value",r.value))},dependencies:[s.Qw,t.y_,p.M,t.KQ],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),c})(),R=(()=>{class c extends M.Cm{onValueChange(o){this.host.onValueChange(o)}}return c.\u0275fac=(()=>{let O;return function(r){return(O||(O=e.otF(c)))(r||c)}})(),c.\u0275dir=e.Sc5({type:c,selectors:[["tui-input"]],features:[e.M5G([(0,C.iu)(c)]),e.eg9]}),c})(),I=(()=>{class c{}return c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=e.a4G({type:c}),c.\u0275inj=e.s3X({imports:[[v.MD,p.L,t.KA,s.GE]]}),c})()},796:(g,m,n)=>{n.d(m,{YL:()=>C,g3:()=>M}),n(4736);var l=n(5193),p=n(5944),i=(n(3012),n(2700),n(528)),t=(n(4704),n(4496)),E=n(6504);const C=(0,l.Sk)({limitWidth:"fixed",align:"right"}),M={provide:p.Y9,deps:[[new t.T7N,new t.Yiy,E.Y6]],useFactory:i.Z}}}]);