"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[4884],{4884:($,r,e)=>{e.r(r),e.d(r,{NewAllergenModule:()=>M});var s=e(1236),g=e(7552),t=e(4496),f=e(1512),c=e(8212),v=e(1560),d=e(6504),h=e(7307),u=e(3480),p=e(3616),C=e(3797),E=e(8588),N=e(9938),A=e(1128),L=e(8256),m=e(4319);let S=(()=>{class o{constructor(){this.service=(0,t.uUt)(h._),this.destroy$=(0,t.uUt)(u.UF),this.router=(0,t.uUt)(s.E5),this.route=(0,t.uUt)(s.gV),this.notifications=(0,t.uUt)(A.E),this.loading=(0,t.OCB)(!1)}submit(i){this.loading.set(!0),this.service.create(i).pipe((0,p.a)(this.destroy$)).subscribe({next:n=>{this.notifications.fireSnackBar("Allergene salvato"),this.router.navigate([".."],{relativeTo:this.route})},error:n=>{this.formComponent&&N.y.assignErrorsToForm(this.formComponent.form,n),this.notifications.error((0,L.mk)(n)||"Qualcosa \xE8 andato storto nel salvataggio.")}})}cancel(){confirm("Sei sicuro di voler annullare?")&&this.navigateBack()}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-new-allergen"]],viewQuery:function(n,a){if(1&n&&t.CC$(m.g,5),2&n){let l;t.wto(l=t.Gqi())&&(a.formComponent=l.first)}},standalone:!0,features:[t.M5G([u.UF]),t.UHJ],decls:8,vars:1,consts:()=>{let i;return i="Crea allergene",[[1,"flex","items-center","justify-between"],i,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(n,a){1&n&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return a.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-allergen-form",3),t.qCj("cancelled",function(){return a.cancel()})("formSubmit",function(R){return a.submit(R)}),t.C$Y()),2&n&&(t.yG2(7),t.E7m("loading",a.loading()))},dependencies:[f.w,v.qL,d.sl,c.CI,c.Kw,C.CQ,E.Y3,m.g],encapsulation:2,changeDetection:0})}return o})(),M=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.a4G({type:o});static#n=this.\u0275inj=t.s3X({imports:[s.qQ.forChild([(0,g.VV)(S,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return o})()}}]);