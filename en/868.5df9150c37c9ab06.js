"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[868],{1408:(f,c,e)=>{e.r(c),e.d(c,{NewIngredientModule:()=>S});var r=e(2100),m=e(7552),t=e(4496),u=e(1512),i=e(8212),h=e(1560),v=e(6504),E=e(3797),I=e(8588),d=e(8564),g=e(3480),N=e(8432),p=e(4388),C=e(3616),T=e(9938),M=e(8256);let R=(()=>{class o{constructor(){this.service=(0,t.uUt)(N.K),this.destroy$=(0,t.uUt)(g.UF),this.router=(0,t.uUt)(r.E5),this.route=(0,t.uUt)(r.gV),this.notifications=(0,t.uUt)(p.E),this.loading=(0,t.OCB)(!1)}submit(s){this.loading.set(!0),this.service.create(s).pipe((0,C.a)(this.destroy$)).subscribe({next:n=>{this.notifications.fireSnackBar("Saved ingredient"),this.router.navigate([".."],{relativeTo:this.route})},error:n=>{this.formComponent&&T.y.assignErrorsToForm(this.formComponent.form,n),this.notifications.error((0,M.mk)(n)||"Something went wrong in the save.")}})}cancel(){confirm("Are you sure you want to cancel?")&&this.navigateBack()}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275cmp=t.In1({type:o,selectors:[["app-new-ingredient"]],viewQuery:function(n,a){if(1&n&&t.CC$(d.A,5),2&n){let l;t.wto(l=t.Gqi())&&(a.formComponent=l.first)}},standalone:!0,features:[t.M5G([g.UF]),t.UHJ],decls:8,vars:1,consts:()=>{let s;return s="Create ingredient",[[1,"flex","items-center","justify-between"],s,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(n,a){1&n&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return a.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-ingredient-form",3),t.qCj("cancelled",function(){return a.cancel()})("formSubmit",function($){return a.submit($)}),t.C$Y()),2&n&&(t.yG2(7),t.E7m("loading",a.loading()))},dependencies:[u.w,h.qL,v.sl,i.CI,i.Kw,E.CQ,I.Y3,d.A],encapsulation:2})}return o})(),S=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.a4G({type:o});static#n=this.\u0275inj=t.s3X({imports:[r.qQ.forChild([(0,m.VV)(R,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return o})()},532:(f,c,e)=>{e.d(c,{e:()=>t});var r=e(8400),m=e(2264);class t extends r.w{constructor(i){super(i),this.name=i.name,this.description=i.description,this.status=i.status,this.other=i.other,this.translations={...i.translations},i.image&&(this.image=new m.W(i.image))}}}}]);