"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[8559],{9722:(T,d,r)=>{r.d(d,{t:()=>W});var u=r(1368),t=r(4496),l=r(6504),c=r(2516),_=r(7556),a=r(3480),p=r(6732),g=r(7692),E=r(466),O=r(5193),v=r(1673),i=r(8212),m=r(6528),M=r(3616),S=r(8824),w=r(4704),x=r(9144),R=r(2700);let N=(()=>{class s{transform(e){return o=>o?.dayOfWeek(!1)!=e}static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275pipe=t.UTH({name:"tuiWeekdayHandler",type:s,pure:!0,standalone:!0})}return s})();var I=r(964),G=r(400);let F=(()=>{class s{transform(e){return e instanceof Date?e:e instanceof G.EK?e.toUtcNativeDate():null}static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275pipe=t.UTH({name:"fromTuiDay",type:s,pure:!0,standalone:!0})}return s})();const U=(s,f)=>f.id,D=()=>[];function Y(s,f){if(1&s){const e=t.KQA();t.I0R(0,"tui-calendar",11),t.qCj("dayClick",function(n){t.usT(e);const h=t.GaO(3).$implicit,y=t.GaO(2);return t.CGJ(y.triggerDate(h.id,n))}),t.wVc(1,"tuiWeekdayHandler"),t.C$Y()}if(2&s){const e=t.GaO().tuiLet,o=t.GaO(2).$implicit;let n;t.E7m("disabledItemHandler",t.kDX(1,2,o.weekday))("value",null!==(n=e)&&void 0!==n?n:t.q4q(4,D))}}function k(s,f){if(1&s&&(t.I0R(0,"span",13),t.OEk(1),t.wVc(2,"date"),t.wVc(3,"fromTuiDay"),t.C$Y()),2&s){const e=f.$implicit;t.yG2(),t.cNF(t.g7$(2,1,t.kDX(3,4,e),"d MMMM y"))}}function L(s,f){1&s&&(t.I0R(0,"span",14),t.aS0(1,15),t.C$Y())}function A(s,f){if(1&s&&(t.I0R(0,"tui-hosted-dropdown",12)(1,"button",16),t.SAx(2),t.aS0(3,17),t.k70(),t.C$Y()()),2&s){t.GaO(2);const e=t.Gew(2);t.E7m("content",e)}}function b(s,f){if(1&s&&(t.I0R(0,"div",5),t.c53(1,k,4,6,"span",18,t.oxv,!1,L,2,0,"span",19),t.yuY(4,A,4,1,"tui-hosted-dropdown",12),t.C$Y()),2&s){const e=t.GaO().tuiLet,o=t.GaO(4);let n;t.yG2(),t.oho(null!==(n=e)&&void 0!==n?n:t.q4q(2,D)),t.yG2(3),t.C0Y(4,o.editable?4:-1)}}function z(s,f){if(1&s){const e=t.KQA();t.SAx(0),t.yuY(1,Y,2,5,"ng-template",null,7,t.gJz),t.I0R(3,"div",8)(4,"tui-checkbox-block",9),t.qCj("ngModelChange",function(){t.usT(e);const n=t.GaO(2).$implicit,h=t.GaO(2);return t.CGJ(h.triggerSelection(n.id))}),t.OEk(5),t.C$Y(),t.yuY(6,b,5,3,"div",10),t.C$Y(),t.k70()}if(2&s){const e=f.tuiLet,o=t.GaO(2).$implicit,n=t.GaO(2);t.yG2(4),t.E7m("readOnly",!n.editable)("ngModel",void 0!==e),t.yG2(),t.oRS(" ",o.name," "),t.yG2(),t.C0Y(6,null!=e?6:-1)}}function K(s,f){if(1&s&&t.yuY(0,z,7,4,"ng-container",6),2&s){const e=t.GaO().$implicit,o=t.GaO(2);t.E7m("tuiLet",o.selections()[e.id])}}function H(s,f){1&s&&t.yuY(0,K,1,1,"ng-container"),2&s&&t.C0Y(0,f.$implicit.id?0:-1)}function B(s,f){if(1&s&&(t.I0R(0,"tr",2)(1,"td",3)(2,"p",4),t.OEk(3),t.wVc(4,"weekday"),t.C$Y()(),t.I0R(5,"td",3)(6,"div",5),t.c53(7,H,1,1,null,null,U),t.C$Y()()()),2&s){const e=f.$implicit,o=t.GaO();t.yG2(3),t.cNF(t.kDX(4,1,e)),t.yG2(4),t.oho(o.turnsPerDay()[e])}}let W=(()=>{class s{constructor(){this.turnsService=(0,t.uUt)(_.K),this.destroy$=(0,t.uUt)(a.UF),this.date=(0,t.uUt)(u.y),this.outputMamiChanges=new t._w7,this.loading=(0,t.OCB)(!1),this.selections=(0,t.OCB)({}),this.editable$=(0,t.OCB)(!1),this.allTurns=(0,t.OCB)([]),this.turnsPerDay=(0,t.S6b)(()=>{const e=this.allTurns().filter(n=>null!=n.weekday),o={};for(const n of e){if(null==n.weekday||null==n.weekday)throw new Error("Turns must have a weekday");(this.editable$()||n.id&&Object.keys(this.selections()).includes(n.id.toString()))&&(o[n.weekday]||=[],o[n.weekday].push(n))}return o}),this.weekdays=(0,t.S6b)(()=>Object.keys(this.turnsPerDay()).map(Number)),this.lastOutput=null}set turns(e){this.selections.update(o=>(e.forEach(n=>{if(!n.id)throw new Error("Turn id is missing");o[n.id]||=[]}),o))}set dates(e){this.selections.update(o=>(e.forEach(n=>{if(!n.reservation_turn_id)throw new Error("Turn id is missing");if(!n.date)throw new Error("Date is missing or invalid",n.date);o[n.reservation_turn_id]||=[],o[n.reservation_turn_id].push((0,I._0)(n.date))}),o))}set editable(e){this.editable$.set(e)}get editable(){return this.editable$()}set item(e){this.selections.set({}),this.turns=e?.turns??[],this.dates=e?.dates??[]}ngOnInit(){this.searchTurns()}triggerSelection(e){this.selections.update(o=>(e in o?delete o[e]:o[e]=[],o)),this.emitChanges()}triggerDate(e,o){if(!e)throw new Error("Invalid turn id"+e);if(!o)throw new Error("Invalid day"+o);this.selections.update(n=>{n[e]||=[];const h=n[e].findIndex(y=>y.day===o.day);return-1===h?n[e].push(o):n[e].splice(h,1),n[e]=n[e].sort((y,C)=>y.dayAfter(C)?1:-1),n}),this.emitChanges()}emitChanges(){const e=[],o=[],n=this.selections();Object.keys(n).forEach(y=>{const C=parseInt(y);if(0===n[C].length)o.push(C);else for(const P of n[C]){const $=this.date.transform(P.toUtcNativeDate(),"yyyy-MM-dd");$?e.push({turn_id:C,date:$}):console.error("Invalid date",P)}});const h={dates:e,turns:o};(null===this.lastOutput||JSON.stringify(this.lastOutput)!==JSON.stringify(h))&&this.outputMamiChanges.emit(h)}searchTurns(){this.loading.set(!0),this.turnsService.search({per_page:1e3}).pipe((0,M.a)(this.destroy$),(0,S.U)(()=>this.loading.set(!1)),(0,w.k)(e=>e.items),(0,x.a)(e=>(console.error(e),(0,R.of)([])))).subscribe({next:e=>{this.allTurns.set(e)}})}static#t=this.\u0275fac=function(o){return new(o||s)};static#e=this.\u0275cmp=t.In1({type:s,selectors:[["app-select-turns-paymentv2"]],inputs:{turns:"turns",dates:"dates",editable:"editable",item:"item"},outputs:{outputMamiChanges:"outputMamiChanges"},standalone:!0,features:[t.M5G([a.UF]),t.UHJ],decls:5,vars:2,consts:()=>{let e,o;return e="Always",o="Change dates",[["size","xl",3,"overlay","showLoader"],[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],[1,"text-xl"],[1,"flex","flex-col"],[4,"tuiLet"],["selectDatesTemplate",""],[1,"flex","flex-row","items-center","mb-5"],[1,"me-1",3,"readOnly","ngModel","ngModelChange"],["class","flex flex-col"],["tuiPreventDefault","mousedown",3,"disabledItemHandler","value","dayClick"],[3,"content"],[1,"mx-2","mb-1"],[1,"text-xl","text-green-500"],e,["tuiButton","","tuiHint","Modifica date","appearance","outline","size","s","type","button"],o,["class","mx-2 mb-1"],["class","text-xl text-green-500"],["class","tui-table__tr tui-table__tr_border_none"]]},template:function(o,n){1&o&&(t.I0R(0,"tui-loader",0)(1,"table",1)(2,"tbody"),t.c53(3,B,9,3,"tr",20,t.oxv),t.C$Y()()()),2&o&&(t.E7m("overlay",!0)("showLoader",n.loading()),t.yG2(3),t.oho(n.weekdays()))},dependencies:[c.G,m.i,m.I,l.y,l.ue,l._G,g.Sk,g.Cb,u.y,E.GE,E.Qw,N,O.ms,v.y,v.I,i.CI,i.Kw,p.kR,p.ew,F],changeDetection:0})}return s})()},9772:(T,d,r)=>{r.d(d,{CU:()=>t,ye:()=>l});const u=(new Date).getTimezoneOffset()/60;function t(c,_=u){return"string"==typeof c&&c.length>0&&c.match(/\d{2}:\d{2}/)?`${Number(c.split(":")[0])-_}:${c.split(":")[1]}`:(console.error("Invalid string provided to strTimeTimezone",{string:c}),"")}function l(c,_=u){return t(c,-1*_)}},964:(T,d,r)=>{r.d(d,{Ez:()=>E,Q1:()=>v,QX:()=>a,Qx:()=>l,_0:()=>O,ay:()=>c,e6:()=>t,yc:()=>_});var u=r(400);const t=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;function l(i,m){return new Date(`${i.formattedYear}-${i.formattedMonthPart}-${i.formattedDayPart} ${m.toString()}`).toISOString()}function c(i){if(!("string"==typeof i&&i.length>0&&i.match(t)))return console.error("Invalid string provided to isoStringToTuiDay",{isoString:i}),null;const m=new Date(i);return new u.EK(m.getFullYear(),m.getMonth()+1,m.getDate())}function _(i){if("string"==typeof i&&i.length>0&&i.match(/^\d{4}-\d{1,2}-\d{1,2}\s{1}00:00$/)&&(i=i.split(" ")[0]),!("string"==typeof i&&i.length>0&&i.match(/^\d{4}-\d{1,2}-\d{1,2}$/)))return console.error("Invalid string provided to stringToTuiDay. Expected format YYYY-MM-DD, got",{str:i}),null;const{day:m,month:M,year:S}=u.EK.parseRawDateString(i,"YMD");return new u.EK(S,M,m)}function a(i){if(!("string"==typeof i&&i.length>0&&i.match(t)))return console.error("Invalid string provided to isoStringToTuiTime",{isoString:i}),null;const m=new Date(i);return new u.uc(m.getHours(),m.getMinutes())}function E(i){return new Date(`1970-01-01 ${i.toString()}`).toISOString()}function O(i){return new u.EK(i.getFullYear(),i.getMonth(),i.getDate())}function v(i){return new u.uc(i.getHours(),i.getMinutes())}},1960:(T,d,r)=>{r.d(d,{u:()=>c});var u=r(8400),t=r(5136);class l extends u.w{constructor(a){super(a),this.date=a.date?new Date(a.date):void 0,this.reservation_turn_id=a.reservation_turn_id,this.group_id=a.group_id,this.reservation_turn=a.reservation_turn?new t.e(a.reservation_turn):void 0}}class c extends u.w{constructor(a){super(a),this.turns=[],this.dates=[],this.title=a.title,this.status=a.status,this.preorder_type=a.preorder_type,this.payment_value=a.payment_value,this.message=a.message,this.turns=(a.turns||[]).map(p=>new t.e(p)),this.dates=(a.dates||[]).map(p=>new l(p))}}},5136:(T,d,r)=>{r.d(d,{e:()=>c});var u=r(8400),t=r(9772),l=r(1960);class c extends u.w{constructor(a){super(a),this.name=a.name,this.weekday=a.weekday,this.step=a.step,this.valid_times=a.valid_times,this.starts_at=a.starts_at?(0,t.CU)(a.starts_at):void 0,this.ends_at=a.ends_at?(0,t.CU)(a.ends_at):void 0,this.preorder_reservation_group=a.preorder_reservation_group?new l.u(a.preorder_reservation_group):void 0}}},2516:(T,d,r)=>{r.d(d,{G:()=>t});var u=r(4496);let t=(()=>{class l{constructor(){this.weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]}transform(_){return"number"!=typeof _&&"string"==typeof _&&(_=parseInt(_)),"number"==typeof _&&_>=0&&_<=6?this.weekdays[_]:null}static#t=this.\u0275fac=function(a){return new(a||l)};static#e=this.\u0275pipe=u.UTH({name:"weekday",type:l,pure:!0,standalone:!0})}return l})()},4251:(T,d,r)=>{r.d(d,{e:()=>c});var u=r(6012),t=r(1960),l=r(4496);let c=(()=>{class _ extends u.s{constructor(){super(t.u,"admin/preorder_reservation_groups")}static#t=this.\u0275fac=function(g){return new(g||_)};static#e=this.\u0275prov=l.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()},7556:(T,d,r)=>{r.d(d,{K:()=>c});var u=r(6012),t=r(5136),l=r(4496);let c=(()=>{class _ extends u.s{constructor(){super(t.e,"admin/reservation_turns")}static#t=this.\u0275fac=function(g){return new(g||_)};static#e=this.\u0275prov=l.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})()}}]);