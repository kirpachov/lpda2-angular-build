"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4860],{5948:(N,f,t)=>{t.r(f),t.d(f,{ListPreferencesComponent:()=>L});var e=t(4496),m=t(6772);let C=(()=>{class o extends m.A{constructor(){super("/admin/preferences")}search(n={}){return this.http.get("/")}show(n){return this.http.get(`/${n}`)}value(n){return this.http.get(`/${n}/value`)}update(n,i){return this.http.patch(`/${n}`,{value:i})}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275prov=e.wxM({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var r=t(3480),E=t(8824),c=t(3616),P=t(1128),_=t(8256),p=t(8392),l=t(6800),g=t(2760),d=t(6052),u=t(6504),T=t(1292),R=t(7364),v=t(5193),I=t(7728),M=t(4476);function y(o,h){1&o&&(e.SAx(0),e.aS0(1,11),e.k70())}function A(o,h){1&o&&(e.OEk(0),e.wVc(1,"language")),2&o&&e.cNF(e.kDX(1,1,h.$implicit))}let L=(()=>{class o{constructor(){this.service=(0,e.uUt)(C),this.destroy$=(0,e.uUt)(r.UF),this.notifications=(0,e.uUt)(P.E),this._=(0,e.uUt)(M.OY).setTitle("Preferences | La Porta D'Acqua"),this.inputSize="l",this.languagePipe=(0,e.uUt)(R.e),this.allLanguages=Object.keys(T.S),this.form=new u.WC({known_languages:new u.Ku([])}),this.saving=(0,e.OCB)(!1),this.searching=(0,e.OCB)(!1),this.loading=(0,e.S6b)(()=>this.saving()||this.searching())}ngOnInit(){this.reload()}save(n,i){this.saving.set(!0),Array.isArray(i)&&(i=i.join(",")),this.service.update(n,i).pipe((0,E.U)(()=>this.saving.set(!1)),(0,E.U)(()=>this.reload())).subscribe({error:s=>{this.notifications.error((0,_.mk)(s)||p.a)}})}applyPipeFunction(n){return n.transform}reload(){this.searching.set(!0),this.service.search().pipe((0,c.a)(this.destroy$),(0,E.U)(()=>this.searching.set(!1))).subscribe({next:n=>{this.updateFormByData(n.items)},error:n=>{this.notifications.error((0,_.mk)(n)||p.a)}})}updateFormByData(n){const i={};["known_languages"].forEach(s=>{const a=n.find(S=>S.key===s);a&&Array.isArray(a.value)?i[s]=a.value:a&&"string"==typeof a.value?i[s]=a.value.split(","):a?console.warn(`Preference ${s} not found or invalid`,a.value):console.warn(`Preference ${s} not found`)}),this.form.patchValue(i)}static#e=this.\u0275fac=function(i){return new(i||o)};static#t=this.\u0275cmp=e.In1({type:o,selectors:[["app-list-preferences"]],standalone:!0,features:[e.M5G([r.UF,R.e]),e.UHJ],decls:23,vars:6,consts:()=>{let n,i,s,a;return n="Personal preferences",i="These settings will only be applied to your account.",s="Select many languages.",a="No element",[["noItems",""],n,[1,"text-slate-400","mb-3"],i,[3,"formGroup"],[1,"mb-4"],[1,"text-lg","font-bold"],[1,"text-slate-400"],["knownLanguagesItemContent",""],[3,"formControlName","items","itemContent","stringifyFn","inputSize","submit"],s,a]},template:function(i,s){if(1&i&&(e.yuY(0,y,2,0,"ng-template",null,0,e.gJz),e.I0R(2,"h1"),e.aS0(3,1),e.C$Y(),e.I0R(4,"p",2),e.aS0(5,3),e.C$Y(),e.I0R(6,"form",4)(7,"div",5)(8,"p",6),e.OEk(9,"Lingua preferita"),e.C$Y(),e.I0R(10,"p",7),e.OEk(11,"Seleziona la lingua che preferisci utilizzare."),e.C$Y(),e.wR5(12,"app-admin-language-switcher"),e.C$Y(),e.I0R(13,"div",5)(14,"p",6),e.OEk(15,"Lingue conosciute"),e.C$Y(),e.I0R(16,"p",7),e.OEk(17,"Quali lingue conosci? Questa informazione ci serve per capire quali lingue mostrarti quando crei o modifichi elementi con nomi in diverse lingue."),e.C$Y(),e.yuY(18,A,2,3,"ng-template",null,8,e.gJz),e.I0R(20,"app-preferences-multiple-select",9),e.qCj("submit",function(S){return s.save("known_languages",S)}),e.SAx(21),e.aS0(22,10),e.k70(),e.C$Y()()()),2&i){const a=e.Gew(19);e.yG2(6),e.E7m("formGroup",s.form),e.yG2(14),e.E7m("formControlName","known_languages")("items",s.allLanguages)("itemContent",a)("stringifyFn",s.applyPipeFunction(s.languagePipe))("inputSize",s.inputSize)}},dependencies:[l.y,g.BZ,u.sl,u.sz,u.ue,u.u,u.uW,u.Wo,d.q8,R.e,v.ms,I.M],encapsulation:2,changeDetection:0})}return o})()},7020:(N,f,t)=>{t.d(f,{q:()=>P});var e=t(4496),m=t(1800),C=t(3480),r=t(5944),E=t(4336),c=t(3012);let P=(()=>{class _{constructor(l,g,d,u,T){this.host=l,this.control=g,this.el=d,this.idService=u,this.itemsHandlers=T,this.disabledItemHandler=null,this.datalist=null}get id(){return this.el.nativeElement.id||this.idService.generate()}}return _.\u0275fac=function(l){return new(l||_)(e.GI1(r.Mn),e.GI1(m._y),e.GI1(e.GMv),e.GI1(C.y2),e.GI1(c.qc))},_.\u0275dir=e.Sc5({type:_,viewQuery:function(l,g){if(1&l&&e.CC$(E.Ux,7,e.Yw2),2&l){let d;e.wto(d=e.Gqi())&&(g.datalist=d.first)}},hostVars:1,hostBindings:function(l,g){2&l&&e.SoX("id",g.id)},inputs:{disabledItemHandler:"disabledItemHandler"}}),_})()},9612:(N,f,t)=>{t.d(f,{W:()=>C});var e=t(4496);let C=(()=>{class r{}return r.\u0275fac=function(c){return new(c||r)},r.\u0275mod=e.a4G({type:r}),r.\u0275inj=e.s3X({}),r})()}}]);