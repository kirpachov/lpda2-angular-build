"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9312],{6532:(O,p,e)=>{e.d(p,{y:()=>T});var t=e(4496),s=e(3480),r=e(6616);const i="lpda2-e5d03c044b1729d3c4bf2975423c8eea";let c=(()=>{class _{constructor(){this.storage=(0,t.uUt)(r.s),this.language=(0,t.S6b)(()=>this.writableLanguage()),this.defaultLanguage=(0,t.uUt)(t.KYU),this.writableLanguage=(0,t.OCB)(this.defaultLanguage),this.loadSession()}setLanguage(h){this.writableLanguage.set(h),this.saveSession()}saveSession(){this.storage.set(i,this.encodeSession())}loadSession(){const h=this.storage.get(i);h&&this.decodeSession(h)}encodeSession(){return{language:this.language()}}decodeSession(h){h.language&&h.language.length>0&&this.setLanguage(h.language)}static#t=this.\u0275fac=function(R){return new(R||_)};static#e=this.\u0275prov=t.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();var l=e(8212),o=e(466),n=e(4336),d=e(1560),g=e(1368),M=e(7364),y=e(381),A=e(1236),D=e(5676);function U(_,b){if(1&_){const h=t.KQA();t.I0R(0,"button",9),t.qCj("click",function(){t.usT(h);const L=t.GaO().$implicit,S=t.GaO(2);return t.CGJ(S.setLanguage(L.code))}),t.I0R(1,"span",3)(2,"span",4),t.OEk(3),t.C$Y(),t.I0R(4,"mat-icon"),t.OEk(5,"open_in_new"),t.C$Y()()()}if(2&_){const h=t.GaO().$implicit;t.yG2(3),t.cNF(h.name)}}function P(_,b){if(1&_&&t.yuY(0,U,6,1,"button",8),2&_){const h=b.$implicit,R=t.GaO(2);t.C0Y(0,h.code!=R.session.language()?0:-1)}}function f(_,b){if(1&_&&(t.I0R(0,"tui-data-list",7),t.c53(1,P,1,1,null,null,t.oxv),t.C$Y()),2&_){const h=t.GaO();t.yG2(),t.oho(h.languages)}}const C=_=>({rotate180:_});let T=(()=>{class _{constructor(){this.destroy$=(0,t.uUt)(s.UF),this.session=(0,t.uUt)(c),this.router=(0,t.uUt)(A.E5),this.languages=y.e}setLanguage(h){this.session.setLanguage(h),location.replace(`/${h}/${D.I?"#":""}${this.router.url}`)}static#t=this.\u0275fac=function(R){return new(R||_)};static#e=this.\u0275cmp=t.In1({type:_,selectors:[["app-admin-language-switcher"]],standalone:!0,features:[t.M5G([s.UF]),t.UHJ],decls:11,vars:7,consts:[[3,"content"],["dropdown",""],["appearance","outline","tuiButton","","size","s","type","button"],[1,"flex","items-center"],[1,"me-1"],[1,"animation-speed-2",3,"ngClass"],["content",""],["size","m"],["tuiOption","","type","button"],["tuiOption","","type","button",3,"click"]],template:function(R,L){if(1&R&&(t.I0R(0,"tui-hosted-dropdown",0,1)(2,"button",2)(3,"span",3)(4,"span",4),t.OEk(5),t.wVc(6,"language"),t.C$Y(),t.I0R(7,"mat-icon",5),t.OEk(8,"expand_more"),t.C$Y()()()(),t.yuY(9,f,3,0,"ng-template",null,6,t.gJz)),2&R){const S=t.Gew(1),z=t.Gew(10);t.E7m("content",z),t.yG2(5),t.cNF(t.kDX(6,3,L.session.language())),t.yG2(2),t.E7m("ngClass",t.S45(5,C,S.open))}},dependencies:[l.CI,l.Kw,o.GE,o.Qw,d.qL,n.A$,n.yi,n.sP,M.e,g.QF],encapsulation:2,changeDetection:0})}return _})()},3040:(O,p,e)=>{e.d(p,{M:()=>l});var t=e(4496),s=e(1128),r=e(8212),i=e(1560);const c=["*"];let l=(()=>{class o{constructor(){this.notifications=(0,t.uUt)(s.E),this.appearance="outline",this.size="m",this.copyHandler=this.defaultCopyHandler,this.message="Copied"}copy(){this.copyHandler(this.content??null)}defaultCopyHandler(d){d&&navigator.clipboard.writeText(d).then(g=>{this.notifications.fireSnackBar(this.message)})}static#t=this.\u0275fac=function(g){return new(g||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-copy-content"]],inputs:{content:"content",appearance:"appearance",size:"size",copyHandler:"copyHandler",message:"message"},standalone:!0,features:[t.UHJ],ngContentSelectors:c,decls:4,vars:2,consts:[["tuiIconButton","","type","button",1,"ms-2",3,"appearance","size","click"]],template:function(g,M){1&g&&(t.kPM(),t._Xx(0),t.I0R(1,"button",0),t.qCj("click",function(){return M.copy()}),t.I0R(2,"mat-icon"),t.OEk(3,"content_copy"),t.C$Y()()),2&g&&(t.yG2(),t.E7m("appearance",M.appearance)("size",M.size))},dependencies:[r.CI,r.Kw,i.qL],styles:["[_nghost-%COMP%]{display:flex;align-items:center}"],changeDetection:0})}return o})()},8640:(O,p,e)=>{e.d(p,{O:()=>c});var t=e(7692),s=e(6264),r=e(4496);const i=["*"];let c=(()=>{class l{constructor(){this.showLoader=!1}static#t=this.\u0275fac=function(d){return new(d||l)};static#e=this.\u0275cmp=r.In1({type:l,selectors:[["app-no-items"]],inputs:{showLoader:"showLoader"},standalone:!0,features:[r.UHJ],ngContentSelectors:i,decls:4,vars:3,consts:[[1,"block","w-100","h-100",3,"overlay","showLoader","size"],["alt","not found","src","assets/img/not-found.svg","tuiSlot","top",1,"image"]],template:function(d,g){1&d&&(r.kPM(),r.I0R(0,"tui-loader",0)(1,"tui-block-status"),r.wR5(2,"img",1),r._Xx(3),r.C$Y()()),2&d&&r.E7m("overlay",!0)("showLoader",g.showLoader)("size","xl")},dependencies:[t.Sk,t.Cb,s.eA,s.M$,s.Gu]})}return l})()},6424:(O,p,e)=>{e.d(p,{w:()=>i});var t=e(4496);function s(c,l){1&c&&(t.I0R(0,"div",0),t.SAx(1),t.aS0(2,1),t.k70(),t.C$Y())}function r(c,l){1&c&&(t.I0R(0,"div",2),t.SAx(1),t.aS0(2,3),t.k70(),t.C$Y())}let i=(()=>{class c{ngOnChanges(){this.status="active"==this.item?.status?"active":"inactive"}static#t=this.\u0275fac=function(n){return new(n||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-preorder-reservation-group-status"]],inputs:{item:"item"},standalone:!0,features:[t.SYr,t.UHJ],decls:2,vars:1,consts:()=>{let o,n;return o="Active",n="Inactive",[[1,"text-xl","border-success-dark","rounded","text-success-dark"],o,[1,"text-xl","border-secondary","rounded","text-secondary"],n]},template:function(n,d){if(1&n&&t.yuY(0,s,3,0)(1,r,3,0),2&n){let g;t.C0Y(0,"active"===(g=d.status)?0:"inactive"===g?1:-1)}}})}return c})()},6308:(O,p,e)=>{e.d(p,{I:()=>r});var t=e(4496);const s=["*"];let r=(()=>{class i{static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275cmp=t.In1({type:i,selectors:[["app-public-image-header"]],inputs:{image:"image"},standalone:!0,features:[t.UHJ],ngContentSelectors:s,decls:5,vars:3,consts:[[1,"h-[350px]","mb-3","overflow-hidden","flex","items-center","justify-center","bg-cover","bg-no-repeat","bg-center"],[1,"w-fit","text-white"],[1,"text-center","font-bold","text-5xl","block","mb-5"],[1,"bg-white","md:w-[300px]","h-[2px]"]],template:function(o,n){1&o&&(t.kPM(),t.I0R(0,"div",0)(1,"div",1)(2,"h1",2),t._Xx(3),t.C$Y(),t.wR5(4,"hr",3),t.C$Y()()),2&o&&t.aUe("background-image: url(",n.image,")")},encapsulation:2})}return i})()},3264:(O,p,e)=>{e.d(p,{Y:()=>f});var t=e(4496),s=e(6504),r=e(3480),i=e(1183),c=e(3616),l=e(4e3),o=e(6684),n=e(5188),d=e(4336),g=e(8048),M=e(1368),y=e(9368);function A(C,T){1&C&&t.wR5(0,"app-reservation-status",3),2&C&&t.E7m("status",T.$implicit)}function D(C,T){if(1&C&&(t.SAx(0),t.I0R(1,"button",5),t.wR5(2,"app-reservation-status",3),t.C$Y(),t.k70()),2&C){const _=T.$implicit;t.yG2(),t.E7m("value",_),t.yG2(),t.E7m("status",_)}}function U(C,T){if(1&C&&(t.I0R(0,"tui-data-list"),t.yuY(1,D,3,2,"ng-container",4),t.C$Y()),2&C){const _=t.GaO();t.yG2(),t.E7m("ngForOf",_.statuses)}}const P=["*"];let f=(()=>{class C{constructor(){this.destroy$=(0,t.uUt)(r.UF),this.control=new s.Ku(null),this.statuses=[...i.I5],this.inputSize="m",this.valueChanges$=this.control.valueChanges.pipe((0,c.a)(this.destroy$),(0,l.a)(),(0,o.I)(()=>this.control.valid)),this.showCleaner=!0}ngOnInit(){}registerOnChange(_){this.valueChanges$.subscribe(_)}registerOnTouched(_){this.valueChanges$.subscribe(_)}setDisabledState(_){_?this.control.disable():this.control.enable()}writeValue(_){if(null==_||"string"==typeof _)return this.control.setValue(_);console.warn("Invalid value for reservation status select:",_)}static#t=this.\u0275fac=function(b){return new(b||C)};static#e=this.\u0275cmp=t.In1({type:C,selectors:[["app-reservation-status-select"]],inputs:{inputSize:"inputSize",showCleaner:"showCleaner"},standalone:!0,features:[t.M5G([{provide:s.Y6,useExisting:(0,t.wd)(()=>C),multi:!0},r.UF]),t.UHJ],ngContentSelectors:P,decls:5,vars:4,consts:[["valueContent",""],[3,"valueContent","tuiTextfieldCleaner","tuiTextfieldSize","formControl"],[4,"tuiDataList"],[3,"status"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(b,h){if(1&b&&(t.kPM(),t.yuY(0,A,1,1,"ng-template",null,0,t.gJz),t.I0R(2,"tui-select",1),t._Xx(3),t.yuY(4,U,2,1,"tui-data-list",2),t.C$Y()),2&b){const R=t.Gew(1);t.yG2(2),t.E7m("valueContent",R)("tuiTextfieldCleaner",h.showCleaner)("tuiTextfieldSize",h.inputSize)("formControl",h.control)}},dependencies:[s.sl,s.ue,s.ug,n.my,n.cP,n.uO,d.A$,d.yi,d.sP,d.Ux,M.ay,g.aS,g.es,g.rD,y.a],styles:["[_nghost-%COMP%]{display:block;min-width:150px}"],changeDetection:0})}return C})()},9368:(O,p,e)=>{e.d(p,{a:()=>i});var t=e(1183),s=e(4496);function r(c,l){if(1&c&&s.OEk(0),2&c){const o=s.GaO();s.oRS(" ",o.translations[o.status].title,"\n")}}let i=(()=>{class c{constructor(){this.translations=t.au}static#t=this.\u0275fac=function(n){return new(n||c)};static#e=this.\u0275cmp=s.In1({type:c,selectors:[["app-reservation-status"]],inputs:{status:"status"},standalone:!0,features:[s.UHJ],decls:1,vars:1,template:function(n,d){1&n&&s.yuY(0,r,1,1),2&n&&s.C0Y(0,d.status?0:-1)}})}return c})()},8780:(O,p,e)=>{e.d(p,{I:()=>A});var t=e(4496),s=e(8304),r=e(3480),i=e(1560),c=e(8212),l=e(1236),o=e(1128),n=e(3616),d=e(8824),g=e(9938),M=e(8256),y=e(2208);let A=(()=>{class D{constructor(){this.service=(0,t.uUt)(s.S),this.destroy$=(0,t.uUt)(r.UF),this.route=(0,t.uUt)(l.gV),this.notifications=(0,t.uUt)(o.E),this.loading=(0,t.OCB)(!1),this.created=new t._w7,this.cancelled=new t._w7}submit(P){this.loading.set(!0),this.service.create(P).pipe((0,n.a)(this.destroy$),(0,d.U)(()=>this.loading.set(!1))).subscribe({next:f=>{this.notifications.fireSnackBar("Reservation saved."),this.created.emit(f)},error:f=>{this.formComponent&&g.y.assignErrorsToForm(this.formComponent.form,f),this.notifications.error((0,M.mk)(f)||"Something went wrong in the save.")}})}cancel(){confirm("Are you sure you want to cancel?")&&this.cancelled.emit()}static#t=this.\u0275fac=function(f){return new(f||D)};static#e=this.\u0275cmp=t.In1({type:D,selectors:[["app-create-reservation"]],viewQuery:function(f,C){if(1&f&&t.CC$(y.G,5),2&f){let T;t.wto(T=t.Gqi())&&(C.formComponent=T.first)}},outputs:{created:"created",cancelled:"cancelled"},standalone:!0,features:[t.M5G([r.UF]),t.UHJ],decls:8,vars:1,consts:()=>{let P;return P="New reservation",[[1,"flex","items-center","justify-between"],P,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(f,C){1&f&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return C.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-admin-reservation-form",3),t.qCj("cancelled",function(){return C.cancel()})("formSubmit",function(_){return C.submit(_)}),t.C$Y()),2&f&&(t.yG2(7),t.E7m("loading",C.loading()))},dependencies:[y.G,i.qL,c.CI,c.Kw],encapsulation:2})}return D})()},1551:(O,p,e)=>{e.d(p,{G:()=>i});var t=e(4496),s=e(372);function r(c,l){if(1&c&&(t.I0R(0,"tr",1)(1,"td",2)(2,"span"),t.OEk(3),t.wVc(4,"commonTranslate"),t.C$Y()(),t.I0R(5,"td",2),t.OEk(6),t.C$Y()()),2&c){const o=l.$implicit;t.yG2(3),t.cNF(t.kDX(4,2,o[0])),t.yG2(3),t.oRS(" ",o[1]," ")}}let i=(()=>{class c{constructor(){this.translations$=(0,t.OCB)(null),this.values$=(0,t.S6b)(()=>Object.entries(this.translations$()??{}))}set translations(o){this.translations$.set(o??null)}get translations(){return this.translations$()}static#t=this.\u0275fac=function(n){return new(n||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-show-translations"]],inputs:{translations:"translations"},standalone:!0,features:[t.UHJ],decls:4,vars:0,consts:[[1,"tui-table"],[1,"tui-table__tr","tui-table__tr_border_none"],[1,"tui-table__td"],["class","tui-table__tr tui-table__tr_border_none"]],template:function(n,d){1&n&&(t.I0R(0,"table",0)(1,"tbody"),t.c53(2,r,7,4,"tr",3,t.oxv),t.C$Y()()),2&n&&(t.yG2(2),t.oho(d.values$()))},dependencies:[s.c],encapsulation:2})}return c})()},9860:(O,p,e)=>{e.d(p,{EF:()=>t,Qn:()=>s,Y9:()=>r});const t=["home-landing","home-about","home-menu","home-instagram","home-reserve","new-reservation-form","existing-reservation-form","openings_monday","openings_tuesday","openings_wednesday","openings_thursday","openings_friday","openings_saturday","openings_sunday","cancel-reservation"];function s(i){return"string"==typeof i&&i.length>0&&t.includes(i)}const r={"home-landing":"Main page, right after the first section.","home-about":"Main page, right after the 'about us' section.","home-menu":"Main page, right after the 'menu' section.","home-instagram":"Main page, right after the Instagram section.","home-reserve":"Main page, inside the booking section.","new-reservation-form":"Public booking form.","existing-reservation-form":"Existing booking page.",openings_monday:"Opening hours for Monday.",openings_tuesday:"Opening hours for Tuesday.",openings_wednesday:"Opening hours for Wednesday.",openings_thursday:"Opening hours for Thursday.",openings_friday:"Opening hours for Friday.",openings_saturday:"Opening hours for Saturday.",openings_sunday:"Opening hours for Sunday.","cancel-reservation":"Message displayed to those who wish to cancel the reservation."}},1183:(O,p,e)=>{e.d(p,{I5:()=>t,au:()=>s,sl:()=>r});const t=["active","arrived","deleted","noshow","cancelled"],s={active:{title:"Waiting"},arrived:{title:"Arrived"},cancelled:{title:"Canceled"},deleted:{title:"Deleted"},noshow:{title:"No show"}};function r(i){return"string"==typeof i&&[...t].includes(i)}},372:(O,p,e)=>{e.d(p,{c:()=>r});var t=e(4496);const s={active:"Active",banned:"Banned",not_verified:"Unverified",unsubscribed:"Unsubscribed",male:"Male",female:"Female",address:"Address",phone:"Telephone",email:"Email",whatsapp_number:"WhatsApp number",whatsapp_url:"WhatsApp URL",facebook_url:"Facebook URL",instagram_url:"Instagram URL",tripadvisor_url:"TripAdvisor URL",homepage_url:"URL Homepage",google_url:"Google URL",it:"Italian",en:"English",minutes:"Minutes",hours:"Hours",days:"Days",weeks:"Weeks",minute:"Minute",hour:"Now",day:"Day",week:"Week"};let r=(()=>{class i{transform(l){return"string"==typeof l&&l.length>0?s[l]||l:""}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275pipe=t.UTH({name:"commonTranslate",type:i,pure:!0,standalone:!0})}return i})()},4792:(O,p,e)=>{e.d(p,{M:()=>l});const s=["address","email","phone","whatsapp_number","whatsapp_url","facebook_url","instagram_url","tripadvisor_url","homepage_url","google_url"];var c=e(4496);let l=(()=>{class o{constructor(){this.mapping={address:"Restaurant address.",email:"Email address",facebook_url:"URL to the restaurant's Facebook page",google_url:"URL to the Google Maps page of the restaurant",homepage_url:"Link to the homepage of this site",instagram_url:"Link to the restaurant's Instagram page",phone:"International phone number with country code",tripadvisor_url:"Link to the Tripadvisor page",whatsapp_number:"Phone number enabled for WhatsApp."}}transform(d){return function r(o){return"string"==typeof o&&s.includes(o)}(d)?this.mapping[d]??null:null}static#t=this.\u0275fac=function(g){return new(g||o)};static#e=this.\u0275pipe=c.UTH({name:"humanizeContactKey",type:o,pure:!0,standalone:!0})}return o})()},1480:(O,p,e)=>{e.d(p,{s:()=>r});var t=e(9860),s=e(4496);let r=(()=>{class i{transform(l){return(0,t.Qn)(l)?`[${l}]: ${t.Y9[l]??""}`:null}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275pipe=s.UTH({name:"publicMessageKey",type:i,pure:!0,standalone:!0})}return i})()},5324:(O,p,e)=>{e.d(p,{s:()=>r});var t=e(6772),s=e(4496);let r=(()=>{class i extends t.A{constructor(){super("/admin/contacts")}search(){return this.http.get("/")}show(l){return this.http.get(`/${l}`)}update(l,o){return"object"==typeof o&&null!=o&&(o=JSON.stringify(o)),this.http.patch(`/${l}`,{value:o})}static#t=this.\u0275fac=function(o){return new(o||i)};static#e=this.\u0275prov=s.wxM({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})()},6500:(O,p,e)=>{e.d(p,{o:()=>c});var t=e(6012),s=e(8400);class r extends s.w{constructor(o){super(o),this.key=o.key,this.text=o.text,this.translations=o.translations}}var i=e(4496);let c=(()=>{class l extends t.s{constructor(){super(r,"admin/public_messages")}static#t=this.\u0275fac=function(d){return new(d||l)};static#e=this.\u0275prov=i.wxM({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},3732:(O,p,e)=>{e.d(p,{u:()=>i});var t=e(6012),s=e(5812),r=e(4496);let i=(()=>{class c extends t.s{constructor(){super(s.i,"admin/users")}static#t=this.\u0275fac=function(n){return new(n||c)};static#e=this.\u0275prov=r.wxM({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},2204:(O,p,e)=>{e.d(p,{Ep:()=>q,Ix:()=>Z,Up:()=>x,_Q:()=>K});var t=e(4496),s=e(168),r=e(1096),i=e(832),c=e(1800),l=e(4164),o=e(4680),n=e(4392),d=e(900),g=e(2528),M=e(3480),y=e(3412),A=e(528),D=e(7036),U=e(4704),P=e(6684),f=e(7368),C=e(3616),T=e(3656),_=e(9880),b=e(8976),h=e(5944),R=e(3972),L=e(7176),S=e(1040),z=e(1368);const k=["focusableElement"];function G(u,E){if(1&u&&t.wR5(0,"tui-svg",9),2&u){const a=E.polymorpheusOutlet,m=t.GaO(2);t.eAK("t-icon_open",m.open),t.E7m("src",a)}}function W(u,E){if(1&u&&(t.SAx(0),t.yuY(1,G,1,3,"tui-svg",8),t.k70()),2&u){const a=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",a.options.iconLarge)}}function F(u,E){if(1&u&&(t.SAx(0),t.OEk(1),t.k70()),2&u){const a=E.polymorpheusOutlet;t.yG2(),t.oRS(" ",a," ")}}function N(u,E){if(1&u&&(t.I0R(0,"div",11),t.yuY(1,F,2,1,"ng-container",12),t.C$Y()),2&u){const a=t.GaO(2);t.yG2(),t.E7m("polymorpheusOutlet",a.lazyContent)}}function Y(u,E){if(1&u&&t.yuY(0,N,2,1,"div",10),2&u){const a=t.GaO();t.E7m("ngIf",a.lazyContent)}}function H(u,E){1&u&&(t.I0R(0,"div",13),t._Xx(1,1),t.C$Y())}const V=["*",[["","tuiAccordionItemContent",""]]],j=["*","[tuiAccordionItemContent]"],X=[[["tui-accordion-item"]]],Q=["tui-accordion-item"];let x=(()=>{class u extends S.sv{constructor(a,m){super(a,m)}}return u.\u0275fac=function(a){return new(a||u)(t.GI1(t.Yw2,2),t.GI1(t.kD9))},u.\u0275dir=t.Sc5({type:u,selectors:[["ng-template","tuiAccordionItemContent",""]],features:[t.eg9]}),u})(),J=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275dir=t.Sc5({type:u,selectors:[["","tuiAccordionItemContent","",5,"ng-template"]]}),u})(),K=(()=>{class u extends c.mK{constructor(a,m,v){super(),this.cdr=a,this.mode$=m,this.options=v,this.noPadding=!1,this.showArrow=!0,this.borders="all",this.size="m",this.disabled=!1,this.disableHover=!1,this.open=!1,this.async=!1,this.openChange=new t._w7}get nativeFocusableElement(){return this.disabled||!this.focusableElement?null:this.focusableElement.nativeElement}get focused(){return(0,l.ER)(this.nativeFocusableElement)}onFocused(a){this.updateFocused(a)}onFocusVisible(a){this.updateFocusVisible(a)}onRowToggle(){this.disabled||this.updateOpen(!this.open)}onItemKeyDownEsc(a){this.open&&(a.stopPropagation(),this.updateOpen(!1))}close(){this.updateOpen(!1),this.cdr.markForCheck()}updateOpen(a){this.open!==a&&(this.open=a,this.openChange.emit(a))}}return u.\u0275fac=function(a){return new(a||u)(t.GI1(t.kD9),t.GI1(h.Yx),t.GI1(L.qu))},u.\u0275cmp=t.In1({type:u,selectors:[["tui-accordion-item"]],contentQueries:function(a,m,v){if(1&a&&(t.szK(v,J,5),t.szK(v,x,5)),2&a){let I;t.wto(I=t.Gqi())&&(m.eagerContent=I.first),t.wto(I=t.Gqi())&&(m.lazyContent=I.first)}},viewQuery:function(a,m){if(1&a&&t.CC$(k,5),2&a){let v;t.wto(v=t.Gqi())&&(m.focusableElement=v.first)}},hostVars:8,hostBindings:function(a,m){1&a&&t.qCj("$.data-mode.attr",function(){return m.mode$}),2&a&&(t.e48("data-borders",m.borders)("data-size",m.size),t.eAK("_no-padding",m.noPadding)("_has-arrow",m.showArrow)("_disabled",m.disabled))},inputs:{noPadding:"noPadding",showArrow:"showArrow",borders:"borders",size:"size",disabled:"disabled",disableHover:"disableHover",open:"open",async:"async"},outputs:{openChange:"openChange"},features:[t.M5G([(0,o.NK)(u),R.Ir]),t.eg9],ngContentSelectors:j,decls:9,vars:10,consts:[["automation-id","tui-accordion__item-wrapper",1,"t-wrapper"],["automation-id","tui-accordion__item-header","type","button",1,"t-header",3,"disabled","tuiFocusable","click","keydown.esc","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""],["automation-id","tui-accordion__item-title",1,"t-title"],[4,"ngIf"],[3,"async","expanded"],["tuiExpandContent",""],["class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-arrow","class","t-icon",3,"t-icon_open","src",4,"polymorpheusOutlet"],["automation-id","tui-accordion__item-arrow",1,"t-icon",3,"src"],["automation-id","tui-accordion__item-content","class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-content",1,"t-content"],[4,"polymorpheusOutlet"],[1,"t-content"]],template:function(a,m){1&a&&(t.kPM(V),t.I0R(0,"div",0)(1,"button",1,2),t.qCj("click",function(){return m.onRowToggle()})("keydown.esc",function(I){return m.onItemKeyDownEsc(I)})("tuiFocusedChange",function(I){return m.onFocused(I)})("tuiFocusVisibleChange",function(I){return m.onFocusVisible(I)}),t.I0R(3,"span",3),t._Xx(4),t.C$Y(),t.yuY(5,W,2,1,"ng-container",4),t.C$Y(),t.I0R(6,"tui-expand",5),t.yuY(7,Y,1,1,"ng-template",6)(8,H,2,0,"div",7),t.C$Y()()),2&a&&(t.yG2(),t.eAK("t-header_hoverable",!m.disableHover)("t-header_open",m.open),t.E7m("disabled",m.computedDisabled)("tuiFocusable",m.computedFocusable),t.yG2(4),t.E7m("ngIf",m.showArrow),t.yG2(),t.E7m("async",m.async)("expanded",m.open),t.yG2(2),t.E7m("ngIf",m.eagerContent))},dependencies:[T.Wu,_.st,s.O,r.h,i.w,z.u_,S.Af,_.kP],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}[data-borders=top-bottom][_nghost-%COMP%]{border-radius:0!important}.t-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-base-04);pointer-events:none}[_nghost-%COMP%]:not([data-borders])   .t-wrapper[_ngcontent-%COMP%]:after{border-width:0}[data-borders=all][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-borders=top-bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0}[data-borders=top][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-bottom-width:0}[data-borders=bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-top-width:0}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-text-01)}._focus-visible[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border:2px solid var(--tui-focus)}[_nghost-%COMP%]:not([data-mode])   .t-wrapper[_ngcontent-%COMP%]{background:var(--tui-base-01)}.t-header[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;width:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-bottom:1px solid var(--tui-base-04);min-height:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-01);cursor:pointer;text-align:left;outline:none}[data-mode=onDark][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{color:var(--tui-text-01-night);border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{border-color:var(--tui-text-01)}[_nghost-%COMP%]:not([data-borders])   .t-header[_ngcontent-%COMP%]{border-bottom-width:0;box-shadow:none}._has-arrow[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-right:.75rem}[data-mode=onDark][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}[data-mode=onLight][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear)}[data-size=s][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{font:var(--tui-font-text-m);min-height:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}._no-padding[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-left:0;padding-right:0}._disabled[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{cursor:default}.t-wrapper[_ngcontent-%COMP%]:hover:not([data-mode]) > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-base-02)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onDark] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onLight] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear)}.t-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}._has-arrow[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{margin-right:.5rem}.t-icon[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:1.5rem;height:1.5rem;margin-left:auto;color:var(--tui-base-06)}.t-icon_open[_ngcontent-%COMP%]{transform:rotate(180deg)}[data-mode][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:hover[data-mode]   .t-icon[_ngcontent-%COMP%]{opacity:.8}[data-mode=onDark][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onLight][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01)}[_nghost-%COMP%]:hover:not([data-mode])   .t-icon[_ngcontent-%COMP%]{color:var(--tui-base-07)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);padding:1.25rem;word-wrap:break-word}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);padding:1rem}'],changeDetection:0}),u})(),Z=(()=>{class u{constructor(a){this.destroy$=a,this.closeOthers=!0,this.rounded=!0,this.accordionItems=n.Jh}ngAfterContentInit(){const{accordionItems:a}=this,m=(0,d.jv)(a),v=m.pipe((0,D.c)(),(0,U.k)(([w,$])=>$.find(B=>!w.includes(B)&&B.open)),(0,P.I)(g.kF));(0,y.U)(m.pipe((0,f.G)(w=>(0,y.U)(...w.map($=>$.openChange.pipe((0,P.I)(A.Z),(0,U.k)(()=>$)))))),v).pipe((0,P.I)(()=>this.closeOthers),(0,C.a)(this.destroy$)).subscribe(w=>{a.forEach($=>{w!==$&&$.close()})})}}return u.\u0275fac=function(a){return new(a||u)(t.GI1(M.UF,2))},u.\u0275cmp=t.In1({type:u,selectors:[["tui-accordion"]],contentQueries:function(a,m,v){if(1&a&&t.szK(v,K,4),2&a){let I;t.wto(I=t.Gqi())&&(m.accordionItems=I)}},inputs:{closeOthers:"closeOthers",rounded:"rounded"},features:[t.M5G([M.UF])],ngContentSelectors:Q,decls:2,vars:2,consts:[["automation-id","tui-accordion__group","orientation","vertical","size","l","tuiGroup","",1,"t-group",3,"collapsed","rounded"]],template:function(a,m){1&a&&(t.kPM(X),t.I0R(0,"div",0),t._Xx(1),t.C$Y()),2&a&&t.E7m("collapsed",!0)("rounded",m.rounded)},dependencies:[b.Ko],styles:["[_nghost-%COMP%]{display:block}.t-group[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),u})(),q=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=t.a4G({type:u}),u.\u0275inj=t.s3X({imports:[[z.MD,r.O,i.I,s.C,S.Ux,T.Yt,b.Gy,_.kh]]}),u})()},6264:(O,p,e)=>{e.d(p,{Gu:()=>l,M$:()=>c,eA:()=>o});var t=e(4496),s=e(1368);const r=[[["","tuiSlot","top"]],[["h1"],["h2"],["h3"],["h4"],["h5"],["h6"]],"*",[["a"],["button"],["","tuiSlot","action"]]],i=["[tuiSlot='top']","h1,h2,h3,h4,h5,h6","*","a,button,[tuiSlot='action']"];let c=(()=>{class n{constructor(){this.card=!1}}return n.\u0275fac=function(g){return new(g||n)},n.\u0275cmp=t.In1({type:n,selectors:[["tui-block-status"]],hostVars:2,hostBindings:function(g,M){2&g&&t.eAK("_card",M.card)},inputs:{card:"card"},ngContentSelectors:i,decls:7,vars:0,consts:[[1,"t-block-image"],[1,"t-block-text"],[1,"t-block-actions"]],template:function(g,M){1&g&&(t.kPM(r),t.I0R(0,"div",0),t._Xx(1),t.C$Y(),t._Xx(2,1),t.I0R(3,"div",1),t._Xx(4,2),t.C$Y(),t.I0R(5,"div",2),t._Xx(6,3),t.C$Y())},styles:["tui-block-status{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;width:100%;height:100%}tui-root._mobile tui-block-status{padding:2rem}tui-block-status._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-root._mobile tui-block-status._card{padding:1.25rem}tui-root._mobile tui-block-status._card .t-block-image{margin-top:.75rem}tui-block-status .t-block-image{margin-bottom:2rem}tui-root._mobile tui-block-status .t-block-image{margin-bottom:1.5rem}tui-block-status .t-block-text{font:var(--tui-font-text-m);color:var(--tui-text-02);margin-bottom:2rem;white-space:pre-line}tui-root._mobile tui-block-status .t-block-text{margin-bottom:1.5rem}tui-block-status .t-block-actions{display:flex;flex-direction:column;align-items:center;width:100%}tui-block-status h1,tui-block-status h2,tui-block-status h3,tui-block-status h4,tui-block-status h5,tui-block-status h6{font:var(--tui-font-heading-4);margin-top:0;margin-bottom:1rem}tui-root._mobile tui-block-status h1,tui-root._mobile tui-block-status h2,tui-root._mobile tui-block-status h3,tui-root._mobile tui-block-status h4,tui-root._mobile tui-block-status h5,tui-root._mobile tui-block-status h6{font:var(--tui-font-heading-5);margin-bottom:.5rem}tui-block-status img{width:9rem;height:9rem}tui-root._mobile tui-block-status img{width:8rem;height:8rem}tui-block-status a:not(:last-child),tui-block-status button:not(:last-child){margin-bottom:.75rem}tui-root._mobile tui-block-status a:not(:last-child),tui-root._mobile tui-block-status button:not(:last-child){margin-bottom:.5rem}\n"],encapsulation:2,changeDetection:0}),n})(),l=(()=>{class n{constructor(){this.tuiSlot="top"}}return n.\u0275fac=function(g){return new(g||n)},n.\u0275dir=t.Sc5({type:n,selectors:[["","tuiSlot",""]],inputs:{tuiSlot:"tuiSlot"}}),n})(),o=(()=>{class n{}return n.\u0275fac=function(g){return new(g||n)},n.\u0275mod=t.a4G({type:n}),n.\u0275inj=t.s3X({imports:[[s.MD]]}),n})()}}]);