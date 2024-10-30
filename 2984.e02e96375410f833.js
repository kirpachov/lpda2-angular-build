"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[2984],{2984:(X,M,a)=>{a.r(M),a.d(M,{ListSettingsComponent:()=>me});var e=a(4496),N=a(3480),C=a(8824),E=a(3616),z=a(1128),g=a(8256),G=a(8392),v=a(2760),$=a(6052),r=a(6504),R=a(1292),A=a(7364),y=a(5193),D=a(7728),b=a(6772);let F=(()=>{class _ extends b.A{constructor(){super("/admin/settings")}search(t={}){return this.http.get("/")}show(t){return this.http.get(`/${t}`)}value(t){return this.http.get(`/${t}/value`)}update(t,i){return"object"==typeof i&&null!=i&&(i=JSON.stringify(i)),this.http.patch(`/${t}`,{value:i})}static#e=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275prov=e.wxM({token:_,factory:_.\u0275fac,providedIn:"root"})}return _})();var d=a(8048),h=a(5188),P=a(9308),S=a(7372),I=a(7936),l=a(4336);function T(_,O){if(1&_&&e.wR5(0,"tui-data-list-wrapper",4),2&_){const t=e.GaO();e.E7m("emptyContent",t.noItemsContent)("itemContent",t.itemContent)("items",t.shownItems)}}const m=["*"];let c=(()=>{class _ extends P.A{constructor(){super(...arguments),this.items=[],this.shownItems=[],this.itemContent=t=>this.stringifyFn(t.$implicit),this.noItemsContent="Nessun elemento trovato",this.search="",this.stringifyFn=t=>t}ngOnChanges(t){super.ngOnChanges(t),t.items&&(this.shownItems=this.items),t.search&&this.onSearchChange(this.search)}onSearchChange(t){this.search=t,this.shownItems=this.items.filter(i=>i.toLowerCase().includes((this.search??"").toLowerCase()))}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-select"]],inputs:{items:"items",itemContent:"itemContent",noItemsContent:"noItemsContent",stringifyFn:"stringifyFn"},standalone:!0,features:[e.M5G([N.UF,{provide:r.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.SYr,e.UHJ],ngContentSelectors:m,decls:5,vars:5,consts:[[1,"mb-2",3,"tuiTextfieldSize","formControl","stringify"],["tuiTextfield","",3,"placeholder"],[3,"emptyContent","itemContent","items",4,"tuiDataList"],[3,"expanded","submit","cancel"],[3,"emptyContent","itemContent","items"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-select",0),e._Xx(1),e.wR5(2,"input",1),e.yuY(3,T,1,3,"tui-data-list-wrapper",2),e.C$Y(),e.I0R(4,"app-submit-expand",3),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("tuiTextfieldSize",n.inputSize)("formControl",n.control)("stringify",n.stringifyFn),e.yG2(2),e.E7m("placeholder",n.placeholder),e.yG2(2),e.E7m("expanded",n.somethingChanged()))},dependencies:[d.aS,d.rD,r.sl,r.ue,r.ug,h.my,h.cP,h.uO,I.b,$.q8,$.OO,l.Ux,S.Q],encapsulation:2})}return _})();var x=a(9888);const _e=["*"];let ae=(()=>{class _ extends P.A{constructor(){super(...arguments),this.postfix=""}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-number-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder",postfix:"postfix"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([N.UF,{provide:r.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],ngContentSelectors:_e,decls:4,vars:4,consts:[[1,"mb-2",3,"tuiTextfieldPostfix","formControl","tuiTextfieldSize"],["tuiTextfield",""],[3,"expanded","submit","cancel"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-input-number",0),e._Xx(1),e.wR5(2,"input",1),e.C$Y(),e.I0R(3,"app-submit-expand",2),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("tuiTextfieldPostfix",n.postfix)("formControl",n.control)("tuiTextfieldSize",n.inputSize),e.yG2(3),e.E7m("expanded",n.somethingChanged()))},dependencies:[x.Q7,x.mi,x.Qj,I.b,r.sl,r.ue,r.ug,d.aS,d.rD,d.We,S.Q],encapsulation:2})}return _})();var L=a(3797),se=a(372);const re=()=>({});function le(_,O){if(1&_){const t=e.KQA();e.I0R(0,"div",2)(1,"span",3),e.OEk(2),e.wVc(3,"commonTranslate"),e.C$Y()(),e.I0R(4,"div",4)(5,"tui-input",5),e.qCj("ngModelChange",function(n){const o=e.usT(t).$implicit,s=e.GaO();return e.CGJ(s.updateValue(o,n))}),e.wR5(6,"input",6),e.C$Y()()}if(2&_){const t=O.$implicit,i=e.GaO();let n;e.yG2(2),e.cNF(e.kDX(3,4,t)),e.yG2(3),e.E7m("tuiTextfieldSize",i.inputSize)("ngModel",null!==(n=(i.control.value||e.q4q(6,re))[t])&&void 0!==n?n:null)("tuiTextfieldLabelOutside",!0)}}let Se=(()=>{class _ extends P.A{constructor(){super(...arguments),this.keys=(0,e.OCB)([])}ngOnInit(){super.ngOnInit(),this.control.valueChanges.pipe((0,E.a)(this.destroy$)).subscribe({next:t=>{this.keys.set(t?Object.keys(t):[])}})}updateValue(t,i){this.control.setValue({...this.control.value,[t]:i})}static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-json-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([N.UF,{provide:r.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],decls:4,vars:1,consts:[[1,"grid","grid-cols-[10%_auto]","gap-y-3","gap-x-2","mb-3"],[3,"expanded","submit","cancel"],[1,"key-column","flex","items-center","justify-end"],[1,"font-bold"],[1,"value-column"],[3,"tuiTextfieldSize","ngModel","tuiTextfieldLabelOutside","ngModelChange"],["tuiTextfield",""]],template:function(i,n){1&i&&(e.I0R(0,"div",0),e.c53(1,le,7,7,null,null,e.oxv),e.C$Y(),e.I0R(3,"app-submit-expand",1),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.yG2(),e.oho(n.keys()),e.yG2(2),e.E7m("expanded",n.somethingChanged()))},dependencies:[r.sl,r.ue,S.Q,L.CQ,L.Oo,L.cP,I.b,r.y,r._G,d.aS,d.E9,d.rD,se.c],encapsulation:2})}return _})();const Te=["*"];let ue=(()=>{class _ extends P.A{static#e=this.\u0275fac=(()=>{let t;return function(n){return(t||(t=e.otF(_)))(n||_)}})();static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-preferences-text-input"]],inputs:{mandatory:"mandatory",inputSize:"inputSize",placeholder:"placeholder"},outputs:{submit:"submit",valueChange:"valueChange"},standalone:!0,features:[e.M5G([N.UF,{provide:r.Y6,useExisting:(0,e.wd)(()=>_),multi:!0}]),e.eg9,e.UHJ],ngContentSelectors:Te,decls:4,vars:3,consts:[[1,"mb-2",3,"formControl","tuiTextfieldSize"],["tuiTextfield",""],[3,"expanded","submit","cancel"]],template:function(i,n){1&i&&(e.kPM(),e.I0R(0,"tui-input",0),e._Xx(1),e.wR5(2,"input",1),e.C$Y(),e.I0R(3,"app-submit-expand",2),e.qCj("submit",function(){return n.emitSubmit()})("cancel",function(){return n.resetInitialValue()}),e.C$Y()),2&i&&(e.E7m("formControl",n.control)("tuiTextfieldSize",n.inputSize),e.yG2(3),e.E7m("expanded",n.somethingChanged()))},dependencies:[L.CQ,L.Oo,L.cP,I.b,d.aS,d.rD,r.sl,r.ue,r.ug,S.Q],encapsulation:2})}return _})();var pe=a(4476);function Ie(_,O){1&_&&(e.SAx(0),e.aS0(1,35),e.k70())}function ce(_,O){1&_&&(e.OEk(0),e.wVc(1,"language")),2&_&&e.cNF(e.kDX(1,1,O.$implicit))}let me=(()=>{class _{constructor(){this.service=(0,e.uUt)(F),this.destroy$=(0,e.uUt)(N.UF),this.notifications=(0,e.uUt)(z.E),this._=(0,e.uUt)(pe.OY).setTitle("Impostazioni di Sistema | La Porta D'Acqua"),this.languagePipe=(0,e.uUt)(A.e),this.allLanguages=Object.keys(R.S),this.form=new r.WC({available_locales:new r.Ku([]),default_language:new r.Ku(null),max_people_per_reservation:new r.Ku(null),email_contacts:new r.Ku({}),reservation_max_days_in_advance:new r.Ku(null),reservation_min_hours_in_advance:new r.Ku(null),cover_price:new r.Ku(null),instagram_landing_page_url:new r.Ku(null)}),this.saving=(0,e.OCB)(!1),this.searching=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.searching()),this.inputSize="l"}ngOnInit(){this.reload()}save(t,i){this.saving.set(!0),Array.isArray(i)&&(i=i.join(",")),this.service.update(t,i).pipe((0,C.U)(()=>this.saving.set(!1)),(0,C.U)(()=>this.reload())).subscribe({error:n=>{this.notifications.error((0,g.mk)(n)||G.a)}})}applyPipeFunction(t){return t.transform}reload(){this.searching.set(!0),this.service.search().pipe((0,E.a)(this.destroy$),(0,C.U)(()=>this.searching.set(!1))).subscribe({next:t=>{this.updateFormByData(t.items)},error:t=>{this.notifications.error((0,g.mk)(t)||G.a)}})}updateFormByData(t){const i={};["available_locales"].forEach(o=>{const s=t.find(f=>f.key===o);s&&Array.isArray(s.value)?i[o]=s.value:s&&"string"==typeof s.value?i[o]=s.value.split(","):s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)}),["default_language","instagram_landing_page_url"].forEach(o=>{const s=t.find(f=>f.key===o);s&&"string"==typeof s.value?i[o]=s.value:s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)}),["max_people_per_reservation","reservation_max_days_in_advance","reservation_min_hours_in_advance","cover_price"].forEach(o=>{const s=t.find(f=>f.key===o);s&&"string"==typeof s.value&&s.value.length>0?i[o]=Number(s.value):s&&"number"==typeof s.value?i[o]=s.value:s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)}),["email_contacts"].forEach(o=>{const s=t.find(f=>f.key===o);s&&"string"==typeof s.value?i[o]=JSON.parse(s.value):s&&"object"==typeof s.value&&s.value?i[o]=s.value:s?console.warn(`Setting ${o} not found or invalid`,s.value):console.warn(`Setting ${o} not found`)});const n=[],u=t.filter(o=>!i.hasOwnProperty(o.key)&&!n.includes(o.key));u.length>0&&((0,e.sPQ)()&&this.notifications.error(`Unmanaged settings: ${u.map(o=>o.key).join(", ")}`),console.warn(`Unmanaged settings: ${u.map(o=>o.key).join(", ")}`,u)),this.form.patchValue(i)}static#e=this.\u0275fac=function(i){return new(i||_)};static#n=this.\u0275cmp=e.In1({type:_,selectors:[["app-list-settings"]],standalone:!0,features:[e.M5G([N.UF,A.e]),e.UHJ],decls:71,vars:28,consts:()=>{let t,i,n,u,o,s,f,Y,U,w,B,K,j,Q,W,V,J,H,k,Z,q,ee,ne,te,ie,oe;return t="Impostazioni di sistema",i="Queste impostazioni verranno applicate a tutto il sito ed i suoi iscritti.",n="Lingua di default",u="Qual'\xE8 la lingua di default del sistema?",o="Seleziona la lingua di default",s="Lingue di sistema",f="\n          Quali lingue vuoi supportare? Le parti \"statiche\" come le\n          pagine web non verranno tradotte in ulteriori lingue in automatico, ma\n          le parti \"dinamiche\" come nomi e descrizioni del men\xF9\n          potranno essere tradotti in qualunque momento dallo staff.\n        ",Y="Seleziona molte lingue",U="Massimo persone per prenotazione",w="\n          Quando un utente crea una prenotazione, quante persone al massimo pu\xF2\n          selezionare?\n        ",B="Inserisci il numero massimo di persone per singola prenotazione.",K="Contatti email",j="Modifica i contatti presenti nella mail.",Q="Anticipo massimo prenotazione",W="\n          Si potranno creare prenotazioni fino ad un limite di \n          " + "\ufffd0\ufffd" + "\n           giorni da oggi.\n        ",V="Giorni massimi di anticipo per nuove prenotazioni.",J="Anticipo minimo nuove prenotazioni",H="\n          Se impostato a zero le persone potranno prenotare in tempo reale per\n          la stessa ora, altrimenti almeno \n          " + "\ufffd0\ufffd" + "\n           ore dopo l'orario attuale.\n        ",k="Ore di anticipo minime per creare nuove prenotazioni.",Z="Costo coperto",q="\n          Se impostato ad un numero maggiore di zero, verr\xE0 mostrato dove\n          necessario. Altrimenti sar\xE0 nascosto.\n        ",ee="Ore di anticipo minime per creare nuove prenotazioni.",ne="Link condiviso al post Instagram",te="\n          Il post in questione sar\xE0 visibile nella homepage, se impostato. Se\n          assente, non verr\xE0 mostrata la sezione Instagram nella pagina web.\n        ",ie="Link di condivisione post Instagram.",oe="Nessun elemento",[["noItems",""],t,[1,"text-slate-400","mb-3"],i,[3,"formGroup"],[1,"mb-4"],[1,"text-lg","font-bold"],n,[1,"text-slate-400"],u,[3,"formControlName","items","itemContent","stringifyFn","inputSize","submit"],o,s,f,["languageItemContent",""],Y,U,w,[3,"formControlName","inputSize","submit"],B,K,j,Q,W,[3,"formControlName","inputSize","postfix","submit"],V,J,H,k,Z,q,ee,ne,te,ie,oe]},template:function(i,n){if(1&i&&(e.yuY(0,Ie,2,0,"ng-template",null,0,e.gJz),e.I0R(2,"h1"),e.aS0(3,1),e.C$Y(),e.I0R(4,"p",2),e.aS0(5,3),e.C$Y(),e.I0R(6,"form",4)(7,"div",5)(8,"p",6),e.aS0(9,7),e.C$Y(),e.I0R(10,"p",8),e.aS0(11,9),e.C$Y(),e.I0R(12,"app-preferences-select",10),e.qCj("submit",function(o){return n.save("default_language",o)}),e.SAx(13),e.aS0(14,11),e.k70(),e.C$Y()(),e.I0R(15,"div",5)(16,"p",6),e.aS0(17,12),e.C$Y(),e.I0R(18,"p",8),e.aS0(19,13),e.C$Y(),e.yuY(20,ce,2,3,"ng-template",null,14,e.gJz),e.I0R(22,"app-preferences-multiple-select",10),e.qCj("submit",function(o){return n.save("available_locales",o)}),e.SAx(23),e.aS0(24,15),e.k70(),e.C$Y()(),e.I0R(25,"div",5)(26,"p",6),e.aS0(27,16),e.C$Y(),e.I0R(28,"p",8),e.aS0(29,17),e.C$Y(),e.I0R(30,"app-preferences-number-input",18),e.qCj("submit",function(o){return n.save("max_people_per_reservation",o)}),e.SAx(31),e.aS0(32,19),e.k70(),e.C$Y()(),e.I0R(33,"div",5)(34,"p",6),e.aS0(35,20),e.C$Y(),e.I0R(36,"p",8),e.aS0(37,21),e.C$Y(),e.I0R(38,"app-preferences-json-input",18),e.qCj("submit",function(o){return n.save("email_contacts",o)}),e.C$Y()(),e.I0R(39,"div",5)(40,"p",6),e.aS0(41,22),e.C$Y(),e.I0R(42,"p",8),e.aS0(43,23),e.C$Y(),e.I0R(44,"app-preferences-number-input",24),e.qCj("submit",function(o){return n.save("reservation_max_days_in_advance",o)}),e.SAx(45),e.aS0(46,25),e.k70(),e.C$Y()(),e.I0R(47,"div",5)(48,"p",6),e.aS0(49,26),e.C$Y(),e.I0R(50,"p",8),e.aS0(51,27),e.C$Y(),e.I0R(52,"app-preferences-number-input",24),e.qCj("submit",function(o){return n.save("reservation_min_hours_in_advance",o)}),e.SAx(53),e.aS0(54,28),e.k70(),e.C$Y()(),e.I0R(55,"div",5)(56,"p",6),e.aS0(57,29),e.C$Y(),e.I0R(58,"p",8),e.aS0(59,30),e.C$Y(),e.I0R(60,"app-preferences-number-input",24),e.qCj("submit",function(o){return n.save("cover_price",o)}),e.SAx(61),e.aS0(62,31),e.k70(),e.C$Y()(),e.I0R(63,"div",5)(64,"p",6),e.aS0(65,32),e.C$Y(),e.I0R(66,"p",8),e.aS0(67,33),e.C$Y(),e.I0R(68,"app-preferences-text-input",18),e.qCj("submit",function(o){return n.save("instagram_landing_page_url",o)}),e.SAx(69),e.aS0(70,34),e.k70(),e.C$Y()()()),2&i){const u=e.Gew(21);e.yG2(6),e.E7m("formGroup",n.form),e.yG2(6),e.E7m("formControlName","default_language")("items",n.allLanguages)("itemContent",u)("stringifyFn",n.applyPipeFunction(n.languagePipe))("inputSize",n.inputSize),e.yG2(10),e.E7m("formControlName","available_locales")("items",n.allLanguages)("itemContent",u)("stringifyFn",n.applyPipeFunction(n.languagePipe))("inputSize",n.inputSize),e.yG2(8),e.E7m("formControlName","max_people_per_reservation")("inputSize",n.inputSize),e.yG2(8),e.E7m("formControlName","email_contacts")("inputSize",n.inputSize),e.yG2(5),e.oBb(n.form.value.reservation_max_days_in_advance),e.Ylm(43),e.yG2(),e.E7m("formControlName","reservation_max_days_in_advance")("inputSize",n.inputSize)("postfix","giorni"),e.yG2(7),e.oBb(n.form.value.reservation_min_hours_in_advance),e.Ylm(51),e.yG2(),e.E7m("formControlName","reservation_min_hours_in_advance")("inputSize",n.inputSize)("postfix","ore"),e.yG2(8),e.E7m("formControlName","cover_price")("inputSize",n.inputSize)("postfix","\u20ac"),e.yG2(8),e.E7m("formControlName","instagram_landing_page_url")("inputSize",n.inputSize)}},dependencies:[v.BZ,r.sl,r.sz,r.ue,r.u,r.uW,r.Wo,$.q8,A.e,y.ms,D.M,c,ae,Se,ue],encapsulation:2,changeDetection:0})}return _})()},372:(X,M,a)=>{a.d(M,{c:()=>C});var e=a(4496);const N={active:"Attivo",banned:"Bannato",not_verified:"Non verificato",unsubscribed:"Disiscritto",male:"Maschio",female:"Femmina",address:"Indirizzo",phone:"Telefono",email:"Email",whatsapp_number:"Numero WhatsApp",whatsapp_url:"URL WhatsApp",facebook_url:"URL Facebook",instagram_url:"URL Instagram",tripadvisor_url:"URL TripAdvisor",homepage_url:"URL Homepage",google_url:"URL Google",it:"Italiano",en:"Inglese"};let C=(()=>{class E{transform(g){return"string"==typeof g&&g.length>0?N[g]||g:""}static#e=this.\u0275fac=function(G){return new(G||E)};static#n=this.\u0275pipe=e.UTH({name:"commonTranslate",type:E,pure:!0,standalone:!0})}return E})()},3797:(X,M,a)=>{a.d(M,{CQ:()=>P,Oo:()=>d,cP:()=>h});var e=a(4496),N=a(6504),C=a(3044),E=a(1800),z=a(4164),g=a(4680),G=a(466),v=a(7936),$=a(8048),r=a(4336),R=a(5944),A=a(9371),y=a(796),D=a(1368);const b=["*",[["input"]]],F=["*","input"];let d=(()=>{class S extends E._y{constructor(l,T,m,c){super(l,T,c),this.textfieldSize=m,this.open=!1}get size(){return this.textfieldSize.size}get nativeFocusableElement(){return this.computedDisabled||!this.textfield?null:this.textfield.nativeFocusableElement}get focused(){return(0,z.ER)(this.nativeFocusableElement)||!!this.hostedDropdown&&this.hostedDropdown.focused}get canOpen(){return this.interactive&&!!this.datalist}onValueChange(l){this.value=l,this.open=!0}onActiveZone(l){this.updateFocused(l)}handleOption(l){this.setNativeValue(String(l)),this.focusInput(),this.value=String(l),this.open=!1}getFallbackValue(){return""}focusInput(l=!1){this.nativeFocusableElement&&this.nativeFocusableElement.focus({preventScroll:l})}setNativeValue(l){this.nativeFocusableElement&&(this.nativeFocusableElement.value=l)}}return S.\u0275fac=function(l){return new(l||S)(e.GI1(N.eq,10),e.GI1(e.kD9),e.GI1($.$K),e.GI1(E.cn,8))},S.\u0275cmp=e.In1({type:S,selectors:[["tui-input"]],contentQueries:function(l,T,m){if(1&l&&e.szK(m,r.Ux,5,e.Yw2),2&l){let c;e.wto(c=e.Gqi())&&(T.datalist=c.first)}},viewQuery:function(l,T){if(1&l&&(e.CC$(G.Qw,5),e.CC$(v.y_,5)),2&l){let m;e.wto(m=e.Gqi())&&(T.hostedDropdown=m.first),e.wto(m=e.Gqi())&&(T.textfield=m.first)}},hostVars:1,hostBindings:function(l,T){2&l&&e.e48("data-size",T.size)},features:[e.M5G([y.g3,(0,g.NK)(S),(0,R.UH)(S),(0,E.q4)(S)],[y.YL]),e.eg9],ngContentSelectors:F,decls:4,vars:11,consts:[[1,"t-hosted",3,"canOpen","content","open","openChange","tuiActiveZoneChange"],["automation-id","tui-input__textfield",1,"t-textfield",3,"disabled","focusable","invalid","nativeId","pseudoFocus","pseudoHover","readOnly","value","valueChange"]],template:function(l,T){1&l&&(e.kPM(b),e.I0R(0,"tui-hosted-dropdown",0),e.iHE("openChange",function(c){return e.kNx(T.open,c)||(T.open=c),c}),e.qCj("tuiActiveZoneChange",function(c){return T.onActiveZone(c)}),e.I0R(1,"tui-primitive-textfield",1),e.qCj("valueChange",function(c){return T.onValueChange(c)}),e._Xx(2),e._Xx(3,1,["ngProjectAs","input",5,["input"]]),e.C$Y()()),2&l&&(e.E7m("canOpen",T.canOpen)("content",T.datalist||""),e.OKB("open",T.open),e.yG2(),e.E7m("disabled",T.computedDisabled)("focusable",T.computedFocusable)("invalid",T.computedInvalid)("nativeId",T.nativeId)("pseudoFocus",T.computedFocused)("pseudoHover",T.pseudoHover)("readOnly",T.readOnly)("value",T.value))},dependencies:[G.Qw,v.y_,C.M,v.KQ],styles:["[_nghost-%COMP%]{display:block;border-radius:var(--tui-radius-m);text-align:left}._disabled[_nghost-%COMP%]{pointer-events:none}.t-hosted[_ngcontent-%COMP%]{display:block;border-radius:inherit}.t-textfield[_ngcontent-%COMP%]{border-radius:inherit;text-align:inherit}"],changeDetection:0}),S})(),h=(()=>{class S extends A.Cm{onValueChange(l){this.host.onValueChange(l)}}return S.\u0275fac=(()=>{let I;return function(T){return(I||(I=e.otF(S)))(T||S)}})(),S.\u0275dir=e.Sc5({type:S,selectors:[["tui-input"]],features:[e.M5G([(0,R.iu)(S)]),e.eg9]}),S})(),P=(()=>{class S{}return S.\u0275fac=function(l){return new(l||S)},S.\u0275mod=e.a4G({type:S}),S.\u0275inj=e.s3X({imports:[[D.MD,C.L,v.KA,G.GE]]}),S})()}}]);