"use strict";(self.webpackChunklpda2=self.webpackChunklpda2||[]).push([[9492],{9492:(P,c,i)=>{i.r(c),i.d(c,{EditTagModule:()=>R});var r=i(2992),f=i(7552),t=i(4496),h=i(1512),d=i(8212),g=i(1560),v=i(6504),p=i(3797),T=i(8588),m=i(1700),C=i(9116),E=i(3480),$=i(1128),I=i(6700),l=i(3616),y=i(6684),M=i(4e3),S=i(7368),u=i(9212),A=i(8824),G=i(3724),U=i(9938),N=i(8256);let O=(()=>{class a{constructor(){this.service=(0,t.uUt)(C.w),this.destroy$=(0,t.uUt)(E.UF),this.router=(0,t.uUt)(r.E5),this.route=(0,t.uUt)(r.gV),this.notifications=(0,t.uUt)($.E),this.loading=(0,t.OCB)(!1),this.item=(0,t.OCB)(null),this.id$=new I.g(null),this.item$=this.id$.pipe((0,l.a)(this.destroy$),(0,y.I)(o=>null!==o),(0,M.a)(),(0,S.G)(o=>this.service.show(o)),(0,u.y)(()=>this.loading.set(!1)),(0,u.y)(o=>this.item.set(o)))}ngOnInit(){this.item$.pipe((0,l.a)(this.destroy$)).subscribe((0,G.I)()),this.route.params.pipe((0,l.a)(this.destroy$)).subscribe({next:o=>{this.id$.next(o.id)}})}submit(o){const n=this.id$.value;if(!n)throw new Error("Tag ID is not set");this.loading.set(!0),this.service.update(n,o).pipe((0,l.a)(this.destroy$),(0,A.U)(()=>this.loading.set(!1))).subscribe({next:s=>{this.notifications.fireSnackBar("Changes saved."),this.router.navigate([".."],{relativeTo:this.route})},error:s=>{this.formComponent&&U.y.assignErrorsToForm(this.formComponent.form,s),this.notifications.error((0,N.mk)(s)||"Something went wrong in the save.")}})}cancel(){this.router.navigate([".."],{relativeTo:this.route})}static#t=this.\u0275fac=function(n){return new(n||a)};static#i=this.\u0275cmp=t.In1({type:a,selectors:[["app-edit-tag"]],viewQuery:function(n,s){if(1&n&&t.CC$(m.k,5),2&n){let e;t.wto(e=t.Gqi())&&(s.formComponent=e.first)}},standalone:!0,features:[t.UHJ],decls:8,vars:2,consts:()=>{let o;return o="Modify tag",[[1,"flex","items-center","justify-between"],o,["type","button","tuiIconButton","","appearance","icon",3,"click"],[3,"item","loading","cancelled","formSubmit"]]},template:function(n,s){1&n&&(t.I0R(0,"div",0)(1,"h1"),t.SAx(2),t.aS0(3,1),t.k70(),t.C$Y(),t.I0R(4,"button",2),t.qCj("click",function(){return s.cancel()}),t.I0R(5,"mat-icon"),t.OEk(6,"close"),t.C$Y()()(),t.I0R(7,"app-tag-form",3),t.qCj("cancelled",function(){return s.cancel()})("formSubmit",function(D){return s.submit(D)}),t.C$Y()),2&n&&(t.yG2(7),t.E7m("item",s.item())("loading",s.loading()))},dependencies:[h.w,g.qL,v.sl,d.CI,d.Kw,p.CQ,T.Y3,m.k],encapsulation:2})}return a})(),R=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#i=this.\u0275mod=t.a4G({type:a});static#o=this.\u0275inj=t.s3X({imports:[r.qQ.forChild([(0,f.VV)(O,{path:"",closeable:!0,dismissible:!1,size:"l"})])]})}return a})()}}]);