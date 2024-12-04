"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[7592],{5948:(T,S,t)=>{t.r(S),t.d(S,{ListPreferencesComponent:()=>O});var e=t(4496),f=t(6772);let p=(()=>{class r extends f.A{constructor(){super("/admin/preferences")}search(n={}){return this.http.get("/")}show(n){return this.http.get(`/${n}`)}value(n){return this.http.get(`/${n}/value`)}update(n,o){return this.http.patch(`/${n}`,{value:o})}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275prov=e.wxM({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();var l=t(3480),E=t(8824),d=t(3616),P=t(1128),i=t(8256),c=t(8392),s=t(6532),g=t(2760),m=t(6052),_=t(6504),v=t(1292),I=t(7364),M=t(5193),h=t(7728),N=t(4476);function y(r,R){1&r&&(e.SAx(0),e.aS0(1,11),e.k70())}function D(r,R){1&r&&(e.OEk(0),e.wVc(1,"language")),2&r&&e.cNF(e.kDX(1,1,R.$implicit))}let O=(()=>{class r{constructor(){this.service=(0,e.uUt)(p),this.destroy$=(0,e.uUt)(l.UF),this.notifications=(0,e.uUt)(P.E),this._=(0,e.uUt)(N.OY).setTitle("Preferences | La Porta D'Acqua"),this.inputSize="l",this.languagePipe=(0,e.uUt)(I.e),this.allLanguages=Object.keys(v.S),this.form=new _.WC({known_languages:new _.Ku([])}),this.saving=(0,e.OCB)(!1),this.searching=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.searching())}ngOnInit(){this.reload()}save(n,o){this.saving.set(!0),Array.isArray(o)&&(o=o.join(",")),this.service.update(n,o).pipe((0,E.U)(()=>this.saving.set(!1)),(0,E.U)(()=>this.reload())).subscribe({error:a=>{this.notifications.error((0,i.mk)(a)||c.a)}})}applyPipeFunction(n){return n.transform}reload(){this.searching.set(!0),this.service.search().pipe((0,d.a)(this.destroy$),(0,E.U)(()=>this.searching.set(!1))).subscribe({next:n=>{this.updateFormByData(n.items)},error:n=>{this.notifications.error((0,i.mk)(n)||c.a)}})}updateFormByData(n){const o={};["known_languages"].forEach(a=>{const u=n.find(C=>C.key===a);u&&Array.isArray(u.value)?o[a]=u.value:u&&"string"==typeof u.value?o[a]=u.value.split(","):u?console.warn(`Preference ${a} not found or invalid`,u.value):console.warn(`Preference ${a} not found`)}),this.form.patchValue(o)}static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275cmp=e.In1({type:r,selectors:[["app-list-preferences"]],standalone:!0,features:[e.M5G([l.UF,I.e]),e.UHJ],decls:23,vars:6,consts:()=>{let n,o,a,u;return n="Personal preferences",o="These settings will only be applied to your account.",a="Select many languages.",u="No element",[["noItems",""],n,[1,"text-slate-400","mb-3"],o,[3,"formGroup"],[1,"mb-4"],[1,"text-lg","font-bold"],[1,"text-slate-400"],["knownLanguagesItemContent",""],[3,"formControlName","items","itemContent","stringifyFn","inputSize","submit"],a,u]},template:function(o,a){if(1&o&&(e.yuY(0,y,2,0,"ng-template",null,0,e.gJz),e.I0R(2,"h1"),e.aS0(3,1),e.C$Y(),e.I0R(4,"p",2),e.aS0(5,3),e.C$Y(),e.I0R(6,"form",4)(7,"div",5)(8,"p",6),e.OEk(9,"Lingua preferita"),e.C$Y(),e.I0R(10,"p",7),e.OEk(11,"Seleziona la lingua che preferisci utilizzare."),e.C$Y(),e.wR5(12,"app-admin-language-switcher"),e.C$Y(),e.I0R(13,"div",5)(14,"p",6),e.OEk(15,"Lingue conosciute"),e.C$Y(),e.I0R(16,"p",7),e.OEk(17,"Quali lingue conosci? Questa informazione ci serve per capire quali lingue mostrarti quando crei o modifichi elementi con nomi in diverse lingue."),e.C$Y(),e.yuY(18,D,2,3,"ng-template",null,8,e.gJz),e.I0R(20,"app-preferences-multiple-select",9),e.qCj("submit",function(C){return a.save("known_languages",C)}),e.SAx(21),e.aS0(22,10),e.k70(),e.C$Y()()()),2&o){const u=e.Gew(19);e.yG2(6),e.E7m("formGroup",a.form),e.yG2(14),e.E7m("formControlName","known_languages")("items",a.allLanguages)("itemContent",u)("stringifyFn",a.applyPipeFunction(a.languagePipe))("inputSize",a.inputSize)}},dependencies:[s.y,g.BZ,_.sl,_.sz,_.ue,_.u,_.uW,_.Wo,m.q8,I.e,M.ms,h.M],encapsulation:2,changeDetection:0})}return r})()},6988:(T,S,t)=>{t.d(S,{E:()=>d,Q:()=>P});var e=t(4496),f=t(3480),p=t(3840),l=t(3120),E=t(3616);let d=(()=>{class i{constructor(s,g){this.el=s,this.destroy$=g}set tuiScrollIntoView(s){s&&(0,l.k)(0).pipe((0,E.a)(this.destroy$)).subscribe(()=>{this.el.nativeElement.dispatchEvent(new CustomEvent(p.dG,{bubbles:!0,detail:this.el.nativeElement}))})}}return i.\u0275fac=function(s){return new(s||i)(e.GI1(e.GMv),e.GI1(f.UF,2))},i.\u0275dir=e.Sc5({type:i,selectors:[["","tuiScrollIntoView",""]],inputs:{tuiScrollIntoView:"tuiScrollIntoView"},features:[e.M5G([f.UF])]}),i})(),P=(()=>{class i{}return i.\u0275fac=function(s){return new(s||i)},i.\u0275mod=e.a4G({type:i}),i.\u0275inj=e.s3X({}),i})()},7020:(T,S,t)=>{t.d(S,{q:()=>P});var e=t(4496),f=t(1800),p=t(3480),l=t(5944),E=t(4336),d=t(3012);let P=(()=>{class i{constructor(s,g,m,_,v){this.host=s,this.control=g,this.el=m,this.idService=_,this.itemsHandlers=v,this.disabledItemHandler=null,this.datalist=null}get id(){return this.el.nativeElement.id||this.idService.generate()}}return i.\u0275fac=function(s){return new(s||i)(e.GI1(l.Mn),e.GI1(f._y),e.GI1(e.GMv),e.GI1(p.y2),e.GI1(d.qc))},i.\u0275dir=e.Sc5({type:i,viewQuery:function(s,g){if(1&s&&e.CC$(E.Ux,7,e.Yw2),2&s){let m;e.wto(m=e.Gqi())&&(g.datalist=m.first)}},hostVars:1,hostBindings:function(s,g){2&s&&e.SoX("id",g.id)},inputs:{disabledItemHandler:"disabledItemHandler"}}),i})()},9612:(T,S,t)=>{t.d(S,{W:()=>p});var e=t(4496);let p=(()=>{class l{}return l.\u0275fac=function(d){return new(d||l)},l.\u0275mod=e.a4G({type:l}),l.\u0275inj=e.s3X({}),l})()}}]);