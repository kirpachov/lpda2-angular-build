(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[3864],{93864:(G,c,o)=>{"use strict";o.r(c),o.d(c,{NewTagModule:()=>y});var l=o(31236),f=o(7552),t=o(54496),v=o(41512),u=o(58212),d=o(1560),h=o(6504),m=o(83480),p=o(53616),C=o(53797),T=o(70968),N=o(9938),E=o(1128),S=o(38256),M=o(19116),g=o(61700),r=o(11832);let $=(()=>{class e{constructor(){this.service=(0,t.uUt)(M.w),this.destroy$=(0,t.uUt)(m.UF),this.router=(0,t.uUt)(l.E5),this.route=(0,t.uUt)(l.gV),this.notifications=(0,t.uUt)(E.E),this.loading=(0,t.OCB)(!1)}submit(a){this.loading.set(!0),this.service.create(a).pipe((0,p.a)(this.destroy$)).subscribe({next:n=>{this.notifications.fireSnackBar(r.$localize`Tag salvato`),this.router.navigate([".."],{relativeTo:this.route})},error:n=>{this.formComponent&&N.y.assignErrorsToForm(this.formComponent.form,n),this.notifications.error((0,S.mk)(n)||r.$localize`Qualcosa è andato storto nel salvataggio.`)}})}cancel(){confirm(r.$localize`Sei sicuro di voler annullare?`)&&this.navigateBack()}navigateBack(){this.router.navigate([".."],{relativeTo:this.route})}static#t=this.\u0275fac=function(n){return new(n||e)};static#o=this.\u0275cmp=t.In1({type:e,selectors:[["app-new-tag"]],viewQuery:function(n,i){if(1&n&&t.CC$(g.k,5),2&n){let s;t.wto(s=t.Gqi())&&(i.formComponent=s.first)}},standalone:!0,features:[t.M5G([m.UF]),t.UHJ],decls:8,vars:1,consts:()=>{let a;return a=r.$localize`Crea tag`,[[1,"flex","items-center","justify-between"],a,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"loading","cancelled","formSubmit"]]},template:function(n,i){1&n&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return i.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-tag-form",3),t.qCj("cancelled",function(){return i.cancel()})("formSubmit",function(A){return i.submit(A)}),t.C$Y()),2&n&&(t.yG2(7),t.E7m("loading",i.loading()))},dependencies:[v.w,d.qL,h.sl,u.CI,u.Kw,C.CQ,T.Y3,g.k],encapsulation:2,changeDetection:0})}return e})(),y=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#o=this.\u0275mod=t.a4G({type:e});static#n=this.\u0275inj=t.s3X({imports:[l.qQ.forChild([(0,f.VV)($,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return e})()},11832:()=>{}}]);