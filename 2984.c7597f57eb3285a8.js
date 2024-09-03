"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2984],{2984:(Ne,M,T)=>{T.r(M),T.d(M,{ListSettingsComponent:()=>Ie});var e=T(4496),p=T(3480),d=T(8824),$=T(3616),K=T(4388),L=T(8256),P=T(8392),V=T(6648),g=T(6052),a=T(6504),k=T(1292),f=T(7364),H=T(5193),W=T(7728),q=T(6772);let Z=(()=>{class _ extends q.A{constructor(){super("/admin/settings")}search(t={}){return this.http.get("/")}show(t){return this.http.get(`/${t}`)}value(t){return this.http.get(`/${t}/value`)}update(t,i){return"object"==typeof i&&null!=i&&(i=JSON.stringify(i)),this.http.patch(`/${t}`,{value:i})}static#e=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275prov=e.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();var l=T(5488),C=T(5188),m=T(9308),E=T(7372),c=T(7936),ee=T(4336);function ne(_,N){if(1&_&&e.wR5(0,"tui-data-list-wrapper",4),2&_){const t=e.GaO();e.E7m("emptyContent",t.noItemsContent)("itemContent",t.itemContent)("items",t.shownItems)}}const te=["*"];let ie=(()=>{class _ extends m.A{constructor(){super(...arguments),this.items=[],this.shownItems=[],this.itemContent=t=>this.stringifyFn(t.$implicit),this.noItemsContent=$localize`Nessun elemento trovato`,this.search="",this.stringifyFn=t=>t}ngOnChanges(t){super.ngOnChanges(t),t.items&&(this.shownItems=this.items),t.search&&this.onSearchChange(this.search)}onSearchChange(t){this.search=t,this.shownItems=this.items.filter(i=>i.toLowerCase().includes((this.search??"").toLowerCase()))}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-select"]],inputs:{items:"items",itemContent:"itemContent",noItemsContent:"noItemsContent",stringifyFn:"stringifyFn"},standalone:!0,features:[e.M5G([p.UF,{provide:a.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.SYr,e.UHJ],ngContentSelectors:te,decls:5,vars:5,consts:[[1,"mb-2",3,"tuiTextfieldSize","formControl","stringify"],["tuiTextfield","",3,"placeholder"],[3,"emptyContent","itemContent","items",4,"tuiDataList"],[3,"expanded","submit","cancel"],[3,"emptyContent","itemContent","items"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-select",0),e._Xx(1),e.wR5(2,"input",1),e.yuY(3,ne,1,3,"tui-data-list-wrapper",2),e.C$Y(),e.I0R(4,"app-submit-expand",3),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("tuiTextfieldSize",n.inputSize)("formControl",n.control)("stringify",n.stringifyFn),e.yG2(2),e.E7m("placeholder",n.placeholder),e.yG2(2),e.E7m("expanded",n.somethingChanged()))},dependencies:[l.aS,l.rD,a.sl,a.ue,a.ug,C.my,C.cP,C.uO,c.b,g.q8,g.OO,ee.Ux,E.Q],encapsulation:2})}return _})();var G=T(9888);const oe=["*"];let _e=(()=>{class _ extends m.A{constructor(){super(...arguments),this.postfix=""}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-number-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder",postfix:"postfix"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([p.UF,{provide:a.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],ngContentSelectors:oe,decls:4,vars:4,consts:[[1,"mb-2",3,"tuiTextfieldPostfix","formControl","tuiTextfieldSize"],["tuiTextfield",""],[3,"expanded","submit","cancel"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-input-number",0),e._Xx(1),e.wR5(2,"input",1),e.C$Y(),e.I0R(3,"app-submit-expand",2),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("tuiTextfieldPostfix",n.postfix)("formControl",n.control)("tuiTextfieldSize",n.inputSize),e.yG2(3),e.E7m("expanded",n.somethingChanged()))},dependencies:[G.Q7,G.mi,G.Qj,c.b,a.sl,a.ue,a.ug,l.aS,l.rD,l.We,E.Q],encapsulation:2})}return _})();var I=T(3797),se=T(372);const ae=()=>({});function Se(_,N){if(1&_){const t=e.KQA();e.I0R(0,"div",2)(1,"span",3),e.OEk(2),e.wVc(3,"commonTranslate"),e.C$Y()(),e.I0R(4,"div",4)(5,"tui-input",5),e.qCj("ngModelChange",function(n){const o=e.usT(t).$implicit,s=e.GaO();return e.CGJ(s.updateValue(o,n))}),e.wR5(6,"input",6),e.C$Y()()}if(2&_){const t=N.$implicit,i=e.GaO();let n;e.yG2(2),e.cNF(e.kDX(3,4,t)),e.yG2(3),e.E7m("tuiTextfieldSize",i.inputSize)("ngModel",null!==(n=(i.control.value||e.q4q(6,ae))[t])&&void 0!==n?n:null)("tuiTextfieldLabelOutside",!0)}}let Te=(()=>{class _ extends m.A{constructor(){super(...arguments),this.keys=(0,e.OCB)([])}ngOnInit(){super.ngOnInit(),this.control.valueChanges.pipe((0,$.a)(this.destroy$)).subscribe({next:t=>{this.keys.set(t?Object.keys(t):[])}})}updateValue(t,i){this.control.setValue({...this.control.value,[t]:i})}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-json-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([p.UF,{provide:a.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],decls:4,vars:1,consts:[[1,"grid","grid-cols-[10%_auto]","gap-y-3","gap-x-2","mb-3"],[3,"expanded","submit","cancel"],[1,"key-column","flex","items-center","justify-end"],[1,"font-bold"],[1,"value-column"],[3,"tuiTextfieldSize","ngModel","tuiTextfieldLabelOutside","ngModelChange"],["tuiTextfield",""]],template:function(i,n){1&i&&(e.I0R(0,"div",0),e.c53(1,Se,7,7,null,null,e.oxv),e.C$Y(),e.I0R(3,"app-submit-expand",1),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.yG2(),e.oho(n.keys()),e.yG2(2),e.E7m("expanded",n.somethingChanged()))},dependencies:[a.sl,a.ue,E.Q,I.CQ,I.Oo,I.cP,c.b,a.y,a._G,l.aS,l.E9,l.rD,se.c],encapsulation:2})}return _})();const re=["*"];let le=(()=>{class _ extends m.A{static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-text-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([p.UF,{provide:a.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],ngContentSelectors:re,decls:4,vars:3,consts:[[1,"mb-2",3,"formControl","tuiTextfieldSize"],["tuiTextfield",""],[3,"expanded","submit","cancel"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-input",0),e._Xx(1),e.wR5(2,"input",1),e.C$Y(),e.I0R(3,"app-submit-expand",2),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("formControl",n.control)("tuiTextfieldSize",n.inputSize),e.yG2(3),e.E7m("expanded",n.somethingChanged()))},dependencies:[I.CQ,I.Oo,I.cP,c.b,l.aS,l.rD,a.sl,a.ue,a.ug,E.Q],encapsulation:2})}return _})();function ue(_,N){1&_&&(e.SAx(0),e.aS0(1,35),e.k70())}function pe(_,N){1&_&&(e.OEk(0),e.wVc(1,"language")),2&_&&e.cNF(e.kDX(1,1,N.$implicit))}let Ie=(()=>{class _{constructor(){this.service=(0,e.uUt)(Z),this.destroy$=(0,e.uUt)(p.UF),this.notifications=(0,e.uUt)(K.E),this.languagePipe=(0,e.uUt)(f.e),this.allLanguages=Object.keys(k.S),this.form=new a.WC({available_locales:new a.Ku([]),default_language:new a.Ku(null),max_people_per_reservation:new a.Ku(null),email_contacts:new a.Ku({}),reservation_max_days_in_advance:new a.Ku(null),reservation_min_hours_in_advance:new a.Ku(null),cover_price:new a.Ku(null),instagram_landing_page_url:new a.Ku(null)}),this.saving=(0,e.OCB)(!1),this.searching=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.searching()),this.inputSize="l"}ngOnInit(){this.reload()}save(t,i){this.saving.set(!0),Array.isArray(i)&&(i=i.join(",")),this.service.update(t,i).pipe((0,d.U)(()=>this.saving.set(!1)),(0,d.U)(()=>this.reload())).subscribe({error:n=>{this.notifications.error((0,L.mk)(n)||P.a)}})}applyPipeFunction(t){return t.transform}reload(){this.searching.set(!0),this.service.search().pipe((0,$.a)(this.destroy$),(0,d.U)(()=>this.searching.set(!1))).subscribe({next:t=>{this.updateFormByData(t.items)},error:t=>{this.notifications.error((0,L.mk)(t)||P.a)}})}updateFormByData(t){const i={};["available_locales"].forEach(o=>{const s=t.find(u=>u.key===o);s&&Array.isArray(s.value)?i[o]=s.value:s&&"string"==typeof s.value?i[o]=s.value.split(","):s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)}),["default_language","instagram_landing_page_url"].forEach(o=>{const s=t.find(u=>u.key===o);s&&"string"==typeof s.value?i[o]=s.value:s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)}),["max_people_per_reservation","reservation_max_days_in_advance","reservation_min_hours_in_advance","cover_price"].forEach(o=>{const s=t.find(u=>u.key===o);s&&"string"==typeof s.value&&s.value.length>0?i[o]=Number(s.value):s&&"number"==typeof s.value?i[o]=s.value:s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)}),["email_contacts"].forEach(o=>{const s=t.find(u=>u.key===o);s&&"string"==typeof s.value?i[o]=JSON.parse(s.value):s&&"object"==typeof s.value&&s.value?i[o]=s.value:s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)});const n=[],S=t.filter(o=>!i.hasOwnProperty(o.key)&&!n.includes(o.key));S.length>0&&((0,e.sPQ)()&&this.notifications.error(`Unmanaged settings: ${S.map(o=>o.key).join(", ")}`),console.warn(`Unmanaged settings: ${S.map(o=>o.key).join(", ")}`,S)),this.form.patchValue(i)}static#e=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-list-settings"]],standalone:!0,features:[e.M5G([p.UF,f.e]),e.UHJ],decls:71,vars:28,consts:()=>{let t,i,n,S,o,s,u,A,v,R,h,O,y,z,b,D,F,x,X,Y,w,j,U,Q,J,B;return t=$localize`Impostazioni di sistema`,i=$localize`Queste impostazioni verranno applicate a tutto il sito ed i suoi iscritti.`,n=$localize`Lingua di default`,S=$localize`Qual'è la lingua di default del sistema?`,o=$localize`Seleziona la lingua di default`,s=$localize`Lingue di sistema`,u=$localize`Quali lingue vuoi supportare? Le parti "statiche" come le pagine web non verranno tradotte in ulteriori lingue in automatico, ma le parti "dinamiche" come nomi e descrizioni del menù potranno essere tradotti in qualunque momento dallo staff.`,A=$localize`Seleziona molte lingue`,v=$localize`Massimo persone per prenotazione`,R=$localize`Quando un utente crea una prenotazione, quante persone al massimo può selezionare?`,h=$localize`Inserisci il numero massimo di persone per singola prenotazione.`,O=$localize`Contatti email`,y=$localize`Modifica i contatti presenti nella mail.`,z=$localize`Anticipo massimo prenotazione`,b=$localize`Si potranno creare prenotazioni fino ad un limite di ${"\ufffd0\ufffd"}:INTERPOLATION: giorni da oggi.`,D=$localize`Giorni massimi di anticipo per nuove prenotazioni.`,F=$localize`Anticipo minimo nuove prenotazioni`,x=$localize`Se impostato a zero le persone potranno prenotare in tempo reale per la stessa ora, altrimenti almeno ${"\ufffd0\ufffd"}:INTERPOLATION: ore dopo l'orario attuale.`,X=$localize`Ore di anticipo minime per creare nuove prenotazioni.`,Y=$localize`Costo coperto`,w=$localize`Se impostato ad un numero maggiore di zero, verrà mostrato dove necessario. Altrimenti sarà nascosto.`,j=$localize`Ore di anticipo minime per creare nuove prenotazioni.`,U=$localize`Link condiviso al post Instagram`,Q=$localize`Il post in questione sarà visibile nella homepage, se impostato. Se assente, non verrà mostrata la sezione Instagram nella pagina web.`,J=$localize`Link di condivisione post Instagram.`,B=$localize`Nessun elemento`,[["noItems",""],t,[1,"text-slate-400","mb-3"],i,[3,"formGroup"],[1,"mb-4"],[1,"text-lg","font-bold"],n,[1,"text-slate-400"],S,[3,"formControlName","items","itemContent","stringifyFn","inputSize","submit"],o,s,u,["languageItemContent",""],A,v,R,[3,"formControlName","inputSize","submit"],h,O,y,z,b,[3,"formControlName","inputSize","postfix","submit"],D,F,x,X,Y,w,j,U,Q,J,B]},template:function(i,n){if(1&i&&(e.yuY(0,ue,2,0,"ng-template",null,0,e.gJz),e.I0R(2,"h1"),e.aS0(3,1),e.C$Y(),e.I0R(4,"p",2),e.aS0(5,3),e.C$Y(),e.I0R(6,"form",4)(7,"div",5)(8,"p",6),e.aS0(9,7),e.C$Y(),e.I0R(10,"p",8),e.aS0(11,9),e.C$Y(),e.I0R(12,"app-preferences-select",10),e.qCj("submit",function(o){return n.save("default_language",o)}),e.SAx(13),e.aS0(14,11),e.k70(),e.C$Y()(),e.I0R(15,"div",5)(16,"p",6),e.aS0(17,12),e.C$Y(),e.I0R(18,"p",8),e.aS0(19,13),e.C$Y(),e.yuY(20,pe,2,3,"ng-template",null,14,e.gJz),e.I0R(22,"app-preferences-multiple-select",10),e.qCj("submit",function(o){return n.save("available_locales",o)}),e.SAx(23),e.aS0(24,15),e.k70(),e.C$Y()(),e.I0R(25,"div",5)(26,"p",6),e.aS0(27,16),e.C$Y(),e.I0R(28,"p",8),e.aS0(29,17),e.C$Y(),e.I0R(30,"app-preferences-number-input",18),e.qCj("submit",function(o){return n.save("max_people_per_reservation",o)}),e.SAx(31),e.aS0(32,19),e.k70(),e.C$Y()(),e.I0R(33,"div",5)(34,"p",6),e.aS0(35,20),e.C$Y(),e.I0R(36,"p",8),e.aS0(37,21),e.C$Y(),e.I0R(38,"app-preferences-json-input",18),e.qCj("submit",function(o){return n.save("email_contacts",o)}),e.C$Y()(),e.I0R(39,"div",5)(40,"p",6),e.aS0(41,22),e.C$Y(),e.I0R(42,"p",8),e.aS0(43,23),e.C$Y(),e.I0R(44,"app-preferences-number-input",24),e.qCj("submit",function(o){return n.save("reservation_max_days_in_advance",o)}),e.SAx(45),e.aS0(46,25),e.k70(),e.C$Y()(),e.I0R(47,"div",5)(48,"p",6),e.aS0(49,26),e.C$Y(),e.I0R(50,"p",8),e.aS0(51,27),e.C$Y(),e.I0R(52,"app-preferences-number-input",24),e.qCj("submit",function(o){return n.save("reservation_min_hours_in_advance",o)}),e.SAx(53),e.aS0(54,28),e.k70(),e.C$Y()(),e.I0R(55,"div",5)(56,"p",6),e.aS0(57,29),e.C$Y(),e.I0R(58,"p",8),e.aS0(59,30),e.C$Y(),e.I0R(60,"app-preferences-number-input",24),e.qCj("submit",function(o){return n.save("cover_price",o)}),e.SAx(61),e.aS0(62,31),e.k70(),e.C$Y()(),e.I0R(63,"div",5)(64,"p",6),e.aS0(65,32),e.C$Y(),e.I0R(66,"p",8),e.aS0(67,33),e.C$Y(),e.I0R(68,"app-preferences-text-input",18),e.qCj("submit",function(o){return n.save("instagram_landing_page_url",o)}),e.SAx(69),e.aS0(70,34),e.k70(),e.C$Y()()()),2&i){const S=e.Gew(21);e.yG2(6),e.E7m("formGroup",n.form),e.yG2(6),e.E7m("formControlName","default_language")("items",n.allLanguages)("itemContent",S)("stringifyFn",n.applyPipeFunction(n.languagePipe))("inputSize",n.inputSize),e.yG2(10),e.E7m("formControlName","available_locales")("items",n.allLanguages)("itemContent",S)("stringifyFn",n.applyPipeFunction(n.languagePipe))("inputSize",n.inputSize),e.yG2(8),e.E7m("formControlName","max_people_per_reservation")("inputSize",n.inputSize),e.yG2(8),e.E7m("formControlName","email_contacts")("inputSize",n.inputSize),e.yG2(5),e.oBb(n.form.value.reservation_max_days_in_advance),e.Ylm(43),e.yG2(),e.E7m("formControlName","reservation_max_days_in_advance")("inputSize",n.inputSize)("postfix","giorni"),e.yG2(7),e.oBb(n.form.value.reservation_min_hours_in_advance),e.Ylm(51),e.yG2(),e.E7m("formControlName","reservation_min_hours_in_advance")("inputSize",n.inputSize)("postfix","ore"),e.yG2(8),e.E7m("formControlName","cover_price")("inputSize",n.inputSize)("postfix","\u20ac"),e.yG2(8),e.E7m("formControlName","instagram_landing_page_url")("inputSize",n.inputSize)}},dependencies:[V.BZ,a.sl,a.sz,a.ue,a.u,a.uW,a.Wo,g.q8,f.e,H.ms,W.M,ie,_e,Te,le],encapsulation:2,changeDetection:0})}return _})()}}]);