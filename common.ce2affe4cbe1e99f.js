"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9312],{6800:(P,g,e)=>{e.d(g,{y:()=>E});var t=e(4496),a=e(3480),s=e(8139),l=e(8212),c=e(466),u=e(4336),i=e(1560),o=e(1368),d=e(7364),_=e(381),f=e(1236);function T(m,h){if(1&m){const C=t.KQA();t.I0R(0,"button",9),t.qCj("click",function(){t.usT(C);const A=t.GaO().$implicit,S=t.GaO(2);return t.CGJ(S.setLanguage(A.code))}),t.I0R(1,"span",3)(2,"span",4),t.OEk(3),t.C$Y(),t.I0R(4,"mat-icon"),t.OEk(5,"open_in_new"),t.C$Y()()()}if(2&m){const C=t.GaO().$implicit;t.yG2(3),t.cNF(C.name)}}function y(m,h){if(1&m&&t.yuY(0,T,6,1,"button",8),2&m){const C=h.$implicit,M=t.GaO(2);t.C0Y(0,C.code!=M.session.language()?0:-1)}}function I(m,h){if(1&m&&(t.I0R(0,"tui-data-list",7),t.c53(1,y,1,1,null,null,t.oxv),t.C$Y()),2&m){const C=t.GaO();t.yG2(),t.oho(C.languages)}}const b=m=>({rotate180:m});let E=(()=>{class m{constructor(){this.destroy$=(0,t.uUt)(a.UF),this.session=(0,t.uUt)(s.U),this.router=(0,t.uUt)(f.E5),this.languages=_.e}setLanguage(C){this.session.setLanguage(C),location.replace(`/${C}/#${this.router.url}`)}static#t=this.\u0275fac=function(M){return new(M||m)};static#e=this.\u0275cmp=t.In1({type:m,selectors:[["app-admin-language-switcher"]],standalone:!0,features:[t.M5G([a.UF]),t.UHJ],decls:11,vars:7,consts:[[3,"content"],["dropdown",""],["appearance","outline","tuiButton","","size","s","type","button"],[1,"flex","items-center"],[1,"me-1"],[1,"animation-speed-2",3,"ngClass"],["content",""],["size","m"],["tuiOption","","type","button"],["tuiOption","","type","button",3,"click"]],template:function(M,A){if(1&M&&(t.I0R(0,"tui-hosted-dropdown",0,1)(2,"button",2)(3,"span",3)(4,"span",4),t.OEk(5),t.wVc(6,"language"),t.C$Y(),t.I0R(7,"mat-icon",5),t.OEk(8,"expand_more"),t.C$Y()()()(),t.yuY(9,I,3,0,"ng-template",null,6,t.gJz)),2&M){const S=t.Gew(1),L=t.Gew(10);t.E7m("content",L),t.yG2(5),t.cNF(t.kDX(6,3,A.session.language())),t.yG2(2),t.E7m("ngClass",t.S45(5,b,S.open))}},dependencies:[l.CI,l.Kw,c.GE,c.Qw,i.qL,u.A$,u.yi,u.sP,d.e,o.QF],encapsulation:2,changeDetection:0})}return m})()},3040:(P,g,e)=>{e.d(g,{M:()=>i});var t=e(4496),a=e(1128),s=e(8212),l=e(1560);function c(o,d){if(1&o){const _=t.KQA();t.I0R(0,"button",1),t.qCj("click",function(){t.usT(_);const T=t.GaO();return t.CGJ(T.copy())}),t.I0R(1,"mat-icon"),t.OEk(2,"content_copy"),t.C$Y()()}if(2&o){const _=t.GaO();t.E7m("appearance",_.appearance)("size",_.size)}}function u(o,d){if(1&o){const _=t.KQA();t.I0R(0,"button",1),t.qCj("click",function(){t.usT(_);const T=t.GaO();return t.CGJ(T.copy())}),t.I0R(1,"mat-icon"),t.OEk(2,"content_copy"),t.C$Y()()}if(2&o){const _=t.GaO();t.E7m("appearance",_.appearance)("size",_.size)}}let i=(()=>{class o{constructor(){this.notifications=(0,t.uUt)(a.E),this.onlyIcon=!0,this.appearance="outline",this.size="m",this.copyHandler=this.defaultCopyHandler,this.message="Copiato"}copy(){this.copyHandler(this.content??null)}defaultCopyHandler(_){_&&navigator.clipboard.writeText(_).then(f=>{this.notifications.fireSnackBar(this.message)})}static#t=this.\u0275fac=function(f){return new(f||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-copy-content"]],inputs:{content:"content",onlyIcon:"onlyIcon",appearance:"appearance",size:"size",copyHandler:"copyHandler",message:"message"},standalone:!0,features:[t.UHJ],decls:2,vars:1,consts:[["tuiIconButton","","type","button",3,"appearance","size"],["tuiIconButton","","type","button",3,"appearance","size","click"]],template:function(f,T){1&f&&t.yuY(0,c,3,2,"button",0)(1,u,3,2),2&f&&t.C0Y(0,T.onlyIcon?0:1)},dependencies:[s.CI,s.Kw,l.qL],changeDetection:0})}return o})()},8640:(P,g,e)=>{e.d(g,{O:()=>c});var t=e(7692),a=e(6264),s=e(4496);const l=["*"];let c=(()=>{class u{constructor(){this.showLoader=!1}static#t=this.\u0275fac=function(d){return new(d||u)};static#e=this.\u0275cmp=s.In1({type:u,selectors:[["app-no-items"]],inputs:{showLoader:"showLoader"},standalone:!0,features:[s.UHJ],ngContentSelectors:l,decls:4,vars:3,consts:[[1,"block","w-100","h-100",3,"overlay","showLoader","size"],["alt","not found","src","assets/img/not-found.svg","tuiSlot","top",1,"image"]],template:function(d,_){1&d&&(s.kPM(),s.I0R(0,"tui-loader",0)(1,"tui-block-status"),s.wR5(2,"img",1),s._Xx(3),s.C$Y()()),2&d&&s.E7m("overlay",!0)("showLoader",_.showLoader)("size","xl")},dependencies:[t.Sk,t.Cb,a.eA,a.M$,a.Gu]})}return u})()},7748:(P,g,e)=>{e.d(g,{c:()=>l});var t=e(5656),a=e(4496);function s(c,u){if(1&c&&(a.I0R(0,"span",0),a.OEk(1),a.C$Y()),2&c){const i=a.GaO();a.E7m("tuiHint",i.trans[i.type].long),a.yG2(),a.cNF(i.trans[i.type].short)}}let l=(()=>{class c{constructor(){this.trans={nexi_payment:{short:"Pagamento cc con nexi",long:"\n          Verr\xE0 richiesto un pagamento con carta di credito del valore\n          specificato al momento della prenotazione.\n        "}}}set item(i){this.type=i?.preorder_type}static#t=this.\u0275fac=function(o){return new(o||c)};static#e=this.\u0275cmp=a.In1({type:c,selectors:[["app-preorder-reservation-group-preorder-type"]],inputs:{item:"item",type:"type"},standalone:!0,features:[a.UHJ],decls:1,vars:1,consts:[[3,"tuiHint"]],template:function(o,d){1&o&&a.yuY(0,s,2,2,"span",0),2&o&&a.C0Y(0,d.type?0:-1)},dependencies:[t.WY,t.lh,t.SL,t.i6,t.IT]})}return c})()},6424:(P,g,e)=>{e.d(g,{w:()=>l});var t=e(4496);function a(c,u){1&c&&(t.I0R(0,"div",0),t.SAx(1),t.aS0(2,1),t.k70(),t.C$Y())}function s(c,u){1&c&&(t.I0R(0,"div",2),t.SAx(1),t.aS0(2,3),t.k70(),t.C$Y())}let l=(()=>{class c{ngOnChanges(){this.status="active"==this.item?.status?"active":"inactive"}static#t=this.\u0275fac=function(o){return new(o||c)};static#e=this.\u0275cmp=t.In1({type:c,selectors:[["app-preorder-reservation-group-status"]],inputs:{item:"item"},standalone:!0,features:[t.SYr,t.UHJ],decls:2,vars:1,consts:()=>{let i,o;return i="Attivo",o="Inattivo",[[1,"text-xl","border-success-dark","rounded","text-success-dark"],i,[1,"text-xl","border-secondary","rounded","text-secondary"],o]},template:function(o,d){if(1&o&&t.yuY(0,a,3,0)(1,s,3,0),2&o){let _;t.C0Y(0,"active"===(_=d.status)?0:"inactive"===_?1:-1)}}})}return c})()},3264:(P,g,e)=>{e.d(g,{Y:()=>b});var t=e(4496),a=e(6504),s=e(3480),l=e(1183),c=e(3616),u=e(4e3),i=e(6684),o=e(5188),d=e(4336),_=e(8048),f=e(1368);function T(E,m){if(1&E&&(t.SAx(0),t.I0R(1,"button",3),t.OEk(2),t.C$Y(),t.k70()),2&E){const h=m.$implicit;t.yG2(),t.E7m("value",h),t.yG2(),t.cNF(h)}}function y(E,m){if(1&E&&(t.I0R(0,"tui-data-list"),t.yuY(1,T,3,2,"ng-container",2),t.C$Y()),2&E){const h=t.GaO();t.yG2(),t.E7m("ngForOf",h.statuses)}}const I=["*"];let b=(()=>{class E{constructor(){this.destroy$=(0,t.uUt)(s.UF),this.control=new a.Ku(null),this.statuses=[...l.I],this.inputSize="m",this.valueChanges$=this.control.valueChanges.pipe((0,c.a)(this.destroy$),(0,u.a)(),(0,i.I)(()=>this.control.valid))}ngOnInit(){}registerOnChange(h){this.valueChanges$.subscribe(h)}registerOnTouched(h){this.valueChanges$.subscribe(h)}setDisabledState(h){h?this.control.disable():this.control.enable()}writeValue(h){if(null==h||"string"==typeof h)return this.control.setValue(h);console.warn("Invalid value for reservation status select:",h)}static#t=this.\u0275fac=function(C){return new(C||E)};static#e=this.\u0275cmp=t.In1({type:E,selectors:[["app-reservation-status-select"]],inputs:{inputSize:"inputSize"},standalone:!0,features:[t.M5G([{provide:a.Y6,useExisting:(0,t.wd)(()=>E),multi:!0},s.UF]),t.UHJ],ngContentSelectors:I,decls:3,vars:3,consts:[[3,"tuiTextfieldCleaner","tuiTextfieldSize","formControl"],[4,"tuiDataList"],[4,"ngFor","ngForOf"],["tuiOption","",3,"value"]],template:function(C,M){1&C&&(t.kPM(),t.I0R(0,"tui-select",0),t._Xx(1),t.yuY(2,y,2,1,"tui-data-list",1),t.C$Y()),2&C&&t.E7m("tuiTextfieldCleaner",!0)("tuiTextfieldSize",M.inputSize)("formControl",M.control)},dependencies:[a.sl,a.ue,a.ug,o.my,o.cP,o.uO,d.A$,d.yi,d.sP,d.Ux,f.ay,_.aS,_.es,_.rD],styles:["[_nghost-%COMP%]{display:block;min-width:150px}"],changeDetection:0})}return E})()},8780:(P,g,e)=>{e.d(g,{I:()=>y});var t=e(4496),a=e(8304),s=e(3480),l=e(1560),c=e(8212),u=e(1236),i=e(1128),o=e(3616),d=e(8824),_=e(9938),f=e(8256),T=e(2208);let y=(()=>{class I{constructor(){this.service=(0,t.uUt)(a.S),this.destroy$=(0,t.uUt)(s.UF),this.route=(0,t.uUt)(u.gV),this.notifications=(0,t.uUt)(i.E),this.loading=(0,t.OCB)(!1),this.created=new t._w7,this.cancelled=new t._w7}submit(E){this.loading.set(!0),this.service.create(E).pipe((0,o.a)(this.destroy$),(0,d.U)(()=>this.loading.set(!1))).subscribe({next:m=>{this.notifications.fireSnackBar("Prenotazione salvata"),this.created.emit(m)},error:m=>{this.formComponent&&_.y.assignErrorsToForm(this.formComponent.form,m),this.notifications.error((0,f.mk)(m)||"Qualcosa \xE8 andato storto nel salvataggio.")}})}cancel(){confirm("Sei sicuro di voler annullare?")&&this.cancelled.emit()}static#t=this.\u0275fac=function(m){return new(m||I)};static#e=this.\u0275cmp=t.In1({type:I,selectors:[["app-create-reservation"]],viewQuery:function(m,h){if(1&m&&t.CC$(T.G,5),2&m){let C;t.wto(C=t.Gqi())&&(h.formComponent=C.first)}},outputs:{created:"created",cancelled:"cancelled"},standalone:!0,features:[t.M5G([s.UF]),t.UHJ],decls:8,vars:1,consts:()=>{let E;return E="Nuova prenotazione",[[1,"flex","items-center","justify-between"],E,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(m,h){1&m&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return h.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-admin-reservation-form",3),t.qCj("cancelled",function(){return h.cancel()})("formSubmit",function(M){return h.submit(M)}),t.C$Y()),2&m&&(t.yG2(7),t.E7m("loading",h.loading()))},dependencies:[T.G,l.qL,c.CI,c.Kw],encapsulation:2})}return I})()},9860:(P,g,e)=>{e.d(g,{EF:()=>t,Qn:()=>a,Y9:()=>s});const t=["home-landing","home-about","home-menu","home-instagram","home-reserve","new-reservation-form","existing-reservation-form","openings_monday","openings_tuesday","openings_wednesday","openings_thursday","openings_friday","openings_saturday","openings_sunday","cancel-reservation"];function a(l){return"string"==typeof l&&l.length>0&&t.includes(l)}const s={"home-landing":"Pagina principale, subito dopo la prima sezione","home-about":"Pagina principale, subito dopo la sezione 'chi siamo'.","home-menu":"Pagina principale, subito dopo la sezione 'menu'.","home-instagram":"Pagina principale, subito dopo la sezione instagram.","home-reserve":"Pagina principale, interno alla sezione prenotazione.","new-reservation-form":"Form di prenotazione pubblica.","existing-reservation-form":"Pagina prenotazione esistente.",openings_monday:"Orari di apertura per luned\xEC.",openings_tuesday:"Orari di apertura per marted\xEC.",openings_wednesday:"Orari di apertura per mercoled\xEC.",openings_thursday:"Orari di apertura per gioved\xEC.",openings_friday:"Orari di apertura per venerd\xEC.",openings_saturday:"Orari di apertura per sabato.",openings_sunday:"Orari di apertura per domenica.","cancel-reservation":"Messaggio mostrato a chi volesse annullare la prenotazione."}},1183:(P,g,e)=>{e.d(g,{I:()=>t,s:()=>a});const t=["active","arrived","deleted","noshow","cancelled"];function a(s){return"string"==typeof s&&[...t].includes(s)}},4792:(P,g,e)=>{e.d(g,{M:()=>u});const a=["address","email","phone","whatsapp_number","whatsapp_url","facebook_url","instagram_url","tripadvisor_url","homepage_url","google_url"];var c=e(4496);let u=(()=>{class i{constructor(){this.mapping={address:"Indirizzo del ristorante.",email:"Indirizzo email",facebook_url:"URL alla pagina Facebook del ristorante",google_url:"URL alla pagina google maps del ristorante",homepage_url:"Link alla home di questo sito",instagram_url:"Link alla pagina instagram del ristorante",phone:"Numero di telefono con prefisso internazionale",tripadvisor_url:"Link alla pagina tripadvisor",whatsapp_number:"Numero di telefono abilitato a whatsapp."}}transform(d){return function s(i){return"string"==typeof i&&a.includes(i)}(d)?this.mapping[d]??null:null}static#t=this.\u0275fac=function(_){return new(_||i)};static#e=this.\u0275pipe=c.UTH({name:"humanizeContactKey",type:i,pure:!0,standalone:!0})}return i})()},1480:(P,g,e)=>{e.d(g,{s:()=>s});var t=e(9860),a=e(4496);let s=(()=>{class l{transform(u){return(0,t.Qn)(u)?`[${u}]: ${t.Y9[u]??""}`:null}static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275pipe=a.UTH({name:"publicMessageKey",type:l,pure:!0,standalone:!0})}return l})()},5324:(P,g,e)=>{e.d(g,{s:()=>s});var t=e(6772),a=e(4496);let s=(()=>{class l extends t.A{constructor(){super("/admin/contacts")}search(){return this.http.get("/")}show(u){return this.http.get(`/${u}`)}update(u,i){return"object"==typeof i&&null!=i&&(i=JSON.stringify(i)),this.http.patch(`/${u}`,{value:i})}static#t=this.\u0275fac=function(i){return new(i||l)};static#e=this.\u0275prov=a.wxM({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},6500:(P,g,e)=>{e.d(g,{o:()=>c});var t=e(6012),a=e(8400);class s extends a.w{constructor(i){super(i),this.key=i.key,this.text=i.text,this.translations=i.translations}}var l=e(4496);let c=(()=>{class u extends t.s{constructor(){super(s,"admin/public_messages")}static#t=this.\u0275fac=function(d){return new(d||u)};static#e=this.\u0275prov=l.wxM({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()},3732:(P,g,e)=>{e.d(g,{u:()=>l});var t=e(6012),a=e(5812),s=e(4496);let l=(()=>{class c extends t.s{constructor(){super(a.i,"admin/users")}static#t=this.\u0275fac=function(o){return new(o||c)};static#e=this.\u0275prov=s.wxM({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})()},2204:(P,g,e)=>{e.d(g,{Ep:()=>q,Ix:()=>Z,Up:()=>$,_Q:()=>B});var t=e(4496),a=e(168),s=e(1096),l=e(832),c=e(1800),u=e(4164),i=e(4680),o=e(4392),d=e(900),_=e(2528),f=e(3480),T=e(3412),y=e(528),I=e(7036),b=e(4704),E=e(6684),m=e(7368),h=e(3616),C=e(3656),M=e(9880),A=e(8976),S=e(5944),L=e(3972),z=e(7176),x=e(1040),K=e(1368);const k=["focusableElement"];function G(r,O){if(1&r&&t.wR5(0,"tui-svg",9),2&r){const n=O.polymorpheusOutlet,p=t.GaO(2);t.eAK("t-icon_open",p.open),t.E7m("src",n)}}function W(r,O){if(1&r&&(t.SAx(0),t.yuY(1,G,1,3,"tui-svg",8),t.k70()),2&r){const n=t.GaO();t.yG2(),t.E7m("polymorpheusOutlet",n.options.iconLarge)}}function F(r,O){if(1&r&&(t.SAx(0),t.OEk(1),t.k70()),2&r){const n=O.polymorpheusOutlet;t.yG2(),t.oRS(" ",n," ")}}function N(r,O){if(1&r&&(t.I0R(0,"div",11),t.yuY(1,F,2,1,"ng-container",12),t.C$Y()),2&r){const n=t.GaO(2);t.yG2(),t.E7m("polymorpheusOutlet",n.lazyContent)}}function Y(r,O){if(1&r&&t.yuY(0,N,2,1,"div",10),2&r){const n=t.GaO();t.E7m("ngIf",n.lazyContent)}}function V(r,O){1&r&&(t.I0R(0,"div",13),t._Xx(1,1),t.C$Y())}const H=["*",[["","tuiAccordionItemContent",""]]],j=["*","[tuiAccordionItemContent]"],X=[[["tui-accordion-item"]]],Q=["tui-accordion-item"];let $=(()=>{class r extends x.sv{constructor(n,p){super(n,p)}}return r.\u0275fac=function(n){return new(n||r)(t.GI1(t.Yw2,2),t.GI1(t.kD9))},r.\u0275dir=t.Sc5({type:r,selectors:[["ng-template","tuiAccordionItemContent",""]],features:[t.eg9]}),r})(),J=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275dir=t.Sc5({type:r,selectors:[["","tuiAccordionItemContent","",5,"ng-template"]]}),r})(),B=(()=>{class r extends c.mK{constructor(n,p,v){super(),this.cdr=n,this.mode$=p,this.options=v,this.noPadding=!1,this.showArrow=!0,this.borders="all",this.size="m",this.disabled=!1,this.disableHover=!1,this.open=!1,this.async=!1,this.openChange=new t._w7}get nativeFocusableElement(){return this.disabled||!this.focusableElement?null:this.focusableElement.nativeElement}get focused(){return(0,u.ER)(this.nativeFocusableElement)}onFocused(n){this.updateFocused(n)}onFocusVisible(n){this.updateFocusVisible(n)}onRowToggle(){this.disabled||this.updateOpen(!this.open)}onItemKeyDownEsc(n){this.open&&(n.stopPropagation(),this.updateOpen(!1))}close(){this.updateOpen(!1),this.cdr.markForCheck()}updateOpen(n){this.open!==n&&(this.open=n,this.openChange.emit(n))}}return r.\u0275fac=function(n){return new(n||r)(t.GI1(t.kD9),t.GI1(S.Yx),t.GI1(z.qu))},r.\u0275cmp=t.In1({type:r,selectors:[["tui-accordion-item"]],contentQueries:function(n,p,v){if(1&n&&(t.szK(v,J,5),t.szK(v,$,5)),2&n){let R;t.wto(R=t.Gqi())&&(p.eagerContent=R.first),t.wto(R=t.Gqi())&&(p.lazyContent=R.first)}},viewQuery:function(n,p){if(1&n&&t.CC$(k,5),2&n){let v;t.wto(v=t.Gqi())&&(p.focusableElement=v.first)}},hostVars:8,hostBindings:function(n,p){1&n&&t.qCj("$.data-mode.attr",function(){return p.mode$}),2&n&&(t.e48("data-borders",p.borders)("data-size",p.size),t.eAK("_no-padding",p.noPadding)("_has-arrow",p.showArrow)("_disabled",p.disabled))},inputs:{noPadding:"noPadding",showArrow:"showArrow",borders:"borders",size:"size",disabled:"disabled",disableHover:"disableHover",open:"open",async:"async"},outputs:{openChange:"openChange"},features:[t.M5G([(0,i.NK)(r),L.Ir]),t.eg9],ngContentSelectors:j,decls:9,vars:10,consts:[["automation-id","tui-accordion__item-wrapper",1,"t-wrapper"],["automation-id","tui-accordion__item-header","type","button",1,"t-header",3,"disabled","tuiFocusable","click","keydown.esc","tuiFocusedChange","tuiFocusVisibleChange"],["focusableElement",""],["automation-id","tui-accordion__item-title",1,"t-title"],[4,"ngIf"],[3,"async","expanded"],["tuiExpandContent",""],["class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-arrow","class","t-icon",3,"t-icon_open","src",4,"polymorpheusOutlet"],["automation-id","tui-accordion__item-arrow",1,"t-icon",3,"src"],["automation-id","tui-accordion__item-content","class","t-content",4,"ngIf"],["automation-id","tui-accordion__item-content",1,"t-content"],[4,"polymorpheusOutlet"],[1,"t-content"]],template:function(n,p){1&n&&(t.kPM(H),t.I0R(0,"div",0)(1,"button",1,2),t.qCj("click",function(){return p.onRowToggle()})("keydown.esc",function(R){return p.onItemKeyDownEsc(R)})("tuiFocusedChange",function(R){return p.onFocused(R)})("tuiFocusVisibleChange",function(R){return p.onFocusVisible(R)}),t.I0R(3,"span",3),t._Xx(4),t.C$Y(),t.yuY(5,W,2,1,"ng-container",4),t.C$Y(),t.I0R(6,"tui-expand",5),t.yuY(7,Y,1,1,"ng-template",6)(8,V,2,0,"div",7),t.C$Y()()),2&n&&(t.yG2(),t.eAK("t-header_hoverable",!p.disableHover)("t-header_open",p.open),t.E7m("disabled",p.computedDisabled)("tuiFocusable",p.computedFocusable),t.yG2(4),t.E7m("ngIf",p.showArrow),t.yG2(),t.E7m("async",p.async)("expanded",p.open),t.yG2(2),t.E7m("ngIf",p.eagerContent))},dependencies:[C.Wu,M.st,a.O,s.h,l.w,K.u_,x.Af,M.kP],styles:['[_nghost-%COMP%]{position:relative;display:block;overflow:hidden;border-radius:var(--tui-radius-l)}[data-borders=top-bottom][_nghost-%COMP%]{border-radius:0!important}.t-wrapper[_ngcontent-%COMP%]{position:relative;border-radius:inherit}.t-wrapper[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";box-sizing:border-box;border-radius:inherit;border:1px solid var(--tui-base-04);pointer-events:none}[_nghost-%COMP%]:not([data-borders])   .t-wrapper[_ngcontent-%COMP%]:after{border-width:0}[data-borders=all][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-width:1px}[data-borders=top-bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0}[data-borders=top][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-bottom-width:0}[data-borders=bottom][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-left-width:0;border-right-width:0;border-top-width:0}[data-mode=onDark][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border-color:var(--tui-text-01)}._focus-visible[_nghost-%COMP%]   .t-wrapper[_ngcontent-%COMP%]:after{border:2px solid var(--tui-focus)}[_nghost-%COMP%]:not([data-mode])   .t-wrapper[_ngcontent-%COMP%]{background:var(--tui-base-01)}.t-header[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;text-decoration:none;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;display:flex;width:100%;font:var(--tui-font-text-l);align-items:center;box-sizing:border-box;border-bottom:1px solid var(--tui-base-04);min-height:var(--tui-height-l);padding:.75rem 1.25rem;color:var(--tui-text-01);cursor:pointer;text-align:left;outline:none}[data-mode=onDark][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{color:var(--tui-text-01-night);border-color:var(--tui-base-03)}[data-mode=onLight][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{border-color:var(--tui-text-01)}[_nghost-%COMP%]:not([data-borders])   .t-header[_ngcontent-%COMP%]{border-bottom-width:0;box-shadow:none}._has-arrow[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-right:.75rem}[data-mode=onDark][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}[data-mode=onLight][_nghost-%COMP%]   .t-header_open[_ngcontent-%COMP%]{background:var(--tui-clear)}[data-size=s][_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{font:var(--tui-font-text-m);min-height:var(--tui-height-m);padding:.625rem .75rem .625rem 1rem}._no-padding[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{padding-left:0;padding-right:0}._disabled[_nghost-%COMP%]   .t-header[_ngcontent-%COMP%]{cursor:default}.t-wrapper[_ngcontent-%COMP%]:hover:not([data-mode]) > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-base-02)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onDark] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear-inverse)}.t-wrapper[_ngcontent-%COMP%]:hover[data-mode=onLight] > .t-header_hoverable[_ngcontent-%COMP%]{background:var(--tui-clear)}.t-title[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:0;flex-grow:1}._has-arrow[_nghost-%COMP%]   .t-title[_ngcontent-%COMP%]{margin-right:.5rem}.t-icon[_ngcontent-%COMP%]{transition-property:transform,color;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:1.5rem;height:1.5rem;margin-left:auto;color:var(--tui-base-06)}.t-icon_open[_ngcontent-%COMP%]{transform:rotate(180deg)}[data-mode][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{opacity:var(--tui-disabled-opacity)}[_nghost-%COMP%]:hover[data-mode]   .t-icon[_ngcontent-%COMP%]{opacity:.8}[data-mode=onDark][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01-night)}[data-mode=onLight][_nghost-%COMP%]   .t-icon[_ngcontent-%COMP%]{color:var(--tui-text-01)}[_nghost-%COMP%]:hover:not([data-mode])   .t-icon[_ngcontent-%COMP%]{color:var(--tui-base-07)}.t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-m);padding:1.25rem;word-wrap:break-word}[data-size=s][_nghost-%COMP%]   .t-content[_ngcontent-%COMP%]{font:var(--tui-font-text-s);padding:1rem}'],changeDetection:0}),r})(),Z=(()=>{class r{constructor(n){this.destroy$=n,this.closeOthers=!0,this.rounded=!0,this.accordionItems=o.Jh}ngAfterContentInit(){const{accordionItems:n}=this,p=(0,d.jv)(n),v=p.pipe((0,I.c)(),(0,b.k)(([U,D])=>D.find(w=>!U.includes(w)&&w.open)),(0,E.I)(_.kF));(0,T.U)(p.pipe((0,m.G)(U=>(0,T.U)(...U.map(D=>D.openChange.pipe((0,E.I)(y.Z),(0,b.k)(()=>D)))))),v).pipe((0,E.I)(()=>this.closeOthers),(0,h.a)(this.destroy$)).subscribe(U=>{n.forEach(D=>{U!==D&&D.close()})})}}return r.\u0275fac=function(n){return new(n||r)(t.GI1(f.UF,2))},r.\u0275cmp=t.In1({type:r,selectors:[["tui-accordion"]],contentQueries:function(n,p,v){if(1&n&&t.szK(v,B,4),2&n){let R;t.wto(R=t.Gqi())&&(p.accordionItems=R)}},inputs:{closeOthers:"closeOthers",rounded:"rounded"},features:[t.M5G([f.UF])],ngContentSelectors:Q,decls:2,vars:2,consts:[["automation-id","tui-accordion__group","orientation","vertical","size","l","tuiGroup","",1,"t-group",3,"collapsed","rounded"]],template:function(n,p){1&n&&(t.kPM(X),t.I0R(0,"div",0),t._Xx(1),t.C$Y()),2&n&&t.E7m("collapsed",!0)("rounded",p.rounded)},dependencies:[A.Ko],styles:["[_nghost-%COMP%]{display:block}.t-group[_ngcontent-%COMP%]{display:flex}"],changeDetection:0}),r})(),q=(()=>{class r{}return r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=t.a4G({type:r}),r.\u0275inj=t.s3X({imports:[[K.MD,s.O,l.I,a.C,x.Ux,C.Yt,A.Gy,M.kh]]}),r})()},6264:(P,g,e)=>{e.d(g,{Gu:()=>u,M$:()=>c,eA:()=>i});var t=e(4496),a=e(1368);const s=[[["","tuiSlot","top"]],[["h1"],["h2"],["h3"],["h4"],["h5"],["h6"]],"*",[["a"],["button"],["","tuiSlot","action"]]],l=["[tuiSlot='top']","h1,h2,h3,h4,h5,h6","*","a,button,[tuiSlot='action']"];let c=(()=>{class o{constructor(){this.card=!1}}return o.\u0275fac=function(_){return new(_||o)},o.\u0275cmp=t.In1({type:o,selectors:[["tui-block-status"]],hostVars:2,hostBindings:function(_,f){2&_&&t.eAK("_card",f.card)},inputs:{card:"card"},ngContentSelectors:l,decls:7,vars:0,consts:[[1,"t-block-image"],[1,"t-block-text"],[1,"t-block-actions"]],template:function(_,f){1&_&&(t.kPM(s),t.I0R(0,"div",0),t._Xx(1),t.C$Y(),t._Xx(2,1),t.I0R(3,"div",1),t._Xx(4,2),t.C$Y(),t.I0R(5,"div",2),t._Xx(6,3),t.C$Y())},styles:["tui-block-status{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;box-sizing:border-box;overflow:hidden;width:100%;height:100%}tui-root._mobile tui-block-status{padding:2rem}tui-block-status._card{border-radius:var(--tui-radius-xl);padding:2rem}tui-root._mobile tui-block-status._card{padding:1.25rem}tui-root._mobile tui-block-status._card .t-block-image{margin-top:.75rem}tui-block-status .t-block-image{margin-bottom:2rem}tui-root._mobile tui-block-status .t-block-image{margin-bottom:1.5rem}tui-block-status .t-block-text{font:var(--tui-font-text-m);color:var(--tui-text-02);margin-bottom:2rem;white-space:pre-line}tui-root._mobile tui-block-status .t-block-text{margin-bottom:1.5rem}tui-block-status .t-block-actions{display:flex;flex-direction:column;align-items:center;width:100%}tui-block-status h1,tui-block-status h2,tui-block-status h3,tui-block-status h4,tui-block-status h5,tui-block-status h6{font:var(--tui-font-heading-4);margin-top:0;margin-bottom:1rem}tui-root._mobile tui-block-status h1,tui-root._mobile tui-block-status h2,tui-root._mobile tui-block-status h3,tui-root._mobile tui-block-status h4,tui-root._mobile tui-block-status h5,tui-root._mobile tui-block-status h6{font:var(--tui-font-heading-5);margin-bottom:.5rem}tui-block-status img{width:9rem;height:9rem}tui-root._mobile tui-block-status img{width:8rem;height:8rem}tui-block-status a:not(:last-child),tui-block-status button:not(:last-child){margin-bottom:.75rem}tui-root._mobile tui-block-status a:not(:last-child),tui-root._mobile tui-block-status button:not(:last-child){margin-bottom:.5rem}\n"],encapsulation:2,changeDetection:0}),o})(),u=(()=>{class o{constructor(){this.tuiSlot="top"}}return o.\u0275fac=function(_){return new(_||o)},o.\u0275dir=t.Sc5({type:o,selectors:[["","tuiSlot",""]],inputs:{tuiSlot:"tuiSlot"}}),o})(),i=(()=>{class o{}return o.\u0275fac=function(_){return new(_||o)},o.\u0275mod=t.a4G({type:o}),o.\u0275inj=t.s3X({imports:[[a.MD]]}),o})()}}]);