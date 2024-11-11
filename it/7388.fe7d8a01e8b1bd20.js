"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7388],{7388:(re,M,a)=>{a.r(M),a.d(M,{ListSettingsComponent:()=>Te});var e=a(4496),p=a(3480),I=a(8824),Q=a(3616),B=a(1128),L=a(8256),P=a(8392),K=a(2760),N=a(6052),s=a(6504),J=a(1292),m=a(7364),V=a(5193),H=a(7728),W=a(6772);let k=(()=>{class _ extends W.A{constructor(){super("/admin/settings")}search(t={}){return this.http.get("/")}show(t){return this.http.get(`/${t}`)}value(t){return this.http.get(`/${t}/value`)}update(t,i){return"object"==typeof i&&null!=i&&(i=JSON.stringify(i)),this.http.patch(`/${t}`,{value:i})}static#e=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275prov=e.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();var u=a(8048),E=a(5188),g=a(9308),c=a(7372),d=a(7936),Z=a(4336);function q(_,G){if(1&_&&e.wR5(0,"tui-data-list-wrapper",4),2&_){const t=e.GaO();e.E7m("emptyContent",t.noItemsContent)("itemContent",t.itemContent)("items",t.shownItems)}}const ee=["*"];let ne=(()=>{class _ extends g.A{constructor(){super(...arguments),this.items=[],this.shownItems=[],this.itemContent=t=>this.stringifyFn(t.$implicit),this.noItemsContent="Nessun elemento trovato",this.search="",this.stringifyFn=t=>t}ngOnChanges(t){super.ngOnChanges(t),t.items&&(this.shownItems=this.items),t.search&&this.onSearchChange(this.search)}onSearchChange(t){this.search=t,this.shownItems=this.items.filter(i=>i.toLowerCase().includes((this.search??"").toLowerCase()))}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-select"]],inputs:{items:"items",itemContent:"itemContent",noItemsContent:"noItemsContent",stringifyFn:"stringifyFn"},standalone:!0,features:[e.M5G([p.UF,{provide:s.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.SYr,e.UHJ],ngContentSelectors:ee,decls:5,vars:5,consts:[[1,"mb-2",3,"tuiTextfieldSize","formControl","stringify"],["tuiTextfield","",3,"placeholder"],[3,"emptyContent","itemContent","items",4,"tuiDataList"],[3,"expanded","submit","cancel"],[3,"emptyContent","itemContent","items"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-select",0),e._Xx(1),e.wR5(2,"input",1),e.yuY(3,q,1,3,"tui-data-list-wrapper",2),e.C$Y(),e.I0R(4,"app-submit-expand",3),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("tuiTextfieldSize",n.inputSize)("formControl",n.control)("stringify",n.stringifyFn),e.yG2(2),e.E7m("placeholder",n.placeholder),e.yG2(2),e.E7m("expanded",n.somethingChanged()))},dependencies:[u.aS,u.rD,s.sl,s.ue,s.ug,E.my,E.cP,E.uO,d.b,N.q8,N.OO,Z.Ux,c.Q],encapsulation:2})}return _})();var f=a(9888);const te=["*"];let ie=(()=>{class _ extends g.A{constructor(){super(...arguments),this.postfix=""}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-number-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder",postfix:"postfix"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([p.UF,{provide:s.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],ngContentSelectors:te,decls:4,vars:4,consts:[[1,"mb-2",3,"tuiTextfieldPostfix","formControl","tuiTextfieldSize"],["tuiTextfield",""],[3,"expanded","submit","cancel"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-input-number",0),e._Xx(1),e.wR5(2,"input",1),e.C$Y(),e.I0R(3,"app-submit-expand",2),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("tuiTextfieldPostfix",n.postfix)("formControl",n.control)("tuiTextfieldSize",n.inputSize),e.yG2(3),e.E7m("expanded",n.somethingChanged()))},dependencies:[f.Q7,f.mi,f.Qj,d.b,s.sl,s.ue,s.ug,u.aS,u.rD,u.We,c.Q],encapsulation:2})}return _})();var C=a(3797);const oe=["*"];let _e=(()=>{class _ extends g.A{static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-text-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([p.UF,{provide:s.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],ngContentSelectors:oe,decls:4,vars:3,consts:[[1,"mb-2",3,"formControl","tuiTextfieldSize"],["tuiTextfield",""],[3,"expanded","submit","cancel"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-input",0),e._Xx(1),e.wR5(2,"input",1),e.C$Y(),e.I0R(3,"app-submit-expand",2),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("formControl",n.control)("tuiTextfieldSize",n.inputSize),e.yG2(3),e.E7m("expanded",n.somethingChanged()))},dependencies:[C.CQ,C.Oo,C.cP,d.b,u.aS,u.rD,s.sl,s.ue,s.ug,c.Q],encapsulation:2})}return _})();var se=a(4476);function Se(_,G){1&_&&(e.SAx(0),e.aS0(1,33),e.k70())}function ae(_,G){1&_&&(e.OEk(0),e.wVc(1,"language")),2&_&&e.cNF(e.kDX(1,1,G.$implicit))}let Te=(()=>{class _{constructor(){this.service=(0,e.uUt)(k),this.destroy$=(0,e.uUt)(p.UF),this.notifications=(0,e.uUt)(B.E),this._=(0,e.uUt)(se.OY).setTitle("Impostazioni di Sistema | La Porta D'Acqua"),this.languagePipe=(0,e.uUt)(m.e),this.allLanguages=Object.keys(J.S),this.form=new s.WC({available_locales:new s.Ku([]),default_language:new s.Ku(null),max_people_per_reservation:new s.Ku(null),email_contacts:new s.Ku({}),reservation_max_days_in_advance:new s.Ku(null),reservation_min_hours_in_advance:new s.Ku(null),cover_price:new s.Ku(null),instagram_landing_page_url:new s.Ku(null)}),this.saving=(0,e.OCB)(!1),this.searching=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.searching()),this.inputSize="l"}ngOnInit(){this.reload()}save(t,i){this.saving.set(!0),Array.isArray(i)&&(i=i.join(",")),this.service.update(t,i).pipe((0,I.U)(()=>this.saving.set(!1)),(0,I.U)(()=>this.reload())).subscribe({error:n=>{this.notifications.error((0,L.mk)(n)||P.a)}})}applyPipeFunction(t){return t.transform}reload(){this.searching.set(!0),this.service.search().pipe((0,Q.a)(this.destroy$),(0,I.U)(()=>this.searching.set(!1))).subscribe({next:t=>{this.updateFormByData(t.items)},error:t=>{this.notifications.error((0,L.mk)(t)||P.a)}})}updateFormByData(t){const i={};["available_locales"].forEach(o=>{const S=t.find(l=>l.key===o);S&&Array.isArray(S.value)?i[o]=S.value:S&&"string"==typeof S.value?i[o]=S.value.split(","):S?console.warn(`Setting ${o} not found or invalid`,S.value):console.warn(`Setting ${o} not found`)}),["default_language","instagram_landing_page_url"].forEach(o=>{const S=t.find(l=>l.key===o);S&&"string"==typeof S.value?i[o]=S.value:S?console.warn(`Setting ${o} not found or invalid`,S.value):console.warn(`Setting ${o} not found`)}),["max_people_per_reservation","reservation_max_days_in_advance","reservation_min_hours_in_advance","cover_price"].forEach(o=>{const S=t.find(l=>l.key===o);S&&"string"==typeof S.value&&S.value.length>0?i[o]=Number(S.value):S&&"number"==typeof S.value?i[o]=S.value:S?console.warn(`Setting ${o} not found or invalid`,S.value):console.warn(`Setting ${o} not found`)});const n=[],T=t.filter(o=>!i.hasOwnProperty(o.key)&&!n.includes(o.key));T.length>0&&((0,e.sPQ)()&&this.notifications.error(`Unmanaged settings: ${T.map(o=>o.key).join(", ")}`),console.warn(`Unmanaged settings: ${T.map(o=>o.key).join(", ")}`,T)),this.form.patchValue(i)}static#e=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-list-settings"]],standalone:!0,features:[e.M5G([p.UF,m.e]),e.UHJ],decls:65,vars:26,consts:()=>{let t,i,n,T,o,S,l,A,$,v,R,h,O,z,y,b,D,F,X,x,Y,w,U,j;return t="Impostazioni di sistema",i="Queste impostazioni verranno applicate a tutto il sito ed i suoi iscritti.",n="Lingua di default",T="Qual'\xE8 la lingua di default del sistema?",o="Seleziona la lingua di default",S="Lingue di sistema",l="Quali lingue vuoi supportare? Le parti \"statiche\" come le pagine web non verranno tradotte in ulteriori lingue in automatico, ma le parti \"dinamiche\" come nomi e descrizioni del men\xF9 potranno essere tradotti in qualunque momento dallo staff.",A="Seleziona molte lingue",$="Massimo persone per prenotazione",v="Quando un utente crea una prenotazione, quante persone al massimo pu\xF2 selezionare?",R="Inserisci il numero massimo di persone per singola prenotazione.",h="Anticipo massimo prenotazione",O="Si potranno creare prenotazioni fino ad un limite di " + "\ufffd0\ufffd" + " giorni da oggi.",z="Giorni massimi di anticipo per nuove prenotazioni.",y="Anticipo minimo nuove prenotazioni",b="Se impostato a zero le persone potranno prenotare in tempo reale per la stessa ora, altrimenti almeno " + "\ufffd0\ufffd" + " ore dopo l'orario attuale.",D="Ore di anticipo minime per creare nuove prenotazioni.",F="Costo coperto",X="Se impostato ad un numero maggiore di zero, verr\xE0 mostrato dove necessario. Altrimenti sar\xE0 nascosto.",x="Ore di anticipo minime per creare nuove prenotazioni.",Y="Link condiviso al post Instagram",w="Il post in questione sar\xE0 visibile nella homepage, se impostato. Se assente, non verr\xE0 mostrata la sezione Instagram nella pagina web.",U="Link di condivisione post Instagram.",j="Nessun elemento",[["noItems",""],t,[1,"text-slate-400","mb-3"],i,[3,"formGroup"],[1,"mb-4"],[1,"text-lg","font-bold"],n,[1,"text-slate-400"],T,[3,"formControlName","items","itemContent","stringifyFn","inputSize","submit"],o,S,l,["languageItemContent",""],A,$,v,[3,"formControlName","inputSize","submit"],R,h,O,[3,"formControlName","inputSize","postfix","submit"],z,y,b,D,F,X,x,Y,w,U,j]},template:function(i,n){if(1&i&&(e.yuY(0,Se,2,0,"ng-template",null,0,e.gJz),e.I0R(2,"h1"),e.aS0(3,1),e.C$Y(),e.I0R(4,"p",2),e.aS0(5,3),e.C$Y(),e.I0R(6,"form",4)(7,"div",5)(8,"p",6),e.aS0(9,7),e.C$Y(),e.I0R(10,"p",8),e.aS0(11,9),e.C$Y(),e.I0R(12,"app-preferences-select",10),e.qCj("submit",function(o){return n.save("default_language",o)}),e.SAx(13),e.aS0(14,11),e.k70(),e.C$Y()(),e.I0R(15,"div",5)(16,"p",6),e.aS0(17,12),e.C$Y(),e.I0R(18,"p",8),e.aS0(19,13),e.C$Y(),e.yuY(20,ae,2,3,"ng-template",null,14,e.gJz),e.I0R(22,"app-preferences-multiple-select",10),e.qCj("submit",function(o){return n.save("available_locales",o)}),e.SAx(23),e.aS0(24,15),e.k70(),e.C$Y()(),e.I0R(25,"div",5)(26,"p",6),e.aS0(27,16),e.C$Y(),e.I0R(28,"p",8),e.aS0(29,17),e.C$Y(),e.I0R(30,"app-preferences-number-input",18),e.qCj("submit",function(o){return n.save("max_people_per_reservation",o)}),e.SAx(31),e.aS0(32,19),e.k70(),e.C$Y()(),e.I0R(33,"div",5)(34,"p",6),e.aS0(35,20),e.C$Y(),e.I0R(36,"p",8),e.aS0(37,21),e.C$Y(),e.I0R(38,"app-preferences-number-input",22),e.qCj("submit",function(o){return n.save("reservation_max_days_in_advance",o)}),e.SAx(39),e.aS0(40,23),e.k70(),e.C$Y()(),e.I0R(41,"div",5)(42,"p",6),e.aS0(43,24),e.C$Y(),e.I0R(44,"p",8),e.aS0(45,25),e.C$Y(),e.I0R(46,"app-preferences-number-input",22),e.qCj("submit",function(o){return n.save("reservation_min_hours_in_advance",o)}),e.SAx(47),e.aS0(48,26),e.k70(),e.C$Y()(),e.I0R(49,"div",5)(50,"p",6),e.aS0(51,27),e.C$Y(),e.I0R(52,"p",8),e.aS0(53,28),e.C$Y(),e.I0R(54,"app-preferences-number-input",22),e.qCj("submit",function(o){return n.save("cover_price",o)}),e.SAx(55),e.aS0(56,29),e.k70(),e.C$Y()(),e.I0R(57,"div",5)(58,"p",6),e.aS0(59,30),e.C$Y(),e.I0R(60,"p",8),e.aS0(61,31),e.C$Y(),e.I0R(62,"app-preferences-text-input",18),e.qCj("submit",function(o){return n.save("instagram_landing_page_url",o)}),e.SAx(63),e.aS0(64,32),e.k70(),e.C$Y()()()),2&i){const T=e.Gew(21);e.yG2(6),e.E7m("formGroup",n.form),e.yG2(6),e.E7m("formControlName","default_language")("items",n.allLanguages)("itemContent",T)("stringifyFn",n.applyPipeFunction(n.languagePipe))("inputSize",n.inputSize),e.yG2(10),e.E7m("formControlName","available_locales")("items",n.allLanguages)("itemContent",T)("stringifyFn",n.applyPipeFunction(n.languagePipe))("inputSize",n.inputSize),e.yG2(8),e.E7m("formControlName","max_people_per_reservation")("inputSize",n.inputSize),e.yG2(7),e.oBb(n.form.value.reservation_max_days_in_advance),e.Ylm(37),e.yG2(),e.E7m("formControlName","reservation_max_days_in_advance")("inputSize",n.inputSize)("postfix","giorni"),e.yG2(7),e.oBb(n.form.value.reservation_min_hours_in_advance),e.Ylm(45),e.yG2(),e.E7m("formControlName","reservation_min_hours_in_advance")("inputSize",n.inputSize)("postfix","ore"),e.yG2(8),e.E7m("formControlName","cover_price")("inputSize",n.inputSize)("postfix","\u20ac"),e.yG2(8),e.E7m("formControlName","instagram_landing_page_url")("inputSize",n.inputSize)}},dependencies:[K.BZ,s.sl,s.sz,s.ue,s.u,s.uW,s.Wo,N.q8,m.e,V.ms,H.M,ne,ie,_e],encapsulation:2,changeDetection:0})}return _})()}}]);