"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[6556],{908:(y,f,n)=>{n.d(f,{Q:()=>m});var t=n(2100),d=n(1512),a=n(4496);const l=()=>["show"],s=h=>({contacts:h}),c=h=>({outlets:h}),e=h=>["",h],u=["*"];let m=(()=>{class h{static#t=this.\u0275fac=function(r){return new(r||h)};static#e=this.\u0275cmp=a.In1({type:h,selectors:[["app-contact-us"]],standalone:!0,features:[a.UHJ],ngContentSelectors:u,decls:2,vars:8,consts:[["tuiLink","",1,"ms-1",3,"routerLink"]],template:function(r,o){1&r&&(a.kPM(),a.I0R(0,"a",0),a._Xx(1),a.C$Y()),2&r&&a.E7m("routerLink",a.S45(6,e,a.S45(4,c,a.S45(2,s,a.q4q(1,l)))))},dependencies:[t.ER,d.w,d.C]})}return h})()},7296:(y,f,n)=>{n.d(f,{K:()=>s});var t=n(4496),d=n(1676),a=n(9880),l=n(1560);let s=(()=>{class c{constructor(){this.service=(0,t.uUt)(d.s),this.location$=(0,t.OCB)(null),this.message=(0,t.S6b)(()=>{const u=this.location$(),m=this.service.messages();return null===u||null===m?null:m[u]})}set location(u){this.location$.set(u)}get location(){return this.location$()}static#t=this.\u0275fac=function(m){return new(m||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-public-message"]],inputs:{location:"location"},standalone:!0,features:[t.UHJ],decls:8,vars:2,consts:[[3,"expanded"],[1,"text-2xl","flex","items-center","justify-center","p-2","text-primary"],[1,"mx-3"]],template:function(m,h){1&m&&(t.I0R(0,"tui-expand",0)(1,"div",1)(2,"mat-icon"),t.OEk(3,"priority_high"),t.C$Y(),t.I0R(4,"div",2),t.OEk(5),t.C$Y(),t.I0R(6,"mat-icon"),t.OEk(7,"priority_high"),t.C$Y()()()),2&m&&(t.E7m("expanded",null!=h.message()),t.yG2(5),t.cNF(h.message()))},dependencies:[a.kh,a.st,l.qL],styles:["[_nghost-%COMP%]{background-color:var(--fourth-color);display:block}"]})}return c})()},8256:(y,f,n)=>{function t(s,c){return s.error?.message?s.error.message:500==s.status?`${s.error.error} ${s.error.exception}`.replace(/\</gm,"").replace(/\>+/gm,""):504==s.status?$localize`Server irraggiungibile, controlla la tua connessione e riprova.`:d(function l(s){if("object"==typeof s.error&&"object"==typeof s.error.details&&Array.isArray(s.error.details)&&s.error.details.length>0){const c=s.error.details.filter(e=>"object"==typeof e&&null!=e&&e instanceof Object&&Object.keys(e).length>0).filter(e=>"string"==typeof e.attribute&&e.attribute.length>0&&("string"==typeof e.message&&e.message.length>0||Array.isArray(e.message)&&e.message.length>0));if(c.length>0)return c}return[]}(s),c)}function d(s,c){if(0==s.length)return null;const e=c?.joinChar??", ",u=s.map(m=>`${m.attribute} ${m.message}`);return u.length?function a(s){return[...new Set(s)]}(u).join(e):null}n.d(f,{Yj:()=>d,mk:()=>t})},9772:(y,f,n)=>{n.d(f,{CU:()=>d,ye:()=>a});const t=(new Date).getTimezoneOffset()/60;function d(l,s=t){return"string"==typeof l&&l.length>0&&l.match(/\d{2}:\d{2}/)?`${Number(l.split(":")[0])-s}:${l.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:l}),"")}function a(l,s=t){return d(l,-1*s)}},5136:(y,f,n)=>{n.d(f,{e:()=>a});var t=n(8400),d=n(9772);class a extends t.w{constructor(s){super(s),this.name=s.name,this.weekday=s.weekday,this.step=s.step,this.valid_times=s.valid_times,this.starts_at=s.starts_at?(0,d.CU)(s.starts_at):void 0,this.ends_at=s.ends_at?(0,d.CU)(s.ends_at):void 0}}},6579:(y,f,n)=>{n.d(f,{C:()=>s});var t=n(8400);class d extends t.w{constructor(e){super(e),this.image_pixel_id=e.image_pixel_id,this.event_data=e.event_data,this.event_time=e.event_time?new Date(e.event_time):void 0}}class a extends t.w{constructor(e){super(e),this.image_id=e.image_id,this.delivered_email_id=e.delivered_email_id,this.record_type=e.record_type,this.record_id=e.record_id,this.event_type=e.event_type,this.secret=e.secret,this.events=e.events?e.events.map(u=>new d(u)):[]}}class l extends t.w{constructor(e){super(e),this.record_id=e.record_id,this.record_type=e.record_type,this.text=e.text,this.html=e.html,this.subject=e.subject,this.headers=e.headers,this.raw=e.raw,this.image_pixels=e.image_pixels?e.image_pixels.map(u=>new a(u)):[]}}class s extends t.w{constructor(e){super(e),this.fullname=e.fullname,this.datetime=e.datetime?new Date(e.datetime):void 0,this.status=e.status,this.secret=e.secret,this.adults=e.adults,this.children=e.children,this.table=e.table,this.notes=e.notes,this.email=e.email,this.phone=e.phone,this.delivered_emails=e.delivered_emails?e.delivered_emails.map(u=>new l(u)):[]}}},1676:(y,f,n)=>{n.d(f,{s:()=>C});var t=n(4496),d=n(6772),a=n(4388),l=n(7048),s=n(8256),c=n(8392),e=n(6700),u=n(4704),m=n(9212);function h(g){if(null==g)return null;if("object"==typeof g)return g;if(!("string"==typeof g&&g.length>0))return null;try{return JSON.parse(g)}catch{}return null}let C=(()=>{class g extends d.A{constructor(){super("public_data"),this.notifications=(0,t.uUt)(a.E),this.data$=new e.g(null),this.messages=(0,t.OCB)(null),this.messages$=this.data$.pipe((0,u.k)(o=>"object"==typeof o&&null!==o?h(o.public_messages):null),(0,m.y)(o=>this.messages.set(o))),this.contacts=(0,t.OCB)(null),this.contacts$=this.data$.pipe((0,u.k)(o=>"object"==typeof o&&null!==o?h(o.settings.email_contacts):null),(0,m.y)(o=>this.contacts.set(o))),this.load(),[this.contacts$,this.messages$].forEach(o=>{o.subscribe({error:x=>{console.warn("unexpected error",x)}})})}load(){this.http.get("").subscribe({next:o=>{this.data$.next(o)},error:o=>{this.notifications.error(o instanceof l.gj?(0,s.mk)(o):c.a)}})}static#t=this.\u0275fac=function(x){return new(x||g)};static#e=this.\u0275prov=t.wxM({token:g,factory:g.\u0275fac,providedIn:"root"})}return g})()},4820:(y,f,n)=>{n.d(f,{G:()=>h});var t=n(4496),d=n(6579),a=n(6700),l=n(4704),s=n(9212),c=n(9144),e=n(6772),u=n(1676),m=n(5136);let h=(()=>{class C extends e.A{constructor(){super("reservations"),this.publicData=(0,t.uUt)(u.s),this.created=new a.g(null),this.publicData.data$.subscribe({next:r=>{this.created.next(r?.reservation?new d.C(r.reservation):null)}})}getValidTimes(r){return this.get("valid_times",{params:{date:r.toISOString()}}).pipe((0,l.k)(o=>o.map(x=>new m.e(x))))}load(r){return this.get(`${r}`).pipe((0,l.k)(o=>new d.C(o)))}create(r){return this.post("",r).pipe((0,l.k)(o=>new d.C(o.item)),(0,s.y)(o=>this.created.next(o)),(0,c.a)(o=>{throw this.created.next(null),o}))}resendConfirmation(r){return this.post(`${r}/resend_confirmation_email`,{})}cancel(r){return this.post(`${r}/cancel`,{})}static#t=this.\u0275fac=function(o){return new(o||C)};static#e=this.\u0275prov=t.wxM({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},9880:(y,f,n)=>{n.d(f,{kP:()=>g,kh:()=>O,st:()=>x});var t=n(4496),d=n(3480),a=n(4392),l=n(3120),s=n(3616),c=n(7692),e=n(1368);const u=["wrapper"];function m(_,E){if(1&_&&(t.I0R(0,"tui-loader",4),t.C_f(1,5),t.C$Y()),2&_){const i=t.GaO(2);t.E7m("overlay",!0)("showLoader",i.loading),t.yG2(),t.E7m("ngTemplateOutlet",i.content)}}function h(_,E){if(1&_&&(t.SAx(0),t._Xx(1),t.yuY(2,m,2,3,"tui-loader",3),t.k70()),2&_){const i=t.GaO();t.yG2(2),t.E7m("ngIf",i.async)("ngIfElse",i.content)}}const C=["*"];let g=(()=>{class _{}return _.\u0275fac=function(i){return new(i||_)},_.\u0275dir=t.Sc5({type:_,selectors:[["","tuiExpandContent",""]]}),_})();let x=(()=>{class _{constructor(i,p){this.cdr=i,this.destroy$=p,this.state=0,this.async=!1,this.content=null,this.expanded=null}set expandedSetter(i){if(null!==this.expanded)return 0!==this.state?(this.expanded=i,void(this.state=3)):(this.expanded=i,void this.retrigger(this.async&&i?1:3));this.expanded=i}get overflow(){return 0!==this.state}get loading(){return!!this.expanded&&this.async&&1===this.state}get height(){const{expanded:i,state:p,contentWrapper:v}=this;return i&&2===p||!i&&3===p?0:v&&(!i&&2===p||i&&3===p)?v.nativeElement.offsetHeight:v&&i&&1===p?Math.max(v.nativeElement.offsetHeight,48):null}get contentVisible(){return this.expanded||0!==this.state}onTransitionEnd({propertyName:i}){"opacity"===i&&3===this.state&&(this.state=0)}onExpandLoaded(i){i.stopPropagation(),1===this.state&&this.retrigger(3)}retrigger(i){this.state=2,(0,l.k)(0).pipe((0,s.a)(this.destroy$)).subscribe(()=>{2===this.state&&(this.state=i,this.cdr.markForCheck())})}}return _.\u0275fac=function(i){return new(i||_)(t.GI1(t.kD9),t.GI1(d.UF,2))},_.\u0275cmp=t.In1({type:_,selectors:[["tui-expand"]],contentQueries:function(i,p,v){if(1&i&&t.szK(v,g,5,t.Yw2),2&i){let M;t.wto(M=t.Gqi())&&(p.content=M.first)}},viewQuery:function(i,p){if(1&i&&t.CC$(u,5),2&i){let v;t.wto(v=t.Gqi())&&(p.contentWrapper=v.first)}},hostVars:9,hostBindings:function(i,p){1&i&&t.qCj("transitionend.self",function(M){return p.onTransitionEnd(M)})("tui-expand-loaded",function(M){return p.onExpandLoaded(M)}),2&i&&(t.e48("aria-expanded",p.expanded),t.m4B("height",p.height,"px"),t.eAK("_expanded",p.expanded)("_overflow",p.overflow)("_loading",p.loading))},inputs:{async:"async",expandedSetter:[t.Wk5.None,"expanded","expandedSetter"]},features:[t.M5G([d.UF])],ngContentSelectors:C,decls:3,vars:3,consts:[[1,"t-wrapper"],["wrapper",""],[4,"ngIf"],["size","l",3,"overlay","showLoader",4,"ngIf","ngIfElse"],["size","l",3,"overlay","showLoader"],[3,"ngTemplateOutlet"]],template:function(i,p){1&i&&(t.kPM(),t.I0R(0,"div",0,1),t.yuY(2,h,3,2,"ng-container",2),t.C$Y()),2&i&&(t.E7m("@tuiParentAnimation",void 0)("@.disabled",p.overflow),t.yG2(2),t.E7m("ngIf",p.contentVisible))},dependencies:[c.Cb,e.u_,e.XV],styles:['[_nghost-%COMP%]{transition-property:opacity,height,visibility;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:block;opacity:0;transition-delay:1ms}._overflow[_nghost-%COMP%]{overflow:hidden}._expanded[_nghost-%COMP%]{opacity:1;transform:translate(0)}._loading[_nghost-%COMP%]{opacity:.99}.t-wrapper[_ngcontent-%COMP%]:before, .t-wrapper[_ngcontent-%COMP%]:after{content:"";display:table}'],data:{animation:[a.cI]},changeDetection:0}),_})(),O=(()=>{class _{}return _.\u0275fac=function(i){return new(i||_)},_.\u0275mod=t.a4G({type:_}),_.\u0275inj=t.s3X({imports:[[e.MD,c.Sk]]}),_})()}}]);